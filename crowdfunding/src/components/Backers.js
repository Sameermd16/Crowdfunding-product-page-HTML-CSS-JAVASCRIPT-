import React from 'react'

const Backers = () => {
  return (
    <>
     <section className="py-5 px-5 bg-white rounded-lg shadow-sm mt-5 mx-5">
        <div className="numbers_box">
        <div className=" ">
            <p>$89,914 <br/> <span>of $100,000 backed</span></p>
        </div>
        <div className="pt-4 pb-4 mt-5 border-b border-t border-gray-200 inline-block">
            <p>5,007 <br/><span>total backers</span></p>
        </div>
        <div className="pt-5 ">
            <p>56 <br/><span>days left</span></p>
        </div>
        </div>
        <div className="mt-5">
            <div className="gray_bar">
                <div className="cyan_bar">

                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Backers;