import Logo from "../assets/logo.svg"
import Button from "../components/button"
import Cliente1 from "../assets/Cliente1.jpg"
import Cliente2 from "../assets/Cliente2.jpg"
import Cliente3 from "../assets/Cliente3.jpg"
import Check from "../assets/Check.svg"
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import youtube from "../assets/youtube.svg"
import TestimonialsCard from "../components/testimonialCard"
import "../styles/header.css"
import "../styles/utility.css"
import "../../src/styles/button.css"
import "../styles/hero.css"
import "../styles/solution.css"
import "../styles/testimonials.css"
import "../styles/Pricing.css"
import "../styles/footer.css"
import "../styles/contact.css"
export default function Home() {
  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo Stario" width={440} height={160} />
          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section id="hero">
        <div className="container content">
          <p className="desktop-only">Olá</p>
          <h1>
            Soluções inteligentes direto para o seu negócio, é só solicitar e nós entregamos a inovação para você!
          </h1>
          <p>
            Já pensou em otimizar seu negócio com soluções inteligentes? O melhor de tudo, nossos softwares são 100% eficientes e feitos sob medida para você, bora acelerar o crescimento!
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>

      <section className="container" id="solution">
        <header>
          <div>
            <h2>Soluções</h2>
          </div>
          <div className="desktop-only">
            <h2>Sob medida para você</h2>
          </div>
          <p>
            Inovação é com a gente! A <strong>Stario</strong> já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços.
          </p>
        </header>
      </section>

      <section className="even-columns">
        <div className="card">
          <div>
            <h3>Produto Vencedor</h3>
            <p>
              Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.
            </p>
            <hr />
          </div>
        </div>
        <div className="card">
          <div>
            <h3>Produto Vencedor</h3>
            <p>
            Nosso produto foi reconhecido em diversos prêmios de inovação, incluindo o CityTech Award e o FutureTech Challenge.
            </p>
            <hr />
          </div>
        </div>
        <div className="card">
          <div>
            <h3>Produto Vencedor</h3>
            <p>
            Com uma solução inovadora, nosso produto foi eleito o melhor no Tech Innovation Summit e no Digital Transformation Awards.
            </p>
            <hr />
          </div>
        </div>
      </section>
      <section id="testimonials">
        <header>
          <div>
            <p className="desktop-only">Conselho de quem conhece</p>
            <h2>Cada cliente importa!</h2>
          </div>
          <p>
            Quem já usou sabe da qualidade das nossas soluções, estamos quebrando a ideia de que software personalizado é complexo e difícil de usar. Confira abaixo os depoimentos de quem já implementou e aprovou!
          </p>
        </header>

        <section className="carousel">
          <div className="carousel-content">
            <TestimonialsCard img={Cliente1} nome="Juan." rating={5} />
            <TestimonialsCard img={Cliente2} nome="Ednaldo Pereira" rating={4} />
            <TestimonialsCard img={Cliente3} nome="Senhor Poze" rating={3} />
          </div>
        </section>
      </section>

      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">Planos e preços</p>
          <h2>Nossos planos</h2>
        </header>
      </section>

      <section className="even-columns gap-1.5">
        <div className="pricing-card">
          <span className="plan">
            <h3>Básico</h3>
            <p>Você tem direito a o produto Stario.</p>
          </span>
          <h2>50,00</h2>
          <Button text="Pedir agora" secondary key="free" />
          <span className="hr" />
          <span className="features">
            <img src={Check} alt="ícone check" width={24} height={24} />
            <p>Entre em Contato</p>
          </span>
          <ul className="features">
            <li>
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Apenas 1 por CNPJ</p>
            </li>
          </ul>
        </div>

        <div className="pricing-card premium">
          <span className="bonus">
            <p>1º MÊS COM DESCONTO</p>
          </span>
          <span className="plan">
            <h3>Premium</h3>
            <p>Para quem queira aumentar o crecimento da sua impresa</p>
          </span>
          <span className="price">
            <h2>R$ 89,90</h2>
            <p>/mês</p>
          </span>
          <Button text="Pedir agora" key="premium" />
          <span className="hr" />
          <span className="features">
            <img src={Check} alt="ícone check" width={24} height={24} />
            <p>acesso a todos os produtos e novidades</p>
          </span>
          <span className="features">
            <img src={Check} alt="ícone check" width={24} height={24} />
            <p>Treinamento</p>
          </span>
          <span className="features">
            <img src={Check} alt="ícone check" width={24} height={24} />
            <p>Suporte 24H</p>
          </span>
        </div>
        <div className="pricing-card">
          <span className="plan">
            <h3>Empresarial</h3>
            <p>Você tem direito aos produtos da Stario.</p>
          </span>
          <h2>Grátis</h2>
          <Button text="Pedir agora" secondary key="free" />
          <span className="hr" />
          <span className="features">
            <img src={Check} alt="ícone check" width={24} height={24} />
            <p>Suporte 24 horas</p>
          </span>
          <ul className="features">
            <li>
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Apenas com CNPJ</p>
            </li>
          </ul>
        </div>
      </section>
    <section>
  <div className="contact-container">
    <div className="contact-form">
      <h2>Envie sua dúvida</h2>
      <h3>Entre em contato</h3>
      <p>Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder.</p> 
      <form>
        <label htmlFor="email">Seu melhor Email</label>
        <input type="email" id="email" name="email" placeholder="Seu melhor email" required/>
        <label htmlFor="contact-reason">Motivo do contato</label>
        <textarea id="contact-reason" name="contact-reason" placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?" required></textarea>
        <Button text = "Enviar"secondary key="free" />
      </form>
    </div>
  </div>
</section>  

      <footer className="footer">
  <div className="footer-content">
    <p>&copy; Stario. Todos os direitos reservados.</p>
    <div className="social-links">
    <img src={instagram} alt="ícone check" width={24} height={24} />
    <img src={facebook} alt="ícone check" width={24} height={24} />
    <img src={youtube} alt="ícone check" width={24} height={24} />
    </div>

  </div>
</footer>
    </>
  );
}
