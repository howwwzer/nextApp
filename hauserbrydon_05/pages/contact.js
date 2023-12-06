// any .js file in the 'pages' directory will automatically
// page at a route matching the file name
//
// this page will be available at 'http://localhost:3000/contact"


// just like in the index.js file, import the Layout component, which
// creates the page's template
import Layout from '../components/layout';


export default function Contact() {
  return (
    <Layout>
			<h1>This is the Contact page</h1>
    </Layout>
  )
}

