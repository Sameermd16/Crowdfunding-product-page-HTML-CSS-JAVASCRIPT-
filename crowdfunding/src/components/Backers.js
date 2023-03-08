import React from 'react'

const Backers = () => {
  return (
    <>
     <section className="py-5 px-5 bg-white rounded-lg shadow-sm mt-5 mx-5">
        <div className="flex-column ">
        <div>
            <p>$89,914 <br/> <span>of $100,000 backed</span></p>
        </div>
        <div>
            <p>5,007 <br/><span>total backers</span></p>
        </div>
        <div>
            <p>56 <br/><span>days left</span></p>
        </div>
        </div>
        <div>
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