import Link from 'next/link';

const MyMenu = () => {
  return (
    <div>
      <Link href="/about">
        Home
      </Link>
      <Link href="/contact">
        Contact
      </Link>
    </div>
  );
}

export default MyMenu;
