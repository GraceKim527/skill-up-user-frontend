/* 
  작성자 : 김재혁
  작성일 : 2025-08-21
  최종 수정일 : 2025-08-21
*/

import Link from "next/link";

export default function Header() {
  return (
    <header id="header">
      <div className="inner">
        <h1>Skill Up</h1>
        <nav>
          <ul className="gnb">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}