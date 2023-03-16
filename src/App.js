import React from "react";
import {HiMenuAlt3} from "react-icons/hi";

const Home = () => {
    return (
        <section className="flex gap-6">
            <div className="bg-[#0e0e0e] min-h-screen w-72">
              <div className="py-3 flex-justify-end">
                <HiMenuAlt3 size={26} className="cursor-pointer"/>
              </div>
            </div>
            <div className="m-3 text-xl text-gray-900 font-semibold">
                REACT TAILWIND
            </div>
        </section>
    );
};

export default Home;