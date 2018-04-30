var init = function() {
    var isMobile = navigator.userAgent &&
        navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
    var isSmall = window.innerWidth < 1000;

    var ps = new ParticleSlider({
        ptlGap: isMobile || isSmall ? 3 : 0,
        ptlSize: isMobile || isSmall ? 3 : 1,
        width: 1e9,
        height: 800
    });

    (window.addEventListener ?
        window.addEventListener('click', function() {
            ps.init(true)
        }, false) :
        window.onclick = function() {
            ps.init(true)
        });
}

(window.addEventListener ?
    window.addEventListener('load', init, false) :
    window.onload = init);