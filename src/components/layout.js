import * as React from 'react'
import {Link} from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'

const Layout = ({ pageeTitle, children }) => {
    return (
        <div className={container}>
            <title>{pageeTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About</Link>
                    </li>
                </ul>
                <main>
                    <h1 className={heading}>{pageeTitle}</h1>
                    {children}
                </main>
            </nav>
        </div>
    )
}

export default Layout