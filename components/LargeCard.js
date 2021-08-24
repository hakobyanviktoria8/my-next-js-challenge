import React from "react";
import Image from "next/image";

const LargeCard = () => {
    return (
        <div className="relative cursor-pointer">
            <div className="relative h-96 main-w-[300px]">
                <Image
                    src="/img.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64 text-white">Text</h3>
                <p className="text-white w-64">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">Send</button>
            </div>
        </div>
    )
};

export default LargeCard