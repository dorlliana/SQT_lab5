function saveApplication() {
    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        middleName: document.getElementById("middleName").value,
        previousSchool: document.getElementById("previousSchool").value,
        faculty: document.getElementById("faculty").value
    };

    // Завантаження JSON файлу
    const jsonData = JSON.stringify(formData, null, 4);
    downloadFile("application.json", jsonData, "application/json");

    // Завантаження XML файлу
    const xmlData = createXML(formData);
    downloadFile("application.xml", xmlData, "application/xml");
}

function downloadFile(filename, data, type) {
    const blob = new Blob([data], { type: type });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function createXML(data) {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<application>\n`;
    xml += `<firstName>${data.firstName}</firstName>\n`;
    xml += `<lastName>${data.lastName}</lastName>\n`;
    xml += `<middleName>${data.middleName}</middleName>\n`;
    xml += `<previousSchool>${data.previousSchool}</previousSchool>\n`;
    xml += `<faculty>${data.faculty}</faculty>\n`;
    xml += `</application>`;
    return xml;
}
