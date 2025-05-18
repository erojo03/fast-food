import { Routes, Route } from 'react-router-dom';
import Home from './features/user/home/Home.tsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/app" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
