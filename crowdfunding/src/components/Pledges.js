import React, {useState} from 'react'
import data from "../data"

const Pledges = () => {
  const [cards, setCards] = useState(data);

  const selectReward = document.getElementById("selectReward");
  const thanks = document.getElementById("thanks");
  function showThanks() {
    thanks.style.display = "block";
  }
  return (
    <>
     <div className="data lg:w-2/3 lg:mx-auto">
                {cards.map((card) => {
                    const {id, title, pledge, desc, left, button} = card

                    return (
                        <article key={id} className="border-2 mt-5 rounded-lg px-5 pt-5">
                            <h3 className="font-bold text-lg">{title}</h3>
                            <p className="pledge font-bold">{pledge}</p>
                            <p className="text-gray-600 py-6">{desc}</p>
                            <p className="flex items-center gap-2 font-bold text-4xl">{left} <span className="text-sm text-gray-600 font-light">left</span></p>
                            <button className="btn px-8 text-white text-sm rounded-full py-3 my-5" id='selectReward' onClick="showThanks()">{button}</button>
                        </article>
                    )
                })}
            </div>
    </>
  )
}

export default Pledges