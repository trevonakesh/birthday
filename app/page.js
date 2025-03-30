'use client';

import './globals.css'
import Head from 'next/head';
import Card from './components/Card';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Add confetti effect when the page loads
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
    script.onload = () => {
      const duration = 5 * 1000; // 5 seconds
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Black Background */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
        <Head>
          <title>Happy 19th Birthday!</title>
        </Head>

        {/* Heart Background */}
        <div className="absolute inset-0 z-0">
          {[...Array(100)].map((_, index) => (
            <div
              key={index}
              className="absolute animate-blink text-red-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 3 + 1}rem`, // Random heart size
                animationDelay: `${Math.random() * 2}s`, // Random delay for blinking
                transform: `rotate(${Math.random() * 360}deg)`, // Random rotation
              }}
            >
             💗
            </div>
          ))}
        </div>

        {/* Main Content */}
        <main className="relative z-10 space-y-6">
          <h1 className="text-6xl font-bold text-pink-700 animate-bounce">Happy 19th Birthday!</h1>
          <p className="text-2xl text-purple-200">
            To my amazing girlfriend, <br />
            You light up my world every single day. ❤️
          </p>
          <p className="text-xl text-gray-200">
            I hope this year brings you endless joy, love, and unforgettable memories.
          </p>
          <Card />
        </main>

        {/* Footer */}
        <footer className="mt-10 text-sm text-gray-400 relative z-10">
          Made with ❤️ by your baby.
        </footer>
      </div>
    </>
  );
}