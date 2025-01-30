import { useState } from 'react';

import './App.css';

import PrimaryView from './pages/PrimaryView';
import SecondaryView from './pages/SecondaryView';

function App() {
  const [data, setData] = useState(null)
  return (
    <div className='container'>
    {data ?  <SecondaryView data={data} /> 
    : <PrimaryView setData={setData} />}
    </div>
  );
}

export default App;
