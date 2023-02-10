import React from 'react'
import '../styles/PokemonPhysicalCharacteristics.css'

function PokemonPhysicalCharacteristics ({ pokemonPhysicalCharacteristics }) {
  return (
    <ul className='card__pokemon__data'>
      {
        pokemonPhysicalCharacteristics.map((characteristic, index) => {
          return (
            <li key={index} className={`pokemon__data__${characteristic.name} first-letter-uppercase`}>
              <b className='data__title'>{characteristic.name.split('_').join(' ')}: </b>
              <span className='data__base-value'>
                {
                  characteristic.name === 'weight'
                    ? `${characteristic.value / 10} kg`
                    : characteristic.name === 'height'
                      ? `${characteristic.value / 10} m`
                      : characteristic.value
                }
              </span>
            </li>
          )
        })
      }
    </ul>
  )
}

export default PokemonPhysicalCharacteristics
