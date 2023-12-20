import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import './globals.css';

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <h1>
        Welcome to Schools.io
      </h1>
      <div className="home-btn">
        <p><Link href='/addschool'>Add School</Link></p>
        <p><Link href='/schools'>See Schools</Link></p>
      </div>
    </div>
  )
}
