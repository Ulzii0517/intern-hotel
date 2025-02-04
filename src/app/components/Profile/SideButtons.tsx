import { Button } from "@/components/ui/button";

export function SideButtons() {
  return (
    <div className=" flex flex-col gap-1 ">
      <Button className="flex justify-start w-[250px] h-[36px] rounded-md px-4 py-2 gap-2 bg-white text-black shadow-none hover:bg-[#F4F4F5]">
        Personal Information
      </Button>
      <Button className="flex justify-start w-[250px] h-[36px] rounded-md px-4 py-2 gap-2 bg-white text-black shadow-none hover:bg-[#F4F4F5]">
        Contact info
      </Button>
      <Button className="flex justify-start w-[250px] h-[36px] rounded-md px-4 py-2 gap-2 bg-white text-black shadow-none hover:bg-[#F4F4F5]">
        Security & Settings
      </Button>
    </div>
  );
}

