
import React from 'react';

const Manifest: React.FC = () => {
  return (
    <div className="py-24 lg:py-48 px-6 lg:px-24 bg-neutral-900 text-white overflow-hidden selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600">README_LOGS.md</h4>
              <h2 className="text-6xl font-heading font-bold tracking-tighter leading-none">Module <br /><span className="text-neutral-700 italic">Documentation.</span></h2>
            </div>
            
            {/* Visual focus for the README with Actual UI Screenshots inspired images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" 
                  alt="Production Dashboard Screenshot" 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/40">Log_001</p>
                  <p className="text-[10px] font-bold">System Matrix UI</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/5 translate-y-8">
                <img 
                  src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1974&auto=format&fit=crop" 
                  alt="Code Implementation Log" 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/40">Log_002</p>
                  <p className="text-[10px] font-bold">Backend Logic</p>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-[3.5rem] border border-neutral-800 bg-neutral-950/50 backdrop-blur-xl mt-12">
               <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                  "Production modules are verified through their deployment state. Every entry in this manifest represents a live system orbiting the intersection of silicon and intelligence."
               </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-[4.5rem] p-10 lg:p-20 shadow-2xl relative flex flex-col justify-between">
            <div className="absolute top-10 right-14 flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
            </div>

            <article className="prose prose-invert max-w-none space-y-16">
              <section className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-neutral-400 flex items-center gap-4">
                  <span className="text-neutral-700">#</span> Engineering Philosophy
                </h3>
                <p className="text-neutral-500 font-medium text-lg leading-relaxed italic border-l-4 border-neutral-800 pl-8">
                  "True deployment isn't just shipping code—it's establishing an autonomous presence. I focus on builds that survive the chaos of real-world datasets."
                </p>
              </section>

              <section className="space-y-10">
                <h3 className="text-2xl font-heading font-bold text-neutral-400 flex items-center gap-4">
                  <span className="text-neutral-700">##</span> Stack Architecture
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-[1px] bg-neutral-800"></div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-neutral-600">Cognitive Layer</p>
                    </div>
                    <ul className="space-y-3 text-sm text-neutral-400 font-bold">
                      <li className="flex items-center gap-2"><span className="text-neutral-700">01.</span> LangGraph Systems</li>
                      <li className="flex items-center gap-2"><span className="text-neutral-700">02.</span> Multi-Agent crewAI</li>
                      <li className="flex items-center gap-2"><span className="text-neutral-700">03.</span> Vector Storage (Chroma)</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-[1px] bg-neutral-800"></div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-neutral-600">System Layer</p>
                    </div>
                    <ul className="space-y-3 text-sm text-neutral-400 font-bold">
                      <li className="flex items-center gap-2"><span className="text-neutral-700">01.</span> Distributed Go Modules</li>
                      <li className="flex items-center gap-2"><span className="text-neutral-700">02.</span> Embedded RTOS (C++)</li>
                      <li className="flex items-center gap-2"><span className="text-neutral-700">03.</span> React Server Components</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-8 pt-12 border-t border-neutral-800">
                <h3 className="text-2xl font-heading font-bold text-neutral-400 flex items-center gap-4">
                  <span className="text-neutral-700">###</span> Production Verification
                </h3>
                <div className="bg-neutral-900/50 p-6 rounded-[2.5rem] border border-neutral-800">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Active Live Fetching</span>
                  </div>
                  <p className="text-neutral-500 text-sm font-medium">
                    The project matrix below is synchronized with GitHub production data. Only repositories with verified deployments are visible.
                  </p>
                </div>
              </section>
            </article>

            <div className="mt-20 pt-10 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-700">
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full border border-neutral-800"></div>
                  <span>Compiled: Mar 2025</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full border border-neutral-800"></div>
                  <span>Status: Operational</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifest;
