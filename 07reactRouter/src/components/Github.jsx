import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/KateliyaDharmen/followers')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, [])

    const data = useLoaderData();
    return (
        <>
            <div className='grid grid-flow-row text-center pr-5 font-bold'>
            <h1 className='p-6 text-5xl text-gray-700'>Github Followers: </h1>
                {data.map((follower, index) => (
                    <div className='relative p-3 m-2 rounded-lg w-full bg-gray-100 text-gray-900 shadow-md hover:bg-orange-600 hover:text-white transition ease-in-out hover:-translate-x-1 hover:-translate-y-1 duration-300' key={index}>
                        <img className='h-16 object-contain rounded-full' src={follower.avatar_url} alt={follower.login} />
                        <p className='absolute top-8 left-24 text-center'>{follower.login}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Github

export const githunLoader = async () => {
    const res = await fetch('https://api.github.com/users/KateliyaDharmen/followers')
    return res.json();
}