import React from 'react'

function PokemonImage ({ pokemonImage, pokemonName }) {
  if (pokemonImage === null) return

  return (
    <img className='pokemon-image' src={pokemonImage} alt={`Pokemon sprite generated with a random number showing ${pokemonName}`} />
  )
}

export default PokemonImage
