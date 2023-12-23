import React, { useRef } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import "./modelo.css";

const Modelo = (props) => {
  const refP = useRef()
  const acc = useRef();
  const model = useRef();

  function accordion(){
    if(refP.current){
      if(refP.current.classList.contains('open')){
        refP.current.classList.remove('open')
        acc.current.style = "display: none";
        model.current.style = "max-height: 130px";
      }else{
        refP.current.classList.add('open');
         acc.current.style = "display: initial";
         model.current.style = "max-height: 100%";
      }
    }
  }

  return (
    <div className="modelo">
      <div ref={model} className="model">
        <div className="info-basicas">
          <h4>Informações Básicas</h4>
        </div>
        <div className="info">
          <p>Nome: <strong>{props.nome}</strong></p>
          <p>CPF: <strong>{props.CPF}</strong></p>
        </div>
        <div className="info">
          <p>Telefone: <strong>{props.telefone}</strong></p>
          <p>Idade: <strong>{props.idade}</strong></p>
        </div>
        <div ref={acc} className="accordion">
          <div className='address'>
            <h4>Endereço</h4>
          </div>
        <div className="info">
          <p>Estado: <strong>{props.estado}</strong></p>
          <p>Cidade: <strong>{props.cidade}</strong></p>
        </div>
        <div className="info">
          <p>Rua: <strong>{props.rua}</strong></p>
          <p>Bairro: <strong>{props.bairro}</strong></p>
        </div>
        <div className="info">
          <p>CEP: <strong>{props.cep}</strong></p>
          <p>Número: <strong>{props.numero}</strong></p>
        </div>
        </div>
        <p ref={refP} onClick={() => accordion()} className='arrow'><IoMdArrowDropdown size={50} color='#d9d9d9'/></p>
      </div>
    </div>
  )
}

export default Modelo