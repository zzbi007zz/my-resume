import React from 'react';
import CareerTimeline from './components/CareerTimeline';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <header className="App-header py-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          To Hoai Bao - Automation Tester
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
          Experienced Software Tester with over 6 years of expertise in designing and implementing 
          robust test automation frameworks across diverse industries.
        </p>
      </header>
      <main className="container mx-auto px-4 py-8">
        <CareerTimeline />
      </main>
      <footer className="text-center py-4 text-gray-600">
        © 2024 To Hoai Bao. All rights reserved.
      </footer>
    </div>
  );
}

export default App;