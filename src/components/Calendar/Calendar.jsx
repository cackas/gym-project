import Calendar from 'react-calendar';
import styles from './calendar.module.sass'
import "react-calendar/dist/Calendar.css"

export function CalendarPage() {

	return (
		<div>
			<Calendar className={styles.calendar} onClickDay={(value, event)=>console.log(event.target)}  />
		</div>
	)
}
