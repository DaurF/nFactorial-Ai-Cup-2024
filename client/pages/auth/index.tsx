import {Key, useEffect, useState} from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody} from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import {useRouter} from "next/router";
import {useUserStore} from "@/providers/user-store-provider";

export default function DocsPage() {
  const router = useRouter()
  const [selected, setSelected] = useState("login");

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {set_user} = useUserStore((state) => state)

  function clearForm() {
    setEmail('')
    setUsername('')
    setPassword('')
  }

  useEffect(() => {
    clearForm()
  }, [selected])

  async function register(e: Event) {
    e.preventDefault()

    const res = await fetch('https://nfactorial-ai-cup-2024-eqzu.onrender.com/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, username, password})
    })
    const data = await res.json();

    if (data.username) {
      if (typeof window !== "undefined") {
        localStorage.setItem('username', data.username)
      }
      set_user(data.username)
      await router.push('/')
    }
    clearForm()

  }

  async function login(e: Event) {
    e.preventDefault()

    const res = await fetch('https://nfactorial-ai-cup-2024-eqzu.onrender.com/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    const data = await res.json();

    if (data.username) {
      if (typeof window !== "undefined") {
        localStorage.setItem('username', data.username)
      }
      set_user(data.username)
      await router.push('/')
    }
    clearForm()
  }


  // @ts-ignore
  // @ts-ignore
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <div className="flex flex-col w-full">
            <Card className="max-w-full w-[340px] h-[400px]">
              <CardBody className="overflow-hidden">
                <Tabs
                  fullWidth
                  size="md"
                  aria-label="Tabs form"
                  selectedKey={selected}
                  onSelectionChange={(key: any) => setSelected(key)}
                >
                  <Tab key="login" title="Login">
                    <form className="flex flex-col gap-4">
                      <Input isRequired label="Email" placeholder="Enter your email" type="email" value={email}
                             onChange={(e) => setEmail(e.target.value)}/>
                      <Input
                        isRequired
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <p className="text-center text-small">
                        Need to create an account?{" "}
                        <Link size="sm" onPress={() => setSelected("sign-up")}>
                          Sign up
                        </Link>
                      </p>
                      <div className="flex gap-2 justify-end">
                        <Button fullWidth color="primary" onClick={login}>
                          Login
                        </Button>
                      </div>
                    </form>
                  </Tab>
                  <Tab key="sign-up" title="Sign up">
                    <form className="flex flex-col gap-4 h-[300px]">
                      <Input isRequired label="Name" placeholder="Enter your name" value={username}
                             onChange={(e) => setUsername(e.target.value)}/>
                      <Input isRequired label="Email" placeholder="Enter your email" type="email" value={email}
                             onChange={(e) => setEmail(e.target.value)}/>
                      <Input
                        isRequired
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <p className="text-center text-small">
                        Already have an account?{" "}
                        <Link size="sm" onPress={() => setSelected("login")}>
                          Login
                        </Link>
                      </p>
                      <div className="flex gap-2 justify-end">
                        <Button fullWidth color="primary" onClick={register}>
                          Sign up
                        </Button>
                      </div>
                    </form>
                  </Tab>
                </Tabs>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
