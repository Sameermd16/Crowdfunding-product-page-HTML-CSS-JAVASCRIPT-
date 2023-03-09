import React from 'react'
import Pledges from "./Pledges" 
import closeModal from "../images/icon-close-modal.svg"

const Modal = () => {
  return (
    <>
    <section className="bg-white mx-5 py-10 px-5 rounded-lg border-2 mt-5 lg:w-2/3 lg:mx-auto">
        <div className="flex justify-between">
          <div>
            <h4 className="font-bold text-xl">Back this project</h4>
            <p className="pt-5 text-gray-600">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
            </p>
          </div>
          <div className="mt-2">
            <img src={closeModal} alt="closeModal_icon" className="w-7"/>
          </div>
        </div>
    </section>
    <Pledges />
    </>
  )
}

export default Modal