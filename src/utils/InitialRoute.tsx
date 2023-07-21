import { Navigate, Outlet } from 'react-router-dom';

export const InitialRoute = ({ redirectTo = "/feed" }) => {
  const isAuthenticated = localStorage.getItem('authToken');
  if( (isAuthenticated)){
    return <Navigate to={redirectTo} />
  }
  return <Outlet />
}