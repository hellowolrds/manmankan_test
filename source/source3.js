
var source3 = { 
  comicSourceName: '汗汗酷漫',
  comicSourceUrl: 'http://ssoonn.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://hhaass.com/")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://ssoonn.com/comic/%s/?d=123@Header:{"User-Agent": "Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19"}',
  ruleComicTitle: 'class.pic@class.con@tag.h3@text',
  ruleComicAuthor: 'class.pic@class.con@tag.p.0@text',
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
  ruleComicContent:
  'importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importPackage(Packages.java.lang);function parseImages(){var list=new ArrayList();var reg=/<script>var sFiles.+<\/script>/g;var result=content.match(reg)[0];result=result.replace("<script>","").replace("<\/script>","");eval(result);sFiles=unsuan(sFiles);var arrFiles=sFiles.split("|");var sDomain="http://18.125084.com/dm03/";for(var i=0;i<arrFiles.length;i++){var img=sDomain+arrFiles[i];var imageUrl=new ImageUrl(i+1,img,false);list.add(imageUrl)}return list}function unsuan(s){var sw="ssoonn.com|m.99comic.com|ssoozz.com";var su="ssoonn.com";var b=false;for(var i=0;i<sw.split("|").length;i++){if(su.indexOf(sw.split("|")[i])>-1){b=true;break}}if(!b){return""}var x=s.substring(s.length-1);var xi="abcdefghijklmnopqrstuvwxyz".indexOf(x)+1;var sk=s.substring(s.length-xi-12,s.length-xi-1);s=s.substring(0,s.length-xi-12);var k=sk.substring(0,sk.length-1);var f=sk.substring(sk.length-1);for(var i=0;i<k.length;i++){eval("s=s.replace(/"+k.substring(i,i+1)+"/g,\'"+i+"\')")}var ss=s.split(f);s="";for(var i=0;i<ss.length;i++){s+=String.fromCharCode(ss[i])}return s};',

  // 推荐

  ruleFindAuthor: '$.authors',
  ruleFindCid: '$.id',
  ruleFindCoverUrl:
  '$.cover@js:"https://images.dmzj.com/"+result',
  ruleFindList: '$.*',
  ruleFindTitle: '$.name',
  ruleFindUpdate: '$.last_updatetime@js:java.getFormatTime("yyyy-MM-dd", result*1000)',
  ruleFindUrl:
  '全部::http://m.dmzj.com/classify/0-0-0-0-0-searchPage.json&&冒险::http://m.dmzj.com/classify/1-0-0-0-0-searchPage.json&&欢乐向::http://m.dmzj.com/classify/2-0-0-0-0-searchPage.json&&格斗::http://m.dmzj.com/classify/3-0-0-0-0-searchPage.json&&科幻::http://m.dmzj.com/classify/4-0-0-0-0-searchPage.json&&爱情::http://m.dmzj.com/classify/5-0-0-0-0-searchPage.json&&竞技::http://m.dmzj.com/classify/6-0-0-0-0-searchPage.json&&魔法::http://m.dmzj.com/classify/7-0-0-0-0-searchPage.json&&校园::http://m.dmzj.com/classify/8-0-0-0-0-searchPage.json&&悬疑::http://m.dmzj.com/classify/9-0-0-0-0-searchPage.json&&恐怖::http://m.dmzj.com/classify/10-0-0-0-0-searchPage.json&&生活亲情::http://m.dmzj.com/classify/11-0-0-0-0-searchPage.json&&百合::http://m.dmzj.com/classify/12-0-0-0-0-searchPage.json&&伪娘::http://m.dmzj.com/classify/13-0-0-0-0-searchPage.json&&耽美::http://m.dmzj.com/classify/14-0-0-0-0-searchPage.json&&后宫::http://m.dmzj.com/classify/15-0-0-0-0-searchPage.json&&萌系::http://m.dmzj.com/classify/16-0-0-0-0-searchPage.json&&治愈::http://m.dmzj.com/classify/17-0-0-0-0-searchPage.json&&武侠::http://m.dmzj.com/classify/18-0-0-0-0-searchPage.json&&职场::http://m.dmzj.com/classify/19-0-0-0-0-searchPage.json&&奇幻::http://m.dmzj.com/classify/20-0-0-0-0-searchPage.json&&节操::http://m.dmzj.com/classify/21-0-0-0-0-searchPage.json&&轻小说::http://m.dmzj.com/classify/22-0-0-0-0-searchPage.json&&搞笑::http://m.dmzj.com/classify/23-0-0-0-0-searchPage.json',

  // 搜索

  ruleSearchAuthor: '@css:.con h3+p@text',
  ruleSearchCid: 'class.pic@tag.a@href@js:result=java.splitHref(result, -1);',
  ruleSearchCoverUrl: 'tag.img@src',
  ruleSearchList: 'class.main@class.se-list@tag.li',
  ruleSearchTitle: 'class.con@tag.h3@text',
  ruleSearchUpdate: '',
  ruleSearchUrl:
  '!http://ssoonn.com/comicsearch/s.aspx?d=123&s=searchKey@Header:{"Host": "ssoonn.com","User-Agent": "Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19"}',


  sort: '3',
  type: 3 
};



module.exports = source3;