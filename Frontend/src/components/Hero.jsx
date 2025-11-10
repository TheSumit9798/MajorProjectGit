import React from 'react'

const Hero = ({title,imageUrl}) => {
  return (
    <div className='hero container' >
        <div className='banner' >
            <h1>{title}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse maiores soluta recusandae, possimus nobis dolor, alias odio ad omnis porro facilis animi quaerat eius officiis vitae magnam quod, provident eligendi! Consequatur in hic sed consequuntur corrupti reprehenderit cumque. Tempore molestias ad velit magni aspernatur. Enim nam provident fuga hic ex.
            </p>
        </div>
        <div className="banner">
            <img src={imageUrl} alt="hero" className='animated-image' />
            <span>
                <img src="/vector.png" alt="vector" />
            </span>
        </div>
    </div>
  )
}

export default Hero