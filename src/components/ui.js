// import styled, { css } from "styled-components";

// export const Container = styled.div`
//   width: min(1120px, 92%);
//   margin-inline: auto;
// `;

// export const Section = styled.section`
//   padding: 72px 0;
//   background: ${(p) => (p.$alt ? p.theme.colors.sand : "transparent")};
// `;

// export const SectionTitle = styled.div`
//   text-align: center;
//   margin-bottom: 40px;
//   h2 { font-size: clamp(1.7rem, 4vw, 2.4rem); }
//   p { margin-top: 8px; opacity: .8; }
// `;

// const base = css`
//   display: inline-flex; align-items: center; justify-content: center; gap: 8px;
//   padding: 14px 26px; border-radius: 999px; font-weight: 600; font-size: 1rem; font-family: inherit; cursor: pointer;
//   border: 2px solid transparent; transition: transform .15s, box-shadow .15s; color: #fff;
//   &:hover { transform: translateY(-2px); box-shadow: ${(p) => p.theme.shadow}; }
// `;

// const bg = (p) =>
//   p.$variant === "wa" ? p.theme.colors.wa : p.$variant === "ghost" ? "transparent" : p.theme.colors.coral;

// export const Button = styled.a`
//   ${base}
//   background: ${bg};
//   ${(p) => p.$variant === "ghost" && css`border-color: rgba(255,255,255,.7); 
//   &:hover{
//     scale: 0.99;
//   }`}
// `;

// export const ButtonBtn = styled.button`
//   ${base}
//   background: ${bg};
// `;

// export const Grid = styled.div`
//   display: grid; gap: 22px;
//   grid-template-columns: repeat(auto-fit, minmax(${(p) => p.$min || "240px"}, 1fr));
// `;

// export const Card = styled.div`
//   background: ${(p) => p.theme.colors.white};
//   border-radius: ${(p) => p.theme.radius};
//   box-shadow: ${(p) => p.theme.shadow};
//   padding: 26px;
//   display: flex; flex-direction: column; gap: 10px;
// `;

// export const ProductImg = styled.img`
//   width: 100%;
//   aspect-ratio: 4 / 3;
//   object-fit: cover;
//   border-radius: 12px;
//   background: ${(p) => p.theme.colors.sand};
// `;


import styled, { css } from "styled-components";

export const Container = styled.div`
  width: min(1120px, 92%);
  margin-inline: auto;
`;

export const Section = styled.section`
  padding: 72px 0;
  background: ${(p) => (p.$alt ? p.theme.colors.sand : "transparent")};
  @media (max-width: ${(p) => p.theme.bp}) { padding: 52px 0; }
  @media (max-width: ${(p) => p.theme.bpSm}) { padding: 40px 0; }
`;

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 40px;
  h2 { font-size: clamp(1.7rem, 4vw, 2.4rem); }
  p { margin-top: 8px; opacity: .8; }
  @media (max-width: ${(p) => p.theme.bpSm}) {
    margin-bottom: 28px;
    h2 { font-size: 1.55rem; }
  }
`;

const base = css`
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 14px 26px; border-radius: 999px; font-weight: 600; font-size: 1rem; font-family: inherit; cursor: pointer;
  border: 2px solid transparent; transition: transform .15s, box-shadow .15s; color: #fff;
  &:hover { transform: translateY(-2px); box-shadow: ${(p) => p.theme.shadow}; }
  @media (max-width: ${(p) => p.theme.bpSm}) { padding: 12px 22px; font-size: .95rem; }
`;

const bg = (p) =>
  p.$variant === "wa" ? p.theme.colors.wa : p.$variant === "ghost" ? "transparent" : p.theme.colors.coral;

export const Button = styled.a`
  ${base}
  background: ${bg};
  ${(p) => p.$variant === "ghost" && css`
    border-color: rgba(255,255,255,.7);
    &:hover { scale: 0.99; }
  `}
`;

export const ButtonBtn = styled.button`
  ${base}
  background: ${bg};
`;

/* min(100%, X) evita que una columna sea más ancha que la pantalla del celular */
export const Grid = styled.div`
  display: grid; gap: 22px;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, ${(p) => p.$min || "240px"}), 1fr));
  @media (max-width: ${(p) => p.theme.bpSm}) { gap: 16px; }
`;

export const Card = styled.div`
  background: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radius};
  box-shadow: ${(p) => p.theme.shadow};
  padding: 26px;
  display: flex; flex-direction: column; gap: 10px;
  @media (max-width: ${(p) => p.theme.bpSm}) { padding: 20px; }
`;

export const ProductImg = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 12px;
  background: ${(p) => p.theme.colors.sand};
`;