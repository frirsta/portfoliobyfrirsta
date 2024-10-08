import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HoverScale } from "./Animations";

const ResumeDownloadButton = () => {
  const handleDownload = () => {
    const pdfUrl = "/Frirsta_Resume.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "Frirsta_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HoverScale>
      <Button variant="secondary" onClick={handleDownload}>
        <Download className="mr-2 h-4 w-4" /> Download Resume
      </Button>
    </HoverScale>
  );
};

export default ResumeDownloadButton;
