import React from 'react'
import { motion } from 'framer-motion'



function Projects() {
    const projects = [
        {
            title: "Full Marketing Support",
            displayImg: "./img/benefit01.jpg",
            discription: "When you partner with SavannaLink, you’re not alone in your journey. We provide full marketing support to help you succeed. This includes we sending you a list of customers that will buy this product from you, which saves you cost on advertising."
        },
        {
            title: "Lucrative Profit Margins",
            displayImg: "./img/benefit02.jpg",
            discription: "As a distributor with SavannaLink, you’ll enjoy competitive profit margins on every product you sell. We believe in rewarding our partners, so we’ve designed our program to maximize your earnings."
        },
        {
            title: "High-Quality, In-Demand Products",
            displayImg: "/img/benefit03.jpg",
            discription: "SavannaLink offers a curated selection that are not only trusted but also highly sought after in the market. Our products meet the highest standards in safety, quality, and effectiveness, ensuring that you’ll always have something that your customers want."
        },
        {
            title: "No Upfront Inventory Cost",
            displayImg: "/img/benefit04.jpg",
            discription: "You don’t need to worry about purchasing inventory upfront, which greatly reduces the financial risk for you. SavannaLink offers a flexible model where you can sell products directly to your customers without having to hold stock."
        }
    ] 
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.5,
    }}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl text-center'>Why Become Our Distributor?</h3>

        {/* <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#7FAB0A]'> */}
        {/* <div className='w-full flex space-x-5 overflow-x-scroll pt-40  snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7FAB0A]'> */}

        <div className='relative w-full flex overflow-x-scroll pt-10  snap-x snap-mandatory scrollbar  overflow-y-hidden z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#7FAB0A]'>
            {projects.map((project, i) => (
                <div key={i+1} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-20 md:p-44 h-screen items-center pt-40'>
                    <motion.img
                    initial={{
                        y: -300,
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
                    className='w-[200px] h-[200px] rounded-lg'
                    src={project. displayImg} alt="Image" />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
                        <h4 className='text-xl md:text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50 text-sm md:text-lg'>Benefit {i + 1} of {projects.length}: </span>
                            {project.title}
                        </h4>

                        <p className='text-jg text-center md:text-left'>
                            {project.discription}
                        </p>
                    </div>
                </div>               
            ))}
        </div>

        {/* <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div> */}
        <div className='w-full absolute top-[30%] bg-[#A67C52]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects