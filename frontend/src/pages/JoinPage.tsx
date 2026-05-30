import { Form } from '../components/ui/Form'
import { TextField } from '../components/ui/TextField'
import { Button } from '../components/ui/Button'
import JoinNavbar from '../components/JoinNavbar'
import React from 'react'

export default function JoinPage(){
    const [joinCode, setJoinCode] = React.useState('')
    function handleJoinQuiz(_formData: FormData){
        //TODO: Implement the logic to join the quiz using the join code
        // For now, we will just log the join code to the console
        console.log('Joining quiz with code:', joinCode)
        //Usually, you would want to navigate the user to the quiz page after successfully joining the quiz
    }
    return (
        <main className='min-h-screen flex flex-col'>
            <JoinNavbar />
            <section className='flex flex-1 flex-col items-center justify-center gap-4 bg-white p-4 text-gray-900 dark:bg-black dark:text-white'>
                <h1 className='text-xl font-bold'>Welcome to the Quiz App</h1>
                <div className='flex flex-col items-center gap-2'>
                    <Form className='flex flex-col gap-1' action={handleJoinQuiz}>
                        <TextField
                            aria-label='Enter a join code'
                            placeholder='Enter a join code'
                            value={joinCode}
                            onChange={setJoinCode}
                            minLength={6}
                            maxLength={6}
                        />
                        <Button type='submit'>Join Quiz</Button>
                    </Form>
                </div>
            </section>
        </main>
    )
}
