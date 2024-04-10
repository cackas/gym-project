import { useState } from "react"
import { exercises } from "../../data/exercises"
import { Exercise } from "../../widgets/exercise"
import { Form } from "../../widgets/form"
import { CirclePlus } from 'lucide-react';

export function Training() {
	let [exs, setExs] = useState(exercises)
	let [isForm, setIsForm] = useState(false)
	return (
		<>
			{exs.length !== 0 ? 
				(exs.map( (ex) => (
					<Exercise key={ex.id} exs={exs} ex={ex} setExs={setExs} />
				))) : (
					<div className="add-exs">Добавьте упражнение</div>
				)
			}
			<button className="add-widget">
				<CirclePlus onClick={()=> setIsForm(isForm=!isForm)}/>
			</button>

			{isForm && <Form setIsForm={setIsForm} setExs={setExs} />}
		</>		
	)
}