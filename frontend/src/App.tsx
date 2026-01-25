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
    <div className="container mt-3">
      <nav className="mb-3">
        <Link to="/list" className="btn btn-primary me-2">
          Employee List
        </Link>
        <Link to="/add" className="btn btn-success">
          Add Employee
        </Link>
      </nav>

      <Routes>
        <Route path="/list" element={<EmployeeList />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="*" element={<EmployeeList />} />
      </Routes>
    </div>
  );
}

export default App;
