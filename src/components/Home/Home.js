import React from 'react';
import { Link } from 'react-router-dom';
import honey from '../../images/honey_2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import useReviews from '../../hooks/useReviews/useReviews';
import Review from '../Review/Review';


const Home = () => {
    const [reviews,isLoading,setReviews]=useReviews()
    let newReviews=[]
    for(let i=0;i<3;i++){
        newReviews.push(isLoading||reviews[i])
    }
    //console.log('newReviews',newReviews)
    return (
        <div className='w-5/6 mx-auto '>
            <div className="intro md:flex mb-3">
                <div className=" lg:w-6/12 md:w-6/12 sm:w-full w-full p-3 flex items-center justify-center">
                    <div>
                        <h1 className='text-4xl text-pink-600 font-bold'>Honey Center</h1>
                        <p className='my-3 text-lg'>We are the Leading pure Honey provider in Bangladesh.We have Big Consumer Network which is built by Our Reputation.We did not compromise the quality of our products from establishment.So you keep trust on us..</p>
                        <button className='px-2 py-1 bg-pink-600 hover:bg-pink-800 text-lg text-white rounded-lg'>Live Store</button>
                    </div>  
                </div>
                <div className=" lg:w-6/12 md:w-6/12 sm:w-full w-full flex items-center justify-center p-3">
                    <img src={honey} alt="" />
                </div>
            </div>
            <div className="reviews">
                <h1 className='text-2xl flex justify-center font-bold'>Customer Reviews({newReviews.length})</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3 my-3">
                    {
                        newReviews.map(review=><Review key={review.id} review={review}/>)
                    }

                </div>
                <div className="see-all-button w-full flex justify-center my-3">
                    <button className='px-4 py-2 bg-pink-600 text-white text-lg  rounded-lg'>
                        <Link to={'/reviews'}>
                            See All Reviews<FontAwesomeIcon className='ml-2' icon={faArrowRight}/>
                        </Link>
                    </button>
                </div>
                
            </div>

            
        </div>

    );
};

export default Home;