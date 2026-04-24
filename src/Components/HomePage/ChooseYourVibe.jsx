import React from "react";
import { useGetAllCategories } from "../../Hooks/api/dashboard_api";
import { useNavigate } from "react-router-dom";

const ChooseYourVibe = () => {
  const { data, isLoading } = useGetAllCategories();
  const navigate = useNavigate();

  const handleClick = (categoryId) => {
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <div className="container py-14">
      <h2 className="section_title sm:mb-4">Choose Your Vibe</h2>
      <p className="section_sub_title">Find the perfect strain for your mood</p>

      <div className="mt-12 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-6">
        {isLoading
          ? [...Array(5)].map((_, index) => <CategorySkeleton key={index} />)
          : data?.data?.map((item) => (
              <div
                key={item?.id}
                onClick={() => handleClick(item?.id)}
                className="flex sm:min-w-[200px] cursor-pointer w-full p-3 sm:p-4 flex-col items-center gap-2 sm:gap-4 shrink-0 rounded-2xl border-[0.4px] border-solid border-[#4c751d] bg-[linear-gradient(112deg,#C1C79E_3.64%,rgba(91,102,27,0.80)_98.65%)] hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex w-12 h-12 p-2 items-start gap-2.5 rounded-full bg-[#0C353C]">
                  <img
                    src={import.meta.env.VITE_SITE_URL + "/" + item?.image}
                    alt={item?.name}
                    className="size-full object-cover"
                  />
                </div>
                <div className="sm:space-y-2">
                  <h4 className="text-[#051619] text-center text-lg font-semibold leading-[150%]">
                    {item.name}
                  </h4>
                  <p className="text-[#051619] text-center text-base font-normal leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ChooseYourVibe;

const CategorySkeleton = () => {
  return (
    <div className="flex sm:min-w-[200px] w-full p-3 sm:p-4 flex-col items-center gap-2 sm:gap-4 shrink-0 rounded-2xl border-[0.4px] border-solid border-[#4c751d] bg-secondary-100/20 animate-pulse">
      <div className="size-12 rounded-full bg-[#0C353C]/50" />
      <div className="w-full flex flex-col items-center gap-3">
        <div className="h-5 bg-white/10 rounded w-3/4" />
        <div className="h-4 bg-white/10 rounded w-full" />
        <div className="h-4 bg-white/10 rounded w-1/2" />
      </div>
    </div>
  );
};