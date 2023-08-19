import { useEffect } from 'react';

const DisableLeftClick = () => {
  useEffect(() => {
    const disableLeftClick = (event) => {
      if (event.button === 0) { // Check if left mouse button is clicked (button code 0)
        event.preventDefault();
      }
    };

    window.addEventListener('mousedown', disableLeftClick);

    return () => {
      window.removeEventListener('mousedown', disableLeftClick);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default DisableLeftClick;
