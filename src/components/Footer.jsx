import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation();

  return (
    <footer className="container pb-8">
      <div className="bg-roxo-900 p-6 rounded-2xl mb-8 sm:p-12 grid gap-8 lg:grid-cols-2">
        <div className="flex gap-12 max-sm:flex-col max-sm:gap-4">
          <div>
            <h3 className="text-white font-serif text-xl mb-4">
              {t("foo-subtitulo")}
            </h3>
            <p className="text-gray-400">
              {t("foo-p1")} <br />
              {t("foo-p2")}
              <br />
              {t("foo-p3")}
            </p>
          </div>
          <div>
            <h3 className="text-white font-serif text-xl mb-4">
              {t("foo-subtitulo2")}
            </h3>
            <p className="text-gray-400">
              contato@mova.com <br />
              +55 21 99999-9999
              <br />
            </p>
          </div>
        </div>
        <div className="lg:justify-self-end">
          <h1 className="text-4xl text-white font-serif font-extrabold">
            <a href="#">{t("logo")}</a>
          </h1>
          <p className="text-gray-400">{t("exp-p1")}</p>
        </div>
      </div>
      <div className="text-gray-400 flex items-center justify-between gap-8 text-sm max-sm:flex-col-reverse">
        <p>© 2026 Mova. {t("foo-p4")}</p>
        <ul className="flex gap-8">
          <li>
            <a className="hover:text-roxo-300" href="#">
              Instagram
            </a>
          </li>
          <li>
            <a className="hover:text-roxo-300" href="#">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="hover:text-roxo-300" href="#">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
