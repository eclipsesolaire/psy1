// src/pages/Contact.jsx
import React, { useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlinePhone, MdOutlineAttachEmail } from 'react-icons/md';
import Footer from '../navigation/Footer'

export default function Contact() {
  useEffect(() => {
    // S'assurer qu'on commence en haut de la page
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className="min-h-screen bg-gray-50 pb-10">
      <section className="relative top-[70px] w-full bg-blue-500 h-[170px]">
        <h1 className="text-[2.4rem] pt-2 font-bold text-white pt-8 text-center">
          Contact dès maintenant
        </h1>
        <h2 className="text-center text-white pt-4 text-[1.2rem]">
          Nous sommes à votre disposition pour vous aider à trouver la <br />
          solution à votre problème
        </h2>
      </section>

      {/* Wrapper principal : en colonne sur mobile, en ligne sur desktop */}
      <div className="mt-[100px] flex flex-col lg:flex-row gap-8 px-[2%]">
        {/* Colonne gauche contenant les deux blocs en colonne */}
        <div className="flex flex-col gap-8 lg:w-1/2">
          {/* Bloc coordonnées */}
          <div className="border shadow-lg rounded-lg w-full">
            <h2 className="font-bold text-[1.2rem] ml-[3%] mt-6">Nos coordonnées</h2>
            <div className="ml-[20px] mt-6 space-y-6">
              <ul className="flex gap-4 items-start">
                <li><FaMapMarkerAlt color="blue" size={20} /></li>
                <li>
                  <span>Adresse :</span><br />
                  [votre adresse]
                </li>
              </ul>
              <ul className="flex gap-4 items-start">
                <li><MdOutlinePhone color="blue" size={20} /></li>
                <li>
                  <span>Téléphone :</span><br />
                  [votre numéro de téléphone]
                </li>
              </ul>
              <ul className="flex gap-4 items-start pb-4">
                <li><MdOutlineAttachEmail color="blue" size={20} /></li>
                <li>
                  <span>Email :</span><br />
                  [votre adresse email]
                </li>
              </ul>
            </div>
          </div>

          {/* Bloc horaires */}
          <div className="bg-white p-8 rounded-lg shadow-lg border w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Horaires d'ouverture</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Lundi - Vendredi</span>
                <span className="font-semibold">9h00 - 19h00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Samedi</span>
                <span className="font-semibold">9h00 - 17h00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dimanche</span>
                <span className="font-semibold text-red-600">Fermé</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Urgences :</strong> En cas d'urgence psychologique, contactez le 15 ou rendez-vous aux urgences psychiatriques les plus proches.
              </p>
            </div>
          </div>
        </div>

        {/* Formulaire à droite */}
        <div className="lg:w-1/2 w-full px-0 border shadow-lg rounded-lg pl-4 pr-4">
          <h2 className="text-xl font-bold text-blue-900 mt-4 mb-10 text-center">Envoyer un message</h2>
          <form className="flex flex-col gap-4 mx-auto w-full max-w-xl pb-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
              <input id="name" type="text" placeholder="Votre nom" className="border p-2 rounded-lg" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input id="email" type="email" placeholder="votre@email.com" className="border p-2 rounded-lg" />
            </div>
            <div>
            <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">Sujet *</label>
                  <select 
                    id="sujet" 
                    name="sujet" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="rendez-vous">Prise de rendez-vous</option>
                    <option value="information">Demande d'information</option>
                    <option value="urgence">Situation d'urgence</option>
                    <option value="autre">Autre</option>
                  </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold">Message *</label>
              <textarea id="message" rows={5} placeholder="Votre message..." className="border p-2 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
}
