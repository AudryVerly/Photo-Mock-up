import React, { useState, useEffect } from "react";
import { Plus, Home, Search, PlusCircle, Bell, User, CheckCircle2 } from "lucide-react";
import Header from "./components/Header";
import PinCard from "./components/PinCard";
import PinDetail from "./components/PinDetail";
import SearchTab from "./components/SearchTab";
import ProfileTab from "./components/ProfileTab";
import CreatePinModal from "./components/CreatePinModal";
import { INITIAL_PINS } from "./data";
import { Pin } from "./types";

const HOME_SUB_TABS = ["All", "Watching", "Design", "Recipe", "Adventure"];

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home"); // home, explore, profile
  const [homeSubTab, setHomeSubTab] = useState<string>("All");
  const [searchText, setSearchText] = useState<string>("");
  const [activePinId, setActivePinId] = useState<string | null>(null);

  // Loaded Pins & Collections
  const [pins, setPins] = useState<Pin[]>(() => {
    const saved = localStorage.getItem("curator_pins");
    return saved ? JSON.parse(saved) : INITIAL_PINS;
  });

  // Saved pins tracking list
  const [savedPinIds, setSavedPinIds] = useState<string[]>(() => {
    const saved = localStorage.getItem("curator_saved_pin_ids");
    // Default: architectural-silence and reflective-spaces pre-saved for instant fidelity
    return saved ? JSON.parse(saved) : ["architectural-silence", "reflective-spaces"];
  });

  // Created pins tracking list
  const [createdPins, setCreatedPins] = useState<Pin[]>(() => {
    const saved = localStorage.getItem("curator_created_pins");
    return saved ? JSON.parse(saved) : [];
  });

  // Notification Banner
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save states to local storage
  useEffect(() => {
    localStorage.setItem("curator_pins", JSON.stringify(pins));
  }, [pins]);

  useEffect(() => {
    localStorage.setItem("curator_saved_pin_ids", JSON.stringify(savedPinIds));
  }, [savedPinIds]);

  useEffect(() => {
    localStorage.setItem("curator_created_pins", JSON.stringify(createdPins));
  }, [createdPins]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Toggle saving a Pin
  const handleSaveToggle = (id: string) => {
    setSavedPinIds((prev) => {
      const isSaved = prev.includes(id);
      if (isSaved) {
        triggerToast("Removed from your board");
        return prev.filter((pId) => pId !== id);
      } else {
        triggerToast("Saved to your board!");
        return [...prev, id];
      }
    });
  };

  const handlePinSaveToggleFromCard = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    handleSaveToggle(id);
  };

  // Toggle liking a Pin
  const handleLikeToggle = (id: string) => {
    setPins((prevPins) =>
      prevPins.map((pin) => {
        if (pin.id === id) {
          const currentlyLiked = pin.likedByUser;
          triggerToast(currentlyLiked ? "Removed like" : "Liked Pin!");
          return {
            ...pin,
            likedByUser: !currentlyLiked,
          };
        }
        return pin;
      })
    );
  };

  const handlePinLikeToggleFromCard = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    handleLikeToggle(id);
  };

  // Handle publishing a new Pin
  const [showCreateModal, setShowCreateModal] = useState(false);
  const handlePublishPin = (newPin: Pin) => {
    setPins((prev) => [newPin, ...prev]);
    setCreatedPins((prev) => [newPin, ...prev]);
    setShowCreateModal(false);
    triggerToast("Your Pin has been published successfully!");
    setActivePinId(newPin.id); // View newly created pin directly
  };

  // Get active selected Pin detail object
  const activePin = pins.find((p) => p.id === activePinId);

  // Filter Pins for Home feed based on Home sub-tabs
  const filteredHomePins = pins.filter((p) => {
    if (homeSubTab === "All") return true;
    if (homeSubTab === "Watching") {
      // Watching category returns content from creators Elena Vance, Tech Inspo, Voyage, ArchDaily
      return ["Elena Vance", "Tech Inspo", "Voyage", "ArchDaily"].includes(p.authorName);
    }
    if (homeSubTab === "Design") {
      return ["Home Decor", "Art"].includes(p.category);
    }
    if (homeSubTab === "Recipe") {
      return ["Food & Drink"].includes(p.category);
    }
    if (homeSubTab === "Adventure") {
      return ["Style"].includes(p.category);
    }
    return true;
  });

  const savedPinsList = pins.filter((p) => savedPinIds.includes(p.id));

  return (
    <div className="min-h-screen bg-[#0A0A0A] pb-24 md:pb-8 flex flex-col font-sans select-none relative text-[#F4F4F4]">
      {/* Dynamic Toast Success banner */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-black/95 backdrop-blur-md text-[#F4F4F4] text-xs font-mono uppercase tracking-widest py-3 px-6 rounded-lg border border-[#C5A059] shadow-2xl flex items-center gap-2.5 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/20" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchText={searchText}
        setSearchText={setSearchText}
        activePinId={activePinId}
        setActivePinId={setActivePinId}
        onCreateClick={() => setShowCreateModal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-0 md:px-6 pt-2">
        {/* VIEW: Pin Details drill-down */}
        {activePinId && activePin ? (
          <PinDetail
            pin={activePin}
            onBackClick={() => setActivePinId(null)}
            isSaved={savedPinIds.includes(activePin.id)}
            onSaveToggle={handleSaveToggle}
            onLikeToggle={handleLikeToggle}
            allPins={pins}
            onRelatedPinClick={(id) => setActivePinId(id)}
            savedPinIds={savedPinIds}
            onPinSaveToggle={handlePinSaveToggleFromCard}
            onPinLikeToggle={handlePinLikeToggleFromCard}
          />
        ) : (
          <>
            {/* VIEW: Home Feed (Pinterest Grid) */}
            {activeTab === "home" && (
              <div className="w-full px-4 md:px-0 animate-in fade-in duration-300">
                {/* Home sub-tab filters (Sticky/Fluid under Header) */}
                <div className="flex items-center justify-center gap-2.5 md:gap-4 my-6 overflow-x-auto hide-scrollbar pb-1">
                  {HOME_SUB_TABS.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setHomeSubTab(tab)}
                      className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider active-scale transition-all duration-300 flex-shrink-0 cursor-pointer ${
                        homeSubTab === tab
                          ? "bg-[#C5A059] text-black font-extrabold border border-[#C5A059] shadow-md"
                          : "bg-[#141414] border border-[#222] text-[#A3A3A3] hover:text-white hover:border-[#C5A059]"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Grid */}
                {filteredHomePins.length === 0 ? (
                  <div className="py-20 text-center bg-[#141414] rounded-xl border border-[#222]">
                    <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">No pins in this sub-category yet.</p>
                  </div>
                ) : (
                  <div className="masonry-grid mt-4">
                    {filteredHomePins.map((pin) => (
                      <PinCard
                        key={pin.id}
                        pin={pin}
                        onPinClick={(id) => setActivePinId(id)}
                        isSaved={savedPinIds.includes(pin.id)}
                        onSaveToggle={handlePinSaveToggleFromCard}
                        onLikeToggle={handlePinLikeToggleFromCard}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* VIEW: Explore & Discovery search hub */}
            {activeTab === "explore" && (
              <SearchTab
                searchText={searchText}
                setSearchText={setSearchText}
                allPins={pins}
                onPinClick={(id) => setActivePinId(id)}
                savedPinIds={savedPinIds}
                onPinSaveToggle={handlePinSaveToggleFromCard}
                onPinLikeToggle={handlePinLikeToggleFromCard}
              />
            )}

            {/* VIEW: Saved Board and Created Pins Profile */}
            {activeTab === "profile" && (
              <ProfileTab
                savedPins={savedPinsList}
                createdPins={createdPins}
                onPinClick={(id) => setActivePinId(id)}
                savedPinIds={savedPinIds}
                onPinSaveToggle={handlePinSaveToggleFromCard}
                onPinLikeToggle={handlePinLikeToggleFromCard}
              />
            )}
          </>
        )}
      </main>

      {/* Sticky Bottom Bar Navigation for Mobile (thumb control) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-[#222]/80 z-40 shadow-2xl">
        <button
          onClick={() => {
            setActivePinId(null);
            setActiveTab("home");
            setSearchText("");
          }}
          className={`flex flex-col items-center justify-center active-scale cursor-pointer transition-all ${
            activeTab === "home" && !activePinId ? "text-[#C5A059] scale-105" : "text-zinc-500"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[9px] font-mono uppercase tracking-widest mt-1">Archive</span>
        </button>

        <button
          onClick={() => {
            setActivePinId(null);
            setActiveTab("explore");
          }}
          className={`flex flex-col items-center justify-center active-scale cursor-pointer transition-all ${
            activeTab === "explore" && !activePinId ? "text-[#C5A059] scale-105" : "text-zinc-500"
          }`}
        >
          <Search className="w-5 h-5" />
          <span className="text-[9px] font-mono uppercase tracking-widest mt-1">Chronicles</span>
        </button>

        <button
          onClick={() => setShowCreateModal(true)}
          className="flex flex-col items-center justify-center text-[#C5A059] active-scale cursor-pointer"
        >
          <PlusCircle className="w-5.5 h-5.5" />
          <span className="text-[9px] font-mono uppercase tracking-widest mt-1">Publish</span>
        </button>

        <button
          onClick={() => {
            triggerToast("Gallery alerts are fully synchronized.");
          }}
          className="flex flex-col items-center justify-center text-zinc-500 active-scale cursor-pointer"
        >
          <Bell className="w-5 h-5" />
          <span className="text-[9px] font-mono uppercase tracking-widest mt-1">Alerts</span>
        </button>

        <button
          onClick={() => {
            setActivePinId(null);
            setActiveTab("profile");
          }}
          className={`flex flex-col items-center justify-center active-scale cursor-pointer transition-all ${
            activeTab === "profile" && !activePinId ? "text-[#C5A059] scale-105" : "text-zinc-500"
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[9px] font-mono uppercase tracking-widest mt-1">Profile</span>
        </button>
      </nav>

      {/* Floating Action Button for Adding New Pin (Desktop Contextual) */}
      <button
        onClick={() => setShowCreateModal(true)}
        className="hidden md:flex fixed bottom-8 right-8 w-12 h-12 bg-[#141414] border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black rounded-lg shadow-2xl items-center justify-center active-scale transition-all z-40 cursor-pointer"
        title="Publish Curator Entry"
      >
        <Plus className="w-5 h-5" />
      </button>

      {/* Full-Screen Creator Modal overlay */}
      {showCreateModal && (
        <CreatePinModal
          onClose={() => setShowCreateModal(false)}
          onPublish={handlePublishPin}
        />
      )}
    </div>
  );
}
