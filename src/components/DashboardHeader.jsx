import { Button } from "@/components-shadcn/ui/button";
import { Plus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components-shadcn/ui/sheet";
import CategoryTabs from "./CategoryTabs";
import { useDashboard } from "@/contexts/DashboardContext";

function DashboardHeader() {
  const { applyWidgetSelection } = useDashboard();

  const handleConfirm = () => {
    applyWidgetSelection();
  };

  return (
    <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
      <h2 className="text-2xl font-semibold tracking-tight">CNAPP Dashboard</h2>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="flex items-center gap-2">
            Add Widget
            <Plus size={16} />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col sm:max-w-[540px]">
          <SheetHeader>
            <SheetTitle>Add Widgets</SheetTitle>
            <SheetDescription>
              Select widgets to add to your dashboard.
            </SheetDescription>
          </SheetHeader>
          <CategoryTabs />
          <Button className="mt-auto self-end" onClick={handleConfirm}>
            Confirm
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default DashboardHeader;
