import React from 'react'
import AboutItem from './AboutItem'

const data = [
    {
        year: 2020,
        title: 'Pro CSGO',
        duration: 'Covid Lockdown',
        details: 
        'Wabungus spent his lockdown as an up and coming faceit level 2 that was about to shock the world with his partner sonicmaster at ESL 2021'
    },

    {
        year: 2022,
        title: 'Promising beginnings',
        duration: 'CCC 2022',
        details: 
        'Wabungus vowed to show a stunning performance on the CCC 2022, and so he did! With a near HR performance on his first try'
    },

    {
        year: 2023,
        title: 'Embarrasing endings',
        duration: 'CCC 2023',
        details: 
        'Wabungus horribly sold the bag (as they say) when we dropped a near non-distinction score on the CCC 2023, they say he went into depression for a couple of months before returning to the scene'
    },
]
const About = () => {
  return (
    <div id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#0000FF]'>His story</h1>
        {data.map((item, idx)=> (
            <AboutItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
        ))}
    </div>
  )
}

export default About