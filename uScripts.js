
let smca = tag('#lll-smart-menu > div > dbody'); // smart menu content area for appending elements
if (smca) {
    let newspn = newEle(`
<div class="lightboxDM cursor-pointer w-fitcontent">
     <h2>Quick <b><i>Guid</i></b> to <span style="color:red;">Get Started!</span></h2>
</div>
`, 'span');
    smca.appendChild(newspn);
    click(quickguid, newspn);
}
function quickguid() {
    loading_12345.style.display = 'flex';
    loading_12345.style.opacity = '1';
    let lcources = [{
        "title": "HTML Full Cource with Exercise",
        "thumb": "https://i.ibb.co/cDG9MhV/HTML-Course-covering-by-Lets-Learn-Lights.jpg",
        "url": "https://letslearnlights.blogspot.com/2021/05/html-all-about-learn-html-to-z-in.html",
        "index": 1
    }, {
        "title": "CSS Full Cource with Exercise",
        "thumb": "https://i.ibb.co/P1Ckn5C/CSS-intro.jpg",
        "url": "https://letslearnlights.blogspot.com/2022/08/what-is-css-and-basic-of-css.html",
        "index": 2
    }];
    let guider = newEle(
        `<style>
             .lll-corses {
                  height: 200px;
                  display: flex;
             }
             .lll-corses>a {
                font-size: 3em;
                line-height: 1.4em;
                width: 200px;
                height: inherit;
                text-align: center;
                background: white;
                transition: 1s;
                user-select: none;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                text-overflow: ellipsis;
             }
        </style>
        <h2>First of All chose a course you want to start from list given below. This will land you on first lesson of
             the course.
             <linebreak></linebreak>
             Read full lesson and chose next lesson by clicking on newer tab as shown in picture...
        </h2>
        <img src="https://mnzrch.github.io/mycodes/npost.png" alt="New post chose helper pic" class="w-wfa h-auto lightboxDM">
        <div class="lll-corses"></div>`
        , 'div'); setAttr('name', 'Quick Guider for Getting strat Letslearnlights', guider);
    setAttr('class', 'vp-center lightele dragable windowtype bs-hidden', guider); $setCSS({ 'transition': '0s', 'z-index': '10000' }, guider);
    document.body.appendChild(guider);
    lcources.forEach((i) => {
        let xcrs = `<style>
            .lll-corses>a:nth-child(`+ (i['index'] * 2) + `):hover {
                 color: transparent;
                 background: url('`+ i['thumb'] + `');
                 background-size: cover;
                 background-position: center;
            }
            </style>
            <a class="lightboxLG dis-inlineB cursor-pointer" target="_blank" href="`+ i['url'] + `">` + i['title'] + `</a>`;
        html(guider.querySelector('.lll-corses').innerHTML + xcrs, guider.querySelector('.lll-corses'));
    })
    scripts();
    closeload();
};
function llldls() {
    let llldlsw = newEle(`
    <div class="btnv3 btn-0url" url="">Download SSrMovies ads bypass by Letslearnlight</div>
    `
        , 'div'); setAttr('name', 'FreeWare Downloads from Letslearnlights', llldlsw);
    setAttr('class', 'vp-center lightele dragable windowtype bs-hidden', llldlsw); $setCSS({ 'transition': '0s', 'z-index': '10000' }, llldlsw);
    document.body.appendChild(llldlsw);
    scripts();
    closeload();
};
function closeload() {
    setTimeout(() => {
        loading_12345.style.opacity = '0';
        setTimeout(() => {
            loading_12345.style.display = 'none';
        }, 1000);
    }, 1000);
};