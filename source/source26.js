
var source26 = { 
  comicSourceName: '看漫画啦',
  comicSourceUrl: 'https://kanmanhuala.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://99770.hhxxee.com")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'https://kanmanhuala.com/book/%s@Header:{"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicTitle: '@css:.detail-main .detail-main-info-title@text',
  ruleComicAuthor: '@css:.detail-main-info:nth-child(2) a@text',
  ruleComicCover:
  '@css:.detail-main-cover img@data-original',
  ruleComicInstro: '@css:.detail-desc@text',
  ruleComicStatus: false,
  ruleComicLianZai: "",
  ruleComicUpdate: '',
  ruleChapterList: '-@css:#detail-list-select li',
  ruleChapterName: '@css:a@text',
  ruleChapterUrl: '@css:a@href',

  // 图片详情
  ruleContentUrl:
  'https://kanmanhuala.com/param2?Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicContent:
  `
  importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.soup.Node);importClass(Packages.com.reader.comic.utils.StringUtils);function parseImages(){var list=new ArrayList();var body=new Node(content);var chapterList=body.list("#cp_img img");for(var i=0;i<chapterList.size();i++){var node=chapterList.get(i);list.add(new ImageUrl(i+1,node.attr("img","data-original"),false))}return list};
  `,

  // 推荐

  ruleFindAuthor: '',
  ruleFindCid: '@css:.manga-list-2-title > a@href@js:java.splitHref(result, -1)',
  ruleFindCoverUrl:
  '@css:.manga-list-2-cover-img@data-original',
  ruleFindList: '@css:.manga-list-2 > li',
  ruleFindTitle: '@css:.manga-list-2-title@text',
  ruleFindUpdate: '@css:.manga-list-2-tip@text',
  ruleFindUrl:
  `日常 ::https://kanmanhuala.com/booklist?tag=日常&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 腹黑 ::https://kanmanhuala.com/booklist?tag=腹黑&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 都市 ::https://kanmanhuala.com/booklist?tag=都市&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 穿越 ::https://kanmanhuala.com/booklist?tag=穿越&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 烧脑 ::https://kanmanhuala.com/booklist?tag=烧脑&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 治愈 ::https://kanmanhuala.com/booklist?tag=治愈&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 萌系 ::https://kanmanhuala.com/booklist?tag=萌系&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 古风 ::https://kanmanhuala.com/booklist?tag=古风&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 玄幻 ::https://kanmanhuala.com/booklist?tag=玄幻&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 猎奇 ::https://kanmanhuala.com/booklist?tag=猎奇&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 奇幻 ::https://kanmanhuala.com/booklist?tag=奇幻&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 搞笑 ::https://kanmanhuala.com/booklist?tag=搞笑&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 推理 ::https://kanmanhuala.com/booklist?tag=推理&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 悬疑 ::https://kanmanhuala.com/booklist?tag=悬疑&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 武侠 ::https://kanmanhuala.com/booklist?tag=武侠&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 仙侠 ::https://kanmanhuala.com/booklist?tag=仙侠&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 后宫 ::https://kanmanhuala.com/booklist?tag=后宫&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 冒险 ::https://kanmanhuala.com/booklist?tag=冒险&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 彩虹 ::https://kanmanhuala.com/booklist?tag=彩虹&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 百合 ::https://kanmanhuala.com/booklist?tag=百合&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 校园 ::https://kanmanhuala.com/booklist?tag=校园&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 恋爱 ::https://kanmanhuala.com/booklist?tag=恋爱&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}&& 热血 ::https://kanmanhuala.com/booklist?tag=热血&page=searchPage&Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}`,

  // 搜索

  ruleSearchAuthor: '@css:.book-list-info-bottom-item@text@js:result.replace("作者：", "")',
  ruleSearchCid: '@css:.book-list-info > a@href@js:java.splitHref(result, -1)',
  ruleSearchCoverUrl: '@css:.book-list-cover-img@data-original',
  ruleSearchList: '@css:.book-list > li',
  ruleSearchTitle: '@css:.book-list-info-title@text',
  ruleSearchUpdate: '',
  ruleSearchUrl:
  '!https://kanmanhuala.com/search?keyword=searchKey@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',


  sort: '26',
  type: 26
};



module.exports = source26;