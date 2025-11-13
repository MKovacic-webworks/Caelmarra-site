export default function SectionDivider() {
  return (
    <div className="relative py-6 overflow-hidden">
      {/* Simple decorative line */}
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent"></div>
      </div>
    </div>
  );
}