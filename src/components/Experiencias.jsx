import dancaModerna from "../assets/moderna.avif";
import bale from "../assets/bale_dan.avif";
import valsa from "../assets/vals.avif";
import { useTranslation } from "react-i18next";

const Experiencias = () => {
  const [t] = useTranslation();

  function handleClick({ target }) {
    if (target.classList.contains("rotate-3"))
      target.classList.remove("rotate-3");
    else target.classList.add("rotate-3");
  }

  return (
    <section
      id="experiencias"
      className="mb-12 sm:mb-16 py-12 sm:py-16 bg-roxo-900"
    >
      <div className="container">
        <p className="uppercase mb-4 text-center text-roxo-200 tracking-widest text-sm">
          {t("exp-p1")}
        </p>
        <h2 className="capitalize mb-8 mx-auto text-center max-w-3xl text-white text-4xl sm:text-6xl text-balance font-serif">
          {t("exp-titulo")}
        </h2>
        <div className="overflow-x-auto pb-4 snap-x snap-mandatory grid grid-cols-[repeat(3,minmax(300px,1fr))] gap-4 sm:gap-8">
          <div className="grid gap-4 snap-center bg-roxo-800 p-6 sm:p-8 rounded-xl">
            <h3 className="text-roxo-300 text-2xl font-serif">
              {t("exp-subtitulo1")} 🎭
            </h3>
            <div className="text-white">
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span>{" "}
                {t("exp-p2")}
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span>{" "}
                {t("exp-p3")}
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span>{" "}
                {t("exp-p4")}
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span>{" "}
                {t("exp-p5")}
              </p>
            </div>
            <div className="h-55">
              <img
                className="size-full rounded-2xl grayscale rotate-3 transition-all duration-300 hover:grayscale-0 hover:rotate-0"
                src={dancaModerna}
                alt=""
                onClick={handleClick}
              />
            </div>
            <a
              href="#contato"
              className="justify-self-start self-end btn text-verde-900 px-4 py-2 inline-block rounded-full"
            >
              {t("exp-a")}
            </a>
          </div>
          <div className="grid gap-4 snap-center bg-roxo-800 p-6 sm:p-8 rounded-xl">
            <h3 className="text-roxo-300 text-2xl font-serif">
              {t("exp-subtitulo2")} 🩰
            </h3>
            <div className="text-white">
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span>{" "}
                {t("exp-p6")}
              </p>
              <p
                className="text-xl flex items-center gap-2"
                title={t("exp-title")}
              >
                <span className="h-0.5 w-6 neon inline-block"></span>{" "}
                {t("exp-p7")}
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span>
                {t("exp-p8")}
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span>{" "}
                {t("exp-p9")}
              </p>
            </div>
            <div className="h-55">
              <img
                className="size-full rounded-2xl grayscale transition-all rotate-3 duration-300 hover:grayscale-0 hover:rotate-0 object-cover"
                src={bale}
                alt=""
                onClick={handleClick}
              />
            </div>
            <a
              href="#contato"
              className="justify-self-start self-end btn text-verde-900 px-4 py-2 inline-block rounded-full"
            >
              {t("exp-a")}
            </a>
          </div>
          <div className="relative grid gap-4 snap-center bg-roxo-800 p-6 sm:p-8 rounded-xl">
            <h3 className="text-roxo-300 text-2xl font-serif">
              {t("exp-subtitulo3")} 💃
            </h3>
            <div className="text-white">
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span>{" "}
                {t("exp-p10")}
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span>{" "}
                {t("exp-p11")}
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span>
                {t("exp-p12")}
              </p>
              <p className="text-xl flex items-center gap-2">
                <span className="h-0.5 w-6 neon inline-block"></span>{" "}
                {t("exp-p13")}
              </p>
            </div>
            <div className="h-55">
              <img
                className="size-full rounded-2xl grayscale transition-all -rotate-3 duration-300 hover:grayscale-0 hover:rotate-0"
                src={valsa}
                alt=""
                onClick={({ target }) => target.classList.toggle("-rotate-3")}
              />
            </div>
            <a
              href="#contato"
              className="justify-self-start self-end btn text-verde-900 px-4 py-2 inline-block rounded-full"
            >
              {t("exp-a")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
