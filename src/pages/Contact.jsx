import Reveal from "../components/Reveal.jsx";
import { useState } from "react";
import styled from "styled-components";
import { Container, Section, SectionTitle, Grid, Card, ButtonBtn } from "../components/ui.js";
import { business, waLink } from "../data.js";

const Form = styled.form`
  display: flex; flex-direction: column; gap: 14px;
  input, textarea, select {
    font: inherit; padding: 12px 14px; border-radius: 10px; border: 1.5px solid ${(p) => p.theme.colors.sandDark};
    &:focus { outline: 2px solid ${(p) => p.theme.colors.sea}; }
  }
`;
const MapFrame = styled.iframe`width: 100%; min-height: 320px; border: 0; border-radius: ${(p) => p.theme.radius};`;

export default function Contact() {
  const [f, setF] = useState({ nombre: "", interes: "Colchón", mensaje: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = `Hola! Soy ${f.nombre}. Me interesa: ${f.interes}. ${f.mensaje}`;
    window.open(waLink(msg), "_blank", "noopener");
  };

  return (
    <Section>
      <Container>
        <SectionTitle>
          <h2>Contacto</h2>
          <p>Escribinos o visitanos: te atendemos con gusto.</p>
        </SectionTitle>
        <Grid $min="320px">
          <Reveal from="top">
          <Card>
            <h3>Enviános tu consulta</h3>
            <Form onSubmit={submit}>
              <input required placeholder="Tu nombre" value={f.nombre} onChange={set("nombre")} />
              <select value={f.interes} onChange={set("interes")}>
                <option>Colchón</option><option>Sommier</option><option>Almohadas / ropa de cama</option><option>Mueble de pino</option><option>Otro</option>
              </select>
              <textarea rows="4" placeholder="Medidas, firmeza, dudas..." value={f.mensaje} onChange={set("mensaje")} />
              <ButtonBtn $variant="wa" type="submit">💬 Enviar por WhatsApp</ButtonBtn>
            </Form>
          </Card>
          </Reveal>

          <Reveal from="top" delay={0.15}>
          <Card>
            <h3>Datos del local</h3>
            <p>📍 {business.address}</p>
            <p>🕐 {business.hours}</p>
            <p>📞 {business.phone}</p>
            <MapFrame
              title="Mapa Sueños de la Costa"
              loading="lazy"
              src={`https://www.google.com/maps?q=${encodeURIComponent("Calle 79 1493, Mar del Tuyú, Buenos Aires")}&output=embed`}
            />
          </Card>
           </Reveal>
          
        </Grid>
      </Container>
    </Section>
  );
}
