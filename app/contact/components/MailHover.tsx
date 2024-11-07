// MailHover.tsx

"use client";

import React, { useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import dotenv from "dotenv";

dotenv.config(); // Chargez les variables d'environnement depuis le fichier .env

interface MailHoverProps {
  onClose: () => void;
}

const MailHover: React.FC<MailHoverProps> = ({ onClose }) => {
  const [object, setObject] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [text, setText] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Récupérez les clés depuis le fichier .env
    const userID = process.env.EMAILJS_USER_ID ?? "";
    const serviceID = process.env.EMAILJS_SERVICE_ID ?? "";
    const templateID = process.env.EMAILJS_TEMPLATE_ID ?? "";

    init(userID); // Initialisez avec la clé d'utilisateur EmailJS

    // Vérifiez si les conditions du formulaire sont remplies
    if (!object || !firstName || !lastName || !text || text.length < 50) {
      console.error("Veuillez remplir tous les champs du formulaire.");
      // Vous pouvez afficher un message d'erreur à l'utilisateur ici, si nécessaire
      return;
    }

    const templateParams = {
      to_email: "a_mmadi@hetic.eu",
      from_email: "a_mmadi@hetic.eu", // Préremplir l'adresse e-mail
      subject: `${object} - ${firstName} ${lastName}`,
      message: text,
    };

    emailjs.send(serviceID, templateID, templateParams).then(
      (response) => {
        console.log("Email sent successfully:", response);
        // Ajoutez une logique supplémentaire ici, comme afficher un message de succès ou fermer le modal
      },
      (error) => {
        console.error("Email sending failed:", error);
        // Ajoutez une logique supplémentaire ici, comme afficher un message d'erreur
      }
    );
  };

  return (
    <div className="fixed flex flex-col bg-black w-full h-3/4 z-30 p-4 border-2 rounded-lg border-stone-500 overflow-auto">
      <div className="flex justify-end">
        <button className="text-white" onClick={onClose}>
          X
        </button>
      </div>
      <form
        onSubmit={sendEmail}
        className="flex flex-col space-y-4 justify-center items-center p-2"
      >
        <label className="text-white" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value="a_mmadi@hetic.eu"
          disabled
          required
          className="border p-2 rounded-lg bg-black text-white w-full"
        />

        <label className="text-white" htmlFor="object">
          Object:
        </label>
        <input
          type="text"
          id="object"
          value={object}
          onChange={(e) => setObject(e.target.value)}
          required
          className="border p-2 rounded-lg bg-black text-white w-full"
        />

        <label className="text-white" htmlFor="firstName">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="border p-2 rounded-lg bg-black text-white w-full"
        />

        <label className="text-white" htmlFor="lastName">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="border p-2 rounded-lg bg-black text-white w-full"
        />

        <label className="text-white" htmlFor="text">
          Message (minimum 50 characters):
        </label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="border p-2 rounded-lg bg-black text-white w-full h-32"
        ></textarea>

        <button
          type="submit"
          className="border-2 rounded-lg text-white py-2 px-4 hover:bg-white hover:text-black uppercase w-full"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default MailHover;
