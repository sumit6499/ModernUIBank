import React from 'react'
import style from './style'
import {Navbar,Hero,Billing,Stats} from './components'
export default function App() {
  return (
    <div className='bg-primary w-full overflow-hidden '>
      <div className={`${style.paddingX} ${style.flexCenter} `}>
       <div className={`${style.boxWidth}`}>
        <Navbar />
       </div>
      </div>
      <div className={`${style.flexStart} bg-primary `}>
        <div className={`${style.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div className={`${style.start}  bg-primary ${style.paddingX}`}>
        <Stats/>
        <Billing/>
      </div>
    </div>
  )
}
