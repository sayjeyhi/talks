"use client"

import { TALKS } from "./talks";

export function App() {
  return (
    <div className="bg-gray-900 dark:bg-gray-900 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-100 dark:text-gray-100 mt-20 mb-30 text-center">Talks Timeline</h1>

        <div className="relative">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-700 "></div>

          <ul className="space-y-10 md:space-y-8">
            {TALKS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((talk, index) => (
              <li key={index} className="group relative flex items-start">
                <div
                  className="absolute left-0 w-4 h-4 bg-blue-600 dark:bg-gray-700 rounded-full ring-6 ring-gray-900 dark:ring-gray-900 focus:outline-none transition-all duration-200 group-hover:bg-blue-600  motion-reduce:transition-none"
                  tabIndex={0} role="button" aria-label="Timeline milestone"></div>

                <div className="flex gap-8 ml-12 pb-8 md:pb-6">
                  <img src={talk.image} alt={talk.title} className="w-1/4 min-w-1/4 h-48 object-cover rounded-lg mb-4 shadow-lg" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 dark:text-gray-100 mb-1">{talk.title}</h3>
                    <span className="text-xs text-gray-100 dark:text-gray-100 mb-1">{talk.subtitle}</span>
                    <p className="text-sm text-gray-400 dark:text-gray-400 mb-3">{talk.date}</p>
                    <p className="text-gray-300 dark:text-gray-300 leading-relaxed">
                      {talk.description}
                    </p>
                  </div>
                </div>
                <a href={talk.link} target="_blank" rel="noopener noreferrer" className="absolute right-0 top-0 text-blue-500 dark:text-blue-300 hover:underline text-sm">slides</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
