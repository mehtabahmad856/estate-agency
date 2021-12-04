import React from 'react'
import HeroSection from '../HeroSection/HeroSection'

const Home = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Home toggle={toggle}/> 
          <HeroSection /> 
        </>
    )
}

export default Home;


