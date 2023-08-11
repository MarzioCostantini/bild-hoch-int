'use client';

import Link from 'next/link'
import { getLocalStorage, setLocalStorage } from '../lib/storageHelper';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function CookieBanner({text, akzeptierenbtn, ablehnenbtn}){
    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect (() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)

        // console.log("localStorg::",  getLocalStorage("cookie_consent", null));
        
        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])
    
    
    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent)

        //For Testing
        // console.log("Cookie Consent: ", cookieConsent)

    }, [cookieConsent]);


    // Cookiecheck
    const [showDiv, setShowDiv] = useState(false);

    
    useEffect(() => {
        // Stellen Sie sicher, dass der Code nur clientseitig ausgeführt wird
        if (typeof window !== 'undefined') {
          // Überprüfen, ob der Cookie "_ga" gesetzt ist
          const isCookieSet = document.cookie.split(';').some((item) => item.trim().startsWith('_ga='));
    
          // Entscheiden, ob das div angezeigt werden soll oder nicht
          setShowDiv(isCookieSet);
        }
      }, []);


// HANDE BTNKLICKS
const akzeptieren = () => {
    setCookieConsent(true)
    setShowDiv(true)
}

const ablehnen = () => {
    setCookieConsent(false)
    setShowDiv(true)
}

    return (
        <>
        {showDiv ? (
       null
        ) : (
        <section className='cookie' >
            <article>
                <Link href="/datenschutz"> {text}</Link>       
            <div>
             <button className='text-btn' onClick={ablehnen}>{ablehnenbtn}</button>
             <button className='btn'  onClick={akzeptieren}>{akzeptierenbtn}</button>
            </div>    
            </article>
            
        </section>
        )}
        </>
    )}
    