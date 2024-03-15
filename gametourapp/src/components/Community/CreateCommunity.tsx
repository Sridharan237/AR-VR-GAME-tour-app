import React from 'react'

export default function CreateCommunity() {
  return (
    <div>
        
<div className="flex flex-col items-center bg-[#ebe5e5] shadow-black">
  <div className="w-full flex items-center justify-center font-bold font-serif text-2xl">
  <h1>Create Community</h1>
</div >
<div className=" h-96 w-7/12 bg-[#dec8c7] flex flex-col items-center rounded-xl gap-6 mb-9 mt-9">

<div className="  flex flex-row gap-4  ml-8 mt-10">
    <label>Community 
       name :</label>
    <input type="text" className="px-20 rounded-md" />
</div>
<div className=" flex flex-row  ml-8 gap-7">
  <label>  Description :</label>
 <div> <textarea name="" rows={2} className="px-20 rounded-md"></textarea></div>
</div>
<div className="flex flex-row ml-8 gap-6">
  <label className="ml">Privacy level :</label>
  <div><input type="text" className="px-20 rounded-md" /></div>
</div>
  <div className="flex flex-row gap-72 ml-16 mt-12">
    <button className="px-3  bg-white rounded-lg hover:bg-red-400 ">Cancel</button>
    <button className="px-3 bg-white flex  rounded-lg hover:bg-blue-400">Create</button>
  </div>
  </div>
</div>
 




 



    </div>
  )
}
