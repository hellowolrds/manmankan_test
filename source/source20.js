
var source20 = { 
  comicSourceName: '布卡漫画',
  comicSourceUrl: 'https://m.feimh8.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("user-agent","Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'https://m.feimh8.com/%s/',
  ruleComicTitle: 'class.header-title@text',
  ruleComicAuthor: '',
  ruleComicCover:
  '@css:.comic-cover img@data-src@js:"http:"+result',
  ruleComicInstro: 'id.js_desc_content@text',
  ruleComicStatus: false,
  ruleComicUpdate: '@css:.comic-update-time@text@js:result.replace("最新更新","")',
  ruleChapterList: '-@css:#js_chapter_list > li',
  ruleChapterName: 'class.name@text',
  ruleChapterUrl: 'tag.a@href',

  // 图片详情
  ruleContentUrl:
  'https://m.feimh8.comparam2',
  ruleComicContent:
  'importPackage(Packages.org.json);importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.utils.StringUtils);function parseImages(){var list=new ArrayList();var comic=StringUtils.match("current_chapter:(.*),prev",content,1);var jsonObject=new JSONObject(comic);var start_num=jsonObject.getInt("start_num");var end_num=jsonObject.getInt("end_num");var format=jsonObject.getString("rule");var base_url=jsonObject.getString("chapter_domain");for(var i=1;i<=end_num;i++){var url="https://"+base_url+"/"+format.replace("$$",i+"")+"-kmh.low.webp";list.add(new ImageUrl(i,url,false))}return list};',

  // 推荐

  ruleFindAuthor: '',
  ruleFindCid: '$.comic_newid',
  ruleFindCoverUrl:
  '$.comic_id@js:"http://cover.feimh8.com/mh/"+result+".jpg-300x400.jpg"',
  ruleFindList: '$.data.data.*',
  ruleFindTitle: '$.comic_name',
  ruleFindUpdate: '$.last_chapter_name',
  ruleFindUrl:
  '热血::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=rexue&type=4&size=48&&机战::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=jizhan&type=4&size=48&&运动::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=yundong&type=4&size=48&&推理::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=tuili&type=4&size=48&&冒险::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=maoxian&type=4&size=48&&耽美::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=liaomei&type=4&size=48&&百合::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=baihe&type=4&size=48&&搞笑::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=gaoxiao&type=4&size=48&&战争::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=zhanzhen&type=4&size=48&&神魔::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=shenmo&type=4&size=48&&忍者::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=renzhe&type=4&size=48&&竞技::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=jingji&type=4&size=48&&悬疑::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=xuanyi&type=4&size=48&&社会::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=shehui&type=4&size=48&&恋爱::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=lianai&type=4&size=48&&宠物::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=chongwu&type=4&size=48&&吸血::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=xixue&type=4&size=48&&萝莉::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=luoli&type=4&size=48&&后宫::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=hougong&type=4&size=48&&御姐::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=yujie&type=4&size=48&&霸总::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=bazong&type=4&size=48&&玄幻::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=xuanhuan&type=4&size=48&&古风::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=gufeng&type=4&size=48&&历史::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=lishi&type=4&size=48&&漫改::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=mangai&type=4&size=48&&游戏::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=youxi&type=4&size=48&&穿越::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=chuanyue&type=4&size=48&&恐怖::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=kongbu&type=4&size=48&&真人::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=zhenren&type=4&size=48&&科幻::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=kehuan&type=4&size=48&&都市::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=dushi&type=4&size=48&&武侠::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=wuxia&type=4&size=48&&修真::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=xiuzhen&type=4&size=48&&生活::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=shenghuo&type=4&size=48&&动作::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=dongzuo&type=4&size=48&&防疫::https://m.feimh8.com/api/getsortlist/?page=searchPage&comic_sort=fangyi&type=4&size=48',

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: '$.comic_newid',
  ruleSearchCoverUrl: '$.comic_id@js:"http://cover.feimh8.com/mh/"+result+".jpg-300x400.jpg"',
  ruleSearchList: '$.data.data.*',
  ruleSearchTitle: '$.comic_name',
  ruleSearchUpdate: '$.last_chapter_name',
  ruleSearchUrl:
  '@js:"http://m.buka.cn/search/ajax_search@key=\""+searchKey+"\"&start="+15*(searchPage-1)+"&count=15"',


  sort: '20',
  type: 20
};



module.exports = source20;