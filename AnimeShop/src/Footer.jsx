import React, { useState } from 'react';

function Footer() {
  const [expanded, setExpanded] = useState(false);

  const toggleFooterSize = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <footer id="contact" className={`footer ${expanded ? 'expanded' : ''}`} onClick={toggleFooterSize}>
        <h3>Zawsze z tobą w kontakcie</h3>
        {expanded && (
          <div className="contact-info">
            <p><strong>Telefon:</strong> +48696966699</p>
            <p><strong>Poczta:</strong> animeshop@ukwbydgoszcz.com</p>
            <p><strong>Adres:</strong> Bydgoszcz, Poland</p>
            <p><strong>Godziny pracy:</strong> Codziennie</p>
          </div>
        )}
      </footer>
    </>
  );
}

export default Footer;
