///////////
let dbs, homedata, picdata, pflisec, cpost = 0, dbody = $('body'), authorL = '', Lend = '=s128', homL, treL, trende = $('div.maincan>trending'), dind, vpost = urlSP('browse'), vpic = urlSP('search'), blogo = 'https://yt3.ggpht.com/'; slEls = $$('searcheng>div>setting>div>length>div'), fapi = 'https://api.allorigins.win/raw?url=', stEls = $$('searcheng>div>setting>div>dur>div');
pflisec = ''; fapi = 'https://mcapies.orgfree.com/raw/?url=';
let ssetq = {
    'nill': '',
    'fm': 'sp=EgIYAQ%253D%253D&', //u 4m
    'ftm': 'sp=EgIYAw%253D%253D&', //u 4-20m
    'utm': 'sp=EgIYAg%253D%253D&', //up 20m
    'lh': 'sp=EgIIAQ%253D%253D&', //L.H
    'lhfm': 'sp=EgYIARABGAE%253D&', //u 4m //L.H
    'lhftm': 'sp=EgYIARABGAM%253D&', //u 4-20m //L.H
    'lhutm': 'sp=EgYIARABGAI%253D&', //up 20m //L.H
    'td': 'sp=EgQIAhAB&', //T.D
    'tdfm': 'sp=EgYIAhABGAE%253D&', //u 4m //T.D
    'tdftm': 'sp=EgYIAhABGAM%253D&', //u 4-20m //T.D
    'tdutm': 'sp=EgYIAhABGAI%253D&', //up 20m //T.D
    'tw': 'sp=EgQIAxAB&', //T.W
    'twfm': 'sp=EgYIAxABGAE%253D&', //u 4m //T.W
    'twftm': 'sp=EgYIAxABGAM%253D&', //u 4-20m //T.W
    'twutm': 'sp=EgYIAxABGAI%253D&', //up 20m //T.W
    'tm': 'sp=EgQIBBAB&', //T.M
    'tmfm': 'sp=EgYIBBABGAE%253D&', //u 4m //T.M
    'tmftm': 'sp=EgYIBBABGAM%253D&', //u 4-20m //T.M
    'tmutm': 'sp=EgYIBBABGAI%253D&', //up 20m //T.M
    'ty': 'sp=EgQIBRAB&', //T.Y
    'tyfm': 'sp=EgYIBRABGAE%253D&', //u 4m //T.Y
    'tyftm': 'sp=EgYIBRABGAM%253D&', //u 4-20m //T.Y
    'tyutm': 'sp=EgYIBRABGAI%253D&' //up 20m //T.Y
};
slEls.forEach(x => {
    $clk(() => {
        slEls.forEach(x => { $rc('active', x); }, x);
        $sc('active', x); $sk('slEls', $ga('ind', x), { 'expiry': 99999999999999 });
        if (!$gk('stEls')) {
            if ($ga('ind', x) != 'nill') {
                pflisec = ssetq[$ga('ind', x)];
            } else {
                pflisec = '';
            }
        } else {
            if ($gk('stEls') == 'nill') {
                if ($ga('ind', x) == 'nill') {
                    pflisec = '';
                } else {
                    pflisec = ssetq[$ga('ind', x)];
                }
            } else {
                if ($ga('ind', x) == 'nill') {
                    pflisec = ssetq[$gk('stEls')];
                } else {
                    pflisec = ssetq[$gk('stEls') + $ga('ind', x)];
                }
            }
        }
    }, x);
});
stEls.forEach(x => {
    $clk(() => {
        stEls.forEach(x => { $rc('active', x); }, x);
        $sc('active', x); $sk('stEls', $ga('ind', x), { 'expiry': 99999999999999 });
        if (!$gk('slEls')) {
            if ($ga('ind', x) != 'nill') {
                pflisec = ssetq[$ga('ind', x)];
            } else {
                pflisec = '';
            }
        } else {
            if ($gk('slEls') == 'nill') {
                if ($ga('ind', x) == 'nill') {
                    pflisec = '';
                } else {
                    pflisec = ssetq[$ga('ind', x)];
                }
            } else {
                if ($ga('ind', x) == 'nill') {
                    pflisec = ssetq[$gk('slEls')];
                } else {
                    pflisec = ssetq[$ga('ind', x) + $gk('slEls')];
                }
            }
        }
    }, x);
});
function thumbRn(x) { x.forEach(x => { $ss('min-height', x.parentElement.clientWidth * 0.5625 + 'px', x); $ss('max-height', x.parentElement.clientWidth * 0.5625 + 'px', x); }); }
function thumbRan() {
    thumbRn($$('trending>div>a>img')); thumbRn($$('related>div>a>img')); thumbRn($$('aside>div>a>img'));
} thumbRan();
function blockAnchor() {
    $$('.postd a').forEach(x => {
        x.onclick = a => {
            a.preventDefault();
            p = urlSP('browse', x); if (p) {
                window.history.pushState('', '', `?browse=${p}`);
                $('#msg-box>i').click(); authorL = blogo + $duc(strrev(p.substr(0, p.length - 11))) + Lend;
                setTimeout(() => {
                    loadpost(p.slice(p.length - 11, p.length));
                }, 200); return false;
            }
        };
    });
} blockAnchor();
function toggledes() {
    x = $('div.maincan>content>info>h3');
    if ($gs('display', x) != 'none') {
        $ss('display', 'none', x);
    } else {
        $ss('display', 'block', x);
    }
}
function togglekw() {
    x = $('div.maincan>content>info>h4');
    if ($gs('display', x) != 'none') {
        $ss('display', 'none', x);
    } else {
        $ss('display', 'block', x);
    }
}
$res(() => { thumbRan(); if (!isWinDes) { $ss('margin-top', '0px', $('.maincan', id('mobileDiv'))); $ss('margin-top', '0px', $('aside', id('mobileDiv'))); } else { stickyfun(id('desktopDiv')); } }, window);
homedata1 = '../ytdata/yt trending.html';
homedata = '../ytdata/yth 3.html';
homedata = fapi + 'https://www.youtube.com';
function fdlwp(l, f, m, t) {
    $sk('creq', 'fdlwp(`' + l + '`, ' + f.name + ', `' + m + '`,`' + t + '`)', { 'expiry': 99999999999 });
    if (fdlwp.controller) { fdlwp.controller.abort(); }
    fdlwp.controller = new AbortController();
    $ss('display', 'none', $('#dlpi1'));
    $ss('display', 'block', $('#initial'));
    if (t && t == 'post') {
        fl = l.split('?')[0];
        const formData = new FormData();
        if (l.includes('?')) {
            qps = l.split('?')[1].split('&');
            for (p of qps) {
                [k, v] = p.split('=');
                formData.append(k, v);
            }
        }
        fetch(fl, { method: 'POST', body: formData, signal: fdlwp.controller.signal })
            .then(x => {
                if (!x.ok) {
                    $ss('display', 'block', $('#dlpi1'));
                    $ss('display', 'none', $('#initial')); $dk('creq');
                    return cusmsg('Unable to Load!', 5000);

                }
                y = x.clone();
                const r = x.body.getReader();
                $ss('display', 'block', $('#dlpi1'));
                $ss('width', '0%', $('#dlpi1'));
                $ss('max-width', '95%', $('#dlpi1'));
                $ss('display', 'none', $('#initial'));
                let cb = 0;
                let aborted = false;
                function readChunk() {
                    r.read().then(({ done, value }) => {
                        if (aborted) { $dk('creq'); return; }
                        if (done) {
                            if (y && !y.bodyUsed) { $dk('creq'); f(y); } else { fdlwp(l, f, m); }
                            $ss('width', '100%', $('#dlpi1'));
                            $ss('max-width', '100%', $('#dlpi1'));
                            return;
                        }
                        cb += value.length;
                        let prg = (cb / 120586240) * 10000 + '%';
                        $ss('width', prg, $('#dlpi1')); readChunk();
                    }).catch(e => {
                        if (e.name !== 'AbortError') {
                            $ss('display', 'block', $('#dlpi1'));
                            $ss('display', 'none', $('#initial'));
                            cusmsg(`${m} {${e}}`);
                        }
                    });
                }
                fdlwp.controller.signal.addEventListener('abort', () => { aborted = true; r.cancel(); });
                readChunk();
            })
            .catch(e => {
                if (e.name !== 'AbortError') {
                    $ss('display', 'block', $('#dlpi1'));
                    $ss('display', 'none', $('#initial'));
                    cusmsg(`${m} {${e}}`);
                }
            });
    } else {
        fetch(l, { signal: fdlwp.controller.signal })
            .then(x => {
                if (!x.ok) {
                    $ss('display', 'block', $('#dlpi1'));
                    $ss('display', 'none', $('#initial'));
                    return cusmsg('Unable to Load!', 5000);
                }
                y = x.clone();
                const r = x.body.getReader();
                $ss('display', 'block', $('#dlpi1'));
                $ss('width', '0%', $('#dlpi1'));
                $ss('max-width', '95%', $('#dlpi1'));
                $ss('display', 'none', $('#initial'));
                let cb = 0;
                let aborted = false;
                function readChunk() {
                    r.read().then(({ done, value }) => {
                        if (aborted) { return; }
                        if (done) {
                            if (y && !y.bodyUsed) { f(y); } else { fdlwp(l, f, m); }
                            $ss('width', '100%', $('#dlpi1'));
                            $ss('max-width', '100%', $('#dlpi1'));
                            return;
                        }
                        cb += value.length;
                        let prg = (cb / 120586240) * 10000 + '%';
                        $ss('width', prg, $('#dlpi1')); readChunk();
                    }).catch(e => {
                        if (e.name !== 'AbortError') {
                            $ss('display', 'block', $('#dlpi1'));
                            $ss('display', 'none', $('#initial'));
                            cusmsg(`${m} {${e}}`);
                        }
                    });
                }
                fdlwp.controller.signal.addEventListener('abort', () => { aborted = true; r.cancel(); });
                readChunk();
            })
            .catch(e => {
                if (e.name !== 'AbortError') {
                    $ss('display', 'block', $('#dlpi1'));
                    $ss('display', 'none', $('#initial'));
                    cusmsg(`${m} {${e}}`);
                }
            });
    }
} fdlwp.controller = null;
function assigntrend(x, y) {
    if (cpost == 0) {
        for (n = 0; n <= y; n++) {
            maketrend(x[n], n, x); cpost += 1;
        }
    } else {
        prepost = cpost;
        for (i = prepost; i <= prepost + y; i++) {
            maketrend(x[i], i, x); cpost += 1;
        }
    }
}
function loadtrend(d) {
    d.text().then(txt => {
        if (txt == 'error') return; treL = true;
        x = $ne('div'); html(txt, x);
        y = (Array.from($$('script', x)).find(script => script.textContent.includes('ytInitialData'))).textContent;
        if (y != undefined) {
            s = $ne('script'); s.textContent = y; document.head.appendChild(s); trends = '';
            let a = ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents;
            a.forEach(y => {
                x = y.itemSectionRenderer.contents[0].shelfRenderer;
                if (x && x.content.expandedShelfContentsRenderer) {
                    b = x.content.expandedShelfContentsRenderer.items;
                    b.forEach(z => {
                        x = z.videoRenderer;
                        trends += `{
                    "id": "${x.videoId}",
                    "title": "${$euc(x.title.runs[0].text)}",
                    "thumb": "${x.thumbnail.thumbnails[0].url}",
                    "description": "${'undef'}",
                    "date": "${x.publishedTimeText.simpleText}",
                    "dur": "${x.lengthText.simpleText}",
                    "views": "${x.viewCountText.simpleText}",
                    "logo": "${x.channelThumbnailSupportedRenderers.channelThumbnailWithLinkRenderer.thumbnail.thumbnails[0].url}",
                    "ownerN": "${$euc(x.longBylineText.runs[0].text)}",
                    "ownerL": "${x.longBylineText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url}"
                },`;
                    });
                } if (a.indexOf(y) == a.length - 1) { trends = JSON.parse('[' + trends.slice(0, -1) + ']'); assigntrend(trends, 9); s.remove(); loadpage(); }
            });
        }
    });
}
function loadpaged(d) {
    d.text().then(txt => {
        if (txt == 'error') return; homL = true;
        x = $ne('div'); html(txt, x);
        y = (Array.from($$('script', x)).find(script => script.textContent.includes('ytInitialData'))).textContent;
        if (y != undefined) {
            s = $ne('script'); s.textContent = y; document.head.appendChild(s); dind = -1;
            z = ytInitialData['contents'].twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents;
            z.forEach(y => {
                if (y.richItemRenderer) { dind += 1; makepost(y, dind, z.indexOf(y), $('aside')); }
                if (z.indexOf(y) == $lk(z)) { s.remove(); setTimeout(() => { infoPrint($$('.postd>i')); thumbRan(); blockAnchor(); }, 200); }
            });
        }
    });
}
function loadpage(x) {
    m = `Unable to load Home Page data, Please try again...<hr><button onclick="$('#msg-box>i').click();setTimeout(() => { loadpage(); }, 200)" style="border: 1px solid var(--focusclr);border-radius: 5px;padding: 5px;box-shadow: 0px 0px 5px 2px var(--shadowclr);">Click to Try Again</button><hr>`;
    if (x) {
        // fdlwp(homedata1, loadtrend, m);
        fdlwp(homedata + x, loadtrend, m, 'post');
    } else {
        fdlwp(homedata, loadpaged, m, 'post');
    }
} loadpage('/feed/trending');
function loadpost(i) {
    let x; if (i) { if (isURL(i)) { x = `${fapi + $euc(i)}`; } else { x = `${fapi + $euc('https://www.youtube.com/watch?v=' + i + '}')}`; } }/* */ else { x = '../ytdata/yt vid.html'; } if (x) { fdlwp(x, loadpostd, 'Unable to load Your Selection, Please try again...'); }
}
function loadpostd(d) {
    d.text().then(z => {
        x = $ne('div'); html(z, x); if (treL != true) { loadpage('/feed/trending'); } else if (homL != true) { loadpage(); }
        y = (Array.from($$('script', x)).find(script => script.textContent.includes('ytInitialData'))).textContent + (Array.from($$('script', x)).find(script => script.textContent.includes('ytInitialPlayerResponse'))).textContent;
        if (y != undefined) {
            if (id('rawScript')) { id('rawScript').remove(); }
            s = $ne('script'); s.id = 'rawScript'; s.textContent = y; document.head.appendChild(s); x = -1;
            // setTimeout(() => {
            NewVidPlyr();
            // }, 500);
        } else {
            cusmsg('Unable to Get Video');
        }
    })
}
function loadpicd(d) {
    d.text().then(txt => {
        if (txt == 'error') return;
        x = $ne('div'); html(txt, x); if (homL != true) { loadpage(); }
        y = (Array.from($$('script', x)).find(script => script.textContent.includes('ytInitialData'))).textContent;
        if (y != undefined) {
            s = $ne('script'); s.textContent = y; document.head.appendChild(s); dind = -1;
            z = ytInitialData.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents;
            z.forEach(y => {
                if (y.videoRenderer) { dind += 1; makepost(y, dind, z.indexOf(y), $('div.maincan>trending'), picdata); }
                if (z.indexOf(y) == $lk(z)) {
                    if (dind + 1 < trende.childElementCount) { b = trende.childElementCount - 1; for (i = b; i >= dind + 1; i--) { trende.children[i].remove(); } }
                    setTimeout(() => { infoPrint($$('.postd>i')); thumbRan(); blockAnchor(); }, 200); s.remove(); $ss('display', 'none', id('showmt')); $('div.maincan>h3').textContent = `Search Result {${dind + 1}}`;
                }
            });
        } else {
            cusmsg('Unable to Get YT Home data');
        }
    });
}
function loadpic(s) {
    picdata = '../ytdata/yt srch.html'; picdata = `${fapi + $euc('https://www.youtube.com/results?' + pflisec + 'search_query=' + s + '')}`;
    fdlwp(picdata, loadpicd, `Unable to Search, Make sure U'r connected with active Network!`);
}
function infoPrint(x) {
    x.forEach(x => {
        let info = x.previousElementSibling;
        x.onclick = () => {
            if ($gs('bottom', info) != '0px') {
                $ss('bottom', '0', info); setTimeout(() => { $ss('opacity', '1', info); }, 150);
            } else {
                $ss('opacity', '0', info); setTimeout(() => { $ss('display', 'none', info); $ss('bottom', '100%', info); }, 450); setTimeout(() => { $ss('display', 'block', info); }, 550);
            }
        }
    });
} infoPrint($$('.postd>i'));
function NewVidPlyr() {
    printinfo(); printdl(); printRel();
}
function printinfo() {
    let vi = ytInitialPlayerResponse.videoDetails; let mic = ytInitialPlayerResponse.microformat.playerMicroformatRenderer; let w;
    if (mic.isFamilySafe) {
        w = 'This Video is Marked as family Safe!';
    } else {
        w = 'This Video is Marked as family Not-Safe!';
    }
    let info = `
    <header>
        <img src="${vi.thumbnail.thumbnails[$lk(vi.thumbnail.thumbnails)].url}">
        <div>
            <a href="${mic.ownerProfileUrl}" target="_blank">
                <img src="${authorL}">
                <name>${vi.author}</name>
            </a>
            <info title="${vi.viewCount} Views | ${ftime(vi.lengthSeconds)} | ${new Date(mic.publishDate).toDateString()}">${$fb(vi.viewCount, ' ').substring(0, $fb(vi.viewCount, ' ').length - 1)} Views | ${ftime(vi.lengthSeconds)} | ${new Date(mic.publishDate).toDateString()}</info>
            <warn>${w}</warn>
        </div>
    </header>
    <h1>${vi.title}</h1>
    <div><showdes onclick="toggledes()">Show/hide Description</showdes><showkw onclick="togglekw()">Show/hide KeyWords</showkw></div>
    <h3>${vi.shortDescription}</h3>
    <h4>${vi.keywords}</h4>`; html(info, $('div.maincan>content>info')); $ss('display', 'flex', $('div.maincan>content>info'));
}
function printdla() {
    z = ytInitialPlayerResponse.streamingData['adaptiveFormats'];
    z.forEach(y => {
        c = y.mimeType;
        if (y.qualityLabel) { v = 'Muted Video (No sound)'; x = 'fas fa-volume-mute'; a = y.qualityLabel; b = c.slice(c.indexOf('codecs="'), c.length).substr(8); b = b.substring(0, b.length - 1); } else { v = 'Audio'; x = 'fas fa-file-audio'; a = (y.bitrate / 1024).toFixed(0) + 'kbps'; b = c.slice(c.indexOf('codecs="'), c.length).substr(8); b = b.substring(0, b.length - 1); }
        dbs += `<a target="_blank" class="${x}" href="${y.url}" id="dirdl" title="Click to Open/Download ${v}">
                <b> ${a}</b><sup>${c.slice(c.indexOf('/'), c.indexOf(';')).substr(1)}</sup><br><sub>${b}</sub><b>${$fb(y.contentLength)}</b></a>`;
        if (z.indexOf(y) == z.length - 1) { html(dbs, $('download')); $ss('display', 'flex', $('download')); }
    });
}
function printdl() {
    dbs = '';
    z = ytInitialPlayerResponse.streamingData['formats'];
    z.forEach(y => {
        if (y.url) {
            x = y.mimeType; b = x.slice(x.indexOf('codecs="'), x.length).substr(8); b = b.substring(0, b.length - 1);
            dbs += `<a target="_blank" class="fas fa-file-video" href="${y.url}" id="dirdl" title="Click to Open/Download Video">
                <b> ${y.qualityLabel}</b><sup>${x.slice(x.indexOf('/'), x.indexOf(';')).substr(1)}</sup><br><sub>${b}</sub><b>${$fb(y.contentLength)}</b></a>`;
        }
        if (z.indexOf(y) == z.length - 1 && y.url) { printdla(); } else { $ss('display', 'block', $('download')); html('<i style="font-size: x-large;font-weight: bold;">Unable to download! Please try any other video.</i>', $('download')); }
    });
}
function printRel() {
    let cre = $('content>related');
    rd = cre.innerHTML; cd = $('aside').innerHTML; html('', cre); html(cd + rd, $('aside'));
    h = ytInitialData.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results;
    h.forEach(z => {
        if (z.compactVideoRenderer) {
            x = z.compactVideoRenderer;
            if (x) {
                let d = ''; let dt = ''; let v = '';
                if (x.lengthText) { d = x.lengthText.simpleText + ' | '; }
                if (x.viewCountText) { v = x.viewCountText.simpleText + ' | '; }
                if (x.publishedTimeText) { dt = x.publishedTimeText.simpleText; }
                if (d != '') {
                    e = $ne('div'); $sa('class', 'postd', e); e.title = x.title.simpleText; lc = x.channelThumbnail.thumbnails[0].url;
                    e.innerHTML = `
                <div class="det">
                    <owner>
                        <img title="${x.longBylineText.runs[0].text}" alt="${x.longBylineText.runs[0].text}" src="${lc}">
                        <a href="${'#' + x.longBylineText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url}" title="${x.longBylineText.runs[0].text}">${x.longBylineText.runs[0].text}</a>
                    </owner>
                    <div>${d + v + dt}</div>
                </div>
                <i class="fas fa-info" title="further Info..."></i>
                <a href="${'?browse=' + strrev($euc((lc).slice(22, (lc).search('=')))) + x.videoId}">
                    <img src="${x.thumbnail.thumbnails[$lk(x.thumbnail.thumbnails)].url}" alt="${x.title.simpleText}">
                    <div class="title">${x.title.simpleText}</div>
                </a>`; cre.appendChild(e);
                }
            }
        }
        if (h.indexOf(z) == $lk(h)) { setTimeout(() => { infoPrint($$('.postd>i')); thumbRan(); blockAnchor(); }, 200); }
    }); if ($('headings')) { $('headings').remove(); }
}
function makepost(d, y, n, se, s) {
    let x; if (s) { x = d.videoRenderer; } else { x = d.richItemRenderer.content.videoRenderer; }
    if (x) {
        let d = ''; let dt = ''; let v = ''; if (x.lengthText) { d = x.lengthText.simpleText + ' | '; } if (x.viewCountText) { v = x.viewCountText.simpleText + ' | '; } if (x.publishedTimeText) { dt = x.publishedTimeText.simpleText; }
        if (d != '') {
            e = se.children[y];
            if (e) {
                lc = x.channelThumbnailSupportedRenderers.channelThumbnailWithLinkRenderer.thumbnail.thumbnails[0].url;
                l = e.lastElementChild;
                th = $('a>img', e);
                t = $('a>div', e);
                ic = $('owner>img', e);
                nl = $('owner>a', e);
                i = $('.det>div', e)
                l.href = '?browse=' + strrev($euc((lc).slice(22, (lc).search('=')))) + x.videoId;
                th.src = x.thumbnail.thumbnails[$lk(x.thumbnail.thumbnails)].url; th.alt = x.title.runs[0].text;
                t.innerHTML = x.title.runs[0].text; e.title = x.title.runs[0].text;
                ic.src = lc;
                ic.alt = x.longBylineText.runs[0].text; ic.title = x.longBylineText.runs[0].text;
                nl.innerHTML = x.longBylineText.runs[0].text; nl.title = x.longBylineText.runs[0].text;
                nl.href = '#' + x.longBylineText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url;
                i.innerHTML = `${d + v + dt}`;
            } else {
                e = $ne('div'); $sa('class', 'postd', e); e.title = x.title.runs[0].text;
                e.innerHTML = `
                <div class="det">
                    <owner>
                        <img title="${x.longBylineText.runs[0].text}" alt="${x.longBylineText.runs[0].text}" src="${lc}">
                        <a href="${'#' + x.longBylineText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url}" title="${x.longBylineText.runs[0].text}">${x.longBylineText.runs[0].text}</a>
                    </owner>
                    <div>${d + v + dt}</div>
                </div>
                <i class="fas fa-info" title="further Info..."></i>
                <a href="${'?browse=' + strrev($euc((lc).slice(22, (lc).search('=')))) + x.videoId}">
                    <img src="${x.thumbnail.thumbnails[$lk(x.thumbnail.thumbnails)].url}" alt="${x.title.runs[0].text}">
                    <div class="title">${x.title.runs[0].text}</div>
                </a>`; se.appendChild(e);
            }
        } else {
            dind -= 1;
        }
    } else {
        dind -= 1;
    }
}
function maketrend(x, y, z) {
    e = trende.children[y];
    d = x.dur + ' | '; v = x.views + ' | '; dt = x.date;
    if (e) {
        l = e.lastElementChild;
        th = $('a>img', e);
        t = $('a>div', e);
        ic = $('owner>img', e);
        nl = $('owner>a', e);
        i = $('.det>div', e);
        l.href = '?browse=' + strrev($euc((x.logo).slice(22, (x.logo).search('=')))) + x.id;
        th.src = x.thumb; th.alt = $duc(x.title);
        t.innerHTML = $duc(x.title); e.title = $duc(x.title);
        ic.src = x.logo;
        ic.title = $duc(x.ownerN);
        ic.alt = $duc(x.ownerN);
        nl.innerHTML = $duc(x.ownerN); nl.title = $duc(x.ownerN);
        nl.href = '#' + x.ownerL;
        i.innerHTML = `${d + v + dt}`;
    } else {
        e = $ne('div'); $sa('class', 'postd', e); e.title = $duc(x.title);
        e.innerHTML = `
                <div class="det">
                    <owner>
                        <img title="${$duc(x.ownerN)}" alt="${$duc(x.ownerN)}" src="${x.logo}">
                        <a href="${'#' + x.ownerL}" title="${$duc(x.ownerN)}">${$duc(x.ownerN)}</a>
                    </owner>
                    <div>${d + v + dt}</div>
                </div>
                <i class="fas fa-info" title="further Info..."></i>
                <a href="${'?browse=' + strrev($euc((x.logo).slice(22, (x.logo).search('=')))) + x.id}">
                    <img src="${x.thumb}" alt="${$duc(x.title)}">
                    <div class="title">${$duc(x.title)}</div>
                </a>`; trende.appendChild(e);
    } setTimeout(() => { infoPrint($$('.postd>i')); thumbRan(); blockAnchor(); }, 200);
    if (z.length > cpost + 1) { $ss('display', 'block', id('showmt')); } else { $ss('display', 'none', id('showmt')); }
}
function stickyfun(y) {
    a = $('.maincan', y); b = $('aside', y); ah = a.clientHeight + 20; bh = b.clientHeight + 20; wh = window.innerHeight; mh = y.clientHeight;
    yb = y.getBoundingClientRect(); ab = a.getBoundingClientRect(); bb = b.getBoundingClientRect();
    abot = ab.bottom - wh; bbot = bb.bottom - wh; ybot = yb.bottom - wh;
    if (ah < mh && abot <= -10) {
        $ss('margin-top', `${(yb.top * (-1)) - (ah - (wh + 10))}px`, a);
    }
    if (getComputedStyle(a).marginTop.substr(0, 2) > 0) {
        if (ab.top > 10) {
            $ss('margin-top', `${(yb.top * (-1)) + 10 + id('processingE').clientHeight}px`, a);
        }
    }
    if (bh < mh && bbot <= -10 && ybot > 0) {
        $ss('margin-top', `${(yb.top * (-1)) - (bh - (wh + 10))}px`, b);
    }
    if (getComputedStyle(b).marginTop.substr(0, 2) > 0) {
        if (bb.top > 10) {
            $ss('margin-top', `${(yb.top * (-1)) + 10 + id('processingE').clientHeight}px`, b);
        }
    }
    if (ybot < 0) {
        if (ah < wh) { $ss('margin-top', `${yb.top * (-1) + 10 + id('processingE').clientHeight}px`, a); } else { $ss('margin-top', `${mh - (ah - 10)}px`, a); }
        if (bh < wh) { $ss('margin-top', `${yb.top * (-1) + 10 + id('processingE').clientHeight}px`, b); } else { $ss('margin-top', `${mh - (bh - 10)}px`, b); }
    }
    if (yb.top > 0) {
        $ss('margin-top', `10px`, a);
        $ss('margin-top', `10px`, b);
    }

}
function cusmsg(d, t) { html(d, $('#msg-box>span')); $ss('top', '10%', $('#msg-box')); if (t) { setTimeout(() => { $('#msg-box>i').click(); }, t); } }
$clk(() => { $ss('display', 'none', $('#msg-box')); $ss('top', '-100%', $('#msg-box')); $ss('display', 'flex', $('#msg-box')); }, $('#msg-box>i'));
$clk(async () => { if (await navigator.clipboard.readText() == '') { $('#msg-box>i').click(); setTimeout(() => { cusmsg('Clipboard is Empty or no readable data cached!') }, 200); } else { $pcb($('searcheng>form>input')); } }, $('#PstCB'));
$clk(() => { $('#msg-box>i').click(); setTimeout(() => { if ($('searcheng>form>input').value) { if (isURL($('searcheng>form>input').value)) { loadpost($('searcheng>form>input').value); } else { loadpic($('searcheng>form>input').value); window.history.pushState('', '', `?search=${$euc($('searcheng>form>input').value)}`); } } else { cusmsg('Please define search text first!'); } }, 200); }, $('searcheng>div>search>i'));
$clk(() => { x = $('searcheng>div>setting>div'); if ($gs('display', x) == 'none') { $ss('display', 'block', x); } else { $ss('display', 'none', x); } }, $('searcheng>div>setting>i'));
$clk(() => { $('searcheng>div>setting>i').click(); }, $('searcheng>div>setting>div>i'));
$clk(() => { if (cpost < trends.length) { if (trends.length - cpost <= 9) { assigntrend(trends, trends.length - (cpost + 1)); } else { assigntrend(trends, 9); } } }, id('showmt'));
$clk(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, id('bcktop'));
$clk(() => {
    if ($('theme').id == 'dtheme') {
        $('theme').id = 'ltheme';
        html(`:root {
            --primclr: black;
            --secndclr: white;
            --focusclr: red;
            --shadowclr: gray;
        }`, id('rootCSS')); $sk('thememod', false, { 'expiry': 999999999 });
    } else {
        $('theme').id = 'dtheme';
        html(`:root {
            --primclr: white;
            --secndclr: black;
            --focusclr: gray;
            --shadowclr: red;
        }`, id('rootCSS')); $sk('thememod', true, { 'expiry': 999999999 });
    }
}, $('theme'));
document.addEventListener('scroll', x => {
    if (window.pageYOffset > 300) {
        $ss('display', 'flex', id('bcktop'));
    } else {
        $ss('display', 'none', id('bcktop'));
    }
    if (isWinDes) { stickyfun(id('desktopDiv')); }
});
function weConfig() {
    if ($gk('thememod') == 'true') $('theme').click(); $dk('slEls'); $dk('stEls');
    $ss('display', 'none', id('bcktop'));
} weConfig();
if (vpost) {
    x = $ne('img'); x.src = blogo + $duc(strrev(vpost.slice(0, vpost.length - 11))) + Lend; vid = vpost.slice(vpost.length - 11, vpost.length);
    x.onload = () => {
        z = $ne('img'); z.src = `https://i.ytimg.com/vi/${vid}/mqdefault.jpg`;
        z.onload = () => {
            if (z.naturalWidth > 120) {
                authorL = x.src; loadpost(vid);
            } else { cusmsg('Fetch Error: Invalid Request!', 3000); window.history.pushState('', '', '?error'); }
        }
        z.onerror = () => { cusmsg(`Network Error: Make Sure U'r connected with active Network!`, 3000); }
    }
    x.onerror = () => {
        if (navigator.onLine === false) {
            cusmsg(`Network Error: Make Sure U'r connected with active Network!`, 3000);
        } else {
            cusmsg('Data Error: Invalid Request!', 3000); window.history.pushState('', '', '?error');
        }
    }
} if (vpic) { treL = true; $('searcheng>form>input').value = vpic; $('searcheng>div>search>i').click(); }
