import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-end h-12 px-5">
      <Link href="/">
        <a className="w-32 py-1 mr-4 leading-5">Home</a>
      </Link>
      <Link href="/essays/test">
        <a className="w-32 py-1 leading-5">Essays</a>
      </Link>
    </div>
  )
}

export default Navbar
