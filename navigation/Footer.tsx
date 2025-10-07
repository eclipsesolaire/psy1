import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="mt-[50px] bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <RouterLink to="/" className="inline-block">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Psy2</h2>
            </RouterLink>
            <p className="text-gray-300 mb-6 max-w-md">
              Votre partenaire pour un bien-être mental et émotionnel. Nous vous accompagnons 
              dans votre parcours de développement personnel avec des soins personnalisés et des méthodes validées.
            </p>
            <div className="flex space-x-4">
              {/* Icônes sociales (exemple) */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">FB</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">IG</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="accueil"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer text-gray-300 hover:text-white transition-colors"
                >
                  Accueil
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="questions"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer text-gray-300 hover:text-white transition-colors"
                >
                  Des questions
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="tarifs"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer text-gray-300 hover:text-white transition-colors"
                >
                  Tarifs
                </ScrollLink>
              </li>
              <li>
                <RouterLink
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </RouterLink>
              </li>
            </ul>
          </div>

          {/* Contact infos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                rue : [votre rue]
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                numéro : [votre numéro]
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                email : [votre mail]
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 [Votre Nom]. Tous droits réservés. | 
            <a href="#" className="text-gray-400 hover:text-white transition-colors ml-1">Politique de confidentialité</a> | 
            <a href="#" className="text-gray-400 hover:text-white transition-colors ml-1">Mentions légales</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
