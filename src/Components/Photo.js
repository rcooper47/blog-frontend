import React from "react";
import paella from "../test/paella-91.jpg"
import { Link } from "react-router-dom";


export default function Photo(props) {
    return (             
     
                <div className='w-full py-4 md:w-1/3 md:px-4 md:py-4'>
                    <Link to={`blogs/${props.slug}`}>
                        {console.log(props.slug)}<img  src={props.url} alt="Food Image" /></Link>
                
                    <span className="inline-block bg-red-1 rounded-full px-3 py-1 my-1 text-sm font-semibold text-black mx-1 mb-2">{props.tag1}</span>
                    <span className="inline-block bg-orange-1 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">{props.tag2}</span>
                    <span className="inline-block bg-blue-1 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">{props.tag3}</span>
                    </div>


    )
}