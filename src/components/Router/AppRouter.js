import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from '../header/Header';

class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header  />
                    <Switch>
                        
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default AppRouter