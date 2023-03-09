import React, {useState} from 'react'
import data from "../data"
import Pledges from "./Pledges"

const About = () => {

  return (
    <>
     <section className = "mt-5 mx-5 mb-5 px-5 py-5 shadow-sm rounded-lg bg-white lg:w-2/3 lg:mx-auto mb-20">
        <div>
            <article>
                <h3 className = "font-bold pt-3 pb-6 text-xl">About this project</h3>    
                <p className = "about_para">
                    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.<br/><br/>

                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                    to allow notepads, pens, and USB sticks to be stored under the stand.
                </p>
            </article>
            <Pledges />
        </div>
     </section>
     
    </>
  )
}

export default About