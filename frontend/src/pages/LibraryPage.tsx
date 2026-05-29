import {
  Home,
  BookOpen,
  Users,
  BarChart3,
  Search,
  Pencil,
  Clock,
  Share2,
  List,
  Folder,
  Crown,
  Plus,
  ChevronDown,
  Library,
} from "lucide-react"

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Desktop Left Icon Rail */}
      <aside className="fixed left-0 top-0 hidden h-screen w-[96px] border-r border-zinc-200 bg-zinc-50 lg:flex lg:flex-col lg:items-center">
        <div className="py-8">
          <h1 className="text-4xl font-black text-pink-500">▾</h1>
        </div>

        <nav className="mt-10 flex flex-1 flex-col items-center gap-6">
          <RailItem icon={<Home size={22} />} label="Home" />
          <RailItem icon={<BookOpen size={22} />} label="My library" active />
          <RailItem icon={<BarChart3 size={22} />} label="Sessions" />
          <RailItem icon={<Users size={22} />} label="Students" />
        </nav>

        <div className="mb-6 flex flex-col items-center gap-6">
          <button className="grid size-11 place-items-center rounded-lg bg-yellow-400">
            <Crown size={22} fill="black" />
          </button>

          <div className="grid size-14 place-items-center rounded-full bg-teal-700 text-white">
            :)
          </div>
        </div>
      </aside>

      {/* Desktop Library Sidebar */}
      <aside className="fixed left-[96px] top-0 hidden h-screen w-[340px] border-r border-zinc-200 bg-zinc-50 px-6 py-8 lg:block">
        <h2 className="mb-10 text-2xl font-bold">Library</h2>

        <nav className="space-y-7">
          <LibrarySidebarItem
            icon={<Pencil size={22} />}
            label="Created"
            count="0 / 20"
            active
          />

          <LibrarySidebarItem
            icon={<Clock size={22} />}
            label="Previously used"
          />

          <LibrarySidebarItem
            icon={<Share2 size={22} />}
            label="Shared with me"
          />

          <LibrarySidebarItem icon={<List size={22} />} label="All activities" />

          <div className="border-t border-zinc-300" />

          <LibrarySidebarItem icon={<Folder size={22} />} label="Collections" count="0" />

          <LibrarySidebarItem icon={<Folder size={22} />} label="Teams" count="0" />
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="mb-3 flex items-center justify-between text-base font-bold">
            <span>0/20 activities created</span>
            <span className="text-zinc-500">ⓘ</span>
          </div>

          <div className="h-3 rounded-full bg-zinc-200" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="pb-24 lg:ml-[436px] lg:pb-0">
        {/* Top Search Bar */}
        <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white px-5 py-4 lg:px-6">
          <div className="flex items-center gap-3 rounded-full border border-zinc-300 px-5 py-3">
            <Search size={22} />
            <input
              placeholder="Search by activity name"
              className="w-full bg-transparent text-base outline-none placeholder:text-zinc-400"
            />
          </div>
        </header>

        <section className="px-6 py-10 lg:px-9">
          {/* Page Header */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="text-3xl font-bold">Created by me</h1>

            <button className="hidden items-center gap-2 rounded-lg bg-fuchsia-700 px-6 py-3 text-lg font-bold text-white lg:flex">
              <Plus size={22} />
              Add resource
              <ChevronDown size={20} />
            </button>
          </div>

          {/* Tabs and Filter */}
          <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-5">
              <button className="rounded-full bg-white px-6 py-4 text-xl font-bold shadow-md ring-1 ring-zinc-200">
                Created (0/20)
              </button>

              <button className="px-2 py-4 text-xl font-bold text-zinc-500">
                Draft (0)
              </button>

              <button className="px-2 py-4 text-xl font-bold text-zinc-500">
                Archived (0)
              </button>
            </div>

            <button className="hidden items-center gap-2 rounded-lg border border-zinc-300 px-6 py-4 text-lg font-bold lg:flex">
              Activity type
              <ChevronDown size={20} />
            </button>
          </div>

          {/* Empty State */}
          <div className="mx-auto mt-20 flex max-w-xl flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-zinc-600">
              ✏️ Let’s create your first activity!
            </h2>

            <div className="mt-10 flex w-full items-center gap-4 rounded-full border border-zinc-300 px-6 py-4">
              <Search size={24} />
              <input
                placeholder="Search for an activity"
                className="w-full bg-transparent text-lg outline-none placeholder:text-zinc-400"
              />
            </div>

            <button className="mt-8 flex items-center gap-2 rounded-lg bg-fuchsia-700 px-6 py-3 text-lg font-bold text-white lg:hidden">
              <Plus size={22} />
              Add resource
            </button>
          </div>
        </section>
      </main>

      {/* Mobile Bottom Navbar */}
      <MobileBottomNav />
    </div>
  )
}

function RailItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <button className="flex flex-col items-center gap-2 text-sm">
      <div
        className={[
          "grid size-14 place-items-center rounded-2xl",
          active
            ? "bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200"
            : "text-zinc-500",
        ].join(" ")}
      >
        {icon}
      </div>

      <span
        className={[
          "text-center",
          active ? "font-bold text-zinc-900" : "text-zinc-500",
        ].join(" ")}
      >
        {label}
      </span>
    </button>
  )
}

function LibrarySidebarItem({
  icon,
  label,
  count,
  active = false,
}: {
  icon: React.ReactNode
  label: string
  count?: string
  active?: boolean
}) {
  return (
    <button className="flex w-full items-center justify-between text-left">
      <div className="flex items-center gap-5">
        <span className={active ? "text-zinc-900" : "text-zinc-600"}>
          {icon}
        </span>

        <span
          className={[
            "text-xl",
            active ? "font-bold text-zinc-900" : "font-medium text-zinc-700",
          ].join(" ")}
        >
          {label}
        </span>
      </div>

      {count && <span className="text-lg text-zinc-600">{count}</span>}
    </button>
  )
}

function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-4 border-t border-zinc-200 bg-white py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
      <MobileNavItem icon={<Search size={28} />} label="Explore" />
      <MobileNavItem icon={<Library size={28} />} label="Library" active />
      <MobileNavItem icon={<Plus size={28} />} label="Create" activeDot />
      <MobileNavItem icon={<BarChart3 size={28} />} label="Reports" />
    </nav>
  )
}

function MobileNavItem({
  icon,
  label,
  active = false,
  activeDot = false,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
  activeDot?: boolean
}) {
  return (
    <button
      className={[
        "flex flex-col items-center gap-1 text-sm font-semibold",
        active ? "text-fuchsia-900" : "text-zinc-500",
      ].join(" ")}
    >
      <div
        className={[
          "grid size-8 place-items-center",
          activeDot ? "rounded-full bg-purple-500 text-white" : "",
        ].join(" ")}
      >
        {icon}
      </div>
      <span>{label}</span>
    </button>
  )
}