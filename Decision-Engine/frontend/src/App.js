import { Routes, Route } from 'react-router-dom';
import Analysis from './Analysis';
import Dashboard from './Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analysis" element={<Analysis />} />

    </Routes>
  );
}

export default App;
