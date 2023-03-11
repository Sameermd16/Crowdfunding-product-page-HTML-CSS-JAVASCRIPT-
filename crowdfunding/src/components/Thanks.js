import React from 'react'
import Check from "../images/icon-check.svg"

const Thanks = () => {
  return (
    <>
     <section className='thanks_div p-5 bg-white mx-5 mb-5 shaodw-sm'>
        <img src={Check} alt="check_icon"/>
        <p className='font-bold text-xl my-5'>Thanks for your support!</p>
        <p className='text-center'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
            an email once our campaign is completed.
        </p>
        <button>Got it!</button>
     </section>
    </>
  )
}

export default Thanks