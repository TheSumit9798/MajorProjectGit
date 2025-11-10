import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography' >
      <div className="banner">
        <img src={imageUrl} alt="bio" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who i am</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla cum expedita voluptatem, est odit nisi ipsa voluptas. Ex necessitatibus laudantium natus, ratione nisi maxime iusto, eveniet quo, repellat harum ipsam inventore sint unde rerum temporibus laboriosam ea praesentium consectetur impedit similique! Rem, esse minus incidunt alias repudiandae iusto. Earum, quasi.
        </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure nobis vero praesentium hic velit autem voluptate quidem quasi. Inventore explicabo, velit architecto vitae expedita neque cum perferendis possimus pariatur ducimus eligendi odio reprehenderit ad?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, quod!</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  )
}

export default Biography