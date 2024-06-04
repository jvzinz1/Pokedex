import React, {useState, useEffect} from 'react'
import style, { styled } from 'styled-components'
import {motion} from "framer-motion"
import './App.css'
import Pokedex from './Componentes/Pokedex'

const Spinner = style (motion.div)`
  width: 50px;
  height: 50px;
  border: 4px solid black;
  border-top: 4px solid red;
  border-radius: 50%;
  display: inline-block;
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App() {

  const [carregando, setCarregou] = useState(true);

  useEffect(() => {
    const tempo = setTimeout(() => {
      setCarregou(false);
    }, 5000)
    return () => clearTimeout(tempo);
  }, [])

  return (
    <>
      <Container>
        {carregando ? (
          <Spinner
          animate={{rotate:360}}
          transition={{duration: 1, repeat: Infinity, ease:'linear'}}
          ></Spinner>
        ):(
          <Pokedex></Pokedex>
        )} 
      </Container>
      
    </> 
  )
}

export default App