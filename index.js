var blobDownload = function(data, type, fileName="file",) {
    if (!data) {
        throw "Missing Data"
        return
    }
    if (!type) {
        throw "Missing file's type"
        return
    }
    if(typeof type !== 'string'){
        throw "File's type must be 'string'"
        return
    }
    if(typeof fileName !== 'string'){
        throw "File's name must be 'string'"
        return
    }
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName+'.'+type);
    document.body.appendChild(link);
    link.click();
}
module.exports = blobDownload