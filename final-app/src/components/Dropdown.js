import React, { useState } from 'react'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

function Dropdown(props) {
    const items = props.items
    const [isOpen, setIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(props.value)
    const handleItemClick = (item) => {
        setIsOpen(false)
        setSelectedItem(item)
        props.onChange(item)
        // console.log(selectedItem)
    }
    
  return (
    <div className="dropdown">
        <button onClick={() => setIsOpen(!isOpen)}>
            <ArrowDropDownCircleIcon />
        </button>
        {isOpen && (
            <ul className="dropdownList">
                {items != undefined ? items.map((item) => (
                    <div>
                        <button key={item.name} onClick={() => handleItemClick(item)} > {item.name} </button>
                    </div>
                )):<div />}
            </ul>
        )}
    </div>
  )
}

export default Dropdown