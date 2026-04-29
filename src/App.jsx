import { useState } from "react";

// ============================================================
// CONFIGURACIÓN DEL JUEGO — editá todo acá
// ============================================================

const STEPS = [
  {
    type: "intro",
    eyebrow: "Para vos",
    title: ["¿Querés tu ", "regalo", " de cumpleaños?"],
    body: "Hay algo esperándote.",
    btnLabel: "Quiero",
    next: "reglas"
  },
  {
    type: "instructions",
    id: "reglas",
    eyebrow: "Las reglas",
    title: "Es muy simple",
    body: "Primero hay unas preguntas.\nNo te preocupes, son muy fáciles",
    btnLabel: "Empezar",
    next: "q1"
  },



  // --- PREGUNTA CON IMÁGENES ---
  // Para usar imágenes, agregá image: "/nombre-archivo.jpg" a cada opción
  // y poné las imágenes en la carpeta /public del proyecto

  {
    type: "question",
    id: "q1",
    text: "Elegí uno",
    questionNumber: 1,
    options: [
      { label: "Opción A", value: "a", image: "/austriaca.jpg" }, // image: "/foto-a.jpg"
      { label: "Opción B", value: "b", image: "/salchichas.jpg" }, // image: "/foto-b.jpg"
    ],
    next: "i2"
  },

    {
    type: "interlude",
    id: "i2",
    text: " ¿Viste? Es muy simple.",
    btnLabel: "Continuar",
  },

  {
    type: "question",
    id: "q4",
    text: "Elegí uno",
    questionNumber: 2,
    options: [
      { label: "Opción A", value: "a", image: "/monet.jpg" }, // image: "/foto-a.jpg"
      { label: "Opción B", value: "b", image: "/kandinsky.jpg" }, // image: "/foto-b.jpg"
    ],
    next: "i3"
  },

    {
    type: "interlude",
    id: "i3",
    text: "Una papa. Sí, hasta aburrido.",
    btnLabel: "Continuar",
    next: "q0"
  },

        {
    type: "question",
    id: "q0",
    text: "Compliquémoslo un poco. Uno salado, otro dulce...",
    questionNumber: 3,
    options: [
      { label: "Opción A", value: "a", image: "/chocolate.jpg" }, // image: "/foto-a.jpg"
      { label: "Opción B", value: "b", image: "/bondiola.jpg" }, // image: "/foto-b.jpg"
    ],
    next: "q6"
  },

          {
    type: "question",
    id: "q6",
    text: "Hablemos de música",
    questionNumber: 4,
    options: [
      { label: "Opción A", value: "a", image: "/you really got me.jpg" }, // image: "/foto-a.jpg"
      { label: "Opción B", value: "b", image: "/ruby tuesday.jpg" }, // image: "/foto-b.jpg"
    ],
    next: "q7"
  },

{
  type: "question",
  id: "q7",
  text: "¿Cuál?",
  questionNumber: 5,
  options: [
    { label: "Opción A", value: "a", image: "/nanutria.jpg", next: "q9" },
    { label: "Opción B", value: "b", image: "/ricky gervais.jpg", next: "q10" },
  ],
},

{
  type: "question",
  id: "q9",
  text: "¿Y ahora?",
  questionNumber: 6,
  options: [
    { label: "Opción A", value: "a", image: "/nanutria.jpg", next: "i4" },
    { label: "Opción B", value: "b", image: "/lucho mellera.jpg", next: "i6" },
  ],
  
},

{
  type: "question",
  id: "q10",
  text: "¿Y ahora?",
  questionNumber: 6,
  options: [
    { label: "Opción A", value: "a", image: "/ricky gervais 2.jpg", next: "i4"},
    { label: "Opción B", value: "b", image: "/lucho mellera.jpg", next: "i5" },
  ],
},

    {
    type: "interlude",
    id: "i4",
    text: "Pobre Lucho. Tranquila, no le vamos a contar...",
    btnLabel: "Continuar",
    next: "i7"
  },

      {
    type: "interlude",
    id: "i5",
    text: "Dice Ricky que el próximo especial va a tratar sobre vos...",
    btnLabel: "Continuar",
    next: "i7"
  },

        {
    type: "interlude",
    id: "i6",
    text: "Quién lo habría imaginado.",
    btnLabel: "Continuar",
    next: "i7"
  },

          {
    type: "interlude",
    id: "i7",
    text: "Empezando a transpirar un poco, ¿no?",
    btnLabel: "Continuar",
    next: "q2"
  },


  {
    type: "question",
    id: "q2",
    text: "¿Cuál te gustó más?",
    questionNumber: 7,
    options: [
      { label: "Opción A", value: "a", image: "/actos humanos.jpg" }, // image: "/foto-a.jpg"
      { label: "Opción B", value: "b", image: "/el hombre.jpg" }, // image: "/foto-b.jpg"
    ],
  },

    {
    type: "question",
    id: "q15",
    text: "¿Y de estos?",
    questionNumber: 8,
    options: [
      { label: "Opción A", value: "a", image: "/marquez.png" }, // image: "/foto-a.jpg"
      { label: "Opción B", value: "b", image: "/allende.jpg" }, // image: "/foto-b.jpg"
    ],
  },

         {
    type: "interlude",
    id: "i8",
    text: "No le vamos a decir a nadie.",
    btnLabel: "Continuar",
    next: "q3"
  },



    {
    type: "question",
    id: "q3",
    text: "Ya casi estamos",
    questionNumber: 9,
    options: [
      { label: "Opción A", value: "a", image: "/iggy pop.jpg" }, // image: "/foto-a.jpg"
      { label: "Opción B", value: "b", image: "/bryan adams.png" }, // image: "/foto-b.jpg"
    ],
    next: "result"
  },

  // --- RESULTADO FINAL ---
  {
    type: "result",
    id: "result",
    key: "28346", // <-- poné la clave real acá
    eyebrow: "Tu regalo",
    title: "Lo lograste",
    body: "Esta es tu clave. Guardala bien.",
  },
];

