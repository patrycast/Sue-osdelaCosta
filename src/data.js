export const business = {
  name: "Sueños de la Costa",
  phone: "011 6272-4777",
  whatsapp: "5491162724777", // formato internacional: 54 9 + código de área + número
  address: "Calle 79 N° 1493, Mar del Tuyú, Buenos Aires",
  hours: "10:00 a 13:00 AM y  17:30 a 19:30 PM",
  rating: "4.6",
  reviewCount: 12,
};

export const waLink = (text = "Hola! Quisiera hacer una consulta.") =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;

export const categories = ["Todos", "Colchones", "Sommiers", "Almohadas y ropa de cama", "Muebles de pino"];

// Sin precios: se consulta por WhatsApp. Editá/agregá productos acá.
export const products = [
  { id: 1, name: "Colchón de 1 plaza", cat: "Colchones", img: "https://images.pexels.com/photos/34733650/pexels-photo-34733650.jpeg", desc: "Firme y resistente, ideal para chicos, reposeras y segunda vivienda." },
  { id: 2, name: "Colchón de 1½ plaza", cat: "Colchones", img: "https://images.pexels.com/photos/8325262/pexels-photo-8325262.jpeg", desc: "El punto medio justo entre espacio y practicidad." },
  { id: 3, name: "Colchón de 2 plazas", cat: "Colchones", img: "https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?_gl=1*1buxh4i*_ga*MTM3ODY0MjEyMi4xNzkxMDU0NjAw*_ga_8JE65Q40S6*czE3OTEwNTQ2MDAkbzEkZzEkdDE3OTEwNTQ2MDMkajU3JGwwJGgw", desc: "Varias densidades y colores. Consultá por modelos firmes y extra firmes." },
  { id: 4, name: "Colchón Queen / King", cat: "Colchones",  img: "https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?_gl=1*1buxh4i*_ga*MTM3ODY0MjEyMi4xNzkxMDU0NjAw*_ga_8JE65Q40S6*czE3OTEwNTQ2MDAkbzEkZzEkdDE3OTEwNTQ2MDMkajU3JGwwJGgw", desc: "Máximo confort para dormir sin interrupciones." },
  { id: 5, name: "Sommier con base", cat: "Sommiers",  img: "https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?_gl=1*1buxh4i*_ga*MTM3ODY0MjEyMi4xNzkxMDU0NjAw*_ga_8JE65Q40S6*czE3OTEwNTQ2MDAkbzEkZzEkdDE3OTEwNTQ2MDMkajU3JGwwJGgw", desc: "Conjunto colchón + base, listo para usar." },
  { id: 6, name: "Almohadas", cat: "Almohadas y ropa de cama", img: "https://images.pexels.com/photos/27638174/pexels-photo-27638174.jpeg", desc: "Para dormir de costado, boca arriba o boca abajo." },
  { id: 7, name: "Protectores y cubrecolchones", cat: "Almohadas y ropa de cama",  img: "https://images.pexels.com/photos/29088434/pexels-photo-29088434.jpeg", desc: "Cuidá tu colchón y alargale la vida." },
  { id: 8, name: "Estantería de pino", cat: "Muebles de pino",  img: "https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?_gl=1*1buxh4i*_ga*MTM3ODY0MjEyMi4xNzkxMDU0NjAw*_ga_8JE65Q40S6*czE3OTEwNTQ2MDAkbzEkZzEkdDE3OTEwNTQ2MDMkajU3JGwwJGgw", desc: "Para baño, living o cocina. Podés dejarla natural o darle tu color." },
  { id: 9, name: "Muebles de pino a medida", cat: "Muebles de pino",  img: "https://images.pexels.com/photos/16542778/pexels-photo-16542778.jpeg", desc: "Contanos qué necesitás y te cotizamos." },
];

// Reseñas reales de Google Maps (resumidas)
export const reviews = [
  { name: "Ariel A.", text: "Excelente atención y predisposición, muy buena calidad. Me solucionaron mi problema enseguida." },
  { name: "Sebastián", text: "Compré una estantería de pino para el baño: muy buena atención y buen precio. Le di color y quedó espectacular." },
  { name: "F. Asf", text: "Compramos un colchón de una plaza y volvimos por uno de dos plazas. Tuvo un detalle de fábrica y nos lo cambiaron sin vueltas." },
];

export const benefits = [
  { icon: "🚚", title: "Entrega a domicilio", text: "Te llevamos tu compra hasta tu casa en Mar del Tuyú y alrededores." },
  { icon: "💰", title: "Buenos precios", text: "Precios de fábrica y atención sin vueltas, como dicen nuestros clientes." },
  { icon: "🔁", title: "Respaldo real", text: "Si hay un detalle de fábrica, lo resolvemos. Tu tranquilidad es lo primero." },
  { icon: "💬", title: "Asesoramiento honesto", text: "Te ayudamos a elegir la firmeza ideal según tu peso, tu espalda y tu presupuesto." },
];


export const social = {
  facebook: "https://www.facebook.com/profile.php?id=100063724278889&mibextid=LQQJ4d",
  instagram: "https://www.instagram.com/PEGAR-AQUI-EL-USUARIO",
};