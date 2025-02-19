"use client";

// app/components/Calendar.tsx

import { eachDayOfInterval, format, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ButtonIcon } from './ButtonIcon';
import LazyShow from './LazyShow';

// Date speciale (de exemplu, evenimente importante)
const specialDates = [
  { date: new Date(2024, 10, 11), event: "Primele cuvinte" },
  { date: new Date(2024, 10, 26), event: "Primul mesaj pe telefon" },
  { date: new Date(2024, 11, 18), event: "Prima oară când te-am ținut de mână" },
  { date: new Date(2025, 0, 1), event: "Trecerea dintre ani <3" },
  { date: new Date(2025, 0, 27), event: "A zis da" },
  { date: new Date(2025, 1, 4), event: "error (×_×;）" },
];

const Calendar = () => {
  const [months, setMonths] = useState<Date[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date()); // Luna curentă

  const currentDate = new Date(); // Data curentă

  // Funcție pentru a obține zilele dintr-o lună
  const getDaysInMonth = (month: number, year: number) => {
    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 0);
    return eachDayOfInterval({ start, end });
  };

  // Funcție pentru a verifica dacă o zi este specială
  const isSpecialDate = (date: Date) => {
    return specialDates.some((specialDate) => isSameDay(specialDate.date, date));
  };

  // Calculăm ultimele 4 luni
  useEffect(() => {
    const monthsArray = [];
    let current = currentMonth;
    for (let i = 0; i < 4; i++) {
      monthsArray.unshift(current); // Adăugăm luna curentă la începutul array-ului
      current = new Date(current.getFullYear(), current.getMonth() - 1, 1); // Luna anterioară
    }
    setMonths(monthsArray);
  }, [currentMonth]);

  // Navigare lună înapoi
  const goToPreviousMonths = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  // Navigare lună în față
  const goToNextMonths = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <div className="container mx-auto p-4">
      

      {/* Butoane pentru navigare */}
      <div className="text-center mb-4">
        <ButtonIcon onClick={goToPreviousMonths} icon= {<ChevronLeft/>}  />
        <ButtonIcon onClick={goToNextMonths} icon= {< ChevronRight/>}/>
       
      </div>

      {/* Calendar pentru ultimele 4 luni */}
      <LazyShow>
        <div className="grid lg:grid-cols-4 gap-4">
          {months.map((monthDate, index) => {
            const days = getDaysInMonth(monthDate.getMonth(), monthDate.getFullYear());
            return (
              <div key={index} className={monthDate.getMonth() % 2 === 0 ? "bg-galben p-4 rounded-lg" : "bg-verde p-4 rounded-lg"}>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-center mb-4">{format(monthDate, 'MMMM yyyy')}</h2>
                  <div className="grid grid-cols-7 gap-2">
                    {/* Zilele săptămânii */}
                    <div className="font-semibold text-center text-dark">D</div>
                    <div className="font-semibold text-center text-dark">L</div>
                    <div className="font-semibold text-center text-dark">M</div>
                    <div className="font-semibold text-center text-dark">M</div>
                    <div className="font-semibold text-center text-dark">J</div>
                    <div className="font-semibold text-center text-dark">V</div>
                    <div className="font-semibold text-center text-dark">S</div>

                    {/* Zilele din lună */}
                    {days.map((date) => {
                      const isToday = isSameDay(date, currentDate); // Verificăm dacă este ziua curentă
                      return (
                        <div
                          key={date.toString()}
                          className={`relative flex items-center justify-center p-4 text-center rounded-lg ${isSpecialDate(date) ? 'bg-roz text-white' : 'bg-text'} ${isToday ? 'border-4 border-blue-500' : ''}`}
                          title={isSpecialDate(date) 
                            ? specialDates
                                .filter((sd) => isSameDay(sd.date, date))
                                .map((sd) => sd.event)
                                .join(", ") 
                            : ""}
                          
                        >
                          <span>{format(date, 'd')}</span>

                          {/* Tooltip pentru zilele speciale */}
                          {isSpecialDate(date) && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                              {specialDates.find((sd) => isSameDay(sd.date, date))?.event}
                            </div>
                          )}
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
