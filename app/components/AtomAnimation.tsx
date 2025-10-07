'use client';

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AtomAnimation = () => {
  const { isDark } = useTheme();

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Nucleus */}
      <div className={`absolute w-8 h-8 rounded-full shadow-lg animate-pulse-slow ${
        isDark 
          ? 'bg-gradient-to-br from-white to-slate-100' 
          : 'bg-gradient-to-br from-slate-800 to-slate-600'
      }`}>
        <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${
          isDark 
            ? 'bg-gradient-to-br from-white to-slate-200' 
            : 'bg-gradient-to-br from-slate-700 to-slate-500'
        }`}></div>
      </div>

      {/* First Orbital Ring */}
      <div className={`absolute w-40 h-40 border rounded-full animate-spin-slow opacity-60 ${
        isDark ? 'border-slate-300' : 'border-slate-300'
      }`}>
        {/* First Electron */}
        <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full shadow-md ${
          isDark 
            ? 'bg-gradient-to-br from-white to-slate-200' 
            : 'bg-gradient-to-br from-slate-600 to-slate-500'
        }`}>
          <div className={`absolute inset-0 rounded-full animate-ping opacity-30 ${
            isDark ? 'bg-white' : 'bg-slate-400'
          }`}></div>
        </div>
      </div>

      {/* Second Orbital Ring */}
      <div className={`absolute w-60 h-60 border rounded-full animate-spin-reverse opacity-60 ${
        isDark ? 'border-slate-300' : 'border-slate-300'
      }`} style={{ animationDuration: '8s' }}>
        {/* Second Electron */}
        <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full shadow-md ${
          isDark 
            ? 'bg-gradient-to-br from-white to-slate-200' 
            : 'bg-gradient-to-br from-slate-600 to-slate-500'
        }`}>
          <div className={`absolute inset-0 rounded-full animate-ping opacity-30 ${
            isDark ? 'bg-white' : 'bg-slate-400'
          }`}></div>
        </div>
      </div>

      {/* Third Orbital Ring - for the incoming electron */}
      <div className={`absolute w-80 h-80 border rounded-full animate-spin-slow opacity-40 ${
        isDark ? 'border-slate-300' : 'border-slate-300'
      }`} style={{ animationDuration: '12s' }}>
        {/* Third Electron - appears with delay and special animation */}
        <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full shadow-lg animate-charge-in ${
          isDark 
            ? 'bg-gradient-to-br from-white to-slate-100' 
            : 'bg-gradient-to-br from-slate-700 to-slate-600'
        }`}>
          <div className={`absolute inset-0 rounded-full animate-ping opacity-40 ${
            isDark ? 'bg-white' : 'bg-slate-500'
          }`}></div>
          {/* Charging effect */}
          <div className={`absolute -inset-2 border-2 rounded-full animate-pulse opacity-50 ${
            isDark ? 'border-white' : 'border-slate-500'
          }`}></div>
        </div>
      </div>

      {/* Energy Waves */}
      <div className={`absolute inset-0 rounded-full border-2 opacity-20 animate-ping ${
        isDark ? 'border-slate-300' : 'border-slate-300'
      }`} style={{ animationDuration: '3s' }}></div>
      <div className={`absolute inset-4 rounded-full border opacity-15 animate-ping ${
        isDark ? 'border-slate-400' : 'border-slate-400'
      }`} style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
    </div>
  );
};

export default AtomAnimation;

