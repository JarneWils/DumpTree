"use client";

import Link from "next/link";
import { SlSocialSoundcloud, SlSocialSpotify, SlSocialInstagram } from "react-icons/sl";
import { RiTiktokLine } from "react-icons/ri";

const Socials = () => {
    return (
      <div className="flex flex-row gap-6 mt-8">

        <Link href="https://on.soundcloud.com/Q8sbjL7SY1WwJUbK9" target="_blank">
        <SlSocialSoundcloud className="text-3xl hover:-mt-[3px] text-white/50 hover:text-[#FF7700] duration-100"/>
        </Link>
        
        <Link href="https://open.spotify.com/artist/7bo5EKgXZU2Ra6h8Y04kYm?si=5pFb4gO6SsSP4WtwAyq-uQ" target="_blank">
        <SlSocialSpotify className="text-3xl hover:-mt-[3px] text-white/50 hover:text-[#00E052] duration-100"/>
        </Link>

        <Link href="https://www.instagram.com/dump_official/" target="_blank">
        <SlSocialInstagram className="text-3xl hover:-mt-[3px] text-white/50 hover:text-[#D103FF] duration-100"/>
        </Link>

        <Link href="https://www.tiktok.com/@damp3670" target="_blank">
        <RiTiktokLine className="text-3xl hover:-mt-[3px] text-white/50 hover:text-[#FF03A2] duration-100"/>
        </Link>

      </div>
    );
  }
  
  export default Socials;