import logo from '../assets/images/image1.png';
export default function AboutPage(){
  return (
    <div className="container-fluid pt-4">
      <div>
        <h2>About Me</h2>
      </div>
      <div>
        <img src ={logo} alt="Photo" className="rounded-circle img-fluid"
        style ={{width: '100px', height: '100px'}}/>
      </div>
      <div >
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
        impedit suscipit sed magnam alias in, repellat expedita hic explicabo
        architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Velit voluptate exercitationem quaerat pariatur
        mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
        nostrum temporibus ad omnis nam rerum eligendi.
      </p></div>
    </div>
  );
}