
import React from "react";

import Link from "next/link";

import CssStyles from "./services.module.css";

console.log(CssStyles , "CSS-Styles")

export default function Services(){
    return(
        <body>
            
            <title>
                Services
            </title>

            <main className="h1">
                <h1 className={CssStyles.h1}>
                    This Is My Services Page
                </h1>
            </main> <br /><br />

            <div>
                <nav>
                    <ul>
                        <li className="Link">
                            <Link href="/" className={CssStyles.Link}>Go To 1st Page</Link>

                        </li>
                        
                    </ul>
                </nav>
            </div>
        </body>
    )
}