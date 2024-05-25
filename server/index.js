const express = require('express');
const cors = require('cors')
const Groq = require('groq-sdk');

const app = express()
app.use(express.json())
app.use(cors())
const groq = new Groq({apiKey: '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'});

app.get('/message', async (req, res) => {
  const chatCompletion1 = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are an expert in nutrition and meal planning. Create healthy food recipes for a full week (breakfast, lunch, and dinner) based on the user's dietary needs and preferences. Ensure the recipes are nutritious, balanced, and meet the specified nutritional targets. Provide clear, step-by-step instructions for each recipe. Each meal should consist of only one food item, and ensure that the overall daily intake meets the specified protein and calorie targets. Include the macronutrient breakdown (protein, carbs, fats) for each food item. Handle cases where specific targets like kcals or protein amounts are not provided by including generally accepted nutritional guidelines. Do not include snacks in the menu."
      },
      {
        role: "user",
        content: "I am overweight and I want to lose some weight. I am training in the gym regularly. I follow a vegan diet. I like to eat avocados, chickpeas, and spinach."
      },
      {
        role: "assistant",
        content: `**Monday**
- Breakfast: Avocado Toast with Scrambled Tofu (400 kcal, 20g protein, 40g carbs, 20g fat)
  - Toast whole grain bread, mash avocado, and top with scrambled tofu, salt, and pepper
- Lunch: Chickpea and Spinach Salad (400 kcal, 20g protein, 40g carbs, 20g fat)
  - Mix cooked chickpeas, spinach, cherry tomatoes, and a lemon-tahini dressing
- Dinner: Lentil Soup with Whole Grain Bread (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Cook lentils with vegetables and spices, serve with whole grain bread and a side salad
**Tuesday**
- Breakfast: Smoothie Bowl with Banana and Almond Milk (350 kcal, 15g protein, 60g carbs, 15g fat)
  - Blend together banana, almond milk, spinach, and a scoop of vegan protein powder, top with sliced fruit and nuts
- Lunch: Quinoa and Black Bean Bowl with Roasted Vegetables (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Cook quinoa and black beans, roast vegetables like broccoli and sweet potatoes, and serve together
- Dinner: Vegan Chickpea Curry with Brown Rice (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Cook chickpeas in a curry sauce made with coconut milk and spices, serve with brown rice and steamed vegetables
**Wednesday**
- Breakfast: Whole Grain Waffles with Berries and Coconut Whipped Cream (300 kcal, 10g protein, 40g carbs, 15g fat)
  - Make whole grain waffles and top with coconut whipped cream, fresh berries, and a sprinkle of granola
- Lunch: Kale and Avocado Salad with Chickpeas and Whole Grain Croutons (400 kcal, 20g protein, 40g carbs, 20g fat)
  - Mix chopped kale, diced avocado, cooked chickpeas, and a lemon-tahini dressing, serve with whole grain croutons
- Dinner: Vegan Lentil Bolognese with Whole Grain Spaghetti (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Cook lentils in a tomato-based sauce and serve with whole grain spaghetti and steamed broccoli
**Thursday**
- Breakfast: Chia Seed Pudding with Coconut Milk and Fresh Fruit (300 kcal, 10g protein, 40g carbs, 15g fat)
  - Mix chia seeds with coconut milk and let it sit overnight, top with fresh fruit and a sprinkle of granola
- Lunch: Chickpea and Arugula Salad with Lemon-Tahini Dressing (400 kcal, 20g protein, 40g carbs, 20g fat)
  - Mix cooked chickpeas, chopped arugula, and a lemon-tahini dressing, serve with whole grain crackers
- Dinner: Vegan Black Bean Tacos with Avocado Salsa (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Cook black beans and serve in tacos with diced avocado, salsa, and whole grain tortillas
**Friday**
- Breakfast: Whole Grain Pancakes with Maple Syrup and Fresh Berries (300 kcal, 10g protein, 60g carbs, 10g fat)
  - Make whole grain pancakes and top with maple syrup, fresh berries, and a sprinkle of granola
- Lunch: Quinoa and Black Bean Salad with Roasted Vegetables (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Mix cooked quinoa and black beans, roast vegetables like broccoli and sweet potatoes, and serve together
- Dinner: Vegan Lentil Curry with Brown Rice and Naan Bread (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Cook lentils in a curry sauce made with coconut milk and spices, serve with brown rice and whole grain naan bread
**Saturday**
- Breakfast: Smoothie with Banana, Spinach, and Almond Milk (350 kcal, 15g protein, 60g carbs, 15g fat)
  - Blend together banana, spinach, almond milk, and a scoop of vegan protein powder
- Lunch: Chickpea and Avocado Salad with Lemon-Tahini Dressing (400 kcal, 20g protein, 40g carbs, 20g fat)
  - Mix cooked chickpeas, diced avocado, and a lemon-tahini dressing, serve with whole grain crackers
- Dinner: Vegan Vegetable Stir-Fry with Brown Rice (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Stir-fry a variety of vegetables like broccoli, bell peppers, and carrots, serve with brown rice and a side of steamed broccoli
**Sunday**
- Breakfast: Whole Grain Toast with Avocado and Scrambled Tofu (400 kcal, 20g protein, 40g carbs, 20g fat)
  - Toast whole grain bread, mash avocado, and top with scrambled tofu, salt, and pepper
- Lunch: Quinoa and Black Bean Bowl with Roasted Vegetables (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Cook quinoa and black beans, roast vegetables like broccoli and sweet potatoes, and serve together
- Dinner: Lentil Soup with Whole Grain Bread (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Cook lentils with vegetables and spices, serve with whole grain bread and a side salad`
      },
      {
        role: 'user',
        content: "I'm skinny and I'm training in the gym. I want to build muscles mass. For full day I want to have more than 150 grams of protein and 3500 kcals. I follow carnivore diet. I like to eat fish, tomatoes, sweet potatoes."
      },
      {
        role: "assistant",
        content: `**Monday**
- Breakfast: Grilled Salmon with Scrambled Eggs and Sweet Potato Hash (800 kcal, 60g protein, 60g carbs, 40g fat)
  - Grill salmon fillet, scramble eggs, and roast diced sweet potatoes with olive oil and salt
- Lunch: Turkey and Bacon Wrap with Tomatoes (1200 kcal, 80g protein, 80g carbs, 60g fat)
  - Wrap sliced turkey breast, crispy bacon, and diced tomatoes in a whole wheat tortilla
- Dinner: Grilled Steak with Roasted Sweet Potatoes and Broccoli (1400 kcal, 100g protein, 60g carbs, 70g fat)
  - Grill steak to desired doneness, roast sweet potatoes with olive oil and salt, and steam broccoli

**Tuesday**
- Breakfast: Fish Oil Smoothie with Protein Powder and Banana (600 kcal, 50g protein, 60g carbs, 30g fat)
  - Blend fish oil, protein powder, banana, and almond milk
- Lunch: Chicken Breast with Sweet Potato Fries and Tomato Salad (1200 kcal, 80g protein, 80g carbs, 60g fat)
  - Grill chicken breast, bake sweet potato fries with olive oil and salt, and mix diced tomatoes with olive oil and basil
- Dinner: Pork Chops with Roasted Sweet Potatoes and Green Beans (1400 kcal, 100g protein, 60g carbs, 70g fat)
  - Grill pork chops to desired doneness, roast sweet potatoes with olive oil and salt, and steam green beans

**Wednesday**
- Breakfast: Beef and Sweet Potato Hash with Scrambled Eggs (800 kcal, 60g protein, 60g carbs, 40g fat)
  - Grill beef strips, scramble eggs, and roast diced sweet potatoes with olive oil and salt
- Lunch: Turkey Meatball Sub with Marinara Sauce and Sweet Potato Fries (1200 kcal, 80g protein, 80g carbs, 60g fat)
  - Grill turkey meatballs, serve on a sub roll with marinara sauce, and bake sweet potato fries with olive oil and salt
- Dinner: Grilled Salmon with Sweet Potato Mash and Steamed Asparagus (1400 kcal, 100g protein, 60g carbs, 70g fat)
  - Grill salmon fillet, mash roasted sweet potatoes with butter and milk, and steam asparagus

**Thursday**
- Breakfast: Chicken and Sweet Potato Omelette (600 kcal, 50g protein, 60g carbs, 30g fat)
  - Whip eggs with salt and pepper, add diced chicken breast and sweet potatoes, and cook into an omelette
- Lunch: Beef and Tomato Kabobs with Sweet Potato Wedges (1200 kcal, 80g protein, 80g carbs, 60g fat)
  - Grill beef strips and kabob with cherry tomatoes, serve with baked sweet potato wedges
- Dinner: Pork Tenderloin with Roasted Sweet Potatoes and Green Beans (1400 kcal, 100g protein, 60g carbs, 70g fat)
  - Grill pork tenderloin to desired doneness, roast sweet potatoes with olive oil and salt, and steam green beans
**Friday**
- Breakfast: Fish Oil Smoothie with Protein Powder and Banana (600 kcal, 50g protein, 60g carbs, 30g fat)
  - Blend fish oil, protein powder, banana, and almond milk
- Lunch: Chicken Caesar Wrap with Sweet Potato Fries (1200 kcal, 80g protein, 80g carbs, 60g fat)
  - Wrap grilled chicken breast, romaine lettuce, and parmesan cheese in a whole wheat tortilla, and bake sweet potato fries with olive oil and salt
- Dinner: Grilled Steak with Roasted Sweet Potatoes and Broccoli (1400 kcal, 100g protein, 60g carbs, 70g fat)
  - Grill steak to desired doneness, roast sweet potatoes with olive oil and salt, and steam broccoli
**Saturday**
- Breakfast: Beef and Sweet Potato Hash with Scrambled Eggs (800 kcal, 60g protein, 60g carbs, 40g fat)
  - Grill beef strips, scramble eggs, and roast diced sweet potatoes with olive oil and salt
- Lunch: Turkey and Bacon Wrap with Tomatoes (1200 kcal, 80g protein, 80g carbs, 60g fat)
  - Wrap sliced turkey breast, crispy bacon, and diced tomatoes in a whole wheat tortilla
- Dinner: Grilled Salmon with Sweet Potato Mash and Steamed Asparagus (1400 kcal, 100g protein, 60g carbs, 70g fat)
  - Grill salmon fillet, mash roasted sweet potatoes with butter and milk, and steam asparagus
**Sunday**
- Breakfast: Chicken and Sweet Potato Omelette (600 kcal, 50g protein, 60g carbs, 30g fat)
  - Whip eggs with salt and pepper, add diced chicken breast and sweet potatoes, and cook into an omelette
- Lunch: Beef and Tomato Kabobs with Sweet Potato Wedges (1200 kcal, 80g protein, 80g carbs, 60g fat)
  - Grill beef strips and kabob with cherry tomatoes, serve with baked sweet potato wedges
- Dinner: Pork Chops with Roasted Sweet Potatoes and Green Beans (1400 kcal, 100g protein, 60g carbs, 70g fat)
  - Grill pork chops to desired doneness, roast sweet potatoes with olive oil and salt, and steam green beans`
      },
      {
        role: "user",
        content: "I'm maintaining my current weight. For a full day, I want to have around 2000 kcals. I follow a balanced diet. I like to eat avocados, chickpeas, and spinach."
      }
    ],
    model: "llama3-70b-8192",
    temperature: 1,
    max_tokens: 3530,
    top_p: 1,
    stream: true,
    stop: null
  })

  let text1 = ''

  for await (const chunk of chatCompletion1) {
    text1 += chunk.choices[0]?.delta?.content || '';
  }

  console.log(text1)

  const chatCompletion2 = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are an expert in extracting and organizing meal plans. Your task is to convert a given meal plan text into a structured array format. Each day of the week should be included as an object in the array, with meals for breakfast, lunch, and dinner specified. Each meal should contain the meal name and clear instructions for preparation. Ensure that the output is in a consistent and readable format.

