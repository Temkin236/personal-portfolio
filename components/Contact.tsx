
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-16 sm:py-20 px-6 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 lg:space-y-10">
          <div className="space-y-3">
            <h4 className="text-[9px] font-bold uppercase tracking-wider text-neutral-500">Get In Touch</h4>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black tracking-tight leading-tight">
              Direct <br /><span className="outline-text">Contact.</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              {/* Mail Icon */}
              <a href="mailto:temkinabdulmelik@gmail.com" className="group flex flex-col items-center gap-2 transition-all hover:-translate-y-1" aria-label="Send Email">
                <div className="w-14 h-14 rounded-full border border-neutral-100 flex items-center justify-center bg-neutral-50 group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="text-[8px] font-bold uppercase tracking-wider text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
              </a>

              {/* Phone Icon */}
              <a href="tel:+251973777709" className="group flex flex-col items-center gap-2 transition-all hover:-translate-y-1" aria-label="Voice Connection">
                <div className="w-14 h-14 rounded-full border border-neutral-100 flex items-center justify-center bg-neutral-50 group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <span className="text-[8px] font-bold uppercase tracking-wider text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">Phone</span>
              </a>

              {/* GitHub Icon */}
              <a href="https://github.com/temkin236" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2 transition-all hover:-translate-y-1" aria-label="GitHub Repository">
                <div className="w-14 h-14 rounded-full border border-neutral-100 flex items-center justify-center bg-neutral-50 group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                </div>
                <span className="text-[8px] font-bold uppercase tracking-wider text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
              </a>

              {/* Telegram Icon */}
              <a href="https://t.me/temkin23" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2 transition-all hover:-translate-y-1" aria-label="Telegram Message">
                <div className="w-14 h-14 rounded-full border border-neutral-100 flex items-center justify-center bg-neutral-50 group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0C5.346 0 0 5.348 0 11.944c0 6.596 5.346 11.944 11.944 11.944 6.596 0 11.944-5.348 11.944-11.944C23.888 5.348 18.54 0 11.944 0zm5.66 8.046c-.183 1.93-.956 6.476-1.346 8.566-.164.88-.49 1.176-.806 1.206-.68.064-1.2-.446-1.856-.876-1.03-.676-1.614-1.096-2.614-1.756-1.156-.76-.406-1.176.254-1.86.17-.184 3.14-2.88 3.196-3.11.008-.03.014-.144-.054-.204-.068-.06-.17-.04-.242-.02-.104.02-1.764 1.116-4.992 3.3-.474.326-.904.486-1.29.476-.426-.01-.1.246-2.456-1.506-.576-.44-.456-.68.12-.916 2.976-1.3 7.85-3.396 14.62-6.29.35-.14.664-.21.94-.21.276 0 .546.06.74.18.24.15.34.35.34.61 0 .21-.03.43-.09.66z" /></svg>
                </div>
                <span className="text-[8px] font-bold uppercase tracking-wider text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">Telegram</span>
              </a>
            </div>
            
            <p className="max-w-xs text-neutral-400 text-[9px] font-medium uppercase tracking-wider leading-relaxed">
              Click icons for direct contact.
            </p>
          </div>
        </div>

        <div className="bg-neutral-50 p-6 lg:p-10 rounded-3xl border border-neutral-100 shadow-sm">
          <form className="space-y-6" action="mailto:temkinabdulmelik@gmail.com" method="post" encType="text-plain">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-1">
                <label htmlFor="identity" className="text-[8px] font-bold uppercase tracking-wider text-neutral-400 block">Name</label>
                <input 
                  id="identity"
                  name="name"
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-black transition-colors outline-none font-medium placeholder:text-neutral-300 text-sm"
                  required
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="mission" className="text-[8px] font-bold uppercase tracking-wider text-neutral-400 block">Message</label>
                <textarea 
                  id="mission"
                  name="message"
                  rows={2}
                  placeholder="Your message..." 
                  className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-black transition-colors outline-none font-medium placeholder:text-neutral-300 resize-none text-sm"
                  required
                ></textarea>
              </div>
            </div>
            <button type="submit" className="group relative w-full flex items-center justify-center gap-3 bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-wider text-[9px] overflow-hidden transition-all active:scale-95 shadow-lg">
              <span className="relative z-10 flex items-center gap-2">
                Send Message
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
              <div className="absolute inset-0 bg-neutral-800 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
