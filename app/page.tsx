"use client";
import Calendar from "./components/Calendar";
import Cronometru from "./components/Cronometru";
import FancyText from "./components/FancyText";
import HugCoupon from "./components/HugCoupon";
import LazyShow from "./components/LazyShow";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <>
    <MusicPlayer />
      <div className="bg-gradient-to-r to-pink-200 via-red-200 from-blue-200">



        <LazyShow>
          <Cronometru />
        </LazyShow>
        {/* <div className="flex justify-center items-center pb-4" >
          Probleme peste care am trecut împreună : 0
        </div> */}

        <LazyShow>
          <Calendar />
        </LazyShow>

        <LazyShow>
          <HugCoupon />
        </LazyShow>

        <div className="">

          <LazyShow>
            <div className='flex  justify-center'>
              <video
                autoPlay
                loop
                muted
                className="top-0 left-0 w-full   object-cover z-0"
              >
                <source src="/GAB/video_gabi.mp4" type="video/mp4" />
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


