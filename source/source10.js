var source10 = { 
  comicSourceName: '狂人漫画',
  comicSourceUrl: 'http://www.krmanhua.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","https://www.mh160.xyz/")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'https://www.krmanhua.com/manhua/%s/',
  ruleComicTitle: '@css:.book-detail .book-title h1@text',
  ruleComicAuthor: '@css:.book-detail .detail-list li:eq(1) span:last-child a@text',
  ruleComicCover:
  '@css:.pic@src',
  ruleComicInstro: '@css:#intro-all@text',
  ruleComicStatus: false,
  ruleComicUpdate: '@css:.book-detail .detail-list li:eq(2) span:last-child a@text',
  ruleChapterList: '-@css:#chapter-list-1 li',
  ruleChapterName: 'text',
  ruleChapterUrl: 'tag.a@href',

  // 图片详情
  ruleContentUrl:
  'http://www.krmanhua.comparam2?Header{"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36"}',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  `importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.utils.StringUtils);importClass(Packages.com.reader.comic.utils.DecryptionUtils);function parseImages(){var list=new ArrayList();var base_url="http://pic1.krmanhua.com:8001/";var jpg_root=StringUtils.match('chapterPath = (.+)\\";var pageTitle ',content,1);var jpg_list=StringUtils.match("var chapterImages = (.+)];",content,1);jpg_root=jpg_root.replace('\\"',"");jpg_list=jpg_list.replace("[","");var arr=jpg_list.split(",");for(var i=0;i<arr.length;i++){var url=arr[i];url=url.replace('\\"',"").replace('\\"',"");var s=base_url+jpg_root+url;list.add(new ImageUrl(i+1,s,false));i++}return list};`,

  // 推荐

  ruleFindAuthor: '',
  ruleFindCid: '@css:.ell a@href@js:java.splitHref(result, -1)',
  ruleFindCoverUrl:
  'tag.img@src',
  ruleFindList: '@css:#contList .item-lg',
  ruleFindTitle: '@css:.ell a@text',
  ruleFindUpdate: 'class.tt@text',
  ruleFindUrl:
  '全部::http://www.krmanhua.com/list_searchPage/&&儿童漫画::http://www.krmanhua.com/list/ertong/searchPage/&&少年漫画::http://www.krmanhua.com/list/shaonian/searchPage/&&少女漫画::http://www.krmanhua.com/list/shaonv/searchPage/&&青年漫画::http://www.krmanhua.com/list/qingnian/searchPage/',

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: '@css:.ell a@href@js:java.splitHref(result, -1)',
  ruleSearchCoverUrl: 'tag.img@src',
  ruleSearchList: '@css:#contList .item-lg',
  ruleSearchTitle: '@css:.ell a@text',
  ruleSearchUpdate: 'class.tt@text',
  ruleSearchUrl:
  'http://www.krmanhua.com/search/?keywords=searchKey&page=searchPage',


  sort: '10',
  type: 10
};

module.exports = source10;