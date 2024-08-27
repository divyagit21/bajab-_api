import React, { useState, useMemo } from 'react';

const Dropdown = ({ responseData }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    setSelectedOptions([...event.target.selectedOptions].map(o => o.value));
  };

  const renderFilteredData = useMemo(() => {
    if (!responseData) return '{}';

    const { alphabets, numbers, highest_alphabet } = responseData;
    const result = {};

    if (selectedOptions.includes('Alphabets')) {
      result.alphabets = alphabets;
    }
    if (selectedOptions.includes('Numbers')) {
      result.numbers = numbers;
    }
    if (selectedOptions.includes('Highest lowercase alphabet')) {
      result.highestLowercase = highest_alphabet;
    }

    return JSON.stringify(result, null, 2);
  }, [responseData, selectedOptions]);

  return (
    <div>
      <select multiple onChange={handleChange}>
        <option value="Alphabets">Alphabets</option>
        <option value="Numbers">Numbers</option>
        <option value="Highest lowercase alphabet">Highest lowercase alphabet</option>
      </select>
      <div>
        <h2>Filtered Data:</h2>
        <pre>{renderFilteredData}</pre>
      </div>
    </div>
  );
};

export default Dropdown;
