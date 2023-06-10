import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

body {
  margin: 10px;
  padding: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.container {
  display: grid;
  justify-items: center;
  gap: 50px;
  width: 700px;
  padding: 24px;
  margin: auto;
  background-color:  #f8f8f8;
  border: 2px solid #C2C2C2;
  border-radius: 3px;
  box-shadow: 0 4px 7px rgba(0, 0, 0, .25);
}
`;
