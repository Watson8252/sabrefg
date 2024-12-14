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
          alt="Sabre Firearms Group, LLC."
          width={160}
          height={80}
        /> 
      </Link>
      <nav>
        <Link href="/shop/ammo">Ammo</Link>
        <Link href="/shop/parts">Parts</Link>
        <Link href="/shop/designs">Designs</Link>
      </nav>

      <Link href="/">
        <Image
          className="filter-white"
          src="/shopping_cart.svg"
          alt="Cart"
          width={40}
          height={40}
        />
      </Link>

    </header> 
  );
}
