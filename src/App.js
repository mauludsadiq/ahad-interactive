import React, { useState } from "react";
import { MathJax } from "better-react-mathjax";
import "./App.css";

function Header() {
  return (
    <div className="header">
      <h1>The Aḥad Collapse</h1>
      <p className="subtitle">
        A Topological Framework for Universal Convergence in Dynamical Systems
      </p>
    </div>
  );
}

/* === FIGURE 1 === */
function TopologyFigure() {
  return (
    <div className="figure-container">
      <h3 className="figure-title">
        Figure 1: Topological Contractibility - From Complexity to Singularity
      </h3>
      <div className="topology-demo">
        <div>
          <div className="state-space">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="point"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${30 + i * 10}%`
                }}
              ></div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 10, color: "#a0a0a0" }}>
            Complex State Space
          </p>
        </div>
        <div className="arrow">→</div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 200
            }}
          >
            <div className="singularity"></div>
          </div>
          <p style={{ textAlign: "center", marginTop: 10, color: "#a0a0a0" }}>
            Aḥad Singularity
          </p>
        </div>
      </div>
      <p className="figure-caption">
        The Aḥad Collapse demonstrates how any dynamical system with a unique
        absorbing state is topologically equivalent to a single point.
      </p>
    </div>
  );
}

/* === FIGURE 2 === */
function ConceptDistinction() {
  return (
    <div className="figure-container">
      <h3 className="figure-title">Figure 2: Structural Distinction - Wāḥid vs Aḥad</h3>
      <div className="concept-distinction">
        <div className="concept-card wahid-card">
          <h4 className="concept-title" style={{ color: "#a0956b" }}>Wāḥid</h4>
          <div className="concept-description">
            <strong>Numerical Oneness</strong><br/>"One among many"<br/><br/>
            • Multiple absorbing states<br/>
            • Disconnected basins<br/>
            • Non-contractible topology<br/>
            • Competitive dynamics
          </div>
        </div>
        <div className="concept-card ahad-card">
          <h4 className="concept-title" style={{ color: "#6d5835" }}>Aḥad</h4>
          <div className="concept-description">
            <strong>Absolute Oneness</strong><br/>"Singularity without rival"<br/><br/>
            • Unique absorbing state<br/>
            • Universal convergence<br/>
            • Contractible topology<br/>
            • Structural inevitability
          </div>
        </div>
      </div>
    </div>
  );
}

/* === FIGURE 3 === */
function MarkovTransition() {
  const [p, setP] = useState(0.5);
  const dominance = p < 0.7 ? 0 : (p - 0.7) / 0.3;

  return (
    <div className="figure-container">
      <h3 className="figure-title">Figure 3: Computational Model - Wāḥid to Aḥad Transition</h3>
      <div className="interactive-section">
        <div className="parameter-display">Parameter p = {p.toFixed(2)}</div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={p}
          className="slider"
          onChange={(e) => setP(parseFloat(e.target.value))}
        />
        <div style={{ margin: "20px 0" }}>
          <span style={{ color: "#a0956b" }}>p = 0.5 (Wāḥid)</span>
          <span style={{ margin: "0 50px" }}>→</span>
          <span style={{ color: "#6d5835" }}>p = 1.0 (Aḥad)</span>
        </div>
      </div>
      <div className="markov-chain">
        <div
          className="state-node absorbing"
          style={{ transform: `scale(${1 + dominance * 0.5})` }}
        >
          0
        </div>
        <div className="state-node">1</div>
        <div className="state-node">2</div>
        <div
          className="state-node absorbing"
          style={{ transform: `scale(${1 - dominance * 0.3})` }}
        >
          3
        </div>
      </div>
    </div>
  );
}

/* === FIGURE 4 === */
function PhysicalAnalogues() {
  const analogues = [
    ["🌌 Cosmology","Black hole singularities and cosmic heat death represent ultimate contractible states."],
    ["⚛️ Quantum Mechanics","Quantum decoherence collapses superposition states into classical ground states."],
    ["🔧 Engineering","Mechanical systems inevitably converge to failure states."],
    ["🌡️ Thermodynamics","Systems evolve toward maximum entropy states."],
    ["🔗 Networks","Consensus protocols converge all nodes to a single agreed state."],
    ["🧠 Biology","Neural networks and ecosystems stabilize to unique equilibrium states."]
  ];
  return (
    <div className="figure-container">
      <h3 className="figure-title">Figure 4: Physical Manifestations of the Aḥad Collapse</h3>
      <div className="physical-analogues">
        {analogues.map(([title, desc], i) => (
          <div key={i} className="analogue-card">
            <h4 className="analogue-title">{title}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* === FIGURE 5 (Corrected MathJax Rendering) === */
function HoTTProof() {
  const theoremLatex = `
    \\[
      \\begin{aligned}
      \\mathbf{Definition}\\; \\mathrm{isContr}(A : \\mathrm{Type})
      &:= \\{ \\mathrm{center} : A \\;\\&\\; \\forall x:A, x = \\mathrm{center} \\} \\\\
      \\mathbf{Definition}\\; \\mathrm{converges\\_to\\_ahad}(S: \\mathrm{Type})(T:S\\to S)(\\alpha:S)
      &:= \\forall x:S, \\exists n:\\mathbb{N},\\; \\mathrm{iterate}\\;T^n x = \\alpha \\\\
      \\mathbf{Theorem}\\; \\mathrm{ahad\\_collapse}: 
      &\\forall (S:\\mathrm{Type})(T:S\\to S)(\\alpha:S),\\\\
      &\\quad \\mathrm{converges\\_to\\_ahad}\\; S\\; T\\; \\alpha \\to \\mathrm{isContr}\\; S
      \\end{aligned}
    \\]
  `;

  return (
    <div className="figure-container theorem-box">
      <h3 className="figure-title">Figure 5: Homotopy Type Theory Formalization</h3>
      <MathJax className="hott-proof" dynamic inline={false}>
        {theoremLatex}
      </MathJax>
      <p className="figure-caption">
        The mathematical foundation of the Aḥad Collapse expressed in Homotopy Type Theory,
        providing a machine-verifiable framework for universal convergence.
      </p>
    </div>
  );
}

/* === MAIN APP === */
export default function App() {
  return (
    <div className="container">
      <Header />
      <TopologyFigure />
      <ConceptDistinction />
      <MarkovTransition />
      <PhysicalAnalogues />
      <HoTTProof />
    </div>
  );
}
