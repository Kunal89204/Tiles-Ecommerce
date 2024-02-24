import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4 py-2 max-w-7xl flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-white font-semibold mr-4">My Website</span>
          <NavItem title="Tiles" dropdownItems={['Ceramic', 'Porcelain', 'Marble']} />
          <NavItem title="Outdoor" dropdownItems={['Patio', 'Garden', 'Deck']} />
          <NavItem title="Wall Paneling" dropdownItems={['Wood', 'Brick', 'Stone']} />
          <NavItem title="Flooring" dropdownItems={['Hardwood', 'Laminate', 'Vinyl']} />
          <NavItem title="Bathrooms" dropdownItems={['Fixtures', 'Tubs', 'Showers']} />
          <NavItem title="Accessories" dropdownItems={['Mirrors', 'Lights', 'Racks']} />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ title, dropdownItems }) => {
  return (
    <div className="relative group" onMouseEnter={() => document.getElementById(title).classList.add('visible')} onMouseLeave={() => document.getElementById(title).classList.remove('visible')}>
      <button
        className="text-white text-sm font-semibold uppercase hover:bg-gray-700 px-3 py-2 rounded-md focus:outline-none"
      >
        {title}
      </button>
      <div id={title} className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10 invisible group-hover:visible">
        {dropdownItems.map((item, index) => (
          <div
            key={index}
            className="text-white px-4 py-2 hover:bg-gray-700 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
