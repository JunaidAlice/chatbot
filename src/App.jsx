import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import LoginComponent from "./component/Login"; 
import SignUp from "./component/SignUp";
// import Hero from "./component/Hero";
// import Team from "./component/Team";

function App() {
  const routes = [
    { path: '/login',  Element: <LoginComponent /> },
    { path: '/login',  Element: <LoginComponent /> },
    { path: '/',  Element: <LoginComponent /> },

    { path: '/signUp', Element: <SignUp/> },
    { path: '/', Element: <Home/> },
 
  
  ];

  return (
    <div className="bg-white">
      <Router>
    
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.Element} />
          ))}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
