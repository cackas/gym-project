import { Link } from "react-router-dom";
import './home.sass'

export function Home() {

  return (
      <ul className="nav">
        <li><Link to='/training'>Training</Link></li>
        <li><Link to='/calendar'>Calendar</Link></li>
        <li><Link to='/settings'>Settings</Link></li>
      </ul>
    )
}
