
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
  'http://v2.api.dmzj.com/chapter/param1/param2.json',
  ruleComicContent:
  'importPackage(Packages.org.json);importPackage(Packages.com.reader.comic.model);importClass(Packages.java.util.ArrayList);function parseImages(){var list=new ArrayList();var object=new JSONObject(content);var array=object.getJSONArray("page_url");for(var i=0;i<array.length();i++){list.add(new ImageUrl(i+1,array.getString(i),false))}return list};',

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

  ruleSearchAuthor: 'comic_author',
  ruleSearchCid: 'id@js:result.replace(".0", "")',
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