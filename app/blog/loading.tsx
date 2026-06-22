export default function BlogLoading() {
  return (
    <div className="bg-swiss-bg text-swiss-black font-sans min-h-screen pt-40 pb-20 px-6 md:px-10 animate-pulse">
      <div className="max-w-[1400px] mx-auto">
        {/* Newspaper Masthead Skeleton */}
        <header className="mb-12 border-b-4 border-double border-swiss-black pb-8 text-center">
          <div className="flex justify-between items-center text-[10px] tracking-[0.3em] uppercase font-bold border-b border-swiss-black/10 pb-4 mb-8">
            <div className="h-3 w-32 bg-swiss-black/10 rounded-sm"></div>
            <div className="h-3 w-48 bg-swiss-black/10 rounded-sm hidden md:block"></div>
            <div className="h-3 w-28 bg-swiss-black/10 rounded-sm"></div>
          </div>
          <h1 className="text-[12vw] md:text-[8vw] leading-none font-display font-black uppercase tracking-tighter mb-4 text-swiss-black/5">
            The Insights.
          </h1>
          <div className="h-4 bg-swiss-black/10 w-2/3 mx-auto rounded-sm mb-2"></div>
          <div className="h-4 bg-swiss-black/10 w-1/2 mx-auto rounded-sm"></div>
        </header>

        {/* Categories Bar Skeleton */}
        <nav className="flex flex-wrap justify-center gap-6 mb-12 border-b border-swiss-black/10 pb-6">
          {['All', 'Wealth', 'Property', 'Regulation', 'Lifestyle'].map((cat, i) => (
            <div
              key={i}
              className="h-3 w-16 bg-swiss-black/10 rounded-sm"
            ></div>
          ))}
        </nav>

        {/* Main Newspaper Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Left: Primary Story Skeleton */}
          <div className="lg:col-span-8 space-y-12">
            <div className="border-b border-swiss-black/10 pb-12">
              {/* Image Skeleton */}
              <div className="aspect-[16/9] w-full bg-swiss-black/10 mb-8 relative flex items-center justify-center">
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-swiss-dark-gray/60 animate-bounce">
                  Fetching Insights Database...
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Title Skeleton */}
                <div className="h-10 md:h-14 bg-swiss-black/15 w-full rounded-sm"></div>
                <div className="h-10 md:h-14 bg-swiss-black/15 w-4/5 rounded-sm"></div>
                
                {/* Excerpt Skeleton */}
                <div className="space-y-2 pt-4">
                  <div className="h-4 bg-swiss-black/10 w-full rounded-sm"></div>
                  <div className="h-4 bg-swiss-black/10 w-full rounded-sm"></div>
                  <div className="h-4 bg-swiss-black/10 w-3/4 rounded-sm"></div>
                </div>

                {/* Author Info Skeleton */}
                <div className="flex items-center gap-6 pt-6 border-t border-swiss-black/5 mt-6">
                  <div className="w-10 h-10 rounded-full bg-swiss-black/10"></div>
                  <div className="h-3 w-24 bg-swiss-black/10 rounded-sm"></div>
                  <div className="h-3 w-16 bg-swiss-black/10 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Secondary Stories Row Skeletons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[1, 2].map((id) => (
                <div key={id} className="border-b border-swiss-black/10 pb-8 lg:border-b-0 lg:pb-0">
                  <div className="aspect-[16/10] bg-swiss-black/10 w-full mb-6"></div>
                  <div className="space-y-3">
                    <div className="h-6 bg-swiss-black/15 w-full rounded-sm"></div>
                    <div className="h-6 bg-swiss-black/15 w-5/6 rounded-sm"></div>
                    <div className="h-3 bg-swiss-black/10 w-full rounded-sm pt-2"></div>
                    <div className="h-3 bg-swiss-black/10 w-2/3 rounded-sm"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial List Skeletons */}
          <div className="lg:col-span-4 border-t-4 lg:border-t-0 lg:border-l border-swiss-black pt-12 lg:pt-0 lg:pl-12 space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest border-b border-swiss-black pb-3 mb-6">
                Market Analyses
              </h3>
              <div className="space-y-8">
                {[1, 2, 3].map((id) => (
                  <div key={id} className="border-b border-swiss-black/5 pb-6 last:border-0 last:pb-0">
                    <div className="h-3 bg-swiss-blue/15 w-16 mb-2 rounded-sm"></div>
                    <div className="h-5 bg-swiss-black/15 w-full mb-2 rounded-sm"></div>
                    <div className="h-5 bg-swiss-black/15 w-5/6 mb-3 rounded-sm"></div>
                    <div className="h-3 bg-swiss-black/10 w-24 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
