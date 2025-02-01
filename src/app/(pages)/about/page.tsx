export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hello! I'm [Your Name], a [your profession] based in [your location]. I'm passionate about [your interests] and love to [what you do].
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Background</h3>
              <p className="mt-4 text-gray-600">
                [Write about your background, education, and career journey]
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Skills</h3>
              <ul className="mt-4 grid grid-cols-2 gap-4 text-gray-600">
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
                <li>Skill 4</li>
                <li>Skill 5</li>
                <li>Skill 6</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Experience</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Company Name</h4>
                  <p className="text-sm text-gray-500">Position • Years</p>
                  <p className="mt-2 text-gray-600">
                    Description of your role and achievements.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Previous Company</h4>
                  <p className="text-sm text-gray-500">Position • Years</p>
                  <p className="mt-2 text-gray-600">
                    Description of your role and achievements.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
              <p className="mt-4 text-gray-600">
                I'm always interested in new opportunities and connections. Feel free to reach out through the contact page or connect with me on social media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 