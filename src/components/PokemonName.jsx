import React from 'react'
import '../styles/PokemonName.css'

function PokemonName ({ pokemonName }) {
  if (pokemonName === '') return

  return (
    <h1 className='card__title first-letter-uppercase'>
      {pokemonName}
    </h1>
  )
}

export default PokemonName
