"use c lient"
import React from 'react'
import { Calendar } from "@/components/ui/calendar"

function Avalability() {

    const [bookDate, setBookDate] = React.useState<Date | undefined>(new Date());
    const GMT = bookDate?.toString().split("GMT")[1].split(" ")[0];
    const formattedDate = `${bookDate?.toString().split(" ").slice(0, 4).join(" ")} -GMT${GMT}`;

    const timeStamps = [
        {
            time: "8.00",
            period: "am"
        },
        {
            time: "8.30",
            period: "am"
        },
        {
            time: "9.00",
            period: "am"
        },
        {
            time: "9.30",
            period: "am"
        },
        {
            time: "10.00",
            period: "am"
        },
        {
            time: "10.30",
            period: "am"
        },
        {
            time: "11.00",
            period: "am"
        }
    ];

    return (
        <div className='mb-[200px]'>
            <h2 className='font-bold py-4 text-xl uppercase text-slate-500 tracking-wider'>Select Date and Time</h2>
            <div className='grid grid-cols-2 gap-4 lg:gap-0'>
                <div className='sm:col-span-1 col-span-full'>
                    <Calendar
                        mode="single"
                        selected={bookDate}
                        onSelect={setBookDate}
                        className="rounded-md border shadow-sm"
                        captionLayout="dropdown"
                    />
                </div>
                <div className='sm:col-span-1 col-span-full'>
                    <h2 className='pb-4 text-slate-700 text-center py-3 px-4 border border-slate-500'>{formattedDate}</h2>

                    <div className='py-3 grid grid-cols-3 gap-2'>
                        {
                            timeStamps.slice(0, 5).map((item, i) => {
                                return (
                                    <button className='bg-blue-600 text-sm text-white p-2 text-center'
                                        key={i}> {item.time} {item.period}
                                    </button>
                                );
                            })
                        }

                        <button className='text-[0.7rem] text-center bg-blue-900 text-white py-2 px-3 truncate'> 
                            More times 
                        </button>
                    </div>
                </div>
            </div>

            {/* Calender */}
            {/* Availabile Time */}

        </div>
    )
}

export default Avalability