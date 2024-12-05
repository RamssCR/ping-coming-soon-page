import { useState } from 'react'
import { handleSubmit } from '../utils/handleSubmit'

function RegisterForm() {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    return (
        <form className="flex flex-col gap-3 items-center w-full lg:grid lg:grid-cols-3/4 lg:items-start" onSubmit={(e) => {
            e.preventDefault()
            setError(handleSubmit(email))
        }}>
            <div className="flex flex-col gap-2 w-full">
                <input 
                    type="text" 
                    id="email" 
                    className={`w-full border ${!error ? 'border-blue-100' : 'border-red-500'} px-10 py-4 rounded-full placeholder:text-gray-300 outline-none`} 
                    placeholder="Your email address..."
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                />
                {error && <span className="pl-4 italic text-sm text-red-600">{error}</span>}
            </div>
            <input 
                type="submit" 
                value="Notify Me"
                className="w-full bg-blueishViolet text-white font-medium shadow-lg shadow-blue-200 py-4 rounded-full hover:cursor-pointer hover:brightness-105"
            />
        </form>
    )
}

export default RegisterForm