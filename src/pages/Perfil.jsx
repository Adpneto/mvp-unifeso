import React, { useEffect, useState } from 'react'
import { useAuth } from '../components/AuthContext'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
    const { user, logout, removeAgendamento } = useAuth()
    const navigate = useNavigate()
    
    if (!user) {
        navigate('/login')
        return
    } 

    const handleRemoverAgendamento = (index) => {
        if (user.agendamentos && user.agendamentos.length > 0) {
            removeAgendamento(index)
        }
    }

    return (
        <Container>
            <div>
                <img src="user.png" alt="" />
                <h2>{user.nome} {user.sobrenome}</h2>
                <p>Email: {user.email}</p>
                <p>CPF: {user.cpf}</p>
                <h3>Agendamentos</h3>
                <ul>
                    {user.agendamentos.map((agendamento, index) => (
                        <li key={index}>
                            <h3>Data: {agendamento.data}, Horario: {agendamento.horario} <button onClick={() => handleRemoverAgendamento(index)}>Desmarcar</button></h3>
                            
                        </li>
                    ))}
                </ul>
                <button onClick={logout}>Sair da conta</button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--color1);
        padding: 20px;
        border-radius: 12px;
        color: var(--text);

        & img {
            width: 200px;
        }

        & h2 {
            font-size: 2rem;
            padding: 5px 10px;
        }

        & ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0;

            & li {
            list-style: none;

                & h3 {
                    font-size: 1rem;

                    & button {
                        padding: 5px 10px;
                        border-radius: 8px;
                        color: var(--text);
                        background-color: red;
                        border: none;
                    }
                }
            }
        }

        & button {
            padding: 5px 10px;
            border-radius: 8px;
            border: none;
            
        }
    }

`;
export default Perfil