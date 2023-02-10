import React from 'react'
import '../styles/TypeBadge.css'
import { colors, badges } from '../assets/types'

function TypeBadge ({ children }) {
  const color = colors[children]
  const badge = badges[children]

  return (
    <div className={`badge ${children}__badge`} style={{ backgroundColor: color }}>
      <div className='badge__icon'>
        {badge}
      </div>
      <span className='badge__text'>
        {children}
      </span>
    </div>
  )
}

export default TypeBadge
