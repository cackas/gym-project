import { exercises } from "../data/exercises"

export class dataService {

	getData(){		
		let data = JSON.parse(localStorage.getItem("GymData"))
		if(data){
			return data
		} else {
			localStorage.setItem("GymData", JSON.stringify(exercises))
			return exercises
		}
	}

	setData(e){
		localStorage.setItem("GymData", JSON.stringify(e))
	}

}