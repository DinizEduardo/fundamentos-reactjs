import { Post } from "./Post"
import { Header } from "./components/Header"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Eduardo Diniz" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa ducimus necessitatibus ab, esse et ratione odit nulla itaque quibusdam, maxime unde tenetur doloremque repudiandae excepturi animi nostrum? Ex, placeat?" 
          />
        </main>
      </div>
      
    </div>
  )
}