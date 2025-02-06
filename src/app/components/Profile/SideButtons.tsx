"use client";
import { Button } from "@/components/ui/button";
import { PersonalInformation } from "./PersonalInformation";
import { useState } from "react";

export function SideButtons() {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [contactInfo, setContactInfo] = useState(false);
  return (
    <div className=" flex flex-col gap-1 ">
      <Button
        onClick={() => {
          setShowPersonalInfo(!showPersonalInfo);
        }}
        className="flex justify-start w-[250px] h-[36px] rounded-md px-4 py-2 gap-2 bg-white text-black shadow-none hover:bg-[#F4F4F5] text-sm font-medium leading-5 font-inter"
      >
        Personal Information
      </Button>
      <div>{showPersonalInfo && <PersonalInformation />}</div>
      <Button
        onClick={() => {
          setContactInfo(!contactInfo);
        }}
        className="flex justify-start w-[250px] h-[36px] rounded-md px-4 py-2 gap-2 bg-white text-black shadow-none hover:bg-[#F4F4F5] text-sm font-medium leading-5 font-inter"
      >
        Contact info
      </Button>
      <div>{contactInfo && <>aa</>}</div>
      <Button className="flex justify-start w-[250px] h-[36px] rounded-md px-4 py-2 gap-2 bg-white text-black shadow-none hover:bg-[#F4F4F5] text-sm font-medium leading-5 font-inter">
        Security & Settings
      </Button>
    </div>
  );
}
