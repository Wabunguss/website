import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter,FaLinkedinIn,FaGithub} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://i.imgur.com/dLG4qFH.jpg" alt="joe"/>
        <div className='w-full h-screen absolute top-0 left-0'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-start items-center'>
            <h1 className='sm:text-fxl text-4xl font-bold text-[#0000FF]'>wabungus</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-[#0000FF]'>entrepreneurial inspiration
                <TypeAnimation
                sequence={[
                // Same substring at the start will only be typed out once, initially
                'wabungus is a gamer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'wabungus is a genius',
                1000,
                'wabungus is a pro',
                1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', paddingLeft: '5px'}}
                repeat={Infinity}
            /></h2>
            <div className='flex justify-between pt-6 max-w-[100px] w-full'>
                <a href='https://github.com/topics/mark-zuckerberg' target="_blank">
                    <FaGithub  className='cursor-pointer' size={15}/>
                </a>
                <a href='https://www.linkedin.com/in/mark-zuckerberg-618bba58/' target="_blank">
                <FaLinkedinIn href='https://github.com/topics/mark-zuckerberg' className='cursor-pointer' size={15}/>
                </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main