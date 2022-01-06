import React from "react";
import './Badge.scss'

const Badge = ({ color, onClick, className }) => {
  return (
    <i
      onClick={onClick}
      className={`badge ${className}`}
      style={{ background: `${color}` }}
    />
  )
}

export default Badge