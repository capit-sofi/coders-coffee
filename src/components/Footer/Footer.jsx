import React from 'react'
import { FaFacebookF, FaGoogle, FaPhone, FaInstagram, FaTelegram } from "react-icons/fa";
import {FaMapLocation } from "react-icons/fa6";
import CreditCard from '../../assets/website/credit-cards.webp'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primery to-primaryDark pt-12 pb-8 text-white'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {/**compuny dtails */}
                <motion.div
                  initial={{opacity: 0, y: 100}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once:true, amount:0.5}}
                  transition={{
                     duration:0.6,
                      delay: 0.2,
                    }}
                 className='space-y-6'>
                    <h1 className='text-3l font-bold  uppercase'> Coders cafe</h1>
                    <p className='text-sm max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit quas sed blanditiis eius illum, nesciunt facilis debitis pariatur.</p>
                    <div>
                        <p className='flex items-center gap-2'> <FaPhone/>
                        +251-963-456-527</p>
                        <p className='flex items-center gap-2 mt-2'>
                            {" "}
                            <FaMapLocation/>
                            adama ethiopia
                            
                        </p>
                       
                    </div>
                </motion.div>
                 {/**footer link */}
                 <motion.div 
                  initial={{opacity: 0, y: 100}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once:true, amount:0.5}}
                  transition={{
                     duration:0.6,
                      delay: 0.4,
                    }}
                 className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Quick Links</h1>
                    <div className='grid grid-cols-2 gap-3'>
                        {/**first */}
                        <ul className='space-y-2'>
                            <li>Home</li>
                            <li><a href="">About</a></li>
                            <li>Contact Us</li>
                            <li>Privecy Policy</li>
                        </ul>

                         {/**second */}

                         <ul className='space-y-2'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Privecy Policy</li>
                        </ul>

                    </div>

                 </motion.div>
                  {/**social linkdtails */}
                  <motion.div 
                   initial={{opacity: 0, y: 100}}
                   whileInView={{opacity:1, y:0}}
                   viewport={{once:true, amount:0.5}}
                   transition={{
                      duration:0.6,
                       delay: 0.6,
                     }}
                  className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Follow Us</h1>
                    <div className='flex items-center gap-3'>
                        <FaInstagram className='text-3xl hover:scale-150 duration-300'/>
                        <FaTelegram className='text-3xl hover:scale-150 duration-300'/>
                        <FaFacebookF className='text-3xl hover:scale-150 duration-300'/>
                        <FaGoogle className='text-3xl hover:scale-150 duration-300'/>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold mb-2'>Payment Methode</h1>
                        <img src={CreditCard} alt="" className='w-[80%' />
                    </div>

                 </motion.div>

            </div>
            <motion.p 
               initial={{opacity: 0, y: -100}}
               animate={{opacity: 1, y: 0}}
               transition={{
                 type:'spring',
                 stiffness: 100,
                 damping: 10,
                 delay: 1,
               }}
           
            className='text-white text-center mt-8 pt-8 border-t-2'>
                Copyright $copy; 2025 compuny Name.All rights reserved.
            </motion.p>
        </div>
    </div>
  )
}

export default Footer