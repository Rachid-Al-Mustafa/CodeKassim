// src/components/exports/components/ExportExcel.tsx
import React from "react";
import { Button } from "antd";
import { FileExcelOutlined } from "@ant-design/icons";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

type Props = {
  data: object[];
  columns: { title: string; dataIndex: string }[];
  fileName?: string;
};

const ExportExcel: React.FC<Props> = ({ data, columns, fileName = "export" }) => {
  const handleExport = () => {
    const header = columns.map((col) => col.title);
    const rows = data.map((row) => columns.map((col) => row[col.dataIndex]));

    // Create worksheet with AOA (Array of Arrays)
    const worksheet = XLSX.utils.aoa_to_sheet([header, ...rows]);

    // Style header cells
    columns.forEach((_, colIndex) => {
      const cellRef = XLSX.utils.encode_cell({ r: 0, c: colIndex });
      if (!worksheet[cellRef]) return;

      worksheet[cellRef].s = {
        font: { bold: true, color: { rgb: "FFFFFF" } },
        fill: { fgColor: { rgb: "FF4D4F" } },
        alignment: { horizontal: "center", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "CCCCCC" } },
          bottom: { style: "thin", color: { rgb: "CCCCCC" } },
          left: { style: "thin", color: { rgb: "CCCCCC" } },
          right: { style: "thin", color: { rgb: "CCCCCC" } },
        },
      };
    });

    // Style data cells
    rows.forEach((row, rowIndex) => {
      row.forEach((_, colIndex) => {
        const cellRef = XLSX.utils.encode_cell({ r: rowIndex + 1, c: colIndex });
        if (!worksheet[cellRef]) return;

        worksheet[cellRef].s = {
          font: { color: { rgb: "333333" } },
          alignment: { horizontal: colIndex === 1 ? "right" : "left", vertical: "center" },
          border: {
            top: { style: "thin", color: { rgb: "E0E0E0" } },
            bottom: { style: "thin", color: { rgb: "E0E0E0" } },
            left: { style: "thin", color: { rgb: "E0E0E0" } },
            right: { style: "thin", color: { rgb: "E0E0E0" } },
          },
        };
      });
    });

    // Auto width for columns
    worksheet["!cols"] = columns.map(() => ({ wch: 20 }));

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    saveAs(new Blob([excelBuffer], { type: "application/octet-stream" }), `${fileName}.xlsx`);
  };

  return (
    <Button icon={<FileExcelOutlined />} type="primary" onClick={handleExport}>
      Export to Excel
    </Button>
  );
};

export default ExportExcel;
