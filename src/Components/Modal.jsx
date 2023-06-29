import React from "react";

export default function Modal({ openModal, onClose, children}) {
    if(!openModal) return null
  
  return (
    <>   
      {children}
    </>
  );
}