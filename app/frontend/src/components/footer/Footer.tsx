import './styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <section>
        <u>(Projeto p/ Portfólio)</u>
        Desenvolvido por <strong>Gustavo Vieira, </strong>
        <i>utilizando: reactJS, typescript, javascript, html e css, ...</i>
      </section>
      <strong>Minhas redes sociais:</strong>
      <section>
        <a
          href="https://www.linkedin.com/in/gustavovieiradeoliveira/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </section>
      <section>
        <a href="https://github.com/Gusvioli" target="_blank" rel="noreferrer">
          Github
        </a>
      </section>
    </footer>
  )
}
