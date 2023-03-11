import React from 'react'
import Pledges from "./Pledges" 
import closeModal from "../images/icon-close-modal.svg"

const Modal = () => {

  function closePledge() {
    const pledgeSection = document.getElementById("pledgeSection");
    pledgeSection.style.display = "none";
  }

  return (
    <>
    <section className="bg-white mx-5 mb-20 py-10 px-5 rounded-lg border-2 mt-5 lg:w-2/3 lg:mx-auto pledgeSection" id='pledgeSection'>
        <div className="flex justify-between">
          <div>
            <h4 className="font-bold text-xl">Back this project</h4>
            <p className="pt-5 text-gray-600">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
            </p>
          </div>
          <div className="mt-2">
            <img src={closeModal} alt="closeModal_icon" className="w-7 cursor-pointer" onClick={closePledge}/>
          </div>
        </div>
        <div className="border border-gray-300 p-5 mt-5 rounded-lg">
          <input type="radio" name='plege' className=''></input>
          <span className = "pl-3 font-bold text-lg">Pledge with no reward</span>
          <p className='mt-5 text-gray-600'>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
        </div>
        <div className="border border-gray-300 p-5 mt-5 rounded-lg">
          <input type="radio" name='plege' className=''></input>
          <span className = "pl-3 font-bold text-lg">Bamboo Stand</span>
          <p className='mt-5 text-gray-600'>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
        </div>
        <div className="border border-gray-300 p-5 mt-5 rounded-lg">
          <input type="radio" name='plege' className=''></input>
          <span className = "pl-3 font-bold text-lg">Black Edition Stand</span>
          <p className='mt-5 text-gray-600'>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
        </div>
    </section>
    {/* <Pledges /> */}
    </>
  )
}

export default Modal