let dataa;

let total = () => {
  const angka1 = document.getElementById("angka1");
  const angka2 = document.getElementById("angka2");
  const angka3 = document.getElementById("angka3");

  const total =
    parseInt(angka1.value) + parseInt(angka2.value) + parseInt(angka3.value);
  document.getElementById("output1").innerHTML =
    "Pendapatan Pertama sebesar Rp." + angka1.value;
  document.getElementById("output2").innerHTML =
    "Pendapatan Kedua sebesar Rp." + angka2.value;
  document.getElementById("output3").innerHTML =
    "Pendapatan Ketiga sebesar Rp." + angka3.value;
  document.getElementById("hasil").innerHTML =
    "Hasil Total Pendapatan adalah : " + total;
  document.getElementById("tombol-sembunyi").style.display = "inline";
  event.preventDefault();
  let data =
    "\r Angka 1: " +
    angka1.value +
    " \r\n " +
    "Angka 2: " +
    angka2.value +
    " \r\n " +
    "Angka 3: " +
    angka3.value +
    " \r\n " +
    "Total : " +
    total +
    " \r\n " +
    "Rata-rata : " +
    rata;

  dataa = data;
};

let average = () => {
  const angka1 = document.getElementById("angka1");
  const angka2 = document.getElementById("angka2");
  const angka3 = document.getElementById("angka3");

  const total =
    parseInt(angka1.value) + parseInt(angka2.value) + parseInt(angka3.value);
  const rata =
    (parseInt(angka1.value) + parseInt(angka2.value) + parseInt(angka3.value)) /
    3;
  document.getElementById("output1").innerHTML =
    "Pendapatan Pertama sebesar Rp." + angka1.value;
  document.getElementById("output2").innerHTML =
    "Pendapatan Kedua sebesar Rp." + angka2.value;
  document.getElementById("output3").innerHTML =
    "Pendapatan Ketiga sebesar Rp." + angka3.value;
  document.getElementById("hasil").innerHTML =
    "Hasil Rata-rata adalah : " + rata;
  document.getElementById("tombol-sembunyi").style.display = "inline";

  let data =
    "\r Angka 1: " +
    angka1.value +
    " \r\n " +
    "Angka 2: " +
    angka2.value +
    " \r\n " +
    "Angka 3: " +
    angka3.value +
    " \r\n " +
    "Total : " +
    total +
    " \r\n " +
    "Rata-rata : " +
    rata;

  event.preventDefault();
  dataa = data;
};

let saveFile = () => {
  // Convert the text to BLOB.
  const textToBLOB = new Blob([dataa], { type: "text/plain" });
  const sFileName = "formData.txt"; // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
};
