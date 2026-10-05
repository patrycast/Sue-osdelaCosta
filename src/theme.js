import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    navy: "#12304a",
    sea: "#2a7f9e",
    sand: "#f6efe4",
    sandDark: "#e9dcc6",   
    coral: "#e0704f",
    text: "#26323d",
    white: "#eee6e6",
    wa: "#25d366",
  },
  radius: "16px",
  shadow: "0 10px 30px rgba(18,48,74,.12)",
  bp: "820px",
   bpSm: "560px",
};

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{box-sizing:border-box;margin:0}
  /* html{scroll-behavior:smooth} */
  html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}

  body{font-family:'Inter',system-ui,sans-serif;color:${(p) => p.theme.colors.text};background:${(p) => p.theme.colors.white};line-height:1.6; overflow-x:hidden;  }
  h1,h2,h3{font-family:'Fraunces',Georgia,serif;color:${(p) => p.theme.colors.navy};line-height:1.2}
  a{color:inherit;text-decoration:none}
  /* img{max-width:100%} */
  img{max-width:100%;height:auto}
  p,h1,h2,h3{overflow-wrap:break-word}

  @media (max-width: ${(p) => p.theme.bpSm}) {
    body{font-size:15px}
  }
`;
