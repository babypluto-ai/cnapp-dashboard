import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components-shadcn/ui/tabs";
import { Checkbox } from "@/components-shadcn/ui/checkbox";
import { Label } from "@/components-shadcn/ui/label";
import { useDashboard } from "@/contexts/DashboardContext";

function CategoryTabs() {
  const { categories, selectedWidgets, toggleWidgetSelection } = useDashboard();
  const getFirstWord = (str) => str.split(" ")[0];

  return (
    <Tabs defaultValue={categories[0].id} className="mt-2 w-full">
      <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
        {categories.map((category) => (
          <TabsTrigger
            key={category.id}
            value={category.id}
            className="px-4 py-2 text-sm"
          >
            {getFirstWord(category.name)}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id}>
          <h3 className="mb-2 text-lg font-semibold">{category.name}</h3>
          {category.widgets.map((widget) => (
            <div key={widget.id} className="mt-2 flex items-center space-x-2">
              <Checkbox
                id={widget.id}
                checked={selectedWidgets[widget.id]}
                onCheckedChange={() => toggleWidgetSelection(widget.id)}
              />
              <Label htmlFor={widget.id}>{widget.name}</Label>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default CategoryTabs;
