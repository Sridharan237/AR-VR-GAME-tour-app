import React from 'react'

export default function AddExperience() {
  return (
    <div>
        <div className="flex flex-col items-center h-screen bg-[#efe8e8] bg-[url('https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct-v2/AR-VR-and-Gaming.jpg')] shadow-black ">
  <div className="w-full flex items-center justify-center font-bold text-white font-serif text-2xl">
  <h1>Add Experience</h1>
  
</div >
<div className=" relative h-full w-7/12 bg-[#a0a2bc] mt-8 flex flex-col gap-y-16  items-center justify-center rounded-xl gap-6 mb-8 ">
<div>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" absolute left-2 top-2 hover:text-red-500 bg-white  rounded-2xl hover:bg-orange-200 lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
</div>

<div className="  flex flex-row gap-4  ml-8 mt-10">
    <label className="text-xl">Image url :</label>
    <input type="text" className="px-20 rounded-md" />
</div>
<div className="flex flex-row ml-8 gap-12">
  <label className=" text-xl">Title :</label>
  <div><input type="text" className="px-20 ml-1 rounded-md" /></div>
</div>

<div className=" flex flex-row text-xl ml-8 gap-4 mr-2">
  <label>  Description :</label>
 <div> <textarea name="" rows={2} className="px-20 rounded-md"></textarea></div>
</div>


  <div className="flex flex-row gap-72 text-xl ml-16 mt-12">
    <button className="px-3  bg-white rounded-lg hover:bg-red-400 ">Cancel</button>
    <button className="px-3 bg-white flex mr-11 rounded-lg hover:bg-blue-400">Add Experience</button>
  </div>
  </div>
</div>
    </div>
  )
}
