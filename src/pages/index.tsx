import Link from "next/link";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/svg-in-dom">SVG in DOM</Link>
        </li>
        <li>
          <Link href="/svg-in-css">SVG in CSS</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
