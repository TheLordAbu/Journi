/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useOutsideClick from "../features/hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-50 blur-sm"></div>
      <div
        className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-gray-100 rounded shadow-lg z-60 px-16 py-12"
        ref={ref}
      >
        <button
          className="bg-transparent border-none p-2 rounded-full translate-x-3 absolute top-5 right-5 hover:bg-gray-300 cursor-pointer"
          onClick={close}
        >
          <HiXMark className="w-6 h-6" />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
