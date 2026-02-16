export default function Header() {
  return (
    // เปลี่ยนพื้นหลังเป็นกระจกโปร่งแสง (Glassmorphism) สีดำ
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-neutral-950/80 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* --- Logo & Title Section --- */}
          <div className="flex items-center space-x-4">
            
            {/* Logo Box: เปลี่ยนจากสีทอง เป็น Gradient เขียวมรกต+เงา */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center">
                <span className="text-xl font-black bg-gradient-to-br from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                  SEAI
                </span>
              </div>
            </div>

            {/* Text Details */}
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                YOLO <span className="text-emerald-500">Detection</span>
              </h1>
              <p className="text-xs md:text-sm text-gray-400 font-light tracking-wide">
                Object Detection Web Application
              </p>
            </div>
          </div>

          {/* --- Status Indicator (Right Side) --- */}
          <div className="hidden md:flex items-center space-x-3 bg-emerald-950/30 border border-emerald-500/20 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </div>
            <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
              System Online
            </span>
          </div>

        </div>
      </div>
    </header>
  )
}