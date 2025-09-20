import React from "react";
import Button from "./ui/Button";

const InputFieldWithButton = () => {
  return (
    <div>
      <div className="hidden md:flex w-[490px] items-center rounded-[38.5px] bg-[#2A2F36] p-1">
        <input
          type="email"
          placeholder="Type your email address"
          className="flex-1 bg-transparent px-4 py-3 text-body text-white placeholder-gray-400 focus:outline-none"
        />
        <Button variant="secondary" rounded className="rounded-[38.5px] px-6 py-2">
          Get Started
        </Button>
      </div>

      <div className="md:hidden">
        <div className="w-full rounded-[38.5px] bg-[#2A2F36] p-1">
          <input
            type="email"
            placeholder="Type your email address"
            className="flex-1 bg-transparent px-4 py-3 text-body text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
        <Button variant="secondary" rounded className="rounded-[38.5px] px-6 py-2 w-full mt-3.5">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default InputFieldWithButton;
