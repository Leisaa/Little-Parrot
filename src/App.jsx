import { Routes, Route, Link  } from "react-router-dom";

import Auth from './pages/Auth'
import Main from './pages/Main'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
