import React from 'react';

const ContactPage = () => {
    // change the title of the page
    document.title = "Contact | Marvel App";

    return (
        <>
            <h1>Contact Us</h1>
            <p>
                Feel free to contact us at <a href="mailto:marvelApp@gmail.com">marvelApp@gmail.com</a>
            </p>
        </>
    );
};

export default ContactPage;
