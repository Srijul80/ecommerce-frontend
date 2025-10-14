import SidebarCategories from "./SidebarCategories";
import SideBarBrand from "./SideBarBrand";
import SidebarPriceRange from "./SidebarPriceRange";
import SideBarSearch from "./SideBarSearch";
import SideBarFooter from "./SideBarFooter";

const SideBar = () => {
  return (
    <aside className="top-15 left-0 flex w-full flex-col gap-6 bg-gray-900 text-white shadow-xl md:sticky md:h-screen md:w-64 md:flex-col">
      <SideBarSearch />
      <SidebarCategories />
      <SideBarBrand />
      <SidebarPriceRange />
      <SideBarFooter />
    </aside>
  );
};

export default SideBar;
