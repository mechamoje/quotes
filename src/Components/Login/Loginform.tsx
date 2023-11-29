import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const rabeca = require('../../Assets/Images/rabeca.png');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:3003/login/', { username, password });
            const token = response.data.token;
            localStorage.setItem('quotesLoginToken', token);
            navigate('/');

        } catch (error: any) {
            window.alert('Erro no login:' + error.response.data.error);
        }
    };

    return (
        <Form>
            <label>
                Usuário:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Senha:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <ButtonsContainer>
                <button onClick={handleLogin}>Fazer login</button>
                <button onClick={() => navigate('/signup')}>Criar nova conta</button>
            </ButtonsContainer>
            <img alt='rabeca' src={rabeca} />
        </Form>
    );
};

export default LoginForm;

const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid #EDE9E9;
    padding: 30px;

    label {
        font-weight: bold;
    }

    input {
        margin-left: 10px;
        padding: 5px;
    }

    img {
        margin-top: 14px;
        width: 60px;
        height: 60px;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;

    button {
        cursor: pointer;
        width: 100%;
        border: none;
        background-color: #EDE9E9;
        padding: 5px;
        font-family: "Quicksand", sans-serif;
    }

    button:hover {
        background-color: #E2DBDB;
    }
`