import React from 'react'
import WorldMap from '../../assets/world-map.png'
import {motion} from "framer-motion"

const whereToBuy = () => {
  return (
    <div className='container my-36'>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
        {/**form section */}
        <div className='space-y-8'>
            <motion.h1
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{
                delay:0.2,

            }}
             className='text-4xl font-bold text-darkGray font-serif'>Buy our products from any where</motion.h1>
            <motion.div 
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              transition={{
                  delay:0.4,
  
              }}
            className='flex items-center gap-4'>
                <input type="text" placeholder='country' className='input-style w-full lg:w-[150px]' />
                <input type="email" placeholder='email' className='input-style w-full' />
            </motion.div>
            <motion.div
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              transition={{
                  delay:0.6,
  
              }}
             className='flex items-center gap-4'>
                <input type="text" placeholder='name' className='input-style w-full ' />
                <input type="text" placeholder='zipcode' className='input-style w-full lg:w-[150px]' />
            </motion.div>
            <motion.button
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              transition={{
                  delay:0.7,
  
              }}
            className='primary-btn w-full'
            >Order Now</motion.button>

        </div>

         {/**map section */}
         <div className='col-span-2'>
            <motion.img 
              initial={{opacity:0, scale:0.5}}
              whileInView={{opacity:1, scale:1}}
              transition={{
                  delay:1,
  
              }}
            src={WorldMap} alt="" className='w-full sm:w-[500px] mx-auto'/>

         </div>
    </div>
</div>
  )
}

export default whereToBuy