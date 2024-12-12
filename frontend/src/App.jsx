import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Index from './pages/Index'
import Expense from './pages/Expense/Expense';
import AddExpense from './pages/Expense/AddExpense';
import EditExpense from './pages/Expense/EditExpense';
import ManageCategories from './pages/Category/ManageCategories';
import Reports from './pages/Reports';
import Insights from './pages/Insights';
import Settings from './pages/Settings';
import Help from './pages/Help';

function Logout() {
  localStorage.clear()
  return <Navigate to="/" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          />
          <Route path="/expense" element={
            <ProtectedRoute>
              <Expense />
            </ProtectedRoute>
          }
          />
          <Route path="/expense/add" element={
            <ProtectedRoute>
              <AddExpense />
            </ProtectedRoute>
          }
          />
          <Route path="/expense/edit/:id" element={
            <ProtectedRoute>
              <EditExpense />
            </ProtectedRoute>
          }
          />
          <Route path="/manage-categories" element={
            <ProtectedRoute>
              <ManageCategories />
            </ProtectedRoute>
          }
          />
          <Route path="/reports" element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
          />
          <Route path="/insights" element={
            <ProtectedRoute>
              <Insights />
            </ProtectedRoute>
          }
          />
          <Route path="/settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
          />
          <Route path="/help" element={
            <ProtectedRoute>
              <Help />
            </ProtectedRoute>
          }
          />
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
