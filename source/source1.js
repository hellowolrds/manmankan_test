
var source1 = { 
  comicSourceName: '知音漫客',
  comicSourceUrl: 'https://m.zymk.cn',
  enable: true,
  id: 1,
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
  '热血::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=5&page=searchPage&&搞笑::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=6&page=searchPage&&玄幻::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=7&page=searchPage&&生活::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=8&page=searchPage&&恋爱::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=9&page=searchPage&&动作::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=10&page=searchPage&&科幻::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=11&page=searchPage&&战争::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=12&page=searchPage&&悬疑::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=13&page=searchPage&&恐怖::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=14&page=searchPage&&校园::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=15&page=searchPage&&历史::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=16&page=searchPage&&穿越::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=17&page=searchPage&&后宫::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=18&page=searchPage&&体育::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=19&page=searchPage&&都市::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=20&page=searchPage&&漫改::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=22&page=searchPage&&修真::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=53&page=searchPage&&霸总::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=62&page=searchPage&&古风::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=63&page=searchPage&&游戏::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=64&page=searchPage&&真人::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=65&page=searchPage&&武侠::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=66&page=searchPage&&连载::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=23&page=searchPage&&完结::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=24&page=searchPage&&短篇::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=57&page=searchPage&&少男::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=25&page=searchPage&&少女::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=26&page=searchPage&&青年::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=27&page=searchPage&&知音漫客::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=28&page=searchPage&&漫客栈::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=51&page=searchPage&&神漫::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=29&page=searchPage&&飒漫画::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=30&page=searchPage&&飒漫乐画::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=52&page=searchPage&&其他::https://api.zymk.cn/app_api/v5/getsortlist_new/?type=58&page=searchPage',
  ruleSearchAuthor: '$.comic_feature',
  ruleSearchCid: '$.comic_id',
  ruleSearchCoverUrl:
  '$.comic_id@js:function format_image(bookId){var sb=bookId;var i=0;var count=bookId.split("");while(i<9-count.length){sb="0"+sb;i++}var chars=sb.split("");var url="";for(var i=0;i<chars.length;i++){url+=chars[i];if(i==2||i==5){url+="/"}}return"http://image.zymkcdn.com/file/cover/"+url+".jpg-300x400.webp"}format_image(result);',
  ruleSearchList: '$..comic_list.*',
  ruleSearchTitle: '$.comic_name',
  ruleSearchUrl:
  'http://api.zymk.cn/app_api/v5/getsortlist_new/?key=searchKey&page=searchPage',
  sort: '1',
  type: 1 
};



module.exports = source1;