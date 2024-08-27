
import React, { useState } from 'react';
import axios from 'axios';

const JsonInputForm = ({ onDataReceived }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = JSON.parse(jsonInput);
      console.log('Parsed JSON Data:', data); 
      const response = await axios.post('https://bajab-api.vercel.app/bfhl', data);
      onDataReceived(response.data);
      setError('');
    } catch (err) {
      console.error('Error:', err); 
      setError('Invalid JSON or Server Error');
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="4"
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder="Enter JSON here..."
      />
      <button type="submit">Submit</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default JsonInputForm;
