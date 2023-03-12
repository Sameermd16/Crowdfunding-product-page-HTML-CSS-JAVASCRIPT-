import React from 'react'
import mastercraftLogo from "../images/logo-mastercraft.svg"
import bookmarkIcon from "../images/icon-bookmark.svg"


const Section1 = () => {

  function getPledge () {
    const backThisProject = document.getElementById("backThisProject");
    const pledgeSection = document.getElementById("pledgeSection");
    pledgeSection.style.display = "block";
    pledgeSection.style.zIndex = "999";
  }
  const bookmarkBtn = document.getElementById("bookmarkBtn");
  function bookmark () {
    bookmarkBtn.innerHTML = "Bookmarked";
  }
  
  return (
    <>
      <section className="bg-white mx-5 px-5 py-5 -mt-12 rounded-lg relative shadow-sm lg:w-2/3 lg:mx-auto">
        <img src={mastercraftLogo} alt="mastercraft_logo" className="mastercraftlogo"/>
        <div className="text-center mt-5 pt-3">
            <h2 className="font-bold text-xl pb-4">Mastercraft Bamboo Monitor Riser</h2>
            <p className="pb-5 text-sm">  A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        </div>
        <div className="flex justify-between">
            <button className="btn rounded-full px-8 text-white text-sm" id='backThisProject' onClick={getPledge}>Back this project</button>
            <div className='flex relative'>
              <img src={bookmarkIcon} alt="bookmark_icon" className='absolute left-4 cursor-pointer'/>
              <button className='bookmark_btn flex items-center gap-5 border bordery-black-600 rounded-full px-10 pr-4 py-4 ml-10' type="button" id='bookmarkBtn' onClick={bookmark} >Bookmark</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Section1;