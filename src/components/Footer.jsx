import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github.svg';

export default function Footer () {
    return (
        <footer className="d-flex flex-wrap p-3 my-1 border-top ">
            <div className="container-fluid p-0 align-items-center align-self-center">
                <ul className='d-flex flex-wrap justify-content-around m-0'>
                    <a href="https://www.linkedin.com/in/isaiah-capers-6989ab88/"><img src={linkedin} alt="linkedin svg" style={{width:'50px',height: '50px'}}/></a>
                    <a href="https://github.com/Isaiahcapers"><img src={github} alt="github svg" style={{width:'50px',height: '50px'}}/></a>
                </ul>
            </div>
        </footer>
    );
}