import Header from "../../Components/Header"
import DogDetailContent from "../../Components/DogDetailContent"
import DogDetailCard from "../../Components/DogDetailCard"



export default function dog1() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header></Header>
            <div className="dog-hero-image h-60 bg-blue-300 w-auto overflow-hidden">
                <img className="items-center justify-center flex"src="/images/dog-placeholder-detail.jpg"></img>
            </div>
            <div className="dog-detail-layout grid grid-cols-3 max-w-7xl m-auto mt-12 gap-12">
             <div className="col-span-2"><DogDetailContent>
            </DogDetailContent></div>
             <div className="col-span-1"><DogDetailCard></DogDetailCard></div>
            </div>
        </div>
    )
}
