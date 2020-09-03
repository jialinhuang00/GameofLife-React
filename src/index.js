import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom';
import Main from './Main'
import './index.css'

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <Main />
    </Router>
    , document.getElementById('root'))
