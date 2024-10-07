import React from 'react'
import { motion } from 'framer-motion'


function About() {
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
        viewport={{
            once: true,
        }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center space-y-20 py-10 mb-60">
        <h3 className="absolute md:text-gray-600 top-20 uppercase tracking-[20px] text-gray-500 text-2xl ">
            About
        </h3>
        <motion.img 
        initial={{
            x:-200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        viewport={{
            once: true,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="./img/CEO.JPG" alt="" />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50 ">brief</span>{" "} background from the desk of the CEO/Founder</h4>
            <p className="text-base sm:text-sm">
            My Names are Damilare Oshinowo, founder and CEO of EdenMart which is a pioneering e-commerce platform focused on providing high-quality products to customers across Nigeria, Ghana and beyond. We are more than just a marketplace; we are a community dedicated to enriching lives through premium products and exceptional service. As we grow, we are actively seeking partners who share our vision and are ready to capitalize on the booming e-commerce market in Africa. By joining EdenMart as a distributor, you become part of a dynamic network that prioritizes innovation, quality, and customer satisfaction. Together, we can build a profitable and sustainable business that meets the evolving needs of modern consumers across the continent. Our distributors have made this possible and have made at least half of that sum for themselves. Do well to go through the entire content on this page, particularly th FAQ section
            </p>
            {/* <p className="text-base">
            Nestled within sprawling acres of lush green pastures, Damau Milk Farm offers a haven for our contented cows. We prioritize their welfare, ensuring a nurturing environment that allows them to thrive. Our team of skilled farmers employs ethical practices, providing our cows with a stress-free and comfortable existence. With ample space for grazing and leisurely strolls, our cows produce milk that is naturally flavorful and rich in essential nutrients.
            </p> */}
            {/* <p className="text-base">
            Discover the abundance of Damau Milk Farm and bring the taste of nature's bounty to your home. Place your order today to experience the unmatched freshness and quality of our dairy products. We offer convenient delivery options to ensure your utmost satisfaction. Embark on this journey of nourishment and sustainability with us. Together, let's create a healthier and happier future, one glass of milk at a time.
            </p> */}

        </div>
    </motion.div>
  )
}

export default About