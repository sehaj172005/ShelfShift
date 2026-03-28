import { BookOpen } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen pb-20 md:pb-12 overflow-x-hidden font-sans">
      {/* Hero Skeleton (static part) */}
      <section className="relative pb-24 md:pb-40 px-6 md:px-12 bg-mesh overflow-hidden border-b border-indigo-50/50">
        <div className="max-w-7xl mx-auto relative z-10 pt-12 md:pt-20">
          <div className="w-48 h-8 bg-slate-100 rounded-full mb-10 animate-pulse" />
          <div className="w-3/4 h-24 bg-slate-100 rounded-3xl mb-8 animate-pulse" />
          <div className="w-1/2 h-6 bg-slate-100 rounded-full mb-12 animate-pulse" />
          <div className="flex gap-4 mb-16">
            <div className="w-40 h-16 bg-slate-100 rounded-3xl animate-pulse" />
            <div className="w-40 h-16 bg-slate-100 rounded-3xl animate-pulse" />
          </div>
          <div className="max-w-3xl h-20 bg-slate-100 rounded-[2.5rem] animate-pulse" />
        </div>
      </section>

      {/* Grid Skeleton */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-20">
        <div className="flex justify-between items-end mb-12">
           <div className="w-64 h-12 bg-slate-100 rounded-2xl animate-pulse" />
           <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-24 h-12 bg-slate-100 rounded-full animate-pulse" />
              ))}
           </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="aspect-[3/4.5] rounded-[2.5rem] bg-slate-50 relative overflow-hidden">
               <div className="absolute inset-0 skeleton-shimmer" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
