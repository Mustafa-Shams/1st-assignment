
import React from "react";

import Link from "next/link";

import CssStyles from "./contact.module.css";

console.log(CssStyles , "CSS-Styles")

export default function Contact(){
    return(
        <body>
            
            <title>
                Contact
            </title>

            <main className="h1">
                <h1 className={CssStyles.h1}>
                    This Is My Contact Page
                </h1>
            </main> <br /><br />

            <div>
                <nav>
                    <ul>
                        <li className="Link">
                            <Link href="/contact/services" className={CssStyles.Link}>Go To Services Page</Link>

                        </li> <br />
                        <li className="Links">
                            <Link href="/" className={CssStyles.Links}>Go Back To 1st Page</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </body>
    )
}