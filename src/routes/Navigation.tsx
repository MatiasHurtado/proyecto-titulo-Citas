import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Footer } from "../pages/FooterPage";
import { FrontPage } from "../pages/FrontPage";
import { ListCitas } from '../pages/ListCitas';
import logo from '../logo.svg';
export const Navigation = () => {
   return (

      <BrowserRouter>
         <div className="contenedor">

    
            <nav className="header">
               <ul>
               <img src={ logo } alt="React Logo"  style={{
                     width: "70px"
                  }}/>

                  <li>
                     <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''}>Tus Citas</NavLink>
                  </li>
                  <li>
                     <NavLink to="/home1" className={({ isActive }) => isActive ? 'nav-active' : ''}>Ver Todas Las Citas</NavLink>
                  </li>
                  <li>
                     <NavLink to="/home2" className={({ isActive }) => isActive ? 'nav-active' : ''}>Crear Cita</NavLink>
                  </li>

               </ul>
            </nav>

            <Routes>
               <Route path="/" 
               element={<><FrontPage /><ListCitas /><Footer /></>
                         } />
               <Route path="/home1" element={<h1>Home Page1</h1>} />
               <Route path="/home2" element={<h1>Home Page2</h1>} />
               <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
         </div>
      </BrowserRouter>

   )
}
