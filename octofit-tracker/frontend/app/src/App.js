

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';


function App() {
  return (
    <Router>
      <div className="App bg-light min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <div className="container-fluid">
            <div className="logo-left">
              <img src={logo} alt="Octofit Tracker Logo" />
              <Link className="navbar-brand" to="/">Octofit Tracker</Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
                <h1 className="display-4 text-primary mb-3">Welcome to Octofit Tracker</h1>
                <p className="lead text-secondary">Track your fitness, join teams, compete, and get personalized workouts!</p>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
