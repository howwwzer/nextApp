/*

This is a React component named Layout. It is essentially the outer wrapper for
the HTML document created by the App, and is where any shared UI elements are
placed.

If you put your header, nav, footer, sidebar and other things in this file, 
any page that uses the Layout component has access to them. 

This component:

1. sets up a number of import statements to get access to other information

2. establishes metadata that will be available to every page 

3. creates and array of objects for all the site navigation links

4. creates and exports the actual Layout function


*/


// import the <Head> component from Next which lets you change page metadata
// like the title
import Head from 'next/head';


// import  the <Nav> and <Head> components from this same directory. React
// components are always referrred to with Uppercase first letters so as not to
// confuse them with HTML elements
import Nav from './nav.js';
import Hello from './hello.js';
import Day from './day.js';

// import all the CSS rules from the layout.module.css file - any styles in
// that document will be applied to the Layout component and any of its
// children
import styles from './layout.module.css';



// site metadata, this can be anything you want or could be loaded from another
// file
const metadata = {
	title: 'Site Title',
	description: 'This is my site'
}


// if you have a small number of known links this is a way to do it; Next does
// have more advanced ways to handle link names dynamically.
const siteLinks = [
	{ "url" : "/", "title" : "Home" },
	{ "url" : "/about", "title" : "About" },
	{ "url" : "/contact", "title" : "Contact" },
]



// this is the syntax for creating a React component named "Layout". If you
// wrap the <Layout> and </Layout> tags in code somewhere, whatever is between
// those tags will be availabe inside here in the variable named "children"
export default function Layout({ children }) {

	return (
		<div className={styles.container}>

		<Head>
			<title>{metadata.title}</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<header className={styles.header}>
			<h1>{metadata.title}</h1>
			<h2>{metadata.description}</h2>
		</header>

		<Nav links = {siteLinks} />

		<Hello />

		<Hello text = "I passed this text as a prop"/>

		<main>{children}</main>

		<Day name="Jeff" />

		</div>
	)
}
