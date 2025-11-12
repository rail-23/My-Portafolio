import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hola, me llamo Rayl<br />
          Full Stack Developer
        </h1>
      </div>

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateY(550px)',
        }}
        end={{
          transform: 'translatex(0px)',
        }}
      >
        <div className="home__contact_me">
          <button onClick={handleNavigateToContactMePage}>Contactar</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
