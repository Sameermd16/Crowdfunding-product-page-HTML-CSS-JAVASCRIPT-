import React from 'react'

const About = () => {
  return (
    <>
     <section className = "mt-5 mx-5 px-5 shadow-sm rounded-lg bg-white">
        <div>
        <article>
            <h3 className = "font-bold pt-8 pb-6 text-xl">About this project</h3>    
            <p className = "about_para">
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.<br/><br/>

                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
        </article>
        <div className = "mt-10 px-5 pb-5 border-gray-200 stand_box rounded-lg">
            <div>
                <h4 className = "font-bold pt-5">Bamboo Stand</h4>
                <span className = "pledge">Pledge $25 or more</span>
                <p className = "pledge_para">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                    you’ll be added to a special Backer member list.
                </p>
            </div>
            <div className = "mt-5 mb-5">
                <p className = "inventory">101 <span>left</span></p>
            </div>
            <div>
                <button className = "button_stand"> Select Reward</button>
            </div>
        </div>
        </div>
     </section>
     
    </>
  )
}

export default About