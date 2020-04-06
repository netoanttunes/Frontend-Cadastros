import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


import './styles.css';
import logoimg from '../../assets/logo.svg';
import api from '../../services/api'


export default function Cadastro() {
    const [cliente, setCliente] = useState('');
    const [dataEntrega, setDataEntrega] = useState('');
    const [rua_partida, setRua_partida] = useState('');
    const [numero_partida, setNumero_partida] = useState('');
    const [complemento_partida, setComplemento_partida] = useState('');
    const [bairro_partida, setBairro_partida] = useState('');
    const [cidade_partida, setCidade_partida] = useState('');
    const [uf_partida, setUf_partida] = useState('');
    const [rua_destino, setRua_destino] = useState('');
    const [numero_destino, setNumero_destino] = useState('');
    const [complemento_destino, setComplemento_destino] = useState('');
    const [bairro_destino, setBairro_destino] = useState('');
    const [cidade_destino, setCidade_destino] = useState('');
    const [uf_destino, setUf_destino] = useState('');
    
    const history = useHistory();

    async function handlecadastro(e){
        e.preventDefault();

        const data = {
            cliente,
            dataEntrega,
            rua_partida,
            numero_partida,
            complemento_partida,
            bairro_partida,
            cidade_partida,
            uf_partida,
            rua_destino,
            numero_destino,
            complemento_destino,
            bairro_destino,
            cidade_destino,
            uf_destino
        };

        console.log(data)

        try {
           await api.post('entregas', data)

           alert('Cadastro Realizado com Sucesso')
           history.push('/lista')
        
        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.')
        }


    }
    
    return(
        <div className="Cadastro-container">
            <header>
            <img src={logoimg} alt="UNICAD" />
                <Link className="button" to="/lista">Lista de Entregas</Link>
            </header>
            <section className="form">
            
            <form onSubmit={handlecadastro}>
                <h1>Cadastro de Entregas</h1>     
                <input 
                    placeholder="Nome do Cliente"
                    value={cliente}
                    onChange={ e => setCliente(e.target.value)} 
                />
                <input 
                    placeholder="Data da Entrega"
                    value={dataEntrega}
                    onChange={ e => setDataEntrega(e.target.value)} 
                />

                <h2>Endereço de partida</h2>

                <input 
                    placeholder="Rua"
                    value={rua_partida}
                    onChange={ e => setRua_partida(e.target.value)} 
                />
                <input 
                    placeholder="Número (Somente números)"
                    value={numero_partida}
                    onChange={ e => setNumero_partida(e.target.value)} 
                />
                <input 
                    placeholder="Complemento"
                    value={complemento_partida}
                    onChange={ e => setComplemento_partida(e.target.value)} 
                />
                <input 
                    placeholder="Bairro"
                    value={bairro_partida}
                    onChange={ e => setBairro_partida(e.target.value)} 
                />

                <div className="input-group">
                <input 
                    placeholder="Cidade"
                    value={cidade_partida}
                    onChange={ e => setCidade_partida(e.target.value)} 
                />
                <input 
                    placeholder="UF"
                    value={uf_partida}
                    onChange={ e => setUf_partida(e.target.value)} 
                />
                </div>
                <h2>Endereço de destino</h2>

                <input 
                    placeholder="Rua"
                    value={rua_destino}
                    onChange={ e => setRua_destino(e.target.value)} 
                />
                <input 
                    placeholder="Número"
                    value={numero_destino}
                    onChange={ e => setNumero_destino(e.target.value)} 
                />
                <input 
                    placeholder="Complemento"
                    value={complemento_destino}
                    onChange={ e => setComplemento_destino(e.target.value)} 
                />
                <input 
                    placeholder="Bairro"
                    value={bairro_destino}
                    onChange={ e => setBairro_destino(e.target.value)} 
                />
                <div className="input-group">
                <input 
                    placeholder="Cidade"
                    value={cidade_destino}
                    onChange={ e => setCidade_destino(e.target.value)} 
                />
                <input 
                    placeholder="UF"
                    value={uf_destino}
                    onChange={ e => setUf_destino(e.target.value)} 
                />
                </div>
                <button className="button" type="submit">Cadastrar</button>

                </form>

            </section>
           
        </div>
    )
}