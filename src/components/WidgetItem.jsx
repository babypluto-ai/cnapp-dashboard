import { useDashboard } from "@/contexts/DashboardContext";
import { X } from "lucide-react";

function WidgetItem({ categoryId, widget }) {
  const { removeWidget } = useDashboard();
  return (
    <div className="group relative h-[200px] rounded-lg border bg-card p-4 shadow-sm">
      <h4 className="mb-2 font-semibold">{widget.name}</h4>
      <p className="h-[140px] overflow-auto text-sm">{widget.text}</p>
      <button
        onClick={() => removeWidget(categoryId, widget.id)}
        className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100"
      >
        <X size={16} className="text-red-600" />
      </button>
    </div>
  );
}

export default WidgetItem;
