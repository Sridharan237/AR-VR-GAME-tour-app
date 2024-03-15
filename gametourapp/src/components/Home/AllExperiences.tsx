import React from 'react'
import BackButton from '../Buttons/BackButton'

export default function AllExperiences() {

  
  return (
    <div>
        <div className="relative -mt-14 mb-2 h-screen w-full bg-slate-300">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_mRm0L_Qu_3yn3_WABurW3Rate-_MnXxB6eUZH2k0p4rekjTgbSLohj_Yts5Gn454A&s" alt="" className="absolute inset-0 z-0 mt-16 h-full w-full" />

  <div className="relative mt-12 flex flex-col items-center">
    <div className="top-5  left-5 absolute flex flex-row">
      <BackButton/>
    </div>
    <div className="absolute top-5 text-xl font-semibold">All Experiences</div>
    
    <div>
    <input type="text" placeholder='search experiences' className='flex items-center justify-start mt-20 py-3 px-16 rounded-md' />
  </div>

    <button className="absolute right-2 top-5 rounded-full bg-green-500 p-2 font-semibold">Add Experience</button>

    <div className='mt-2 flex items-center justify-center'>
    <div className="mt-12 grid h-screen w-7/12 overflow-y-auto">
      <div className="row-span-2 ml-4 flex flex-col">
        <div className="mb-2 ml-10 mr-16 mt-5 flex flex-row flex-nowrap rounded-md px-2 py-1 text-center font-semibold"></div>

        <div className="flex flex-col items-center justify-center gap-4 overflow-y-auto">
          <div className="flex flex-row gap-3">
            <div className="flex flex-col rounded-xl bg-[#e3cecd] bg-fixed p-7">
              <div className="ml-3 font-semibold text-black">Title</div>
              <img src="https://media.istockphoto.com/id/513247652/photo/panoramic-beautiful-view-of-mount-ama-dablam.jpg?s=1024x1024&w=is&k=20&c=ZKAEiIpjE9z6pmpZFVvnG_ymfsrZD7wFVPoB0LpLDYA=" className="mb-1 ml-1 mr-1 mt-1" alt="hwggh" />
              <div className="mt-2 flex flex-row gap-2">
                <div className="flex flex-row gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-up">
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                  <p>2</p>
                </div>
                <div className="h- flex flex-row gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-down">
                    <path d="M17 14V2" />
                    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                  </svg>
                  <p>10</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-[#e3cecd] p-7">
              <div className="font-semibold text-black">Title2</div>
              <img src="https://media.istockphoto.com/id/1404885250/photo/mahabaleshwar-and-panchagani-nature-and-hill-areas.webp?s=1024x1024&w=is&k=20&c=fQykGjPmlabwiSYYgvanP97qMZD7dT_8v81iGqWdimU=" className="mb-1 ml-1 mr-1 mt-1" alt="hwggh" />
              <div className="mt-2 flex flex-row gap-2">
                <div className="flex flex-row gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-up">
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                  <p>2</p>
                </div>
                <div className="flex flex-row gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-down">
                    <path d="M17 14V2" />
                    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                  </svg>
                  <p>10</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex flex-col rounded-xl bg-[#e3cecd] bg-fixed p-7">
              <div className="ml-3 font-semibold text-black">Title</div>
              <img src="https://media.istockphoto.com/id/513247652/photo/panoramic-beautiful-view-of-mount-ama-dablam.jpg?s=1024x1024&w=is&k=20&c=ZKAEiIpjE9z6pmpZFVvnG_ymfsrZD7wFVPoB0LpLDYA=" className="mb-1 ml-1 mr-1 mt-1" alt="hwggh" />
              <div className="mt-2 flex flex-row gap-2">
                <div className="flex flex-row gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-up">
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                  <p>2</p>
                </div>
                <div className="h- flex flex-row gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-down">
                    <path d="M17 14V2" />
                    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                  </svg>
                  <p>10</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-[#e3cecd] p-7">
              <div className="font-semibold text-black">Title2</div>
              <img src="https://media.istockphoto.com/id/1404885250/photo/mahabaleshwar-and-panchagani-nature-and-hill-areas.webp?s=1024x1024&w=is&k=20&c=fQykGjPmlabwiSYYgvanP97qMZD7dT_8v81iGqWdimU=" className="mb-1 ml-1 mr-1 mt-1" alt="hwggh" />
              <div className="mt-2 flex flex-row gap-2">
                <div className="flex flex-row gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-up">
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                  <p>2</p>
                </div>
                <div className="flex flex-row gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-down">
                    <path d="M17 14V2" />
                    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                  </svg>
                  <p>10</p>
                </div>
              </div>
            </div>
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
