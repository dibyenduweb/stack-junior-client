import { Outlet } from "react-router-dom"
import MainLayout from "./layout/MainLayout/MainLayout"

function App() {
return (
    <div className="max-w-screen-xl mx-auto">
      <MainLayout>
        <Outlet/>
      </MainLayout>
      
    </div>
  )
}

export default App
