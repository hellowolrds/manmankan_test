
var source2 = { 
  comicSourceName: '动漫之家',
  comicSourceUrl: 'https://m.dmzj.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://m.dmzj.com/")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
  ruleChapterList: 'class.chapterlist@tag.li',
  ruleChapterName: 'text',
  ruleChapterUrl: 'data-id',
  ruleComicAuthor: 'class.comic-info@class.author@text',
  ruleComicContent:
  'importPackage(Packages.org.json);importPackage(Packages.java.lang);importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);function parseImages(){var list=new ArrayList();var jsonObject1=new JSONObject(content);var getData=new JSONObject(jsonObject1.get("data").toString());var jsonArray=new JSONArray(getData.getString("chapter_list"));for(var j=0;j<jsonArray.length();j++){var object=jsonArray.getJSONObject(j);var chapter_id=object.get("chapter_id").toString();if(chapter_id.equals(path)){var count=Integer.parseInt(object.getString("end_var"));for(var i=0;i<count;i++){var img="http://mhpic.zymkcdn.com/comic/";var img_type=new JSONObject(object.getString("chapter_image"));img=img+img_type.getString("middle");img=img.replace("$$",(i+1)+"");var imageUrl=new ImageUrl(i+1,img,false);list.add(imageUrl)}}}return list};',
  ruleComicCover:
  'class.comic-info@class.comic-item@class.thumbnail@tag.img@data-src',
  ruleComicInfoUrl: 'https://m.zymk.cn/%s',
  ruleComicInstro: 'id.comicDetailTab@class.comic-detail@class.content@text',
  ruleComicStatus: false,
  ruleComicTitle: 'class.comic-info@tag.h1@text',
  ruleComicUpdate: 'id.updateTime@text',
  ruleContentUrl:
  'http://api.zymk.cn/app_api/v5/getcomicinfo/?comic_id=param1',
  ruleFindAuthor: '$.comic_feature',
  ruleFindCid: '$.comic_id',
  ruleFindCoverUrl:
  '$.comic_id@js:function format_image(bookId){var sb=bookId;var i=0;var count=bookId.split("");while(i<9-count.length){sb="0"+sb;i++}var chars=sb.split("");var url="";for(var i=0;i<chars.length;i++){url+=chars[i];if(i==2||i==5){url+="/"}}return"http://image.zymkcdn.com/file/cover/"+url+".jpg-300x400.webp"}format_image(result);',
  ruleFindList: '$..comic_list.*',
  ruleFindTitle: '$.comic_name',
  ruleFindUrl:
  '',
  ruleSearchAuthor: '$.comic_author',
  ruleSearchCid: '$.id',
  ruleSearchCoverUrl: 'comic_cover',
  ruleSearchList: '@js:function getData(){eval(result);return g_search_data;}getData();',
  ruleSearchTitle: 'comic_name',
  ruleSearchUrl:
  '!http://s.acg.dmzj.com/comicsum/search.php?s=searchKey',
  sort: '2',
  type: 2 
};



module.exports = source2;