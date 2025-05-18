import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './features/user/home/Home.tsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/app" element={<Home />} />

      <Route path="/" element={<Navigate to="/app" />} />
    </Routes>
  );
};

export default AppRouter;
