
let minput = document.querySelector('#inpt');
let msbmt = document.querySelector('#submit');
let probar = document.querySelector('#s');
let protxt = document.querySelector('#proTxt');
let vid = document.querySelector('#vid');
let vidb = document.querySelector('#vidb');
let chklnk = 'http://localhost/www/mcapies/ffmpeg?process=';
let prolnk = 'http://localhost/www/mcapies/ffmpeg/conversion?';
let dlnk = '';
let vlnk;
async function pro(x) {
    await (await fetch(prolnk + x)).text().then(text => {
        let tempS = document.createElement('script');
        tempS.innerHTML = `json = [${text}];`; document.body.appendChild(tempS);
        if (json[0].status) {
            if (json[0].prog < 100) {
                protxt.innerHTML = `<h2>Processing, ${parseFloat(json[0].prog).toFixed(2)}% Completed...</h2>`;
                probar.style.width = parseFloat(json[0].prog).toFixed(2) + '%'; tempS.remove(); pro(x);
            } else if (json[0].prog >= 100) {
                protxt.innerHTML = `<h2>Processing, ${parseFloat(json[0].prog).toFixed(2)}% Completed...</h2>`;
                probar.style.width = '100%';
                vlnk = dlnk + json[0].dash;
                setTimeout(() => {
                    protxt.innerHTML = `<a href="${vlnk}" title="Click to Download">Download</a>`;
                }, 500);
            }
        } else { protxt.innerHTML = `<h2>${json[0].msg}</h2><button onclick="pro('${x}')">Retry</button>`; }
    })
}
msbmt.onclick = () => {
    if (minput.value == '') {
        alert('Please provide link first');
    } else {
        async function download() {
            let link = minput.value;
            await (await fetch(chklnk + link)).text().then(text => {
                let tempS = document.createElement('script');
                tempS.innerHTML = `let json = [${text}];`; document.body.appendChild(tempS);
                if (json[0].fid) {
                    tempS.remove();
                    protxt.innerHTML = '<h2>Processing, Wait a moment!</h2>';
                    let param = `fid=${json[0].fid}&fport=${json[0].fport}&ftid=${json[0].ftid}`;
                    pro(param);
                } else {
                    protxt.innerHTML = '<h2>Error, While Processing!</h2>';
                }
            })
        }
        download();
    }
}
vidb.onclick = () => {
    if (vlnk) {
        vid.src = vlnk
    } else {
        alert('Player not ready yet...');
    }
}