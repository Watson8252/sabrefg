import Image from "next/image";
import Link from "next/link";
import './header.css';

export default function Header() {
  return(
    <header className="header">
      <Link href="/">
        <Image 
          className="justify-start"
          src="/banner_no_drop_shadow.png"
          alt="Sabrefgbanner"
          width={180}
          height={90}
        /> 
      </Link>
      <nav>
        <Link href="/shop/ammo">Ammo</Link>
        <Link href="/shop/parts">Parts</Link>
        <Link href="/shop/designs">Designs</Link>
      </nav>
    </header> 
  );
}
