// src/components/ExportPDF.tsx
import React from "react";
import { Button } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type Props = {
  data: object[];
  columns: { title: string; dataIndex: string }[];
  fileName?: string;
};

const ExportPDF: React.FC<Props> = ({ data, columns, fileName = "export" }) => {
  const handleExport = () => {
    const doc = new jsPDF("p", "mm", "a4");

    const tableColumn = columns.map((col) => col.title);
    const tableRows = data.map((row) => columns.map((col) => row[col.dataIndex]));

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      theme: "striped",
      styles: {
        fontSize: 10,
        cellPadding: 4,
        halign: "center",
        valign: "middle",
      },
      headStyles: {
        fillColor: [220, 53, 69], // Red background
        textColor: [255, 255, 255], // White text
        fontStyle: "bold",
      },
      bodyStyles: {
        textColor: [50, 50, 50],
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
      margin: { top: 20, bottom: 20 },
      didDrawPage: () => {
        const pageCount = doc.getNumberOfPages(); // ✅ Correct method
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();

        doc.setFontSize(9);
        doc.setTextColor(100);
        doc.text(`Page ${pageCount}`, pageWidth - 20, pageHeight - 10);
      },
    });

    doc.save(`${fileName}.pdf`);
  };

  return (
    <Button icon={<FilePdfOutlined />} danger onClick={handleExport}>
      Export to PDF
    </Button>
  );
};

export default ExportPDF;
