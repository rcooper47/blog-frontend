import React from "react";
import paella from "../test/paella-91.jpg"


export default function HomeFeed() {
    return (
        <div className=" mx-4 md:mx-20">
                <h1 className="pt-2 text-2xl  font-bold">Michelin Star Meals made by you 😋</h1>
             
            <div className="flex flex-wrap">
                <div className='w-full py-4 md:w-1/3 md:px-4 md:py-4'><img  src={paella} alt="Logo" />
                
                    <span className="inline-block bg-red-1 rounded-full px-3 py-1 my-1 text-sm font-semibold text-black mx-1 mb-2">Vegetarian</span>
                    <span className="inline-block bg-orange-1 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">Vegan</span>
                    <span className="inline-block bg-blue-1 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">Dinner</span>
                    </div>
                <div className='w-full py-4 md:w-1/3 md:px-4 md:py-4'><img  src={paella} alt="Logo" />
                
                <span className="inline-block bg-red-1 rounded-full px-3 py-1 my-1 text-sm font-semibold text-black mx-1 mb-2">Vegetarian</span>
                <span className="inline-block bg-orange-1 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">Vegan</span>
                <span className="inline-block bg-blue-1 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">Dinner</span>
                </div>
                <div className='w-full py-4 md:w-1/3 md:px-4 md:py-4'><img  src={paella} alt="Logo" />
                
                <span className="inline-block bg-red-1 rounded-full px-3 py-1 my-1 text-sm font-semibold text-black mx-1 mb-2">Vegetarian</span>
                <span className="inline-block bg-orange-1 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">Vegan</span>
                <span className="inline-block bg-blue-1 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">Dinner</span>
                </div>
            {/* <img src={paella} alt="Logo" />
            <img src={paella} alt="Logo" />
            <img src={paella} alt="Logo" />
            <img src={paella} alt="Logo" />
            <img src={paella} alt="Logo" />
            <img src={paella} alt="Logo" />
            <img src={paella} alt="Logo" />
            <img src={paella} alt="Logo" /> */}
                </div>
    
        </div>
    )
}