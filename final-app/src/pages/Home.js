import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from '../assets/omen.jpeg'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
        <div 
            className="headerContainer"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <h1>Brimmy With the Stimmy </h1>
            <p>Learn and Share Lineups! </p>
            <Link to="/Lineups">
                <button> Get Started </button>
            </Link>
        </div>
    </div>
  )
}

export default Home