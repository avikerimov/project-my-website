import React from 'react'

const Footer = () => {
    return (
      <p className="border-top pt-2 text-center bg-light">
        GadgetShop by <i>Avi Kerimov</i> &copy; {new Date().getFullYear()}
      </p>
    );
}
 
export default Footer;