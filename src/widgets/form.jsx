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
		setIsForm((prev)=> prev=!prev)
	}

	return (
		<form className={styles.form} onSubmit={(e)=>{
			addExs(e)}
		}>
			<input placeholder="title" onChange={e=>setData(prev=>(
				{...prev, title: e.target.value}
			))} name={data.title}/>
			<input placeholder="weight" onChange={e=>setData(prev=>(
				{...prev, weight: e.target.value}
			))} name={data.weight} />
			<input placeholder="sets" onChange={e=>setData(prev=>(
				{...prev, sets: e.target.value}
			))} name={data.sets} />
			<input placeholder="reps" onChange={e=>setData(prev=>(
				{...prev, reps: e.target.value}
			))} name={data.reps} />
			<input className={styles.submit} type="submit" value="Add" />

		</form>
	)
}
