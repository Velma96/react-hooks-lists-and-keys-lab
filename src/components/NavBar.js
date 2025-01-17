import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {/* Map over the links array to create <a> tags */}
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );

}

export default NavBar;
