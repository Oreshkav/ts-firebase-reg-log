/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { User, onAuthStateChanged } from 'firebase/auth';
import Profile from '../components/Profile/Profile';
import Register from '../components/Register/Register';
import AuthContext from '../contexts/AuthContext';
import { auth } from '../api/firebase';
import UserPage from '../components/UserPage/UserPage';
import UsersPage from '../components/UsersPage/UsersPage';
import UserContext from '../contexts/UserContext';
import Login from '../components/Login/Login';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

function App(): JSX.Element {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
  }, []);
  return (
    <AuthContext.Provider value={currentUser}>
      <UserContext.Provider value="48123456789">
      <Routes>
      <Route path="/" element={<ProtectedRoute outlet={<Profile />} />} />
              <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="users" element={<UsersPage />}>
          <Route path=":userId" element={<UserPage />} />
        </Route>
      </Routes>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

// function App(): JSX.Element {
//   return (
//     <Routes>
//       <Route path="/" element={<Profile />} />
//       <Route path="register" element={<Register />} />
//       <Route path="users" element={<UsersPage />}>
//       <Route path=":userId" element={<UserPage />} />
//       </Route>
//     </Routes>
//   );
// }
