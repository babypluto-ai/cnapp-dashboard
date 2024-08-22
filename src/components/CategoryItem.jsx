import { Button } from "@/components-shadcn/ui/button";
import { Plus } from "lucide-react";

import WidgetItem from "./WidgetItem";

function CategoryItem({ category, handleAddWidgetClick }) {
  return (
    <div key={category.id}>
      <h3 className="mb-4 text-xl font-semibold">{category.name}</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.widgets.map((widget) => (
          <WidgetItem
            key={widget.id}
            widget={widget}
            categoryId={category.id}
          />
        ))}
        <Button
          onClick={() => handleAddWidgetClick(category.id)}
          variant="outline"
          className="flex h-[200px] flex-col items-center justify-center"
        >
          <Plus className="mb-2 h-6 w-6" />
          Add Widget
        </Button>
      </div>
    </div>
  );
}

export default CategoryItem;
