import React from 'react'
import Container from '../Container'
import { orbitron } from '../../../fonts/Font'

const Service = () => {
  return (
    <>
    <section className='pt-[130px] pb-[105px]'>
        <Container>
            <div className="">
                <h3 className={`${orbitron.className} text-white text-[52px] font-bold`}>Dive into the Cybernetic <span className='text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]'>Universe</span></h3>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Service