

import React from "react";

import Link from "next/link";

import CssStyles from "./website.module.css";

console.log(CssStyles , "CSS-Styles")

export default function Website(){
  return(
    <body>
      
      <title>
        <h1>
          Welcome To My Website
        </h1>
      </title>

      <main className="h1">
                <h1 className={CssStyles.h1}>
          Welcome To My Website
        </h1><br />
        <div className="p">
        <p className={CssStyles.p}>
          Below Are Links to Differnt Pages on My Website .
          <br /> Note: (still in development gonna add more features in the future). <br />

          Have a Good Day
        </p></div>
      </main> <br />

      <div >
    <ul >
      <li  className="Link">
        <Link href="/homepage"  className={CssStyles.Link}>Homepage</Link>
      </li>
      <li className="links">
        <Link href="/homepage/about" className={CssStyles.links}>About</Link>
      </li>
        <li className="linkss">
      <Link href="/homepage/about/contact" className={CssStyles.linkss}>Contact</Link>
      </li>
      <li className="linksss">
        <Link href="/homepage/about/contact/services" className={CssStyles.linksss}>Services</Link>
      </li>
    </ul>
      </div>
    </body>
  )
}
