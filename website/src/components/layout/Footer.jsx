export default function Footer() {
  return (
    <footer className="relative z-10 bg-cyberpunk-dark border-t border-cyberpunk-blue/30 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Course Info */}
          <div>
            <h3 className="font-heading text-lg text-cyberpunk-blue mb-3">Course Info</h3>
            <p className="text-sm text-cyberpunk-text-dim font-mono">
              ENG 7XXX: Video Games as Philosophical Texts
            </p>
            <p className="text-sm text-cyberpunk-text-dim font-mono mt-1">
              University of Central Florida
            </p>
            <p className="text-sm text-cyberpunk-text-dim font-mono mt-1">
              Spring 2026
            </p>
          </div>

          {/* Image Credits */}
          <div>
            <h3 className="font-heading text-lg text-cyberpunk-purple mb-3">Image Credits</h3>
            <p className="text-xs text-cyberpunk-text-dim">
              Game images: Official press materials
            </p>
            <p className="text-xs text-cyberpunk-text-dim mt-1">
              Theorist images: Public domain / Creative Commons
            </p>
            <p className="text-xs text-cyberpunk-text-dim mt-1">
              Atmospheric images: Unsplash (CC)
            </p>
          </div>

          {/* Academic Context */}
          <div>
            <h3 className="font-heading text-lg text-cyberpunk-green mb-3">Academic Context</h3>
            <p className="text-sm text-cyberpunk-text-dim">
              This website serves as an educational resource for exploring video games as
              sophisticated philosophical texts through new media theory, digital humanities,
              and game studies scholarship.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-cyberpunk-darker text-center">
          <p className="text-xs font-mono text-cyberpunk-text-dim">
            {new Date().getFullYear()} | Educational Fair Use | Text and Technology PhD Program
          </p>
        </div>
      </div>
    </footer>
  );
}
