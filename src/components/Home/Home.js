import React from 'react';
import honey from '../../images/honey_2.jpg'


const Home = () => {
    return (
        <div className='w-5/6 mx-auto '>
            <div className="intro md:flex">
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
                <h1 className='text-2xl flex justify-center font-bold'>Customer Reviews(3)</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">


                </div>
            </div>

            
        </div>

    );
};

export default Home;