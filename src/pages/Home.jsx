import Container from 'react-bootstrap/esm/Container'
import styled from 'styled-components';
import Services from '../components/Services';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/esm/ModalBody';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns-tz';

export default function Home() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        const now = new Date();
        const endOfWeek = new Date(now);

        // Defina o final da semana como domingo à meia-noite
        endOfWeek.setDate(endOfWeek.getDate() - now.getDay() + 7);
        endOfWeek.setHours(0, 0, 0, 0);

        if (newDate >= now && newDate <= endOfWeek) {
            setDate(newDate);
        } else {
            alert('Você só pode selecionar datas para o restante da semana atual.');
        }
    };

    const formattedDate = format(date, 'dd/MM/yyyy', { timeZone: 'America/Sao_Paulo' });

    const [selectedItem, setSelectedItem] = useState('11:30');

    const items = [
        '9:00', '9:30', '10:00', '10:30',
        '11:00', '11:30', '12:00', '12:30',
        '13:00', '13:30', '14:00', '14:30',
        '15:00', '15:30', '16:00', '16:30',];

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };
    return (
        <ContainerCustom>
            <HomeContent>
                <HomeTitle>
                    <h1>Núcleo de Apoio Contábil e Fiscal</h1>
                    <h2>Simplificando suas obrigações fiscais com agendamento online fácil.</h2>
                    <h3>Bem-vindo ao NAF Online, onde tornamos mais simples do que nunca obter ajuda com suas declarações de Imposto de Renda e outros serviços financeiros. Nosso processo de agendamento rápido e conveniente está pronto para atendê-lo. Reserve sua consulta hoje e coloque suas finanças em ordem.</h3>
                </HomeTitle>
                <div>
                    <img src="img1.jpeg" />
                    <img src="img2.jpg" />
                    <img src="img3.jpeg" />
                </div>

                <Cards>
                    <CardItem>
                        <h1>Agende sua Consulta conosco!</h1>
                        <h2>Agendar sua consulta conosco é simples e rápido. Escolha o serviço de que você precisa, selecione a data e o horário disponíveis que melhor se adequam à sua agenda e preencha as informações necessárias. Estamos ansiosos para ajudá-lo a resolver suas questões financeiras.</h2>
                        <button onClick={handleShow}>Agendar</button>
                    </CardItem>
                    <CardItem>
                        <h1>Fale Conosco</h1>
                        <h2>Agendar sua consulta conosco é simples e rápido. Escolha o serviço de que você precisa, selecione a data e o horário disponíveis que melhor se adequam à sua agenda e preencha as informações necessárias. Estamos ansiosos para ajudá-lo a resolver suas questões financeiras.</h2>
                        <button>Entrar em contato</button>
                    </CardItem>
                </Cards>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Agende sua Consulta conosco!</Modal.Title>
                    </Modal.Header>
                    <ModalBodyCustom>

                        <CalendarCustom>
                            <Calendar onChange={handleDateChange} value={date} />
                        </CalendarCustom>
                        <div>
                            <ul>
                                {items.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleItemClick(item)}
                                        className={selectedItem === item ? 'selected' : ''}>{item}
                                    </li>))}
                            </ul>
                        </div>

                        <ComfirmDate>
                            <h3>Comfirme a data e o horario desejado</h3>
                            <p>Dia: {formattedDate} Horario: {selectedItem}</p>
                        </ComfirmDate>
                    </ModalBodyCustom>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="secondary">Agendar</Button>
                    </Modal.Footer>
                </Modal>
            </HomeContent>
            <Services></Services>
        </ContainerCustom>
    )
}

const ComfirmDate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h3 {
        font-size: 1.2rem;
    }
   & p {
    font-size: 1.2rem;
    font-weight: 900;
   }
`;

const ModalBodyCustom = styled(ModalBody)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & div {
        & ul {
            display: flex;
            flex-wrap: wrap;
            text-decoration: none;
            list-style: none;
            gap: 10px;
            
            & li {
                background-color: var(--text2);
                color: var(--text);
                text-align: center;
                font-size: 1.2rem;
                padding: 4px;
                width: 100px;
                border-radius: 12px;
                cursor: pointer;
                &.selected {
                    background-color: var(--color1);
                }
            }
        }
    }
`;

const CalendarCustom = styled.div`
    margin: 20px;

    & .react-calendar__tile--active {
        background-color: var(--color1)!important;
        color: white!important;
        border-radius: 12px;
    }

    & .react-calendar__tile--now {
        background-color: var(--text2);
        border-radius: 12px;
        color: black;
    }

    & .react-calendar__tile--week {
        cursor: not-allowed;
    }
`;

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

    & button {
        background-color: var(--color1);
        color: var(--text);
        padding: 10px;
        border-radius: 12px;
        font-weight: 700;
    }
`;