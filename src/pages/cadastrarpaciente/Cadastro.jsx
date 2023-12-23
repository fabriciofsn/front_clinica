import React, { useState } from 'react';
import "./cadastro.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const App = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    CPF: '',
    idade: '',
    telefone: '',
    endereco: {
      estado: '',
      cidade: '',
      cep: '',
      rua: '',
      bairro: '',
      numero: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Se o campo pertence a "endereco", atualize-o de forma especial
    if (name.startsWith('endereco.')) {
      const enderecoField = name.split('.')[1];
      setFormData((prevData) => ({
        ...prevData,
        endereco: {
          ...prevData.endereco,
          [enderecoField]: value,
        },
      }));
    } else {
      // Se não, atualize-o normalmente
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envia os dados para a rota /cadastrar/paciente
      await axios.post('http://localhost:3000/cadastrar/paciente', formData);
      alert('Paciente Cadastrado com sucesso!');
      location.href('/pacientes');
    } catch (error) {
      alert('Erro ao enviar formulário:', error);
    }
    console.log('Formulário enviado:', formData);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h2>Informações Básicas</h2>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />

        <label htmlFor="CPF">CPF:</label>
        <input type="text" id="CPF" name="CPF" value={formData.CPF} onChange={handleChange} required />

        <label htmlFor="idade">Idade:</label>
        <input type="text" id="idade" name="idade" value={formData.idade} onChange={handleChange} required />

        <label htmlFor="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required />

        <h2>Endereço</h2>
        <label htmlFor="estado">Estado:</label>
        <input type="text" id="estado" name="endereco.estado" value={formData.endereco.estado} onChange={handleChange} required />

        <label htmlFor="cidade">Cidade:</label>
        <input type="text" id="cidade" name="endereco.cidade" value={formData.endereco.cidade} onChange={handleChange} required />

        <label htmlFor="cep">CEP:</label>
        <input type="text" id="cep" name="endereco.cep" value={formData.endereco.cep} onChange={handleChange} required />

        <label htmlFor="rua">Rua:</label>
        <input type="text" id="rua" name="endereco.rua" value={formData.endereco.rua} onChange={handleChange} required />

        <label htmlFor="bairro">Bairro:</label>
        <input type="text" id="bairro" name="endereco.bairro" value={formData.endereco.bairro} onChange={handleChange} required />

        <label htmlFor="numero">Número:</label>
        <input type="text" id="numero" name="endereco.numero" value={formData.endereco.numero} onChange={handleChange} required />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default App;
