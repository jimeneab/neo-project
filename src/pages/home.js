import React from 'react'
import ButtonOne from './../components/button/index'
import './style.css'

function HomePage(){
    return(
        <div className='Hero'>
            <div className='heroContent text-center'>
                <h1>Welcome to Neo Educate</h1>
                <h4>simple answer to big questions</h4>
                <ButtonOne text='Learn more!' to="/login"/>
            </div>
        </div>
    )
}

export default HomePage