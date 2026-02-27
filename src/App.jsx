import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import DashboardGrid from "./components/layout/DashboardGrid";
import   DashboardProvider   from "./context/DashboardContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <DashboardProvider>
      <Router>
        <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="pr-4 md:pr-2 py-2 overflow-y-auto">
            <DashboardGrid />
          </main>
        </div>
      </div>
      </Router>
    </DashboardProvider>
  );
}

export default App;