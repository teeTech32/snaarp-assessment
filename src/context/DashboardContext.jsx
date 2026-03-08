import {  useState } from "react";
import { initialWidgets } from "../data/mockData";
import { DashboardContext } from './dashboard-context'

function DashboardProvider({ children }) {
  const [widgets, setWidgets] = useState(initialWidgets);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isClicked, setIsClicked] = useState(null);
  const [sections, setSections] = useState(["kpi","storage","filesharing"]);

  return (
    <DashboardContext.Provider value={{ widgets, setWidgets, isCollapsed, setIsCollapsed, isClicked, setIsClicked, sections, setSections }}>
      {children}
    </DashboardContext.Provider>
  );
}
export default DashboardProvider



