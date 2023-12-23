import React, { useEffect } from 'react';
import { useState } from 'react';
import useFetch from '../../components/useFetch/UseFetch';
import Loader from '../../components/loader/Loader';
import "./Pacientes.css";
import Button from '../../components/buttons/Button';
import Modelo from '../../components/modelo/Modelo';


const Pacientes = () => {

  const [dados, setDados] = useState(null);
  const {request, isLoading} = useFetch('http://localhost:3000/pacientes');

 useEffect(() =>{
   request().then((response) =>{
    setDados(response);
  })
 }, []);
 console.log(dados)
  return (
    <div className="wrapper">
      {isLoading && <Loader />}
    <div className='pacientes'>
      <div className="btn">
        <div className="search">
        <input type="search" placeholder='Digite Para Procurar Paciente'/>
        </div>
        <Button name="Cadastrar Paciente" color="#198754"/>
      </div>
      <div className="exibir-pacientes">
        
        <div style={{display: 'flex', flexWrap: 'wrap', margin: 'auto', justifyContent: 'center'}}>
        {dados && dados.data.map(data =>{
          return(
            <div style={{margin: '20px 20px'}}>
              <Modelo nome={data.nome} CPF={data.CPF} idade={data.idade} telefone={data.telefone}
              estado={data.endereco.estado} cidade={data.endereco.cidade} rua={data.endereco.rua}
              bairro={data.endereco.bairro} cep={data.endereco.cep} numero={data.endereco.numero}
              />
            </div>
              )
            })}
            </div>
        
      </div>
    </div>
    </div>
  )
}

export default Pacientes