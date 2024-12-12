import Image from "next/image";

export default function Header() {
  return(
   <header>
      <Image 
          className="justify-start"
          src="/banner_no_drop_shadow.png"
          alt="Sabrefgbanner"
          width={180}
          height={90}
        />
   </header> 
  );
}
