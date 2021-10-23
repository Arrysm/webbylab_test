import React from 'react';

const Footer = () => {
    return (
        <div className="footer-copyright" style={{width: '100%', position: 'absolute', bottom: 10}}>
            <div className="container" style={{textAlign: 'center', userSelect: 'none'}}>
                &copy; 2021, made just for test
            </div>
        </div>
    );
};

export default Footer;