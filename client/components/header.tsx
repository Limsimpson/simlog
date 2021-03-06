import { useState } from "react";
import Link from "next/link";
import Gnb from "./gnb";
import { Head } from "../styles/common";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Head.Wrap>
      <div className="center flex">
        <h1>
          <Link href="/">
            <a>Simlog</a>
          </Link>
        </h1>
        {}
        <Link href="/signin">
          <a className="btn-login">로그인</a>
        </Link>
        <Head.Menu className={isOpen ? "open" : undefined} onClick={onClick}>
          <span />
          <span />
          <span />
          <span />
        </Head.Menu>
      </div>
      <Gnb isOpen={isOpen} />
    </Head.Wrap>
  );
}
