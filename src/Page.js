//import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const Container = styled.div({
  background: 'whitesmoke',
  height:     '15vh'
});

const Headline = styled.h1`
  color: ${props => props.theme.color};
  font-family: sans-serif;
`

export const Page = props =>
  <Container>
    <Headline>I'm red!'</Headline>
    <p css={theme => ({ color: theme.color })}>I'm also red!'</p>
  </Container>;
