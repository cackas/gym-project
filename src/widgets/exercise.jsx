import { CircleX } from 'lucide-react';

export function Exercise({ exs, ex, setExs }) {
	return (
		<div className="exercise">
			<h2>{ex.title}</h2>
			<p>{ex.weight}</p>
			<b>{ex.sets}</b>/<b>{ex.reps}</b>
			<button
				className="delete-button"
				onClick={() =>
					setExs(exs.filter(el => el!==ex)
					)}			
			><CircleX /></button>

		</div>
	)
}