Example user prompt: "Here is a sample meal plan that meets your requirements: Monday ... Sunday"

Output Format:
[
    {
        "day": "Monday",
        "meals": [
            {
                "meal": "Breakfast",
                "name": "Avocado Toast with Scrambled Eggs and Spinach",
                "instructions": "Toast whole grain bread, mash avocado, scramble eggs, and add fresh spinach"
            },
            {
                "meal": "Lunch",
                "name": "Chickpea and Spinach Salad with Whole Grain Pita",
                "instructions": "Mix cooked chickpeas, chopped spinach, and a vinaigrette dressing, serve with whole grain pita"
            },
            {
                "meal": "Dinner",
                "name": "Grilled Chicken Breast with Roasted Vegetables and Quinoa",
                "instructions": "Grill chicken breast, roast a variety of vegetables like broccoli and carrots, and serve with cooked quinoa"
            }
        ]
    },
    ...
]`
      },
      {
        role: "user",
        content: `Here's a 7-day meal plan tailored to your preferences and dietary needs:

**Monday**
- Breakfast: Avocado Toast with Scrambled Eggs (400 kcal, 20g protein, 40g carbs, 20g fat)
  - Toast whole grain bread, mash avocado, and top with scrambled eggs, salt, and pepper
- Lunch: Chickpea and Spinach Salad with Whole Grain Pita (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Mix cooked chickpeas, chopped spinach, and a lemon-tahini dressing, serve with whole grain pita
- Dinner: Grilled Chicken Breast with Roasted Vegetables (600 kcal, 40g protein, 40g carbs, 20g fat)
  - Grill chicken breast to desired doneness, roast a variety of vegetables like broccoli and sweet potatoes

**Tuesday**
- Breakfast: Smoothie with Banana, Spinach, and Almond Milk (350 kcal, 15g protein, 60g carbs, 15g fat)
  - Blend together banana, spinach, almond milk, and a scoop of protein powder
- Lunch: Avocado and Chickpea Wrap with Mixed Greens (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Spread mashed avocado on a whole grain tortilla, fill with chickpeas, mixed greens, and a sprinkle of feta cheese
- Dinner: Baked Salmon with Quinoa and Steamed Asparagus (600 kcal, 40g protein, 40g carbs, 20g fat)
  - Bake salmon fillet with lemon and herbs, cook quinoa according to package instructions, and steam asparagus

**Wednesday**
- Breakfast: Whole Grain Waffles with Avocado and Scrambled Eggs (400 kcal, 20g protein, 40g carbs, 20g fat)
  - Make whole grain waffles, top with mashed avocado and scrambled eggs, and a sprinkle of red pepper flakes
- Lunch: Chickpea and Spinach Salad with Whole Grain Crackers (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Mix cooked chickpeas, chopped spinach, and a lemon-tahini dressing, serve with whole grain crackers
- Dinner: Grilled Chicken Breast with Roasted Sweet Potatoes and Green Beans (600 kcal, 40g protein, 40g carbs, 20g fat)
  - Grill chicken breast to desired doneness, roast sweet potatoes with olive oil and salt, and steam green beans

**Thursday**
- Breakfast: Avocado Toast with Poached Eggs (350 kcal, 15g protein, 40g carbs, 20g fat)
  - Toast whole grain bread, mash avocado, and top with poached eggs, salt, and pepper
- Lunch: Chickpea and Avocado Salad with Whole Grain Pita (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Mix cooked chickpeas, diced avocado, and a lemon-tahini dressing, serve with whole grain pita
- Dinner: Baked Chicken Thighs with Roasted Broccoli and Quinoa (600 kcal, 40g protein, 40g carbs, 20g fat)
  - Bake chicken thighs with olive oil and herbs, roast broccoli with olive oil and salt, and cook quinoa according to package instructions

**Friday**
- Breakfast: Smoothie with Banana, Spinach, and Almond Milk (350 kcal, 15g protein, 60g carbs, 15g fat)
  - Blend together banana, spinach, almond milk, and a scoop of protein powder
- Lunch: Avocado and Chickpea Wrap with Mixed Greens (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Spread mashed avocado on a whole grain tortilla, fill with chickpeas, mixed greens, and a sprinkle of feta cheese
- Dinner: Grilled Salmon with Roasted Asparagus and Brown Rice (600 kcal, 40g protein, 40g carbs, 20g fat)
  - Grill salmon fillet with lemon and herbs, roast asparagus with olive oil and salt, and cook brown rice according to package instructions

**Saturday**
- Breakfast: Whole Grain Pancakes with Avocado and Scrambled Eggs (400 kcal, 20g protein, 40g carbs, 20g fat)
  - Make whole grain pancakes, top with mashed avocado and scrambled eggs, and a sprinkle of maple syrup
- Lunch: Chickpea and Spinach Salad with Whole Grain Crackers (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Mix cooked chickpeas, chopped spinach, and a lemon-tahini dressing, serve with whole grain crackers
- Dinner: Grilled Chicken Breast with Roasted Sweet Potatoes and Green Beans (600 kcal, 40g protein, 40g carbs, 20g fat)
  - Grill chicken breast to desired doneness, roast sweet potatoes with olive oil and salt, and steam green beans

**Sunday**
- Breakfast: Avocado Toast with Scrambled Eggs (400 kcal, 20g protein, 40g carbs, 20g fat)
  - Toast whole grain bread, mash avocado, and top with scrambled eggs, salt, and pepper
- Lunch: Chickpea and Avocado Salad with Whole Grain Pita (500 kcal, 20g protein, 60g carbs, 20g fat)
  - Mix cooked chickpeas, diced avocado, and a lemon-tahini dressing, serve with whole grain pita
- Dinner: Baked Chicken Thighs with Roasted Broccoli and Quinoa (600 kcal, 40g protein, 40g carbs, 20g fat)
  - Bake chicken thighs with olive oil and herbs, roast broccoli with olive oil and salt, and cook quinoa according to package instructions

This meal plan provides approximately 2000 kcal per day, with a balance of protein, carbohydrates, and fat. It also includes a variety of fruits and vegetables, who
le grains, and lean protein sources.`
      },
      {
        role: "assistant",
        content: `[
    {
        "day": "Monday",
        "meals": [
            {
                "meal": "Breakfast",
                "name": "Avocado Toast with Scrambled Eggs",
                "instructions": "Toast whole grain bread, mash avocado, and top with scrambled eggs, salt, and pepper"
            },
            {
                "meal": "Lunch",
                "name": "Chickpea and Spinach Salad with Whole Grain Pita",
                "instructions": "Mix cooked chickpeas, chopped spinach, and a lemon-tahini dressing, serve with whole grain pita"
            },
            {
                "meal": "Dinner",
                "name": "Grilled Chicken Breast with Roasted Vegetables",
                "instructions": "Grill chicken breast to desired doneness, roast a variety of vegetables like broccoli and sweet potatoes"
            }
        ]
    },
    {
        "day": "Tuesday",
        "meals": [
            {
                "meal": "Breakfast",
                "name": "Smoothie with Banana, Spinach, and Almond Milk",
                "instructions": "Blend together banana, spinach, almond milk, and a scoop of protein powder"
            },
            {
                "meal": "Lunch",
                "name": "Avocado and Chickpea Wrap with Mixed Greens",
                "instructions": "Spread mashed avocado on a whole grain tortilla, fill with chickpeas, mixed greens, and a sprinkle of feta cheese"
            },
            {
                "meal": "Dinner",
                "name": "Baked Salmon with Quinoa and Steamed Asparagus",
                "instructions": "Bake salmon fillet with lemon and herbs, cook quinoa according to package instructions, and steam asparagus"
            }
        ]
    },
    {
        "day": "Wednesday",
        "meals": [
            {
                "meal": "Breakfast",
                "name": "Whole Grain Waffles with Avocado and Scrambled Eggs",
                "instructions": "Make whole grain waffles, top with mashed avocado and scrambled eggs, and a sprinkle of red pepper flakes"
            },
            {
                "meal": "Lunch",
                "name": "Chickpea and Spinach Salad with Whole Grain Crackers",
                "instructions": "Mix cooked chickpeas, chopped spinach, and a lemon-tahini dressing, serve with whole grain crackers"
            },
            {
                "meal": "Dinner",
                "name": "Grilled Chicken Breast with Roasted Sweet Potatoes and Green Beans",
                "instructions": "Grill chicken breast to desired doneness, roast sweet potatoes with olive oil and salt, and steam green beans"
            }
        ]
    },
    {
        "day": "Thursday",
        "meals": [
            {
                "meal": "Breakfast",
                "name": "Avocado Toast with Poached Eggs",
                "instructions": "Toast whole grain bread, mash avocado, and top with poached eggs, salt, and pepper"
            },
            {
                "meal": "Lunch",
                "name": "Chickpea and Avocado Salad with Whole Grain Pita",
                "instructions": "Mix cooked chickpeas, diced avocado, and a lemon-tahini dressing, serve with whole grain pita"
            },
            {
                "meal": "Dinner",
                "name": "Baked Chicken Thighs with Roasted Broccoli and Quinoa",
                "instructions": "Bake chicken thighs with olive oil and herbs, roast broccoli with olive oil and salt, and cook quinoa according to package instruct
ions"
            }
        ]
    },
    {
        "day": "Friday",
        "meals": [
            {
                "meal": "Breakfast",
                "name": "Smoothie with Banana, Spinach, and Almond Milk",
                "instructions": "Blend together banana, spinach, almond milk, and a scoop of protein powder"
            },
            {
                "meal": "Lunch",
                "name": "Avocado and Chickpea Wrap with Mixed Greens",
                "instructions": "Spread mashed avocado on a whole grain tortilla, fill with chickpeas, mixed greens, and a sprinkle of feta cheese"
            },
            {
                "meal": "Dinner",
                "name": "Grilled Salmon with Roasted Asparagus and Brown Rice",
                "instructions": "Grill salmon fillet with lemon and herbs, roast asparagus with olive oil and salt, and cook brown rice according to package instruc
tions"
            }
        ]
    },
    {
        "day": "Saturday",
        "meals": [
            {
                "meal": "Breakfast",
                "name": "Whole Grain Pancakes with Avocado and Scrambled Eggs",
                "instructions": "Make whole grain pancakes, top with mashed avocado and scrambled eggs, and a sprinkle of maple syrup"
            },
            {
                "meal": "Lunch",
                "name": "Chickpea and Spinach Salad with Whole Grain Crackers",
                "instructions": "Mix cooked chickpeas, chopped spinach, and a lemon-tahini dressing, serve with whole grain crackers"
            },
            {
                "meal": "Dinner",
                "name": "Grilled Chicken Breast with Roasted Sweet Potatoes and Green Beans",
                "instructions": "Grill chicken breast to desired doneness, roast sweet potatoes with olive oil and salt, and steam green beans"
            }
        ]
    },
    {
        "day": "Sunday",
        "meals": [
            {
                "meal": "Breakfast",
                "name": "Avocado Toast with Scrambled Eggs",
                "instructions": "Toast whole grain bread, mash avocado, and top with scrambled eggs, salt, and pepper"
            },
            {
                "meal": "Lunch",
                "name": "Chickpea and Avocado Salad with Whole Grain Pita",
                "instructions": "Mix cooked chickpeas, diced avocado, and a lemon-tahini dressing, serve with whole grain pita"
            },
            {
                "meal": "Dinner",
                "name": "Baked Chicken Thighs with Roasted Broccoli and Quinoa",
                "instructions": "Bake chicken thighs with olive oil and herbs, roast broccoli with olive oil and salt, and cook quinoa according to package instruct
ions"
            }
        ]
    }
]`
      },
      {
        role: "user",
        content: text1
      }
    ],
    model: "llama3-70b-8192",
    temperature: 1,
    max_tokens: 3530,
    top_p: 1,
    stream: true,
    stop: null
  })

  let text2 = ''

  for await (const chunk of chatCompletion2) {
    text2 += chunk.choices[0]?.delta?.content || '';
  }

  console.log(extractSubstring(text2))

  const data = JSON.parse(extractSubstring(text2))
  res.status(200).json(data)
})

function extractSubstring(str) {
  // Find the index of the first '['
  const firstIndex = str.indexOf('[');
  // Find the index of the last ']'
  const lastIndex = str.lastIndexOf(']');

  // Check if both '[' and ']' are present in the string
  if (firstIndex !== -1 && lastIndex !== -1 && firstIndex < lastIndex) {
    // Extract and return the substring
    return str.substring(firstIndex, lastIndex + 1);
  } else {
    // Return an empty string if the conditions are not met
    return '';
  }
}


app.listen(8000, () => {
  console.log('Listening on port 8000...')
})