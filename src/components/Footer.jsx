const Footer = () => {
  return (
    <footer className="container pb-8">
      <div className="bg-roxo-900 p-6 rounded-2xl mb-8 sm:p-12 grid gap-8 lg:grid-cols-2">
        <div className="flex gap-12 max-sm:flex-col max-sm:gap-4">
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Endereço</h3>
            <p className="text-gray-400">
              Rua da Dança, 123 <br />
              Danceteria
              <br />
              Rio de Janeiro, RJ
            </p>
          </div>
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Contato</h3>
            <p className="text-gray-400">
              contato@mova.com <br />
              +55 21 99999-9999
              <br />
            </p>
          </div>
        </div>
        <div className="lg:justify-self-end">
          <h1 className="text-4xl text-white font-serif font-extrabold">
            <a href="#">Mova</a>
          </h1>
          <p className="text-gray-400">Conecte-se com a seu corpo</p>
        </div>
      </div>
      <div className="text-gray-400 flex items-center justify-between gap-8 text-sm max-sm:flex-col-reverse">
        <p>© 2026 Mova. Todos os direitos reservados.</p>
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
