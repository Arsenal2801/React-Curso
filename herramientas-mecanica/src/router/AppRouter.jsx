/*
    * This is the main router for the application.
    * It is responsable for call the components
    * and render the routes

*/

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/login" component={ LoginScreen } />
            <Route path="/" component={ DashboardRoutes } />

            <Redirect to="/login" />
        </Switch>
    )
}