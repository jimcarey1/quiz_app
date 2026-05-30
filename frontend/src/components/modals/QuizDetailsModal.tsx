import {
  X,
  Settings,
  Pencil,
  BookOpen,
  GraduationCap,
  Languages,
  ChevronDown,
  Plus,
  Save,
} from "lucide-react";
import { useState } from "react";
import { Button, Input, Label } from "react-aria-components";

export default function QuizSettingsExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Button
        onPress={() => setIsOpen(true)}
        className="rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-800 shadow-sm"
      >
        Untitled Quiz
      </Button>

      {isOpen && <QuizSettingsModal onClose={() => setIsOpen(false)} />}
    </div>
  );
}

function QuizSettingsModal({ onClose }: { onClose: () => void }) {
  const [visibility, setVisibility] = useState("public");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3">
      <div className="relative w-full max-w-[1068px] rounded-2xl bg-white p-6 shadow-xl">
        {/* Close */}
        <Button
          onPress={onClose}
          aria-label="Close quiz settings"
          className="absolute right-5 top-4 text-gray-900 hover:text-gray-600"
        >
          <X size={20} />
        </Button>

        {/* Header */}
        <div className="mb-7 flex items-center gap-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-pink-600">
            <Settings size={22} fill="currentColor" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Quiz settings</h2>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_500px]">
          {/* Left form */}
          <div>
            {/* Name */}
            <div className="mb-5">
              <Label className="mb-2 block text-base font-semibold text-gray-600">
                Name
              </Label>

              <div className="flex h-[54px] items-center rounded-xl border border-gray-900 bg-white px-4">
                <Pencil size={22} className="mr-3 text-gray-800" />

                <Input
                  aria-label="Quiz name"
                  maxLength={64}
                  defaultValue="Untitled Quiz"
                  className="min-w-0 flex-1 border-l border-gray-900 bg-transparent px-3 text-lg text-gray-500 outline-none"
                />

                <span className="text-lg font-semibold text-gray-400">0/64</span>
              </div>
            </div>

            {/* Subject and Grade */}
            <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <SelectBox
                label="Subject"
                icon={<BookOpen size={22} />}
                value="Select releva..."
              />

              <SelectBox
                label="Grade"
                icon={<GraduationCap size={24} />}
                value="Select..."
              />
            </div>

            {/* Language */}
            <div className="mb-5">
              <SelectBox
                label="Language"
                icon={<Languages size={23} />}
                value="English"
                full
              />
            </div>

            {/* Visibility */}
            <div className="mb-8">
              <h3 className="mb-2 text-base font-semibold text-gray-600">
                Visibility
              </h3>

              <div className="space-y-4">
                <VisibilityOption
                  id="public"
                  title="Publicly visible"
                  description="This resource will be publicly visible in the Assessment library"
                  selected={visibility === "public"}
                  onPress={() => setVisibility("public")}
                  borderColor="border-pink-300"
                />

                <VisibilityOption
                  id="restricted"
                  title="Restricted"
                  description="This resource will be visible only by you and the people you share this with"
                  selected={visibility === "restricted"}
                  onPress={() => setVisibility("restricted")}
                  borderColor="border-blue-300"
                />

                <VisibilityOption
                  id="organization"
                  title="Everyone in my organization"
                  description="This resource will be visible only by teachers in your organization"
                  selected={visibility === "organization"}
                  onPress={() => setVisibility("organization")}
                  borderColor="border-blue-300"
                />
              </div>
            </div>

            {/* Teaching Goal */}
            <div>
              <h3 className="mb-2 text-base font-semibold text-gray-600">
                Teaching goal <span className="font-semibold">(optional)</span>
              </h3>

              <div className="flex flex-wrap gap-3">
                {["Teach", "Review", "Practice", "Other"].map((goal) => (
                  <Button
                    key={goal}
                    className="rounded-full border border-gray-200 bg-white px-5 py-2 text-lg font-bold text-gray-800 hover:bg-gray-50"
                  >
                    {goal}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Right cover upload area */}
          <div className="hidden min-h-[480px] items-center justify-center border-2 border-dashed border-gray-200 bg-white lg:flex">
            <Button className="flex flex-col items-center gap-3 text-gray-600">
              <span className="flex h-12 w-12 items-center justify-center rounded bg-gray-500 text-white">
                <Plus size={28} />
              </span>

              <span className="text-base font-medium">Add cover image</span>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-end gap-3">
          <Button
            onPress={onClose}
            className="rounded-xl border border-gray-300 bg-white px-7 py-3 text-base font-bold text-gray-800 hover:bg-gray-50"
          >
            Cancel
          </Button>

          <Button className="inline-flex items-center gap-2 rounded-xl bg-pink-600 px-7 py-3 text-base font-bold text-white hover:bg-pink-700">
            <Save size={16} fill="currentColor" />
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

function SelectBox({
  label,
  icon,
  value,
  full = false,
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "w-full" : ""}>
      <Label className="mb-2 block text-base font-semibold text-gray-600">
        {label}
      </Label>

      <Button className="flex h-[54px] w-full items-center rounded-xl border border-gray-300 bg-white px-5 text-left hover:bg-gray-50">
        <span className="mr-3 text-gray-900">{icon}</span>

        <span className="min-w-0 flex-1 truncate text-lg font-bold text-gray-900">
          {value}
        </span>

        <ChevronDown size={24} className="text-gray-900" />
      </Button>
    </div>
  );
}

function VisibilityOption({
  title,
  description,
  selected,
  onPress,
  borderColor,
}: {
  id: string;
  title: string;
  description: string;
  selected: boolean;
  onPress: () => void;
  borderColor: string;
}) {
  return (
    <Button
      onPress={onPress}
      className={`flex w-full gap-4 rounded border px-3 py-3 text-left ${
        selected ? borderColor : "border-blue-300"
      }`}
    >
      <span
        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
          selected ? "border-gray-800" : "border-gray-300"
        }`}
      >
        {selected && <span className="h-3 w-3 rounded-full bg-gray-800" />}
      </span>

      <span>
        <span className="block text-lg font-medium text-gray-800">{title}</span>
        <span className="block text-base text-gray-600">{description}</span>
      </span>
    </Button>
  );
}
