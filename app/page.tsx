import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2>Shop Ammo, Parts, and Designs.</h2>
        <div className="flex flex-row justify-items-center">
          <div>
            <Link href="/shop/ammo">
              <Image 
                src="/300blk.jpeg"
                alt="300 blackout"
                width={200}
                height={300}
              />
              Ammo
            </Link>
          </div>
          <div>
            <Link href="/shop/parts">
              <Image 
                src="/coming_soon_w.jpg"
                alt="Coming Soon"
                width={200}
                height={300}
              />
              Parts
            </Link>
          </div>
          <div>
            <Link href="/shop/designs">
              <Image 
                src="/ps90_stock_extended.png"
                alt="ps90 stock extended"
                width={200}
                height={300}
              />
              Designs
            </Link>
          </div>
        </div>
      </main>     
    </div>
  );
}
