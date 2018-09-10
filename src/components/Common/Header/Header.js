import React from 'react';
import './Header.css';

const Header = (props) => {

  return (<header>
    <nav
        className="navbar navbar-expand-md navbar-light navbar-laravel b-navigation-bar">
      <div className="container">
        <a className="navbar-brand" href="/">

        </a>
        <button className="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/program" className="b-nav-link">
                Programa
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </header>);

};

export default Header;

// export default class Header extends React.Component {
//
//   render() {
//     return <header>
//       <nav
//           className="navbar navbar-expand-md navbar-light navbar-laravel b-navigation-bar">
//         <div className="container">
//           <a className="navbar-brand" href="/">
//
//           </a>
//           <button className="navbar-toggler" type="button"
//                   data-toggle="collapse" data-target="#navbarSupportedContent"
//                   aria-controls="navbarSupportedContent" aria-expanded="false"
//                   aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <a href="/program" className="b-nav-link">
//                   Programa
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="/sponsors" className="b-nav-link">
//                   Patrocinadores
//                 </a>
//               </li>
//             </ul>
//
//
//             <ul className="navbar-nav ml-auto">
//
//               {/* Authentication Links  */}
//
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Iniciar sesión</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Registro</a>
//               </li>
//
//               <li className="nav-item dropdown">
//                 <a id="navbarDropdown" className="nav-link dropdown-toggle"
//                    href="#" role="button"
//                    data-toggle="dropdown" aria-haspopup="true"
//                    aria-expanded="false">Username <span
//                     className="caret"></span>
//                 </a>
//
//                 <div className="dropdown-menu dropdown-menu-right"
//                      aria-labelledby="navbarDropdown">
//                   <a className="dropdown-item" href="/logout">
//                     Cerrar sesión
//                   </a>
//                 </div>
//               </li>
//
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>;
//   }
//
// }
