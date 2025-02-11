import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import {motion} from 'framer-motion'
const Navbar = ({sidebar, setSidebar}) => {
  return (
    <nav className='absolute top-0 left-0 w-full pt-10 text-white z-[9999]'>
        <motion.div 
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          transition={{
            type:'spring',
            stiffness: 100,
            damping: 10,
            delay: 1.2,
          }}
        className="container">
           <div className='flex justify-between items-center'>
           <h1 className='text-2xl font-semibold uppercase'> <span className='text-primery'>Coders</span> Coffee.</h1>
            <div onClick={() => setSidebar(!sidebar)}>
            <IoMenuSharp className='text-3xl cursor-pointer' />
            </div>

           </div>
        </motion.div>

    </nav>
  )
}

export default Navbar