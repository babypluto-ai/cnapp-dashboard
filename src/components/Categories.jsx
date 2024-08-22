import AddWidgetModal from "./AddWidgetModal";
import CategoryItem from "./CategoryItem";
import { useDashboard } from "../contexts/DashboardContext";
import WidgetItem from "./WidgetItem";

function Categories() {
  const {
    categories,
    showAddWidgetModal,
    setShowAddWidgetModal,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    searchWidgets,
  } = useDashboard();

  function handleAddWidgetClick(categoryId) {
    setSelectedCategory(categoryId);
    setShowAddWidgetModal(true);
  }

  if (searchQuery) {
    return (
      <div className="space-y-8">
        <h2 className="mb-4 text-2xl font-bold">Search Results</h2>
        {searchWidgets.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {searchWidgets.map((widget) => (
              <WidgetItem
                key={widget.id}
                widget={widget}
                categoryId={
                  categories.find((c) => c.widgets.includes(widget)).id
                }
              />
            ))}
          </div>
        ) : (
          <p>No widgets found matching your search.</p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          handleAddWidgetClick={handleAddWidgetClick}
        />
      ))}
      <AddWidgetModal
        open={showAddWidgetModal}
        onOpenChange={setShowAddWidgetModal}
        categoryId={selectedCategory}
      />
    </div>
  );
}

export default Categories;
