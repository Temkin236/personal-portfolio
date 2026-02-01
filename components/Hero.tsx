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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            {/* Badge */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-gradient-to-r from-white to-neutral-600" />
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <h2 className="text-[10px] font-black tracking-[0.4em] text-white uppercase">
                  Available for hire
                </h2>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              TEMKIN<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                ABDULMELIK
              </span>
            </h1>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-neutral-400 text-base leading-relaxed max-w-lg">
                Hello there, I am <span className="text-white font-semibold">Available for hire</span>
              </p>
              <p className="text-neutral-400 text-base leading-relaxed max-w-lg">
                As a <span className="text-white font-semibold">product designer & full-stack-developer</span>, I specialize in creating magical visual identities for digital products.
              </p>
              <button className="text-white text-sm font-semibold hover:text-neutral-300 transition-colors flex items-center gap-2 mt-4">
                About Myself
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-6 border-t border-neutral-800">
              <div className="space-y-3">
                <a href="https://github.com/Henabakos" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm">Github Henabakos</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.043-8.789 0-9.707h3.554v1.374c.43-.664 1.199-1.608 2.925-1.608 2.137 0 3.74 1.398 3.74 4.402v5.539zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.955.77-1.706 1.954-1.706 1.188 0 1.915.751 1.948 1.706 0 .948-.76 1.706-1.987 1.706zm1.581 11.597H3.715V8.745h3.203v11.707zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                  <span className="text-sm">Linkedin Henok Assefa</span>
                </a>
                <a href="https://t.me/he2fas" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.996 0C5.372 0 0 5.373 0 12s5.372 12 11.996 12c6.627 0 12.004-5.373 12.004-12S18.623 0 11.996 0zm6.913 9.49h-4.003V5.987h-2.906v3.503H8.07v2.906h3.93v3.903h2.906v-3.903h4.003v-2.906z" />
                  </svg>
                  <span className="text-sm">Telegram @he2fas</span>
                </a>
              </div>
            </div>

            {/* Tools Section */}
            <div className="space-y-4 pt-6 border-t border-neutral-800">
              <h3 className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase">Tools and technology</h3>
              <div className="flex gap-4 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-xl">
                    🎨
                  </div>
                  <span className="text-[10px] text-neutral-400">Figma</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-xl">
                    💻
                  </div>
                  <span className="text-[10px] text-neutral-400">CodeXml</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-xl">
                    🗄️
                  </div>
                  <span className="text-[10px] text-neutral-400">Database</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] lg:h-[600px]">
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-neutral-800 border border-neutral-700">
              <img 
                src={profilePic} 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-neutral-800/40 border border-neutral-700/50 rounded-2xl p-8">
              <h3 className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-6">Career stats</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-white">4</div>
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wide mt-2">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">100+</div>
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wide mt-2">Projects Complete</div>
                </div>
              </div>
              <button className="w-full py-3 bg-white text-neutral-900 rounded-lg font-semibold hover:bg-neutral-100 transition-colors text-sm mt-8">
                My Credentials
              </button>
            </div>

            {/* Services Preview */}
            <div className="bg-neutral-800/40 border border-neutral-700/50 rounded-2xl p-8">
              <h3 className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-6">Have proposal?</h3>
              <p className="text-neutral-300 text-sm mb-8">Ready to bring your ideas to life with cutting-edge design and development.</p>
              <button className="w-full py-3 bg-white text-neutral-900 rounded-lg font-semibold hover:bg-neutral-100 transition-colors text-sm">
                Let's Start
              </button>
            </div>

            {/* Skills Preview */}
            <div className="bg-neutral-800/40 border border-neutral-700/50 rounded-2xl p-8">
              <h3 className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-6">My service area</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">💡</span>
                  <span className="text-neutral-300 text-sm">Web Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">💡</span>
                  <span className="text-neutral-300 text-sm">UI/UX design</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">💡</span>
                  <span className="text-neutral-300 text-sm">Front-End Development</span>
                </div>
              </div>
              <button className="w-full py-3 mt-6 bg-white text-neutral-900 rounded-lg font-semibold hover:bg-neutral-100 transition-colors text-sm">
                Service Details
              </button>
            </div>
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="mb-20">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Recent Works</h2>
            <p className="text-neutral-400">Project showcase</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative h-64 rounded-xl overflow-hidden bg-neutral-800 border border-neutral-700 hover:border-neutral-600 transition-all">
                <div className="w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-800" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Blog Section */}
        <div className="mb-20">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Articles</h2>
            <p className="text-neutral-400">All Blogs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-neutral-800/40 border border-neutral-700/50 rounded-xl p-6 hover:border-neutral-600 transition-all">
                <div className="h-40 bg-neutral-700 rounded-lg mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Article Title</h3>
                <p className="text-neutral-400 text-sm">Read more about design and development insights.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center py-4">
        {/* Left Column - Content */}
        <div className="lg:col-span-5 z-10 space-y-4 md:space-y-5 lg:space-y-6 px-2 md:px-3">
          <div className="space-y-3 md:space-y-4">
            {/* Badge */}
            <div className="flex items-center gap-2 lg:gap-3 reveal active">
              <div className="w-10 lg:w-12 h-[2px] bg-gradient-to-r from-white to-neutral-600" />
              <h2 className="text-[9px] lg:text-[10px] font-black tracking-[0.4em] text-white uppercase flex items-center gap-2">
                <span className="inline-flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                  Available for hire
                </span>
              </h2>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white select-none">
              TEMKIN<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                ABDULMELIK
              </span>
            </h1>

            {/* Description */}
            <div className="space-y-2 reveal active">
              <p className="text-neutral-400 text-sm leading-relaxed font-normal max-w-lg">
                As a <span className="text-white font-semibold">product designer & full-stack-developer</span>, I specialize in creating magical visual identities for digital products.
              </p>
              <button className="text-white text-sm font-semibold hover:text-neutral-300 transition-colors flex items-center gap-2">
                About Myself
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3 reveal active">
            <div className="flex flex-col gap-3 pt-4">
              <a href="#" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>Github Henabakos</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.043-8.789 0-9.707h3.554v1.374c.43-.664 1.199-1.608 2.925-1.608 2.137 0 3.74 1.398 3.74 4.402v5.539zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.955.77-1.706 1.954-1.706 1.188 0 1.915.751 1.948 1.706 0 .948-.76 1.706-1.987 1.706zm1.581 11.597H3.715V8.745h3.203v11.707zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                <span>Linkedin Henok Assefa</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.996 0C5.372 0 0 5.373 0 12s5.372 12 11.996 12c6.627 0 12.004-5.373 12.004-12S18.623 0 11.996 0zm6.913 9.49h-4.003V5.987h-2.906v3.503H8.07v2.906h3.93v3.903h2.906v-3.903h4.003v-2.906z" />
                </svg>
                <span>Telegram @he2fas</span>
              </a>
            </div>
          </div>

          {/* Tools Section */}
          <div className="space-y-3 pt-6 border-t border-neutral-800 reveal active">
            <h3 className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase">Tools and technology</h3>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🎨</span>
                </div>
                <span className="text-[9px] text-neutral-400">Figma</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <span className="text-xl">💻</span>
                </div>
                <span className="text-[9px] text-neutral-400">CodeXml</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🗄️</span>
                </div>
                <span className="text-[9px] text-neutral-400">Database</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image and Projects Preview */}
        <div className="lg:col-span-7 space-y-6 z-10">
          {/* Profile Image */}
          <div className="reveal active">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-neutral-800 border border-neutral-700">
              <img 
                src={profilePic} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Projects Preview */}
          <div className="grid grid-cols-3 gap-3 reveal active">
            <div className="aspect-square rounded-xl bg-neutral-800 border border-neutral-700" />
            <div className="aspect-square rounded-xl bg-neutral-800 border border-neutral-700" />
            <div className="aspect-square rounded-xl bg-neutral-800 border border-neutral-700" />
          </div>

          {/* My Credentials Card */}
          <div className="bg-neutral-800/40 border border-neutral-700/50 rounded-2xl p-6 reveal active">
            <div className="space-y-4">
              <h3 className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase">Career stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-white">4</div>
                  <div className="text-[9px] text-neutral-400 uppercase tracking-wide">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100+</div>
                  <div className="text-[9px] text-neutral-400 uppercase tracking-wide">Projects Complete</div>
                </div>
              </div>
              <button className="w-full py-3 bg-white text-neutral-900 rounded-lg font-semibold hover:bg-neutral-100 transition-colors text-sm mt-2">
                My Credentials
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
            <div className="bg-white/60 backdrop-blur-xl px-4 py-1.5 rounded-full border border-neutral-200 shadow-lg">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600">Intelligence</span>
            </div>
            <div className="bg-white/60 backdrop-blur-xl px-5 py-2 rounded-full border border-neutral-200 shadow-lg">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600">Innovation</span>
            </div>
            <div className="bg-white/60 backdrop-blur-xl px-5 py-2 rounded-full border border-neutral-200 shadow-lg">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600">Excellence</span>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="lg:col-span-5 relative group">
          <div className="relative aspect-[3/4] max-w-xs mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-black shadow-xl ring-1 ring-neutral-300 transition-all duration-1000 group-hover:shadow-2xl group-hover:scale-[1.02]">
            <img
              src={profilePic}
              alt="Temkin Abdulmelik"
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1500ms] ease-in-out scale-105 group-hover:scale-100"
              style={{ maskImage: 'linear-gradient(180deg, #fff 80%, #000 100%)' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            
            {/* Profile Badge */}
            <div className="absolute bottom-8 left-8 text-white z-10 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-white/40" />
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/70">Profile v4.0</p>
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest text-white/80">Dev Verified: 2025</span>
            </div>

            {/* Power indicator */}
            <div className="absolute top-8 right-8 text-white z-10">
              <div className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20">
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white">Power: ∞</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
