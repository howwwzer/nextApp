// this file creates the Hello component
//
// if you pass text to it, it will print that text 
//
// if you DON'T pass anything, it will print "Hello!"


// any styles can go in a file in the same directory with ".module.css" replacing the ".js"
// these styles will only apply to anything in this component
import styles from './hello.module.css';

// this is the react code that makes the component; 
// it allows an optional 'text' prop to be passed in
export default function Hello({text}) {

	// print the prop to the console...
  console.log(text)
	
	// return the component 
	// this one creates an <h1> element, gives it the class name of "mainHello"
	// corresponding to one in the .module.css file, and uses a JavaScript
	// ternary operatory to print the value of the "text" prop if that exists, or
	// the string "Hello!" if it does not
	return (
    <h1 className={styles.mainHello}>{ text ? text : "Hello!" }</h1>
	)

}
