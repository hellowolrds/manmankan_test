
var source30 = { 
  comicSourceName: '看看漫画',
  comicSourceUrl: 'http://www.kkmh.cc',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://m.517manhua.com/")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'http://www.kkmh.cc/art/content/id/%s.html@Header:{"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36"}',
  ruleComicTitle: '@css:.description h1@text',
  ruleComicAuthor: '',
  ruleComicCover:
  '@css:.mhjj .img-box img@data-src',
  ruleComicInstro: '@css:.introduce .desc-box@text',
  ruleComicStatus: false,
  ruleComicLianZai: "",
  ruleComicUpdate: '@css:.last-update@text',
  ruleChapterList: '-@css:#j_chapter_list li',
  ruleChapterName: '@css:.name@text',
  ruleChapterUrl: '@css:a@href',

  // 图片详情
  ruleContentUrl:
  'http://www.kkmh.ccparam2@Header:{"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36"}',
  ruleComicContent:
  `
  importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.soup.Node);function parseImages(){var list=new ArrayList();var node=new Node(content);var img_list=node.list("#reader-scroll img");for(var i=0;i<img_list.size();i++){var item=img_list.get(i);list.add(new ImageUrl(i+1,item.attr("data-original"),false))}return list};
  `,

  // 推荐

  ruleFindAuthor: '',
  ruleFindCid: '@css:.acgn-thumbnail@href@js:java.splitHref(result, -2);',
  ruleFindCoverUrl:
  '@css:.cover@data-src',
  ruleFindList: '@css:#J_comicList li',
  ruleFindTitle: '@css:.acgn-title@text',
  ruleFindUpdate: '@css:.acgn-desc@text',
  ruleFindUrl:
  `恋爱::http://www.kkmh.cc/art/show/id/5/page/searchPage/tag/恋爱.html&&校园::http://www.kkmh.cc/art/show/id/5/page/searchPage/tag/校园.html&&动作::http://www.kkmh.cc/art/show/id/5/page/searchPage/tag/动作.html&&总裁::http://www.kkmh.cc/art/show/id/5/page/searchPage/tag/总裁.html&&恐怖::http://www.kkmh.cc/art/show/id/5/page/searchPage/tag/恐怖.html&&古风::http://www.kkmh.cc/art/show/id/5/page/searchPage/tag/古风.html&&搞笑::http://www.kkmh.cc/art/show/id/5/page/searchPage/tag/搞笑.html&&其他::http://www.kkmh.cc/art/show/id/5/page/searchPage/tag/其他.html&&热血::http://www.kkmh.cc/art/show/id/5/page/searchPage/tag/热血.html&&异能::http://www.kkmh.cc/art/show/id/5/page/searchPage/tag/异能.html&&御姐::http://www.kkmh.cc/art/show/id/5/page/searchPage/tag/御姐.html&&玄幻::http://www.kkmh.cc/art/show/id/5/page/searchPage/tag/玄幻.html&&穿越::http://www.kkmh.cc/art/show/id/5/page/searchPage/tag/穿越.html`,

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: '@css:.acgn-thumbnail@href@js:java.splitHref(result, -2)',
  ruleSearchCoverUrl: '@css:.cover@data-src',
  ruleSearchList: '@css:#J_comicList li',
  ruleSearchTitle: '@css:.acgn-title@text',
  ruleSearchUpdate: '@css:.acgn-desc@text',
  ruleSearchUrl:
  '!http://www.kkmh.cc/art/search.html?wd=searchKey@Header:{"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36"}',


  sort: '30',
  type: 30
};



module.exports = source30;