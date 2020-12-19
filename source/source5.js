
var source5 = { 
  comicSourceName: '有妖气',
  comicSourceUrl: 'https://www.u17.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://www.u17.com")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://www.u17.com/comic/%s.html',
  ruleComicTitle: '@css:div.comic_info > div.left > h1.fl@text',
  ruleComicAuthor: '@css:div.comic_info > div.right > div.author_info > div.info > a.name@text',
  ruleComicCover:
  '@css:div.comic_info > div.left > div.coverBox > div.cover > a > img@src',
  ruleComicInstro: 'id.words@text',
  ruleComicStatus: false,
  ruleComicUpdate: '@css:div.main > div.chapterlist > div.chapterlist_box > div.bot > div.fl > span@text@js:result.substring(7)',
  ruleChapterList: '@css:#chapter > li > a',
  ruleChapterName: 'text',
  ruleChapterUrl: 'href@js:java.splitHref(result, 1)',

  // 图片详情
  ruleContentUrl:
  'http://www.u17.com/comic/ajax.php?mod=chapter&act=get_chapter_v5&chapter_id=param2',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  'importClass(Packages.java.util.ArrayList);importPackage(Packages.org.json);importPackage(Packages.com.reader.comic.model);function parseImages(){var list=new ArrayList();var object=new JSONObject(content);var array=object.getJSONArray("image_list");for(var i=0;i<array.length();++i){var url=array.getJSONObject(i).getString("src");list.add(new ImageUrl(i+1,url,false))}return list};',

  // 推荐

  ruleFindAuthor: 'class.mh-works-tags@tag.span@text#作者：',
  ruleFindCid: 'tag.a@href@js:result=result.substring(1,result.length-1);result.replace("/", "_")',
  ruleFindCoverUrl:
  'class.mh-nlook-w@tag.img@src',
  ruleFindList: 'class.mh-search-list@tag.li',
  ruleFindTitle: 'class.mh-works-title@tag.h4@text',
  ruleFindUpdate: 'class.mh-works-author@text@js:result.substring(7)',
  ruleFindUrl:
  '全部::https://www.u17.com/comic/ajax.php?mod=comic_list&act=comic_list_new_fun&a=get_comic_list@data[group_id]=no&data[theme_id]=no&data[is_vip]=no&data[accredit]=no&data[color]=no&data[comic_type]=no&data[series_status]=no',

  // 搜索

  ruleSearchAuthor: '@css:div:eq(1) > h3 > a[title]@text',
  ruleSearchCid: '@css:div:eq(1) > h3 > strong > a@href@js:java.splitHref(result,1)',
  ruleSearchCoverUrl: '@css:div:eq(0) > a > img@src',
  ruleSearchList: '@css:#comiclist > div.search_list > div.comiclist > ul > li > div',
  ruleSearchTitle: '@css:div:eq(1) > h3 > strong > a@title',
  ruleSearchUpdate: '@css:div:eq(1) > h3 > span.fr@text@js:java.substring(result,7)',
  ruleSearchUrl:
  'http://so.u17.com/all/searchKey/m0_psearchPage.html',


  sort: '5',
  type: 5
};



module.exports = source5;