import { CircleX } from 'lucide-react';
import { dataService } from '../services/dataService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function Exercise({ex}) {

	const queryClient = useQueryClient()

	const mutation = useMutation({
    mutationFn: dataService.deleteApiData,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['exs'] })
    },
  })

	return (
		<div className="exercise">
			<h2>{ex.title}</h2>
			<p>{ex.weight}</p>
			<b>{ex.sets}</b>/<b>{ex.reps}</b>
			<button
				className="delete-button"
				onClick={() => {
          mutation.mutate(ex.id)
        }}
			><CircleX /></button>
		</div>
	)
}
