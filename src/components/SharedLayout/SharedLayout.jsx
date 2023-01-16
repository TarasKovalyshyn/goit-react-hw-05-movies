import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SharedLayout = () => {
  return (
    <div style={{ paddingLeft: '15px', paddingTop: '15px' }}>
      <div>
        
        <NavLink to="/" end>
          <button type="button" className="button">
            Home
          </button>
        </NavLink>

        <NavLink to="/movies">
          <button type="button" className="button">
            Movies
          </button>
        </NavLink>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>

      <ToastContainer autoClose={3000} />
    </div>
  );
};
export default SharedLayout;
