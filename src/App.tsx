import { GiftList } from "./components/GiftList/GiftList";
import { NavBar } from "./components/Navbar/NavBar";

function App() {
  
  return (
    <>
      <NavBar  />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <GiftList  />
      </div>
    </>
  )
}

export default App
