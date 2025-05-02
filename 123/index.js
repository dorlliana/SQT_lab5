function resetForm(event) {
    event.preventDefault();
    const form = event.target.form;
    form.reset();
}

function formSubmitted(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    let data = {};
    for (let key of formData.keys()) {
        console.log(key, formData.get(key));
        data[key] = formData.get(key);
    }

    downloadObjectAsJson(data);
    downloadObjectAsXml(data);
}

function downloadObjectAsJson(data) {
    const filenameWithouExtension = `${Date.now()}`;
    if (navigator.msSaveBlob) {
        var jsonBlob = new Blob([data], { type: 'application/json' });
        return navigator.msSaveBlob(jsonBlob, `${filenameWithouExtension}.json`);
    }

    var dataStr = "data:text/json;charset=utf-8," 
        + encodeURIComponent(JSON.stringify(data, null, 2));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download",
            `${filenameWithouExtension}.json`);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function downloadObjectAsXml(data) {
    const filenameWithouExtension = `${Date.now()}`;
    if (navigator.msSaveBlob) {
        var xmlBlob = new Blob([data], { type: 'application/xml' });
        return navigator.msSaveBlob(xmlBlob, `${filenameWithouExtension}.xml`);
    }

    var dataStr = "data:text/xml;charset=utf-8," 
        + encodeURIComponent(objectToXml(data, 'subscription'));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download",
            `${filenameWithouExtension}.xml`);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function objectToXml(data, rootName) {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<${rootName}>\n`;
    for (let key in data) {
        xml += `\t<${key}>${data[key]}</${key}>\n`;
    }
    xml += `</${rootName}>`;
    return xml;
}