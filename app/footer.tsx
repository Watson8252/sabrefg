import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-items-center">
      <Link
        href="/termsandconditions"
      >
        <Image
          src="file.svg"
          alt="termsandconditions"
          width={60}
          height={60}
        />
        Terms & Conditions
      </Link>
      <Link href="/privacypolicy">
        <Image src="lock.svg"
        alt="privacy policy"
        width={60}
        height={60}
        />
        Privacy Policy
      </Link>
    </footer>
  );
}
