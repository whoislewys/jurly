import React from 'react'
import MintButton from './components/MintButton'

const Home = ({ provider }) => {
  return (
    <div>
      <p>home</p>
      <MintButton provider={provider} />
    </div>
  )
}

export default Home
