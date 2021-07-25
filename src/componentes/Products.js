import React from 'react'
import Img1 from './imgs/book.png'
import Img2 from './imgs/tv.png'
import Style from './style.css'

export default function Products(){
    return(
        <>
        <div className="card-container">
            <div className='flex-div'>
                <h1>Ebook Controle de Pragas</h1>
                <img id='imagem' src={Img1} width="200px"/>
                <p>Informações em qualquer lugar.</p>
                <p><strong>Preço: R$ 45,00</strong></p>
                <a href='https://hotmart.com/product/controle-de-pragas-urbanas/M41659019Y'
                   target= '_blank'>
                <button><strong>Comprar</strong></button>
                </a>
                
            </div>
            <div className='flex-div'>
                <h1>Curso Controle de Pragas</h1>
                <img id='imagem' src={Img2} width="200px"/>
                <p>O melhor curso do Brasil</p>
                <p><strong>Preço: R$ 450,00</strong></p>
                <a href='https://hotmart.com/product/curso-profissionalizante-controle-de-pragas/V41046495Q'
                   target= '_blank'>
                <button><strong>Comprar</strong></button>
                </a>
            </div>
        </div>
        </>
    )
    }