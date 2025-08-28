import React from 'react'
import Header from './Header';
import Content  from './Content';
import "../components/homepage.css"

function Homepage() {
    return(
        <div className='homepage'>
            <Header/>
            <Content/>
        </div>
    )
}

export default Homepage;