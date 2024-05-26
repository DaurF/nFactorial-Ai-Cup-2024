import {
  button as buttonStyle,
  Button,
  button as buttonStyles,
  Card,
  CardBody,
  Snippet,
  Divider
} from "@nextui-org/react";
import DefaultLayout from "../../layouts/default";
import {useEffect, useState} from 'react'
import {MdiMicrophone} from "@/components/mdimicrophone";
import {MaterialSymbolsStop} from "@/components/stopicon";
import {CardHeader} from "@nextui-org/card";
import {RetellWebClient} from "retell-client-js-sdk";
import {useUserStore} from "@/providers/user-store-provider";


export default function DocsPage() {
  const agentId = 'ea8f159cac00b0db2e47b20f6c772780'
  const webClient = new RetellWebClient();
  const [isCalling, setIsCalling] = useState(false)
  const [prompt, setPrompt] = useState('')

  const [planForDays, setPlanForDays] = useState(() => {
    const dates = []
    for (let i = 0; i < 7; i++) {
      const today = new Date()
      today.setDate(today.getDate() + i)
      dates.push({date: today, meals: [], id: i})
    }
    return dates
  })
  const [selDayPlan, setSelDayPlay] = useState(planForDays[0])

  const {username} = useUserStore(state => state)


  async function addMealsToDB(meals: any[]) {
    const res = await fetch('http://localhost:8000/api/v1/meals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        meals
      } as any)
    })
  }

  async function setupMeals() {
    const res = await fetch('http://localhost:8000/api/v1/groq', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({prompt: localStorage.getItem('prompt')})
    })

    const data = await res.json();
    const updatePlanForDays = planForDays.map(plan => ({...plan, meals: data[plan.id].meals}))
    // setPlanForDays((plans => plans.map(plan => ({...plan, meals: data[plan.id].meals}))))
    setPlanForDays(updatePlanForDays)
    // await addMealsToDB(updatePlanForDays)

  }

  // Setup event listeners
  webClient.on("conversationStarted", () => {
    console.log("conversationStarted");
  });

  webClient.on("audio", (audio: Uint8Array) => {
    console.log("There is audio");
  });

  webClient.on("conversationEnded", async ({code, reason}) => {
    console.log("Closed with code:", code, ", reason:", reason);
    console.log('conversationEnded: ', prompt);
    setIsCalling(false); // Update button to "Start" when conversation ends
    await setupMeals()
  });

  webClient.on("error", (error) => {
    console.error("An error occurred:", error);
    setIsCalling(false); // Update button to "Start" in case of error
  });

  webClient.on("update", (update) => {
    // Print live transcript as needed
    let upd = ''
    for (const x of update.transcript) {
      upd += x.content;
    }
    console.log(prompt)
    console.log(upd);
    console.log(update)
    if (typeof window !== 'undefined') {
      localStorage.setItem('prompt', upd)
    }
    // setLastUpdate(update['transcript'].map(x => {
    //   content: x.content
    // }))
  });


  const toggleConversation = async () => {
    if (isCalling) {
      webClient.off('conversationEnded')
    } else {
      const registerCallResponse = await registerCall(agentId);
      if (registerCallResponse.callId) {
        webClient
          .startConversation({
            callId: registerCallResponse.callId,
            sampleRate: registerCallResponse.sampleRate,
            enableUpdate: true,
          })
          .catch(console.error);
        setIsCalling(true); // Update button to "Stop" when conversation starts
      }
    }
  };

  async function registerCall(agentId: string) {
    try {
      const response = await fetch('http://localhost:8000/api/v1/retell/register-call', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          agentId
        })
      }) as any

      // if (!response.ok) {
      //   throw new Error(`Error: ${response.status}`);
      // }

      return await response.json()
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  let day_names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


  useEffect(() => {
    const getMeals = async () => {
      const response = await fetch(`http://localhost:8000/api/v1/meals/${username}`)
      const data = await response.json()

      const updatedState = planForDays.map((stateEntry: any) => {
        const dateStr = stateEntry.date.toISOString().split('T')[0];
        const mealsForDate = data
          .filter((entry: any) => entry.meal_date.split('T')[0] === dateStr)
          .map((entry: any) => ({
            meal: entry.meal.toLowerCase(),
            name: entry.name,
            instructions: entry.instructions
          }));

        return {
          ...stateEntry,
          meals: mealsForDate
        };
      });

      setPlanForDays(updatedState);
      setSelDayPlay(updatedState[0])
    }
    getMeals()
  }, []);


  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 relative">
        <div className="flex items-center ">
          {
            planForDays.map(el =>
              <Button
                onClick={() => setSelDayPlay(el)}
                key={el.id}
                className={`${buttonStyle({variant: 'light', size: 'lg'})} py-10 hover:text-white ${el.id === selDayPlan.id ? 'text-white' : 'text-gray-500'}`}>
                <div className=''>
                  <p className='text-2xl font-semibold'>{el.date.getDate()}</p>
                  <p>{day_names[el.date.getDay()]}</p>
                </div>
              </Button>
            )
          }
        </div>
        <Divider/>
        <Button className={`${buttonStyles({
          radius: "full",
          variant: "shadow",
          color: isCalling ? 'danger' : 'primary',
          size: 'lg'
        })} right-0 top-4 absolute`} onClick={toggleConversation}>
          {isCalling ? <MaterialSymbolsStop/> : <MdiMicrophone className="text-4xl"/>}
        </Button>
        <div className="flex gap-6 mt-12">
          {selDayPlan.meals.length > 0 && selDayPlan.meals.map((el: any) => (<Card key={el.name} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{el.meal}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <h4 className="font-semibold text-medium">{el.name}</h4>
              <small className="text-default-500">{el.instructions}</small>
            </CardBody>
          </Card>))}
          {selDayPlan.meals.length === 0 &&
            <Snippet color="default">There were no prescriptions scheduled for this date</Snippet>
          }
        </div>
      </section>
    </DefaultLayout>
  );
}
