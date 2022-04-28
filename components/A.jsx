import Link from "next/Link";

export default function ({ text, href }) {
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  );
}
