import logo from "../assets/images/image1.png";
import resume from "../assets/images/resume_large.png";
import windowImage from "../assets/images/window_large.png";
import download from "../assets/files/Isaiah_C_Resume.docx.pdf"
import repoLinks from '../components/UI/RepoLinks';
const [vehicleBuilder,employeeTracker,recipeVault,readmeGenerator,drillGame,Cypress,Social,Melodify,BookSearch] = repoLinks;
import logo1 from '../assets/images/code1.png';
import logo2 from '../assets/images/code2.png';
import logo3 from '../assets/images/code3.png';
import logo4 from '../assets/images/code4.png';
import logo5 from '../assets/images/code5.png';
import logo6 from '../assets/images/code6.png';
import logo7 from '../assets/images/github.svg';

export default function Home() {
  return (
    <>
      <div className="container-fluid about-grid">
        <div id="hero-img" className="card">
          <img src={logo} alt="Photo" className="card-img-top" />
          <div className="card-body">
            <h4>Isaiah Capers</h4>
            <a href="https:/www.linkedin.com/in/isaiah-capers" className="btn btn-info">
              Connect with Me
            </a>
          </div>
        </div>
        <div id="bio" className="card ">
          <h3 className="card-title">Web Developer</h3>
          <div id="bioP">
            <p>
              Full-stack web developer with expertise in front-end technologies
              like HTML, CSS, and JavaScript, currently expanding skills in
              back-end development and database management. I enjoy solving
              complex problems and transforming ideas into functional,
              user-friendly web applications. My goal is to create impactful
              digital experiences that both delight and meet user needs.
            </p>
            {/* <p>
            Currently, I am honing my skills in both front-end and back-end
            technologies to become a well-rounded developer. I enjoy
            collaborating with others and believe in the power of teamwork to
            bring innovative ideas to life. As someone who values adaptability
            and growth, I am always open to new challenges and eager to learn
            from more experienced developers. My goal is to contribute to
            dynamic teams, work on meaningful projects, and continually evolve
            as a developer in the fast-paced world of technology.
          </p> */}
          </div>
        </div>
        <div id="view-work" className="card">
          <img src={windowImage} alt="View Work" className="card-img" id="bg" />
          <div className="card-img-overlay">
            <a
              href="https://github.com/Isaiahcapers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 id="viewh2">View My Repos</h2>
            </a>
          </div>
        </div>
        <div id="resume" className="card">
          <a href={download} download="Isaiah_C_Resume" id="bg">
            <img src={resume} alt="Resume" className="card-img " />
          </a>
        </div>
        <div className="card port" id="cd1">
          <img src={logo1} alt="" className="card-img-top" />
          <div className="card-body">
            <h4>{vehicleBuilder.name}</h4>
            <p className="card-text">Languages: Typscript</p>
          </div>
          <a href={vehicleBuilder.link} className="card-git">
            <img src={logo7} alt="" className="g-tag" />
          </a>
        </div>
        <div className="card port" id="cd2">
          <img src={logo2} alt="" className="card-img-top" />
          <div className="card-body">
            <h4>{employeeTracker.name}</h4>
            <p>Languages: Typescript</p>
          </div>
          <a href={employeeTracker.link} className="card-git">
            <img src={logo7} alt="" className="g-tag" />
          </a>
        </div>
        <div className="card port" id="cd3">
          <img src={logo3} alt="" className="card-img-top" />
          <div className="card-body">
            <h4>{recipeVault.name}</h4>
            <p>Languages: HTML, JS, CSS</p>
          </div>
          <a href={recipeVault.link} className="card-git">
            <img src={logo7} alt="" className="g-tag" />
          </a>
        </div>
        <div className="card port" id="cd4">
          <img src={logo4} alt="" className="card-img-top" />
          <div className="card-body">
            <h4>{readmeGenerator.name}</h4>
            <p>Languages: HTML, JS, CSS</p>
          </div>
          <a href={readmeGenerator.link} className="card-git">
            <img src={logo7} alt="" className="g-tag" />
          </a>
        </div>
        <div className="card port" id="cd5">
          <img src={logo5} alt="" className="card-img-top" />
          <div className="card-body">
            <h4>{drillGame.name}</h4>
            <p>Languages: HTML, JS, CSS</p>
          </div>
          <a href={drillGame.link} className="card-git">
            <img src={logo7} alt="" className="g-tag" />
          </a>
        </div>
        <div className="card port" id="cd6">
          <img src={logo6} alt="" className="card-img-top" />
          <div className="card-body">
            <h4>{Cypress.name}</h4>
            <p>Languages: HTML, JS, CSS, Typescript</p>
            <p>Backend: MongoDB, Express</p>
          </div>
          <a href={Cypress.link} className="card-git">
            <img src={logo7} alt="" className="g-tag" />
          </a>
        </div>
        <div className="card port" id="cd7">
          <img src={logo1} alt="" className="card-img-top" />
          <div className="card-body">
            <h4>{Social.name}</h4>
            <p>Languages: Typescript</p>
            <p>Backend: MongoDB, Express</p>
          </div>
          <a href={Social.link} className="card-git">
            <img src={logo7} alt="" className="g-tag" />
          </a>
        </div>
        <div className="card port" id="cd8">
          <img src={logo2} alt="" className="card-img-top" />
          <div className="card-body">
            <h4>{Melodify.name}</h4>
            <p>Languages: Typescript,CSS, HTML, JS</p>
            <p>Backend: MongoDB, Express</p>
          </div>
          <a href={Melodify.link} className="card-git">
            <img src={logo7} alt="" className="g-tag" />
          </a>
        </div>
        <div className="card port" id="cd9">
          <img src={logo3} alt="" className="card-img-top" />
          <div className="card-body">
            <h4>{BookSearch.name}</h4>
            <p>Languages: Typescript,CSS, HTML, JS</p>
            <p>Backend: MongoDB, Express</p>
          </div>
          <a href={BookSearch.link} className="card-git">
            <img src={logo7} alt="" className="g-tag" />
          </a>
        </div>
      </div>
    </>
  );
}
