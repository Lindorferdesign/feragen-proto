import Header from "../../Components/Header";
import DogDetailContent from "../../Components/DogDetailContent";
import DogDetailCard from "../../Components/DogDetailCard";
import Breadcrumb from "../../Components/Breadcrumb";
import DogInfoCard from "../../Components/DogInfoCard";

export default function dog1() {
  return (
    <div className="min-h-screen">
      <Header></Header>

      <div className="dog-detail-layout max-w-7xl m-auto mt-12 gap-12">
        <Breadcrumb></Breadcrumb>

        <div className="dog-main-info flex flex-row my-8 items-center mb-8">
          <div className="dog-img-profile w-36 h-36 rounded-full border-4 border-indigo-600 overflow-hidden flex items-center mr-6">
            <img clasName="" src="/images/dog-placeholder.jpg"></img>
          </div>
          <div className="dog-info">
            <div className="dog-name font-bold text-4xl">Oscar</div>
            <div className="dog-breed text-2xl text-gray-600 font-semibold">
              Labrador Retriever
            </div>
            <div className="dog-location mt-4">
              {" "}
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                Linz, Österreich
              </span>
              <span className="inline-flex items-center ml-2 px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                Zuchtaktiv
              </span>
            </div>
          </div>
        </div>

        <DogDetailContent></DogDetailContent>
      </div>
    </div>
  );
}
