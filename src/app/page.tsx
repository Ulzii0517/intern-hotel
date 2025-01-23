import Image from "next/image";
import { Card } from "./components/Card";
import { HotelDetail } from "./pages/HotelDetail";
import { BookingPage } from "./pages/Booking-Page";

export default function Home() {
  return (
    // <HotelDetail/>
    <BookingPage />
  );
}
