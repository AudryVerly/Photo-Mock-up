import React from "react";
import { Camera } from "lucide-react";
import { EXPLORE_IDEAS, EXPLORE_CATEGORIES } from "../data";
import { Pin } from "../types";
import PinCard from "./PinCard";

interface SearchTabProps {
  searchText: string;
  setSearchText: (text: string) => void;
  allPins: Pin[];
  onPinClick: (id: string) => void;
  savedPinIds: string[];
  onPinSaveToggle: (e: any, id: string) => void;
  onPinLikeToggle: (e: any, id: string) => void;
}

export default function SearchTab({
  searchText,
  setSearchText,
  allPins,
  onPinClick,
  savedPinIds,
  onPinSaveToggle,
  onPinLikeToggle,
}: SearchTabProps) {
  // If user searched for something, filter the discover list, otherwise show discover list
  const filteredDiscoverPins = searchText
    ? allPins.filter(
        (p) =>
          p.title.toLowerCase().includes(searchText.toLowerCase()) ||
          p.description.toLowerCase().includes(searchText.toLowerCase()) ||
          p.category.toLowerCase().includes(searchText.toLowerCase())
      )
    : allPins;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-4 animate-in fade-in duration-300">
      {/* Mobile Search Input Header with Camera Button */}
      <div className="md:hidden relative mb-6">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
          search
        </span>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search archives"
          className="w-full h-11 bg-[#141414] border border-[#222] focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 rounded-lg pl-11 pr-11 focus:outline-none text-xs font-mono text-[#F4F4F4]"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-[#C5A059] cursor-pointer">
          <Camera className="w-4.5 h-4.5" />
        </button>
      </div>

      {/* Show Curation categories & grids only when search is empty */}
      {!searchText && (
        <>
          {/* Section: Ideas for You (2x2 Grid) */}
          <section className="mb-10 text-left">
            <h2 className="font-display font-medium text-xs uppercase tracking-[0.2em] text-[#C5A059] mb-4 border-b border-[#222] pb-2 pl-1">
              Curated Chronicles
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {EXPLORE_IDEAS.map((idea) => (
                <div
                  key={idea.id}
                  onClick={() => setSearchText(idea.name)}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer active-scale transition-all duration-300 border border-[#222] hover:border-[#C5A059]"
                >
                  <img
                    src={idea.imageUrl}
                    alt={idea.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                  <p className="absolute bottom-4 left-4 text-[#F4F4F4] font-display font-semibold text-sm md:text-base tracking-tight leading-snug">
                    {idea.name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Search by Category (Square Tiles) */}
          <section className="mb-12 text-left">
            <h2 className="font-display font-medium text-xs uppercase tracking-[0.2em] text-[#C5A059] mb-4 border-b border-[#222] pb-2 pl-1">
              Search by Dimension
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {EXPLORE_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => setSearchText(cat.name)}
                  className="group cursor-pointer text-center"
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-2.5 active-scale transition-all duration-300 border border-[#222] group-hover:border-[#C5A059]">
                    <img
                      src={cat.imageUrl}
                      alt={cat.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-102 transition-all duration-700 brightness-90 group-hover:brightness-100"
                    />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#A3A3A3] group-hover:text-[#C5A059] transition-colors">
                    {cat.name}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Dynamic Content Feed / Discover Grid */}
      <section className="text-left">
        <h2 className="font-display font-medium text-xs uppercase tracking-[0.2em] text-[#C5A059] mb-5 border-b border-[#222] pb-2 pl-1">
          {searchText ? `Archive / "${searchText}"` : "Active Exposition"}
        </h2>

        {filteredDiscoverPins.length === 0 ? (
          <div className="py-16 text-center bg-[#141414] rounded-xl border border-dashed border-[#C5A059]/25">
            <p className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3] px-4">
              No archives found matching "{searchText}". Try "design", "style", or "decor".
            </p>
          </div>
        ) : (
          <div className="masonry-grid">
            {filteredDiscoverPins.map((pin) => (
              <PinCard
                key={pin.id}
                pin={pin}
                onPinClick={onPinClick}
                isSaved={savedPinIds.includes(pin.id)}
                onSaveToggle={onPinSaveToggle}
                onLikeToggle={onPinLikeToggle}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
