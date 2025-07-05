import { styles } from "../styles";
import React from 'react';
import { motion } from 'framer-motion';
import { saveAs } from 'file-saver';

export default function SocialMedia() {
  const downloadPdf = () => {
    try {
      
      saveAs('/UDDIPTA_SINGHA_CV.pdf', 'resume.pdf');
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div className="social-media">

      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>

      <motion.button
        onClick={downloadPdf}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#184580',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          outline: 'none',
          marginLeft: '180px',
          marginBottom: '60px',
        }}
      >
        Download Resume
      </motion.button>

      <div className="relative bottom-0 left-0 z-50 w-full flex justify-start">
        <div className="mx-left flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-left space-x-2"></div>

          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              <li>
                <a
                  href="https://github.com/Uddipta7"
                  className="text-sm font-semibold text--300 hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x text-gray-300 hover:text-gray-400"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/___uddipta__/"
                  className="text-sm font-semibold text--300 hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fa-2x text-gray-300 hover:text-gray-400"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/uddipta-singha/"
                  className="text-sm font-semibold text--300 hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-2x text-gray-300 hover:text-gray-400"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
