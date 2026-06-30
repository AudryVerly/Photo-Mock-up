import React, { useState } from "react";
import { X, Sparkles, Image as ImageIcon } from "lucide-react";
import { Pin } from "../types";
import { CURRENT_USER } from "../data";

interface CreatePinModalProps {
  onClose: () => void;
  onPublish: (newPin: Pin) => void;
}

const STOCK_TEMPLATES = [
  {
    name: "Concrete Poolside",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtc2jyRQeYS4HZO0k_NJDd047otBhX5JCd1FEyxa8ns3_Nvhyk9gkVdThxZdmy6DuRYHhoKJYmOAu6b6gVdnsgbmY1U4QrCNkzSNISYGsnbbx-kDNYADU7noDU2npeV0PufhdvGaJjv06Y-LZ8vHTDmJb1b4OacCt-qBHNBrxnCToe32qUR5qPH-D3bAlktc7MU9tQTjkjJ5jXqsDzLVWUrM6WIjDdG8woahDAuErV82G6q5A6TVSBGghv1ncjg6zDqYQ89GKtxfU",
    category: "Home Decor",
  },
  {
    name: "Scandinavian Living",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCLyBmwqZ5RNdgayrakroAMr9IAzKPPsfH82NZaqe38tlaA2v0xpcSwjh4S6ZApHsbctWUWoxbhpglXAiwmBIwhnHGs_fNYdlntZL4CrXWgr6sUOtrg7Jhta5Qk-EbmiDxVNQh6a_G01Z4o7vNE3MkeRCiiK9DzBP6sXIZNqzyUZjTDK88_RFurMxOfBVR2Bb0plIlI48wWDBtsabsCkccZC01gn0iJTpC0EvXgCxqWoQ1BRO3laKWYlwPzaxLZ8cq8IizYchbnMw",
    category: "Home Decor",
  },
  {
    name: "Mechanical Keys",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuABVDYQiCF8NYalDIQD8BJJR6ObzuwhF4_TYblOzzyRhXKnJjoa7THZT6d0GwLlDTHjxbqGbryuxgwfKMNtWZsaOLCi6JuRUkgU7WdElQPRujGGDgeOX4DdKWze_I8N7T9pBB9E3z4egTbNu6FTqrGjEolD1YqiIKOQaeBko5rDa-XDlEWOVxRp3pCcFg-73hIrCeqG-50dGMS_42V2xXb4PqymsAXIbueH2vsr0ZZ1cf4MbhJg4jtUD22dt5HDMTdvR_CuM8812Ns",
    category: "Style",
  },
  {
    name: "Summer Drink",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJbzHBclZFZONKUA6fYcfuNKNbldFIDZ5h1FBflq2lUm-BhinlX0N8s4v_ZLpJ0ViWe3qFHLQ0V2PFybA4SVmKxCfkOM0dNul5W9b8seI0mQ66-RJXmN9wrhTtQuCqwkWabHt8HQfZeAR44GMHOAV4ui7qVcfD3K-iOPrRdGMpUanSqbYWOupEit0rhGvu_hraCjMXzRXwMpJ6Pjpl62lHECp8dI6I0Hj0JIvrnWVRiY7QR3wLqHkrzl5oloT0eu7haoPoI8VdAgs",
    category: "Food & Drink",
  },
];

