import { MAX_POKEMON_NUMBER, MIN_POKEMON_NUMBER } from '../constants'

export const getANewPokemonRandomNumber = async () => {
  try {
    const res = await fetch('https://csrng.net/csrng/csrng.php?min=1&max=151')
    const data = await res.json()
    const { random } = data[0]
    return random
  } catch {
    console.log('Generating a random number without API.')
    const newRandomNumber = Math.floor(Math.random() * (MAX_POKEMON_NUMBER - MIN_POKEMON_NUMBER + 1)) + MIN_POKEMON_NUMBER
    return newRandomNumber
  }
}
