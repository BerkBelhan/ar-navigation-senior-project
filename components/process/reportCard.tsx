import Link from "next/link";

export default function ReportCard({
  title,
  file,
}: {
  title: string;
  file: string;
}) {
  return (
    <Link
      href={`/reports/${file}`}
      target="_blank"
      className="block p-6 rounded-xl bg-white/5 border border-white/10
                 hover:bg-white/10 transition"
    >
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-400">
        Download PDF
      </p>
    </Link>
  );
}
