"use client";

export default function ContactForm(){
    return(
        <div className="border border-white rounded-3xl min-h-[550px] p-8  text-white">
            <div className="space-y-3 mb-8">
              <h3 className="text-2xl font-bold text-white">
                Project Consultation
              </h3>

              <p className="text-[#c2c6d6]">
                Tell us about your project and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-purple-500"
              />

              <select
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-purple-500"
                defaultValue=""
              >
                <option value="" disabled className="bg-black/90 text-white">
                  Select Service
                </option>

                <option className="bg-black/90 text-white">UI/UX Design</option>
                <option className="bg-black/90 text-white">AI Solutions</option>
                <option className="bg-black/90 text-white">Automation</option>
                <option className="bg-black/90 text-white">Consultation</option>
                <option className="bg-black/90 text-white">
                  Web Application
                </option>
                <option className="bg-black/90 text-white">Other</option>
                <option className="bg-black/90 text-white">
                  Website Development
                </option>
              </select>

              <textarea
                rows={6}
                placeholder="Describe your project, goals, requirements, or challenges..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none resize-none focus:border-purple-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition-all hover:bg-purple-500"
              >
                Book a Free Consultation
              </button>
            </form>
          </div>
    )
}