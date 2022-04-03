import React from 'react';
import StartRatings from 'react-star-ratings'

const Review = ({review}) => {
    console.log(review)
    const {img,name,ratings,reviews}=review
    return (
        <div className='col p-2 bg-pink-200 rounded-lg'>
            <div className="review border-solid border-l-2 pl-2 border-blue-600">
                <p><q>{reviews}</q></p>
            </div>
            <div className="ratings my-2">
                <span className='font-bold'>Ratings:</span> <StartRatings 
                rating={ratings} 
                starRatedColor="yellow" 
                numberOfStars={5} 
                name='rating'
                starDimension="20px"
                starSpacing="2px"
                />
            </div>
            <div className="customer flex items-center ">
                <img src={process.env.PUBLIC_URL +`/images/${review?.img}`} alt=""  className='h-[60px] w-[60px] rounded-[50%] mr-2'/>
                <h1 className='font-bold'>{name}</h1>
            </div>
        </div>
    );
};

export default Review;