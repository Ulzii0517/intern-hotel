import Register from "./Register";

import { TitleImpormation } from "./TitleInformation";

export const PersonalInformation = () => {
  return (
    <div className="flex flex-col max-w-[672px] w-full gap-6">
      <TitleImpormation />
      <div className="w-full  flex justify-center">
        <div className="w-full border-[0.5px] border-[#E4E4E7]"></div>
      </div>
      <Register />
    </div>
  );
};
