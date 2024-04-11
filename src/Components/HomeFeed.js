import React, { useState, useEffect } from "react";
import paella from "../test/paella-91.jpg"
import Photo from "./Photo";
import axios from "axios";
import { Link } from "react-router-dom";


const ImageList = () => {
    const [imageData, setImageData] = useState([]);

    const apiUrl = 'http://localhost:3000/blogs'
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);

                const data = response.data.data;
                const extractedData = data.map( item => ({
                    imgUrl: item.ImgUrl,
                    tag: item.Tag,
                    slug: item.Slug
                }));

                // const imgUrls = data
                // .map(item => item.ImgUrl)
                // .filter(url => url !== '');

                setImageData(extractedData);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);



    const renderImages = () => {
        return imageData.map((image, index) => (
        
                <Photo 
        url  = {image.imgUrl}
        tag1 = {image.tag} 
        tag2 = {image.tag}
        tag3 = {image.tag}
        slug = {image.slug}
        /> 
        
        ))
       
    }
 return (
    <div  className="flex flex-wrap">
      {/* Call the function to render images */}
      {console.log(imageData)}
      {renderImages()}
    </div>
  );
};


/**
 * f
 * 
 * 
 * {
 * } https://lazy-chefs-blog-images.s3.us-east-2.amazonaws.com/paella-91.jpg
 * @returns 
 */

const imageList = [
  { url: 'https://lazy-chefs-blog-images.s3.us-east-2.amazonaws.com/paella-91.jpg' },
  { url: 'https://lazy-chefs-blog-images.s3.us-east-2.amazonaws.com/paella-91.jpg' },
  { url: 'https://lazy-chefs-blog-images.s3.us-east-2.amazonaws.com/paella-91.jpg' },
];
export default function HomeFeed() {
    return (
        <div className=" mx-4 md:mx-20 ">
                <h1 className="pt-2 text-2xl text-center font-bold">Michelin Star Meals made by you 😋</h1>
             
    
                <ImageList className='justify-center'/>
            {/* <img src={paella} alt="Logo" />
            <img src={paella} alt="Logo" />
            <img src={paella} alt="Logo" />
            <img src={paella} alt="Logo" />
            <img src={paella} alt="Logo" />
            <img src={paella} alt="Logo" />
            <img src={paella} alt="Logo" />
            <img src={paella} alt="Logo" /> */}
               
    
        </div>
    )
}