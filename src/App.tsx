import { BrowserRouter as Router, Routes, Route } from "react-router";
import NotFound from "./pages/OtherPage/NotFound";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import ExpenseList from "./pages/ExpenseList";
import FormElements from "./pages/Forms/FormElements";
import SettingsPage from "./pages/SettingsPage";
import Category from "./pages/Category";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import AddExpense from "./pages/AddExpenses";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/Add Expense" element={<AddExpense />} />
            <Route path="/calendar" element={<Calendar />} />

            <Route path="/Categories" element={< Category />} />

            {/* Formelements */}
            <Route path="/form-elements" element={<FormElements />} />
            <Route path="/Settings" element={<SettingsPage />} />
            {/* Expenses */}
            <Route path="/ExpenseList" element={<ExpenseList />} />
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
