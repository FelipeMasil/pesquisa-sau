import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Survey } from '../components/Survey'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Survey />
    </>
  )
}

export default Home
