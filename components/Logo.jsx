"use client";

import Image from "next/image";

const Logo = () => {
    return (
      <div className="w-[100px] h-[100px] xl:w-[120px] xl:h-[120px] absolute justify-center items-center">
        <Image
                src="/assets/images/Logo.png"
                sizes="full"
                priority
                quality={100}
                fill alt="logo"
                className="object-contain rounded-full"
                style={{ filter: "invert(1)" }}/>
      </div>
    );
  }
  
  export default Logo;