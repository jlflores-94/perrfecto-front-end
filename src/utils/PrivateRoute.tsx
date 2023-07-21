import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ redirectTo = "/login" }) => {
  const isAuthenticated = localStorage.getItem('authToken');
  if( (!isAuthenticated)){
    return <Navigate to={redirectTo} />
  }
  return <Outlet />
}