import {
  Home,
  BookOpen,
  Users,
  PieChart,
  Search,
  Crown,
  ChevronDown,
  Calendar,
  FileText,
  Globe,
  Type,
  Plus,
  Sparkles,
  Library,
  BarChart3,
} from "lucide-react"

export default function SessionPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Desktop Left Rail */}
      <aside className="fixed left-0 top-0 hidden h-screen w-[96px] border-r border-zinc-200 bg-zinc-50 lg:flex lg:flex-col lg:items-center">
        <div className="py-8">
          <h1 className="text-4xl font-black text-pink-500">▾</h1>
        </div>

        <nav className="mt-10 flex flex-1 flex-col items-center gap-6">
          <RailItem icon={<Home size={22} />} label="Home" />
          <RailItem icon={<BookOpen size={22} />} label="My library" />
          <RailItem icon={<PieChart size={22} />} label="Sessions" active />
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

      {/* Main Content */}
      <main className="pb-24 lg:ml-[96px] lg:pb-0">
        <section className="px-5 py-6 lg:px-9 lg:py-8">
          {/* Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="text-3xl font-bold">Reports</h1>

            <div className="flex items-center gap-3 rounded-full border border-zinc-300 px-5 py-3 lg:w-[460px]">
              <Search size={22} />
              <input
                placeholder="Search by report name"
                className="w-full bg-transparent text-base outline-none placeholder:text-zinc-400"
              />
            </div>
          </div>

          {/* Tabs + Filters */}
          <div className="mt-10 flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap items-center gap-4 lg:gap-7">
              <ReportTab active label="All (0)" />
              <ReportTab label="Running" />
              <ReportTab label="Scheduled" />
              <ReportTab label="Completed" />
              <ReportTab label="Paused" />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <FilterButton label="Resource types" />
              <FilterButton label="All Reports" />
              <FilterButton label="All Classes" />
              <button className="flex items-center gap-3 rounded-lg border border-zinc-300 px-5 py-3 text-base font-semibold">
                <Calendar size={18} />
                Filter by Date
                <ChevronDown size={18} className="ml-10" />
              </button>
            </div>
          </div>

          {/* Empty State */}
          <div className="mx-auto mt-24 max-w-6xl text-center">
            <div className="text-5xl">✏️</div>

            <h2 className="mt-4 text-2xl font-bold text-zinc-600 lg:text-3xl">
              Start or assign a session to view its report
            </h2>

            <div className="mx-auto mt-10 flex max-w-5xl items-center gap-4 rounded-full border border-zinc-300 px-6 py-4 text-left">
              <Search size={24} />
              <input
                placeholder="Search from millions of teacher created activities..."
                className="w-full bg-transparent text-lg outline-none placeholder:text-zinc-400"
              />
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row">
              <span className="text-xl">Or create one using</span>
              <span className="text-4xl font-black tracking-tight text-fuchsia-950">
                WAYGROUND AI
              </span>
            </div>

            <CreateOptionsGrid />
          </div>
        </section>
      </main>

      {/* Desktop Help Button */}
      <button className="fixed bottom-8 right-8 hidden size-14 place-items-center rounded-full bg-fuchsia-700 text-3xl font-bold text-white shadow-lg lg:grid">
        ?
      </button>

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

function ReportTab({
  label,
  active = false,
}: {
  label: string
  active?: boolean
}) {
  return (
    <button
      className={[
        "rounded-full px-5 py-3 text-lg font-bold",
        active
          ? "bg-white text-zinc-900 shadow-md ring-1 ring-zinc-200"
          : "text-zinc-600",
      ].join(" ")}
    >
      {label}
    </button>
  )
}

function FilterButton({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-3 rounded-lg border border-zinc-300 px-5 py-3 text-base font-semibold">
      {label}
      <ChevronDown size={18} />
    </button>
  )
}

function CreateOptionsGrid() {
  return (
    <div className="mx-auto mt-5 grid max-w-5xl grid-cols-1 gap-3 text-left md:grid-cols-2 lg:grid-cols-6">
      <CreateOption
        className="lg:col-span-3"
        icon={<FileText size={22} />}
        iconClassName="bg-pink-50 text-pink-600"
        eyebrow="Import from"
        title="Worksheet"
      />

      <CreateOption
        className="lg:col-span-3"
        icon={<Sparkles size={22} />}
        iconClassName="bg-blue-50 text-blue-600"
        eyebrow="Generate from"
        title="Study materials"
      />

      <CreateOption
        className="lg:col-span-2"
        icon={<Globe size={22} />}
        iconClassName="bg-emerald-50 text-emerald-600"
        eyebrow="Generate from"
        title="Website"
      />

      <CreateOption
        className="lg:col-span-2"
        icon={<Type size={22} />}
        iconClassName="bg-yellow-50 text-yellow-600"
        eyebrow="Generate from"
        title="Topic/Standards"
      />

      <CreateOption
        className="lg:col-span-2"
        icon={<Plus size={24} />}
        iconClassName="bg-zinc-100 text-zinc-700"
        eyebrow="Or"
        title="Create from scratch"
      />
    </div>
  )
}

function CreateOption({
  icon,
  iconClassName,
  eyebrow,
  title,
  className = "",
}: {
  icon: React.ReactNode
  iconClassName: string
  eyebrow: string
  title: string
  className?: string
}) {
  return (
    <button
      className={[
        "flex min-h-20 items-center gap-4 rounded-md border border-zinc-300 bg-white px-5 py-4 hover:bg-zinc-50",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "grid size-12 shrink-0 place-items-center rounded-md",
          iconClassName,
        ].join(" ")}
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-zinc-500">{eyebrow}</p>
        <p className="text-lg font-bold text-zinc-900">{title}</p>
      </div>
    </button>
  )
}

function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-4 border-t border-zinc-200 bg-white py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
      <MobileNavItem icon={<Search size={28} />} label="Explore" />
      <MobileNavItem icon={<Library size={28} />} label="Library" />
      <MobileNavItem icon={<Plus size={28} />} label="Create" activeDot />
      <MobileNavItem icon={<BarChart3 size={28} />} label="Reports" active />
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