
import React from "react";

import Link from "next/link";

import CssStyles from "./homepage.module.css";

console.log(CssStyles , "CSS-Styles")

export default function Homepage(){
    return(
        <body>
            
            <title>
                Homepage
            </title>

            <main className="h1">
                <h1 className={CssStyles.h1}>
                    This Is My HomePage
                </h1>
            </main> <br /><br />

            <div>
                <nav>
                    <ul>
                        <li className="Link">
                            <Link href="/homepage/about" className={CssStyles.Link}>Go To About Page</Link>

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