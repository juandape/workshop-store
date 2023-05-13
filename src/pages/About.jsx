import "./about.css";

function AboutPage() {
  return (
    <>
      <h1 className="about--title">About me</h1>
    <div className="about-container">
      <div className="about-container__info">
      <img
        src='..\src\assets\IMG_3661.png'
        alt="author image"
        className="about-container--img"
      />
      <div className="about-container--description">
      <h2 className="about-container--description--name">Juan David Peña</h2>
      <p className="about-container--description--text">Fullstack Developer, profesional Bartender, Make It Real student</p>
      </div>
      </div>
      <div className="about-container__skills">
        <h2 className="about-container__skills--title">What I learn</h2>
        <ul className="about-container__skills--list">
          <li>Create and manage remote and local repos with Git</li>
          <li>Use of the React library for the creation of web pages</li>
          <li>Best way to present and deploy the different projects</li>
        </ul>
      </div>
      <div className="about-container__social">
        <h3>
          github: <a href="https://github.com/juandape">  @juandape</a>
        </h3>
        <h3>
          email: 
          <a href="mailto:juandavidp76@gmail.com">  juandavidp76@gmail.com</a>
        </h3>
      </div>
    </div>
    </>
  );
}

export default AboutPage;
