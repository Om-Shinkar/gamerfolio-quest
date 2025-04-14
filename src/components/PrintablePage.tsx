
import React from 'react';
import { Trophy, Flag, Rocket } from 'lucide-react';

const PrintablePage = () => {
  // Sample references data similar to what you'd have in the References component
  const references = JSON.parse(localStorage.getItem('testimonials') || '[]');

  return (
    <div className="print-container p-8 bg-white text-black">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Gamer Portfolio</h1>
        <p className="text-lg">Professional Gaming & Creative Profile</p>
      </div>

      {/* About Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">About Me</h2>
        <p>
          With over 10 years of gaming experience, I've mastered multiple genres and platforms.
          My passion for gaming extends beyond playing - I create content, participate in tournaments,
          and build communities around the games I love.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold">Technical Skills</h3>
            <ul className="list-disc pl-5">
              <li>FPS Gaming Expertise</li>
              <li>Strategic Planning</li>
              <li>Team Leadership</li>
              <li>Tournament Experience</li>
              <li>Content Creation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Creative Skills</h3>
            <ul className="list-disc pl-5">
              <li>Digital Art</li>
              <li>Sketching & Painting</li>
              <li>Game Design Concepts</li>
              <li>Storytelling</li>
              <li>Character Development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Future Goals</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="border p-4 rounded">
            <div className="flex justify-center mb-2">
              <Trophy className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-center mb-2">Become a Professional Artist</h3>
            <p className="text-sm">Build upon my 10 years of experience in sketching and painting to establish myself as a recognized professional artist.</p>
          </div>
          <div className="border p-4 rounded">
            <div className="flex justify-center mb-2">
              <Rocket className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-center mb-2">Game Development Mastery</h3>
            <p className="text-sm">Channel my passion for gaming into creating immersive games that push the boundaries of storytelling.</p>
          </div>
          <div className="border p-4 rounded">
            <div className="flex justify-center mb-2">
              <Flag className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-center mb-2">National Badminton Champion</h3>
            <p className="text-sm">Represent India on the international stage as a badminton player, showcasing the bright minds and athletic talents of the country.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Featured Projects</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="border p-4 rounded">
            <h3 className="font-bold mb-2">World Championship 2023</h3>
            <p className="text-sm mb-2">First place in the international gaming tournament with over 200 participants from 30 countries.</p>
            <div className="text-xs text-gray-600">Dec 2023 • 200+ participants</div>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-bold mb-2">Battle Royale Masters</h3>
            <p className="text-sm mb-2">Achieved top 5 ranking in the seasonal Battle Royale championship series.</p>
            <div className="text-xs text-gray-600">Aug 2023 • 500+ participants</div>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-bold mb-2">BGMI Tournament</h3>
            <p className="text-sm mb-2">Secured multiple chicken dinners in the BGMI Pro Series and ranked in the top 10 nationally.</p>
            <div className="text-xs text-gray-600">Jan 2023 • 5000+ participants</div>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-bold mb-2">Charity Gaming Marathon</h3>
            <p className="text-sm mb-2">Organized and led a 48-hour gaming marathon raising funds for children's hospital.</p>
            <div className="text-xs text-gray-600">Nov 2023 • $25K raised</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {references.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">References & Feedback</h2>
          <div className="grid grid-cols-2 gap-6">
            {references.map((ref: any, index: number) => (
              <div key={index} className="border p-4 rounded">
                <p className="italic text-sm mb-2">"{ref.testimonial}"</p>
                <div className="font-bold">{ref.name}</div>
                <div className="text-xs text-gray-600">{ref.profession} • {ref.date}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact Information */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact Information</h2>
        <div className="flex gap-8">
          <div>
            <p className="font-bold">Email</p>
            <p className="text-sm">gamer@portfolio.com</p>
          </div>
          <div>
            <p className="font-bold">Social Media</p>
            <p className="text-sm">@gamer.portfolio</p>
          </div>
          <div>
            <p className="font-bold">Phone</p>
            <p className="text-sm">+91 98765 43210</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 pt-6 border-t">
        <p>© 2023-2025 Gamer Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrintablePage;
