import React, { useState } from 'react'
import Dropdown from '../components/Dropdown'
import MapImage from '../components/MapImage'
import { maps, agents } from '../assets/objects'
import 'react-dropdown/style.css'
import '../styles/Lineups.css'


function Lineups() {
  const defaultMap = maps[0]
  const defaultAgent = agents[0]
  const [selectedMap, setSelectedMap] = useState(defaultMap)
  const [selectedAgent, setSelectedAgent] = useState(defaultAgent)

  const onSelectMap = (item) => {
    setSelectedMap(item)
  }
  const onSelectAgent = (item) => {
    setSelectedAgent(item)
  }
  
  return (
    <div className="myClassName">
      <div className="left" >
        <h1>Learn Lineups!</h1>
        <Dropdown class="center" items={maps} onChange={onSelectMap} value={defaultMap} />
        <h1>{selectedAgent.name}</h1>
        <Dropdown class="center" items={agents} onChange={onSelectAgent} value={defaultAgent} />
      </div>
      <div className="right">
        <MapImage class="right" name={selectedMap.name} img={selectedMap.img} />
      </div>
    </div>
  )
}

export default Lineups