import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'

function NavigationBar() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Link to="/">
       Product List
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/panier">
       Panier
        </Link>
      </Nav.Item>
      
    </Nav>
  );
}

export default NavigationBar;