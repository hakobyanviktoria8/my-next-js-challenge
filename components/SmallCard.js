import React from "react";
import Image from "next/image";

const SmallCard = ({item}) => {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
         hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            {/*left*/}
            <div className="relative h-16 w-16">
                <img src={item.img} alt="" className="rounded-lg"/>
                {/*<Image src={item.img}*/}
                {/*       layout="fill"*/}
                {/*       className="rounded-lg"*/}
                {/*/>*/}
            </div>

            {/*right*/}
            <div className="flex">
                <h2>{item.location}</h2>
                <h3 className="text-gray-500">{item.distance}</h3>
            </div>
        </div>
    )
};

export default SmallCard