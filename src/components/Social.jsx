import { Github, Instagram, LinkedIn, Tiktok, Twitter, Youtube } from "./Icons";
import Item from "./Item";  // 或者 ./Social/Item，看你要用哪个

export default function Social() {
  return (
    <div className="flex gap-2">
      <Item icon={Github} />
      <Item icon={Instagram} />
      <Item icon={LinkedIn} />
      <Item icon={Tiktok} />
      <Item icon={Twitter} />
      <Item icon={Youtube} />
    </div>
  );
}
