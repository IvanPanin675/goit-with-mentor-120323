import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { AddUserPage } from './pages/AddUserPage';
import { HomePage } from './pages/HomePage';
import { UserDetailsPage } from './pages/UsersDetailsPage';
import { UsersPage } from './pages/UsersPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='users' element={<UsersPage />} />
        <Route path='users/:id' element={<UserDetailsPage />} />
        <Route path='users/add' element={<AddUserPage/>}/>
      </Route>
    </Routes>
  );
};
