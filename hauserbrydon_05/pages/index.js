// this is the main, home, index page

// import the Layout component, which creates the page's template
import Layout from '../components/layout';


// creates the Home component, which is wrapped inside
// of the Layout component
export default function Home() {
  return (
    <Layout>
			<h1>This is the Home page</h1>
    </Layout>
  )
}

