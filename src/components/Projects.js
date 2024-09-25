import React from 'react'
import { motion } from 'framer-motion'



function Projects() {
    const projects = [
        {
            title: "Arla Farm",
            displayImg: "./projects/ArlaFarm.jpg",
            discription: "An agricultural establishment primarily focused on the production of milk and other dairy products. These farms are dedicated to raising dairy cows and maintaining facilities and systems to ensure milk production, while also considering the welfare and health of the animals"
        },
        {
            title: "Cattle Clinic",
            displayImg: "./projects/cattleClinic.jpg",
            discription: "Specialized veterinary facility that focuses on the health and well-being of cattle. It provides a range of services and treatments aimed at promoting the optimal health, productivity, and disease prevention in cattle."
        },
        {
            title: "Cattle Barn",
            displayImg: "./projects/cowHouse.jpg",
            discription: "Dedicated structure designed to provide shelter, protection, and optimal living conditions for cattle. It serves as a vital component of livestock management in agricultural settings, where it plays a crucial role in ensuring the well-being and productivity of the animals"
        },
        {
            title: "Milking Parlor",
            displayImg: "./projects/milkingPlaour.jpg",
            discription: "Specialized area or building designed for the efficient and hygienic milking of dairy cows. It is an essential component of modern dairy farms and plays a critical role in ensuring the productivity and quality of milk production"
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
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Facilities</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#7FAB0A]'>
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
                    src={project.displayImg} alt="Image" />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50 text-lg'>Case study {i + 1} of {projects.length}: </span>
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