import React from 'react'
import a1 from '../assets/award1.jpg'
import a2 from '../assets/award2.jpg'
import a3 from '../assets/award3.jpg'

function Awards() {
    return (
        <section className='py-6 bg-gray-100 my-10'>
            <h2 className='text-3xl text-center font-bold'>Last Year</h2>
            <div className='flex justify-around items-center flex-col md:flex-row gap-6 px-6 mt-8'>
                <div className='w-[300px] flex flex-col items-center gap-2'>
                    <img src={a1} alt="" />
                    <p className='text-[1.2rem] font-bold'>Most Preferred Brand</p>
                </div>
                <div className='w-[300px] flex flex-col items-center gap-2'>
                    <img src={a2} alt="" />
                    <p className='text-[1.2rem] font-bold'>Most Preferred Product</p>
                </div>
                <div className='w-[300px] flex flex-col items-center gap-2'>
                    <img src={a3} alt="" />
                    <p className='text-[1.2rem] font-bold'>Most Preferred Service</p>
                </div>
            </div>
        </section>
    )
}

export default Awards