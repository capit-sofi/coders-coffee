import React from 'react'
import {motion} from 'framer-motion'
import Coffee1 from '../../assets/coffee/coffee1.png'
import Coffee3 from '../../assets/coffee/coffee3.png'

const servicesData = [
    {id: 1, img: Coffee1, title:'Black Coffee', subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id: 1, img: Coffee3, title:'Hot Coffee', subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id: 1, img: Coffee1, title:'Cold Coffee', subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
]
const carsVariants = {
    hidden: {opacity: 0, y: 20},
    visible:{
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 150,
            damping: 10,
            ease: "easeInOut",

        },
    },
};
const containerVariants ={
    hidden:{opacity: 1},
    visible: {
        opacity: 1,
        transition:{
            delay: 0.6,
            staggerChildren: 0.4,
        }
    }
}

const Services = () => {
  return (
    <div className='container  my-16 space-y-4'>
        {/**header section */}
        <div className='text-center  max-w-lg mx-auto space-y-2'>
            <motion.h1
              initial={{opacity: 0, y: -100}}
              animate={{opacity: 1, y: 0}}
              transition={{
                type:'spring',
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
             className='text-3l font-bold text-lightGray'>
                Fresh and <span className='text-primery'>Tasty</span>
            </motion.h1>
            <motion.p 
               initial={{opacity: 0, x: -100}}
               animate={{opacity: 1, x: 0}}
               transition={{
                 type:'spring',
                 stiffness: 100,
                 damping: 10,
                 delay: 0.9,
               }}
            className='text-sm opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro eos repudiandae at explicabo? Veritatis, iste ducimus! Nobis rerum animi, necessitatibus, labore nihil nesciunt repudiandae voluptatem nostrum ex nulla.</motion.p>

        </div>

        <motion.div variants={containerVariants} 
        initial='hidden'
        whileInView={"visible"}
        viewport={{amount: 0.8}}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {servicesData.map((service) => (
            <motion.div variants={carsVariants} 
            
            className='text-center p-4 space-y-6'>
                <img 
                src={service.img} alt="" className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer'/>
                <div
                 className='space-y-2'>
                    <h1 className='text-2xl font-bold text-primery'>{service.title}</h1>
                    <p className='text-darkGray'>{service.subtitle}</p>
                </div>

            </motion.div>

        ))}
        </motion.div>
      


    </div>
  )
}

export default Services