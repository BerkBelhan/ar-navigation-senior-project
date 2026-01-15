import ReportCard from "@/components/process/reportCard";
import CardNavbar from "@/components/layout/CardNavBar";

export default function ProcessPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-32">
      <h1 className="text-3xl font-semibold mb-12 text-white">
        Development Process
      </h1>


      <div className="grid md:grid-cols-3 gap-6">
        <ReportCard title="Project Proposal" file="CMPE491_Project_Proposal_v2" />
        <ReportCard title="Project Specifications" file="CMPE491_Project_Specifications_v2" />
        <ReportCard title="Analysis Report" file="CMPE491_Analysis_Report" />
        <ReportCard title="High-Level Design Report" file="CMPE491_High_Level_Design_Report" />
        <ReportCard title="Backlog Document" file="CMPE491_Backlog_Document" />
      </div>
    </main>
  );
}