// ============================================================
// LÓGICA Y RENDER — no hace falta tocar nada de acá abajo
// ============================================================

const QUESTION_STEPS = STEPS.filter((s) => s.type === "question");

function questionIndex(stepIndex) {
  return STEPS.slice(0, stepIndex + 1).filter((s) => s.type === "question")
    .length;
}

export default function App() {
  const [currentId, setCurrentId] = useState(null);
  const [answers, setAnswers] = useState({});

  const step = getStep()

function getStep() {
  if (currentId === null) return STEPS[0];
  return STEPS.find((s) => s.id === currentId) || STEPS[0];
}

function next() {
  const step = getStep();
  if (step.next) {
    setCurrentId(step.next);
  } else {
    const idx = STEPS.indexOf(step);
    if (idx < STEPS.length - 1) setCurrentId(STEPS[idx + 1].id ?? null);
  }
}

function answer(id, value, nextId) {
  setAnswers((a) => ({ ...a, [id]: value }));
  if (nextId) {
    setCurrentId(nextId);
  } else {
    next();
  }
}

  return (
    <div style={styles.app}>
      <div style={styles.screen} key={currentId}>
        {step.type === "intro" && (
          <Intro step={step} onNext={next} />
        )}
        {step.type === "instructions" && (
          <Instructions step={step} onNext={next} />
        )}
        {step.type === "question" && (
          <Question
            step={step}
            stepIndex={currentId}
            onAnswer={answer}
          />
        )}
        {step.type === "interlude" && (
          <Interlude step={step} onNext={next} />
        )}
        {step.type === "result" && (
          <Result step={step} />
        )}
      </div>
    </div>
  );
}

function Intro({ step, onNext }) {
  return (
    <div style={styles.center}>
      <p style={styles.eyebrow}>{step.eyebrow}</p>
      <h1 style={styles.titleLarge}>
        {step.title[0]}
        <em>{step.title[1]}</em>
        {step.title[2]}
      </h1>
      <div style={styles.divider} />
      <p style={styles.body}>{step.body}</p>
      <button style={styles.btn} onClick={onNext}
        onMouseEnter={e => { e.target.style.background = "#111"; e.target.style.color = "#fff"; }}
        onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#111"; }}>
        {step.btnLabel}
      </button>
    </div>
  );
}

function Instructions({ step, onNext }) {
  return (
    <div style={styles.center}>
      <p style={styles.eyebrow}>{step.eyebrow}</p>
      <h2 style={{ ...styles.titleLarge, fontSize: "1.8rem" }}>{step.title}</h2>
      <div style={styles.divider} />
      <p style={styles.body}>
        {step.body.split("\n").map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
      </p>
      <button style={styles.btn} onClick={onNext}
        onMouseEnter={e => { e.target.style.background = "#111"; e.target.style.color = "#fff"; }}
        onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#111"; }}>
        {step.btnLabel}
      </button>
    </div>
  );
}

function Question({ step, stepIndex, onAnswer }) {
const qIdx = step.questionNumber;
const total = 9; // el número total de preguntas
  const hasImages = step.options.some((o) => o.image);

  return (
    <div style={styles.center}>
      <div style={styles.progressBar}>
        {QUESTION_STEPS.map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.dot,
              background: i === qIdx - 1 ? "#111" : i < qIdx - 1 ? "#aaa" : "#ddd",
            }}
          />
        ))}
      </div>
      <p style={styles.eyebrow}>Pregunta {qIdx} de {total}</p>
      <p style={styles.questionText}>{step.text}</p>
      <div style={{
        ...styles.optionsGrid,
        gridTemplateColumns: hasImages ? "1fr 1fr" : "1fr 1fr",
      }}>
        {step.options.map((opt) => (
          <OptionBtn key={opt.value} opt={opt} hasImages={hasImages}
    onClick={() => onAnswer(step.id, opt.value, opt.next)} />
        ))}
      </div>
    </div>
  );
}

