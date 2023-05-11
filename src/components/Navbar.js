
import { menuItems } from '../menuItems';
import Profile from './../components/Profile/Profile'
import Search from './../components/Search/Search'
import MenuItems from './MenuItems';
const Navbar = () => {
  return (
    <>
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <>
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
              />
           
              </>
          );
        })}
      </ul>
    </nav>
    <Search></Search>

    <Profile></Profile>
   </>
  );
};

export default Navbar;
