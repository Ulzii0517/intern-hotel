import { DateInput } from "./DateInput";
import FirstLastName from "./FirstLastName";
import MyForm from "./Register";

export const PersonalInformation = () => {
  return (
    <div className="flex flex-col max-w-[672px] w-full gap-6">
      {/* <FirstLastName />
      <DateInput /> */}

      <MyForm/>
    </div>
  );
};
