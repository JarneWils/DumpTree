"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { ImSoundcloud, ImSpotify } from "react-icons/im";

const data = [

  {
    title: "RELEASES",
      subtitle: "Playlist",
      icon: <ImSoundcloud className="text-white/50 text-xl xl:text-2xl mr-2 mt-0.5 xl:mt-0"/>,
    image: "/assets/images/All-Releases.png",
    url:"https://soundcloud.com/janre-wils/sets/releases?si=1389c1873953490ab0c264d6103b3053&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
   
  {
    title: "NO GO ZONE",
      subtitle: "Track",
      icon: <ImSoundcloud className="text-white/50 text-xl xl:text-2xl mr-2 mt-0.5 xl:mt-0"/>,
    image: "/assets/images/no-go-zone.png",
    url:"https://soundcloud.com/janre-wils/no-go-zone-hard-trance-remix?in=janre-wils/sets/releases&si=1b82061a7fcf46a080f73d07b1ad143d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },

  {
    title: "ELATED",
      subtitle: "EP",
      icon: <ImSoundcloud className="text-white/50 text-xl xl:text-2xl mr-2 mt-0.5 xl:mt-0"/>,
    image: "/assets/images/elated.png",
    url:"https://soundcloud.com/janre-wils/sets/elated?si=0f08cc42e58d42acaf1178f5a8d4b04b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "ELATED",
      subtitle: "EP",
      icon: <ImSpotify className="text-white/50 text-xl xl:text-xl mr-2 mt-2 xl:mt-0.5"/>,
    image: "/assets/images/elated.png",
    url:"https://open.spotify.com/track/5hUP63QambNEqSt7Wof34L?si=8d9dae0cba854a38",
  },
 
];

const Tracks = () => {
  const pathname = usePathname();
  return (

    <div className="mb-4">
      {/* Itereren over de data array */}
      {data.map((track, index) => (
        <div key={index}>

          {/* Link */}
          <div>
            <Link
            href={track.url}
            target="blank"
            className="flex flex-row bg-white/5 p-2 xl:p-3 mt-5 rounded-xl w-[350px] xl:w-[600px] border-solid border-white hover:bg-white/10 xl:hover:-ml-2 xl:hover:w-[605px] duration-150"
            >

              {/* Image */}
              <div className="relative w-[50px] h-[50px] xl:w-[60px] xl:h-[60px]">
                <Image
                  src={track.image}
                  alt={track.title}
                  sizes="full"
                  fill
                  priority
                  quality={100}
                  className="object-contain rounded-lg"
                />
              </div>

              {/* Title */}
              <div className="ml-4 leading-normal">
                <p className="xl:font-semibold text-md xl:text-lg">{track.title}</p>
                <div className="flex flex-row">
                  <div className="mt-0.5">
                    {track.icon}
                  </div>
                  <p className="text-white/50 text-md xl:text-lg">{track.subtitle}</p>
                </div>
              </div>

            </Link>

          </div>

        </div>
      ))}
    </div>
  );
};

export default Tracks;
