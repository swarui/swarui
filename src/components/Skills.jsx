import React from 'react'
import Bootstrap from '../assets/Bootstrap.png'
import Python from '../assets/Python.png'
import Tailwind from '../assets/Tailwind.png'
import Javascript from '../assets/Javascript.png'
import React1 from '../assets/React1.png'
import Css from '../assets/Css.png'
import Html from '../assets/Html.png'
import Figma from '../assets/Figma.png'



export default function Skills() {
  return (
    <div id='skills' className='flex flex-col items-center justify-center mt-20 sm:p-0 lg:p-10'>
      <h2 style={{ fontFamily: 'Poppins' }} className='text-center text-2xl font-medium '>Skills</h2>
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 gap-5 text-center mt-20'>
      <button 
  style={{ 
    backgroundColor: '#9C9DD8', 
    padding: '10px 19px', 
    borderRadius: '5px', 
    fontFamily: 'Poppins', 
    fontSize: '15px', 
    fontWeight: '500', 
    border: '1px solid black',
    display: 'flex', 
    alignItems: 'center', // This centers the items vertically
    gap: '8px' // Adjust the space between the image and text
  }}
> 
  <img 
    src={Javascript} 
    className='w-5 h-5' 
    alt="" 
  />
  Javascript
</button>

<button 
  style={{ 
    backgroundColor: '#9C9DD8', 
    padding: '10px 35px', 
    borderRadius: '5px', 
    fontFamily: 'Poppins', 
    fontSize: '15px', 
    fontWeight: '500', 
    border: '1px solid black',
    display: 'flex', 
    alignItems: 'center', // This centers the items vertically
    gap: '8px' // Adjust the space between the image and text
  }}
> 
  <img 
    src={Html} 
    className='w-5 h-5' 
    alt="" 
  />
  Html
</button>

<button 
  style={{ 
    backgroundColor: '#9C9DD8', 
    padding: '10px 40px', 
    borderRadius: '5px', 
    fontFamily: 'Poppins', 
    fontSize: '15px', 
    fontWeight: '500', 
    border: '1px solid black',
    display: 'flex', 
    alignItems: 'center', // This centers the items vertically
    gap: '8px' // Adjust the space between the image and text
  }}
> 
  <img 
    src={Css} 
    className='w-6 h-6' 
    alt="" 
  />
  Css
</button>
        <button 
  style={{ 
    backgroundColor: '#9C9DD8', 
    padding: '10px 29px', 
    borderRadius: '5px', 
    fontFamily: 'Poppins', 
    fontSize: '15px', 
    fontWeight: '500', 
    border: '1px solid black',
    display: 'flex', 
    alignItems: 'center', // This centers the items vertically
    gap: '8px' // Adjust the space between the image and text
  }}
> 
  <img 
    src={React1} 
    className='w-5 h-5' 
    alt="" 
  />
  React
</button>
        
        <button 
  style={{ 
    backgroundColor: '#9C9DD8', 
    padding: '10px 19px', 
    borderRadius: '5px', 
    fontFamily: 'Poppins', 
    fontSize: '15px', 
    fontWeight: '500', 
    border: '1px solid black',
    display: 'flex', 
    alignItems: 'center', // This centers the items vertically
    gap: '8px' // Adjust the space between the image and text
  }}
> 
  <img 
    src={Tailwind} 
    className='w-5 h-5' 
    alt="" 
  />
  Tailwind
</button>
        <button 
  style={{ 
    backgroundColor: '#9C9DD8', 
    padding: '10px 19px', 
    borderRadius: '5px', 
    fontFamily: 'Poppins', 
    fontSize: '15px', 
    fontWeight: '500', 
    border: '1px solid black',
    display: 'flex', 
    alignItems: 'center', // This centers the items vertically
    gap: '8px' // Adjust the space between the image and text
  }}
> 
  <img 
    src={Bootstrap} 
    className='w-5 h-5' 
    alt="" 
  />
  Bootstrap
</button>

<button 
  style={{ 
    backgroundColor: '#9C9DD8', 
    padding: '10px 25px', 
    borderRadius: '5px', 
    fontFamily: 'Poppins', 
    fontSize: '15px', 
    fontWeight: '500', 
    border: '1px solid black',
    display: 'flex', 
    alignItems: 'center', // This centers the items vertically
    gap: '11px' // Adjust the space between the image and text
  }}
> 
  <img 
    src={Python} 
    className='w-5 h-5' 
    alt="" 
  />
  Python
</button>
<button 
  style={{ 
    backgroundColor: '#9C9DD8', 
    padding: '10px 25px', 
    borderRadius: '5px', 
    fontFamily: 'Poppins', 
    fontSize: '15px', 
    fontWeight: '500', 
    border: '1px solid black',
    display: 'flex', 
    alignItems: 'center', // This centers the items vertically
    gap: '11px' // Adjust the space between the image and text
  }}
> 
  <img 
    src={Figma} 
    className='w-5 h-5' 
    alt="" 
  />
  Figma
</button>
      </div>
      </div>
  )
}
