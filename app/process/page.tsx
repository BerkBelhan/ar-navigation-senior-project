import ReportCard from "@/components/process/reportCard";
import CardNavbar from "@/components/layout/CardNavBar";

export default function ProcessPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-32">
        <CardNavbar />
      <h1 className="text-3xl font-semibold mb-12">
        Development Process
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <ReportCard title="Project Proposal" file="proposal.pdf" />
        <ReportCard title="Midterm Report" file="midterm.pdf" />
        <ReportCard title="Final Report" file="final-report.pdf" />
      </div>
    </main>
  );
}
