/* eslint-disable no-unused-vars */
import React from 'react'
import "../stylesheets/Block.css"

const block = ({year,img,title,subheading,children}) => {
  return (
    <>
        <div className="blocks">
          <div className="year"><p>{year}</p></div>
          <img src={img} alt="" />
          <div className="content">
            <h2>{title}</h2>
            <h4>{subheading}</h4>
            <p>{children}</p>
            {/* <button className="info">Know More</button> */}
          </div>   
      </div>
        
    </>

  )
}

export default block
