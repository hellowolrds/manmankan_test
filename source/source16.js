var source16 = { 
  comicSourceName: '蒂亚漫画',
  comicSourceUrl: 'https://www.diya1.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'https://www.diya1.com/manhua/%s/',
  ruleComicTitle: '@css:.book-detail .book-title h1@text',
  ruleComicAuthor: '@css:.book-detail .detail-list li:eq(1) span:last-child a@text',
  ruleComicCover:
  '@css:.pic@src',
  ruleComicInstro: '@css:#intro-all@text',
  ruleComicStatus: false,
  ruleComicLianZai: '',
  ruleComicUpdate: '@css:.book-detail .detail-list li:eq(2) span:last-child a@text',
  ruleChapterList: '@css:#chapter-list-1 li',
  ruleChapterName: 'text',
  ruleChapterUrl: 'tag.a@href',

  // 图片详情
  ruleContentUrl:
  'http://www.manhuatt.com/param2?Header{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36"}',
 // /<script>var sFiles.+<\\/script>/ 要打\\两个反斜杠
  ruleComicContent:
  `importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.utils.StringUtils);function parseImages(){var list=new ArrayList();var base_url="https://respc.diya1.com";var jpg_list=StringUtils.match("var chapterImages = (.+)];",content,1);jpg_list=jpg_list.replace("[","");var arr=jpg_list.split(",");for(var i=0;i<arr.length;i++){var url=arr[i];url=url.replace("\\\\","").replace('\\"',"");var s=base_url+url;list.add(new ImageUrl(i+1,s,false));i++}return list};`,

  // 推荐

  ruleFindAuthor: '',
  ruleFindCid: '@css:.ell a@href@js:java.splitHref(result, -1)',
  ruleFindCoverUrl:
  '@css:img@src',
  ruleFindList: '@css:#contList > li',
  ruleFindTitle: '@css:.ell a@text',
  ruleFindUpdate: '@css:.tt@text',
  ruleFindUrl:
  `全部::https://www.diya1.com/list_searchPage/&&古风::https://www.diya1.com/list/gufeng/searchPage/&&穿越::https://www.diya1.com/list/chuanyue/searchPage/&&恋爱::https://www.diya1.com/list/lianai/searchPage/&&冒险::https://www.diya1.com/list/maoxian/searchPage/&&热血::https://www.diya1.com/list/rexue/searchPage/&&架空::https://www.diya1.com/list/jiakong/searchPage/&&科幻::https://www.diya1.com/list/kehuan/searchPage/&&搞笑::https://www.diya1.com/list/gaoxiao/searchPage/&&都市::https://www.diya1.com/list/dushi/searchPage/&&玄幻::https://www.diya1.com/list/xuanhuan/searchPage/&&生活::https://www.diya1.com/list/shenghuo/searchPage/&&霸总::https://www.diya1.com/list/bazong/searchPage/&&校园::https://www.diya1.com/list/xiaoyuan/searchPage/&&悬疑::https://www.diya1.com/list/xuanyi/searchPage/&&蔷薇::https://www.diya1.com/list/qiangwei/searchPage/&&美食::https://www.diya1.com/list/meishi/searchPage/&&爆笑::https://www.diya1.com/list/baoxiao/searchPage/&&爱情::https://www.diya1.com/list/aiqing/searchPage/&&漫画岛::https://www.diya1.com/list/manhuadao/searchPage/&&彩虹::https://www.diya1.com/list/caihong/searchPage/&&少女爱情::https://www.diya1.com/list/shaonvaiqing/searchPage/&&竞技::https://www.diya1.com/list/jingji/searchPage/&&萌系::https://www.diya1.com/list/mengxi/searchPage/&&虐心::https://www.diya1.com/list/nuexin/searchPage/&&奇幻::https://www.diya1.com/list/qihuan/searchPage/&&武侠::https://www.diya1.com/list/wuxia/searchPage/&&纯爱::https://www.diya1.com/list/chunai/searchPage/&&职场::https://www.diya1.com/list/zhichang/searchPage/&&婚姻::https://www.diya1.com/list/hunyin/searchPage/&&魔幻::https://www.diya1.com/list/mohuan/searchPage/&&故事::https://www.diya1.com/list/gushi/searchPage/&&竞技体育::https://www.diya1.com/list/jingjitiyu/searchPage/&&其他::https://www.diya1.com/list/qita/searchPage/&&历史::https://www.diya1.com/list/lishi/searchPage/&&格斗::https://www.diya1.com/list/gedou/searchPage/&&魔法::https://www.diya1.com/list/mofa/searchPage/&&轻小说::https://www.diya1.com/list/qingxiaoshuo/searchPage/&&欢乐向::https://www.diya1.com/list/huanlexiang/searchPage/&&百合::https://www.diya1.com/list/baihe/searchPage/&&治愈::https://www.diya1.com/list/zhiyu/searchPage/&&颜艺::https://www.diya1.com/list/yanyi/searchPage/&&恐怖::https://www.diya1.com/list/kongbu/searchPage/&&仙侠::https://www.diya1.com/list/xianxia/searchPage/&&唯美::https://www.diya1.com/list/weimei/searchPage/&&青春::https://www.diya1.com/list/qingchun/searchPage/&&轻松::https://www.diya1.com/list/qingsong/searchPage/&&浪漫::https://www.diya1.com/list/langman/searchPage/&&豪门::https://www.diya1.com/list/haomen/searchPage/&&战争::https://www.diya1.com/list/zhanzheng/searchPage/&&感动::https://www.diya1.com/list/gandong/searchPage/&&日常::https://www.diya1.com/list/richang/searchPage/&&动作::https://www.diya1.com/list/dongzuo/searchPage/&&机甲::https://www.diya1.com/list/jijia/searchPage/&&战斗::https://www.diya1.com/list/zhandou/searchPage/&&异能::https://www.diya1.com/list/yineng/searchPage/&&末世::https://www.diya1.com/list/moshi/searchPage/&&未来::https://www.diya1.com/list/weilai/searchPage/&&游戏::https://www.diya1.com/list/youxi/searchPage/&&机战::https://www.diya1.com/list/jizhan/searchPage/&&段子::https://www.diya1.com/list/duanzi/searchPage/&&少年::https://www.diya1.com/list/shaonian/searchPage/&&宠物::https://www.diya1.com/list/chongwu/searchPage/&&异世界::https://www.diya1.com/list/yishijie/searchPage/&&脑洞::https://www.diya1.com/list/naodong/searchPage/&&后宫::https://www.diya1.com/list/hougong/searchPage/&&科幻魔幻::https://www.diya1.com/list/kehuanmohuan/searchPage/&&恐怖灵异::https://www.diya1.com/list/kongbulingyi/searchPage/&&明星::https://www.diya1.com/list/mingxing/searchPage/&&剧情::https://www.diya1.com/list/juqing/searchPage/&&推理::https://www.diya1.com/list/tuili/searchPage/&&伪娘::https://www.diya1.com/list/weiniang/searchPage/&&搞笑喜剧::https://www.diya1.com/list/gaoxiaoxiju/searchPage/&&烧脑::https://www.diya1.com/list/shaonao/searchPage/&&史诗::https://www.diya1.com/list/shishi/searchPage/&&同人::https://www.diya1.com/list/tongren/searchPage/&&逆袭::https://www.diya1.com/list/nixi/searchPage/&&宫廷::https://www.diya1.com/list/gongting/searchPage/&&励志::https://www.diya1.com/list/lizhi/searchPage/&&装逼::https://www.diya1.com/list/zhuangbi/searchPage/&&修真::https://www.diya1.com/list/xiuzhen/searchPage/&&召唤兽::https://www.diya1.com/list/zhaohuanshou/searchPage/&&宫斗::https://www.diya1.com/list/gongdou/searchPage/&&娱乐圈::https://www.diya1.com/list/yulequan/searchPage/&&社会::https://www.diya1.com/list/shehui/searchPage/&&新作::https://www.diya1.com/list/xinzuo/searchPage/&&漫改::https://www.diya1.com/list/mangai/searchPage/&&日更::https://www.diya1.com/list/rigeng/searchPage/&&神魔::https://www.diya1.com/list/shenmo/searchPage/&&精品::https://www.diya1.com/list/jingpin/searchPage/&&御姐::https://www.diya1.com/list/yujie/searchPage/&&僵尸::https://www.diya1.com/list/jiangshi/searchPage/&&恶搞::https://www.diya1.com/list/egao/searchPage/&&其它::https://www.diya1.com/list/qita2/searchPage/`,

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: '@css:.ell a@href@js:java.splitHref(result, -1)',
  ruleSearchCoverUrl: '@css:img@src',
  ruleSearchList: '@css:#contList .item-lg',
  ruleSearchTitle: '@css:.ell a@text',
  ruleSearchUpdate: '@css:.tt@text',
  ruleSearchUrl:
  'http://www.manhuatt.com/statics/search.aspx?key=searchKey&page=searchPage',


  sort: '16',
  type: 16
};

module.exports = source16;