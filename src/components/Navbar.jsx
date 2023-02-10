import React from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { MAX_POKEMON_NUMBER, MIN_POKEMON_NUMBER } from '../constants'

function Navbar ({ pokemonNumber, nextPokemon, previousPokemon }) {
  const pokemonId = `#${pokemonNumber}`
  const previousPokemonNumber = (pokemonNumber - 1) < MIN_POKEMON_NUMBER ? MAX_POKEMON_NUMBER : pokemonNumber - 1
  const nextPokemonNumber = (pokemonNumber + 1) > MAX_POKEMON_NUMBER ? MIN_POKEMON_NUMBER : pokemonNumber + 1

  return (
    <nav className='card__nav-btns'>
      <span className='nav-right-side'>
        <p className='aside-pokemon-number'>{`#${nextPokemonNumber}`}</p>
        <a
          className='nav-btn card__next-pokemon'
          tabIndex={0}
          role='button'
          onClick={nextPokemon}
          onKeyDown={(event) => {
            // eslint-disable-next-line no-constant-condition
            if (event.key === 'Enter') {
              nextPokemon()
            }
          }}
        >
          <BsFillArrowRightCircleFill />
        </a>
      </span>
      <p className='center-pokemon-number'>
        {pokemonId}
      </p>
      <span className='nav-left-side'>
        <a
          className='nav-btn card__previous-pokemon'
          tabIndex={0}
          role='button'
          onClick={previousPokemon}
          onKeyDown={(event) => {
            // eslint-disable-next-line no-constant-condition
            if (event.key === 'Enter') {
              previousPokemon()
            }
          }}
        >
          <BsFillArrowLeftCircleFill />
        </a>
        <p className='aside-pokemon-number'>{`#${previousPokemonNumber}`}</p>
      </span>
    </nav>
  )
}

export default Navbar
