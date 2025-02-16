/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const datasetValues = [
  { value: 50, color: "#ff5733", label: "Option 1" },
  { value: 30, color: "#ffbd33", label: "Option 2" },
  { value: 70, color: "#33ff57", label: "Option 3" },
  { value: 40, color: "#3375ff", label: "Option 4" },
  { value: 60, color: "#8c33ff", label: "Option 5" },
  { value: 20, color: "#ff33b8", label: "Option 6" },
];

export default function SpinCircle() {
  const [countdown, setCountdown] = useState<number>(20);
  const [nextRoundCountdown, setNextRoundCountdown] = useState<number>(10);
  const [nextRoundOn, setNextRoundOn] = useState<boolean>(false);
  const [spinning, setSpinning] = useState<boolean>(false);
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);
  const [randomRotation, setRandomRotation] = useState<number>(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const chartRef = useRef<ChartJS<"doughnut", (number | [number, number] | any | any | any)[], unknown> | null>(null);

  const data = {
    datasets: [
      {
        data: datasetValues.map((item) => item.value),
        backgroundColor: datasetValues.map((item) => item.color),
        borderColor: datasetValues.map((item) => item.color),
        cutout: "67%",
        rotation: randomRotation,
      },
    ],
    labels: datasetValues.map((item) => item.label),
    hoverOffset: 3,
  };

  function Rotation() {
    const chart = chartRef.current;
    if (chart) {
      const randomRotation = Math.random() * 3333;
      setRandomRotation(randomRotation);
      chart.update();
    }
  }

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setSpinning(true);
      Rotation();
      setTimeout(() => {
        // Set winnerIndex to 1, so Option 2 always wins
        setWinnerIndex(1);
        setShowPopup(true); // Show the pop-up when the winner is determined
        setNextRoundCountdown(10);
        setNextRoundOn(true);
      }, 4000);
    }
  }, [countdown]);

  useEffect(() => {
    if (nextRoundOn && nextRoundCountdown > 0) {
      const timer = setInterval(() => {
        setNextRoundCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (nextRoundOn && nextRoundCountdown === 0) {
      setNextRoundOn(false);
      setCountdown(60);
    }
  }, [nextRoundOn, nextRoundCountdown]);

  const circleSize = 200;
  const circleRadius = circleSize / 2;
  const circumference = 2 * Math.PI * circleRadius;
  const progress = ((60 - countdown) / 60) * circumference;

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>

      <div className="relative w-[340px] h-[340px] md:w-[410px] md:h-[410px] flex items-center justify-center p-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full shadow-lg z-10">
        <div
          onClick={Rotation}
          className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-center z-10 text-white"
        >
          {countdown > 0 ? (
            <div className="flex -mt-12 flex-row justify-center text-2xl font-bold text-pink-300">
              Spin the wheel!
            </div>
          ) : winnerIndex !== null && nextRoundOn ? (
            <div className="flex items-center flex-col">
              <div className="flex -mt-12 flex-row justify-center text-2xl font-bold text-pink-300">
                You won: {datasetValues[winnerIndex].label}
              </div>
              {nextRoundOn && (
                <div className="flex items-center flex-row justify-center text-sm text-gray-500">
                  Next Round: {nextRoundCountdown}
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center flex-row justify-center uppercase font-bold text-gray-100">
              Spinning...
            </div>
          )}
        </div>
        <div className="relative w-[300px] h-[300px] md:w-[368px] md:h-[368px] p-4 rounded-full bg-white">
          <Doughnut data={data} options={{ plugins: { legend: { display: true } }, rotation: -90 }} ref={chartRef} />
        </div>
      </div>

      {/* Pop-up Notification */}
      {showPopup && (
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-white text-black p-4 rounded-lg shadow-lg z-20">
          <div className="text-lg font-bold">Winner: {datasetValues[1].label}</div>
          <button
            onClick={() => setShowPopup(false)}
            className="mt-2 bg-red-500 text-white py-1 px-3 rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
