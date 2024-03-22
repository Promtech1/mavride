import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";


interface PopModalProps {
  delay: number;
  imageUrl: string;
}

const PopModal: React.FC<PopModalProps> = ({ delay, imageUrl }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  const closeModal = () => {
    setShowModal(false);
  };

  // const handleOutsideClick = (event: MouseEvent) => {
  //   if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
  //     closeModal();
  //   }
  // };

  // useEffect(() => {
  //   if (showModal) {
  //     document.addEventListener('mousedown', handleOutsideClick);
  //   } else {
  //     document.removeEventListener('mousedown', handleOutsideClick);
  //   }

  //   return () => {
  //     document.removeEventListener('mousedown', handleOutsideClick);
  //   };
  // }, [showModal]);

  return (
    <div className={`fixed inset-0 z-50 overflow-auto ${showModal ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 flex justify-center items-center`}>
      <div className="bg-black bg-opacity-50 absolute inset-0 pading" ></div>
      <div className="relative" ref={modalRef}>
        {showModal && (
          <div className="bg-white p-8 rounded-lg max-w-lg relative transform transition-transform duration-500" style={{margin:80}}>
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-2 p-1 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">We are hiring</h2>
            <div className="overflow-hidden rounded-lg mb-4 text-center">
              <Image src={imageUrl} alt="Modal Image" width={300} height={300}/>
            </div>
            <p className="text-center">
              We are hiring drivers for our local firm. If you're interested, click below to get started.
            </p>
            <div className="text-center">
              <Link className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 text-decoration-none" href="/applicationForm">
               
                  Get Started
                
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopModal;
