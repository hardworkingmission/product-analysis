import React from 'react';
import useReviews from '../../hooks/useReviews/useReviews';
import Review from '../Review/Review';
import Spinner from '../Spinner/Spinner'

const Reviews = () => {
    const [reviews,isLoading,setReviews]=useReviews()
    return (
        <div className='w-5/6 mx-auto my-3'>
            <div className="w-full my-3">
                {
                  isLoading && <Spinner/>
                }
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
                {
                  isLoading|| reviews.map(review=><Review key={review.id} review={review}/>)
                }
            </div>
        </div>
    );
};

export default Reviews;