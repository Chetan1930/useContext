import {AuthProvider} from './Context/AuthContext'
import Dashboard from './Component/pages/Dashboard'



function App() {

  return (
    <>
      <AuthProvider>
        <Dashboard/>
        </AuthProvider>      
    </>
  )
}

export default App
