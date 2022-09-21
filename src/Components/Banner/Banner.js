import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner' >
        <div className="content">
            <h1 className="title">Movie Name</h1>
            <div className="banner_buttons">
                <button className='button' >Play</button>
                <button className='button' >My List</button>
            </div>
            <h1 className="description">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</h1>
        </div>
     <div className="fade">

     </div>

    </div>
  )
}

export default Banner