import React from 'react';
import { Link } from 'react-scroll';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollLink = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Si on n'est pas sur la page d'accueil, naviguer d'abord vers elle
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between p-4">
        <div className="text-[1.7rem] font-bold text-blue-900">Psychologue</div>
        <ul className="hidden min-[670px]:flex space-x-10 font-bold mr-[10%]">
          <li>
            {location.pathname === '/' ? (
              <Link
                to="accueil"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer text-blue-900 hover:text-blue-700"
                activeClass="text-blue-700"
              >
                Accueil
              </Link>
            ) : (
              <button
                onClick={() => handleScrollLink('accueil')}
                className="cursor-pointer text-blue-900 hover:text-blue-700"
              >
                Accueil
              </button>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <Link
                to="questions"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer text-blue-900 hover:text-blue-700"
                activeClass="text-blue-700"
              >
                Des questions
              </Link>
            ) : (
              <button
                onClick={() => handleScrollLink('questions')}
                className="cursor-pointer text-blue-900 hover:text-blue-700"
              >
                Des questions
              </button>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <Link
                to="tarifs"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer text-blue-900 hover:text-blue-700"
                activeClass="text-blue-700"
              >
                Tarifs
              </Link>
            ) : (
              <button
                onClick={() => handleScrollLink('tarifs')}
                className="cursor-pointer text-blue-900 hover:text-blue-700"
              >
                Tarifs
              </button>
            )}
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className="text-blue-900 hover:text-blue-700"
              onClick={() => {
                // S'assurer qu'on commence en haut de la page
                window.scrollTo(0, 0);
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}