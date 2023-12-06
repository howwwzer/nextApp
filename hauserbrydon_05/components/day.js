//practice example from class
import styles from './day.module.css';

const now = new Date()
console.log(now).getDate()

export default function Day({name}) {

  console.log(text)
	
	return (
    <h1 className={styles.dayThing}>
    Hi there {name}! Today is {now.getMonth()}/{now.getDate()}.
    </h1>
	)

}
//add to layout to make this work
