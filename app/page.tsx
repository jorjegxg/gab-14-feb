"use client";
import Cronometru from "./components/Cronometru";
import LazyShow from "./components/LazyShow";
import Calendar from "./components/Calendar";
import FancyText from "./components/FancyText";

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

        <div className="max-md:hidden">

          <LazyShow>
            <div className='flex  justify-center'>
              <video
                autoPlay
                loop
                muted
                className="top-0 left-0 w-full h-[600px]  object-cover z-0"
              >
                <source src="/Gab/video_gabi.mp4" type="video/mp4" />
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
