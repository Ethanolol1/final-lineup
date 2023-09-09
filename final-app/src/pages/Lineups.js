import React, { useState } from 'react'
import Dropdown from '../components/Dropdown'
import { maps } from '../assets/objects'
import 'react-dropdown/style.css'
import '../styles/Lineups.css'


function Lineups() {
  const defaultMap = maps[0]
  const [selectedItem, setSelectedItem] = useState(defaultMap)
  const onSelect = (item) => {
    setSelectedItem(item)
    console.log(item)
  }
  
  return (
    <div className="myClassName">
        <h1>Learn Lineups!</h1>
        <Dropdown items={maps} onChange={onSelect} value={defaultMap} />
        <h1 id="currentMap">{selectedItem.name}</h1>
        <img src={selectedItem.img} class="center" />
        
    </div>
  )
}

export default Lineups