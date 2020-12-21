
var source32 = { 
  comicSourceName: '六漫画',
  comicSourceUrl: 'http://m.6mh7.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("user-agent","Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://m.6mh7.com/%s/?@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicTitle: '@css:h1.cartoon-title@text',
  ruleComicAuthor: '',
  ruleComicCover:
  '@css:.banner>.cartoon-poster@src',
  ruleComicInstro: '@css:.introduction@text',
  ruleComicStatus: false,
  ruleComicUpdate: '@css:.author@text@js:result.replace("作者：","")',
  ruleChapterList: '@css:#chapter-list1 a',
  ruleChapterName: 'text',
  ruleChapterUrl: 'href',

  // 图片详情
  ruleContentUrl:
  'http://m.6mh7.comparam2?@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicContent:
  'importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.soup.Node);importClass(Packages.com.reader.comic.utils.StringUtils);importPackage(Packages.java.lang);function parseImages(){var list=new ArrayList();var reg=/\\}\\(\'(.+\\])\',([0-9]*),([0-9]*),(\'.+\'\\)),([0-9]*),(\\{.*\\})/g;var params=reg.exec(content);eval(get_img(params[1],params[2],params[3],params[4],0,{}));for(var i=0;i<newImgs.length;i++){var url=newImgs[i];list.add(new ImageUrl(i+1,url,false))}return list}function get_img(p,a,c,k,e,d){eval("k="+k+";");e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!"".replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return"\\\\w+"};c=1}while(c--){if(k[c]){p=p.replace(new RegExp("\\\\b"+e(c)+"\\\\b","g"),k[c])}}return p};',

  // 推荐

  ruleFindAuthor: '$.author',
  ruleFindCid: '$.id',
  ruleFindCoverUrl:
  '$.imgurl',
  ruleFindList: '$.*',
  ruleFindTitle: '$.name',
  ruleFindUpdate: '$.remarks',
  ruleFindUrl:
  '冒险热血::http://m.6mh7.com/sortdata.php@type=1&page_num=searchPage&&武侠格斗::http://m.6mh7.com/sortdata.php@type=2&page_num=searchPage&&科幻魔幻::http://m.6mh7.com/sortdata.php@type=3&page_num=searchPage&&侦探推理::http://m.6mh7.com/sortdata.php@type=4&page_num=searchPage&&耽美爱情::http://m.6mh7.com/sortdata.php@type=5&page_num=searchPage&&生活漫画::http://m.6mh7.com/sortdata.php@type=6&page_num=searchPage&&推荐漫画::http://m.6mh7.com/sortdata.php@type=11&page_num=searchPage&&完结::http://m.6mh7.com/sortdata.php@type=12&page_num=searchPage&&连载中::http://m.6mh7.com/sortdata.php@type=13&page_num=searchPage',

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: 'href@js:java.splitHref(result,0)',
  ruleSearchCoverUrl: '@css:img@src',
  ruleSearchList: '@css:.result-list > a',
  ruleSearchTitle: '@css:.cartoon-info h2@text',
  ruleSearchUpdate: '@css:.cartoon-info span@text',
  ruleSearchUrl:
  '!http://m.6mh7.com/search?keyword=searchKey@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',


  sort: '32',
  type: 32
};



module.exports = source32;