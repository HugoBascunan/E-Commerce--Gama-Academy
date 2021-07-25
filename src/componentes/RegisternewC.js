import React, {useState} from 'react'
import Style from './style.css'

export default function RegisternewC(){

    const [nome, setNome]=useState()
    const [endereço, setEndereço]=useState()

    const armazenar=(chave, valor)=>{
        localStorage.setItem(chave, valor)
    }

    const cliente = "Nome: " + nome + ", Endereço: " + endereço

    return (
        <>
            <div className="cliente">
                <h3>Área de Cadastro de Clientes</h3>
                <br/>
                <label>Digite seu Nome: </label>
                <br/>
                <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                <br/>
                <br/>
                <label>Digite seu Endereço: </label>
                <br/>
                <input type="text" value={endereço} onChange={(e)=>setEndereço(e.target.value)}/>
                <br/>
                <button onClick={()=>armazenar('CadastroCliente', cliente)}>Gravar Dados</button>
            </div>
        </>
    )
    

}