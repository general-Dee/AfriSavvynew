import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'


function Experience() {
  // const kadinvest= 
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1.5
    }}
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
     <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">Experience</h3>
  
     <div className='w-full flex space-x-5 overflow-x-scroll pt-40  snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7FAB0A]'>
     
        <ExperienceCard title={"Kadinvest 7.0"} imageUrl={"./experience/2.jpg"} heading={"Buliding a resilient economy"} description={"Our vision is to create a state-of-the-art milk farm that sets new benchmarks in milk production, animal welfare, and environmental sustainability. With a deep commitment to excellence and innovation, we aim to revolutionize the dairy farming landscape and position ourselves as leaders in the industry."}/>
    
        <ExperienceCard title={"Contractors Briefing"} imageUrl={"./experience/4.jpg"} heading={"MD/CEO Kaduna Markets"}  description={"Our company has always been driven by innovation, excellence, and a commitment to meeting the evolving needs of our customers. Today, I present to you a project that perfectly aligns with these core values and has the power to catapult us to new heights."}/>
      
        <ExperienceCard title={"Site Inspection"} imageUrl={"./experience/3.jpg"} heading={"MD/CEO & contractors"}  description={"During the site inspection, I thoroughly examined all aspects of the milk farm, starting with the physical infrastructure. I assessed the condition of the barns, milking parlors, and other facilities to ensure they were well-maintained and capable of accommodating our operational needs. Proper ventilation, lighting, and hygiene standards were also evaluated to ensure optimal conditions for the cows and milk production."}/>
   
        <ExperienceCard title={"Cattle Barn Inspection"} imageUrl={"./experience/1.jpg"} heading={"Newly constructed cattle barns"} description={"thorough evaluation of a cattle barn or cowshed to assess its condition, functionality, and compliance with safety and animal welfare standards. The inspection is typically conducted by a qualified individual, such as a veterinarian, livestock inspector, or farm manager, with expertise in cattle housing and management"}/>
     </div>
    </motion.div>
  )
}

export default Experience