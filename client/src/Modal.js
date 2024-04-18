// Modal.jsx
import React from 'react';
import './Modal.css'; // Make sure to create corresponding CSS for styling

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button onClick={onClose} className="modal-close-button">X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
