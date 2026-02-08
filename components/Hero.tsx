import React, { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'temkin236';

const Hero: React.FC = () => {
  const [avatar, setAvatar] = useState<string>('https://github.com/Temkin236.png');
  const [name, setName] = useState<string>('Temkin Abdulmelik');

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled || !data) return;
        setAvatar(data.avatar_url || avatar);
        setName(data.name || data.login || name);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: stats + hero text */}
          <div className="md:col-span-6 order-2 md:order-1">
            <div className="flex items-center gap-8">
              <div className="flex gap-8">
                <div className="text-left">
                  <div className="text-3xl font-extrabold text-gray-900">+200</div>
                  <div className="text-sm text-gray-500">Project completed</div>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-extrabold text-gray-900">+50</div>
                  <div className="text-sm text-gray-500">Startup raised</div>
                </div>
              </div>
            </div>

            <h1 className="mt-10 md:mt-12 text-6xl md:text-[7rem] leading-tight font-bold text-gray-900">Hello</h1>
            <p className="mt-4 text-gray-600 text-lg">— It&apos;s {name}, a design wizard</p>
          </div>

          {/* Right: refined portrait with nice rectangular framing */}
          <div className="md:col-span-6 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="rounded-[40px] p-1 bg-gradient-to-br from-gray-200 to-gray-100 shadow-2xl">
                <div className="rounded-[32px] overflow-hidden bg-white w-64 h-80 md:w-[420px] md:h-[520px]">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* subtle decorative corner accent */}
              <div className="absolute -left-6 -top-6 w-20 h-20 rounded-tr-[40px] bg-white/60 blur-[6px] pointer-events-none hidden md:block" />

              {/* caption / badge */}
              <div className="absolute left-2 -bottom-6 md:left-6 md:-bottom-8 bg-white/90 text-gray-800 px-3 py-1 rounded-lg text-sm shadow">
                Portrait
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
