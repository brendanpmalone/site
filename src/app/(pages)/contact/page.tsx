export default function ContactPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Me</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I'd love to hear from you! Feel free to reach out using the form below or connect with me on social media.
          </p>

          <form className="mt-10 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your message"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-16">
            <h3 className="text-lg font-semibold text-gray-900">Connect with me</h3>
            <div className="mt-6 flex gap-6">
              <a
                href="https://twitter.com/yourusername"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://github.com/yourusername"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 