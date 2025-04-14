
import React, { useEffect } from 'react';
import PrintablePage from '@/components/PrintablePage';

const Print = () => {
  useEffect(() => {
    // Automatically trigger print dialog when the page loads
    const timeoutId = setTimeout(() => {
      window.print();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="print-page">
      <div className="non-printable bg-gray-100 p-4 text-center print:hidden">
        <h1 className="text-2xl font-bold mb-2">Print Preview</h1>
        <p className="mb-4">This page is optimized for printing. Press Ctrl+P (or Cmd+P on Mac) to save as PDF.</p>
        <button 
          onClick={() => window.print()} 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Print/Save as PDF
        </button>
      </div>
      <PrintablePage />
    </div>
  );
};

export default Print;
