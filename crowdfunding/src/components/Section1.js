import React from 'react'
import mastercraftLogo from "../images/logo-mastercraft.svg"
import bookmarkIcon from "../images/icon-bookmark.svg"


const Section1 = () => {
  return (
    <>
      <section className="bg-white mx-5 px-5 py-5 -mt-12 rounded-lg relative shadow-sm lg:w-2/3 lg:mx-auto">
        <img src={mastercraftLogo} alt="mastercraft_logo" className="mastercraftlogo"/>
        <div className="text-center mt-5 pt-3">
            <h2 className="font-bold text-xl pb-4">Mastercraft Bamboo Monitor Riser</h2>
            <p className="pb-5 text-sm">  A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        </div>
        <div className="flex justify-between">
            <button className="btn rounded-full px-8 text-white text-sm">Back this project</button>
            <img src={bookmarkIcon} alt="bookmark_icon"/>
        </div>
      </section>
    </>
  )
}

export default Section1;