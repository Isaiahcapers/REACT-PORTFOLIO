import logo1 from '../assets/images/code1.png';
import logo2 from '../assets/images/code2.png';
import logo3 from '../assets/images/code3.png';
import logo4 from '../assets/images/code4.png';
import logo5 from '../assets/images/code5.png';
import logo6 from '../assets/images/code6.png';
import logo7 from '../assets/images/github.svg';
import repoLinks from '../components/UI/RepoLinks';
const [vehicleBuilder,employeeTracker,recipeVault,readmeGenerator,drillGame,reactPortfolio] = repoLinks;
export default function PortfolioPage() {
    return (
        <div className="container-fluid d-flex">
           <div className='row '>
                <div className="port-img col-12 col-md-6 d-flex flex-column">
                    <div className='d-flex justify-content-center'>
                    <img src={logo1} alt="PC 1"/>
                    </div>
                    <div className='d-flex justify-content-around'>
                        <a href={vehicleBuilder.deploy}>{vehicleBuilder.name}</a>
                        <a href={vehicleBuilder.link}><img src={logo7} alt="github logo" style={{width: '25px', height: '25px'}}/></a>
                    </div>
                </div>
                <div className="port-img col-12 col-md-6 d-flex flex-column">
                    <div className='d-flex justify-content-center'> 
                        <img src={logo2} alt="PC 2" />
                    </div>
                    <div className=" d-flex justify-content-around">
                        <a href={employeeTracker.deploy}>{employeeTracker.name}</a>
                        <a href={employeeTracker.link}><img src={logo7} alt="github logo" style={{width: '25px', height: '25px'}}/></a>
                    </div>
                </div>
                <div className="port-img col-12 col-md-6 d-flex flex-column ">
                    <div className='d-flex justify-content-center'>
                        <img src={logo3} alt="Coding 1" />    
                    </div>
                    <div className="d-flex justify-content-around">
                        <a href={recipeVault.deploy}>{recipeVault.name}</a>
                        <a href={recipeVault.link}><img src={logo7} alt="github logo" style={{width: '25px', height: '25px'}}/></a>
                    </div>
                </div>
                <div className="port-img col-12 col-md-6 d-flex flex-column">
                    <div className='d-flex justify-content-center'>
                        <img src={logo4} alt="OOP" />
                    </div>
                    <div className="d-flex justify-content-around">
                        <a href={readmeGenerator.deploy}>{readmeGenerator.name}</a>
                        <a href={readmeGenerator.link}><img src={logo7} alt="github logo" style={{width: '25px', height: '25px'}}/></a>
                    </div>
                </div>
                <div className="port-img col-12 col-md-6 d-flex flex-column">
                    <div className='d-flex justify-content-center'>
                        <img src={logo5} alt="World" />
                    </div>
                    <div className="d-flex justify-content-around">
                        <a href={drillGame.deploy}>{drillGame.name}</a>
                        <a href={drillGame.link}><img src={logo7} alt="github logo" style={{width: '25px', height: '25px'}}/></a>
                    </div>
                </div>
                <div className="port-img col-12 col-md-6 d-flex flex-column">
                    <div className='d-flex justify-content-center'>
                        <img src={logo6} alt="SQL" />
                    </div>
                <div className="d-flex justify-content-around">
                    <a href={reactPortfolio.deploy}>{reactPortfolio.name}</a>
                        <a href={reactPortfolio.link}><img src={logo7} alt="github logo" style={{width: '25px', height: '25px'}}/></a>
                    </div>
                </div>
           </div>
        </div>
    );
}