import { useState } from "react";
import patrocinador from "../assets/p1.svg";
import patrocinador2 from "../assets/p2.svg";
import patrocinador3 from "../assets/p3.svg";
import patrocinador4 from "../assets/p4.svg";
import patrocinador5 from "../assets/p5.svg";
import patrocinador6 from "../assets/p6.svg";

const Patrocinadores = () => {
  const [ativo, setAtivo] = useState(true);

  return (
    <section
      id="parceiros"
      class="container mb-12 sm:mb-16 max-sm:divide-y-2 divide-roxo-900 sm:border-b-2 sm:border-t-2 border-roxo-900 overflow-x-hidden"
    >
      <ul
        onMouseEnter={() => setAtivo(false)}
        onMouseLeave={() => setAtivo(true)}
        class="flex flex-col items-center justify-center py-4  sm:flex-row sm:gap-8  sm:py-8 *:p-4 *:*:max-h-20 *:**:w-full animate-rolarTexto"
        style={{
          animationPlayState: ativo ? "running" : "paused",
        }}
      >
        <li>
          <img src={patrocinador} alt="ZenCorpo Bem-Estar" />
        </li>
        <li>
          <img src={patrocinador2} alt="FitnessMovArt Academia" />
        </li>
        <li>
          <img src={patrocinador3} alt="BellaDança Moda" />
        </li>
        <li>
          <img src={patrocinador4} alt="Dança Viva Estúdio" />
        </li>
        <li>
          <img src={patrocinador6} alt="RitmoFit Suplementos" />
        </li>
        <li>
          <img src={patrocinador5} alt="Opera" />
        </li>
      </ul>
    </section>
  );
};

export default Patrocinadores;
