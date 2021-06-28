import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { Context } from '..';


function NavbarHeader(props) {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth)
    return (
      <Navbar className="main_navbar" color="warning" light expand="md">
      <NavbarBrand href="/">Simple-Chat</NavbarBrand>      
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>

        </Nav>
        <NavbarText> 
          { user ?
          <button className="btn btn-secondary" onClick={()=>auth.signOut()}>Logout</button>  :
          <NavLink to="/login"><button className="btn btn-secondary">Login</button></NavLink>
          }
          </NavbarText>
    </Navbar>
    );
  }
  
export default NavbarHeader;