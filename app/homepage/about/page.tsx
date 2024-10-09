
import React from "react";

import Link from "next/link";

import CssStyles from "./about.module.css";

console.log(CssStyles , "CSS-Styles")

export default function About(){
    return(
        <body>
            
            <title>
                About
            </title>

            <main className="h1">
                <h1 className={CssStyles.h1}>
                    This Is My About Page
                </h1>
            </main> <br /><br />

            <div>
                <nav>
                    <ul>
                        <li className="Link">
                            <Link href="/contact" className={CssStyles.Link}>Go To Contact Page</Link>

                        </li><br />
                        <li className="Links">
                            <Link href="/" className={CssStyles.Links}>Go Back To 1st Page</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </body>
    )
}