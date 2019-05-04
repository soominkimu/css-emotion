// eslint-disable-next-line
import React from 'react';  // for <>

// JSX Pragma: this comment tells babel to convert jsx to calls to a function called
// jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css, keyframes, Global } from '@emotion/core'
import { ThemeProvider } from "emotion-theming";
import styled from '@emotion/styled';
import { Page } from './Page.js';


// css prop
// Any component or element that accepts a className prop can also use the css prop.
// The styles supplied to the css prop are evaluated and the computed class name is applied
// to the className prop.

// To pass string styles, you must use css which is exported by @emotion/core,
// it can be used as a tagged template literal.
const style = css`
  color: hotpink;
`

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: 'underline'
})

const AnotherComponent = () => <div
  css={anotherStyle}>
    Some text with an underline.
  </div>;

// The css prop accepts object style directly and does not require an additional import.
const DemoObjectStyles = () => (
  <div
    css={{
      backgroundColor: 'hotpink',
      '&:hover': {
        color: 'lightgreen'
      }
    }}
  >
    This has a hotpink background.
  </div>
);

// tagged template literal
const DemoStringStyles = () => {
  const color = 'darkgreen';  // not working
  return (
    <div
      css={css`
        background-color: hotpink;
        &hover {
          color: ${color};
        }
      `}
    >
      This is also a hotpink background.
    </div>
  );
}

// Composition: You can compose styles together by interpolating value returned from css
// in another style block.
const hotpink = css({
  color: 'hotpink'
})

const hotpinkHoverOrFocus = css({
  ':hover,:focus': hotpink
})

const hotpinkWithBlackBackground = css(
  {
    backgroundColor: 'black',
    color: 'green'
  },
  hotpink
)

const DemoComposition = () => (
  <div>
    <p css={hotpink}>This is hotpink</p>
    <button css={hotpinkHoverOrFocus}>
      This is hotpink on hover or focus
    </button>
    <p css={hotpinkWithBlackBackground}>
      This has a black background and is hotpink. Try moving
      where hotpink is in the css call and see if the color
      changes.
    </p>
  </div>
);

const bounce = keyframes`
  from,
  20%,
  53%,
  80%,
  to  { transform: translate3d(0,0,0); }
  40%,
  43% { transform: translate3d(0, -30px, 0); }
  70% { transform: translate3d(0, -15px, 0); }
  90% { transform: translate3d(0,-4px,0); }
`

const DemoKeyframes = () => (
  <div
    css={css`
      animation: ${bounce} 1s ease infinite;
    `}
  >
    Wow! some bouncing text!
  </div>
);

const DemoGlobal = () =>
  <>
    <Global
      styles={{
        html: {
          color: "brown",
          fontFamily: "sans-serif"
        }
      }}
    />
    <Global
      styles={css`
        body {
          padding: 0;
        }
      `}
    />
    <h1>Hello Emotion 10!!!</h1>
  </>;

// Reusable Media Queries
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
);

const DemoReusableMediaQueries = () =>
  <>
    <div
      css={{
        color: 'green',
        [mq[0]]: {
          color: 'gray'
        },
        [mq[1]]: {
          color: 'hotpink'
        }
      }}
    >
      Some text!
    </div>
    <p
      css={css`
        color: green;
        ${mq[0]} {
          color: gray;
        }
        ${mq[1]} {
          color: hotpink;
        }
      `}
    >
      Some other text!
    </p>
  </>;

const DemoThemeProvider = () =>
  <ThemeProvider
    theme={{
      colors: {
        primary: "hotpink",
        hover: "crimson",
        header: "dimgray"
      }
    }}
  >
    <div>
      <Header>Header Title</Header>
      <BodyText>Hello Emotion 10!!!</BodyText>
    </div>
  </ThemeProvider>;

// The CSS Prop
// ThemeProvider
const Header = props => <h1
    css={theme => ({
      fontSize: 48,
      fontWeight: 600,
      color: theme.colors.header
    })}
    {...props}>
    {props.children}
  </h1>;

const BodyText = props => <p
    css={theme => ({
      color: theme.colors.primary,
      fontFamily: "sans-serif",
      fontSize: 18,
      "&:hover" : {
        color: theme.colors.hover
      }
    })}
    {...props}
  />;

const DemoTheming = () => {
  const theme = {
    color: 'red'
  };

  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
}

const DemoStyled = () => {
  const SomeComp = styled.div({
    color: 'hotpink'
  });

  const AnotherComp = styled.div`
    color: ${props => props.color};
  `

  return <SomeComp>
      How do I look?
      <AnotherComp color="green">
        I'm green.
      </AnotherComp>
    </SomeComp>;
}

function App() {
  return (
    <div css={{
      textAlign: 'center'
    }}>
      <h1>emotion css-in-js test</h1>
      <SomeComponent>
        <AnotherComponent />
      </SomeComponent>
      <DemoObjectStyles />
      <DemoStringStyles />
      <DemoComposition />
      <DemoKeyframes />
      <DemoThemeProvider />
      <DemoGlobal />
      <DemoReusableMediaQueries />
      <DemoTheming />
      <DemoStyled />
    </div>
  );
}

export default App;
