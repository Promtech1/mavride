import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";

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

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-auto flex justify-center items-center">
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="relative z-20">
            <div className="bg-white p-8 rounded-lg max-w-lg relative">
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
                <Image src={imageUrl} alt="Modal Image" width={300} height={300} />
              </div>
              <p className="text-center">
                Are you a qualified driver? Click below to join our team of drivers now!
              </p>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  onClick={closeModal}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopModal;
