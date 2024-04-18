import { useState } from "react"
import styles from './form.module.sass'

export function Form({setExs,setIsForm}) {
	const [data,setData]=useState({
		title: '',
		weight: '',
		sets: '',
		reps: ''
	})

	const addExs = (e)=>{
		e.preventDefault()
		setExs((prev)=>[...prev, {id: prev.length+1, ...data}])
		setIsForm((prev)=> !prev)
	}
	return (
		<form className={styles.form} onSubmit={(e)=>{
			addExs(e)}
		}>
				{									
					Object.keys(data).map((atr, ind)=>(						
						<input key={ind} placeholder={atr} name={atr}  onChange={e=>setData(prev=>(
							{...prev, [atr]: e.target.value}
						))} />
					))
				}
			
				<input className={styles.submit} type="submit" value="Add" />
			
		</form>
	)
}
