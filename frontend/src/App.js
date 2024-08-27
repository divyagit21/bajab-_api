import React, { useState } from 'react';
import JsonInputForm from './components/JsonInputForm';
import Dropdown from './components/Drop';
const App = () => {
  const [responseData, setResponseData] = useState(null);

  return (
    <div>
      <h1>21BCE9199</h1>
      <JsonInputForm onDataReceived={setResponseData} />
      {responseData && <Dropdown responseData={responseData} />}
    </div>
  );
};

export default App;
