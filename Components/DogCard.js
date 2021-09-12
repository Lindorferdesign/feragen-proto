import { DotsVerticalIcon } from '@heroicons/react/solid'



function DogCard() {
    return (

      <a href="/dogs/dog1">
            <div className="relative group dog-card p-8 border border-gray-200 rounded hover:border hover:shadow-xl hover:cursor-pointer transition-all duration-200 flex flex-col items-center hover:border-white">
        <button
        type="button"
        className="absolute transition-all duration-200 z-10 opacity-0 group-hover:opacity-100 top-4 right-4 items-center p-2 border border-transparent rounded-full shadow-sm text-indigo-600 bg-gray-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
      </button>


                <div className="relative dog-profile-image z-0">
                    <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-indigo-600 overflow-hidden justify-center items-center text-center flex"><img src="/images/dog-placeholder.jpg"></img></div>
                    <div className="gender absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-indigo-600 flex justify-center items-center">
                    <svg className="text-white w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="venus-mars" class="svg-inline--fa fa-venus-mars fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M564 0h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-48.7 48.7C422.5 72.1 396.2 64 368 64c-33.7 0-64.6 11.6-89.2 30.9 14 16.7 25 36 32.1 57.1 14.5-14.8 34.7-24 57.1-24 44.1 0 80 35.9 80 80s-35.9 80-80 80c-22.3 0-42.6-9.2-57.1-24-7.1 21.1-18 40.4-32.1 57.1 24.5 19.4 55.5 30.9 89.2 30.9 79.5 0 144-64.5 144-144 0-28.2-8.1-54.5-22.1-76.7l48.7-48.7 16.9 16.9c2.4 2.4 5.4 3.5 8.4 3.5 6.2 0 12.1-4.8 12.1-12V12c0-6.6-5.4-12-12-12zM144 64C64.5 64 0 128.5 0 208c0 68.5 47.9 125.9 112 140.4V400H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.6 112-71.9 112-140.4 0-79.5-64.5-144-144-144zm0 224c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>

                    </div>
                </div>
                <h1 className="font-bold text-2xl mt-3">Oscar</h1>
                <h2 className="text-l text-gray-500">Labrador Retriever</h2>
                <span className="mt-4">Chip-Nr.: 2092310</span>
            </div>
            </a>
    )
}

export default DogCard
