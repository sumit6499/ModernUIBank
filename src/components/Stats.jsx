import React from 'react'
import { stats } from '../constants'
import styles from '../style'
export default function Stats() {
  return (
    <section className={`flex-1 ${styles.flexCenter} flex-wrap flex-col ss:flex-row  sm:mb-20 mb-6 border-red-900 border-2`}>
      {stats.map((stat)=>(
        <div key={stat.id} className={'flex-1 flex justify-center items-center m-3'}>
            <h4 className='font-poppins font-semibold xs:leading-[53px] leading-[43px] text-white xs:text-[40px] text-[30px] ml-2'>{stat.value}</h4>
            <p className='font-poppins font-normal xs:leading-[26px] leading-[20px] text-gradient xs:text-[20px] text-[15px] uppercase ml-3'>{stat.title}</p>
        </div>
      ))}
    </section>
  )
}
