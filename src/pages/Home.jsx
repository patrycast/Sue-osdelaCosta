
import styled,  { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Container, Section, SectionTitle, Button, Grid, Card, ProductImg } from "../components/ui.js";
import { business, waLink, benefits, reviews, products } from "../data.js";
import heroImg from "../assets/sueñosdelacosta-portada.jpg";
import Reveal from "../components/Reveal.jsx";

const slideFromRight = keyframes`
  from { opacity: 0; transform: translateX(80px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const HeroText = styled.div`
  animation: ${slideFromRight} 0.9s ease-out both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const Hero = styled.div`
  background: linear-gradient(135deg, ${(p) => p.theme.colors.navy}, ${(p) => p.theme.colors.sea});
  color: #fff; padding: 72px 0;
  h1 { color: #fff; font-size: clamp(2.1rem, 5vw, 3.4rem); max-width: 16ch; }
  p { max-width: 52ch; margin: 18px 0 30px; font-size: 1.15rem; opacity: .92; }    overflow: hidden;
   @media (max-width: ${(p) => p.theme.bpSm}) {
    padding: 44px 0;
    h1 { font-size: 2rem; }
    p { font-size: 1rem; margin: 14px 0 24px; }
  }
`;
const HeroGrid = styled(Container)`
  display: grid; gap: 40px; align-items: center;
  grid-template-columns: 1.1fr 1fr;
  @media (max-width: ${(p) => p.theme.bp}) { grid-template-columns: 1fr; gap: 32px; }
`;
const HeroImg = styled.img`
  width: 100%; aspect-ratio: 4 / 3; object-fit: cover;
  border-radius: 24px; box-shadow: 0 20px 50px rgba(0,0,0,.35);
  border: 4px solid rgba(255,255,255,.2);

    animation: ${slideFromRight} 0.9s ease-out 0.25s both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;
const Badge = styled.span`
  display: inline-block; background: rgba(255,255,255,.15); padding: 6px 14px; border-radius: 999px;
  font-size: .9rem; margin-bottom: 18px;
`;
// const Actions = styled.div`display: flex; flex-wrap: wrap; gap: 14px;`;
const Actions = styled.div`
  display: flex; flex-wrap: wrap; gap: 14px;
  @media (max-width: ${(p) => p.theme.bpSm}) {
    flex-direction: column;
    a { width: 100%; }
  }
`;
const Emoji = styled.div`font-size: 2.2rem;`;
const Stars = styled.div`color: #f5a623; letter-spacing: 2px;`;
const CTA = styled.div`
  background: ${(p) => p.theme.colors.coral}; color: #fff; text-align: center; padding: 64px 0;
  h2 { color: #fff; margin-bottom: 12px; }
  p { margin-bottom: 24px; }
`;

export default function Home() {
  return (
    <>
      <Hero>
        <HeroGrid>
        <HeroText>
          {/* <div> */}
            <Badge>⭐ {business.rating} en Google · Entrega a domicilio</Badge>
            <h1>Dormí mejor, a precio justo.</h1>
            <p>Colchones, sommiers, almohadas y muebles de pino en Mar del Tuyú. Te asesoramos y te lo llevamos a tu casa.</p>
            <Actions>
              <Button $variant="wa" href={waLink("Hola! Quiero consultar por un colchón.")} target="_blank" rel="noreferrer">💬 Pedir presupuesto</Button>
              <Button as={Link} to="/productos" $variant="ghost">Ver productos</Button>
            </Actions>
          </HeroText>
          <HeroImg src={heroImg} alt="Colchones y muebles en Sueños de la Costa" />
        </HeroGrid>
      </Hero>

      <Section>
        <Container>
          <SectionTitle>
            <h2>¿Por qué elegirnos?</h2>
            <p>Un comercio de barrio con la atención que te merecés.</p>
          </SectionTitle>
          <Grid>
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.12}>
                <Card><Emoji>{b.icon}</Emoji><h3>{b.title}</h3><p>{b.text}</p></Card>
              </Reveal>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section $alt>
        <Container>
          <SectionTitle>
            <h2>Lo más buscado</h2>
            <p>Consultá disponibilidad, medidas y colores.</p>
          </SectionTitle>
          {/* <Grid $min="200px">
            {products.slice(0, 4).map((p) => (
              <Card key={p.id}>
                <ProductImg
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
                />
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </Card>
            ))}
          </Grid> */}
          <Grid $min="200px">
            {products.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.12}>
                <Card>
                  <ProductImg
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
                  />
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </Card>
              </Reveal>
            ))}
          </Grid>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Button as={Link} to="/productos">Ver catálogo completo</Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>
            <h2>Lo que dicen nuestros clientes</h2>
            <p>{business.rating} ★ en Google Maps · {business.reviewCount} opiniones</p>
          </SectionTitle>
          <Grid $min="280px">
            {reviews.map((r) => (
              <Card key={r.name}><Stars>★★★★★</Stars><p>“{r.text}”</p><strong>— {r.name}</strong></Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <CTA>
        <Container>
          <h2>¿Listo para estrenar tu descanso?</h2>
          <p>Escribinos y te respondemos a la brevedad.</p>
          {/* <Button $variant="wa" href={waLink()} target="_blank" rel="noreferrer">💬 Hablar por WhatsApp</Button> */}
        </Container>
      </CTA>
    </>
  );
}