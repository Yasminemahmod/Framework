import React, { useState } from 'react'
import ReactDOM from 'react-dom'

export default function Contact() {
    function changePosition() {
        document.querySelectorAll("input").forEach(input => {
            input.onkeydown = () => {
                if(input.value == "") {
                    input.previousElementSibling.classList.remove("-translate-y-6")
                    input.previousElementSibling.classList.add("-translate-y-1")
                } else {
                    input.previousElementSibling.classList.remove("-translate-y-1")
                    input.previousElementSibling.classList.add("-translate-y-6")
                }
            }
        })
    }


  return <>
      <div className="contact pt-36 pb-28">
        <div className="container text-center">
            <h1 className='comp-heading text-4xl font-bold'>CONTACT SECTION</h1>
            <i className="fa-solid fa-star relative top-3"></i>
            <div className="form w-100 mt-10 text-start">
                <div className="input-group">
                    <label htmlFor="name" className='-translate-y-1'>userName :</label>
                    <input onChange={changePosition} type="text" className='px-4 py-3 mb-10 border-b-2 rounded-b-lg border-gray-100' name="name" id="name" placeholder='userName' />
                </div>
                <div className="input-group">
                    <label htmlFor="age" className='-translate-y-1'>userAge :</label>
                    <input onChange={changePosition} type="text" className='bg-white px-4 py-3 mb-10 border-b-2 rounded-b-lg border-gray-100' name="age" id="age" placeholder='userAge' />
                </div>
                <div className="input-group">
                    <label htmlFor="email" className='-translate-y-1'>userEmail :</label>
                    <input onChange={changePosition} type="email" className='px-4 py-3 mb-10 border-b-2 rounded-b-lg border-gray-100' name="email" id="email" placeholder='userEmail'/>
                </div>
                <div className="input-group">
                    <label htmlFor="pass" className='-translate-y-1'>userPassword :</label>
                    <input onChange={changePosition} type="password" className='px-4 py-3 mb-10 border-b-2 rounded-b-lg border-gray-100' name="pass" id="pass" placeholder='userPassword' />
                </div>
                <button className='bg-teal-600 text-white rounded-md px-3 py-2'>Send Message</button>
            </div>
        </div>
    </div>
  </>
}
