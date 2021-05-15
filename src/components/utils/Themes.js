import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
    body: '#e4e4e4',
    fontColor: '#000000'
};

export const darkTheme = {
    body: '#23232e',
    fontColor: '#ffffff'
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.fontColor};
    }
`;