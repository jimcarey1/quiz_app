import {
  Plus,
  MoreHorizontal,
  Copy,
  Trash2,
  Tag,
  Sparkles,
  Pencil,
  Check,
} from "lucide-react";
import { Button } from "react-aria-components";

export default function QuizQuestionListPage() {
  return (
    <div className="min-h-screen bg-white px-10 py-6 text-gray-900">
      {/* Top summary bar */}
      <header className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xl font-bold text-gray-600">
          <span>1 Question</span>
          <span className="text-gray-500">•</span>
          <span>1 Points</span>
          <span className="text-gray-500">•</span>
          <span>30 sec</span>
        </div>

        <Button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-bold text-gray-900 hover:bg-gray-50">
          <Plus size={19} />
          Create question
        </Button>
      </header>

      {/* Question card */}
      <section className="relative rounded-lg border border-gray-300 bg-white px-8 py-8">
        {/* Drag handle */}
        <Button
          aria-label="Reorder question"
          className="absolute left-1/2 top-0 flex h-9 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-600 shadow-sm"
        >
          <MoreHorizontal size={24} />
        </Button>

        {/* Top row */}
        <div className="mb-9 flex items-start justify-between">
          <div className="flex items-center gap-3 text-sm">
            <span className="font-bold text-gray-900">01</span>

            <span className="uppercase tracking-wide text-gray-500">
              Multiple Choice
            </span>

            <span className="text-gray-400">•</span>

            <span className="text-gray-400">30 sec</span>

            <span className="text-gray-400">•</span>

            <span className="text-gray-400">1 Pt</span>
          </div>

          <div className="flex items-center gap-6 text-gray-600">
            <Button aria-label="Copy question" className="hover:text-gray-900">
              <Copy size={21} />
            </Button>

            <Button aria-label="Delete question" className="hover:text-gray-900">
              <Trash2 size={21} />
            </Button>

            <Button aria-label="Tag question" className="hover:text-gray-900">
              <Tag size={21} />
            </Button>

            <Button aria-label="Enhance question" className="hover:text-gray-900">
              <Sparkles size={21} />
            </Button>

            <Button className="inline-flex items-center gap-2 text-base font-semibold hover:text-gray-900">
              <Pencil size={21} />
              Edit
            </Button>
          </div>
        </div>

        {/* Question text */}
        <h2 className="mb-8 text-xl font-bold text-gray-950">
          Idhe kadha, Idhe kadha, nee kadhaa
        </h2>

        {/* Answers */}
        <div className="grid grid-cols-1 gap-x-40 gap-y-6 md:grid-cols-2">
          <AnswerOption label="Maharshi" correct />
          <AnswerOption label="Pokiri" />
          <AnswerOption label="Businessman" />
          <AnswerOption label="Brahmotsavam" />
        </div>
      </section>

      {/* Add question bar */}
      <Button className="mt-7 flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white text-base font-bold text-gray-900 hover:bg-gray-50">
        <Plus size={19} />
        Add question
      </Button>
    </div>
  );
}

function AnswerOption({
  label,
  correct = false,
}: {
  label: string;
  correct?: boolean;
}) {
  return (
    <div className="flex items-center gap-5">
      {correct ? (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-white">
          <Check size={16} strokeWidth={3} />
        </span>
      ) : (
        <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-400 bg-white" />
      )}

      <span className="text-lg font-medium text-gray-950">{label}</span>
    </div>
  );
}
