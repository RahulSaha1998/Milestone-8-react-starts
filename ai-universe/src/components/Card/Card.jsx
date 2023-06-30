import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false)
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => setData(data.data.tools))
    },[]) 
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6'>
            {
                // data.map((singleData)=>{
                //     return <SingleData singleData={singleData} />;
                // })
                data.slice(0,showAll ? 12:6).map(singleData =>(
                    <SingleData singleData={singleData} key={singleData.id}></SingleData>
                ))
            }
            </div>
        </>
    );
};

export default Card;