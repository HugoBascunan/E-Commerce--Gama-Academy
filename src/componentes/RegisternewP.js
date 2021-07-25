import React, {useState} from 'react'
import Style from './style.css'


export default function RegisternewC(){

    const [nome, setNome]=useState()
    const [link, setLink]=useState()
    const [descricao,setDescricao ]=useState()
    const [preco, setPreco]=useState()

    const armazenar=(chave, valor)=>{
        localStorage.setItem(chave, valor)
    }

    const produtos = "Nome: " + nome + ", Link da Imagem: " + 
    link + ", Descrição: " + descricao + ", Preço: " + preco

    return (
        <>

            <div className="produto">
                <h3>Área de Cadastro de Produtos</h3>
                <br/>
                <label>Digite o <strong>nome</strong> do Produto: </label>
                <br/>
                <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                <br/>
                <br/>
                <label>Digite o <strong>link</strong> da imagem do Produto: </label>
                <br/> 
                <input type="text" value={link} onChange={(e)=>setLink(e.target.value)}/>
                <br/>
                <br/>
                <label>Digite a <strong>descrição</strong> do Produto: </label>
                <br/>
                <input type="text" value={descricao} onChange={(e)=>setDescricao(e.target.value)}/>
                <br/>
                <br/>
                <label>Digite o <strong>preço</strong> do Produto: </label>
                <br/>
                <input type="text" value={preco} onChange={(e)=>setPreco(e.target.value)}/>
                <br/>
                <button onClick={()=>armazenar('CadastroProduto', produtos)}>Gravar Dados</button>
            </div> 
       </>
    )
    

}