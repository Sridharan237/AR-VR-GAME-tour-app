import React from 'react'
import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from '../Home/Home'
import Community from '../Community/Community'
import UserProfile from '../UserProfile/UserProfile'

export default function Navbar() {
  const [isLoggedIn, setLogin] = useState<boolean>(false)

  return (
    <BrowserRouter>
<div id="navbar-root">
<div className="items-center fixed top-0 flex w-full flex-row flex-wrap justify-between bg-[#e2cecd] shadow py-1">
    <div className="flex flex-row gap-3 relative">
<div className="flex items-center h-[50px] w-[54px] text-white text-2xl font-serif font-semibold border border-white bg-[#2c3067] rounded-full dark:text-white px-2 mr-12">GX</div>
    <nav>
      <ul>
        <div className="flex flex-row gap-56 mt-2">
          <li className="flex rounded-full px-16 py-1 font-semibold tracking-tight text-xl hover:bg-yellow-700">
            <Link to="/Home">Home</Link>
          </li>
          <li className="flex rounded-full px-16 py-1 font-semibold tracking-tight text-xl hover:bg-yellow-700">
            <Link to="/Community">Communities</Link>
          </li>
          <li className="flex rounded-full p-16 py-1 font-semibold tracking-tight text-xl hover:bg-yellow-700">
            <Link to="/UserProfile">User Profile</Link>
          </li>
        </div>
      </ul>
    </nav>
  </div>

      {(isLoggedIn == false)?
      (
        <div className="flex flex-row gap-12">
          <button className="rounded-full px-5 py-2 font-semibold tracking-tight text-xl bg-blue-500 hover:bg-red-500" onClick={() => {
            setLogin(!isLoggedIn);
          }}>Login</button>
          <button className="rounded-full px-5 py-2 font-semibold tracking-tight text-xl bg-blue-500 hover:bg-red-500 mr-3" onClick={() => {
            setLogin(!isLoggedIn);
            
          }}>Sign Up</button>
        </div>
      )
      :(
        <button className="rounded-full px-5 py-2 font-semibold tracking-tight text-xl bg-blue-500 hover:bg-red-500 mr-3" onClick={() => {
          setLogin(!isLoggedIn);
        }}>Logout</button>
      )
      }

  </div>
</div>
        <Routes>
          <Route path="/Home" Component={Home} />
          <Route path="/Community" Component={Community} />
          <Route path="/UserProfile" Component={UserProfile} />
        </Routes>
</BrowserRouter>
  )
}
