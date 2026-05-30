import { useState } from "react";
import {
  ArrowLeft,
  CheckSquare,
  ChevronDown,
  Clock3,
  Tag,
  Save,
  Lightbulb,
  Trash2,
  Check,
  Plus,
  RotateCcw,
} from "lucide-react";
import { Button, Switch, TextArea } from "react-aria-components";

const optionColors = [
  "bg-blue-600",
  "bg-teal-600",
  "bg-yellow-500",
  "bg-rose-500",
];

export default function MultipleChoiceEditorPage() {
  const [multipleCorrect, setMultipleCorrect] = useState(false);

  return (
    <div className="min-h-screen bg-[#e5e5e5] text-gray-900">
      <QuestionEditorHeader />

      <Toolbar />

      <main className="flex min-h-[calc(100vh-92px)] items-center justify-center px-6 py-20">
        <section className="w-full max-w-[1120px] rounded-2xl bg-[#4b1554] p-4 shadow-sm">
          {/* Question area */}
          <div className="relative h-[260px] overflow-hidden rounded-t-xl bg-[#2a0d31]">
            <Button
              aria-label="Record audio"
              className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded bg-white/10 text-white"
            >
              <span className="text-sm">🎙</span>
            </Button>

            <span className="absolute left-8 top-2 rounded-sm bg-yellow-300 px-1 text-xs font-bold text-gray-800">
              !
            </span>

            <TextArea
              aria-label="Question text"
              placeholder="Type question here"
              className="flex h-full w-full resize-none items-center justify-center bg-transparent px-12 py-24 text-center text-xl text-white outline-none placeholder:text-white/50"
            />

            {/* Fake scrollbars to match screenshot */}
            <div className="absolute right-0 top-0 h-full w-6 bg-white">
              <div className="absolute left-1/2 top-2 -translate-x-1/2 border-x-4 border-b-4 border-x-transparent border-b-gray-400" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-gray-400" />
            </div>

            <div className="absolute bottom-0 left-0 h-6 w-full bg-white">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 border-y-4 border-r-4 border-y-transparent border-r-gray-400" />
              <div className="absolute right-9 top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-gray-400" />
            </div>
          </div>

          {/* Answer options */}
          <div className="mt-4 flex items-stretch gap-2">
            {optionColors.map((color, index) => (
              <AnswerOptionCard
                key={index}
                color={color}
                placeholder="Type answer option here"
              />
            ))}

            <Button
              aria-label="Add answer option"
              className="my-auto flex h-9 w-9 shrink-0 items-center justify-center rounded bg-white/20 text-white hover:bg-white/30"
            >
              <Plus size={18} />
            </Button>
          </div>

          {/* Bottom controls */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm font-semibold text-white">
              <span>Multiple correct answers:</span>

              <Switch
                aria-label="Multiple correct answers"
                isSelected={multipleCorrect}
                onChange={setMultipleCorrect}
                className={`flex h-5 w-10 items-center rounded-full p-0.5 transition ${
                  multipleCorrect ? "bg-pink-500" : "bg-white/30"
                }`}
              >
                <span
                  className={`h-4 w-4 rounded-full bg-white transition ${
                    multipleCorrect ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </Switch>
            </div>

            <Button className="inline-flex items-center gap-2 rounded bg-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/25">
              <RotateCcw size={15} />
              Switch to vertical layout
            </Button>
          </div>
        </section>
      </main>

      <Button
        aria-label="Help"
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-pink-700 text-xl font-bold text-white shadow-lg"
      >
        ?
      </Button>
    </div>
  );
}

function QuestionEditorHeader() {
  return (
    <header className="flex h-12 items-center justify-between bg-white px-4 shadow-sm">
      <div className="flex items-center gap-2">
        <Button
          aria-label="Go back"
          className="flex h-8 w-8 items-center justify-center rounded bg-gray-100 hover:bg-gray-200"
        >
          <ArrowLeft size={18} />
        </Button>

        <Button className="flex h-8 items-center gap-3 rounded bg-gray-100 px-3 text-sm font-semibold text-gray-800">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-teal-600 text-white">
            <CheckSquare size={14} />
          </span>
          Multiple Choice
          <ChevronDown size={16} />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <TopAction label="1 point" icon={<Check size={15} />} />
        <TopAction label="30 seconds" icon={<Clock3 size={15} />} />
        <TopAction label="Tag topics" icon={<Tag size={15} />} />

        <Button className="inline-flex h-9 items-center gap-2 rounded bg-purple-600 px-4 text-sm font-semibold text-white hover:bg-purple-700">
          <Save size={15} />
          Save question
        </Button>
      </div>
    </header>
  );
}

function TopAction({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Button className="inline-flex h-9 items-center gap-2 rounded bg-gray-100 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-200">
      {icon}
      {label}
      <ChevronDown size={14} />
    </Button>
  );
}

function Toolbar() {
  return (
    <div className="flex h-11 items-center justify-between border-b border-gray-200 bg-white px-8">
      <div className="flex items-center gap-6 text-sm font-semibold text-gray-800">
        <Button className="border-b-2 border-gray-800 px-1">A</Button>
        <Button>B</Button>
        <Button className="italic">I</Button>
        <Button className="underline">U</Button>
        <Button className="line-through">S</Button>
        <Button>x¹</Button>
        <Button>x₁</Button>
        <Button>Σ</Button>
        <Button>f(x)</Button>
      </div>

      <Button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900">
        <Lightbulb size={15} />
        Add answer explanation
      </Button>
    </div>
  );
}

function AnswerOptionCard({
  color,
  placeholder,
}: {
  color: string;
  placeholder: string;
}) {
  return (
    <div
      className={`relative flex h-[255px] flex-1 items-center justify-center rounded-lg ${color}`}
    >
      <Button
        aria-label="Delete answer option"
        className="absolute left-3 top-3 text-white/80 hover:text-white"
      >
        <Trash2 size={15} />
      </Button>

      <Button
        aria-label="Mark answer option as correct"
        className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/80 text-white"
      >
        <Check size={15} />
      </Button>

      <TextArea
        aria-label="Answer option"
        placeholder={placeholder}
        className="h-full w-full resize-none bg-transparent px-10 py-24 text-center text-xl leading-7 text-white outline-none placeholder:text-white/60"
      />
    </div>
  );
}
