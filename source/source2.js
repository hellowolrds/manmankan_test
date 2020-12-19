
var source2 = { 
  comicSourceName: '动漫之家',
  comicSourceUrl: 'https://m.dmzj.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://m.dmzj.com/")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://v2.api.dmzj.com/comic/%s.json',
  ruleComicTitle: '$.title',
  ruleComicAuthor: '$.authors[*].tag_name',
  ruleComicCover:
  '$.cover',
  ruleComicInstro: '$.description',
  ruleComicStatus: false,
  ruleComicUpdate: '$.last_updatetime@js:java.getFormatTime("yyyy-MM-dd", result*1000)',
  ruleChapterList: '$.chapters..data.*',
  ruleChapterName: '$.chapter_title',
  ruleChapterUrl: '$.chapter_id',

  // 图片详情
  ruleContentUrl:
  'http://api.zymk.cn/app_api/v5/getcomicinfo/?comic_id=param1',
  ruleComicContent:
  '',

  // 推荐

  ruleFindAuthor: '$.comic_feature',
  ruleFindCid: '$.comic_id',
  ruleFindCoverUrl:
  '$.comic_id@js:function format_image(bookId){var sb=bookId;var i=0;var count=bookId.split("");while(i<9-count.length){sb="0"+sb;i++}var chars=sb.split("");var url="";for(var i=0;i<chars.length;i++){url+=chars[i];if(i==2||i==5){url+="/"}}return"http://image.zymkcdn.com/file/cover/"+url+".jpg-300x400.webp"}format_image(result);',
  ruleFindList: '$..comic_list.*',
  ruleFindTitle: '$.comic_name',
  ruleFindUrl:
  '',

  // 搜索

  ruleSearchAuthor: 'comic_author',
  ruleSearchCid: 'id',
  ruleSearchCoverUrl: 'comic_cover',
  ruleSearchList: '@js:function getData(){eval(result);return g_search_data;}getData();',
  ruleSearchTitle: 'comic_name',
  ruleSearchUpdate: '',
  ruleSearchUrl:
  '!http://s.acg.dmzj.com/comicsum/search.php?s=searchKey',


  sort: '2',
  type: 2 
};



module.exports = source2;