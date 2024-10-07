import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import { motion } from 'framer-motion'
import Link from 'next/link'




function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "Partner with SavannaLink – Grow Your Own Business Today!", 
            "Join our network of distributors and sell top-quality products",
            "Earning profits of up to N30,000 per Week!!",
            "Limited slots available! Become a Distributor – Sign Up Now"
        ],
        loop:true,
        delaySpeed: 2000,
    }) 
  return (
        <motion.div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-40">
          <BackgroundCircles />
          <img src="./img/logo.jpg" className="relative rounded-full h-32 w-32 mx-auto object-cover"/>
         <div className="z-20">
            <h2 className="uppercase text-[#8CC63F] tracking-[15px]">SavannaLink</h2>
            <h1 className="text-3xl lg:text-5xl font-semibold px-10">
                <span>{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>

            <div className="my-4">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#whysignup">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Testimonials</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">FAQs</button>
                </Link>
                <Link href="#contact">
                    <button className="heroButton">Signup Now</button>
                </Link>
            </div>
         </div>
        </motion.div>
  )
}

export default Hero