const Card = ({ title, description, image, tech = [], live, github }) => {
  return (
    <div className="group relative bg-gradient-to-br from-[#1f1f1f]/90 to-[#141414] backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 flex flex-col h-full transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(229,9,20,0.18)]">
      
      {/* 🔥 Glow Border */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#e50914]/30 transition duration-300"></div>

      {/* 🔥 Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        {/* hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-300"></div>

        {/* 🔥 Floating Label */}
        <div className="absolute bottom-3 left-3 text-xs px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-gray-300 opacity-0 group-hover:opacity-100 transition">
          View Project
        </div>
      </div>

      {/* 🔥 Content */}
      <div className="p-5 flex flex-col flex-grow relative z-10">
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-white tracking-wide group-hover:text-[#e50914] transition">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 mt-2 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] px-2 py-1 rounded-md text-gray-300 transition duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(229,9,20,0.3)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* 🔥 Links */}
        <div className="flex gap-3 mt-5">
          
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs bg-[#e50914] text-white rounded-md hover:bg-[#f6121d] transition active:scale-95 shadow-md hover:shadow-red-600/40"
            >
              Live
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs bg-[#2a2a2a] text-gray-300 rounded-md hover:bg-[#3a3a3a] transition active:scale-95"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;