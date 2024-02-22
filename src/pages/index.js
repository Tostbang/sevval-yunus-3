import Link from 'next/link';

const MyMenu = () => {
  return (
    <div> 
      <Link href="/home">
        Home
      </Link>
      <br />
      <Link href="/contact">
        Contact
      </Link>
     
    </div>
  );
}

export default MyMenu;
