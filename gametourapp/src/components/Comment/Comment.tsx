import React from 'react'

export default function Comment() {
  return (
    <div>
        <div className="relative flex h-screen w-full flex-col items-center bg-cover bg-[url('https://images.pexels.com/photos/3573556/pexels-photo-3573556.jpeg?auto=compress&cs=tinysrgb&w=400')] bg-[#e3cecd]">
    <div className="absolute top-0 left-0 px-2 py-0 hover:bg-slate-400 hover:text-slate-700 rounded-md  bg-white"><button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg></button></div>
    <div className="font-serif  text-white text-2xl">Comments</div>
    <div className="h-0.5 w-full bg-gray-200"></div>
   
    <div className=" relative mt-6 flex h-5/6 w-3/4 flex-col  items-center  rounded-xl  bg-white shadow-xl">
    <div className="flex flex-row justify-between gap-96">
    </div>
     <div> 
     </div>
     <div className=" flex flex-col gap-3 h-full  w-7/12 overflow-scroll mt-4 mr-10 ml-10 mb-16 rounded-md bg-[#bbbbc5] ">
     <div className="flex p-1 mt-1 mr-2 ml-2  rounded-lg hover: bg-slate-300 justify-between gap-4">
       <div className="flex flex-col" >
         <div className="">user1</div><div>comment1</div> </div>
       <div className="text-end mt-3">2022/12/03 9.00am</div>
      </div>
      <div className="flex p-1 mt-1 mr-2 ml-2  rounded-lg hover: bg-slate-300 justify-between gap-4">
       <div className="flex flex-col" >
         <div className="">user1</div><div>comment1</div> </div>
       <div className="text-end mt-3">2022/12/03 9.00am</div>
      </div>
      <div className="flex p-1 mt-1 mr-2 ml-2  rounded-lg hover: bg-slate-300 justify-between gap-4">
       <div className="flex flex-col" >
         <div className="">user1</div><div>comment1</div> </div>
       <div className="text-end mt-3">2022/12/03 9.00am</div>
      </div>
       </div>
   <div className=" relative mr-2 ml-4 mt-2 rounded-lg  flex flex-col h-28 bg-gray-300">
     </div>
     <div className=" absolute  bottom-4 gap-28 flex flex-row justify-between">
       
       <input type="text" placeholder="Add message here..." className="px-44 py-1 placeholder:text-xl  bg-slate-300 ml-4 border rounded-md border-black" />
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide hover:text-blue-900  rounded-md flex h-7 w-8  lucide-send-horizontal"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>
     </div>
  </div> 
</div>
</div>
  )
}
