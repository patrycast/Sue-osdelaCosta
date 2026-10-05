import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  & > * { flex: 1; }
  opacity: ${(p) => (p.$show ? 1 : 0)};
  transform: translateY(${(p) => (p.$show ? "0" : p.$from === "top" ? "-50px" : "50px")});
  transition: opacity .7s ease-out, transform .7s ease-out;
  transition-delay: ${(p) => p.$delay}s;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1; transform: none; transition: none;
  }
`;

export default function Reveal({ children, delay = 0, from = "bottom" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setShow(true); io.disconnect(); }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <Wrap ref={ref} $show={show} $delay={delay} $from={from}>{children}</Wrap>;
}