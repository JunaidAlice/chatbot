import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import LoginComponent from "./component/Login"; 
import Newaccount from "./component/Newaccount";
import Hero from "./component/Hero";
// import Team from "./component/Team";

function App() {
  const routes = [
    { path: '/login',  Element: <LoginComponent /> },
    { path: '/login',  Element: <LoginComponent /> },
    { path: '/newaccount', Element: <Newaccount/> },
    { path: '/', Element: <Home /> },
    { path: '/hero', Element: <Hero /> },
    // { path: '/team', Element: <Team /> },
  
  ];

  return (
    <div className="">
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
