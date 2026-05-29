import {
  Home,
  BookOpen,
  Users,
  BarChart3,
  Menu,
  Search,
  Pencil,
  Upload,
  QrCode,
  Crown,
  ChevronDown,
  ArrowRight,
  HelpCircle,
  Plus,
  Library,
} from "lucide-react"

const standards = [
  "Common Core State Standards",
  "California Common Core State Standards",
  "Georgia K-12 Mathematics Standards",
  "New York State Next Generation Learning Standards",
  "North Carolina Standard Course of Study",
  "Texas Essential Knowledge and Skills (TEKS)",
]

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-[280px] border-r border-zinc-200 bg-zinc-50 lg:flex lg:flex-col">
        <div className="px-6 py-6">
          <h1 className="text-3xl font-black text-pink-500">WAYGROUND</h1>
          <p className="ml-16 text-sm font-semibold text-zinc-600">
            formerly Quizizz
          </p>
        </div>

        <nav className="flex-1 space-y-2 px-4">
          <SidebarItem icon={<Home size={22} />} label="Home" active />
          <SidebarItem icon={<BookOpen size={22} />} label="My library" />
          <SidebarItem icon={<BarChart3 size={22} />} label="Sessions" />
          <SidebarItem icon={<Users size={22} />} label="Students" />

          <div className="my-5 border-t border-zinc-300" />

          <SidebarItem label="VoyageMath ↗" />
        </nav>

        <div className="space-y-4 px-4 pb-6">
          <div>
            <div className="mb-2 flex items-center justify-between text-sm font-semibold">
              <span>0 / 20 activities</span>
              <span>ⓘ</span>
            </div>
            <div className="h-3 rounded-full bg-zinc-200" />
          </div>

          <button className="w-full rounded-lg bg-yellow-400 py-3 font-bold text-zinc-900">
            <Crown className="mr-2 inline" size={18} />
            Upgrade
          </button>

          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-full bg-teal-700 text-white">
              :)
            </div>
            <div>
              <p className="font-semibold">Viswanadh L</p>
              <p className="text-sm text-zinc-500">Student Basic</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <header className="sticky top-0 z-40 flex items-center gap-3 border-b border-zinc-200 bg-white px-4 py-4 lg:hidden">
        <button>
          <Menu size={30} />
        </button>

        <div className="flex flex-1 items-center gap-3 rounded-xl bg-zinc-50 px-4 py-3 shadow-sm">
          <Search size={26} />
          <input
            placeholder="Search in Wayground library"
            className="w-full bg-transparent text-lg outline-none placeholder:text-zinc-400"
          />
        </div>
      </header>

      {/* Main Page */}
      <main className="pb-24 lg:ml-[280px] lg:pb-0">
        <HeroSection />
        <ResourceContent />
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Floating Help Button */}
      <button className="fixed bottom-8 right-8 hidden size-14 place-items-center rounded-full bg-fuchsia-700 text-white shadow-lg lg:grid">
        <HelpCircle size={30} />
      </button>
    </div>
  )
}

