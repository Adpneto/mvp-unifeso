import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../components/AuthContext'
import styled from 'styled-components';

const Register = () => {
    const navigate = useNavigate()
    const { signup } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpf, setCPF] = useState('')
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [error, setError] = useState('')

    const handleSignup = () => {
        try {
            signup(email, password, cpf, nome, sobrenome)
            navigate('/')
        } catch (error) {
            setError('Erro ao criar a conta')
        }
    }

    return (
        <Container>
            <form>
                <img src="logo.png" alt="" />
                <div>
                    <input type="text" placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <input type="text" placeholder='Sobrenome' value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}/>
                </div>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="text" placeholder='CPF' value={cpf} onChange={(e) => setCPF(e.target.value)}/>
                <p>
                    Já tem uma conta? <Link to='/login'>Entrar</Link>
                </p>
                <button onClick={handleSignup}>Registrar</button>
                {error && <p>{error}</p>}
            </form>
        </Container>
    )
}

const Container = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        width: 60%;
        padding: 10px;
    }

    & div {
        display: flex;
        gap: 10px;
        width: 100%;
    }

    & form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color1);
        border-radius: 12px;
        padding: 20px;
        gap: 10px;

        & input {
            width: 100%;
            border-radius: 5px;
            padding: 10px 20px;
            outline: none;
            border: none;
            background-color: var(--text2);
        }

        & p {
            color: var(--text);
        }

        & button {
            padding: 5px 10px;
            border-radius: 12px;
            background-color: var(--text2);
            color: var(--text3);
            margin-top: -10px;
        }
    }
`;

export default Register