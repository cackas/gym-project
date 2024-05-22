import { Exercise } from "../../widgets/exercise"
import { Form } from "../../widgets/form";
import { CirclePlus } from 'lucide-react';
import { dataService } from "../../services/dataService";
import { useQuery } from '@tanstack/react-query'
import { useState } from "react";

export function Training() {

	const { isPending, data } = useQuery({
		queryKey: ['exs'],
		queryFn: dataService.getApiData
	})
	const [isForm, setIsForm] = useState(false)

	return (
		
		<>
			{	isPending ? <h2>Loading...</h2> :
				data.length !== 0 ?
				(data.map( (ex) => (
					<Exercise key={ex.id} ex={ex}/>
				))) : (
					<div className="add-exs">Добавьте упражнение</div>
				)
			}
			<button className="add-widget">
				<CirclePlus onClick={()=> {
					setIsForm(!isForm)
					}}/>
			</button>
			{isForm && <Form setIsForm={setIsForm} />}

		</>		
	)
}