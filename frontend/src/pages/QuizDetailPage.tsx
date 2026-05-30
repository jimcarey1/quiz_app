import {
  Home,
  Library,
  Clock3,
  Users,
  Crown,
  Share2,
  Download,
  Eye,
  MoreVertical,
  Folder,
  Pencil,
  Play,
  Search,
  CheckSquare,
  ChevronDown,
} from "lucide-react";
import { Button, Input, Switch } from "react-aria-components";

export default function ActivityPreviewPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-[1320px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
            <ActivityHeader />

            <div className="mt-10 grid grid-cols-1 gap-4 xl:grid-cols-[650px_1fr]">
              <StudentPreviewCard />
              <QuestionSummaryCard />
            </div>

            <section className="mt-4">
              <h3 className="mb-10 text-base font-semibold text-gray-700">
                Improve your activity
              </h3>

              <ExploreResourcesCard />
            </section>

            <FooterLinks />
          </div>
        </main>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sticky left-0 top-0 z-40 flex h-screen w-[70px] shrink-0 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-center">
        <div className="flex items-end gap-1">
          <span className="h-3 w-2 bg-pink-500" />
          <span className="h-5 w-2 bg-pink-500" />
          <span className="h-7 w-2 bg-pink-500" />
        </div>
      </div>

      <nav className="mt-6 flex flex-1 flex-col items-center gap-7">
        <SidebarItem icon={<Home size={17} />} label="Home" />
        <SidebarItem icon={<Library size={17} />} label="My library" />
        <SidebarItem icon={<Clock3 size={17} />} label="Sessions" />
        <SidebarItem icon={<Users size={17} />} label="Students" />
      </nav>

      <div className="mb-5 flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-1 text-xs font-semibold text-gray-500">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-yellow-400 text-gray-900">
            <Crown size={16} fill="currentColor" />
          </span>
          Upgrade
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
          VL
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900">
      {icon}
      <span className="text-[11px] font-medium">{label}</span>
    </Button>
  );
}

function ActivityHeader() {
  return (
    <header>
      <div className="flex items-start gap-4">
        <div className="flex h-24 w-24 items-center justify-center rounded bg-gray-50">
          <div className="flex items-end gap-1">
            <span className="h-3 w-2 bg-gray-700" />
            <span className="h-5 w-2 bg-gray-700" />
            <span className="h-7 w-2 bg-gray-700" />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-950">afeeatag</h1>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm font-medium text-gray-500">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-green-600 text-white">
              <CheckSquare size={13} />
            </span>
            <span>Assessment</span>
            <span>•</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
              V
            </span>
            <span>Viswanadh L</span>
            <span>•</span>
            <span>English</span>
            <span>•</span>
            <span>1st Grade</span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <ActionButton icon={<Share2 size={16} />} label="Share" dropdown />
          <ActionButton icon={<Download size={16} />} label="Worksheet" />
          <ActionButton icon={<Eye size={16} />} label="Preview" />

          <Button
            aria-label="More activity actions"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          >
            <MoreVertical size={18} />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <ActionButton icon={<Folder size={16} />} label="Save" />
          <ActionButton icon={<Pencil size={16} />} label="Edit" />

          <Button className="inline-flex h-11 items-center gap-2 rounded-lg border border-pink-500 bg-white px-5 text-sm font-bold text-pink-600 hover:bg-pink-50">
            <Clock3 size={16} />
            Assign
          </Button>

          <Button className="inline-flex h-11 items-center gap-2 rounded-lg bg-pink-600 px-5 text-sm font-bold text-white hover:bg-pink-700">
            <Play size={16} fill="currentColor" />
            Start now
          </Button>
        </div>
      </div>
    </header>
  );
}

function ActionButton({
  icon,
  label,
  dropdown = false,
}: {
  icon: React.ReactNode;
  label: string;
  dropdown?: boolean;
}) {
  return (
    <Button className="inline-flex h-11 items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 text-sm font-bold text-gray-800 hover:bg-gray-50">
      {icon}
      {label}
      {dropdown && <ChevronDown size={15} />}
    </Button>
  );
}

function StudentPreviewCard() {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-4">
      <h2 className="mb-8 text-base font-bold text-gray-900">
        Student Preview
      </h2>

      <div className="relative h-[340px] overflow-hidden rounded-lg bg-[#26102d]">
        <div className="absolute inset-0 blur-sm">
          <div className="flex h-full flex-col justify-center gap-10 px-6">
            <h3 className="text-center text-3xl font-bold text-white/40">
              Idhe kadha, Idhe kadha, nee kadhaa
            </h3>

            <div className="grid grid-cols-4 gap-2">
              <div className="h-36 rounded bg-blue-600/60" />
              <div className="h-36 rounded bg-teal-600/60" />
              <div className="h-36 rounded bg-yellow-500/60" />
              <div className="h-36 rounded bg-rose-500/60" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/25" />

        <Button className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-bold text-gray-900 shadow-lg">
          <Play size={16} fill="currentColor" />
          Try as a student
        </Button>
      </div>
    </section>
  );
}

function QuestionSummaryCard() {
  return (
    <section className="rounded-lg border border-gray-200 bg-white">
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
        <div className="text-base font-medium text-gray-600">
          <span>1 question</span>
          <span className="mx-1">·</span>
          <span>1 Points</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-600">
            Show answer options
          </span>

          <Switch
            aria-label="Show answer options"
            className="flex h-5 w-10 items-center rounded-full bg-gray-200 p-0.5"
          >
            <span className="h-4 w-4 rounded-full bg-white shadow-sm" />
          </Switch>
        </div>
      </div>

      <div className="px-4 py-5">
        <div className="mb-4 flex items-center gap-2 text-sm font-medium uppercase text-gray-500">
          <span>1 Multiple Choice</span>
          <span>•</span>
          <span>30 sec</span>
          <span>•</span>
          <span>1 pt</span>
        </div>

        <h3 className="text-base font-bold text-gray-950">
          Idhe kadha, Idhe kadha, nee kadhaa
        </h3>
      </div>
    </section>
  );
}

function ExploreResourcesCard() {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <Search size={25} />
        </span>

        <h2 className="text-xl font-bold text-gray-950">
          Explore free, standards-aligned resources in seconds
        </h2>
      </div>

      <div className="flex h-11 items-center rounded-full border border-gray-200 bg-white px-5">
        <Search size={17} className="mr-3 text-gray-500" />

        <Input
          aria-label="Search in Wayground library"
          placeholder="Search in Wayground library"
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>
    </section>
  );
}

function FooterLinks() {
  return (
    <footer className="mt-20 grid grid-cols-2 gap-8 px-6 text-sm font-bold text-gray-600 md:grid-cols-5">
      <Button className="text-left hover:text-gray-900">Features</Button>
      <Button className="text-left hover:text-gray-900">Subjects</Button>
      <Button className="text-left hover:text-gray-900">Curriculum</Button>
      <Button className="text-left hover:text-gray-900">About</Button>
      <Button className="text-left hover:text-gray-900">Support</Button>
    </footer>
  );
}
