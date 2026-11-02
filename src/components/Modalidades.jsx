import danca1 from "../assets/dan4.avif";
import danca2 from "../assets/dan2.avif";
import danca3 from "../assets/dan3.avif";
import fundo from "../assets/padrao.svg";

const Modalidades = () => {
  return (
    <section
      id="modalidades"
      className="w-full  grid lg:grid-cols-[2fr_3fr] gap-8 p-8 pt-16 mb-12 sm:mb-16"
    >
      <div
        style={{ backgroundImage: `url(${fundo})` }}
        className={`content-end bg-no-repeat bg-contain bg-bottom-left`}
      >
        <h2 className="text-white mb-8 text-4xl font-serif lg:text-5xl">
          Encontre seu movimento
        </h2>
        <ul className="text-gray-200 *:flex *:items-center *:gap-4 grid gap-4 sm:text-xl">
          <li>
            <span className="h-0.5 w-6 neon inline-block"></span>Experimente
            diferentes modalidades de danças
          </li>
          <li>
            <span className="h-0.5 w-6 neon inline-block"></span>Conecte-se com
            você
          </li>
          <li>
            <span className="h-0.5 w-6 neon inline-block"></span>Desconecte-se
            do digital
          </li>
          <li>
            <span className="h-0.5 w-6 neon inline-block"></span>Observe os
            movimentos
          </li>
          <li>
            <span className="h-0.5 w-6 neon inline-block"></span>Escolha a sua
            modalidade preferida
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-4 sm:gap-8">
        <div className="col-span-full grid *:col-start-1 *:row-start-1">
          <img
            className="h-52 object-cover w-full rounded-xl"
            src={danca1}
            alt="Dança 1"
          />
          <span className="m-2 self-start justify-self-end uppercase text-white rounded-full bg-verde-950/60 px-4 py-2 text-sm/none">
            Ruby
          </span>
        </div>
        <div className="grid *:col-start-1 *:row-start-1">
          <img
            className="size-full object-cover rounded-xl"
            src={danca2}
            alt="Dança 2"
          />
          <span className="m-2 self-start justify-self-end uppercase text-white rounded-full bg-verde-950/60 px-4 py-2 text-sm/none">
            Emerald
          </span>
        </div>
        <div className="grid *:col-start-1 *:row-start-1">
          <img
            className="size-full object-cover rounded-xl"
            src={danca3}
            alt="dança 3"
          />
          <span className="m-2 self-start justify-self-end uppercase text-white rounded-full bg-verde-950/60 px-4 py-2 text-sm/none">
            Saphire
          </span>
        </div>
      </div>
    </section>
  );
};

export default Modalidades;
