import { useState } from "react";
import styled from "styled-components";
import { Container, Section, SectionTitle, Button, Card, ProductImg  } from "../components/ui.js";
import { products, categories, waLink } from "../data.js";
import Reveal from "../components/Reveal.jsx";

const Filters = styled.div`display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 32px;`;
const Chip = styled.button`
  padding: 9px 18px; border-radius: 999px; cursor: pointer; font: inherit; font-weight: 500;
  border: 1.5px solid ${(p) => p.theme.colors.sea};
  background: ${(p) => (p.$on ? p.theme.colors.sea : "#fff")};
  color: ${(p) => (p.$on ? "#fff" : p.theme.colors.sea)};

    &:hover {
    transform: scale(0.95); transition: transform .15s, background .15s;
  }
`;
const Emoji = styled.div`font-size: 2.6rem;`;
// Columnas de ancho fijo (240–300px): una card sola mide lo mismo que en una fila de varias
const ProductGrid = styled.div`
  display: grid; gap: 22px; justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(240px, 300px));
`;
const AskButton = styled(Button)`
  align-self: center; padding: 9px 10px; font-size: .92rem; margin-top: 4px;
`;
const Tag = styled.span`font-size: .8rem; color: ${(p) => p.theme.colors.sea}; font-weight: 600;`;

export default function Products() {
  const [cat, setCat] = useState("Todos");
  const list = cat === "Todos" ? products : products.filter((p) => p.cat === cat);

  return (
    <Section>
      <Container>
        <SectionTitle>
          <h2>Nuestros productos</h2>
          <p>Precios actualizados por WhatsApp. Entrega a domicilio.</p>
        </SectionTitle>
        <Filters>
          {categories.map((c) => (
            <Chip key={c} $on={cat === c} onClick={() => setCat(c)}>{c}</Chip>
          ))}
        </Filters>
        <ProductGrid>
          {list.map((p, i) => (
            <Reveal key={p.id} from="top" delay={(i % 3) * 0.12}>
              <Card>
                <ProductImg
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
                />
                <Tag>{p.cat}</Tag>
                <h3>{p.name}</h3>
                <p style={{ flex: 1 }}>{p.desc}</p>
                <AskButton $variant="wa" href={waLink(`Hola! Quiero consultar precio y disponibilidad de: ${p.name}`)} target="_blank" rel="noreferrer">
                  Consultar precio
                </AskButton>
              </Card>
            </Reveal>
          ))}
        </ProductGrid>
      </Container>
    </Section>
  );
}
