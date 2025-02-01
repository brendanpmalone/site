import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to My Personal Space
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I'm a [your profession] passionate about [your interests]. 
              This is where I share my thoughts, experiences, and projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/blog"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Read My Blog
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Featured</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest from the Blog
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore my recent thoughts and discoveries.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {/* You can map through your actual blog posts here */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    Sample Blog Post {item}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">
                      This is a preview of what your blog post might look like. Replace this with actual content.
                    </p>
                    <p className="mt-6">
                      <a href="/blog" className="text-sm font-semibold leading-6 text-indigo-600">
                        Read more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
