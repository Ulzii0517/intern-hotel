import PersonalInfo from "./PersonalInfo";
import { SideButtons } from "./SideButtons";

export const ContainerProfile = () => {
  return (
    <div className="flex">
      <SideButtons />
      <PersonalInfo />
    </div>
  );
};
