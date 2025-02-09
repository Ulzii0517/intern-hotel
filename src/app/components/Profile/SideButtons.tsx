"use client";

import { Button } from "@/components/ui/button";

import { useState } from "react";
import Register from "./Register";
import Contact from "./Contact";


export function SideButtons() {
  const [activeSection, setActiveSection] = useState<"personal" | "contact" | "security" | null>("personal");

  return (
    <div className="flex gap-6">
     
      <div className="flex flex-col  w-[250px]">
       
        <Button
          onClick={() => setActiveSection(activeSection === "personal" ? null : "personal")}
          className={`flex justify-start h-9 rounded-md px-4 py-2 gap-2 bg-white text-black shadow-none hover:bg-gray-100 text-sm font-medium font-inter transition-all ${activeSection === "personal" ? "bg-gray-200" : ""
            }`}
        >
          Personal Information
        </Button>

       
        <Button
          onClick={() => setActiveSection(activeSection === "contact" ? null : "contact")}
          className={`flex justify-start h-9 rounded-md px-4 py-2 gap-2 bg-white text-black shadow-none hover:bg-gray-100 text-sm font-medium font-inter transition-all ${activeSection === "contact" ? "bg-gray-200" : ""
            }`}
        >
          Contact Info
        </Button>

       
        <Button
          onClick={() => setActiveSection(activeSection === "security" ? null : "security")}
          className={`flex justify-start h-9 rounded-md px-4 py-2 gap-2 bg-white text-black shadow-none hover:bg-gray-100 text-sm font-medium font-inter transition-all ${activeSection === "security" ? "bg-gray-200" : ""
            }`}
        >
          Security & Settings
        </Button>
      </div>

     
      <div className="flex">
        {activeSection === "personal" && <Register />}
        {activeSection === "contact" && <Contact/>}
        {activeSection === "security" && <p>Security & Settings Component</p>}
      </div>
    </div>
  );
}
