import React from 'react'
import Stat from './Stat'
import '../styles/PokemonStats.css'

function PokemonStats ({ pokemonStats }) {
  return (

    <ul className='card__pokemon__stats'>
      {
        pokemonStats && pokemonStats.map((stat, index) => {
          const newStatName = stat.stat.name.split('-').join('_')

          return (
            <Stat key={index} statName={newStatName}>
              {stat.base_stat}
            </Stat>
          )
        })
      }
    </ul>
  )
}

export default PokemonStats
