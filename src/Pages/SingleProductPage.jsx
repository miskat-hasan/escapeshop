import React from "react";
import ProductDetails from "../Components/ProductsPage/ProductDetails";
import RelatedProduct from "../Components/ProductsPage/RelatedProduct";
import { useProductDetails } from "../Hooks/api/dashboard_api";
import { useParams } from "react-router-dom";
import ProductDetailsSkeleton from "../Components/ProductsPage/ProductDetailsSkeleton";

const SingleProductPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useProductDetails(id);

  if (isLoading) {
    return (
      <>
        <ProductDetailsSkeleton />
        <div className="container pb-20 mt-5">
          <div className="h-8 bg-secondary-100/30 rounded w-48 mb-8 animate-pulse" />
          <div className="flex gap-1 sm:gap-5 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <RelatedCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <ProductDetails product={data?.data?.product} />
      <RelatedProduct data={data?.data?.related} />
    </div>
  );
};

export default SingleProductPage;

const RelatedCardSkeleton = () => (
  <div className="flex sm:p-2 xl:p-4 flex-col items-center gap-6 rounded-2xl border-[0.4px] border-secondary-100 w-[300px] animate-pulse">
    <div className="w-full h-[204px] rounded-t-2xl bg-secondary-100/30" />
    <div className="w-full space-y-3 px-2">
      <div className="h-5 bg-secondary-100/30 rounded w-3/4" />
      <div className="h-4 bg-secondary-100/30 rounded w-1/2" />
      <div className="h-10 bg-secondary-100/30 rounded w-full mt-4" />
    </div>
  </div>
);
