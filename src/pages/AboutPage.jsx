import logo from "../assets/images/image1.png";
import resume from "../assets/images/Resume 300400.png";
import windowImage from "../assets/images/window.png";

export default function AboutPage() {
  return (
    <>
      <div className="container-fluid about-grid card-deck">
        <div id="hero-img" className="card">
          <img src={logo} alt="Photo" className="card-img" />
        </div>
        <div id="bio" className="card ">
          <h3 className="card-title">Web Developer</h3>
          <div id="bioP">
          <p>
            Full-stack web developer with expertise in front-end technologies like HTML, CSS, and JavaScript, currently expanding skills in back-end development and database management. I enjoy solving complex problems and transforming ideas into functional, user-friendly web applications. My goal is to create impactful digital experiences that both delight and meet user needs.
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
          <img src={windowImage} alt="View Work" className="card-img" />
          <div className="card-img-overlay">
            <h3>View My Work </h3>
          </div>
        </div>
        <div id="resume" className="card">
          <img src={resume} alt="Resume" className="card-img" />
        </div>
        <div className="card" id="cd1">
          1
        </div>
        <div className="card" id="cd2">
          2
        </div>
        <div className="card" id="cd3">
          3
        </div>
        <div className="card" id="cd4">
          4
        </div>
        <div className="card" id="cd5">
          5
        </div>
        <div className="card" id="cd6">
          6
        </div>
        <div className="card" id="cd7">
          7
        </div>
        <div className="card" id="cd8">
          8
        </div>
        <div className="card" id="cd9">
          9
        </div>
        <div className="card" id="cd10">
          10
        </div>
      </div>
    </>
  );
}
