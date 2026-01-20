import React, { useState, useEffect } from 'react';
import './AddedToCart.css';

export default function AddedToCart({ show, icon }) {
  // State to control visibility
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true); // Show popup
      const timer = setTimeout(() => setVisible(false), 1200); // Hide after 1.2s
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [show]);

  return (
    <>
      {visible && (
        <div className="added-popup">
         {icon}Added to Cart!
        </div>
      )}
    </>
  );
}
