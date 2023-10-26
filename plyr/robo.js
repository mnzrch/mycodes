///////////////
let plyrcntnt = `
`;
let vidxbox = $('xvideoplayer');
if (vidxbox) { //html(plyrcntnt, vidxbox);
    let vidxplyr = $ne('video'); html('Unsupported Media!', vidxplyr); vidxplyr.id = 'xvideoplayer'; vidxbox.appendChild(vidxplyr);
    function vidxplyrS() {
        $ss('height', (vidxbox.clientWidth * 0.5625) + 'px', vidxbox);
        $ss('font-size', (vidxbox.clientWidth / 170) + 'em', vidxbox);
    } vidxplyrS();
    $res(vidxplyrS, window);
}