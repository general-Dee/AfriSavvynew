import React from 'react'
import { motion } from 'framer-motion'



function Projects() {
    const projects = [
        {
            title: "Full Marketing Support",
            displayImg: "./projects/cowHouse.jpg",
            discription: "When you partner with AfriSavvy, you’re not alone in your journey. We provide full marketing support to help you succeed. This includes we sending you a list of customers that will buy this product from you, which saves you cost on advertising. We also offer training on how to effectively communicate with the customers that we will be sending you to purchase our products which will altimately grow your business. Our team will keep you updated on the latest tactics and strategies to help you stay competitive in the market. Whether you’re a seasoned seller or just starting out, we’re here to provide guidance and resources to help your business thrive."
        },
        {
            title: "Lucrative Profit Margins",
            displayImg: "./projects/ArlaFarm.jpg",
            discription: "As a distributor with AfriSavvy, you’ll enjoy competitive profit margins on every product you sell. We believe in rewarding our partners, so we’ve designed our program to maximize your earnings. Whether you're just starting or looking to expand your current business, our pricing structure ensures that you can maintain a profitable venture while delivering high-quality products to your customers. With transparent pricing and no hidden costs, you'll know exactly how much you’re earning with each sale."
        },
        {
            title: "High-Quality, In-Demand Products",
            displayImg: "./projects/cattleClinic.jpg",
            discription: "AfriSavvy offers a curated selection that are not only trusted but also highly sought after in the market. Our products meet the highest standards in safety, quality, and effectiveness, ensuring that you’ll always have something that your customers want. We provide products that cater to a wide range of needs. Distributing trusted and well-loved products means your customers will keep coming back, building a loyal customer base for your business."
        },
        {
            title: "No Upfront Inventory Cost",
            displayImg: "./projects/milkingPlaour.jpg",
            discription: "You don’t need to worry about purchasing inventory upfront, which greatly reduces the financial risk for you. AfriSavvy offers a flexible model where you can sell products directly to your customers without having to hold stock. This allows you to focus on building your customer base and growing your sales without the burden of initial capital investment in inventory. With this streamlined approach, you can scale your business at your own pace, increasing your earnings as your customer base expands."
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
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Why Become A Distributor?</h3>

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
                            <span className='underline decoration-[#F7AB0A]/50 text-lg'>Benefit {i + 1} of {projects.length}: </span>
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