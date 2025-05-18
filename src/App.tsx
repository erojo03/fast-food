import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router';
import Navbar from './shared/components/navbar/Navbar';

function App() {
  return (
    <>
      <div className="flex h-dvh w-full flex-col bg-amber-50 md:flex-row-reverse">
        <BrowserRouter>
          <AppRouter />
          <Navbar />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
