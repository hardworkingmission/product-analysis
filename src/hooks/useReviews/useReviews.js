import React, { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews,setReviews]=useState([])
    const [isLoading,setLoading]=useState(true)
    useEffect(()=>{
        fetch('reviews.json')
           .then(res=>res.json())
           .then(data=>{
               setReviews(data)
               setLoading(false)
           })

    },[])
    return[reviews,isLoading,setReviews]
};

export default useReviews;