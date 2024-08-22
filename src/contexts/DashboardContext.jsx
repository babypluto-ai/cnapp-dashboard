import { createContext, useContext, useState, useMemo } from "react";
import dashboardData from "../../data/categories.json";

const DashboardContext = createContext();

function DashboardProvider({ children }) {
  const [categories, setCategories] = useState(dashboardData);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddWidgetModal, setShowAddWidgetModal] = useState(false);
  const [newWidgetName, setNewWidgetName] = useState("");
  const [newWidgetContent, setNewWidgetContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [selectedWidgets, setSelectedWidgets] = useState(() => {
    return categories.reduce((acc, category) => {
      category.widgets.forEach((widget) => {
        acc[widget.id] = true;
      });
      return acc;
    }, {});
  });

  const toggleWidgetSelection = (widgetId) => {
    setSelectedWidgets((prev) => ({
      ...prev,
      [widgetId]: !prev[widgetId],
    }));
  };

  const applyWidgetSelection = () => {
    const updatedCategories = categories.map((category) => ({
      ...category,
      widgets: category.widgets.filter((widget) => selectedWidgets[widget.id]),
    }));
    setCategories(updatedCategories);
  };

  const addWidget = (categoryId) => {
    const newWidget = {
      id: `widget ${Date.now()}`,
      name: newWidgetName,
      text: newWidgetContent,
    };

    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: [...category.widgets, newWidget],
        };
      }
      return category;
    });

    setCategories(updatedCategories);

    setSelectedWidgets((prev) => ({
      ...prev,
      [newWidget.id]: true,
    }));

    setNewWidgetName("");
    setNewWidgetContent("");
    setShowAddWidgetModal(false);
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter((widget) => widget.id !== widgetId),
        };
      }
      return category;
    });

    setCategories(updatedCategories);
  };

  const searchWidgets = useMemo(() => {
    if (!searchQuery.trim()) return [];

    return categories.flatMap((category) =>
      category.widgets.filter(
        (widget) =>
          widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          widget.text.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  }, [categories, searchQuery]);

  return (
    <DashboardContext.Provider
      value={{
        categories,
        searchQuery,
        setSearchQuery,
        searchWidgets,
        showAddWidgetModal,
        setShowAddWidgetModal,
        newWidgetName,
        setNewWidgetName,
        newWidgetContent,
        setNewWidgetContent,
        selectedCategory,
        setSelectedCategory,
        addWidget,
        removeWidget,
        selectedWidgets,
        toggleWidgetSelection,
        applyWidgetSelection,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context)
    throw new Error(
      "DashboardContext was used outside of the DashboardProvider",
    );
  return context;
}

export { DashboardProvider, useDashboard };
