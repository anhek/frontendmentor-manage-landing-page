import React from 'react';

import { ChakraProvider, theme } from '@chakra-ui/react';
import { render } from '@testing-library/react';

const AllProviders = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
