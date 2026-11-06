import { useState } from "react";
import patrocinador from "../assets/p1.svg";
import patrocinador2 from "../assets/p2.svg";
import patrocinador3 from "../assets/p3.svg";
import patrocinador4 from "../assets/p4.svg";
import patrocinador5 from "../assets/p5.svg";
import patrocinador6 from "../assets/p6.svg";

const patrocinadores = [
  { src: patrocinador, alt: "ZenCorpo Bem-Estar" },
  { src: patrocinador2, alt: "FitnessMovArt Academia" },
  { src: patrocinador3, alt: "BellaDança Moda" },
  { src: patrocinador4, alt: "Dança Viva Estúdio" },
  { src: patrocinador6, alt: "RitmoFit Suplementos" },
  { src: patrocinador5, alt: "Opera" },
];

const Patrocinadores = () => {
  const [ativo, setAtivo] = useState(true);

  return (
    <section
      id="parceiros"
      className="container mb-12 sm:mb-16 max-sm:divide-y-2 divide-roxo-900 sm:border-b-2 sm:border-t-2 border-roxo-900 overflow-x-hidden"
    >
      <div
        className="flex w-max animate-rolarTexto max-md:animate-rolarTexto-mobile"
        style={{
          animationPlayState: ativo ? "running" : "paused",
        }}
        onMouseEnter={() => setAtivo(false)}
        onMouseLeave={() => setAtivo(true)}
      >
        {[0, 1].map((grupo) => (
          <ul
            key={grupo}
            className="flex w-max shrink-0 items-center flex-nowrap py-4 md:gap-8 md:py-8"
            aria-hidden={grupo === 1}
          >
            {patrocinadores.map((item, index) => (
              <li key={index} className="max-md:w-40 w-60 shrink-0 p-4">
                <img
                  className="w-full"
                  src={item.src}
                  alt={grupo === 0 ? item.alt : ""}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Patrocinadores;
