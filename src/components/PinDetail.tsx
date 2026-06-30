import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, Share2, MoreHorizontal, MessageSquare, Heart, Send } from "lucide-react";
import { Pin } from "../types";
import { CURRENT_USER } from "../data";
import PinCard from "./PinCard";

interface PinDetailProps {
  pin: Pin;
  onBackClick: () => void;
  isSaved: boolean;
  onSaveToggle: (id: string) => void;
  onLikeToggle: (id: string) => void;
  allPins: Pin[];
  onRelatedPinClick: (id: string) => void;
  savedPinIds: string[];
  onPinSaveToggle: (e: any, id: string) => void;
  onPinLikeToggle: (e: any, id: string) => void;
}

export default function PinDetail({
  pin,
  onBackClick,
  isSaved,
  onSaveToggle,
  onLikeToggle,
  allPins,
  onRelatedPinClick,
  savedPinIds,
  onPinSaveToggle,
  onPinLikeToggle,
}: PinDetailProps) {
  const [newComment, setNewComment] = useState("");
  const [isFollowing, setIsFollowing] = useState(pin.isFollowingAuthor || false);
  const commentsEndRef = useRef<HTMLDivElement>(null);

  // Filter similar pins (exclude current)
  const relatedPins = allPins.filter(
    (p) => p.category === pin.category && p.id !== pin.id
  ).slice(0, 6);

  // Scroll comments to bottom when a new one is added
  const scrollToBottom = () => {
    commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const commentObj = {
      id: `c_user_${Date.now()}`,
      authorName: CURRENT_USER.name,
      authorAvatar: CURRENT_USER.avatar,
      content: newComment,
      likes: 0,
      timestamp: "Just now",
    };

    pin.comments.push(commentObj);
    setNewComment("");
    setTimeout(scrollToBottom, 50);
  };

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
    pin.isFollowingAuthor = !isFollowing;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-0 md:px-6 py-4 animate-in fade-in duration-300">
      {/* Mobile Sticky Back Button Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 sticky top-16 bg-[#0A0A0A]/95 backdrop-blur-md z-40 border-b border-[#222]">
        <button
          onClick={onBackClick}
          className="p-2 -ml-2 rounded-lg hover:bg-[#141414] active-scale transition-colors cursor-pointer flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[#A3A3A3] hover:text-[#C5A059]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-[#141414] active-scale cursor-pointer text-zinc-500">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg hover:bg-[#141414] active-scale cursor-pointer text-zinc-500">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Splits Card Container */}
      <div className="flex flex-col md:flex-row bg-[#141414] md:rounded-2xl border border-[#222] overflow-hidden min-h-[500px]">
        {/* Left Side: Gorgeous Image Container */}
        <div className="w-full md:w-1/2 relative bg-black flex items-center justify-center">
          <div className="w-full aspect-[2/3] md:aspect-auto md:h-full max-h-[800px] overflow-hidden">
            <img
              src={pin.imageUrl}
              alt={pin.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover md:rounded-l-2xl md:rounded-r-none rounded-b-2xl md:rounded-b-none shadow-sm md:shadow-none"
            />
          </div>

          {/* Floating Save Button on Mobile */}
          <button
            onClick={() => onSaveToggle(pin.id)}
            className={`absolute top-5 right-5 px-6 py-2 rounded-full font-mono text-[10px] uppercase tracking-wider font-extrabold shadow-lg active-scale md:hidden transition-all duration-300 cursor-pointer ${
              isSaved
                ? "bg-[#C5A059] text-black border border-[#C5A059]"
                : "bg-[#141414] border border-[#C5A059] text-[#C5A059]"
            }`}
          >
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>

        {/* Right Side: Pin Interactive Controls & Metadata */}
        <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 lg:p-10 justify-between">
          <div>
            {/* Desktop Action Header Bar */}
            <div className="hidden md:flex items-center justify-between mb-8 pb-4 border-b border-[#222]/80">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`${window.location.origin}/pins/${pin.id}`);
                    // Simple unobtrusive feedback
                    const notification = document.createElement("div");
                    notification.className = "fixed bottom-8 left-1/2 -translate-x-1/2 bg-black/90 border border-[#C5A059] text-white text-xs px-4 py-2 rounded-full z-50 animate-bounce";
                    notification.innerText = "Gallery URL copied to clipboard";
                    document.body.appendChild(notification);
                    setTimeout(() => notification.remove(), 2000);
                  }}
                  className="p-2 rounded-lg border border-[#222] bg-black/30 hover:border-[#C5A059] hover:text-[#C5A059] text-zinc-400 cursor-pointer transition-all"
                  title="Copy link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg border border-[#222] bg-black/30 hover:border-[#C5A059] hover:text-[#C5A059] text-zinc-400 cursor-pointer transition-all">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onLikeToggle(pin.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono uppercase tracking-wider transition-all active-scale ${
                    pin.likedByUser
                      ? "bg-[#C5A059] text-black border-[#C5A059]"
                      : "bg-[#141414] border-[#222] text-[#A3A3A3] hover:text-white hover:border-[#C5A059]"
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${pin.likedByUser ? "fill-current" : ""}`} />
                  <span>{pin.likes + (pin.likedByUser ? 1 : 0)} Likes</span>
                </button>

                <button
                  onClick={() => onSaveToggle(pin.id)}
                  className={`px-5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg shadow-md active-scale transition-all duration-300 cursor-pointer ${
                    isSaved
                      ? "bg-[#C5A059] text-black hover:bg-[#D4B273] border border-[#C5A059]"
                      : "bg-[#141414] border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black"
                  }`}
                >
                  {isSaved ? "Saved" : "Save"}
                </button>
              </div>
            </div>

            {/* Title & Description */}
            <div className="mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A059] opacity-80 block mb-2">
                Dimension / {pin.category}
              </span>
              <h1 className="font-display font-medium text-2xl md:text-3.5xl text-[#F4F4F4] leading-tight tracking-tight mb-4">
                {pin.title}
              </h1>
              <p className="font-sans text-xs md:text-sm text-[#A3A3A3] leading-relaxed">
                {pin.description}
              </p>
            </div>

            {/* Author Profile section */}
            <div className="flex items-center justify-between mb-8 p-4 rounded-xl bg-black/40 border border-[#222] hover:bg-black/60 hover:border-zinc-800 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#333] bg-[#141414]">
                  <img
                    src={pin.authorAvatar}
                    alt={pin.authorName}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#F4F4F4] text-xs uppercase font-mono tracking-wider">{pin.authorName}</p>
                  <p className="text-zinc-500 text-[10px] uppercase font-mono tracking-widest">{pin.authorFollowers}</p>
                </div>
              </div>
              <button
                onClick={handleFollowToggle}
                className={`px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest rounded-lg transition-all active-scale cursor-pointer ${
                  isFollowing
                    ? "border border-[#222] bg-[#141414] text-zinc-400 hover:text-white"
                    : "bg-[#C5A059] text-black hover:bg-[#D4B273]"
                }`}
              >
                {isFollowing ? "Watching" : "Watch"}
              </button>
            </div>

            {/* Comments Header & List */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4 border-b border-[#222] pb-2">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059] flex items-center gap-2 font-bold">
                  <span>Manifesto Comments</span>
                  <span className="bg-zinc-800 text-zinc-400 text-[10px] px-2 py-0.5 rounded font-mono">
                    {pin.comments.length}
                  </span>
                </h3>
              </div>

              {pin.comments.length === 0 ? (
                <div className="py-6 text-center bg-black/40 rounded-xl border border-dashed border-[#222]/80">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Silence in this archive. Leave a comment.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[220px] overflow-y-auto pr-1 hide-scrollbar">
                  {pin.comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3 text-left">
                      <div className="w-7 h-7 rounded-full overflow-hidden bg-zinc-800 flex-shrink-0 border border-zinc-700">
                        {comment.authorAvatar ? (
                          <img
                            src={comment.authorAvatar}
                            alt={comment.authorName}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center font-bold text-xs font-mono">
                            {comment.authorName.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col">
                        <p className="text-xs leading-relaxed text-[#F4F4F4] font-sans">
                          <span className="font-mono text-[11px] uppercase text-[#C5A059] tracking-wider mr-2 font-bold">{comment.authorName}</span>
                          {comment.content}
                        </p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-tight">{comment.timestamp || "1h ago"}</span>
                          <button className="text-[9px] font-mono text-zinc-500 hover:text-white uppercase tracking-wider cursor-pointer active-scale">
                            Reply
                          </button>
                          <button className="text-[9px] font-mono text-zinc-500 hover:text-[#C5A059] uppercase tracking-wider flex items-center gap-0.5 cursor-pointer active-scale">
                            <Heart className="w-2 h-2" />
                            <span>{comment.likes}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={commentsEndRef} />
                </div>
              )}
            </div>
          </div>

          {/* Comment Input Sticky Container */}
          <form
            onSubmit={handlePostComment}
            className="flex items-center gap-3 pt-4 border-t border-[#222]/80 mt-4"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden bg-zinc-900 border border-zinc-800 flex-shrink-0">
              <img
                src={CURRENT_USER.avatar}
                alt={CURRENT_USER.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 relative flex items-center">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Log comment to chronicle..."
                className="w-full bg-[#0a0a0a] border border-[#222] focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 rounded-lg py-3 pl-4 pr-12 focus:outline-none transition-all text-xs font-mono text-[#F4F4F4] placeholder-zinc-600"
              />
              <button
                type="submit"
                disabled={!newComment.trim()}
                className={`absolute right-4 text-[10px] font-mono uppercase tracking-widest text-[#C5A059] active-scale transition-opacity cursor-pointer ${
                  newComment.trim() ? "opacity-100 hover:text-[#D4B273]" : "opacity-30 pointer-events-none"
                }`}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Related Pins "More like this" Section */}
      {relatedPins.length > 0 && (
        <section className="mt-16 px-4 md:px-0">
          <div className="relative flex items-center justify-center mb-10">
            <div className="absolute inset-x-0 h-px bg-[#222]"></div>
            <h2 className="relative px-6 bg-[#0A0A0A] font-display font-medium text-xs uppercase tracking-[0.2em] text-[#C5A059]">
              More like this Dimension
            </h2>
          </div>

          <div className="masonry-grid">
            {relatedPins.map((relatedPin) => (
              <PinCard
                key={relatedPin.id}
                pin={relatedPin}
                onPinClick={onRelatedPinClick}
                isSaved={savedPinIds.includes(relatedPin.id)}
                onSaveToggle={onPinSaveToggle}
                onLikeToggle={onPinLikeToggle}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
