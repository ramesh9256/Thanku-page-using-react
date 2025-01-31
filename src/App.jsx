import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img
            src="https://imgs.search.brave.com/UzZqaT6_cZBZOOhW2qjxrLJ5OxIfk78U7N_qI1eq-VY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA2L2Fl/LzA3LzA2YWUwNzJm/YjM0M2E3MDRlZTgw/YzJjNTVkMmRhODBh/LmdpZg.gif"
            alt="Done Logo"
            className="w-24 h-24"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">Thank you</h2>
        <p className="text-gray-600 mb-6">
          Your form has been submitted successfully. We appreciate your time and effort.
        </p>
        <a
          href="https://ramesh-portfolio-pro.vercel.app/"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default App;