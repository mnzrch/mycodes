let qget_started = `<style>.qget_started {position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 9999;}
</style><div class="qget_started lightboxT w-fitcon h-fitcon">
  <header class="lightele w-wfa cursor-default">Quick Get Started...</header>
  <div class="con lightboxLG w-fitcon ta-center">
    If You are First Time Visiting this site Then this Quick Guide will help you to get started.
    <br /><img alt="smart menu indicator" src="https://mnzrch.github.io/SkytoSeaTools/assests/sm.png"><br />
    All Covered Courses Will be founded in smart menu which is marked in above Picture.
  </div>
  <footer class="lightele w-wfa dis-flex jc-spacebetween ai-center">
    <con class="dis-flex ai-center"><span title="Please wait, Item is being loaded!" class="checkbox cursor-notallowed" value=""></span>Don't show this message again</con>
    <ctrl><span class="btnv3">Close</span></ctrl>
  </footer>
</div>`;
if (getCoki('qget_started') != 1) {
  document.write(qget_started);
  let closbox = tag('div.qget_started.lightboxT.w-fitcon.h-fitcon > footer > con > span');
  setCSS('cursor', 'pointer', closbox); setAttr('title', 'Click to check/uncheck', closbox);
  clog(closbox);
  click(function () {
    if (getAttr('value', closbox) == 1) { setCoki('qget_started', '1', { 'max-age': '31104000' }) }
    tag('div.qget_started').remove();
  }, tag('div.qget_started.lightboxT.w-fitcon.h-fitcon > footer > ctrl > span'));
}
