import { useEffect, useState } from 'react'
import PokemonName from './PokemonName'
import PokemonImage from './PokemonImage'
import PokemonPhysicalCharacteristics from './PokemonPhysicalCharacteristics'
import PokemonStats from './PokemonStats'
import Navbar from './Navbar'
import TypeBadge from './TypeBadge'
import { MAX_POKEMON_NUMBER, MIN_POKEMON_NUMBER } from '../constants'
import { getANewPokemonRandomNumber } from '../services/randomPokemonNumber'
import SkeletonLoader from './SkeletonLoader'
import '../styles/App.css'

function App () {
  const [randomNumber, setRandomNumber] = useState()
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonImage, setPokemonImage] = useState()
  const [pokemonStats, setPokemonStats] = useState([])
  const [pokemonPhysicalCharacteristics, setPokemonPhysicalCharacteristics] = useState([])
  const [pokemonTypes, setPokemonTypes] = useState(['default'])

  useEffect(() => {
    // To get a random number between 1 and 151 and set randomNumber with it
    const timer = setTimeout(() => {
      getANewRandomPokemon().then(setRandomNumber)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // To get a Pokemon using a randomNumber gotten before
    if (randomNumber === undefined || randomNumber === null) return

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
      .then(res => res.json())
      .then(data => {
        setPokemonName(data.name)
        setPokemonStats(data.stats)
        setPokemonImage(data.sprites.other.home.front_default)

        // eslint-disable-next-line camelcase
        const { base_experience, weight, height } = data
        const physicalCharacteristics = [
          // eslint-disable-next-line camelcase
          { name: 'base_experience', value: base_experience },
          { name: 'weight', value: weight },
          { name: 'height', value: height }
        ]
        setPokemonPhysicalCharacteristics(physicalCharacteristics)

        const types = []
        if (data.types.length > 1) {
          types.push(data.types[0].type.name)
          types.push(data.types[1].type.name)
        } else {
          types.push(data.types[0].type.name)
        }
        setPokemonTypes(types)
      })
  }, [randomNumber])

  const getANewRandomPokemon = async () => {
    const newRandomNumber = await getANewPokemonRandomNumber()
    setRandomNumber(newRandomNumber)
  }

  const nextPokemon = () => {
    const nextRandomNumber = (randomNumber + 1) > MAX_POKEMON_NUMBER ? MIN_POKEMON_NUMBER : randomNumber + 1
    setRandomNumber(nextRandomNumber)
  }

  const previousPokemon = () => {
    const previousRandomNumber = (randomNumber - 1) < MIN_POKEMON_NUMBER ? MAX_POKEMON_NUMBER : randomNumber - 1
    setRandomNumber(previousRandomNumber)
  }

  return (
    <main className='main-container'>
      {<SkeletonLoader /> &&
        <section className='card'>
          <header className={`card__image-container ${pokemonTypes[0]}__type`}>
            <Navbar pokemonNumber={randomNumber} nextPokemon={nextPokemon} previousPokemon={previousPokemon} />
            <PokemonImage pokemonImage={pokemonImage} pokemonName={pokemonName} />
          </header>
          <PokemonName pokemonName={pokemonName} />
          <span className='card__badges'>
            {
              pokemonTypes.map((type, index) => {
                return (
                  <TypeBadge key={index}>
                    {type}
                  </TypeBadge>
                )
              })
            }
          </span>
          <PokemonPhysicalCharacteristics pokemonPhysicalCharacteristics={pokemonPhysicalCharacteristics} />
          <PokemonStats pokemonStats={pokemonStats} />
        </section>}
      <button className='card__new-pokemon' onClick={getANewRandomPokemon}>Get a Random Pokemon!</button>
    </main>
  )
}

export default App
