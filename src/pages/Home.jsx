import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import styled from 'styled-components';
import Services from '../components/Services';

export default function Home() {
  return (
    <ContainerCustom>
        <HomeContent>
            <HomeTitle>
                <h1>Núcleo de Apoio Contábil e Fiscal</h1>
                <h2>Simplificando suas obrigações fiscais com agendamento online fácil.</h2>
                <h3>Bem-vindo ao NAF Online, onde tornamos mais simples do que nunca obter ajuda com suas declarações de Imposto de Renda e outros serviços financeiros. Nosso processo de agendamento rápido e conveniente está pronto para atendê-lo. Reserve sua consulta hoje e coloque suas finanças em ordem.</h3>
            </HomeTitle>
            <div>
                <img src="img1.jpeg"/>
                <img src="img2.jpg"/>
                <img src="img3.jpeg"/>
            </div>

            <Cards>
                <CardItem>
                    <h1>Agende sua Consulta conosco!</h1>
                    <h2>Agendar sua consulta conosco é simples e rápido. Escolha o serviço de que você precisa, selecione a data e o horário disponíveis que melhor se adequam à sua agenda e preencha as informações necessárias. Estamos ansiosos para ajudá-lo a resolver suas questões financeiras.</h2>
                    <button>Agendar</button>
                </CardItem>
                <CardItem>
                    <h1>Fale Conosco</h1>
                    <h2>Agendar sua consulta conosco é simples e rápido. Escolha o serviço de que você precisa, selecione a data e o horário disponíveis que melhor se adequam à sua agenda e preencha as informações necessárias. Estamos ansiosos para ajudá-lo a resolver suas questões financeiras.</h2>
                    <button>Entrar em contato</button>
                </CardItem>
            </Cards>
        </HomeContent>
        <Services></Services>
    </ContainerCustom>
  )
}

const ContainerCustom = styled(Container)`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    gap: 20px;
    flex-flow: row wrap;

    & div {
        & img {
            flex-basis: 25%;
            -ms-flex: auto;
            width: 340px;
            position: relative;
            padding: 10px;
            border-radius: 12px;
        }
    }
`;

const HomeTitle = styled.div`
    width: 80%;
    & h1 {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
    }
    & h2 {
        font-size: 1.2rem;
    }
    & h3 {
        font-size: 1rem;
        font-weight: 400;
    }
`;

const Cards = styled.div`
    width: 100%;
    margin: 50px 0;
    display: flex;
    gap: 100px;
    justify-content: center;
    align-items: center;
`;

const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;

    & h1 {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
    }

    & h2 {
        font-size: 1.2rem;
    }

    & h3 {
        font-size: 1rem;
        font-weight: 400;
    }

    & button {
        width: 150px;
    }
`;