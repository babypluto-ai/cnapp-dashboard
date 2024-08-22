import { Button } from "@/components-shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components-shadcn/ui/dialog";
import { Input } from "@/components-shadcn/ui/input";
import { Label } from "@/components-shadcn/ui/label";
import { Textarea } from "@/components-shadcn/ui/textarea";
import { useDashboard } from "@/contexts/DashboardContext";

function AddWidgetModal({ open, onOpenChange, categoryId }) {
  const {
    newWidgetName: widgetName,
    setNewWidgetName: setWidgetName,
    newWidgetContent: widgetText,
    setNewWidgetContent: setWidgetText,
    addWidget,
  } = useDashboard();

  const handleSubmit = (e) => {
    e.preventDefault();
    addWidget(categoryId);
    setWidgetName("");
    setWidgetText("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Widget</DialogTitle>
          <DialogDescription>
            Create a new widget for this category. Fill in the details below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="widgetName" className="text-right">
                Name
              </Label>
              <Input
                id="widgetName"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="widgetText" className="text-right">
                Content
              </Label>
              <Textarea
                id="widgetText"
                value={widgetText}
                onChange={(e) => setWidgetText(e.target.value)}
                className="col-span-3"
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Widget</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddWidgetModal;
