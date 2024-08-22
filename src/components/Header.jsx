import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components-shadcn/ui/breadcrumb";
import { Search } from "lucide-react";
import { Input } from "@/components-shadcn/ui/input";
import { useDashboard } from "@/contexts/DashboardContext";

function Header() {
  const { searchQuery, setSearchQuery } = useDashboard();

  return (
    <header className="bg-background shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <nav className="hidden md:block">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold">
                  Dashboard V2
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
        <div className="relative w-full max-w-sm md:w-auto">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10 pr-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
