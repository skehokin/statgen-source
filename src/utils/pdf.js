import pdfform from "pdfform.js";
import charSheetFile from "../resources/character_sheet.pdf";

export default function getPDF() {
  const reader = new FileReader();

  reader.onloadend = function() {
    console.log(reader.result);
    //pdfform("pdf.js").list_fields(reader.result); //this is an ArrayBuffer
  };
  fetch(charSheetFile).then(r =>
    r.blob().then(blop => reader.readAsArrayBuffer(blop))
  );

  //console.log(char);
  //   const characterSheet = new File([""], charSheetFile, {
  //     type: "application/pdf"
  //   });
}
