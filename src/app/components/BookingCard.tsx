import Image from "next/image";

export const BookingCard = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="container flex flex-col w-full max-w-[960px] gap-8 p-8">
        <h3 className="text-2xl font-inter font-semibold leading-8 ">
          Comfirmed Booking
        </h3>
        <div className="flex justify-center items-start border-[1px] border-[#E4E4E7] rounded-md ">
          <Image
            src="/EconomySingleRoom.png"
            alt="Economy Single Room"
            height={222}
            width={395}
            className="rounded-l-[1px] w-full"
            layout="responsive"
          />
          <div className="w-full flex flex-col justify-between items-start p-5 gap-3">
            <div className="flex gap-[10px] py-[2px] px-[10px] bg-[#18BA51] rounded-full">
              <p className="text-xs font-semibold font-inter leading-4 text-[#FAFAFA]">
                Booked
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-base font-bold font-inter leading-7">
                Flower Hotel Ulaanbaatar
              </p>
              <p className="text-sm font-normal text-[#71717A] font-inter leading-5">
                Standard Room, City View, 1 Queen Bed
              </p>
            </div>

            <p className="mt-2">1 night • 1 adult • 1 room</p>
            <div className="flex justify-between  mt-3 w-full">
              <div className="flex flex-col gap-3">
                <div className="flex gap-5">
                  <p>Check in</p>
                  <p>Monday, Jul 1, 3:00pm</p>
                </div>
                <div className="flex gap-5">
                  <p>Itinerary:</p>
                  <p>72055771948934</p>
                </div>
              </div>
              <div className="flex justify-center items-center py-2 px-3 gap-2 border-[1px] border-[#E4E4E7] rounded-md">
                <p>View Detail</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
