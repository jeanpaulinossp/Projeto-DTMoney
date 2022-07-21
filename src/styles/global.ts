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
`