function OptionBtn({ opt, hasImages, onClick }) {
  const [hovered, setHovered] = useState(false);

  if (hasImages && opt.image) {
    return (
      <button
        style={{ ...styles.optionBtn, ...(hovered ? styles.optionBtnHover : {}), padding: "8px", flexDirection: "column", display: "flex", alignItems: "center", gap: 8 }}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={opt.image} alt={opt.label} style={{ width: "100%", objectFit: "contain", borderRadius: 4 }} />
        <span style={{ fontSize: 12, color: "#888" }}>{opt.label}</span>
      </button>
    );
  }

  return (
    <button
      style={{ ...styles.optionBtn, ...(hovered ? styles.optionBtnHover : {}) }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {opt.label}
    </button>
  );
}

function Interlude({ step, onNext }) {
  return (
    <div style={styles.center}>
      <p style={styles.interludeText}>{step.text}</p>
      <button style={styles.btn} onClick={onNext}
        onMouseEnter={e => { e.target.style.background = "#111"; e.target.style.color = "#fff"; }}
        onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#111"; }}>
        {step.btnLabel || "Continuar"}
      </button>
    </div>
  );
}

function Result({ step }) {
  return (
    <div style={styles.center}>
      <p style={styles.eyebrow}>{step.eyebrow}</p>
      <h2 style={{ ...styles.titleLarge, fontSize: "1.8rem" }}>{step.title}</h2>
      <div style={styles.divider} />
      <p style={styles.body}>{step.body}</p>
      <div style={styles.keyBox}>
        <div style={styles.keyValue}>{step.key}</div>
        <div style={styles.keyLabel}>Clave de acceso</div>
      </div>
      <p style={{ ...styles.body, fontSize: 13, marginTop: "1.5rem" }}>{step.footer}</p>
    </div>
  );
}

// ============================================================
// ESTILOS
// ============================================================

const styles = {
  app: {
    fontFamily: "'Jost', 'Helvetica Neue', sans-serif",
    fontWeight: 300,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
    background: "#fafaf9",
    color: "#111",
  },
  screen: {
    width: "100%",
    maxWidth: 480,
    animation: "fadeIn 0.4s ease",
  },
  center: {
    textAlign: "center",
  },
  eyebrow: {
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#aaa",
    marginBottom: "1.5rem",
  },
  titleLarge: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: 300,
    fontSize: "2.4rem",
    color: "#111",
    lineHeight: 1.2,
    marginBottom: "1rem",
  },
  divider: {
    width: 32,
    height: 1,
    background: "#ddd",
    margin: "1.5rem auto",
  },
  body: {
    fontSize: 15,
    color: "#666",
    lineHeight: 1.75,
    marginBottom: "2rem",
    maxWidth: 380,
    marginLeft: "auto",
    marginRight: "auto",
  },
  btn: {
    display: "inline-block",
    padding: "12px 32px",
    border: "0.5px solid #ccc",
    background: "transparent",
    color: "#111",
    fontFamily: "'Jost', sans-serif",
    fontWeight: 300,
    fontSize: 13,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
    borderRadius: 0,
  },
  progressBar: {
    display: "flex",
    gap: 6,
    justifyContent: "center",
    marginBottom: "2rem",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    transition: "background 0.3s",
  },
  questionText: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: 300,
    fontSize: "1.6rem",
    color: "#111",
    lineHeight: 1.4,
    marginBottom: "2rem",
    maxWidth: 420,
    marginLeft: "auto",
    marginRight: "auto",
  },
  optionsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: "1.5rem",
  },
  optionBtn: {
    padding: "1.25rem 1rem",
    border: "0.5px solid #e0e0e0",
    background: "#fff",
    color: "#111",
    fontFamily: "'Jost', sans-serif",
    fontWeight: 300,
    fontSize: 14,
    cursor: "pointer",
    transition: "border-color 0.2s, background 0.2s",
    borderRadius: 8,
    lineHeight: 1.4,
    textAlign: "center",
  },
  optionBtnHover: {
    borderColor: "#aaa",
    background: "#f5f5f5",
  },
  interludeText: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.4rem",
    color: "#666",
    lineHeight: 1.6,
    maxWidth: 380,
    margin: "0 auto 2rem",
  },
  keyBox: {
    display: "inline-block",
    padding: "1.5rem 3rem",
    border: "0.5px solid #ccc",
    margin: "1.5rem 0",
  },
  keyValue: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: "2.8rem",
    fontWeight: 300,
    letterSpacing: "0.25em",
    color: "#111",
  },
  keyLabel: {
    fontSize: 11,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#aaa",
    marginTop: "0.5rem",
  },
};
