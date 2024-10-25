// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <div >
        <Navbar
          links={[
            <Link key={1}  to="/">
              Home
            </Link>,
            <Link key={2}  to="/portfolio">
              Portfolio
            </Link>,
            <Link key={3}  to="/contact">
            Contact
          </Link>,
          <Link key={4}  to="/resume">
          Resume
        </Link>,
          ]}
        />
    </div>
  );
}
