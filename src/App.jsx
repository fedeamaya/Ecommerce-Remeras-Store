import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return <div>
    <NavBar />
    <ItemListContainer greeting="Bienvenido a mi E-Commerce"/>
  </div>
}

export default App