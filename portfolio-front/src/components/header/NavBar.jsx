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
          <Link
            activeClass="active" 
            to="Home" 
            spy={true} 
            smooth={true}
            duration={500}
          >
            Accueil
          </Link>
        </NavListItem>
        <NavListItem>
          <Link
            activeClass="active" 
            to="Skills" 
            spy={true} 
            smooth={true} 
            offset={-80}
            duration={500}
          >
            Compétences
          </Link>
          </NavListItem>
        <NavListItem>
          <Link
            activeClass="active" 
            to="Projects" 
            spy={true} 
            smooth={true} 
            offset={-80}
            duration={500}
          >
            Projets
          </Link>
          </NavListItem>
        <NavListItem>
          <Link
            activeClass="active" 
            to="Contact" 
            spy={true} 
            smooth={true} 
            offset={30}
            duration={500}
          >
            Contact
          </Link>
        </NavListItem>
      </ul>
    </nav>
  )
}

export default NavBar