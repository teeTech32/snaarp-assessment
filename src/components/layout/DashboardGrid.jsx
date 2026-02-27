import {DndContext,closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import {SortableContext, rectSortingStrategy,arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import SortableItem from "../dnd/SortableItem";
import { kpiData } from "../../data/mockData";
import KpiCard from "../widgets/KpiCard";
import StorageWidget from "../widgets/StorageWidget";
import FileSharingWidget from "../widgets/FileSharingWidget";
import { useContext } from "react";
import { DashboardContext } from "../../context/dashboard-context";

function DashboardGrid() {

  const{sections, setSections} = useContext(DashboardContext)

  const sensors = useSensors(
    useSensor(PointerSensor), 
    useSensor(KeyboardSensor, {coordinateGetter: sortableKeyboardCoordinates}))
  
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setSections((items) => {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
  <SortableContext items={sections} strategy={rectSortingStrategy}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">

      {sections.map((section) => (
        <SortableItem key={section} id={section}>
          <div className="w-full">
            {section === "kpi" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {kpiData.map((item) => (
                  <KpiCard key={item.id} {...item} />
                ))}
              </div>
            )}
            {section === "storage" && (
              <StorageWidget />
            )}
            {section === "filesharing" && (
              <FileSharingWidget/>
            )}
          </div>
        </SortableItem>
      ))}

    </div>
  </SortableContext>
</DndContext>
  );
}

export default DashboardGrid;