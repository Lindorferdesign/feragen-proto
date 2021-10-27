import Head from "next/head";
import BannerTeaser from "../components/BannerTeaser";
import MainMenu from "../components/Header";
import DogCard from "../components/DogCard";
import { PlusIcon } from "@heroicons/react/solid";
import { PlusCircleIcon } from "@heroicons/react/outline";

const tabs = [
    { name: 'Alle (22)', href: '#', current: true },
    { name: 'Hunde (10)', href: '#', current: false },
    { name: 'Katzen (2)', href: '#', current: false },
    { name: 'Pferde', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  { name: "Alle", href: "#", current: true },
  { name: "Hunde", href: "#", current: false },
  { name: "Katzen", href: "#", current: false },
  { name: "Pferde", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Home() {
  return (
    <div>
      <MainMenu></MainMenu>
      <div className="max-w-7xl m-auto mt-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-600">
          Meine Haustiere
        </h2>

        <div className="my-6">
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
        </div>

        <div className="grid grid-cols-5 gap-6">
          <DogCard></DogCard>
          <DogCard></DogCard>
          <DogCard></DogCard>
          <DogCard></DogCard>
          <DogCard></DogCard>
          <DogCard></DogCard>
          <div className="add-card justify-center p-8 border border-gray-200 rounded hover:border-2 hover:cursor-pointer transition-all duration-100 flex flex-col items-center hover:border-indigo-600">
            <div className="add-dog-icon w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
              <PlusIcon className="text-white w-6 h-6"></PlusIcon>
            </div>
            <div className="text-xl font-semibold mt-4">Neues Haustier</div>
          </div>
        </div>
      </div>
    </div>
  );
}
