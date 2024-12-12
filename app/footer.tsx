import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-end justify-items-center">
      <Link
        href="/termsandconditions"
      >
        <Image
          src="file.svg"
          alt="termsandconditions"
          width={30}
          height={30}
        />
        Terms & Conditions
      </Link>
      <Link href="/privacypolicy">
        <Image src="lock.svg"
        alt="privacy policy"
        width={30}
        height={30}
        />
        Privacy Policy
      </Link>
    </footer>
  );
}
