import Link from 'next/link';
import NavBar from './NavBar';
import styled from 'styled-components';

const Logo = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    background: deeppink;
    transform: skew(-7deg);

    a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        padding: 0.5rem 1rem;
    }
`;

const HeaderStyles = styled.header`
    .bar {
        border-bottom: 10px solid var(--grey, black);
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: center;
    }

    .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 10px solid var(--grey, black);
    }
`;

export default function Header() {
    return(
        <HeaderStyles>
            <div className="bar">
                <Logo>
                    <Link href="/">SnapBuy</Link>
                </Logo>
            </div>
            <div className="sub-bar">
                Search
            </div>
            <NavBar />
        </HeaderStyles>
    )
}


