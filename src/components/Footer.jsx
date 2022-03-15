import React from "react";

function Footer() {

    const d = new Date();
    const currentYear = d.getFullYear();
    return(
        <footer>
            <p>Copyright &#169; {currentYear}</p>
        </footer>
        
    );
}

export default Footer;