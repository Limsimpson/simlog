import { Head } from "../styles/common";

type gnbProps = {
  isOpen: boolean;
};

export default function Gnb({ isOpen }: gnbProps) {
  return (
    <Head.Nav isOpen={isOpen}>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
      </ul>
    </Head.Nav>
  );
}
