import React from 'react'
import { motion } from 'framer-motion'



function Projects() {
    const projects = [
        {
            title: "How is it possible that you get between N20,000 to N30,000 weekly profits selling products without any marketing?",
            discription: "Hmmm….I like you to read through this slide with an open mind. I am saying this because what I am about to share with you clearly looks like another scam but I promise to you - it not. Look, The Deal is simple… If we accept you as our distributor, It becomes our responsibility to send you products + buyers! While you ensure efficient delivery to our customers on your end. "
        },
        {
            title: "So, How Does It work?",
            discription: "We sell problem solving products that people will always rush to buy. You buy the products from us at very good disounts in bulk and our team of digital matketers will then send you list of customers to buy from you at retail prices. In summary, we’re giving you both goods and customers to sell to. SO all you do is simply deliver to the customers and take cash on delivery. With this process, 30K weekly profit is very posible."
        },
        {
            title: "But Wait oh…This looks crazy. Why Do this? Whats In for the Company?",
            discription: "Good Question, my friend. Now this is why we are doing this. Its not because we want to feed the world :D This is the logic. We have a problem… Logistics You see, Product Marketing and sourcing comes really easy for us. But Logistics and delivery has been a major problem because we get orders from everywhere, its hard sending single piece of our products everywhere. Its not even profitable. So we decided to create a WIN - WIN situation. We send you at least 30 pcs at once, and then send you addresses to cutomers that are very close to you such that you’re spending very little on transport. And then the capital you’ll give us upfront will allow us spend more on marketing and get faster results We can also provide these produces at cheaper prices since we have more money. Hope it make sense now?"
        },
        {
            title: "Hmm…What if We Fail To Send Customers?",
            discription: "In rare occasions where we’re unable to send customers within the stipulated timeframe, distributors can request for a capital refund of unsold items. This process takes about 4 weeks or less. The reason is to allow us process the request and retrieve items. This clearly makes this a risk free opportunity for you! "
        },
        {
            title: "There are some terms though…",
            discription: "Certainly! Distributors must contact customers assigned and provide update at most 3hours after assignment. Distributors must deliver to customers assigned at most 48hours. Should any of the aformentioned not happen, the customer will be assumed to have bought the ordered item. The implication of this is that; should the customer not buy, EdenMart will not send a replacement."
        },
        {
            title: "Okay, So What Are The Products?",
            discription: "Good question. We need to first check a few things before revealing the products; First of all we need to verify your location to know what product sells faster there, then How much capital you have (minimum is N130,000). And finally, if there is a slot for your city. All of this means one thing…This opportunity is not open to everyone and there are limited slots per city. So time is of essence - Hurry."
        },
        {
            title: "How To Get Started?",
            discription: "To get involved before slots are taken: Be sure to fill the form in the below section, and we will inform you if you are eligible for the program or not. If you are, you will get the appropiate account details to make payment. Upon receipt of your payment, we will send an onboarding form and then arrange to send goods to you immediately!"
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
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Frequently Asked Questions [FAQs]</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#7FAB0A]'>
            {projects.map((project, i) => (
                <div key={i+1} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-20 md:p-44 h-screen items-center pt-40'>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50 text-lg'>FAQ {i + 1} of {projects.length}: </span>
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