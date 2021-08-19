import React from "react";
import Image from "next/image";

const Banner = () => {
    return (
        <div
            className="relative flex items-center h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] cursor-pointer my-auto">
            <Image
                src="/download.jpg"
                layout="fill"
                objectFit="cover"/>
            <div className="absolute top-1/2 w-full text-center text-white">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 bg-white px-10 py-4
                shadow-md rounded-full font-bold my-3 hover:shadow-xl
                active:scale-90 transition duration-150">Send</button>
            </div>
        </div>
    )
};

export default Banner