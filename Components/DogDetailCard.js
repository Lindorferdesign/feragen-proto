export default function DogDetailCard() {
    return (
        <div className="p-6 bg-white shadow-2xl -mt-40 rounded">

            <div className="dog-overview flex flex-col items-center justify-center">
            <div className="dog-profile rounded-full image w-28 h-28 overflow-hidden border-4 border-indigo-600 flex">
                <img className="min-w-full object-cover" src="/images/dog-placeholder.jpg"></img>
            </div>
            <div className="dog infos flex flex-col items-center mt-4">
                <div className="dog-name">Oscar</div>
                <div className="dog-breed">Labrador Retriever</div>
            </div>
            </div>
        </div>
    )
}
