import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  // ANCHOR Variaveis das cores
	:root {
		--red: #e52e4d;
		--blue: #5429cc;
		--green: #33cc95;
		
		--blue-light: #6933ff;

		--text-title: #363f5f;
		--text-body: #969cb3;

		--background: #f0f2f5;
		--shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
		//ANCHOR Fonte ideal para desktops (font padrao 16px)
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
		//ANCHOR Fonte ideal para smartphones (font padrao 16px)
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
	}
	//ANCHOR É importante definir as fontes para esses tipos, pois eles tem as proprias fontes pré-configuradas
	body, input, textarea, button {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 600;
	}

	button {
		cursor: pointer;
	}
	//ANCHOR Tudo que estiver desabilitado irá receber essas configurações
	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.react-modal-overlay {
		background: rgba(0, 0, 0, 0.5);
		// faz a tela sempre fixar por cima
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		//ajuda na centralização
		display: flex;
		align-items: center;
		justify-content: center;

	}

	.react-modal-content {
		width: 100%;
		// limita o tamanho do Modal a 576px
		max-width: 576px;
		background: var(--background);
		padding: 3rem;
		//para manter o botão de fechar dentro do modal
		position: relative;
		border-radius: 0.25rem;
	}

	.react-modal-close {
		//coloca o botão no canto
		position: absolute;
		right: 1.5rem;
		top: 1.5rem;
		border: 0;
		background: transparent;

		transition: 0.2s;

		&:hover {
			filter: brightness(0.8)
		}
	}
`