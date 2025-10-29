import { useEffect } from 'react';
import { FiUser, FiSmile, FiUsers, FiBookOpen, FiVideo } from 'react-icons/fi';
import { NavLink, useLocation } from 'react-router-dom';
import Footer from '../navigation/Footer'
import psychologues from '../psychologues.png';
import questions from '../question-jpg.jpg';

export default function Accueil() {
  const location = useLocation();
  

  useEffect(() => {
    // Si on arrive avec un état de scroll, faire défiler vers la section
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.state]);

  return (
    <>
      <div className="pt-16 bg-white">
        {/* Section Accueil */}
        <section id="accueil" className="flex flex-col md:flex-row bg-white mt-2 px-4">
        <div className="md:w-[40%] w-full p-8 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-[1.6rem] font-bold text-blue-900 mb-6">Bienvenue</h1>
          <p className="text-gray-700 text-[1rem] leading-relaxed mb-6">
            Je suis <span className="font-semibold text-blue-900">[Nom & Prénom]</span>, psychologue diplômé(e) à <span className="text-blue-900 font-semibold">[votre établissement]</span>, à votre écoute pour vous accompagner dans votre parcours personnel.
            <br /><br />
            Que vous traversiez une période difficile ou souhaitiez approfondir votre connaissance de soi, ce site vous présente mes services, ma démarche, et des ressources pour avancer à votre rythme.
            <br /><br />
            N'hésitez pas à me contacter pour tout renseignement ou pour prendre rendez-vous.
          </p>
          <NavLink
            to="/contact"
            className="bg-blue-500 w-44 rounded-lg text-white h-12 flex items-center justify-center mt-4 hover:bg-blue-600 transition"
          >
            Prendre rendez-vous
          </NavLink>
          {/* Ajoute un bouton scroll vers la section tarifs */}
          
        </div>

        <div className="md:w-[60%] w-full flex justify-center items-center p-8">
          <img
            src={psychologues}
            alt="Illustration psychologue"
            className="w-full max-w-[600px] h-auto rounded-xl object-cover"
            style={{ backgroundColor: '#eaeffb' }}
          />
        </div>
        </section>

      {/* Section À quoi ça sert de consulter ? */}
      <section id="questions" className="flex flex-col-reverse md:flex-row bg-white mt-10 px-4">
        <div className="w-full p-4 md:w-1/2 flex justify-center items-center">
          <img
            src={questions}
            alt="Illustration questions"
            className="h-auto rounded-lg object-contain"
            style={{ backgroundColor: '#eaeffb' }}
          />
        </div>

        <div className="w-full px-4 md:w-1/2">
          <h1 className="text-2xl font-bold text-blue-900 mb-10">
            À quoi ça sert de consulter ?
          </h1>
          <div className="space-y-4 text-gray-700 text-base leading-relaxed">
            <p><strong>Pourquoi consulter un psychologue ?</strong><br /> Pour mieux comprendre vos émotions, gérer votre stress ou anxiété, ou simplement pour mieux vous connaître.</p>
            <p><strong>Quels problèmes peut-on aborder ?</strong><br /> Anxiété, deuil, burn-out, conflits, orientation de vie, dépression, etc.</p>
            <p><strong>Comment se déroule une séance ?</strong><br /> C’est un espace d’écoute et d’expression libre, sans jugement.</p>
            <p><strong>Combien de séances faut-il ?</strong><br /> Le nombre dépend de vos objectifs et de votre rythme personnel.</p>
            <p><strong>Comment prendre rendez-vous ?</strong><br /> Cliquez sur “Contact” pour toutes les infos utiles.</p>
          </div>
        </div>
        </section>

      {/* Section Tarifs */}
      <section id="tarifs" className="mt-[90px] w-full bg-gray-200 py-6 ">
        <h1 className="text-2xl font-bold text-blue-900 text-center mt-8 mb-10">Mes tarifs</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            { icon: <FiUser size={40} />, title: 'Consultation adulte' },
            { icon: <FiSmile size={40} />, title: 'Consultation enfant' },
            { icon: <FiUsers size={40} />, title: 'Consultation de couple' },
            { icon: <FiBookOpen size={40} />, title: 'Tarif étudiant' },
            { icon: <FiVideo size={40} />, title: 'Téléconsultation' },
            { icon: <FiUsers size={40} />, title: 'Thérapie de groupe' }
          ].map((item, index) => (
            <li key={index} className="bg-white p-6 rounded shadow flex flex-col items-center h-[180px] text-center text-sm">
              <div className="text-blue-700 mb-2">{item.icon}</div>
              <h2 className="font-bold text-blue-900 mb-1">{item.title}</h2>
              <p className="text-gray-600 mb-auto">[Brève description ici]</p>
              <p className="text-blue-700 font-bold mt-4">[vos prix]</p>
            </li>
          ))}
        </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}
