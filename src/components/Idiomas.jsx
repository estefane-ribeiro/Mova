import { useTranslation } from "react-i18next";

const Idiomas = ({ ref }) => {
  const { i18n } = useTranslation();

  function handleChangeLanguage(event) {
    const language = event.target.value;

    i18n.changeLanguage(language);

    localStorage.setItem("language", language);
  }
  return (
    <select
      ref={ref}
      className="p-4 lg:px-0 lg:py-2 select *:bg-roxo-800 "
      value={i18n.resolvedLanguage?.split("-")[0] || "pt"}
      onChange={handleChangeLanguage}
    >
      <option value="pt ">🇧🇷 Português </option>
      <option value="en">🇺🇸 English </option>
      <option value="es">🇪🇸 Español</option>
    </select>
  );
};

export default Idiomas;
