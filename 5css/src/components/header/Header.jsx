import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={styles.header}>i am header <button className={styles.btn}>button</button></h1>
    </div>
  )
}

export default Header