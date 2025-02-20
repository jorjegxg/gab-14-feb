"use client";

import { eachDayOfInterval, format, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'; // Adăugați importul pentru toast
import { ButtonIcon } from './ButtonIcon';
import LazyShow from './LazyShow';

// Date speciale
const specialDates = [
  { date: new Date(2024, 10, 11), event: "Primele cuvinte" },
  { date: new Date(2024, 10, 26), event: "Primul mesaj pe telefon" },
  { date: new Date(2024, 11, 18), event: "Prima oară când te-am ținut de mână" },
  { date: new Date(2025, 0, 1), event: "Trecerea dintre ani <3" },
  { date: new Date(2025, 0, 27), event: "A zis da!!!!" },
  { date: new Date(2025, 1, 4), event: "error (×_×;）" },
];

const Calendar = () => {
  const [months, setMonths] = useState<Date[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const currentDate = new Date();

  const getDaysInMonth = (month: number, year: number) => {
    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 0);
    return eachDayOfInterval({ start, end });
  };

  const isSpecialDate = (date: Date) => {
    return specialDates.some((specialDate) => isSameDay(specialDate.date, date));
  };

  useEffect(() => {
    const monthsArray = [];
    let current = currentMonth;
    for (let i = 0; i < 4; i++) {
      monthsArray.unshift(current);
      current = new Date(current.getFullYear(), current.getMonth() - 1, 1);
    }
    setMonths(monthsArray);
  }, [currentMonth]);

  const goToPreviousMonths = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonths = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Funcția pentru a arăta toast
  const handleDateClick = (date: Date) => {
    if (isSpecialDate(date)) {
      const event = specialDates.find((sd) => isSameDay(sd.date, date))?.event;
      toast.info(event || "Eveniment special", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-4">
        <ButtonIcon onClick={goToPreviousMonths} icon={<ChevronLeft />} />
        <ButtonIcon onClick={goToNextMonths} icon={<ChevronRight />} />
      </div>

      <LazyShow>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {months.map((monthDate, index) => {
            const days = getDaysInMonth(monthDate.getMonth(), monthDate.getFullYear());
            return (
              <div key={index} className={monthDate.getMonth() % 2 === 0 ? "bg-galben p-4 rounded-lg" : "bg-verde p-4 rounded-lg"}>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-center mb-4">{format(monthDate, 'MMMM yyyy')}</h2>
                  <div className="grid grid-cols-7 gap-2">
                    <div className="font-semibold text-center text-dark">D</div>
                    <div className="font-semibold text-center text-dark">L</div>
                    <div className="font-semibold text-center text-dark">M</div>
                    <div className="font-semibold text-center text-dark">M</div>
                    <div className="font-semibold text-center text-dark">J</div>
                    <div className="font-semibold text-center text-dark">V</div>
                    <div className="font-semibold text-center text-dark">S</div>

                    {days.map((date) => {
                      const isToday = isSameDay(date, currentDate);
                      return (
                        <div
                          key={date.toString()}
                          className={`relative flex items-center justify-center p-4 text-center rounded-lg ${isSpecialDate(date) ? 'bg-roz text-white' : 'bg-text'} ${isToday ? 'border-4 border-blue-500' : ''}`}
                          onClick={() => handleDateClick(date)}
                        >
                          <span>{format(date, 'd')}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </LazyShow>
    </div>
  );
};

export default Calendar;
