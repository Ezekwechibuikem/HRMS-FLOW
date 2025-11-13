import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScreenLoader from './components/common/screenloader';
// import MainLayout from './components/layout/MainLayout';
// import Dashboard from './pages/Dashboard';
// import GenericPage from './pages/GenericPage';
// import {
//   Users,
//   Clock,
//   FileText,
//   Wallet,
//   Calendar,
//   DollarSign,
//   PiggyBank,
//   BarChart3,
//   Settings,
//   Loader,
// } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);

  // This will be called after 5 seconds
  const handleLoadingComplete = () => {
    setLoading(false);
  };

  // Show loading screen for 5 seconds
  if (loading) {
    return <ScreenLoader onLoadingComplete={handleLoadingComplete} />;
  }

  // After 5 seconds, show the actual app
  return (
    <Router>
      <AnimatePresence mode="wait">
      <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/employees"
              element={
                <GenericPage
                  title="Employees"
                  description="Manage your workforce and employee information"
                  icon={Users}
                  color="#667eea"
                />
              }
            />
            <Route
              path="/attendance"
              element={
                <GenericPage
                  title="Attendance"
                  description="Track employee attendance and working hours"
                  icon={Clock}
                  color="#10b981"
                />
              }
            />
            <Route
              path="/timesheet"
              element={
                <GenericPage
                  title="Timesheet"
                  description="Manage employee timesheets and work logs"
                  icon={FileText}
                  color="#3b82f6"
                />
              }
            />
            <Route
              path="/payroll"
              element={
                <GenericPage
                  title="Payroll"
                  description="Process salaries and manage compensation"
                  icon={Wallet}
                  color="#8b5cf6"
                />
              }
            />
            <Route
              path="/leave"
              element={
                <GenericPage
                  title="Leave Management"
                  description="Handle leave requests and time-off tracking"
                  icon={Calendar}
                  color="#f59e0b"
                />
              }
            />
            <Route
              path="/cash-advance"
              element={
                <GenericPage
                  title="Cash Advance"
                  description="Manage employee cash advance requests"
                  icon={DollarSign}
                  color="#10b981"
                />
              }
            />
            <Route
              path="/retirement"
              element={
                <GenericPage
                  title="Retirement"
                  description="Handle retirement plans and benefits"
                  icon={PiggyBank}
                  color="#ec4899"
                />
              }
            />
            <Route
              path="/reports"
              element={
                <GenericPage
                  title="Reports"
                  description="Generate and view HR analytics reports"
                  icon={BarChart3}
                  color="#ef4444"
                />
              }
            />
            <Route
              path="/settings"
              element={
                <GenericPage
                  title="Settings"
                  description="Configure system settings and preferences"
                  icon={Settings}
                  color="#6b7280"
                />
              }
            />
          </Routes>
        </MainLayout> */}
      </AnimatePresence>
    </Router>
  );
}

export default App;