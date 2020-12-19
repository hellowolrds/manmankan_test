
var source4 = { 
  comicSourceName: '汗汗酷漫',
  comicSourceUrl: 'http://www.js518.net',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://hhaass.com/")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://ssoonn.com/comic/%s/?d=123@Header:{"User-Agent": "Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19"}',
  ruleComicTitle: 'class.pic@class.con@tag.h3@text',
  ruleComicAuthor: 'class.pic@class.con@tag.p.0@text#作者：',
  ruleComicCover:
  'class.pic@tag.img@src',
  ruleComicInstro: '@css:#detail_block .ilist p@text',
  ruleComicStatus: false,
  ruleComicUpdate: '@css:.pic .con p:last-child@text##更新日期：',
  ruleChapterList: '@css:#sort_div_p a',
  ruleChapterName: 'text',
  ruleChapterUrl: 'href',

  // 图片详情
  ruleContentUrl:
  'param2@Header:{"User-Agent": "Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19"}',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  'importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importPackage(Packages.java.lang);function parseImages(){var list=new ArrayList();var reg=/<script>var sFiles.+<\\/script>/g;var result=content.match(reg)[0];result=result.replace("<script>","").replace("<\/script>","");eval(result);sFiles=unsuan(sFiles);var arrFiles=sFiles.split("|");var sDomain="http://18.125084.com/dm03/";for(var i=0;i<arrFiles.length;i++){var img=sDomain+arrFiles[i];var imageUrl=new ImageUrl(i+1,img,false);list.add(imageUrl)}return list}function unsuan(s){var sw="ssoonn.com|m.99comic.com|ssoozz.com";var su="ssoonn.com";var b=false;for(var i=0;i<sw.split("|").length;i++){if(su.indexOf(sw.split("|")[i])>-1){b=true;break}}if(!b){return""}var x=s.substring(s.length-1);var xi="abcdefghijklmnopqrstuvwxyz".indexOf(x)+1;var sk=s.substring(s.length-xi-12,s.length-xi-1);s=s.substring(0,s.length-xi-12);var k=sk.substring(0,sk.length-1);var f=sk.substring(sk.length-1);for(var i=0;i<k.length;i++){eval("s=s.replace(/"+k.substring(i,i+1)+"/g,\'"+i+"\')")}var ss=s.split(f);s="";for(var i=0;i<ss.length;i++){s+=String.fromCharCode(ss[i])}return s};',

  // 推荐

  ruleFindAuthor: '@css:.con h3+p@text',
  ruleFindCid: 'class.pic@tag.a@href@js:result=java.splitHref(result, -1);',
  ruleFindCoverUrl:
  'tag.img@src',
  ruleFindList: 'class.main@class.se-list@tag.li',
  ruleFindTitle: 'class.con@tag.h3@text',
  ruleFindUpdate: '',
  ruleFindUrl:
  '萌系::http://ssoonn.com/lists/1/searchPage/&&搞笑::http://ssoonn.com/lists/2/searchPage/&&格斗::http://ssoonn.com/lists/3/searchPage/&&科幻::http://ssoonn.com/lists/4/searchPage/&&剧情::http://ssoonn.com/lists/5/searchPage/&&侦探::http://ssoonn.com/lists/6/searchPage/&&竞技::http://ssoonn.com/lists/7/searchPage/&&魔法::http://ssoonn.com/lists/8/searchPage/&&神鬼::http://ssoonn.com/lists/9/searchPage/&&校园::http://ssoonn.com/lists/10/searchPage/&&惊栗::http://ssoonn.com/lists/11/searchPage/&&厨艺::http://ssoonn.com/lists/12/searchPage/&&伪娘::http://ssoonn.com/lists/13/searchPage/&&图片::http://ssoonn.com/lists/14/searchPage/&&冒险::http://ssoonn.com/lists/15/searchPage/&&小说::http://ssoonn.com/lists/19/searchPage/&&港漫::http://ssoonn.com/lists/20/searchPage/&&耽美::http://ssoonn.com/lists/21/searchPage/&&经典::http://ssoonn.com/lists/22/searchPage/&&欧美::http://ssoonn.com/lists/23/searchPage/&&日文::http://ssoonn.com/lists/24/searchPage/&&亲情::http://ssoonn.com/lists/25/searchPage/',

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: 'tag.a@href@js:result=result.substring(1,result.length-1);result.replace("/", "_")',
  ruleSearchCoverUrl: 'class.mh-nlook-w@tag.img@src',
  ruleSearchList: 'ckass.mh-search-list@tag.li',
  ruleSearchTitle: 'class.mh-works-title@tag.h4@text',
  ruleSearchUpdate: 'class.mh-works-author@text',
  ruleSearchUrl:
  'http://www.js518.net/statics/search.aspx?key==searchKey&page=searchPage',


  sort: '4',
  type: 4
};



module.exports = source4;