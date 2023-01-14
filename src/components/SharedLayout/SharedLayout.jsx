import { Outlet, NavLink } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <div>
      <div>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies"> Movies </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
