import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Eduardo Diniz" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa ducimus necessitatibus ab, esse et ratione odit nulla itaque quibusdam, maxime unde tenetur doloremque repudiandae excepturi animi nostrum? Ex, placeat?" 
      />
    </div>
  )
}