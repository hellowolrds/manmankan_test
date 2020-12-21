
var source33 = { 
  comicSourceName: '漫画BZ',
  comicSourceUrl: 'https://x.twocomic.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("User-Agent","Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://www.mangabz.com/%s/@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicTitle: '@css:.detail-main-title@text',
  ruleComicAuthor: '@css:.detail-main-subtitle span:last-child@text',
  ruleComicCover:
  '@css:.detail-bar-img@src',
  ruleComicInstro: '@css:.detail-main-content@text',
  ruleComicStatus: false,
  ruleComicLianZai: "",
  ruleComicUpdate: '',
  ruleChapterList: '@css:.detail-list .detail-list-item',
  ruleChapterName: 'text',
  ruleChapterUrl: '@css:a@href',

  // 图片详情
  ruleContentUrl:
  'http://www.mangabz.comparam2@Header:{"User-Agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicContent:
  `
  importClass(Packages.java.util.ArrayList)
importPackage(Packages.com.reader.comic.model)
importPackage(Packages.java.lang)


function parseImages() {
    var list = new ArrayList();
    var reg = /\\}\\('(.+\\];)',([0-9]*),([0-9]*),('.+'\\)),([0-9]*),(\\{.*\\})/g;
    var params = reg.exec(content);
    params[1] = params[1].replace(/\\\\/g, "");
    eval(get_img(params[1], params[2], params[3], params[4], 0, {}));

    for (var i = 0; i < newImgs.length; i ++) {
        var url = newImgs[i];
        list.add(new ImageUrl(i+1, url, false));
    }

    return list;
}

function get_img (p, a, c, k, e, d) {
  eval("k="+k+";")
  e = function(c) {
      return (c < a ? '': e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
  };
  if (!''.replace(/^/, String)) {
      while (c--) {
          d[e(c)] = k[c] || e(c)
      }
      k = [function(e) {
          return d[e]
      }];
      e = function() {
          return '\\\\w+'
      };
      c = 1
  };
  while (c--) {
      if (k[c]) {
          p = p.replace(new RegExp('\\\\b' + e(c) + '\\\\b', 'g'), k[c])
      }
  }
  return p
}


  
  `,

  // 推荐

  ruleFindAuthor: '$.Author',
  ruleFindCid: '$.UrlKey',
  ruleFindCoverUrl:
  '$.ShowConver',
  ruleFindList: '$.UpdateComicItems.*',
  ruleFindTitle: '$.Title',
  ruleFindUpdate: '$.LastUpdateTime',
  ruleFindUrl:
  `全部::http://www.mangabz.com/manga-list/mangabz.ashx@action=getclasscomics&pageindex=searchPage&pagesize=21&tagid=0status=10&sort=10&&热血::http://www.mangabz.com/manga-list-31-0-10/mangabz.ashx@action=getclasscomics&pageindex=searchPage&pagesize=21&tagid=31status=10&sort=10&&恋爱::http://www.mangabz.com/manga-list-26-0-10/mangabz.ashx@action=getclasscomics&pageindex=searchPage&pagesize=21&tagid=26status=10&sort=10&&校园::http://www.mangabz.com/manga-list-1-0-10/mangabz.ashx@action=getclasscomics&pageindex=searchPage&pagesize=21&tagid=1status=10&sort=10&&冒险::http://www.mangabz.com/manga-list-2-0-10/mangabz.ashx@action=getclasscomics&pageindex=searchPage&pagesize=21&tagid=2status=10&sort=10&&科幻::http://www.mangabz.com/manga-list-25-0-10/mangabz.ashx@action=getclasscomics&pageindex=searchPage&pagesize=21&tagid=25status=10&sort=10&&生活::http://www.mangabz.com/manga-list-11-0-10/mangabz.ashx@action=getclasscomics&pageindex=searchPage&pagesize=21&tagid=11status=10&sort=10&&悬疑::http://www.mangabz.com/manga-list-17-0-10/mangabz.ashx@action=getclasscomics&pageindex=searchPage&pagesize=21&tagid=17status=10&sort=10&&魔法::http://www.mangabz.com/manga-list-15-0-10/mangabz.ashx@action=getclasscomics&pageindex=searchPage&pagesize=21&tagid=15status=10&sort=10&&运动::http://www.mangabz.com/manga-list-34-0-10/mangabz.ashx@action=getclasscomics&pageindex=searchPage&pagesize=21&tagid=34status=10&sort=10`,

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: 'href@js:java.splitHref(result, 0)',
  ruleSearchCoverUrl: '@css:.manga-item-cover@src',
  ruleSearchList: '@css:.manga-list > a',
  ruleSearchTitle: '@css:.manga-item-title@text',
  ruleSearchUpdate: '@css:.manga-item-subtitle@text@js:result.replace("作者：","")',
  ruleSearchUrl:
  'http://www.mangabz.com/search?title=searchKey@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',


  sort: '33',
  type: 33
};



module.exports = source33;