import React from 'react';
import '../contactus/contactUs.css'

const LinksPage = () => {
  const links = [
    { title: 'Instagram', url: 'https://www.instagram.com/dingestore2/' },
    // { title: 'Products', url: '/products' },
    // { title: 'About Us', url: '/about' },
    // { title: 'Contact Us', url: '/contact' },
  ];

  return (
    <div className="container">
      <h2 className="title">Useful Links</h2>
      <ul className="link-list">
        {links.map((link, index) => (
          <li key={index} className="link-item">
            <a href={link.url} className="link">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksPage;
