import React from 'react'
import MainNav from './../components/navBar/mainNav'
import Footer from './../components/footer/footer'

function DashBoardPage(){
    return(
        <>
        <MainNav/>
        <div className="App">
            <h1>Esta es la pagina</h1>
            <h2>Aqui van las graficxas </h2>
            <h3>del negocio</h3>
            </div>
        <Footer/>
        </>
    )
}

export default DashBoardPage