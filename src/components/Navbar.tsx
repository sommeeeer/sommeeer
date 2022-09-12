import clsx from 'clsx';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';

function NavItem({
  href,
  text,
  router,
}: {
  href: string;
  text: string;
  router: NextRouter;
}) {
  const isActive = router.pathname === (href === '/home' ? '/' : href);

  return (
    <Link href={href === '/home' ? '/' : href}>
      <a
        className={clsx(
          'text-md md:text-lg mr-4 md-mr-6 ',
          isActive
            ? 'text-magicpurple-300'
            : 'hover:text-magicpurple-300 transition-colors duration-300'
        )}
      >
        {text}
      </a>
    </Link>
  );
}

function Navbar() {
  const router = useRouter();
  const links = ['home', 'about', 'FAQ', 'more'];

  return (
    <nav className="flex items-center justify-between max-w-sm mx-auto capitalize px-4">
      {links.map((link, index) => (
        <NavItem
          href={`/${link === 'FAQ' ? 'faq' : link}`}
          text={link}
          router={router}
          key={index}
        />
      ))}
    </nav>
  );
}

export default Navbar;
