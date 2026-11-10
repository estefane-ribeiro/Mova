import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Idiomas from "./Idiomas";

const Header = () => {
  const ref = useRef(null);
  const [t] = useTranslation();

  function handleClickButton() {
    if (!ref.current) return;
    ref.current.classList.remove("hidden");
    ref.current.classList.add("flex");
  }

  function handleClickMenuMobile() {
    ref.current.classList.remove("flex");
    ref.current.classList.add("hidden");
  }
  return (
    <header
      id="header"
      className="flex justify-between items-center py-6 px-2 sm:p-6"
    >
      <h1 className="text-4xl text-white uppercase font-serif font-extrabold">
        {t("logo")}
      </h1>
      <nav
        ref={ref}
        onClick={handleClickMenuMobile}
        id="mobile-menu"
        className="lg:block hidden items-center z-40 max-lg:fixed max-lg:w-full max-lg:inset-0"
      >
        <div className="fixed lg:hidden inset-0 bg-roxo-900/40 backdrop-blur-md"></div>
        <ul className="text-white text-2xl max-lg:divide-y-2 max-lg:divide-white/10 max-lg:z-50 max-lg:absolute max-lg:p-8 max-lg:w-full lg:text-xl lg:flex lg:flex-wrap lg:gap-8 *:**:transition-all *:**:duration-300">
          <li className="animate-slide-in opacity-0 animate-1">
            <a
              href="#modalidades"
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 group"
            >
              {t("modalidades")}
              <span className="opacity-0 h-0.5 w-2 block bg-roxo-100 lg:group-hover:w-full lg:group-hover:opacity-100 "></span>
            </a>
          </li>
          <li className="animate-slide-in opacity-0 animate-2">
            <a
              href="#experiencias"
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 group "
            >
              {t("experiencias")}
              <span className="opacity-0 h-0.5 w-2 block bg-roxo-100 lg:group-hover:w-full lg:group-hover:opacity-100 "></span>
            </a>
          </li>
          <li className="animate-slide-in opacity-0 animate-3">
            <a
              href="#galeria"
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 group"
            >
              {t("galeria")}
              <span className="opacity-0 h-0.5 w-2 block bg-roxo-100 lg:group-hover:w-full lg:group-hover:opacity-100  "></span>
            </a>
          </li>
          <li className="animate-slide-in opacity-0 animate-4">
            <a
              href="#contato"
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 group"
            >
              {t("contato")}
              <span className="opacity-0 h-0.5 w-2 block bg-roxo-100 lg:group-hover:w-full lg:group-hover:opacity-100  "></span>
            </a>
          </li>
          <li className="animate-slide-in opacity-0 animate-5">
            <Idiomas />
          </li>
        </ul>
      </nav>
      <button
        onClick={handleClickButton}
        id="mobile-button"
        className="flex items-center gap-3 btn text-roxo-200 font-semibold px-4 py-2 cursor-pointer lg:hidden"
      >
        {t("menu")} ☰
      </button>
    </header>
  );
};

export default Header;
