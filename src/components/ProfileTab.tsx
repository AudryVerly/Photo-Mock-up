import React, { useState } from "react";
import { Share2, Settings } from "lucide-react";
import { CURRENT_USER } from "../data";
import { Pin } from "../types";
import PinCard from "./PinCard";

interface ProfileTabProps {
  savedPins: Pin[];
  createdPins: Pin[];
  onPinClick: (id: string) => void;
  savedPinIds: string[];
  onPinSaveToggle: (e: any, id: string) => void;
  onPinLikeToggle: (e: any, id: string) => void;
}

export default function ProfileTab({
  savedPins,
  createdPins,
  onPinClick,
  savedPinIds,
  onPinSaveToggle,
  onPinLikeToggle,
}: ProfileTabProps) {
  const [activeSubTab, setActiveSubTab] = useState<"saved" | "created">("saved");

  const displayPins = activeSubTab === "saved" ? savedPins : createdPins;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 animate-in fade-in duration-300">
      {/* Profile Header Details */}
      <div className="flex flex-col items-center text-center max-w-md mx-auto mb-10">
        <div className="w-24 h-24 rounded-xl overflow-hidden border border-[#C5A059] p-1 mb-4 active-scale transition-transform duration-300 bg-black">
          <img
            src={CURRENT_USER.avatar}
            alt={CURRENT_USER.name}
            className="w-full h-full object-cover rounded-lg"
            referrerPolicy="no-referrer"
          />
        </div>

        <h1 className="font-display font-bold text-2xl md:text-3xl text-[#F4F4F4] tracking-tighter mb-1">
          {CURRENT_USER.name}
        </h1>
        <p className="text-zinc-500 font-mono text-[11px] uppercase tracking-widest mb-3">{CURRENT_USER.username}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-6">
          <span>{CURRENT_USER.followers} subscribers</span>
          <span className="w-1 h-1 bg-[#C5A059] rounded-full"></span>
          <span>{CURRENT_USER.following} following</span>
        </div>

        {/* Actions bar */}
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-lg bg-[#141414] border border-[#222] text-[#F4F4F4] hover:border-[#C5A059] hover:text-[#C5A059] font-mono text-[10px] uppercase tracking-widest active-scale transition-all flex items-center gap-1.5 cursor-pointer">
            <Share2 className="w-3 h-3" />
            <span>Broadcast</span>
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#141414] border border-[#222] text-[#F4F4F4] hover:border-[#C5A059] hover:text-[#C5A059] font-mono text-[10px] uppercase tracking-widest active-scale transition-all flex items-center gap-1.5 cursor-pointer">
            <Settings className="w-3 h-3" />
            <span>Preferences</span>
          </button>
        </div>
      </div>

      {/* Boards / Subtabs Filter Navigation */}
      <div className="flex items-center justify-center gap-8 border-b border-[#222] pb-0 mb-8">
        <button
          onClick={() => setActiveSubTab("saved")}
          className={`relative pb-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-all cursor-pointer ${
            activeSubTab === "saved"
              ? "text-[#C5A059]"
              : "text-zinc-500 hover:text-white"
          }`}
        >
          Curations
          {activeSubTab === "saved" && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A059] animate-in fade-in duration-200"></div>
          )}
        </button>

        <button
          onClick={() => setActiveSubTab("created")}
          className={`relative pb-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-all cursor-pointer ${
            activeSubTab === "created"
              ? "text-[#C5A059]"
              : "text-zinc-500 hover:text-white"
          }`}
        >
          Publications ({createdPins.length})
          {activeSubTab === "created" && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A059] animate-in fade-in duration-200"></div>
          )}
        </button>
      </div>

      {/* Grid displaying the chosen feed */}
      {displayPins.length === 0 ? (
        <div className="py-16 text-center bg-[#141414] rounded-xl border border-dashed border-[#C5A059]/25 max-w-xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 px-4">
            {activeSubTab === "saved"
              ? "You haven't curated any archives yet. Browse chronicles and tap save."
              : "You haven't published any items yet. Tap publish in the header to record your first."}
          </p>
          {activeSubTab === "created" && (
            <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Saved publications will appear here.</p>
          )}
        </div>
      ) : (
        <div className="masonry-grid">
          {displayPins.map((pin) => (
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
    </div>
  );
}
