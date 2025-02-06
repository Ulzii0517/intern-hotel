import { PersonalInformation } from "./PersonalInformation";
import { SideButtons } from "./SideButtons";

export const ContainerProfile = () => {
  return (
    <div className="flex gap-12">
      <SideButtons />
      <PersonalInformation />
    </div>
  );
};
