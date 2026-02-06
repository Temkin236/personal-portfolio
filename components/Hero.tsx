import React from 'react';

const profilePic = `/assets/personalportfolio.png?${Date.now()}`;

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT COLUMN - Profile Image and Intro */}
          <div className="space-y-6">
            {/* Profile Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700">
              <img 
                src={profilePic} 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
                }}
              />
            </div>

            {/* Intro Text */}
            <div className="space-y-2">
              <p className="text-neutral-500 text-sm">Hello there, I am</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-neutral-400 text-xs uppercase tracking-wide">Available for hire</span>
              </div>
              <h1 className="text-3xl font-bold text-white">Henok Assefa</h1>
              <p className="text-neutral-400 text-sm leading-relaxed">
                As a <span className="text-white font-semibold">product designer & full-stack-developer</span>, I specialize in creating magical visual identities for
              </p>
            </div>
          </div>

          {/* MIDDLE COLUMN - Tools & Credentials */}
          <div className="space-y-8">
            {/* Tools Section */}
            <div className="space-y-4">
              <div className="flex justify-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="text-4xl">🎨</div>
                  <span className="text-neutral-400 text-xs">Figma</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-4xl">💻</div>
                  <span className="text-neutral-400 text-xs">CodeXml</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-4xl">🗄️</div>
                  <span className="text-neutral-400 text-xs">Database</span>
                </div>
              </div>
              <p className="text-[10px] font-black tracking-[0.3em] text-neutral-600 uppercase text-center">Tools and technology</p>
            </div>

            {/* My Credentials Card */}
            <div className="bg-neutral-800/40 border border-neutral-700/50 rounded-xl p-6 space-y-4">
              <p className="text-[10px] font-black tracking-[0.3em] text-neutral-600 uppercase">Career stats</p>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-white">4</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wide">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100+</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wide">Projects Complete</div>
                </div>
              </div>
              <button className="w-full text-white font-semibold text-sm hover:text-neutral-300 transition-colors flex items-center justify-between group">
                My Credentials
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Project Grid Mini */}
            <div className="grid grid-cols-2 gap-2">
              <div className="h-24 rounded-lg bg-neutral-800 border border-neutral-700" />
              <div className="h-24 rounded-lg bg-neutral-800 border border-neutral-700" />
              <div className="h-24 rounded-lg bg-neutral-800 border border-neutral-700" />
              <div className="h-24 rounded-lg bg-neutral-800 border border-neutral-700" />
            </div>
          </div>

          {/* RIGHT COLUMN - Services & Proposal */}
          <div className="space-y-6">
            {/* Services/Skills Section */}
            <div className="bg-neutral-800/40 border border-neutral-700/50 rounded-xl p-6 space-y-4">
              <p className="text-[10px] font-black tracking-[0.3em] text-neutral-600 uppercase">Have proposal?</p>
              <div className="space-y-2">
                <p className="text-neutral-400 text-xs">
                  💡 UI/UX design – 💡 Front-End Development – 💡 Web Development – 💡 UI/UX design – 💡 Front-End Development –
                </p>
              </div>
              <button className="text-white font-semibold text-sm hover:text-neutral-300 transition-colors flex items-center justify-between group">
                Let's Start
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Service Icons Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-800/40 border border-neutral-700/50 rounded-lg p-4 flex flex-col items-center justify-center h-32 hover:border-neutral-600 transition-colors">
                <div className="text-2xl mb-2">📦</div>
                <span className="text-neutral-400 text-[10px] text-center">Product Design</span>
              </div>
              <div className="bg-neutral-800/40 border border-neutral-700/50 rounded-lg p-4 flex flex-col items-center justify-center h-32 hover:border-neutral-600 transition-colors">
                <div className="text-2xl mb-2">✨</div>
                <span className="text-neutral-400 text-[10px] text-center">Brand Design</span>
              </div>
              <div className="bg-neutral-800/40 border border-neutral-700/50 rounded-lg p-4 flex flex-col items-center justify-center h-32 hover:border-neutral-600 transition-colors">
                <div className="text-2xl mb-2">🎨</div>
                <span className="text-neutral-400 text-[10px] text-center">Graphics Design</span>
              </div>
              <div className="bg-neutral-800/40 border border-neutral-700/50 rounded-lg p-4 flex flex-col items-center justify-center h-32 hover:border-neutral-600 transition-colors">
                <div className="text-2xl mb-2">💻</div>
                <span className="text-neutral-400 text-[10px] text-center">Web Development</span>
              </div>
            </div>

            {/* Articles Section */}
            <div className="space-y-3">
              <p className="text-[10px] font-black tracking-[0.3em] text-neutral-600 uppercase">Articles</p>
              <p className="text-neutral-400 text-xs hover:text-white cursor-pointer transition-colors">All Blogs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
