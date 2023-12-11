import { Link } from 'react-scroll'
import NavListItem from './NavListItem'


const NavBar = () => {

  return (
    <nav>
      <ul
        className="
          flex
          items-center
        "
      >
        <NavListItem>
          <Link>
            Home
          </Link>
        </NavListItem>
        <NavListItem>
          <Link>
            Projects
          </Link>
          </NavListItem>
        <NavListItem>
          <Link>
            Info
          </Link>
          </NavListItem>
        <NavListItem>
          <Link>
            Contact
          </Link>
        </NavListItem>
      </ul>
    </nav>
  )
}

export default NavBar