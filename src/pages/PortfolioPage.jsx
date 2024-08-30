import logo1 from '../assets/images/code1';
import logo2 from '../assets/images/code2';
import logo3 from '../assets/images/code3';
import logo4 from '../assets/images/code4';
import logo5 from '../assets/images/code5';
import logo6 from '../assets/images/code6';

export default function PortfolioPage () {
    return (
    <div className="container-fluid d-flex flex-row">
        <div><img src={logo1} alt="" /></div>
        <div><img src={logo2} alt="" /></div>
        <div><img src={logo3} alt="" /></div>
        <div><img src={logo4} alt="" /></div>
        <div><img src={logo5} alt="" /></div>
        <div><img src={logo6} alt="" /></div>
    </div>
    );
}