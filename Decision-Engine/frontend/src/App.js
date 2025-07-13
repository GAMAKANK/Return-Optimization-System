import { Routes, Route } from 'react-router-dom';
import Analysis from './Analysis';
import Dashboard from './Dashboard';
import SearchPage from './SearchPage ';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/dashboard/:productId" element={<Dashboard />} />
      <Route path="/analysis" element={<Analysis />} />

    </Routes>
  );
}

export default App;
