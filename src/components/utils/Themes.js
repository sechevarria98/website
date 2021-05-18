import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
    body: '#FEF5F5',
    fontColor: '#000000',
    navbarBG: '#ffffff',
    navbarBGsec: '#e4e4e4',
    cardBG: '#ffffff'
};

export const darkTheme = {
    body: '#1C1C24',
    fontColor: '#ffffff',
    navbarBG: '#23232e',
    navbarBGsec: '#141418',
    cardBG: '#17141d'
};

export const GlobalStyles = createGlobalStyle`
body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.fontColor};
}
`;