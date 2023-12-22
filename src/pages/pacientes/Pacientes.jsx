import React, { useEffect } from 'react'
import { useState } from 'react'
import useFetch from '../../components/useFetch/UseFetch';
import "./Pacientes.css";

const Pacientes = () => {

  const [dados, setDados] = useState(null);
  const {request, isLoading} = useFetch('http://localhost:3000/pacientes');

 useEffect(() =>{
   request().then((response) =>{
    setDados(response);
  })
 }, []);

 console.log(dados);

  return (
    <div className="wrapper">
    <div className='pacientes'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Idade</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>Cep</th>
            <th>Bairro</th>
            <th>Rua</th>
            <th>Número</th>
          </tr>
        </thead>
        <tbody>
          
            {dados && dados.data.map(data =>{
              return (
                <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.nome}</td>
                <td>{data.CPF}</td>
                <td>{data.idade}</td>
                <td>{data.endereco.estado}</td>
                <td>{data.endereco.cidade}</td>
                <td>{data.endereco.cep}</td>
                <td>{data.endereco.bairro}</td>
                <td>{data.endereco.rua}</td>
                <td>{data.endereco.numero}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Pacientes