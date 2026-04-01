import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Load initial language from localStorage or default to DE
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('siteLang') || 'DE';
  });

  // Persist language choice
  useEffect(() => {
    localStorage.setItem('siteLang', language);
    // Optional: Update html lang attribute for SEO/Accessibility
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  // Translation helper: returns German or English
  const t = (deText, enText) => {
    return language === 'DE' ? deText : (enText || deText);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
