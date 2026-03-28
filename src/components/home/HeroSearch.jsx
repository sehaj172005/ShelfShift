"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSearch() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="max-w-3xl glass-premium rounded-3xl md:rounded-[2.5rem] p-1.5 md:p-3 flex items-center gap-2"
    >
      <div className="flex-1 relative group">
        <Search className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search 2nd hand books..."
          suppressHydrationWarning
          className="w-full h-12 md:h-16 pl-10 md:pl-16 pr-4 bg-transparent border-none text-slate-900 placeholder:text-slate-400 text-sm md:text-lg font-bold outline-none"
        />
      </div>
      <Button
        onClick={handleSearch}
        suppressHydrationWarning
        className="h-12 md:h-16 px-6 md:px-12 bg-slate-900 hover:bg-black text-white rounded-2xl md:rounded-[1.75rem] font-black text-xs md:text-lg shadow-xl shadow-slate-200 shrink-0"
      >
        Search
      </Button>
    </motion.div>
  );
}
