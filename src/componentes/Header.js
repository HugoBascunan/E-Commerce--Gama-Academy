import React from 'react'
import Img from './imgs/inseticida.jpeg'


export default function Header(){
    return(
        <header id='Header'>
            <h1>Curso Controle de Pragas</h1>
            <p>O melhor curso do Brasil</p>
            <img id='imagem' src={Img} width="400px" />
        </header>
       
    )
}