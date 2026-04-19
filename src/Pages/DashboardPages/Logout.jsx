import React from "react";
import { useLogout } from "../../Hooks/api/auth_api";
import { ImSpinner9 } from "react-icons/im";

const Logout = () => {
  const { mutate, isPending } = useLogout();

  return (
    <div className="">
      <h2 className="text-[#F9FAFB] text-[40px] font-semibold leading-[120%] mb-4">
        Logout
      </h2>
      <p className="text-[#B4C0C3] text-lg leading-[150%]">
        Are you sure you want to logout
      </p>
      <button
        disabled={isPending}
        type="button"
        onClick={() => mutate()}
        className="py-3 px-4.5 mt-9 rounded-2xl bg-primary text-[#051619] font-medium cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 hover:bg-[#d9e2a8] transition duration-300"
      >
        {isPending ? (
          <span className="w-full flex gap-3 items-center justify-center">
            <ImSpinner9 className="animate-spin" />
            Processing...
          </span>
        ) : (
          "Yes, Logout"
        )}
      </button>
    </div>
  );
};

export default Logout;
