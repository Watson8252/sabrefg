import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";
import Header from "./header"; 

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
     <Header />
      <main className="flex flex-col gap-8 row-start-2 min-h-screen items-center sm:items-start">
        <h2>Shop Ammo, Parts, and Designs.</h2>
        <div className="flex flex-row justify-items-center">
          <div className="p-8">
            <Link href="/shop/ammo">
              <Image 
                src="/300blk.jpeg"
                alt="300 blackout"
                width={219}
                height={300}
              />
              Ammo
            </Link>
          </div>
          <div className="p-8">
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
            <div className="p-8">
              <Link href="/shop/designs">
                <Image 
                  src="/ps90_stock_extended.png"
                  alt="ps90 stock extended"
                  width={230}
                  height={300}
                />
                Designs
              </Link>
            </div>
          </div>
        </main> 
      <Footer />
    </div>
  );
}
