import React from 'react'
import avatar from '../../assets/avataaars.svg'

export default function Home() {
  return <>
    <div className="home component pt-52 pb-24">
        <div className="container text-center">
            <div className="img w-60 mx-auto mb-10">
                <img src={avatar} className='w-100' alt="" />
            </div>
            <div className="title text-white">
                <h1 className='comp-heading text-4xl font-bold'>START FRAMEWORK</h1>
                <i className="fa-solid fa-star relative top-3"></i>
                <p className='mt-7'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </div>
  </>
}
