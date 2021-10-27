import { CakeIcon } from "@heroicons/react/outline";
import { PaperClipIcon } from "@heroicons/react/solid";
import DogInfoCard from "./DogInfoCard";
import RbCardOverview from "./RbCardOverview";

const tabs = [
  { name: "About", href: "#", current: true },
  { name: "Gesundheit", href: "/gesundheit", current: false },
  { name: "Zucht", href: "#", current: false },
  { name: "DNA-Test", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DogDetailContent() {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current
                  ? "bg-gray-100 text-gray-700"
                  : "text-gray-500 hover:text-gray-700",
                "px-3 py-2 font-medium text-sm rounded-md"
              )}
              aria-current={tab.current ? "page" : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
      <h2 className="mt-8 mb-2 font-semibold text-2xl">Details</h2>
      <div className="dog-info-cards grid grid-cols-5 gap-6">
        <DogInfoCard
          headline="Geschlecht"
          value="-->"
          measure="männlich"
        ></DogInfoCard>
        <DogInfoCard
          headline="Geburtsdatum"
          value="2019"
          measure="18. Sept."
        ></DogInfoCard>
        <DogInfoCard headline="Alter" value="13" measure="Jahre"></DogInfoCard>
        <DogInfoCard headline="Größe" value="122" measure="cm"></DogInfoCard>
        <DogInfoCard headline="Gewicht" value="23" measure="kg"></DogInfoCard>
      </div>
      <div className="dna-test-overview">
        <h2 className="mt-14 mb-2 font-semibold text-2xl">Rassebestimmung</h2>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-md font-medium bg-indigo-100 text-indigo-800">
          Getestet von Feragen
        </span>
      </div>
      <div className="dna-test-overview">
        <h2 className="mt-14 mb-2 font-semibold text-2xl">DNA-Überblick</h2>
        <p>Oscar ist ein Mix aus den folgenden Rassen</p>
        <div className="rasse-grid grid grid-cols-4">
          <div className="col-span-4 grid grid-cols-3 gap-6">
            <RbCardOverview></RbCardOverview>
            <RbCardOverview></RbCardOverview>
            <RbCardOverview></RbCardOverview>
            <RbCardOverview></RbCardOverview>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}
