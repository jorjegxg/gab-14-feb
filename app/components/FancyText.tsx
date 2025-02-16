import { useState, useEffect } from 'react';

const FancyText = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        setTimeout(() => {
          setShowText(true);
        }, 4000); // Afișează textul după 4 secunde
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showText && (
        <p style={{ fontFamily: 'Cedarville Cursive', fontSize: '30px' }}>
          Pur și simplu 
        </p>
      )}
    </div>
  );
};

export default FancyText;
