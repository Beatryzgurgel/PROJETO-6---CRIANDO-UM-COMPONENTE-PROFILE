import Profile from "./components/Profile"

export default function App(){
  return (
    <>
    <Profile 
    nome="John Lennon"
    idade="40"
    profissao="Programador"
    foto="https://th.bing.com/th/id/OIP.lA6VZZBaXOLVEbvqekhr9wHaHa?rs=1&pid=ImgDetMain"
     />
     <Profile
     nome="Howard Wolowitz"
     idade="27"
     profissao="QA"
     foto="https://th.bing.com/th/id/OIP.2uc32Z5XiGeFbTZYKRgKbgHaHN?rs=1&pid=ImgDetMain"
      />
      <Profile
      nome="Paul McCartney"
      idade="82"
      profissao="secretario"
      foto="https://th.bing.com/th/id/OIP.xSOqHvl8ZhKe5E3PA6VEwgHaHX?rs=1&pid=ImgDetMain"
      />
    </>
  )
}
