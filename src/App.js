import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import Sharedlayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';
import { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/Protectedroute';
import SharedProductlayout from './pages/sharedProductlayout';

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sharedlayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<SharedProductlayout />}>
            <Route index element={<Products />} />
            <Route path='products/:id' element={<SingleProduct />} />
          </Route>
          <Route path='login' element={<Login setUser={setUser} />} />

          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      <footer>
        <h1>FOOTER</h1>
      </footer>
    </BrowserRouter>
  );
}

export default App;
