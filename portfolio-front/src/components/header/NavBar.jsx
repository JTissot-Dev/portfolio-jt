import { Link, Events } from 'react-scroll'
import NavListItem from './NavListItem'
import { useStateContext } from '../../context/ContextProvider'
import { useEffect } from 'react';


const NavBar = () => {

  const {setActiveLink} = useStateContext();

  useEffect(() => {
    Events.scrollEvent.register('end', activeLink => {
      setActiveLink(activeLink);
    });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
    
  })
  

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
            Home
          </Link>
        </NavListItem>
        <NavListItem>
          <Link
            activeClass="active" 
            to="Skills" 
            spy={true} 
            smooth={true} 
            duration={500}
          >
            About
          </Link>
          </NavListItem>
        <NavListItem>
          <Link
            activeClass="active" 
            to="Projects" 
            spy={true} 
            smooth={true} 
            duration={500}
          >
            Projects
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