// this file creates the Nav component
//
// if you pass an array of objects to it, it will 
// make a standard <li> based navigation bar 


// use this Next tool to get the current page URL
import { usePathname } from 'next/navigation'
// use this Next tool to handle some behind the scenes things
// for links to internal pages
import Link from 'next/link';

// any styles can go in a file in the same directory with ".module.css" replacing the ".js"
// these styles will only apply to anything in this component
import styles from './nav.module.css';

// create the Nav component, which is passed a 'links'
// prop with the URL and text for any number of page links
export default function Nav({links}) {

	// get the current URL path
  const pathName = usePathname()

	// set up the nav bar and ul, then loop
	// through the 'links' array and print a <li> around a Next Link component. 
	// if the name of the link text matchs the current page's URL, give it the 'active' class
	return (
		<nav className={styles.navbar}>
		<ul>
		{ 
			links.map((link) => {
				return(
					<li key={link.url}>
          <Link className={`${pathName === link.url ? styles.active : ''}`} href={link.url}>
						{link.title}
					</Link>
					</li>
				)
			})
		}
		</ul>
		</nav>
	)
}
