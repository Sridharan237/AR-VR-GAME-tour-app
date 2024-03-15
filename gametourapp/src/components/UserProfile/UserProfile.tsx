import React from 'react'

export default function UserProfile() {



  return (
    <div className="flex flex-col items-center justify-center">
<div  className="text-3xl font-bold font-serif mt-6 -mb-6">
  Profile
</div>
<div className="max-w-2xl mx-4 sm:max-w-sm h-80 md:max-w-sm lg:max-w-sm  xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-[#f8ecec] border border-spacing-4 border-[#e5d8d7] shadow-xl rounded-lg text-gray-900">
    <div className="rounded-t-lg h-36 overflow-hidden">
        <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
    </div>
    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover  object-center h-32" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHT8sg40PQXpah1fzWlCFgWYSaiUhSFHoT4A&usqp=CAU' alt='profile_picture' />
    </div>
    <div className="text-center mt-2">
        <h2 className="font-semibold">user name</h2>
        <p className="text-gray-500">email</p>
        <p className="text-gray-500">status</p>
    </div>
</div>
</div>
  )
}
