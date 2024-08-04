import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputName = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/greeting?name=${name}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-200">
      <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 lg:p-16 rounded shadow-md">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4">Enter Your Name</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 md:p-3 rounded mb-4 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputName;
