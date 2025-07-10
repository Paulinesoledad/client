
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import CreatePost from './pages/CreatePost';
import ViewPost from './pages/ViewPost';
import EditPost from './pages/EditPost';
import Navbar from './components/Navbar';
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/view/:id" element={<ViewPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<ProtectedRoute><CreatePost /></ProtectedRoute>}/>
          <Route path="/edit/:id" element={<ProtectedRoute><EditPost /></ProtectedRoute>}/>


        </Routes>
      </div>
    </Router>
  );
}

export default App;

