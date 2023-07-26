import React from 'react'

const ProjectItem = ({img, title}) => {
    let theItem = title =='m̧̟̝̘͙̰̰͔̳ͪ͛ͤ̈́̃ì̠͇̳̝̮̪̱̯̹̫͇̮͗ͥ̉͌̒̉ͤͫ͗̆ͫ̓ͭͣ̌ͣ̍̉ͧ̚͘͟s̶̸̢̨͎̖̱̱̱͎̳̙̫ͦͮ̉̾͗ͤ̅̄̍ͨͨ̍ͦͬ̍́͊̌̋͂̈̕͘͘͡ͅs̶̸̴̛̛̭̥̳̬̘̣̜̻͚ͨ́̀̽̈̽͌͑ͩ̐̈͛̇ͦ͘͠͠i̸͎̫̝͔̱̫͉ͬ̄͒͐ͯ̂́ͧ͐̾̏̑ͦ͡o͈̩ͬͯ̒͟n̞̰ͮ͐͒͒͜_̸̛̥͔̤̖̤͕̦͇̠̫͔͙̻̫̪̦̮̉̅̃̍͑ͤ̄̍̊͒̏̈́ͩ͜͜͜͡͠͠͠#̵̝̪̩̝̯̞ͯͦͥͮ͊ͧͫ̾͆͋͢1̡̨̖̤́̐̇̇͒̉͛ͨͥ͐ͥ͐̕̕͜_̷̟̯͚ͣ͑̕3ͫ̓͗̓͟_̠͒͢4̴̪̪̬̜͎̒̊̀̈́̓̊̿̕̚͜5̸͈̖̗̰̼̪̥͕͚̪̣̌ͭ̀ͣͪ͗̆͊ͤͬ͑̚͜͞4̨̛̻̪̜̙̲͍͔̔̃̈́͒ͬ̀̚̕' ? '𐌐፱𐌍ዪ𐌵ክ' : 'More Info'
    let linking = title == 'Vinegar Volcano' ? 'https://www.youtube.com/watch?v=3GnaAmJCt7Y' : title == 'Electricity' ? 'https://www.youtube.com/watch?v=YZHJcQK4Nig' : title == 'm̧̟̝̘͙̰̰͔̳ͪ͛ͤ̈́̃ì̠͇̳̝̮̪̱̯̹̫͇̮͗ͥ̉͌̒̉ͤͫ͗̆ͫ̓ͭͣ̌ͣ̍̉ͧ̚͘͟s̶̸̢̨͎̖̱̱̱͎̳̙̫ͦͮ̉̾͗ͤ̅̄̍ͨͨ̍ͦͬ̍́͊̌̋͂̈̕͘͘͡ͅs̶̸̴̛̛̭̥̳̬̘̣̜̻͚ͨ́̀̽̈̽͌͑ͩ̐̈͛̇ͦ͘͠͠i̸͎̫̝͔̱̫͉ͬ̄͒͐ͯ̂́ͧ͐̾̏̑ͦ͡o͈̩ͬͯ̒͟n̞̰ͮ͐͒͒͜_̸̛̥͔̤̖̤͕̦͇̠̫͔͙̻̫̪̦̮̉̅̃̍͑ͤ̄̍̊͒̏̈́ͩ͜͜͜͡͠͠͠#̵̝̪̩̝̯̞ͯͦͥͮ͊ͧͫ̾͆͋͢1̡̨̖̤́̐̇̇͒̉͛ͨͥ͐ͥ͐̕̕͜_̷̟̯͚ͣ͑̕3ͫ̓͗̓͟_̠͒͢4̴̪̪̬̜͎̒̊̀̈́̓̊̿̕̚͜5̸͈̖̗̰̼̪̥͕͚̪̣̌ͭ̀ͣͪ͗̆͊ͤͬ͑̚͜͞4̨̛̻̪̜̙̲͍͔̔̃̈́͒ͬ̀̚̕' ? 'https://www.youtube.com/watch?v=pahiARTWb0U' : ''
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#0000FF]'>
        <img src={img} alt="/" className='rounded-xl group-hover:opacity-10'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                {title}
            </h3>
            <a href="/"/>
                <a  href={linking} target="_blank" className='text-center p-1 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>
                    {theItem}
                </a>
        </div>
    </div>
  )
}

export default ProjectItem