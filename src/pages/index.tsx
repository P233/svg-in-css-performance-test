import Link from "next/link";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/100-svg-in-dom">100 SVGs in DOM</Link>
        </li>
        <li>
          <Link href="/100-svg-in-css">100 SVGs in CSS</Link>
        </li>

        <li>
          <Link href="/1k-svg-in-dom">1k SVGs in DOM</Link>
        </li>
        <li>
          <Link href="/1k-svg-in-css">1k SVGs in CSS</Link>
        </li>

        <li>
          <Link href="/10k-svg-in-dom">10k SVGs in DOM</Link>
        </li>
        <li>
          <Link href="/10k-svg-in-css">10k SVGs in CSS</Link>
        </li>

        <li>
          <a href="https://github.com/P233/svg-in-css-performance-test">GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
