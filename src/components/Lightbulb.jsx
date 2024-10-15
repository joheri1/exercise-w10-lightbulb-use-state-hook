import { useState } from 'react'

export const Lightbulb = () => {
  // Initialize the state for on/off
  const [toggle, setToggle] = useState('lightbulb off')

  // Toggle the on/off state
  const toggleLight = () => {
    console.log("Clicked")
    if (toggle === 'lightbulb off') {
      setToggle('lightbulb on')
    } else {
      setToggle('lightbulb off')
    }
  }

  // Return the JSX
  return (
    <div className="lightbulb-container">
      <div className="lightbulb" onClick={toggleLight}>
        <div className={toggle}>
          <div className="bulb"></div>
        </div>
      </div>
    </div>
  )
}
