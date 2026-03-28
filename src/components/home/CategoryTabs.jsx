"use client";

import { useRouter } from "next/navigation";
import { Book, GraduationCap, LayoutGrid, Sparkles, Layers, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroCategories = [
  { id: "all", label: "All Items", icon: LayoutGrid },
  { id: "JEE", label: "JEE", icon: Book },
  { id: "NEET", label: "NEET", icon: Sparkles },
  { id: "CBSE Boards", label: "CBSE Boards", icon: GraduationCap },
  { id: "Bundles", label: "Bundles", icon: Layers },
];

export default function CategoryTabs({ activeCategory }) {
  const router = useRouter();

  const handleCategoryChange = (id) => {
    if (id === "all") {
      router.push("/", { scroll: false });
    } else {
      router.push(`/?category=${id}`, { scroll: false });
    }
  };

  return (
    <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6 lg:mx-0 lg:px-0">
      {heroCategories.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeCategory === cat.id;
        return (
          <button
            suppressHydrationWarning
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`shrink-0 flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
              isActive
                ? "bg-indigo-600 text-white shadow-xl shadow-indigo-200 scale-105"
                : "bg-white border border-slate-100 text-slate-400 hover:border-indigo-200 hover:text-indigo-600"
            }`}
          >
            <Icon size={14} />
            {cat.label}
          </button>
        );
      })}
      <Button suppressHydrationWarning variant="outline" className="h-12 w-12 rounded-full border-slate-100 text-slate-400 shrink-0">
        <Filter className="w-4 h-4" />
      </Button>
    </div>
  );
}
