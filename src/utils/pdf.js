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
}
