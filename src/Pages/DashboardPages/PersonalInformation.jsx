import React, { useState, useRef, useEffect } from "react";
import { PenSVG } from "../../Components/Svg/SvgContainer";
import useAuth from "../../Hooks/useAuth";
import { useUpdateUserInfo } from "../../Hooks/api/dashboard_api";
import { useForm } from "react-hook-form";
import { AlertSVG } from "../../Components/Svg/SvgContainer";
import { ImSpinner9 } from "react-icons/im";

const PersonalInformation = () => {
  const { user } = useAuth();
  const { mutate, isPending } = useUpdateUserInfo();

  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      gender: "",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        gender: user?.gender || "",
      });
    }
  }, [user, reset]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // preview
    const reader = new FileReader();
    reader.onloadend = () => setPreviewImage(reader.result);
    reader.readAsDataURL(file);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("gender", data.gender);

    const imageFile = fileInputRef.current?.files[0];
    if (imageFile) {
      formData.append("image", imageFile);
    }

    mutate(formData);
  };

  return (
    <div className="flex max-w-[989px] p-6 flex-col items-start gap-9 rounded-2xl bg-[#0C353C]/20 border border-secondary-100">
      {/* Avatar */}
      <div
        className="size-[93px] rounded-full relative cursor-pointer group border border-secondary-100"
        onClick={() => fileInputRef.current?.click()}
      >
        {previewImage || user?.image ? (
          <img
            src={
              previewImage || import.meta.env.VITE_SITE_URL + "/" + user?.image
            }
            alt="profile"
            className="size-full object-cover rounded-full"
          />
        ) : (
          <div className="flex items-center justify-center size-full text-2xl md:text-3xl bg-secondary-100 rounded-full border border-primary">
            {user?.name?.at(0)}
          </div>
        )}

        <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <PenSVG />
        </div>
        <div className="absolute size-9 flex items-center justify-center rounded-[20px] border-[0.4px] border-primary bg-secondary-500 bottom-0 right-0">
          <PenSVG />
        </div>

        {/* hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-[23px] w-full">
        {/* Full Name */}
        <div className="flex items-center gap-9">
          <div className="space-y-4 w-full">
            <p className="text-white text-[18px] font-medium leading-[150%]">
              Full Name{" "}
              <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
                *
              </span>
            </p>
            <div>
              <input
                type="text"
                className={`flex w-full p-3 items-end gap-[10px] self-stretch rounded-lg border-[0.4px] bg-[#F6F6F6]/10 text-[#E7EBEC] text-base leading-[150%] ${
                  errors.name ? "border-red-400" : "border-[#5C787C]"
                }`}
                placeholder="John Doe"
                {...register("name", { required: "Full name is required" })}
              />
              {errors.name && (
                <p className="text-[#DF1C41] text-sm mt-1 flex items-center gap-1">
                  <AlertSVG />
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Email & Phone */}
        <div className="flex items-center gap-9">
          <div className="space-y-4 w-full">
            <p className="text-white text-[18px] font-medium leading-[150%]">
              Email Address{" "}
              <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
                *
              </span>
            </p>
            <input
              type="email"
              disabled
              className={`flex w-full p-3 items-end gap-[10px] self-stretch rounded-lg border-[0.4px] bg-[#F6F6F6]/10 text-[#E7EBEC] text-base leading-[150%] disabled:opacity-60 cursor-not-allowed`}
              {...register("email")}
            />
          </div>

          <div className="space-y-4 w-full">
            <p className="text-white text-[18px] font-medium leading-[150%]">
              Phone Number{" "}
              <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
                *
              </span>
            </p>
            <div>
              <input
                type="text"
                className={`flex w-full p-3 items-end gap-[10px] self-stretch rounded-lg border-[0.4px] bg-[#F6F6F6]/10 text-[#E7EBEC] text-base leading-[150%] ${
                  errors.phone ? "border-red-400" : "border-[#5C787C]"
                }`}
                placeholder="+0 1234567890"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="text-[#DF1C41] text-sm mt-1 flex items-center gap-1">
                  <AlertSVG />
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Gender */}
        <div className="flex items-center gap-9">
          <div className="space-y-2 sm:space-y-4 w-full">
            <p className="text-white text-[18px] font-medium leading-[150%]">
              Gender{" "}
              <span className="text-[#DF1C41] text-[18px] font-medium leading-[150%]">
                *
              </span>
            </p>
            <div className="">
              <select
                className={`flex w-full p-3 items-end gap-[10px] self-stretch rounded-lg border-[0.4px] border-[#5C787C] bg-[#F6F6F6]/10 text-[#E7EBEC] text-base leading-[150%] cursor-pointer ${
                  errors.phone ? "border-red-400" : "border-[#5C787C]"
                }`}
                {...register("gender", { required: "Gender is required" })}
              >
                <option value={""} disabled className="text-black">
                  Choose Gender
                </option>
                <option value="male" className="text-black">
                  Male
                </option>
                <option value="female" className="text-black">
                  Female
                </option>
              </select>
              {errors.gender && (
                <p className="text-[#DF1C41] text-sm flex mt-1 items-center gap-1">
                  <AlertSVG />
                  {errors.gender.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="flex w-[165px] p-3 flex-col justify-center items-center gap-2.5 rounded-[10px] bg-primary text-[#051619] text-center leading-[150%] cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? (
            <span className="flex gap-2 items-center">
              <ImSpinner9 className="animate-spin" />
              Saving...
            </span>
          ) : (
            "Save Change"
          )}
        </button>
      </form>
    </div>
  );
};

export default PersonalInformation;