export default function CreatePinModal({ onClose, onPublish }: CreatePinModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("Home Decor");

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !imageUrl.trim()) return;

    const newPin: Pin = {
      id: `custom_pin_${Date.now()}`,
      title,
      description: description || "Curated addition to my design collection.",
      imageUrl,
      authorName: CURRENT_USER.name,
      authorAvatar: CURRENT_USER.avatar,
      authorFollowers: "1.2k subscribers",
      category,
      comments: [],
      likes: 0,
      likedByUser: false,
      isFollowingAuthor: false,
    };

    onPublish(newPin);
  };

  const selectStockTemplate = (url: string, cat: string) => {
    setImageUrl(url);
    setCategory(cat);
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#141414] rounded-2xl w-full max-w-3xl shadow-2xl relative border border-[#222] flex flex-col md:flex-row overflow-hidden animate-in zoom-in-95 duration-300 text-[#F4F4F4]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-zinc-900 border border-[#222] hover:bg-[#C5A059] hover:text-black text-[#F4F4F4] flex items-center justify-center transition-all active-scale cursor-pointer z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left column: Visual Template Selector or Preview */}
        <div className="w-full md:w-1/2 bg-black/40 p-6 flex flex-col justify-between border-r border-[#222] min-h-[350px] md:min-h-0">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059] mb-1.5 flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4" />
              <span>Image Archive</span>
            </h3>
            <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-4 leading-relaxed">
              Input web address or select a stock template.
            </p>

            {/* Template options */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {STOCK_TEMPLATES.map((tpl) => (
                <button
                  key={tpl.name}
                  type="button"
                  onClick={() => selectStockTemplate(tpl.url, tpl.category)}
                  className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer active-scale transition-all duration-200 border text-left ${
                    imageUrl === tpl.url ? "border-[#C5A059] ring-1 ring-[#C5A059]/20" : "border-[#222]"
                  }`}
                >
                  <img src={tpl.url} alt={tpl.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-black/75 p-1.5 text-center border-t border-[#222]">
                    <span className="text-[9px] text-[#F4F4F4] font-mono uppercase tracking-wider leading-none">{tpl.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Image Preview Window */}
          <div className="flex-1 flex items-center justify-center border border-[#222] rounded-xl bg-black/20 p-3 min-h-[160px] overflow-hidden">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Preview"
                className="w-full h-full max-h-[220px] object-cover rounded-lg shadow-inner animate-in fade-in"
                onError={() => alert("Failed to load image from link, please double check link URL.")}
              />
            ) : (
              <div className="text-center p-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-[#222] flex items-center justify-center text-[#C5A059] mx-auto mb-2">
                  <span className="material-symbols-outlined text-sm">image</span>
                </div>
                <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Preview container</p>
              </div>
            )}
          </div>
        </div>

        {/* Right column: Form fields */}
        <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="font-display font-medium text-xl md:text-2xl text-[#F4F4F4] flex items-center gap-2">
              <span>Publish Entry</span>
              <span className="text-[9px] bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30 px-2 py-0.5 rounded font-mono uppercase tracking-widest flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5 fill-current" /> Custom
              </span>
            </h2>
          </div>

          <form onSubmit={handlePublish} className="space-y-4 text-left">
            {/* Image URL Input */}
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">Image URL *</label>
              <input
                type="text"
                required
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Paste web address (https://...)"
                className="w-full bg-[#0a0a0a] border border-[#222] focus:border-[#C5A059] rounded-lg py-2.5 px-4 text-xs font-mono text-[#F4F4F4] placeholder-zinc-700 focus:outline-none transition-all"
              />
            </div>

            {/* Title Input */}
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add entry title..."
                className="w-full bg-[#0a0a0a] border border-[#222] focus:border-[#C5A059] rounded-lg py-2.5 px-4 text-xs font-mono text-[#F4F4F4] placeholder-zinc-700 focus:outline-none transition-all"
              />
            </div>

            {/* Description Input */}
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Compose architectural overview or chronicle..."
                rows={3}
                className="w-full bg-[#0a0a0a] border border-[#222] focus:border-[#C5A059] rounded-lg py-2.5 px-4 text-xs font-mono text-[#F4F4F4] placeholder-zinc-700 focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Category dropdown */}
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">Chronicle Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-[#222] focus:border-[#C5A059] rounded-lg py-2.5 px-4 text-xs font-mono text-[#F4F4F4] focus:outline-none transition-all cursor-pointer"
              >
                <option value="Home Decor" className="bg-[#141414]">Home Decor</option>
                <option value="Food & Drink" className="bg-[#141414]">Food & Drink</option>
                <option value="Style" className="bg-[#141414]">Style</option>
                <option value="Art" className="bg-[#141414]">Art</option>
              </select>
            </div>

            {/* Submit Actions */}
            <div className="pt-4 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-[#141414] border border-[#222] text-[#A3A3A3] hover:text-white font-mono uppercase text-[10px] tracking-wider transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!title.trim() || !imageUrl.trim()}
                className={`px-4 py-2 rounded-lg font-mono uppercase text-[10px] tracking-widest font-extrabold shadow-md active-scale transition-all cursor-pointer ${
                  title.trim() && imageUrl.trim()
                    ? "bg-[#C5A059] text-black hover:bg-[#D4B273]"
                    : "bg-zinc-850 text-zinc-500 border border-zinc-800 cursor-not-allowed"
                }`}
              >
                Publish Archive
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
