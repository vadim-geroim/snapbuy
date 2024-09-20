import Link from 'next/link';

export default function NavBar() {
    return(
        <nav>
            <Link href="/account">Account</Link>
            <Link href="/order">Order</Link>
            <Link href="/products">Products</Link>
            <Link href="/sell">Sell</Link>
        </nav>
    )
}