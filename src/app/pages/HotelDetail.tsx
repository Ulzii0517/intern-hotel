export const HotelDetail = () => {
  return (
    <main className="w-full flex justify-center">
      <div className="container max-w-[1280px]">
        <div className="w-full flex justify-center gap-[80px]">
          <strong>About this Property</strong>
          <div className="w-full max-w-[736px] gap-[40px]">
            <strong>Flower Hotel Ulaanbaatar</strong>
            <p>Upscale hotel located in Downtown Ulaanbaatar</p>
            <p className="text-sm font-normal leading-5">
              Consider a stay at Flower Hotel Ulaanbaatar and take advantage of
              a coffee shop/cafe, dry cleaning/laundry services, and a bar.
              Treat yourself to a massage at the onsite spa. Be sure to enjoy
              Mongolian cuisine at one of the 4 on-site restaurants. In addition
              to a gym and a business center, guests can connect to free in-room
              WiFi.
            </p>
            <p>Additional perks include</p>
            <ul className="list-disc list-inside">
              <li>Free self parking</li>

              <li>
                Buffet breakfast (surcharge), a roundtrip airport shuttle
                (surcharge), and a front-desk safe
              </li>
              <li>
                A banquet hall, newspapers in the lobby, and concierge services{" "}
              </li>
              <li> Guest reviews speak highly of the helpful staff</li>
            </ul>
            <p>Room features </p>
            <p>
              All 180 rooms boast comforts such as premium bedding and
              bathrobes, in addition to perks like free WiFi and safes.
            </p>
            <p>Other conveniences in all rooms include: </p>
            <ul className="list-disc list-inside">
              <li>Rainfall showers, tubs or showers, and free toiletries </li>
              <li>TVs with satellite channels</li>
              <li>Electric kettles, ceiling fans, and daily housekeeping </li>
            </ul>
            <strong>Languages</strong>
            <p>English, Japanese, Mongolia, Russian</p>
          </div>
        </div>

        <div className="w-full flex justify-center gap-[150px] mt-9">
          <strong>Policies</strong>
          <div className="w-full max-w-[736px] gap-[40px]">
            <div className="flex">
              <div>
                <strong>Check-in</strong>
                <p>Check-in start time: noon; Check-in end time: 5:30 AM</p>
                <p>Minimum check-in age: 16</p>
              </div>
              <div>
                <strong>Check-in</strong>
                <p>Check-in start time: noon; Check-in end time: 5:30 AM</p>
                <p>Minimum check-in age: 16</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p>Special check-in instructions</p>
              <p className="text-sm font-normal leading-5">
                This property offers transfers from the airport (surcharges may
                apply); guests must contact the property with arrival details
                before travel, using the contact information on the booking
                confirmation
              </p>
              <p>Additional perks include</p>
              <p>This property doesn't offer after-hours check-in</p>
            </div>
            <div className="flex flex-col">
              <p>Access methods</p>
              <p>Staffed front desk</p>
            </div>
            <div className="flex flex-col">
              <p>Pets</p>
              <p>Staffed front desk</p>
            </div>
            <div className="flex flex-col">
              <p>Children and extra beds</p>
              <p>Children are welcome</p>
              <p>Cribds (infant beds) are not available</p>
            </div>
            <div className="flex flex-col">
              <p>Property payment types</p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center gap-[150px] mt-9">
          <strong>Important information</strong>
          <div className="w-full max-w-[736px] gap-[40px]">
            <div className="flex flex-col">
              <strong>Optional extras</strong>
              <ul className="list-disc list-inside">
                <li>
                  Fee for buffet breakfast: approximately USD 20 for adults and
                  USD 10 for children
                </li>
                <li>Airport shuttle fee: USD 65.00 per vehicle (roundtrip) </li>
              </ul>
              <p>
                The above list may not be comprehensive. Fees and deposits may
                not include tax and are subject to change.
              </p>
            </div>
            <div className="flex flex-col">
              <strong>You need to know</strong>
              <p>
                Extra-person charges may apply and vary depending on property
                policy
              </p>
              <p>
                Government-issued photo identification and a credit card, debit
                card, or cash deposit may be required at check-in for incidental
                charges
              </p>
              <p>
                Special requests are subject to availability upon check-in and
                may incur additional charges; special requests cannot be
                guaranteed
              </p>
              <p>This property accepts credit cards and cash </p>
              <p>
                Safety features at this property include a fire extinguisher, a
                security system, and a first aid kit
              </p>
            </div>
            <div className="flex flex-col">
              <strong>We should mention</strong>
              <p>No pets and no service animals are allowed at this property</p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center gap-[150px] mt-9">
          <strong>Frequently asked questions</strong>
          <div className="w-full max-w-[736px] gap-[40px]">
            <p>Is Flower Hotel Ulaanbaatar pet-friendly?</p>
            <div className="flex flex-col">
              <p>How much is parking at Flower Hotel Ulaanbaatar?</p>
              <p>Self parking is free at this property.</p>
            </div>
            <p>What time is check-in at Flower Hotel Ulaanbaatar? </p>
            <p>What time is check-out at Flower Hotel Ulaanbaatar?</p>
            <p>
              Does Flower Hotel Ulaanbaatar provide a shuttle to the airport?
            </p>
            <p>Where is Flower Hotel Ulaanbaatar located?</p>
          </div>
        </div>
      </div>
    </main>
  );
};
