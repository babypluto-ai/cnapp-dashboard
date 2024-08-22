import Header from "./components/Header";
import DashboardHeader from "./components/DashboardHeader";
import Categories from "./components/Categories";
import { DashboardProvider } from "./contexts/DashboardContext";

function App() {
  return (
    <DashboardProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <DashboardHeader />
          <Categories />
        </main>
      </div>
    </DashboardProvider>
  );
}

export default App;
