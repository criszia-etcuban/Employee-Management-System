import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import EmployeeList from './components/employee/EmployeeList';
import AddEmployee from './components/employee/AddEmployee';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// function App() {
//   return (
//     <EmployeeList />
//   );
// }

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">Employee Management System</h1>
          <p className="app-subtitle">Manage your team efficiently and beautifully</p>
        </header>

        <nav className="nav-buttons">
          <Link to="/list" className="nav-btn nav-btn-primary">
            👥 Employee List
          </Link>
          <Link to="/add" className="nav-btn nav-btn-success">
            ➕ Add Employee
          </Link>
        </nav>

        <Routes>
          <Route path="/list" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="*" element={<EmployeeList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