function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon?: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <button
      className={[
        "flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left text-lg font-medium",
        active
          ? "bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200"
          : "text-zinc-600 hover:bg-white",
      ].join(" ")}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Desktop Enter Code */}
      <div className="hidden justify-end px-10 pt-8 lg:flex">
        <button className="flex items-center gap-2 font-bold">
          <QrCode size={18} />
          Enter code
        </button>
      </div>

      {/* Mobile Enter Code */}
      <div className="flex justify-end px-6 pt-8 lg:hidden">
        <button className="flex items-center gap-2 text-xl font-bold">
          <QrCode size={24} />
          Enter code
        </button>
      </div>

      <div className="mx-auto max-w-5xl px-4 pt-8 text-center lg:pt-4">
        <h2 className="text-2xl font-medium lg:text-2xl">
          Good evening, Viswanadh 👋 Let's get started.
        </h2>

        <div className="relative mt-8">
          <div className="absolute inset-x-0 top-1/2 h-32 -translate-y-1/2 bg-pink-200/50 blur-3xl" />

          <div className="relative mx-auto flex max-w-3xl justify-center">
            <ActionCard
              icon={<Pencil size={28} />}
              title="Create"
              subtitle="a resource"
            />

            <ActionCard
              active
              icon={<Search size={42} />}
              title="Search"
              subtitle="for resources"
            />

            <ActionCard
              muted
              icon={<Upload size={30} />}
              title="Upload"
              subtitle="& enhance your content"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ActionCard({
  icon,
  title,
  subtitle,
  active = false,
  muted = false,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  active?: boolean
  muted?: boolean
}) {
  return (
    <button
      className={[
        "relative flex h-32 w-48 shrink-0 flex-col items-center justify-center rounded-xl bg-white px-4 shadow-sm lg:w-60",
        active ? "z-10 scale-105" : "",
        muted ? "opacity-40" : "",
      ].join(" ")}
    >
      <div
        className={[
          "absolute -top-8 grid size-16 place-items-center rounded-full bg-white shadow-sm",
          active ? "text-pink-600" : "text-zinc-500",
        ].join(" ")}
      >
        {icon}
      </div>

      <p
        className={[
          "mt-4 text-lg font-bold",
          active ? "text-pink-600" : "text-zinc-700",
        ].join(" ")}
      >
        {title}
      </p>
      <p className="text-base text-zinc-500">{subtitle}</p>

      {active && (
        <div className="absolute -bottom-5 size-8 rotate-45 bg-white" />
      )}
    </button>
  )
}

function ResourceContent() {
  return (
    <section className="mx-auto max-w-5xl px-4 pt-12 lg:pt-10">
      {/* Search */}
      <div className="mx-auto flex max-w-3xl items-center gap-4">
        <div className="flex flex-1 items-center gap-4 rounded-3xl border border-zinc-300 px-6 py-4">
          <Search size={26} />
          <input
            placeholder="Search for any topic"
            className="w-full bg-transparent text-xl outline-none placeholder:text-zinc-400"
          />
        </div>

        <button className="grid size-16 place-items-center rounded-2xl bg-fuchsia-700 text-white">
          <Search size={30} />
        </button>
      </div>

      {/* Browse Text */}
      <div className="mt-14 flex items-center justify-center gap-6 text-center">
        <div className="hidden h-px w-28 bg-zinc-300 sm:block" />

        <div>
          <p className="text-2xl font-bold text-zinc-600">
            Browse resources for
          </p>

          <div className="mt-5 flex items-center justify-center gap-6">
            <FilterButton label="Mathematics" />
            <FilterButton label="Grade 6" />
          </div>
        </div>

        <div className="hidden h-px w-28 bg-zinc-300 sm:block" />
      </div>

      {/* Standards Header */}
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
        <h3 className="max-w-xs text-xl font-medium lg:max-w-none">
          Standards-aligned mathematics resources
        </h3>

        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 text-xl font-bold underline">
            See all <ArrowRight size={24} />
          </button>

          <button className="rounded-md border border-yellow-300 bg-yellow-50 px-4 py-2 font-bold">
            ⚡ Early access
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {standards.map((standard) => (
          <StandardCard key={standard} title={standard} />
        ))}
      </div>
    </section>
  )
}

function FilterButton({ label }: { label: string }) {
  return (
    <button className="border-b-2 border-pink-500 px-4 pb-4 text-2xl font-bold">
      {label}
      <ChevronDown className="ml-2 inline" size={24} />
    </button>
  )
}

function StandardCard({ title }: { title: string }) {
  return (
    <button className="relative min-h-36 overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 text-left shadow-sm">
      <p className="relative z-10 text-lg font-bold leading-snug lg:text-xl">
        {title}
      </p>

      <div className="absolute bottom-0 right-0 h-16 w-28 rounded-tl-full bg-pink-100/70" />
      <div className="absolute bottom-2 right-2 h-10 w-12 rounded bg-blue-900" />
    </button>
  )
}

function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-4 border-t border-zinc-200 bg-white py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
      <MobileNavItem icon={<Search size={28} />} label="Explore" active />
      <MobileNavItem icon={<Library size={28} />} label="Library" />
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