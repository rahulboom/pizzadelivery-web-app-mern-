import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/PizzaActions'
import Error from '../components/Error'
import Filter from '../components/Filter'
import Loading from '../components/Loading'
import Pizza from '../components/Pizza'
import Particles from 'react-tsparticles';

import textImg from "../images/texture.jpg";
import Footer from '../components/Footer'


export default function HomePage() {


  const dispatch = useDispatch()

  const pizzastate = useSelector(state => state.getAllPizzasReducer)
  const { pizzas, error, loading } = pizzastate




  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])

  return (
    <div className='homepage'  style={{
      backgroundImage: 'url(' + textImg + ')',
      backgroundSize: "cover",
      height: "100%",
      width: "100%",
      color: "#f5f5f5",
      backgroundAttachment: "fixed",
      
  }}>
      {/* ======================================================================================== */}
      <Particles
      id="tsparticles"
      options={{
       
        fpsLimit: 120,
        interactivity: {
          events: {
          
     
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
          
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "daa520",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value:25,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "star",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />

      {/* ================================================================================================== */}
      <Filter></Filter>
      <div className='row justify-content-center'>

        {loading ? (<Loading></Loading>) : error ? (<Error error='Something went wrong'></Error>) : (

          pizzas.map(pizza => {
            return <div className='col-md-4 p-3' key={pizza._id}>
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          })


        )}
      </div>
      <Footer></Footer>
    </div>
  )
}
