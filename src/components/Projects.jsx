import React from 'react'
import ProjectItem from './ProjectItem'
import volcano from '../assets/volcano.png'
import electricity from '../assets/electricity.png'
import uhoh from '../assets/uhoh.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#0000FF]'>Experiments</h1>
        <p className='text-center py-8'>
            A couple of fun experiments done over the years!
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={volcano} title='Vinegar Volcano'/>
            <ProjectItem img={electricity} title='Electricity'/>
            <ProjectItem img={uhoh} title='m̧̟̝̘͙̰̰͔̳ͪ͛ͤ̈́̃ì̠͇̳̝̮̪̱̯̹̫͇̮͗ͥ̉͌̒̉ͤͫ͗̆ͫ̓ͭͣ̌ͣ̍̉ͧ̚͘͟s̶̸̢̨͎̖̱̱̱͎̳̙̫ͦͮ̉̾͗ͤ̅̄̍ͨͨ̍ͦͬ̍́͊̌̋͂̈̕͘͘͡ͅs̶̸̴̛̛̭̥̳̬̘̣̜̻͚ͨ́̀̽̈̽͌͑ͩ̐̈͛̇ͦ͘͠͠i̸͎̫̝͔̱̫͉ͬ̄͒͐ͯ̂́ͧ͐̾̏̑ͦ͡o͈̩ͬͯ̒͟n̞̰ͮ͐͒͒͜_̸̛̥͔̤̖̤͕̦͇̠̫͔͙̻̫̪̦̮̉̅̃̍͑ͤ̄̍̊͒̏̈́ͩ͜͜͜͡͠͠͠#̵̝̪̩̝̯̞ͯͦͥͮ͊ͧͫ̾͆͋͢1̡̨̖̤́̐̇̇͒̉͛ͨͥ͐ͥ͐̕̕͜_̷̟̯͚ͣ͑̕3ͫ̓͗̓͟_̠͒͢4̴̪̪̬̜͎̒̊̀̈́̓̊̿̕̚͜5̸͈̖̗̰̼̪̥͕͚̪̣̌ͭ̀ͣͪ͗̆͊ͤͬ͑̚͜͞4̨̛̻̪̜̙̲͍͔̔̃̈́͒ͬ̀̚̕'/>
        </div>
    </div>
  )
}

export default Projects