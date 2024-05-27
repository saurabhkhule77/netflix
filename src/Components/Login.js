import Header from "./Header"
import {useState} from 'react'
const Login = ()=>{
    const [signIn, setSignIn] = useState(true)

    function toggelSignIn(){
        setSignIn(!signIn)
    }

    return(
        <div>
        <Header/>
        <div>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            alt=''/>
        </div>
        <div className="absolute left-0 right-0 mx-auto my-36 top-0  bg-black bg-opacity-90 w-[450px] h-auto text-white">
            <form className="w-[80%] mx-auto">
                <h1 className="font-bold text-3xl my-10 ">{signIn? "Sign In":"Sign Up"}</h1>
                {signIn || <input placeholder="Enter Name" className="w-full mb-5 h-10 rounded-md bg-transparent border px-3  border-white" type="name" name="name"/>}
                <input placeholder="Email or mobile number" className="w-full mb-5 h-10 rounded-md bg-transparent border px-3  border-white" type="email" name="email"/>
                <input placeholder="Password" className='w-full mb-5 h-10 rounded-md bg-transparent border border-white px-3'type="password" name="password"/>
                <button type="submit" className="rounded-md bg-red-600 text-white w-full h-10">{signIn?"Sign In":"Sign Up"}</button>
                
                {signIn && 
                <div>
                <h1 className="my-5 text-gray-300 text-center">OR</h1>
                <button type="submit" className="rounded-md bg-gray-300 bg-opacity-20 text-white w-full h-10">Use a sign-in code</button>
                <h1 className="mt-4 text-center cursor-pointer">Forgot password?</h1>
                </div>
                }

                <div className="flex place-items-center my-4 "> <input type='checkbox' name="checkbox"  className="h-5 w-5 cursor-pointer"/>
                <h1 className="mx-3">Remember me</h1></div>
                <div className="flex mt-4 mb-10 ">
                    
                    <h1>{signIn? "New to Netflix?":"Already registered?"}</h1>
                <h1 onClick={()=>{toggelSignIn()}} className="font-bold mx-1 cursor-pointer"> {signIn ? "Sign up now.":"Sign in now."}</h1>
                </div>
               
            </form>
        </div>
        </div>
    )
}
export default Login