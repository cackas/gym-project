import { useEffect, useState } from "react"
import { Exercise } from "../../widgets/exercise"
import { Form } from "../../widgets/form"
import { CirclePlus } from 'lucide-react';
import { dataService } from "../../services/dataStorage";

export function Training() {
	const data = new dataService()
		
	const [exs,setExs]=useState(data.getData())
	const [isForm, setIsForm] = useState(false)

	useEffect(()=>{
		data.setData(exs)
	},[exs])

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
				<CirclePlus onClick={()=> setIsForm(!isForm)}/>
			</button>

			{isForm && <Form exs={exs} setIsForm={setIsForm} setExs={setExs} />}
		</>		
	)
}