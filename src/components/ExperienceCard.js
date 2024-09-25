import React from 'react'
import { motion } from 'framer-motion'

// type Props = {
//     title: string,
//     imageUrl: string,
//     heading: string,
//     description: string
// }

// function ExperienceCard({title, imageUrl, heading, description}: Props) {
function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] hover:opacity-100 opacity-50 snap-center bg-[#292929] p-10 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3> */}
        <motion.img
        initial={{
            y:-100,
            opacity: 0,
        }}
        whileInView={{
            y: 0,
            opacity: 1,
        }}
        transition={{
            duration: 1.2,
        }}
        viewport={{
            once: true,
        }}

        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="" alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-bold'></h4>
            <p className='text-lg mt-1 font-light'></p>

            {/* <p>{description}</p>               */}
            {/* <p className='uppercase py-5 text-gray-300'>Started work... - Ended work...</p> */}

            <ul className='list-disc space-y-4 ml-5 text-sm pt-10'>
                <li></li>              
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard