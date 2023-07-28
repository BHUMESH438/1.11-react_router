import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      {/*  //adding class */}
      <NavLink to='/' className={({ isActive }) => (isActive ? 'link active' : 'link')}>
        HOME
      </NavLink>
      &nbsp;&nbsp;
      {/* addibg style */}
      <NavLink
        to='/about'
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'gray' };
        }}
      >
        ABOUT
      </NavLink>
      &nbsp;&nbsp;
      <Link to='/products'>PRODUCTS</Link> &nbsp;&nbsp;
      <NavLink
        to='/login'
        style={({ isActive }) => {
          return { color: isActive ? 'blue' : 'gray' };
        }}
      >
        login
      </NavLink>
    </nav>
  );
};
export default Navbar;
