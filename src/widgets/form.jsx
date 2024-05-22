import styles from './form.module.sass'
import { dataService } from "../services/dataService"
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function Form({setIsForm}) {

	const queryClient = useQueryClient()

	const mutation = useMutation({
    mutationFn: dataService.addApiData,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['exs'] })
			setIsForm((prev)=> !prev)
    },
  })

	const {register, handleSubmit} = useForm()

	const IData = [
		'title',
		'weight',
		'sets',
		'reps'
	]

	return (
		<form className={styles.form} onSubmit={handleSubmit(e => {
			console.log(e)
			mutation.mutate(e)
			})}>
				{									
					IData.map((atr, ind)=>(						
						<input {...register(atr, { required: true })} key={ind} placeholder={atr} name={atr} />
					))
				}
			
				<input className={styles.submit} type="submit" value="Add" />
			
		</form>
	)
}
