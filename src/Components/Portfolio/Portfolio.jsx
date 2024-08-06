import React, { useState } from 'react'
import img1 from '../../assets/port1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'

export default function Portfolio() {
    const showImg = (event) => {
        const source = event.currentTarget.children[0].src
        const chosenImg = document.querySelector(".chosen-img")
        chosenImg.children[1].children[0].src = source    
        chosenImg.classList.remove("hidden")    
        chosenImg.classList.add("flex")    
    }


    function close() {
        document.querySelector(".chosen-img .img").addEventListener("click", e => {
            e.stopPropagation()
        })
        const chosenImg = document.querySelector(".chosen-img")
        chosenImg.children[1].children[0].src = ""    
        chosenImg.classList.remove("flex")    
        chosenImg.classList.add("hidden")    
    }





  return <>
  {/* flex */}
    <div className="portfolio pt-36 pb-28 relative"> 
        <div onClick={close} className="chosen-img hidden justify-center content-center absolute top-0 bottom-0 start-0 end-0 z-20">
            <div className="overlay fixed top-0 bottom-0 start-0 end-0"></div>
            <div className="img w-1/2 flex justify-center content-center m-auto">
                <img src="" className='W-100' alt="" />
            </div>
        </div>
        <div className="container text-center">
            <h1 className='comp-heading text-4xl font-bold'>PORTFOLIO COMPONENT</h1>
            <i className="fa-solid fa-star relative top-3"></i>
            <div className="imgs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 mx-auto">
                <div onClick={showImg} className="img rounded-lg overflow-hidden">
                    <img src={img1} alt="" />
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div onClick={showImg} className="img rounded-lg overflow-hidden">
                    <img src={img2} alt="" />
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div onClick={showImg} className="img rounded-lg overflow-hidden">
                    <img src={img3} alt="" />
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div onClick={showImg} className="img rounded-lg overflow-hidden">
                    <img src={img1} alt="" />
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div onClick={showImg} className="img rounded-lg overflow-hidden">
                    <img src={img2} alt="" />
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div onClick={showImg} className="img rounded-lg overflow-hidden">
                    <img src={img3} alt="" />
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>
    </div>
  </>
}
