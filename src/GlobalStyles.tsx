import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

const Colors = {
	background: '#FAEFD7',
	text: '#FFF',
} as const;

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'GlacialIndifference', 'Open Sans', sans-serif; 
        background-color: ${Colors.background};
        font-family: 'EB Garamond', serif;

    }
  `;
