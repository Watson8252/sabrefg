import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
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
      <link></link>
    </footer>
  );
}
