import { Booked } from "../components/Booking/Booked";
import { NavigationWhite } from "../components/NavigationWhite";
import { NoPreviousBooking } from "../components/Booking/NoPreviousBooking";

export const BookingPage = () => {
  return (
    <div>
      <NavigationWhite />
      <Booked />;
      <NoPreviousBooking />
    </div>
  );
};
