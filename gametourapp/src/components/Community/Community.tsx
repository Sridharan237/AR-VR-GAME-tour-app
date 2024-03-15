import React from 'react'
import BackButton from '../Buttons/BackButton'

export default function Community() {
  return (
    <div>
      <div className="relative flex h-10 w-full items-center justify-center bg-slate-300 py-7">
  <div className='absolute left-5'>
    <BackButton/>
  </div>
  <div className="text-2xl font-bold">Communities</div>
</div>
<div className="flex h-screen flex-row items-center justify-center bg-[url('data:image/jpeg;base64,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')] bg-cover">
  <div className="relative flex h-screen w-7/12 flex-row items-center justify-center gap-10 rounded-md border border-stone-800 bg-slate-200">
    <div className="absolute left-0">
      <aside className="relative flex h-screen w-48 flex-col bg-slate-300">
        <div className="absolute top-2 mb-3 ml-2 mr-2 rounded-md border border-stone-950 bg-[#2a567f] px-9 py-0 text-white hover:bg-amber-700">
          <a href="#All Communities">All Communities </a>
        </div>
        <div className="absolute top-16 mb-3 ml-2 mr-2 rounded-md border border-stone-950 bg-[#2a567f] px-9 py-0 text-white hover:bg-amber-700">
          <a href="#All Communities"> Joined Communities </a>
        </div>
      </aside>
    </div>
    <div className="absolute right-24 top-4 flex h-screen items-center">
      <div className="ml-12 flex flex-col">
        <div className="mb-4">All Communities</div>
        <input placeholder="Search community ..." className="mb-4 mt-2 rounded-lg" />

        <div className="flex h-96 w-auto flex-col overflow-y-scroll">
          <div className="flex flex-col items-start justify-start">
            <div className="mt-2 flex h-8 w-80 flex-row justify-between rounded bg-slate-500 text-center text-white">
              <div className="ml-2 mt-1">community1</div>
              <button className="mb-1 mr-1 mt-1 rounded-lg bg-green-600 px-2 py-0.5 text-center hover:bg-blue-700">Join</button>
            </div>
            <div className="mt-2 flex h-8 w-80 flex-row justify-between rounded bg-slate-500 text-center text-white">
              <div className="ml-2 mt-1">community1</div>
              <button className="mb-1 mr-1 mt-1 rounded-lg bg-green-600 px-2 py-0.5 text-center hover:bg-blue-700">Join</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>

  )
}
