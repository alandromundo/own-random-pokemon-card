import React from 'react'
import '../styles/Stat.css'

function Stat ({ children, statName }) {
  const barStatPercentage = ((100 * children) / 180).toFixed(2) > 100 ? 100 : ((100 * children) / 180)

  let newStatName = statName.split('_').map((stat) => stat.charAt(0).toUpperCase() + stat.slice(1)).join(' ')

  if (newStatName === 'Special Attack') {
    newStatName = 'Sp. Atk'
  } else if (newStatName === 'Special Defense') {
    newStatName = 'Sp. Def'
  }

  let className = ''

  for (let i = 0, j = 6; i <= j; i++) {
    const a = ((i / j) * 100).toFixed(2)
    const b = (((i + 1) / j) * 100).toFixed(2)

    if (i === j) {
      if (barStatPercentage <= a) {
        className = `stat__bar__color-lv${i}`
      }
    } else {
      // console.log(`${i} `, `barStatPercentage: ${barStatPercentage}, `, `a = ${(i / 6) * 100}`, `b = ${((i + 1) / 6) * 100}`, barStatPercentage >= ((1 / 6) * i * 100) && barStatPercentage < ((1 / 6) * (i + 1) * 100))
      if (barStatPercentage >= a && barStatPercentage < b) {
        className = `stat__bar__color-lv${i + 1}`
        break
      }
    }
  }

  return (
    <li className='stat'>
      <span className='stat__name'>{newStatName}</span>
      <span className='stat__value'>{children}</span>
      <div className='stat__bar__container'>
        <div className={`stat__bar ${className}`} style={{ width: `${barStatPercentage}%` }} />
      </div>
    </li>
  )
}

export default Stat
