// Import the useState hook from React to manage state in this functional component
import { useState } from 'react'

// Export the Lightbulb component so it can be used in other parts of the app
export const LightbulbIfElseWithComments = () => {
  // Initialize the state variable 'toggle' with a default value of 'lightbulb off'
  // 'setToggle' is the function used to update the value of 'toggle'
  const [toggle, setToggle] = useState('lightbulb off')

  // Define a function to toggle the lightbulb's on/off state
  const toggleLight = () => {
    // Log a message to the console whenever the lightbulb is clicked
    console.log("Clicked")
    // If the current state is 'lightbulb off', change it to 'lightbulb on'
    if (toggle === 'lightbulb off') {
      setToggle('lightbulb on')
    } else {
      // Otherwise, change it back to 'lightbulb off'
      setToggle('lightbulb off')
    }
  }

  // Return the JSX that represents the component's structure
  return (
    // The main container div for the lightbulb component
    <div className="lightbulb-container">
      {/* The clickable div that represents the lightbulb. 
          When clicked, it calls the 'toggleLight' function */}
      <div className="lightbulb" onClick={toggleLight}>
        {/* This div's className dynamically changes based on the value of 'toggle',
            either 'lightbulb off' or 'lightbulb on' */}
        <div className={toggle}>
          {/* Represents the actual bulb inside the lightbulb, 
              styled with CSS */}
          <div className="bulb"></div>
        </div>
      </div>
    </div>
  )
}


