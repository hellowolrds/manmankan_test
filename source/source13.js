var source13 = { 
  comicSourceName: '土豪漫画',
  comicSourceUrl: 'https://tuhao456.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","https://m.bnmanhua.com")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'https://tuhao456.com/manhua/%s/',
  ruleComicTitle: '@css:div.cy_title > h1@text',
  ruleComicAuthor: '@css:div.cy_xinxi > span:eq(0)@text',
  ruleComicCover:
  '@css:img.pic@src',
  ruleComicInstro: '@css:p#comic-description@text',
  ruleComicStatus: false,
  ruleComicLianZai: '@css:div.cy_xinxi > span:eq(1) > a@text',
  ruleComicUpdate: '',
  ruleChapterList: '@css:div.cy_plist > ul > li',
  ruleChapterName: 'text',
  ruleChapterUrl: 'tag.a@href@js:java.splitHref(result,1)',

  // 图片详情
  ruleContentUrl:
  'https://tuhao456.com/chapter/%s.html',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  `importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.utils.StringUtils);function parseImages(){var list=new ArrayList();var str=StringUtils.match('\\"page_url\\":\\"(.*?)\\",',content,1);var arr=str.split("\\\\|72cms\\\\|");for(var i=0;i<arr.length;i++){var url=arr[i];list.add(new ImageUrl(i+1,url,false))}return list};`,

  // 推荐

  ruleFindAuthor: '',
  ruleFindCid: '@css:a.vbox_t@href@js:java.splitHref(result, 1);',
  ruleFindCoverUrl:
  '@css:a.pic > img@src',
  ruleFindList: '@css:.cy_list_mh > ul',
  ruleFindTitle: '@css:li.title > a@text',
  ruleFindUpdate: '@css:li.updata > a > span@text',
  ruleFindUrl:
  `全部::https://www.tuhao456.com/sort/searchPage.html&&热血::https://www.tuhao456.com/sort/t1/searchPage.html&&机战::https://www.tuhao456.com/sort/t2/searchPage.html&&运动::https://www.tuhao456.com/sort/t3/searchPage.html&&推理::https://www.tuhao456.com/sort/t4/searchPage.html&&冒险::https://www.tuhao456.com/sort/t5/searchPage.html&&耽美::https://www.tuhao456.com/sort/t6/searchPage.html&&百合::https://www.tuhao456.com/sort/t7/searchPage.html&&搞笑::https://www.tuhao456.com/sort/t8/searchPage.html&&战争::https://www.tuhao456.com/sort/t9/searchPage.html&&神魔::https://www.tuhao456.com/sort/t10/searchPage.html&&忍者::https://www.tuhao456.com/sort/t11/searchPage.html&&竞技::https://www.tuhao456.com/sort/t12/searchPage.html&&悬疑::https://www.tuhao456.com/sort/t13/searchPage.html&&社会::https://www.tuhao456.com/sort/t14/searchPage.html&&恋爱::https://www.tuhao456.com/sort/t15/searchPage.html&&宠物::https://www.tuhao456.com/sort/t16/searchPage.html&&吸血::https://www.tuhao456.com/sort/t17/searchPage.html&&萝莉::https://www.tuhao456.com/sort/t18/searchPage.html&&后宫::https://www.tuhao456.com/sort/t19/searchPage.html&&御姐::https://www.tuhao456.com/sort/t20/searchPage.html&&霸总::https://www.tuhao456.com/sort/t21/searchPage.html&&玄幻::https://www.tuhao456.com/sort/t22/searchPage.html&&古风::https://www.tuhao456.com/sort/t23/searchPage.html&&历史::https://www.tuhao456.com/sort/t24/searchPage.html&&漫改::https://www.tuhao456.com/sort/t25/searchPage.html&&游戏::https://www.tuhao456.com/sort/t26/searchPage.html&&穿越::https://www.tuhao456.com/sort/t27/searchPage.html&&恐怖::https://www.tuhao456.com/sort/t28/searchPage.html&&真人::https://www.tuhao456.com/sort/t29/searchPage.html&&科幻::https://www.tuhao456.com/sort/t30/searchPage.html&&都市::https://www.tuhao456.com/sort/t31/searchPage.html&&武侠::https://www.tuhao456.com/sort/t32/searchPage.html&&修真::https://www.tuhao456.com/sort/t33/searchPage.html&&生活::https://www.tuhao456.com/sort/t34/searchPage.html&&动作::https://www.tuhao456.com/sort/t35/searchPage.html`,

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: '@css:li.title > a@href@js:java.splitHref(result, 1);',
  ruleSearchCoverUrl: '@css:a.pic > img@src',
  ruleSearchList: '@css:div.cy_list_mh > ul',
  ruleSearchTitle: '@css:li.title > a@text',
  ruleSearchUpdate: '@css:li.updata > a > span@text',
  ruleSearchUrl:
  '!https://tuhao456.com/sort/?key=searchKey',


  sort: '13',
  type: 13
};

module.exports = source13;