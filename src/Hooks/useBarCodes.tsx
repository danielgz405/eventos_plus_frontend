import JsBarcode from 'jsbarcode';
import jsPDF from 'jspdf';

export function useBarCodes() {
  function randomNumber(max: number, min: number) {
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  }

  function barcodeGenerator(barrCode: string) {
    const canvas = document.createElement('canvas');
    JsBarcode(canvas, barrCode, {
      format: 'CODE128',
    });
    return canvas.toDataURL('image/png');
  }

  function barcodeToImage(dataUrl: string, fileName: string) {
    const doc = new jsPDF({ unit: 'px', orientation: 'landscape', format: [1920, 1080] });
    doc.addImage(`${dataUrl}`, 'PNG', 10, 10, 470, 210);
    doc.save(`${fileName}.pdf`);
  }

  return { barcodeGenerator, randomNumber, barcodeToImage };
}
