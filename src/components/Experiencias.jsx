import dancaModerna from "../assets/moderna.avif";
import bale from "../assets/bale_dan.avif";
import valsa from "../assets/vals.avif";

const Experiencias = () => {
  return (
    <section
      id="experiencias"
      className="mb-12 sm:mb-16 py-12 sm:py-16 bg-roxo-900"
    >
      <div className="container">
        <p className="uppercase mb-4 text-center text-roxo-200 tracking-widest text-sm">
          Conecte-se com o seu corpo
        </p>
        <h2 className="capitalize mb-8 mx-auto text-center max-w-3xl text-white text-4xl sm:text-6xl text-balance font-serif">
          cada som, cada movimento, uma nova descoberta
        </h2>
        <div className="overflow-x-auto pb-4 snap-x snap-mandatory grid grid-cols-[repeat(3,minmax(300px,1fr))] gap-4 sm:gap-8">
          <div className="grid gap-4 snap-center bg-roxo-800 p-6 sm:p-8 rounded-xl">
            <h3 className="text-roxo-300 text-2xl font-serif">
              Dança Contemporânea 🎭
            </h3>
            <div className="text-white">
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span> Liberdade
                de movimento
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span>{" "}
                Improvisação
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span> Contato
                com o chão
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span> Corpo como
                expressão
              </p>
            </div>
            <div className="h-55">
              <img
                className="size-full rounded-2xl grayscale rotate-3 transition-all duration-300 hover:grayscale-0 hover:rotate-0"
                src={dancaModerna}
                alt=""
              />
            </div>
            <a
              href="#contato"
              className="justify-self-start self-end btn text-verde-900 px-4 py-2 inline-block rounded-full"
            >
              Saiba mais
            </a>
          </div>
          <div className="grid gap-4 snap-center bg-roxo-800 p-6 sm:p-8 rounded-xl">
            <h3 className="text-roxo-300 text-2xl font-serif">Balé 🩰</h3>
            <div className="text-white">
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span> Técnica
                codificada
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span> En dehors
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span>
                Verticalidade, precisão e leveza
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span> Narrativa
              </p>
            </div>
            <div className="h-55">
              <img
                className="size-full rounded-2xl grayscale transition-all rotate-3 duration-300 hover:grayscale-0 hover:rotate-0 object-cover"
                src={bale}
                alt=""
              />
            </div>
            <a
              href="#contato"
              className="justify-self-start self-end btn text-verde-900 px-4 py-2 inline-block rounded-full"
            >
              Saiba mais
            </a>
          </div>
          <div className="relative grid gap-4 snap-center bg-roxo-800 p-6 sm:p-8 rounded-xl">
            <h3 className="text-roxo-300 text-2xl font-serif">Valsa 💃</h3>
            <div className="text-white">
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span> Compasso
                ternário (3/4)
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span> Posição
                fechada
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span>
                Rotação e deslize
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span> Do campo
                ao palácio
              </p>
            </div>
            <div className="h-55">
              <img
                className="size-full rounded-2xl grayscale transition-all -rotate-3 duration-300 hover:grayscale-0 hover:rotate-0"
                src={valsa}
                alt=""
              />
            </div>
            <a
              href="#contato"
              className="justify-self-start self-end btn text-verde-900 px-4 py-2 inline-block rounded-full"
            >
              Reservar 18/08
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
