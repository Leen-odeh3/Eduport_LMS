import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src="https://eduport.webestica.com/assets/images/logo.svg" width="150px" alt="logo"/>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
