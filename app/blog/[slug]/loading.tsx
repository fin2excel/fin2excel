export default function BlogPostLoading() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20 animate-pulse">
      <article className="max-w-[800px] mx-auto px-6">
        {/* Header Skeleton */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-6 w-24 bg-swiss-blue/10 rounded-full"></div>
            <div className="h-4 w-16 bg-swiss-black/10 rounded-sm"></div>
          </div>
          
          {/* Title Skeleton */}
          <div className="space-y-3 mb-6">
            <div className="h-10 md:h-14 bg-swiss-black/15 w-full rounded-sm"></div>
            <div className="h-10 md:h-14 bg-swiss-black/15 w-5/6 rounded-sm"></div>
          </div>
          
          {/* Subtitle Skeleton */}
          <div className="space-y-2 mb-10">
            <div className="h-6 bg-swiss-black/10 w-full rounded-sm"></div>
            <div className="h-6 bg-swiss-black/10 w-4/5 rounded-sm"></div>
          </div>

          {/* Author Block Skeleton */}
          <div className="flex items-center justify-between py-8 border-y border-swiss-black/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-swiss-black/10"></div>
              <div className="space-y-2">
                <div className="h-4 bg-swiss-black/15 w-28 rounded-sm"></div>
                <div className="h-3 bg-swiss-black/10 w-20 rounded-sm"></div>
              </div>
            </div>
            <div className="h-3 bg-swiss-black/10 w-24 rounded-sm"></div>
          </div>
        </header>

        {/* Featured Image Skeleton */}
        <div className="aspect-video w-full mb-16 bg-swiss-black/10 rounded-sm relative flex items-center justify-center">
          <div className="text-xs uppercase tracking-[0.2em] font-bold text-swiss-dark-gray/60 animate-bounce">
            Retrieving Vault Entry... Waking up databases...
          </div>
        </div>

        {/* Article Body Content Skeletons */}
        <div className="space-y-6">
          <div className="h-4 bg-swiss-black/10 w-full rounded-sm"></div>
          <div className="h-4 bg-swiss-black/10 w-full rounded-sm"></div>
          <div className="h-4 bg-swiss-black/10 w-11/12 rounded-sm"></div>
          
          <div className="h-4 bg-swiss-black/10 w-full rounded-sm pt-4"></div>
          <div className="h-4 bg-swiss-black/10 w-5/6 rounded-sm"></div>
          
          {/* Blockquote Skeleton */}
          <div className="border-l-4 border-swiss-blue pl-8 py-4 my-12 bg-swiss-blue/5">
            <div className="h-6 bg-swiss-black/15 w-11/12 rounded-sm mb-2"></div>
            <div className="h-6 bg-swiss-black/15 w-3/4 rounded-sm"></div>
          </div>
          
          <div className="h-4 bg-swiss-black/10 w-full rounded-sm"></div>
          <div className="h-4 bg-swiss-black/10 w-full rounded-sm"></div>
          <div className="h-4 bg-swiss-black/10 w-4/5 rounded-sm"></div>
        </div>

        {/* Footer Skeleton */}
        <footer className="mt-24 pt-12 border-t border-swiss-black/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="h-6 w-16 bg-swiss-black/10 rounded-sm"></div>
              <div className="h-6 w-16 bg-swiss-black/10 rounded-sm"></div>
            </div>
            <div className="h-4 w-28 bg-swiss-black/10 rounded-sm"></div>
          </div>
        </footer>
      </article>
    </div>
  )
}
