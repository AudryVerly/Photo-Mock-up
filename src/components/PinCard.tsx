import React, { useState } from "react";
import { Share2, MoreHorizontal, Heart } from "lucide-react";
import { Pin } from "../types";

interface PinCardProps {
  pin: Pin;
  onPinClick: (id: string) => void;
  isSaved: boolean;
  onSaveToggle: (e: any, id: string) => void;
  onLikeToggle?: (e: any, id: string) => void;
}

export default function PinCard({
  pin,
  onPinClick,
  isSaved,
  onSaveToggle,
  onLikeToggle,
}: PinCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="pin-card group relative flex flex-col bg-[#141414] border border-[#222] hover:border-[#C5A059] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPinClick(pin.id)}
    >
      {/* Image and Hover Actions */}
      <div className="relative overflow-hidden rounded-t-2xl bg-black aspect-auto">
        <img
          src={pin.imageUrl}
          alt={pin.title}
          referrerPolicy="no-referrer"
          className="w-full h-auto max-h-[500px] object-cover transition-transform duration-700 group-hover:scale-104"
        />

        {/* Hover overlay with modern gallery-style controls */}
        <div
          className={`absolute inset-0 bg-[#0A0A0A]/60 backdrop-blur-[2px] transition-opacity duration-300 flex flex-col justify-between p-4 z-10 ${
            hovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Top of Card hover: Save button */}
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A059] opacity-80">
              {pin.category}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSaveToggle(e, pin.id);
              }}
              className={`px-4 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-wider font-extrabold shadow-md active-scale transition-all cursor-pointer ${
                isSaved
                  ? "bg-[#C5A059] text-black hover:bg-[#D4B273]"
                  : "border border-[#F4F4F4]/40 bg-black/80 text-[#F4F4F4] hover:bg-[#F4F4F4] hover:text-black hover:border-[#F4F4F4]"
              }`}
            >
              {isSaved ? "Saved" : "Save"}
            </button>
          </div>

          {/* Bottom of Card hover: Actions */}
          <div className="flex justify-between items-center">
            {/* Share action */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(`${window.location.origin}/pins/${pin.id}`);
                // Simple unobtrusive feedback
                const notification = document.createElement("div");
                notification.className = "fixed bottom-8 left-1/2 -translate-x-1/2 bg-black/90 border border-[#C5A059] text-white text-xs px-4 py-2 rounded-full z-50 animate-bounce";
                notification.innerText = "Gallery URL copied to clipboard";
                document.body.appendChild(notification);
                setTimeout(() => notification.remove(), 2000);
              }}
              className="w-8 h-8 bg-[#141414] border border-[#333] hover:border-[#C5A059] rounded-full flex items-center justify-center text-white transition-all active-scale"
              title="Copy link"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>

            {/* Quick like icon */}
            <div className="flex gap-1.5">
              {onLikeToggle && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onLikeToggle(e, pin.id);
                  }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all active-scale ${
                    pin.likedByUser
                      ? "bg-[#C5A059] text-black border-[#C5A059]"
                      : "bg-[#141414] border-[#333] text-[#A3A3A3] hover:text-white hover:border-[#C5A059]"
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${pin.likedByUser ? "fill-current" : ""}`} />
                </button>
              )}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="w-8 h-8 bg-[#141414] border border-[#333] hover:border-[#C5A059] rounded-full flex items-center justify-center text-white transition-all active-scale"
              >
                <MoreHorizontal className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Meta Information beneath Pin */}
      <div className="p-4 text-left">
        <h3 className="font-display font-semibold text-base text-[#F4F4F4] tracking-tight line-clamp-1 group-hover:text-[#C5A059] transition-colors leading-snug">
          {pin.title}
        </h3>
        
        <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-[#222]/80">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full overflow-hidden border border-[#333] flex-shrink-0 bg-black">
              <img
                src={pin.authorAvatar}
                alt={pin.authorName}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[11px] font-mono text-[#A3A3A3] hover:text-[#C5A059] truncate max-w-[120px] transition-colors uppercase tracking-wider">
              {pin.authorName}
            </span>
          </div>

          {/* Likes counter */}
          <span className="text-[10px] font-mono text-[#A3A3A3] flex items-center gap-1">
            <Heart className={`w-2.5 h-2.5 ${pin.likedByUser ? "text-[#C5A059] fill-current" : "text-[#A3A3A3]"}`} />
            <span>{pin.likes + (pin.likedByUser ? 1 : 0)}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
