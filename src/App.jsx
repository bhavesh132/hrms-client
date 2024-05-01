import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Payroll from './pages/Payroll'
import Dashboard from './pages/Dashboard'
import Signout from './pages/Signout'
import SignIn from './pages/SignIn'
import { useMemo } from 'react'
import { themeSettings } from './theme'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux'
import Layout from './pages/Layout'
import MyInfo from './pages/MyInfo'
import Analytics from './pages/Analytics'
import HrRequest from './pages/HrRequest'
import LeaveAndAttendance from './pages/LeaveAndAttendance'
import MyAssets from './pages/MyAssets'
import Performance from './pages/Performance'
import ReportViolation from './pages/ReportViolation'
import PolicyDocuments from './pages/PolicyDocuments'
import MyOrganization from './pages/MyOrganization'

function App() {
  const mode = useSelector((state) => state.theme.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path='/signout' element={<Signout />} />
            <Route path='/signin' element={<SignIn />} />
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to="/dashboard" replace />} />
              <Route path='/payroll' element={<Payroll />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/mydetails' element={<MyInfo />} />
              <Route path='/analytics' element={<Analytics />} />
              <Route path='/hrrequest' element={<HrRequest />} />
              <Route path='/leaveandattendance' element={<LeaveAndAttendance />} />
              <Route path='/myassets' element={<MyAssets />} />
              <Route path='/performance' element={<Performance />} />
              <Route path='/reportviolation' element={<ReportViolation />} />
              <Route path='/policydocuments' element={<PolicyDocuments />} />
              <Route path='/myorganization' element={<MyOrganization />} />
              <Route path='/mydetails' element={<MyInfo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
