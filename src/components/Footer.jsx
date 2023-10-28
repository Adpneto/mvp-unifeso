import React, { Component } from 'react'
import styled from 'styled-components';

export class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <img src="logo-white.png"/>

        <div>
            <a target="_blank" href="https://www.facebook.com/feso.unifeso"><i className="bi bi-facebook"></i></a>
            <a target="_blank" href="https://www.instagram.com/feso.unifeso/"><i className="bi bi-instagram"></i></a>
            <a target="_blank" href="https://www.youtube.com/channel/UCqJHUIHPOB0SkdgiVExdSjw/featured"><i className="bi bi-youtube"></i></a>
        </div>
      </FooterContainer>
    )
  }
}

const FooterContainer = styled.div`
    width: 100%;
    background-color: var(--footer);
    margin-top: 30px;
    border-top: 8px solid var(--color1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;

    & img {
        width: 250px;
    }

    & div {
        display: flex;
        gap: 15px;
        & i {
            color: var(--text);
            font-size: 1.6rem;
        }
    }
`;
export default Footer