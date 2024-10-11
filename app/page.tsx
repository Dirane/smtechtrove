import Image from "next/image";

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to SM Tech Trove</h1>
      <nav>
        <ul>
          <li><Link href="/signup">Sign Up</Link></li>
          <li><Link href="/login">Log In</Link></li>
          <li><Link href="/events">View Events</Link></li>
          <li><Link href="/profile">My Profile</Link></li>
        </ul>
      </nav>
    </div>
  );
}
