import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-10 rounded-lg shadow-2xl text-center max-w-md w-full border border-gray-700">
        <div className="flex justify-center mb-6">
          <img
            src="https://imgs.search.brave.com/UzZqaT6_cZBZOOhW2qjxrLJ5OxIfk78U7N_qI1eq-VY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA2L2Fl/LzA3LzA2YWUwNzJm/YjM0M2E3MDRlZTgw/YzJjNTVkMmRhODBh/LmdpZg.gif"
            alt="Done Logo"
            className="w-24 h-24 border-4 border-blue-500 rounded-full shadow-lg"
          />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Thank You!</h2>
        <p className="text-gray-300 mb-6">
          Your form has been submitted successfully. We appreciate your time and effort.
        </p>
        <a
          href="https://ramesh-portfolio-pro.vercel.app/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default App;
