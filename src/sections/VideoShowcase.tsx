import React, { useState } from 'react';
import { Play, ArrowUpRight, X } from 'lucide-react';
import { VIDEO_LIST, type VideoItem } from './videoData';

/**
 * Performance-highlights bento grid plus its video modal.
 * Shared by the home, about and history routes.
 */
export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <section className="w-full pt-24 pb-20 px-6 sm:px-8 lg:px-12 max-w-320 mx-auto relative z-10">
      <div className="text-center mb-14 space-y-3">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold capitalize tracking-[0.1em] text-[#FFFFFF] text-center leading-[1.1]">
          HTWE OO MYANMAR
        </h1>
        <p className="font-sans text-[12px] tracking-widest uppercase font-semibold text-amber-500/80 text-center mt-2">
          Traditional Puppet Theatre Performance Highlights &amp; Music
        </p>
        <div className="w-32 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-[#d9b358] to-transparent" />
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Card 1 */}
        <div
          onClick={() => setSelectedVideo(VIDEO_LIST[0])}
          className="md:col-span-3 rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 min-h-95 border border-[#d9b358]/50 bg-[#1f1a1a]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${VIDEO_LIST[0].image || VIDEO_LIST[0].fallback}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181212]/95 via-[#181212]/40 to-transparent" />
          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start">
              <span className="bg-stone-900/80 backdrop-blur-md text-amber-400/90 border border-amber-500/30 text-[11px] uppercase font-sans tracking-widest font-semibold px-2.5 py-1 rounded-sm">
                {VIDEO_LIST[0].tag}
              </span>
              <div className="w-11 h-11 rounded-full bg-[#181212]/80 flex items-center justify-center text-[#ece0e0] group-hover:text-[#d9b358] group-hover:bg-[#181212] transition-colors duration-300 border border-[#534343]">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
            <div>
              <p className="text-amber-500/90 font-sans text-[11px] uppercase tracking-widest font-semibold mb-1">
                {VIDEO_LIST[0].sub}
              </p>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-amber-50 leading-[1.2] capitalize">
                {VIDEO_LIST[0].title}
              </h2>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => setSelectedVideo(VIDEO_LIST[1])}
          className="md:col-span-3 rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 min-h-95 border border-[#d9b358]/50 bg-[#1f1a1a]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${VIDEO_LIST[1].image || VIDEO_LIST[1].fallback}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181212]/95 via-[#181212]/40 to-transparent" />
          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start">
              <span className="bg-stone-900/80 backdrop-blur-md text-amber-400/90 border border-amber-500/30 text-[11px] uppercase font-sans tracking-widest font-semibold px-2.5 py-1 rounded-sm">
                {VIDEO_LIST[1].tag}
              </span>
              <div className="w-11 h-11 rounded-full bg-[#181212]/80 flex items-center justify-center text-[#ece0e0] group-hover:text-[#d9b358] group-hover:bg-[#181212] transition-colors duration-300 border border-[#534343]">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
            <div>
              <p className="text-amber-500/90 font-sans text-[11px] uppercase tracking-widest font-semibold mb-1">
                {VIDEO_LIST[1].sub}
              </p>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-amber-50 leading-[1.2] capitalize">
                {VIDEO_LIST[1].title}
              </h2>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => setSelectedVideo(VIDEO_LIST[2])}
          className="md:col-span-2 rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 min-h-[290px] border border-[#d9b358]/40 bg-[#1f1a1a] flex flex-col"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 z-0"
            style={{ backgroundImage: `url('${VIDEO_LIST[2].image || VIDEO_LIST[2].fallback}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181212]/95 via-[#181212]/70 to-[#181212]/30 z-0" />
          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-stone-900/80 backdrop-blur-md text-amber-400/90 border border-amber-500/30 text-[11px] uppercase font-sans tracking-widest font-semibold px-2.5 py-1 rounded-sm">
                {VIDEO_LIST[2].tag}
              </span>
              <div className="w-10 h-10 rounded-full bg-[#181212]/50 border border-[#534343]/50 flex items-center justify-center text-[#ece0e0] group-hover:text-[#d9b358] transition-colors duration-300">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
            </div>
            <div>
              <p className="text-amber-500/90 font-sans text-[11px] uppercase tracking-widest font-semibold mb-1">
                {VIDEO_LIST[2].sub}
              </p>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-amber-50 leading-[1.2] capitalize">
                {VIDEO_LIST[2].title}
              </h3>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div
          onClick={() => setSelectedVideo(VIDEO_LIST[3])}
          className="md:col-span-2 rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 min-h-[290px] border border-[#d9b358]/40 bg-[#1f1a1a] flex flex-col"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 z-0"
            style={{ backgroundImage: `url('${VIDEO_LIST[3].image || VIDEO_LIST[3].fallback}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181212]/95 via-[#181212]/70 to-[#181212]/30 z-0" />
          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-stone-900/80 backdrop-blur-md text-amber-400/90 border border-amber-500/30 text-[11px] uppercase font-sans tracking-widest font-semibold px-2.5 py-1 rounded-sm">
                {VIDEO_LIST[3].tag}
              </span>
              <div className="w-10 h-10 rounded-full bg-[#181212]/50 border border-[#534343]/50 flex items-center justify-center text-[#ece0e0] group-hover:text-[#d9b358] transition-colors duration-300">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
            </div>
            <div>
              <p className="text-amber-500/90 font-sans text-[11px] uppercase tracking-widest font-semibold mb-1">
                {VIDEO_LIST[3].sub}
              </p>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-amber-50 leading-[1.2] capitalize">
                {VIDEO_LIST[3].title}
              </h3>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div
          onClick={() => setSelectedVideo(VIDEO_LIST[4])}
          className="md:col-span-2 rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 min-h-[290px] border border-[#d9b358]/40 bg-[#1f1a1a] flex flex-col"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 z-0"
            style={{ backgroundImage: `url('${VIDEO_LIST[4].image || VIDEO_LIST[4].fallback}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181212]/95 via-[#181212]/70 to-[#181212]/30 z-0" />
          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-stone-900/80 backdrop-blur-md text-amber-400/90 border border-amber-500/30 text-[11px] uppercase font-sans tracking-widest font-semibold px-2.5 py-1 rounded-sm">
                {VIDEO_LIST[4].tag}
              </span>
              <div className="w-10 h-10 rounded-full bg-[#181212]/50 border border-[#534343]/50 flex items-center justify-center text-[#ece0e0] group-hover:text-[#d9b358] transition-colors duration-300">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
            </div>
            <div>
              <p className="text-amber-500/90 font-sans text-[11px] uppercase tracking-widest font-semibold mb-1">
                {VIDEO_LIST[4].sub}
              </p>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-amber-50 leading-[1.2] capitalize">
                {VIDEO_LIST[4].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* VIDEO PLAYER MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedVideo(null)}
          />
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-[#d9b358] bg-[#1f1a1a] shadow-2xl z-10">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#534343] bg-[#181212]">
              <div className="flex items-center gap-2">
                <span className="bg-amber-950 text-amber-300 border border-amber-500/30 text-[11px] uppercase font-sans tracking-widest font-semibold px-2 py-0.5 rounded-sm">
                  {selectedVideo.tag}
                </span>
                <h3 className="font-serif text-lg font-semibold text-amber-50 truncate max-w-md">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-8 h-8 rounded-full bg-[#2c2525] text-[#ece0e0] hover:text-[#d9b358] flex items-center justify-center border border-[#534343]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <video
                src={selectedVideo.videoUrl}
                autoPlay
                controls
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 bg-[#181212] border-t border-[#534343]">
              <p className="font-sans text-sm text-[#ece0e0]/90 leading-relaxed">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
