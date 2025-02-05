import { DateInput } from "./DateInput";
import FirstLastName from "./FirstLastName";
import { PersonalInformation } from "./PersonalInformation";
import { SideButtons } from "./SideButtons";

export const ContainerProfile = () => {
  return (
    <div className="flex">
      <SideButtons />
      <PersonalInformation />
    </div>
  );
};
