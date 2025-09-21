// /* eslint-disable @next/next/no-img-element */
import { Badge, Button } from "#/base";
import { Brands } from "#/Brands";
import { cn } from "@/lib/utils";

// export function HeroSection({
//   badge,
//   title,
//   description,
//   buttons,
//   image,
//   clientsLabel,
//   clients,
//   ...rest
// }) {
//   return (
//     <section {...rest}>
//       <div className="container px-4 mx-auto">
//         <div className="flex flex-col justify-center items-center min-h-screen">
//           <div className="flex flex-col justify-center items-center gap-4 text-center max-w-3xl mx-auto mt-32 pb-12">
//             {/* <Badge {...badge} /> */}
//             <h1 className="text-6xl font-display font-semibold title-gradient">
//               {title}
//             </h1>
//             <p className="text-xl">{description}</p>
            
//             {/* {buttons.length > 0 && (
//               <div className="flex justify-center items-center gap-4 mt-8">
//                 {buttons.map((button, index) => (
//                   <Button key={index} {...button} />
//                 ))}
//               </div>
//             )} */}
//           </div>
//           {/* <div>
//             <img
//               src={image.src}
//               alt={image.alt}
//               className={cn("w-full h-auto", image.className)}
//             />
//           </div> */}
//           <div className="text-sm">{clientsLabel}</div>
//           <Brands clients={clients} />
//         </div>
//       </div>
//     </section>
//   );
// }



///---------------------new -------------


import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


export function HeroSection({
  badge,
  title,
  description,
  buttons,
  image,
  clientsLabel,
  clients,
  ...rest
}) {
  const videos = [
    "/videos/drone3.mp4",
    "/videos/drone4.mp4",
    "/videos/drone5.mp4",
    "/videos/drone2.mp4",
    "/videos/drone1.mp4",
    "/videos/drone6.mp4",
    "/videos/drone7.mp4",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => setCurrentVideo((prev) => (prev + 1) % videos.length);
  const prevVideo = () =>
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <section {...rest} className="relative w-full h-screen">
      <video
        key={currentVideo}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videos[currentVideo]}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 container px-4 mx-auto h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-display font-semibold title-gradient text-white">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white mt-4 px-20">{description}</p>
      </div>

      <button
        onClick={prevVideo}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 transition z-10"
      >
        <ChevronLeftIcon className="text-white w-6 h-6" />
      </button>
      <button
        onClick={nextVideo}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 transition z-10"
      >
        <ChevronRightIcon className="text-white w-6 h-6" />
      </button>

      {/* <div className="text-sm">{clientsLabel}</div>
      <Brands clients={clients} /> */}
    </section>
  );
}
