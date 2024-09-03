import logo from '../assets/images/image1.png';
export default function AboutPage(){
  return (
    <div className="container-fluid pt-4">
      <div class ='pt-4'>
        <h2>About Me</h2>
      </div>
      <div>
        <img src ={logo} alt="Photo" className="rounded-circle img-fluid"
        style ={{width: '100px', height: '100px'}}/>
      </div>
      <div >
        <p>
        I am a passionate and motivated new graduate eager to dive into the world of full-stack web development. With a solid foundation in front-end technologies like HTML, CSS, and JavaScript, I am excited to expand my skills to include back-end development and database management. I thrive on solving complex problems and love the challenge of turning creative ideas into functional, user-friendly web applications. My journey so far has been marked by continuous learning, whether it’s through building personal projects, exploring new frameworks, or deepening my understanding of web APIs. I am driven by a strong desire to create impactful digital experiences that not only meet user needs but also delight them.
        </p>
        <p>
        Currently, I am honing my skills in both front-end and back-end technologies to become a well-rounded developer. I enjoy collaborating with others and believe in the power of teamwork to bring innovative ideas to life. As someone who values adaptability and growth, I am always open to new challenges and eager to learn from more experienced developers. My goal is to contribute to dynamic teams, work on meaningful projects, and continually evolve as a developer in the fast-paced world of technology.
      </p></div>
    </div>
  );
}