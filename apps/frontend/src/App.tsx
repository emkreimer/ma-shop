
import { BrowserRouter as Router } from 'react-router-dom';
import AuthRoutes from './routes/AuthRoutes';
import UserRoutes from './routes/UserRoutes';

function App() {
   return (
    <Router>
      <AuthRoutes />
      <UserRoutes/>
    </Router>
  )
}

export default App
