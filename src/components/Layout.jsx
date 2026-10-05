import { useState, useEffect } from "react";
import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./ui.js";
import logo from "../assets/suenodelacosta-logo.jpg";
import { business, waLink, social } from "../data.js";
import { FacebookIcon, InstagramIcon } from "./SocialIcons.jsx";

const HEADER_H = 120;        
const HEADER_H_MOBILE = 80;

const WhatsAppIcon = ({ size = 34 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Header = styled.header`
  position: sticky; top: 0; z-index: 50;
  background: rgba(255,255,255,.95); backdrop-filter: blur(8px);
  border-bottom: 1px solid ${(p) => p.theme.colors.sandDark};
`;

const Bar = styled(Container)`
  display: flex; align-items: center; justify-content: space-between;
  height: ${HEADER_H}px;
  @media (max-width: ${(p) => p.theme.bp}) { height: ${HEADER_H_MOBILE}px; }
`;

const Logo = styled(Link)`
  display: flex; align-items: center; height: 150px;
`;

const LogoImg = styled.img`
  height: ${HEADER_H - 2}px;
  width: auto;
  border-radius: 50%;
  display: block;
  @media (max-width: ${(p) => p.theme.bp}) { height: ${HEADER_H_MOBILE - 12}px; }
`;

const Nav = styled.nav`
  display: flex; gap: 26px; align-items: center;

  a {
    position: relative;
    font-weight: 700;
    font-size: 1.15rem;
    padding: 6px 0;
  }

  a::after {
    content: "";
    position: absolute;
    left: 0; bottom: 0;
    width: 100%; height: 2px;
    background: ${(p) => p.theme.colors.coral};
    transform: scaleX(0);
    transform-origin: right;          
    transition: transform .6s ease;    
  }

  a.active::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  @media (max-width: ${(p) => p.theme.bp}) {
    position: absolute; top: ${HEADER_H_MOBILE}px; left: 0; right: 0; background: #fff; flex-direction: column;
    padding: 20px; gap: 16px; box-shadow: ${(p) => p.theme.shadow};
    display: ${(p) => (p.$open ? "flex" : "none")};
    a { align-self: flex-start; }
  }
`;


const Burger = styled.button`
  display: none; background: none; border: 0; font-size: 1.8rem; cursor: pointer;
  @media (max-width: ${(p) => p.theme.bp}) { display: block; }
`;

const Footer = styled.footer`
  background: ${(p) => p.theme.colors.navy}; color: #dce6ee; padding: 48px 0 24px;
  h3 { color: #fff; font-size: 1.1rem; margin-bottom: 10px; }
  a:hover { color: #fff; text-decoration: underline; }
`;

const FooterGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  
  gap: 32px;                               
  text-align: center;
  align-items: start;

  @media (max-width: 960px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

const Copy = styled.p`
  text-align: center; margin-top: 32px; font-size: .85rem; opacity: .7;
  line-height: 1.8;
  a:hover { text-decoration: underline; }
`;

const Social = styled.div`
  display: flex; justify-content: center; gap: 12px; margin-top: 4px;
  a {
    width: 44px; height: 44px; border-radius: 50%;
    display: grid; place-items: center;
    background: rgba(255,255,255,.12);
    transition: background .2s, transform .2s;
  }
  a:hover { background: ${(p) => p.theme.colors.coral}; transform: translateY(-3px); }
`;

const Float = styled.a`
  position: fixed; right: 18px; bottom: 18px; z-index: 60; width: 60px; height: 60px; border-radius: 50%;
  background: ${(p) => p.theme.colors.wa}; display: grid; place-items: center;
  box-shadow: 0 8px 24px rgba(0,0,0,.25); transition: transform .15s;
  &:hover { transform: scale(1.08); }

  @media (max-width: 560px) {
    width: 52px; height: 52px; right: 14px; bottom: 14px;
  }
`;

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);

  return (
    <>
      <Header>
        <Bar>
          <Logo to="/">
            <LogoImg src={logo} alt="Sueños de la Costa" />
          </Logo>
          <Burger aria-label="Abrir menú" onClick={() => setOpen((o) => !o)}>{open ? "✕" : "☰"}</Burger>
          <Nav $open={open}>
            <NavLink to="/" end>Inicio</NavLink>
            <NavLink to="/productos">Productos</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
          </Nav>
        </Bar>
      </Header>

      <main><Outlet /></main>

       <Footer>
        <FooterGrid>
          <div>
            <h3>Sueños de la Costa</h3>
            <p>Colchonería y muebles de pino en Mar del Tuyú. Dormí mejor, a buen precio.</p>
          </div>
          <div>
            <h3>Visitanos</h3>
            <p>{business.address}</p>
            <p>{business.hours}</p>
          </div>
          <div>
            <h3>Contacto</h3>
            <p><a href={`tel:+54${business.phone.replace(/\D/g, "").slice(1)}`}>📞 {business.phone}</a></p>
            <p><a href={waLink()} target="_blank" rel="noreferrer">💬 WhatsApp</a></p>
          </div>
          <div>
            <h3>Seguinos</h3>
            <Social>
              <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook de Sueños de la Costa">
                <FacebookIcon />
              </a>
              <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram de Sueños de la Costa">
                <InstagramIcon />
              </a>
            </Social>
          </div>
        </FooterGrid>

        <Copy>
          © {new Date().getFullYear()} Sueños de la Costa · Mar del Tuyú
          <br />
          Desarrollado por{" "}
          <a
            href="https://wa.me/5491155688587?text=Hola%20Patricia%2C%20vi%20el%20sitio%20de%20Sue%C3%B1os%20de%20la%20Costa%20y%20quiero%20consultarte"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Patricia Castillo</strong>
          </a>
        </Copy>
      </Footer>

      <Float href={waLink()} target="_blank" rel="noreferrer" aria-label="Escribinos por WhatsApp">
        <WhatsAppIcon />
      </Float>
    </>
  );
}