import { useState } from "react"
import { exercises } from "../../data/exercises"
import { Exercise } from "../../widgets/exercise"

export function Training() {
	const [exs, setExs] = useState(exercises)
	return (
		<>
			{
				exs.map( (ex) => (
					<Exercise key={ex.title} exs={exs} ex={ex} setExs={setExs} />
				))
			}		
		</>
	)
}