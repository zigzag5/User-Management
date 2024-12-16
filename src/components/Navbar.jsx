// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <nav style={styles.navbar}>
//       {/* Logo or Title */}
//       <div style={styles.logo}>My Web App</div>

//       {/* Hamburger Icon for smaller screens */}
//       <div style={styles.hamburger} onClick={toggleMenu}>
//         ☰
//       </div>

//       {/* Navigation Links */}
//       <ul style={{ ...styles.navLinks, ...(isMenuOpen ? styles.showMenu : {}) }}>
//         <li>
//           <Link to="/" style={styles.link}>Home</Link>
//         </li>
//         <li>
//           <Link to="/about" style={styles.link}>About</Link>
//         </li>
//         <li>
//           <Link to="/services" style={styles.link}>Services</Link>
//         </li>
//         <li>
//           <Link to="/contact" style={styles.link}>Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// // Inline CSS Styles
// const styles = {
//   navbar: {
//     position: 'fixed', // Ensure navbar stays at the top
//     top: 0,
//     width: '100%',
//     backgroundColor: '#282c34',
//     color: 'white',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 20px',
//     zIndex: 1000, // Ensure navbar stays above other content
//   },
//   logo: {
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//   },
//   hamburger: {
//     display: 'none', // Initially hidden, only shown on small screens
//     fontSize: '1.8rem',
//     cursor: 'pointer',
//   },
//   navLinks: {
//     display: 'flex',
//     listStyle: 'none',
//     margin: 0,
//     padding: 0,
//   },
//   link: {
//     color: 'white',
//     textDecoration: 'none',
//     margin: '0 15px',
//     fontSize: '1rem',
//   },
//   showMenu: {
//     display: 'block', // Display menu when toggled
//   },
//   // Media Queries
//   '@media (max-width: 768px)': {
//     navLinks: {
//       display: 'none', // Hide links by default on small screens
//       flexDirection: 'column',
//       backgroundColor: '#282c34',
//       position: 'absolute',
//       top: '100%', // Below the navbar
//       left: 0,
//       width: '100%',
//       textAlign: 'center',
//     },
//     hamburger: {
//       display: 'block', // Show hamburger icon on small screens
//     },
//   },
// };

// export default Navbar;

const Navbar = () => {
    return (
      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", backgroundColor: "#282c34", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", zIndex: 1000 }}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>My App</div>
        <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
          <li><a href="/" style={{ color: "white", textDecoration: "none", margin: "0 15px", fontSize: "1rem" }}>Home</a></li>
          <li><a href="/about" style={{ color: "white", textDecoration: "none", margin: "0 15px", fontSize: "1rem" }}>About</a></li>
          <li><a href="/contact" style={{ color: "white", textDecoration: "none", margin: "0 15px", fontSize: "1rem" }}>Contact</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  