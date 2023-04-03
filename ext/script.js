const genint = setInterval(() => {
    let genbtn = tag('#landing > center > div.to>a');
    let waitbtn = tag('#landing > center > div.wait');
    if (getCSS('display', waitbtn) == 'none') {
        clearInterval(genint);
        genbtn.click(); showlink();
    }
}, 1000);
function showlink() {
    const showlink = setInterval(() => {
        let pwait = tag('#pleasewaits');
        let sl = tag('#showlink');
        if (getCSS('display', pwait) == 'none') {
            clearInterval(showlink);
            sl.click();
            window.location.href = "https://letslearnlights.blogspot.com";
        }
    }, 1000);
}
let waiter = tag("#content > div.container > div");
if (waiter) {
    const waitCountDiv = newEle("div");
    waitCountDiv.id = "waitcount";
    waiter.appendChild(waitCountDiv);
    smtoarray('https://api.allorigins.win/raw?url=https://letslearnlights.blogspot.com/sitemap.xml').then(function (urls) {
        const randomIndex = Math.floor(Math.random() * urls.length);
        const randomUrl = urls[randomIndex];
        const iframe = newEle('iframe');
        iframe.src = randomUrl;
        setAttr('style', 'border: 0;width: -webkit-fill-available;height: 80vh;', iframe);
        waiter.appendChild(iframe);
    });
    let count = 20;
    const intervalId = setInterval(() => {
        let cr = count--;
        if (cr >= 10) {
            id("waitcount").innerHTML = 'Decrypting Securities (' + (20 - cr) * 10 + '%)';
        } else {
            id("waitcount").innerHTML = 'Decrypting Data and building Final link (' + (((10 - (20 - cr)) * 10)) * -1 + '%)';
        }
        if (count < 0) clearInterval(intervalId);
    }, 1000);
    let prog = 0;
    const progr = setInterval(() => {
        prog += 5;
        html(prog + '% - LLL-Soralink killer is in progress...', tag('title'));
        if (prog >= 100) clearInterval(progr);
    }, 1000);

}