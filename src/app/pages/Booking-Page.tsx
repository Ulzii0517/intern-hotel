import { Booked } from "../components/Booked";
import { NavigationWhite } from "../components/NavigationWhite";
import { NoPreviousBooking } from "../components/NoPreviousBooking";

export const BookingPage = () => {
  return (
    <div>
      <NavigationWhite />
      <Booked />;
      <NoPreviousBooking />
    </div>
  );
};
