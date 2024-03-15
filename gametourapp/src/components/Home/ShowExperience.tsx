import React from 'react'

export default function ShowExperience() {
  return (
    <div>
        <div className="relative flex h-screen w-full border-spacing-x-10 justify-center border border-[#100404] shadow-inner">
  <div className="absolute left-0 flex h-3">
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left mt-3 h-8 w-16 bg-[#a78e8d] hover:bg-[#bd807b]">
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
    </button>
  </div>
  <div className="mt-8 mb-6 flex h-screen w-full flex-col items-center justify-center">
    <div className="overflow-y mb-12 flex h-screen w-6/12 flex-col items-center rounded-md border border-stone-700 bg-[#dfcbca] ">
      <div className="flex w-full justify-center font-serif text-2xl font-bold">Experience</div>
      <div className="h-0.5 w-full bg-black shadow"></div>
      <div className="mt-1  rounded-xl  flex items-center justify-center bg-slate-400">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9RmLzRkMVABnWPnihReRSpZxinZp5KHBR-4CzOZuM45qNqloSBLV&usqp=CAE&s" alt="" className=" w-[350px] h-[250px]  rounded-md" />
      </div>
      <div className="h-80 bg-[#cbbe81] w-full mt-4 ml-5 mr-5">
      <div className=" mt-7 w-auto ml-3 mr-3 text-center bg-[#f8f5ea] rounded-md border font-bold  shadow-black  border-gray-300">
          Title
      </div>
      <div className=" mt-7 w-auto h-40 ml-3 mr-3 text-center rounded-md border bg-[#f8f5ea]  shadow-black  border-gray-300">
         description 
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic placeat nihil debitis mollitia accusamus ut repellendus fugit, aspernatur eius facilis atque numquam quibusdam, qui aliquam quod id velit quos? Error.
      </div>
      </div>
      <div className="flex flex-row gap-7 items-center  justify-center h-16  w-full ">
        <div className="flex flex-row gap-2">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide hover:text-[#7158b5] lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
        <p>2</p>
      </div>
      <div className="flex flex-row gap-2"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide hover:text-[#7158b5]  lucide-thumbs-down"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
        <p>10</p>
      </div>
      <div>
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide hover:text-[#7158b5]  lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
        </button>
        
      </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
