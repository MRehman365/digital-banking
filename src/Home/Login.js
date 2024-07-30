import React from 'react'
import img1 from '../Assets/3.jpg'
import '../App.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-background login">
              <div className="hidden md:block w-1/2 p-10">
                <img src={img1} alt="Illustration of a user logging in" className="w-full" />
              </div>
              <div className="w-full h-full flex items-center justify-center md:w-1/2 p-6 ">
              <div className='bg-white p-20 rounded-lg'>
                <h2 className="text-2xl font-bold text-primary text-center mb-2">Welcome to PCT Pay! 👋</h2>
                <p className="text-muted-foreground text-center mb-2">Enter your email & password to login</p>
                <form className="mt-4 flex flex-col gap-2">
                  <div className="mb-4">
                    <label htmlFor="mobile" className="block text-sm font-medium text-primary">
                      Mobile Number
                    </label>
                    <input type="text" id="mobile" placeholder="Mobile Number" className="mt-1 block w-full p-2 bg-white border border-[gray] rounded-md" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-primary">
                      Password
                    </label>
                    <input type="password" id="password" placeholder="Password" className="mt-1 block w-full p-2 bg-white border border-[gray] rounded-md " required />
                  </div>
                  <button type="submit" className="w-full bg-[#8821cd] text-white p-2 rounded-full hover:bg-primary/80">
                    Login
                  </button>
                </form>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Not a member?{' '}
                    <Link  className="text-[#8821cd]">
                      SIGN UP
                    </Link>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <Link className="text-[blue]">
                      Forgot Password?
                    </Link>
                  </p>
                </div>
              </div>
              </div>
            </div>
    </div>
  )
}

export default Login
