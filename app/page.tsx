"use client";
import Calendar from "./components/Calendar";
import Cronometru from "./components/Cronometru";
import FancyText from "./components/FancyText";
import LazyShow from "./components/LazyShow";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r to-pink-200 via-red-200 from-blue-200">



        <LazyShow>
          <Cronometru />
        </LazyShow>

        <LazyShow>
          <Calendar />
        </LazyShow>

        <div className="">

          <LazyShow>
            <div className='flex  justify-center'>
              <video
                autoPlay
                loop
                muted
                className="top-0 left-0 w-full h-[600px]  object-cover z-0"
              >
                <source src="../public/GAB/video_gabi.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>


            </div>
          </LazyShow>

        </div>







        <LazyShow>
          <div className="flex justify-center items-center ">

            ......
          </div>
        </LazyShow>


        <LazyShow>
          <div className="flex justify-center items-center ">

            <FancyText />
          </div>
        </LazyShow>
      </div>




    </>
  );
}


