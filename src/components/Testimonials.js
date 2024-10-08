import React from 'react'
import { motion } from 'framer-motion'
import TestimonialsCard from './TestimonialsCard'


function Testimonials() {
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
     <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-2xl">Testimonials</h3>
  
     <div className='w-full flex space-x-5 overflow-x-scroll pt-40  snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7FAB0A]'>
     
        <TestimonialsCard title={"— John, Distributor in Kaduna"} imageUrl={"./img/test01.jpg"} heading={"1 Of 4"} description={"I’ve been in retail for several years, but being a distributor on this program is by far the most profitable venture I’ve taken on. The product margins are generous, and the demand for these items is growing every day. I love that I can focus on building my business without worrying about stock management or upfront inventory costs. I highly recommend this to anyone looking to start or grow their business."
}/>
    
        <TestimonialsCard title={"— Chioma, Distributor in Ibadan"} imageUrl={"./img/test02.jpg"} heading={"2 Of 4"}  description={"The onboarding process with UrbanSavanna was so easy! I applied through their website and was approved within a few days. The training materials were clear, and I was up and running in no time. I’m already seeing great results and can’t wait to grow my business further. The support team is always just a phone call away, which is really reassuring for someone new to distribution like me."
}/>
      
        <TestimonialsCard title={"— Lola, Distributor in Lagos"} imageUrl={"./img/test03.jpg"} heading={"3 Of 4"}  description={"UrbanSavanna has helped me build a beauty business that I am truly proud of. The beauty products are top-notch, and my customers keep coming back for more! What really sets them apart is the no upfront inventory model. I didn’t have to invest heavily, and that gave me the confidence to dive right in. I’ve grown my income significantly, and the support from the UrbanSavanna team has been fantastic!"
}/>
   
        <TestimonialsCard title={"— Aisha, Distributor in Abuja"} imageUrl={"./img/test04.jpg"} heading={"4 Of 4"} description={"Joining UrbanSavanna has been a game-changer for my business! As a stay-at-home mom, I was looking for a flexible opportunity that would allow me to earn extra income while caring for my kids. The product range is high-quality, and parents in my community love the baby essentials I offer. The best part is the marketing support – I didn’t need any experience, and I’m growing my customer base every month. I’m thrilled to be part of such a supportive and growing company!"
}/>
     </div>
    </motion.div>
  )
}



export default Testimonials