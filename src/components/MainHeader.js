import React from 'react'
// import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'

function Header() {
  return (
   <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
     <motion.div 
     initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
     }}
     animate={{
        x:0,
        opacity: 1,
        scale: 1
     }}
     transition={{
        duration: 1.5
     }}
     className="flex flex-row items-center">
       {/* Social Icons */}
       <SocialIcon url="https://www.youtube.com" fgColor="gray" bgColor="transparent"/>
       <SocialIcon url="https://www.facebook.com" fgColor="gray" bgColor="transparent"/>
       <SocialIcon url="https://www.instagram.com" fgColor="gray" bgColor="transparent"/>
     </motion.div>

     <Link href="#contact">
         <motion.div 
         initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
         }}
         animate={{
            x:0,
            opacity: 1,
            scale: 1
         }}
         transition={{
            duration: 1.5
         }}
         className="flex flex-row items-center text-gray-300 cursor-pointer">
               <span>
               {/* <SocialIcon
               className="cursor-pointer"
               network="email"
               fgColor="gray" dacdcdc
               bgColor="transparent"
               />    */}
               </span>  
            <p className="uppercase md:inline-flex text-sm text-gray-400">Get in Touch</p>
             
         </motion.div>
    </Link>

   </header>
  )
}

export default Header