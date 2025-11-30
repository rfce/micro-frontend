// Uncomment this line to use CSS modules
// import styles from './app.module.css';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        }
      />
      <Route
        path="/page-2"
        element={
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        }
      />
      <Route
        path="*"
        element={
          <div>
            <h2>404 - Page Not Found</h2>
            <Link to="/">Go Home</Link>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
