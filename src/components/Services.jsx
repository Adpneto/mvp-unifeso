import React from 'react'
import styled from 'styled-components';

export default function Services() {
  return (
    <Servicos>
        <ServicoItem>
            <h2>Assistência com Declaração de Imposto de Renda</h2>
            <h3>Isso inclui ajudar indivíduos a preencher e submeter suas declarações de Imposto de Renda, esclarecer dúvidas sobre deduções e orientar sobre obrigações fiscais.</h3>
        </ServicoItem>
        <ServicoItem>
            <h2>Orientação para Microempreendedores Individuais (MEIs)</h2>
            <h3>Oferecer suporte para MEIs no que diz respeito à contabilidade, registro de receitas, emissão de notas fiscais e cumprimento das obrigações fiscais.</h3>
        </ServicoItem>
        <ServicoItem>
            <h2>Orientação para Pequenas Empresas</h2>
            <h3>Prestar assistência contábil e fiscal a pequenas empresas, incluindo a revisão e organização de registros financeiros.</h3>
        </ServicoItem>
        <ServicoItem>
            <h2>Educação Financeira</h2>
            <h3>Realizar workshops e palestras sobre educação financeira para ajudar as pessoas a entenderem melhor suas finanças pessoais e empresariais.</h3>
        </ServicoItem>
        <ServicoItem>
            <h2>Consultoria Fiscal</h2>
            <h3>Prestar consultoria para pessoas físicas e empresas sobre questões fiscais específicas, como planejamento tributário, redução de impostos e regulamentações fiscais.</h3>
        </ServicoItem>
        <ServicoItem>
            <h2>Assistência com Regularização de Pendências Fiscais</h2>
            <h3>Auxiliar aqueles que têm pendências fiscais a regularizar sua situação perante a Receita Federal, orientando sobre os passos necessários.</h3>
        </ServicoItem>
        <ServicoItem>
            <h2>Preparação de Documentos Contábeis Básicos</h2>
            <h3>Ajudar a preparar demonstrativos financeiros básicos, como balanços e demonstrativos de resultado.</h3>
        </ServicoItem>
        <ServicoItem>
            <h2>Orientação sobre Benefícios Sociais</h2>
            <h3>Informar sobre benefícios sociais, como o Bolsa Família e programas de assistência social, e ajudar na solicitação desses benefícios.</h3>
        </ServicoItem>
        <ServicoItem>
            <h2>Atendimento a Organizações da Sociedade Civil</h2>
            <h3>Oferecer serviços contábeis para organizações sem fins lucrativos, incluindo a preparação de relatórios financeiros.</h3>
        </ServicoItem>
        <ServicoItem>
            <h2>Informações sobre Legislação Fiscal</h2>
            <h3>Manter o público informado sobre mudanças na legislação fiscal e como essas mudanças podem afetar suas finanças.</h3>
        </ServicoItem>
    </Servicos>
  )
}

const Servicos = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
`;

const ServicoItem = styled.div`
    color: var(--text2);
    width: 180px;
    flex-basis: 23%;
    -ms-flex: auto;
    position: relative;
    padding: 10px;
    border-radius: 12px;
    
    @media only screen and (max-width: 1073px) {
        flex-basis: 30.33%;
    }
    @media only screen and (max-width: 768px) {
        flex-basis: 28%;
    }
    @media only screen and (max-width: 555px) {
        flex-basis: 40%;
    }

    & h2 {
        color: var(--text3);
        font-size:  1.2rem;
    }

    & h3 {
        font-size: 1rem;
    }
`;