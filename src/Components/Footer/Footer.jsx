import React from 'react'


export default function Footer() {
  return <>
    <div className="footer">
        <div className="links text-white py-24">
            <div className="container flex justify-between ">
                <div className="location w-1/3 text-center">
                    <h2 className='font-semibold text-3xl'>LOCATION</h2>
                    <p className='mt-2 mb-4'>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="about-the-web w-1/3 text-center">
                    <h2 className='font-semibold text-3xl'>AROUND THE WEB</h2>
                    <div className="social mt-4">
                        <a href="#" className='border border-white rounded-full px-3 py-2 mx-1'><i className='fa-brands fa-facebook'></i></a>
                        <a href="#" className='border border-white rounded-full px-3 py-2 mx-1'><i className='fa-brands fa-twitter'></i></a>
                        <a href="#" className='border border-white rounded-full px-3 py-2 mx-1'><i className='fa-brands fa-linkedin'></i></a>
                        <a href="#" className='border border-white rounded-full px-3 py-2 mx-1'><i className="fa-solid fa-globe"></i></a>
                    </div>
                </div>
                <div className="about-freelancer w-1/3 text-center">
                    <h2 className='font-semibold text-3xl pb-2'>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
        <div className="copyRight text-center text-white py-6">
            <p>Copyright © Your Website 2021</p>
        </div>
    </div>
  </>
}
