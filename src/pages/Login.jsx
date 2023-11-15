import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../components/AuthContext'
import styled from 'styled-components';

const Login = () => {
    const navigate = useNavigate()
    const { login } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = () => {
        try {
            login(email, password)
            navigate('/perfil')
        } catch (error) {
            setError('Credenciais inválidas')
        }
    }

    return (
        <Container>
            <form>
                <img src="logo.png" alt="" />
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleLogin}>Entrar</button>
                {error && <p>{error}</p>}
                <p>
                    Ainda não tem um conta? <Link to='/register'>Registre-se</Link>
                </p>
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
        }
    }
`;

export default Login