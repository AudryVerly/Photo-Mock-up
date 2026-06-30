import { useState } from "react";
import { Search, Bell, MessageCircle, ChevronDown, PlusCircle } from "lucide-react";
import { CURRENT_USER } from "../data";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchText: string;
  setSearchText: (text: string) => void;
  activePinId: string | null;
  setActivePinId: (id: string | null) => void;
  onCreateClick: () => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  searchText,
  setSearchText,
  activePinId,
  setActivePinId,
  onCreateClick,
}: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const handleLogoClick = () => {
    setActivePinId(null);
    setSearchText("");
    setActiveTab("home");
  };

  const handleTabClick = (tab: string) => {
    setActivePinId(null);
    setActiveTab(tab);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#222] transition-all duration-300">
      <div className="flex justify-between items-center px-4 py-2 w-full max-w-7xl mx-auto h-16 md:px-6">
        {/* Brand Logo & Tabs */}
        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={handleLogoClick}
            id="logo-button"
            className="flex items-center gap-2 group text-left cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#C5A059]/10 border border-[#C5A059] text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                interests
              </span>
            </div>
            <div className="hidden sm:block font-display font-extrabold text-lg md:text-xl text-[#F4F4F4] tracking-tighter leading-none">
              STUDIO_ELEMENTS
            </div>
          </button>
          
          <nav className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleTabClick("home")}
              className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-all cursor-pointer ${
                activeTab === "home" && !activePinId
                  ? "text-[#C5A059] border-b border-[#C5A059]"
                  : "text-[#F4F4F4] opacity-60 hover:opacity-100"
              }`}
            >
              Archive
            </button>
            <button
              onClick={() => handleTabClick("explore")}
              className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-all cursor-pointer ${
                activeTab === "explore" && !activePinId
                  ? "text-[#C5A059] border-b border-[#C5A059]"
                  : "text-[#F4F4F4] opacity-60 hover:opacity-100"
              }`}
            >
              Chronicles
            </button>
            <button
              onClick={onCreateClick}
              className="px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#F4F4F4] opacity-60 hover:opacity-100 flex items-center gap-1.5 cursor-pointer"
            >
              Publish
            </button>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-3 md:mx-6 max-w-xl relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-[#C5A059] transition-colors" />
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (activeTab !== "explore" && activeTab !== "home") {
                setActiveTab("explore");
              }
              if (activePinId) {
                setActivePinId(null);
              }
            }}
            placeholder="Search archive: architecture, design, burrata..."
            className="w-full h-10 bg-[#141414] border border-[#222] focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/35 rounded-lg pl-11 pr-10 text-xs focus:outline-none transition-all font-mono text-[#F4F4F4] placeholder-zinc-500"
          />
          {searchText && (
            <button
              onClick={() => setSearchText("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded bg-zinc-800 text-zinc-400 hover:bg-zinc-700 text-[10px] flex items-center justify-center font-bold"
            >
              ×
            </button>
          )}
        </div>

        {/* User Utilities */}
        <div className="flex items-center gap-1 md:gap-3">
          {/* Create Floating Icon for Mobile */}
          <button
            onClick={onCreateClick}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white cursor-pointer"
            title="Create Pin"
          >
            <PlusCircle className="w-5.5 h-5.5 text-[#C5A059]" />
          </button>

          {/* Notifications Trigger */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowMessages(false);
              }}
              className={`p-2 rounded-lg text-[#F4F4F4]/80 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all active-scale cursor-pointer ${
                showNotifications ? "bg-zinc-900 border-zinc-800 text-[#C5A059]" : ""
              }`}
            >
              <Bell className="w-4.5 h-4.5" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#C5A059] rounded-full ring-1 ring-black"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 bg-[#141414] rounded-xl shadow-2xl border border-[#333] p-4 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#C5A059] font-bold">Chronicles / Alerts</h4>
                  <button onClick={() => setShowNotifications(false)} className="text-[10px] text-zinc-500 hover:text-zinc-300 font-bold uppercase tracking-wider">
                    Clear
                  </button>
                </div>
                <div className="space-y-3 max-h-72 overflow-y-auto hide-scrollbar">
                  <div className="flex gap-3 p-2 hover:bg-zinc-900/60 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-zinc-800">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center flex-shrink-0 text-[#C5A059] border border-[#C5A059]/30">
                      <span className="material-symbols-outlined text-xs">favorite</span>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#F4F4F4] leading-relaxed font-sans">
                        <span className="font-bold text-[#C5A059]">Sara W.</span> liked your comment on <span className="italic">Architectural Silence</span>.
                      </p>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-tight">10m ago</span>
                    </div>
                  </div>
                  <div className="flex gap-3 p-2 hover:bg-zinc-900/60 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-zinc-800">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1F8y4PqW0ewloh_JEVwxPlVQBd7Evic9G7iW-mJcGMQB_Q3d56fUwPoGoxdtd_8M-MxzmCg232tUb4V6SSyrPcq4cqX36nJoIAVP6PrId-ppdW7Mp7HvEfKdPGJWvJKEWNHuT5XRa1WQSLt4nwp1eayThTs989f3dw1poDE5QG56xSEmLpBsnGg_2GYFNkwc3ohrGujfMweoK36JEx7DKJLCCTa4HJj0vRFCkF-vz5OLid9RYyK1tho4o7hBucdOUY-Pz4C__MvE"
                      alt="Elena Vance"
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0 border border-zinc-800"
                    />
                    <div>
                      <p className="text-[11px] text-[#F4F4F4] leading-relaxed font-sans">
                        <span className="font-bold text-[#C5A059]">Elena Vance</span> published a new design board in <span className="font-bold">Minimalism</span>.
                      </p>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-tight">1h ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Messages Trigger */}
          <div className="relative">
            <button
              onClick={() => {
                setShowMessages(!showMessages);
                setShowNotifications(false);
              }}
              className={`p-2 rounded-lg text-[#F4F4F4]/80 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all active-scale cursor-pointer ${
                showMessages ? "bg-zinc-900 border-zinc-800 text-[#C5A059]" : ""
              }`}
            >
              <MessageCircle className="w-4.5 h-4.5" />
            </button>

            {showMessages && (
              <div className="absolute right-0 mt-3 w-80 bg-[#141414] rounded-xl shadow-2xl border border-[#333] p-4 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#C5A059] font-bold mb-3">Manifesto / Inbox</h4>
                <div className="space-y-3">
                  <div className="flex gap-3 p-2 hover:bg-zinc-900/60 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-zinc-800">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnw5Vf8119TbWcUeyOz3hrlCCKM7gFySUTLo_RveaEScr8FuvfzC8CR8b8e2X51vQ3QFSdlCZ67zagygK4LWukUVIvzFbxWhq7xwa-yv6okwYAojFchxdlJazXdeG4-IBuLlec4RKeHEGW1sD65vI3Utt0Vn8agafHke1ejNtdQwNH2dI1_56AdyyC8hJow3Jq1UIMVERoiCOy4dytEB7JukspSdKzznGvBrD23jCq_WKkIbU2iuI4IzZHqlrnSB9hd7a3ZeNbRP4"
                      alt="ArchDaily"
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0 border border-zinc-800"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-[11px] text-[#F4F4F4]">ArchDaily</span>
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">3h</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 font-sans line-clamp-1">
                        Thanks for curating our desert house design!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Profile Access */}
          <button
            onClick={() => handleTabClick("profile")}
            className={`p-0.5 rounded-lg transition-all active-scale cursor-pointer flex items-center justify-center ${
              activeTab === "profile" ? "ring-1 ring-[#C5A059]" : "hover:bg-zinc-900 border border-transparent hover:border-zinc-800"
            }`}
          >
            <div className="w-7.5 h-7.5 rounded-md overflow-hidden bg-zinc-900 border border-zinc-800">
              <img
                src={CURRENT_USER.avatar}
                alt={CURRENT_USER.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </button>
          
          <button className="hidden md:flex p-1.5 rounded-lg text-zinc-500 hover:text-white transition-colors cursor-pointer">
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
