//Diegos demo//
import { useState } from 'react'

export const lightbulbBoolean = () => {
  const [on, setOn] = useState(false)

  const toggleLight = () => {
		setOn((previousStateofVarOn) => !previousStateofVarOn)

		console.log(on)
		}

		return (
			<div className="border-box">
				<h2>Toggle on/off using Boolean</h2>
				<div className={`Lightbulb ${on ? "on" : "off"}`}
				onClick={toggleLight}></div>
				</div>
		)
	}