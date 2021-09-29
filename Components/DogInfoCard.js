import { CakeIcon } from "@heroicons/react/outline";

function DogInfoCard(props) {
  return (
    <div>
      <div className="dog-info-card p-4 border-2 border-gray-100 rounded hover:shadow-xl transition-all duration-300 bg-gray-50 hover:bg-white hover:border-white">
        <div className="card-headline w-min rounded-full flex flex-row items-center">
          <div className="card-headline-icon mr-2">
            {" "}
            <CakeIcon className="w-6 text-gray-500"></CakeIcon>
          </div>
          <div className="card-headline-title font-semibold text-gray-500">
            {props.headline}
          </div>
        </div>
        <div className="dog-info-data mt-2">
          <div className="dog-info-value text-4xl font-bold">{props.value}</div>
          <div className="dog-info-description text-xl font-semibold">
            {props.measure}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogInfoCard;
