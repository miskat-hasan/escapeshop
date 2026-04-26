import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserSVG } from "../Svg/SvgContainer";
import { useCart } from "../../Context/CartContext";
import useAuth from "../../Hooks/useAuth";

const inputBase =
  "flex w-full h-12 sm:h-[72px] px-3 sm:p-6 items-center gap-2.5 self-stretch rounded-md sm:rounded-2xl border-[0.4px] bg-white/10 text-[#D1D5DC] text-sm sm:text-base font-normal leading-[150%] outline-none transition-colors placeholder:text-[#D1D5DC]/50";
const inputNormal = `${inputBase} border-[#5C787C] focus:border-[#C1C79E]`;
const inputError = `${inputBase} border-[#DF1C41] focus:border-[#DF1C41]`;

const FieldError = ({ message }) =>
  message ? (
    <p className="text-[#DF1C41] text-sm font-normal leading-[150%] mt-1">
      {message}
    </p>
  ) : null;

const isLoggedIn = () => !!localStorage.getItem("token");

const CustomerInformation = ({ mutate, shipping, buyNowItem }) => {
  const navigate = useNavigate();
  const { cartItems, subtotal, clearCart } = useCart();
  const { user } = useAuth();

  const activeItems = buyNowItem
    ? [{ ...buyNowItem, quantity: buyNowItem.quantity }]
    : cartItems;

  const activeSubtotal = buyNowItem
    ? Number(buyNowItem.sell_price) * buyNowItem.quantity
    : subtotal;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  useEffect(() => {
    if (user) {
      reset({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        country: user?.country || "",
        state: user?.state || "",
        city: user?.city || "",
        postcode: user?.postcode || "",
        street: user?.street || "",
      });
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    if (!isLoggedIn()) {
      navigate("/auth/login", { state: "/checkout" });
      return;
    }

    const shippingCost = shipping === "express" ? 5 : 0;

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      country: data.country,
      state: data.state,
      city: data.city,
      postcode: data.postcode,
      street: data.street,
      notes: data.notes || "",
      shipping_method: shipping,
      items: activeItems.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
        price: item.sell_price,
      })),
      subtotal: activeSubtotal.toFixed(2),
      shipping_cost: shippingCost.toFixed(2),
      total: (activeSubtotal + shippingCost).toFixed(2),
    };

    mutate(payload, {
      onSuccess: () => {
        if (!buyNowItem) clearCart();
        navigate("/order-confirmed");
      },
    });
  };

  return (
    <form
      id="checkout-form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full p-4 md:p-6 flex-col items-start gap-5 md:gap-6 rounded-3xl border-[0.4px] border-[#C1C79E] bg-transparent"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex size-[50px] md:size-[60px] items-center justify-center rounded-full bg-primary shrink-0">
          <UserSVG />
        </div>
        <div className="space-y-1">
          <h5 className="text-[#FFFBFB] text-xl md:text-2xl font-semibold leading-[150%]">
            Customer Information
          </h5>
          <p className="text-[#FFFBFB] text-sm md:text-base font-normal leading-[150%]">
            Please provide your contact details
          </p>
        </div>
      </div>

      {/* Name */}
      <div className="space-y-2 md:space-y-3 w-full">
        <p className="text-white text-base md:text-[18px] font-medium leading-[150%]">
          Name <span className="text-[#DF1C41]">*</span>
        </p>
        <input
          type="text"
          className={errors.name ? inputError : inputNormal}
          placeholder="Enter your name..."
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
        />
        <FieldError message={errors.name?.message} />
      </div>

      {/* Email */}
      <div className="space-y-2 md:space-y-3 w-full">
        <p className="text-white text-base md:text-[18px] font-medium leading-[150%]">
          Email Address <span className="text-[#DF1C41]">*</span>
        </p>
        <input
          type="email"
          className={errors.email ? inputError : inputNormal}
          placeholder="Enter your email..."
          {...register("email", {
            required: "Email address is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        <FieldError message={errors.email?.message} />
      </div>

      {/* Phone */}
      <div className="space-y-2 md:space-y-3 w-full">
        <p className="text-white text-base md:text-[18px] font-medium leading-[150%]">
          Phone Number <span className="text-[#DF1C41]">*</span>
        </p>
        <input
          type="text"
          className={errors.phone ? inputError : inputNormal}
          placeholder="Enter your number..."
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[+]?[\d\s\-().]{7,15}$/,
              message: "Please enter a valid phone number",
            },
          })}
        />
        <FieldError message={errors.phone?.message} />
      </div>

      {/* Country */}
      <div className="space-y-2 md:space-y-3 w-full">
        <p className="text-white text-base md:text-[18px] font-medium leading-[150%]">
          Country / Region <span className="text-[#DF1C41]">*</span>
        </p>
        <input
          type="text"
          className={errors.country ? inputError : inputNormal}
          placeholder="Enter your country..."
          {...register("country", { required: "Country / Region is required" })}
        />
        <FieldError message={errors.country?.message} />
      </div>

      {/* State + City */}
      <div className="flex flex-col sm:flex-row gap-5 md:gap-6 w-full">
        <div className="space-y-2 md:space-y-3 flex-1">
          <p className="text-white text-base md:text-[18px] font-medium leading-[150%]">
            State <span className="text-[#DF1C41]">*</span>
          </p>
          <input
            type="text"
            className={errors.state ? inputError : inputNormal}
            placeholder="Enter your state..."
            {...register("state", { required: "State is required" })}
          />
          <FieldError message={errors.state?.message} />
        </div>
        <div className="space-y-2 md:space-y-3 flex-1">
          <p className="text-white text-base md:text-[18px] font-medium leading-[150%]">
            Town / City <span className="text-[#DF1C41]">*</span>
          </p>
          <input
            type="text"
            className={errors.city ? inputError : inputNormal}
            placeholder="Enter your city..."
            {...register("city", { required: "Town / City is required" })}
          />
          <FieldError message={errors.city?.message} />
        </div>
      </div>

      {/* Postcode + Street */}
      <div className="flex flex-col sm:flex-row gap-5 md:gap-6 w-full">
        <div className="space-y-2 md:space-y-3 flex-1">
          <p className="text-white text-base md:text-[18px] font-medium leading-[150%]">
            Postcode / ZIP <span className="text-[#DF1C41]">*</span>
          </p>
          <input
            type="text"
            className={errors.postcode ? inputError : inputNormal}
            placeholder="Enter your postcode..."
            {...register("postcode", {
              required: "Postcode / ZIP is required",
              pattern: {
                value: /^[A-Za-z0-9\s-]{3,10}$/,
                message: "Please enter a valid postcode",
              },
            })}
          />
          <FieldError message={errors.postcode?.message} />
        </div>
        <div className="space-y-2 md:space-y-3 flex-1">
          <p className="text-white text-base md:text-[18px] font-medium leading-[150%]">
            Street Address <span className="text-[#DF1C41]">*</span>
          </p>
          <input
            type="text"
            className={errors.street ? inputError : inputNormal}
            placeholder="Enter your address..."
            {...register("street", { required: "Street address is required" })}
          />
          <FieldError message={errors.street?.message} />
        </div>
      </div>

      {/* Order notes */}
      <div className="space-y-2 md:space-y-3 w-full">
        <p className="text-white text-base md:text-[18px] font-medium leading-[150%]">
          Order notes (optional)
        </p>
        <textarea
          rows={3}
          className="flex w-full p-3 sm:p-6 gap-2.5 self-stretch rounded-2xl border-[0.4px] border-[#5C787C] bg-white/10 text-[#D1D5DC] text-sm sm:text-base font-normal leading-[150%] outline-none focus:border-[#C1C79E] transition-colors resize-none placeholder:text-[#D1D5DC]/50"
          placeholder="Notes about your order, e.g. special notes for delivery"
          {...register("notes")}
        />
      </div>

      {/* Save checkbox */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="saveInfo"
          className="accent-[#C1C79E] w-4 h-4 cursor-pointer"
          {...register("saveInfo")}
        />
        <label
          htmlFor="saveInfo"
          className="text-[#D1D5DC] text-sm md:text-base font-normal leading-[150%] cursor-pointer"
        >
          Save this information for next time
        </label>
      </div>
    </form>
  );
};

export default CustomerInformation;
