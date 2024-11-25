import React from 'react'
import btnIcon from "../assets/button-icon.png"

const Button = ({text}) => {
  return (
    <button className='text-sm text-black flex items-center gap-1'>
        {text}
        <img src={btnIcon} alt="" />
    </button>
  )
}

export default Button