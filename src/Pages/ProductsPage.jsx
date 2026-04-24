import React, { useEffect, useRef, useState } from "react";
import PageHeader from "../Components/ProductsPage/PageHeader";
import ProductCard from "../Components/ProductsPage/ProductCard";
import {
  CheckMarkSVG,
  DownArrowSVG,
  FilterSVG,
  SearchSVG,
} from "../Components/Svg/SvgContainer";
import {
  useAllProducts,
  useGetAllCategories,
} from "../Hooks/api/dashboard_api";
import { useSearchParams } from "react-router-dom";

const PRICE_RANGES = [
  { label: "All Price", min: null, max: null },
  { label: "$1 - $20", min: 1, max: 20 },
  { label: "$21 - $50", min: 21, max: 50 },
  { label: "$51 - $99", min: 51, max: 99 },
  { label: "$100 - $150", min: 100, max: 150 },
  { label: "$151 - $250", min: 151, max: 250 },
  { label: "$250 +", min: 250, max: null },
];

const SORT_OPTIONS = [
  // { label: "Featured", value: "featured" },
  { label: "Latest", value: null },
  { label: "Price: Low to High", value: "price_low" },
  { label: "Price: High to Low", value: "price_high" },
  // { label: "Top Rated", value: "rating" },
];

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const didInit = useRef(false);

  const { data: CATEGORIES, isLoading: categoriesLoading } =
    useGetAllCategories();

  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState(() => {
    const param = searchParams.get("category");
    return param ? Number(param) : null;
  });
  const [priceRange, setPriceRange] = useState({ min: null, max: null });
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  useEffect(() => {
    if (didInit.current) return;
    const param = searchParams.get("category");
    if (param) setCategoryId(Number(param));
    didInit.current = true;
  }, [searchParams]);

  const { data: productsData, isLoading: productsDataLoading } = useAllProducts(
    page,
    categoryId,
    priceRange.min,
    priceRange.max,
    search,
    sortBy,
  );

  const handleCategoryChange = (id) => {
    setCategoryId(id);
    setPage(1);
  };

  const handlePriceChange = (min, max) => {
    setPriceRange({ min, max });
    setPage(1);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearch(searchInput);
      setPage(1);
    }
  };

  const FilterPanel = () => (
    <>
      <div className="flex p-4 flex-col items-start gap-4 self-stretch border-b-[0.4px] border-secondary-100">
        <div className="flex items-center gap-2">
          <FilterSVG />
          <p className="text-white text-[18px] font-medium leading-[150%]">
            Filters
          </p>
        </div>
        {/* Category */}
        <div className="flex flex-col gap-4">
          <p className="text-white text-base font-medium leading-6">Category</p>
          <div className="flex pl-6 flex-col items-start gap-2">
            <button
              onClick={() => handleCategoryChange(null)}
              className="flex items-center gap-2 cursor-pointer"
            >
              {categoryId === null ? (
                <CheckMarkSVG />
              ) : (
                <div className="w-[15px] h-[15px] aspect-square rounded-[4px] border-[1.5px] border-[#B4C0C3]" />
              )}
              <span
                className={`text-base font-normal leading-6 ${categoryId === null ? "text-white" : "text-[#B4C0C3]"}`}
              >
                All
              </span>
            </button>

            {/* Skeleton while categories load */}
            {categoriesLoading
              ? [...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-[15px] h-[15px] rounded-[4px] bg-[#B4C0C3]/20 animate-pulse" />
                    <div className="h-4 w-20 rounded bg-[#B4C0C3]/20 animate-pulse" />
                  </div>
                ))
              : CATEGORIES?.data?.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => handleCategoryChange(cat.id)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {categoryId === cat.id ? (
                      <CheckMarkSVG />
                    ) : (
                      <div className="w-[15px] h-[15px] aspect-square rounded-[4px] border-[1.5px] border-[#B4C0C3]" />
                    )}
                    <span
                      className={`text-base font-normal leading-6 ${categoryId === cat.id ? "text-white" : "text-[#B4C0C3]"}`}
                    >
                      {cat.name}
                    </span>
                  </button>
                ))}
          </div>
        </div>
      </div>

      {/* Price Range section — unchanged */}
      <div className="flex p-4 flex-col items-start gap-4 self-stretch">
        <div className="flex flex-col gap-4">
          <p className="text-white text-base font-medium leading-6">
            Price Range
          </p>
          <div className="flex pl-6 flex-col items-start gap-2">
            {PRICE_RANGES.map((range) => {
              const isActive =
                priceRange.min === range.min && priceRange.max === range.max;
              return (
                <button
                  key={range.label}
                  onClick={() => handlePriceChange(range.min, range.max)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  {isActive ? (
                    <CheckMarkSVG />
                  ) : (
                    <div className="w-[15px] h-[15px] aspect-square rounded-[4px] border-[1.5px] border-[#B4C0C3]" />
                  )}
                  <span
                    className={`text-base font-normal leading-6 ${isActive ? "text-white" : "text-[#B4C0C3]"}`}
                  >
                    {range.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <PageHeader />
      <div className="container py-20 flex gap-4 xl:gap-8 justify-between">
        {/* Desktop Filters */}
        <div className="flex max-md:hidden p-2 xl:p-4 flex-col items-start rounded-lg border-[0.4px] border-secondary-100 h-fit">
          <FilterPanel />
        </div>

        <div className="flex-1 space-y-12">
          <div className="space-y-2">
            <div className="flex items-center gap-1 lg:gap-4 2xl:gap-8">
              {/* Search */}
              <div className="relative w-full flex items-center justify-end">
                <input
                  type="search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  className="flex h-11 sm:h-12 pl-4 pr-8 md:pr-14 py-2 justify-center items-center flex-1 rounded-lg border-[0.4px] border-secondary-100 text-[#B4C0C3] text-sm sm:text-base font-normal leading-6 w-full"
                  placeholder="Search"
                />
                <button
                  className="absolute right-2 sm:right-4"
                  onClick={handleSearchSubmit}
                >
                  <SearchSVG className={"max-sm:size-5"} />
                </button>
              </div>

              {/* Sort By */}
              <div className="relative">
                <button
                  onClick={() => setShowSortDropdown((prev) => !prev)}
                  className="flex h-11 sm:h-12 text-nowrap px-4 py-2 max-sm:text-sm justify-center items-center gap-2.5 rounded-lg border-[0.4px] border-secondary-100 cursor-pointer"
                >
                  <p>
                    Sort by:{" "}
                    {SORT_OPTIONS.find((s) => s.value === sortBy)?.label}
                  </p>
                  <span
                    className={`${showSortDropdown && "rotate-180"} transition duration-300`}
                  >
                    <DownArrowSVG />
                  </span>
                </button>
                {showSortDropdown && (
                  <div className="absolute right-0 mt-1 z-10 bg-secondary-500 border border-secondary-100 rounded-lg overflow-hidden min-w-full">
                    {SORT_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setPage(1);
                          setShowSortDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm whitespace-nowrap hover:bg-[#C1C79E22] cursor-pointer ${
                          sortBy === option.value
                            ? "text-white"
                            : "text-[#B4C0C3]"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilter((prev) => !prev)}
              className="flex justify-between h-11 md:hidden px-4 py-2 max-sm:text-sm items-center gap-2.5 rounded-lg border-[0.4px] border-secondary-100 w-full"
            >
              <div className="flex items-center gap-1.5">
                <FilterSVG className={"size-4.5"} />
                <p>Filter</p>
              </div>
              <DownArrowSVG className={"size-5"} />
            </button>

            {/* Mobile Filter Panel */}
            {showMobileFilter && (
              <div className="md:hidden flex flex-col items-start rounded-lg border-[0.4px] border-[#C1C79E]">
                <FilterPanel />
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-3 md:gap-3 xl:gap-6">
              {productsDataLoading ? (
                <p className="text-[#B4C0C3] col-span-full text-center">
                  Loading...
                </p>
              ) : productsData?.data?.data?.length === 0 ? (
                <p className="text-[#B4C0C3] col-span-full text-center">
                  No products found.
                </p>
              ) : (
                productsData?.data?.data?.map((item, index) => (
                  <div key={index}>
                    <ProductCard item={item} />
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Pagination */}
          {!productsDataLoading && productsData?.data?.links && (
            <div className="flex container flex-col md:flex-row items-center justify-center mt-3 lg:mt-6 pb-8 gap-3">
              <div className="flex items-center gap-2">
                {productsData?.data?.links?.map((link, index) => (
                  <button
                    key={index}
                    disabled={link.url === null || link.page === null}
                    onClick={() => link.page && setPage(link.page)}
                    className={`px-3 sm:px-4 sm:py-2 py-1 text-sm border rounded-md ${
                      link.active
                        ? "border-secondary-100 text-white bg-[#C1C79E99]"
                        : "hover:bg-[#d3d8b999] border-secondary-100"
                    } ${
                      link.url === null || link.page === null
                        ? "text-gray-400 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
