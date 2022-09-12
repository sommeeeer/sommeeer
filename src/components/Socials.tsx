import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';

export default function Socials() {
  return (
    <>
      <div className="flex gap-2">
        <a
          href="https://github.com/sommeeeer/"
          title="GitHub"
          target="_blank"
          rel="noreferrer"
          className="rounded-full hover:text-magicpurple-300 hover:translate-y-[-2px] transition-colors duration-300"
        >
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a
          href="mailto:magnus@dahleide.com"
          title="magnus@dahleide.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-full hover:text-magicpurple-300 hover:translate-y-[-2px] transition-colors duration-300"
        >
          <MdOutlineMailOutline className="w-8 h-8" />
        </a>
      </div>
    </>
  );
}
