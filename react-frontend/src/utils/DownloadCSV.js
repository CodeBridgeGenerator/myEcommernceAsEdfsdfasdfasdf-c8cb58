import { useEffect } from "react";

const DownloadCSV = ({ data, fileName, triggerDownload, setTriggerDownload, selectedData }) => {
  const convertToCSV = (objArray) => {
    if (!objArray || !Array.isArray(objArray) || objArray.length === 0) {
      return "";
    }

    const array = typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
    let str = "";
    const keys = Object.keys(array[0]);
    str += keys.join(",") + "\r\n"; 

    array.forEach((item) => {
      let line = "";
      keys.forEach((key) => {
        if (line !== "") line += ",";

        const value = item[key];

        if (typeof value === "object") {
          const objectStr = JSON.stringify(value).replace(/,/g, " "); 
          line += `"${objectStr}"`; 
        } else {
          line += value !== undefined ? value : "";
        }
      });
      str += line + "\r\n";
    });
    return str;
  };

  const downloadCSV = () => {
    const dataToDownload = selectedData || data;
    const csvString = convertToCSV(dataToDownload);
    if (csvString === "") {
      console.error("Invalid or empty data provided");
      return;
    }

    const csvData = new Blob([csvString], { type: "text/csv" });
    const csvURL = URL.createObjectURL(csvData);
    const link = document.createElement("a");
    link.href = csvURL;
    link.download = `${fileName}.csv`; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (triggerDownload) {
      downloadCSV();
      setTriggerDownload(false);
    }
  }, [triggerDownload, data, selectedData]);

  return null;
};

export default DownloadCSV;
