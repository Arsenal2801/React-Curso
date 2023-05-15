/*
  * This component is used to render the public routes
  * @param {children} - The children components
  * @returns {JSX.Element} - The public route component
  * @example
  * <PublicRoute>
  *  <Home />
  * </PublicRoute> 
*/
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth"

export const PublicRoute = ( { children } ) => {
  const { logged } = useContext(AuthContext)
  return !logged ? children : <Navigate to="/marvel" />
}
