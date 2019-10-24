import Link from "next/link";

export default () => (
  <>
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
    <div>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  </>
);
