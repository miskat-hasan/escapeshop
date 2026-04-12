import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { CartContext } from "../../Provider/CartContext";
import { IoChevronBack } from "react-icons/io5";
import { useShippingPrice } from "../../Hooks/api/dashboard_api";
import { FaAngleDown } from "react-icons/fa";

const CheckoutFormModal = ({
  onClose,
  onProceed,
  setShippingData,
  initialData,
}) => {
  const { user } = useAuth();
  const { data: shippingPrice, isLoading } = useShippingPrice();
  const {
    setProductionType,
    shippingType,
    productionType,
    setShippingType,
    setShippingPriceDynamic,
    shippingPriceDynamic,
  } = useContext(CartContext);

  const [open, setOpen] = useState(false);
  const [priceValue, setPriceValue] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      shipping_first_name:
        initialData.shipping_first_name || user?.first_name || "",
      shipping_last_name:
        initialData.shipping_last_name || user?.last_name || "",
      shipping_email: initialData.shipping_email || user?.email || "",
      shipping_phone: initialData.shipping_phone || "",
      shipping_address: initialData.shipping_address || "",
      shipping_city: initialData.shipping_city || "",
      shipping_state: initialData.shipping_state || "",
      shipping_zip: initialData.shipping_zip || "",
      shipping_country: initialData.shipping_country || "",
    },
  });

  useEffect(() => {
    const handleWindowClick = () => {
      setOpen(false);
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  useEffect(() => {
    register("shipping_state", {
      required: "State is required",
    });
    setSelectedState(initialData.shipping_state);
  }, [register, initialData]);

  const onSubmit = async data => {
    setShippingData(data);
    onProceed();
  };

  return (
    <div>
      <button
        onClick={() => onClose()}
        className="flex gap-1 items-center cursor-pointer group mb-3"
      >
        <IoChevronBack className="group-hover:-translate-x-1 text-lg duration-300 transition" />
        <span>Back</span>
      </button>

      <h2 className="text-lg font-semibold mb-3">Shipping Address</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          {/* First name */}
          <div>
            <input
              placeholder="First Name"
              defaultValue={user?.first_name}
              className="w-full border border-gray-500 px-3 py-1.5 rounded-lg outline-none"
              {...register("shipping_first_name", {
                required: "First name is required",
              })}
            />
            {errors.shipping_first_name && (
              <p className="text-red-500 text-sm mt-1.5">
                {errors.shipping_first_name.message}
              </p>
            )}
          </div>

          {/* Last name */}
          <div>
            <input
              placeholder="Last Name"
              defaultValue={user?.last_name}
              className="w-full border border-gray-500 px-3 py-1.5 rounded-lg outline-none"
              {...register("shipping_last_name", {
                required: "Last name is required",
              })}
            />
            {errors.shipping_last_name && (
              <p className="text-red-500 text-sm mt-1.5">
                {errors.shipping_last_name.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              defaultValue={user?.email}
              className="w-full border border-gray-500 px-3 py-1.5 rounded-lg outline-none"
              {...register("shipping_email", { required: "Email is required" })}
            />
            {errors.shipping_email && (
              <p className="text-red-500 text-sm mt-1.5">
                {errors.shipping_email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="text"
              placeholder="Phone number"
              className="w-full border border-gray-500 px-3 py-1.5 rounded-lg outline-none"
              {...register("shipping_phone", {
                required: "Phone number is required",
              })}
            />
            {errors.shipping_phone && (
              <p className="text-red-500 text-sm mt-1.5">
                {errors.shipping_phone.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* City */}
          <div>
            <input
              placeholder="City"
              className="w-full border border-gray-500 px-3 py-1.5 rounded-lg outline-none"
              {...register("shipping_city", { required: "City is required" })}
            />
            {errors.shipping_city && (
              <p className="text-red-500 text-sm mt-1.5">
                {errors.shipping_city.message}
              </p>
            )}
          </div>

          {/* State */}
          <div>
            <button
              type="button"
              onClick={e => {
                e.stopPropagation();
                setOpen(prev => !prev);
              }}
              className="flex items-center justify-between cursor-pointer w-full border border-gray-500 px-3 py-1.5 rounded-lg outline-none"
            >
              {selectedState || "Select state"}
              <FaAngleDown className="text-gray-500" />
            </button>
            {errors.shipping_state && (
              <p className="text-red-500 text-sm mt-1.5">
                {errors.shipping_state.message}
              </p>
            )}

            {open && !isLoading && (
              <div className="absolute z-50 mt-1 w-[310px] max-h-[450px] overflow-y-auto overflow-hidden rounded-lg border border-white/10 bg-[#0b0a2a6b] backdrop-blur-2xl">
                {shippingPrice?.data?.length > 0 ? (
                  shippingPrice?.data?.map(item => (
                    <button
                      type="button"
                      key={item?.price}
                      onClick={() => {
                        setPriceValue(item?.price);
                        setSelectedState(item?.state);
                        setShippingPriceDynamic(Number(item?.price));
                        setValue("shipping_state", item?.state, {
                          shouldValidate: true,
                          shouldDirty: true,
                        });
                        setOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-primary-pink cursor-pointer ${priceValue === item?.price ? "bg-primary-pink" : ""}`}
                    >
                      <span>{item?.state}</span>
                      {priceValue === item?.price && (
                        <span className="text-white font-semibold">✓</span>
                      )}
                    </button>
                  ))
                ) : (
                  <p className="text-red-500 opacity-60">"No order found"</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Zip */}
          <div>
            <input
              placeholder="Zip code"
              className="w-full border border-gray-500 px-3 py-1.5 rounded-lg outline-none"
              {...register("shipping_zip", {
                required: "Zip code is required",
              })}
            />
            {errors.shipping_zip && (
              <p className="text-red-500 text-sm mt-1.5">
                {errors.shipping_zip.message}
              </p>
            )}
          </div>

          {/* Country */}
          <div>
            <input
              placeholder="Country"
              className="w-full border border-gray-500 px-3 py-1.5 rounded-lg outline-none"
              {...register("shipping_country", {
                required: "Country is required",
              })}
            />
            {errors.shipping_country && (
              <p className="text-red-500 text-sm mt-1.5">
                {errors.shipping_country.message}
              </p>
            )}
          </div>
        </div>

        {/* Address */}
        <div>
          <textarea
            placeholder="Enter full address"
            className="w-full border border-gray-500 px-3 py-1.5 rounded-lg outline-none h-22"
            {...register("shipping_address", {
              required: "Address is required",
            })}
          ></textarea>
          {errors.shipping_address && (
            <p className="text-red-500 text-sm">
              {errors.shipping_address.message}
            </p>
          )}
        </div>

        {/* Production speed */}
        <div className="space-y-2 mt-3">
          <p className="font-medium">Production Speed</p>

          {[
            {
              key: "economy",
              label: "Economy (5-7 days)",
              extra: "-15%",
            },
            { key: "standard", label: "Standard (3-4 days)" },
            { key: "rush", label: "Rush (1-2 days)", extra: "+30%" },
          ].map(opt => (
            <button
              type="button"
              key={opt.key}
              onClick={() => setProductionType(opt.key)}
              className={`w-full text-sm text-left px-3 py-2.5 cursor-pointer rounded-lg border transition ${productionType === opt.key ? "border-primary-pink bg-primary-pink/20" : "border-white/20"}`}
            >
              <div className="flex justify-between">
                <span>{opt.label}</span>
                {opt.extra && <span>{opt.extra}</span>}
              </div>
            </button>
          ))}
        </div>

        {/* Shipping Method */}
        <div className="space-y-2 mt-5">
          <p className="font-medium">Shipping Method</p>

          {[
            {
              key: "standard",
              label: "Standard (3-5 days)",
              price: "FREE",
            },
            {
              key: "expedited",
              label: "Expedited (2-3 days)",
              price: "FREE",
            },
            {
              key: "rush",
              label: "Rush Overnight (1 day)",
              price: shippingPriceDynamic,
            },
          ].map(opt => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setShippingType(opt.key)}
              className={`w-full text-sm text-left px-3 py-2.5 cursor-pointer rounded-lg border transition ${shippingType === opt.key ? "border-primary-pink bg-primary-pink/20" : "border-white/20"}`}
            >
              <div className="flex justify-between">
                <span>{opt.label}</span>
                <span>{opt.price}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-primary-pink cursor-pointer py-2.5 rounded-lg"
        >
          Preview Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutFormModal;
