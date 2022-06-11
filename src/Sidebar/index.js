import React from 'react'
import styles from "./Sidebar.module.css"
export default function Sidebar(props) {
  console.log(props.categories);
  return (
    <div className={styles.sidebar}>
      {props.categories && props.categories.map(elem=>(
        <>
          <p id={elem.id}>{elem.name}</p>
        </>
      ))}
    </div>
  )
}


