import Link from "next/link"

export default function Home(){
  return(
    <div>
      <nav className="navbar">
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contect">Contect</Link>
          <Link href="/service">Sevice</Link>
          <Link href="/contect/contect-us">Nested page</Link>
        </div>
      </nav>
    </div>
  )
}