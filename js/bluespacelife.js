/**
 * 进入系统0
 */
function goToSystem0() {
    $("#home-gate").hide();
    $("html").css("background-color", "#111");
    $("body").css("background-color", "#111");
    $("#system0").show();
}

/**
 * 进入系统1
 */
function goToSystem1() {
    $("#home-gate").hide();
    $("#system1").show();
}

/**
 * 获取URL地址栏中的参数
 * @param {参数名称} name 
 * @returns 
 */
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

/**
 * 判断浏览器是否是移动端
 * @returns 是移动端(true), 不是移动端(false)
 */
function isMobileBrowser() {
    let browserVersions = getBrowserVersions();
    if (browserVersions.android || browserVersions.iPhone || browserVersions.iPad) {
        return true;
    }
    return false;
}

/**
 * 获取浏览器信息
 */
function getBrowserVersions() {
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                //移动终端浏览器版本信息                 
                trident: u.indexOf('Trident') > -1, //IE内核                 
                presto: u.indexOf('Presto') > -1, //opera内核                 
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核                 
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核                 
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端                 
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端                 
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器                 
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器                 
                iPad: u.indexOf('iPad') > -1, //是否iPad                 
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部             
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }
    return browser.versions;
}

/**
 * 回到主页
 */
 function goHome() {
    window.location.href = '/';
}

/**
 * 跳转到文章主页
 */
function goToArticles() {
    window.location.href = '/categories/article';
}

/**
 * 跳转到笔记主页
 */
function goToNotes() {
    window.location.href = '/categories/note';
}

/**
 * 跳转到小提琴主页
 */
function goToViolin() {
    window.location.href = '/categories/violin';
}

/**
 * 跳转到星辰大海主页
 */
function goToBeauty() {
    window.location.href = '/beauty/beauty.html';
}