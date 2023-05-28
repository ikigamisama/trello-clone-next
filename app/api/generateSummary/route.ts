import openai from "@/openai"
import { NextResponse } from "next/server";


export async function POST(request: Request){
    const { todos } = await request.json()

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: 'system',
                content: 'When responding, welcome the user always as Mr. Ikigami and say welcome to the Iks Development Todo App! Limit the response to 200 characters'
            },
            {
                role: 'user',
                content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To Do, In Progress and Done, then tell user to have a productive data Here's the data ${JSON.stringify(todos)}`
            }
        ]
    })

    const { data } = response;

    console.log(response.data)

    return NextResponse.json(data.choices[0].message)
}