import { Link } from "react-router-dom";
import styles from './home.module.sass'

export function Home() {

  return (
      <ul className={styles.nav}>
        <li><Link to='/training'>Training</Link></li>
        <li><Link to='/calendar'>Calendar</Link></li>
        <li><Link to='/settings'>Settings</Link></li>
      </ul>
    )
}
