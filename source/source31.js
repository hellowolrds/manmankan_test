
var source31 = { 
  comicSourceName: 'two comic',
  comicSourceUrl: 'https://x.twocomic.com',
  enable: true,
  imgHeaders:
  'function getHeader(){return Headers.of("Referer","http://m.517manhua.com/")}function getHeader2(url){return getHeader()}function getHeader3(){return getHeader()};',
 
  // 漫画详情
  ruleComicInfoUrl: 'https://x.twocomic.com/comic/%s/@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',
  ruleComicTitle: '@css:h1@text',
  ruleComicAuthor: '@css:#swipercomic .item-info .center ul li:first-child@text@js:result.replace("作者：","")',
  ruleComicCover:
  '@css:#swipercomic .item-info .left .swiper-lazy@src@js:"https://x.twocomic.com"+result',
  ruleComicInstro: '@css:.bottom #info@text',
  ruleComicStatus: false,
  ruleComicLianZai: "",
  ruleComicUpdate: '@css:#swipercomic .item-info .center ul li:last-child@text@js:result.replace("更新：","")',
  ruleChapterList: '-@css:#comiclist0 ul a',
  ruleChapterName: 'text',
  ruleChapterUrl: 'href',

  // 图片详情
  ruleContentUrl:
  '@js:var str="param2";str=str.replace("s/", "_").replace("/?", ".html/?");str="https://www.twocomic.com/view"+str;@Header:{"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36","Host":"twocomic.com","Cookie":"RI=0","Cache-Control":"no-cache","Connection":"keep-alive"}',
  ruleComicContent:
  `
  importClass(Packages.java.util.ArrayList);importPackage(Packages.com.reader.comic.model);importClass(Packages.com.reader.comic.soup.Node);importClass(Packages.com.reader.comic.utils.StringUtils);function parseImages(){var list=new ArrayList();var img_str=StringUtils.match("var ti(.+)eval",content,1);img_str="var ti"+img_str+"";eval(img_str);var ch=path.split("=")[1];var f=50;var p=1;var c=sp(cs,f,ch,1);var count=ss(c,7,3);for(var i=1;i<=count;i++){var url=si(c,i,ti,f);list.add(new ImageUrl(i,url,false))}return list}function sp(cs,f,ch,p){var cc=cs.length;var c="";for(var i=0;i<cc/f;i++){if(ss(cs,i*f,4)==ch){c=ss(cs,i*f,f,f);ci=i;break}}if(c==""){c=ss(cs,cc-f,f)}return c}function ss(a,b,c,d){var e=a.substring(b,b+c);return d==null?e.replace(/[a-z]*/gi,""):e}function si(c,p,ti,f){return"https://img"+ss(c,4,2)+".8comic.com/"+ss(c,6,1)+"/"+ti+"/"+ss(c,0,4)+"/"+nn(p)+"_"+ss(c,mm(p)+10,3,f)+".jpg"}function nn(n){return n<10?"00"+n:n<100?"0"+n:n}function mm(p){return(parseInt((p-1)/10)%10)+(((p-1)%10)*3)};
  `,

  // 推荐

  ruleFindAuthor: '',
  ruleFindCid: '@css:a@href@js:java.splitHref(result, -1)',
  ruleFindCoverUrl:
  '@css:.swiper-lazy@data-background@js:"https://x.twocomic.com" + result',
  ruleFindList: '@css:li',
  ruleFindTitle: '@css:h2@text',
  ruleFindUpdate: '@css:a b:last-child@text',
  ruleFindUrl:
  `武鬥類::https://x.twocomic.com/cats/cat24/searchPage.html&&刀劍類::https://x.twocomic.com/cats/cat4/searchPage.html&&熱血類::https://x.twocomic.com/cats/cat58/searchPage.html&&妖魔類::https://x.twocomic.com/cats/cat8/searchPage.html&&戰國類::https://x.twocomic.com/cats/cat65/searchPage.html&&冒險類::https://x.twocomic.com/cats/cat6/searchPage.html&&血腥類::https://x.twocomic.com/cats/cat62/searchPage.html&&其他競技::https://x.twocomic.com/cats/cat41/searchPage.html&&足球類::https://x.twocomic.com/cats/cat33/searchPage.html&&籃球類::https://x.twocomic.com/cats/cat34/searchPage.html&&棒球類::https://x.twocomic.com/cats/cat35/searchPage.html&&網球類::https://x.twocomic.com/cats/cat36/searchPage.html&&搏擊類::https://x.twocomic.com/cats/cat37/searchPage.html&&棋牌類::https://x.twocomic.com/cats/cat38/searchPage.html&&賽車類::https://x.twocomic.com/cats/cat39/searchPage.html&&亨飪類::https://x.twocomic.com/cats/cat16/searchPage.html&&體操類::https://x.twocomic.com/cats/cat313/searchPage.html&&排球類::https://x.twocomic.com/cats/cat315/searchPage.html&&其他競技::https://x.twocomic.com/cats/cat385/searchPage.html&&少女幻想類::https://x.twocomic.com/cats/cat15/searchPage.html&&校園戀愛類::https://x.twocomic.com/cats/cat14/searchPage.html&&少女職業類::https://x.twocomic.com/cats/cat42/searchPage.html&&成人戀愛類::https://x.twocomic.com/cats/cat43/searchPage.html&&少女其他類::https://x.twocomic.com/cats/cat44/searchPage.html&&魔法少女類::https://x.twocomic.com/cats/cat66/searchPage.html&&同性戀愛類::https://x.twocomic.com/cats/cat70/searchPage.html&&BoyLove類::https://x.twocomic.com/cats/cat69/searchPage.html&&生活親情類::https://x.twocomic.com/cats/cat307/searchPage.html&&性別轉換類::https://x.twocomic.com/cats/cat309/searchPage.html&&百合類::https://x.twocomic.com/cats/cat312/searchPage.html&&勵志::https://x.twocomic.com/cats/cat404/searchPage.html&&魔幻少女類::https://x.twocomic.com/cats/cat405/searchPage.html&&同窗類::https://x.twocomic.com/cats/cat46/searchPage.html&&校園類::https://x.twocomic.com/cats/cat59/searchPage.html&&超能類::https://x.twocomic.com/cats/cat57/searchPage.html&&魔法類::https://x.twocomic.com/cats/cat3/searchPage.html&&超時代類::https://x.twocomic.com/cats/cat63/searchPage.html&&歷險類::https://x.twocomic.com/cats/cat67/searchPage.html&&生活類::https://x.twocomic.com/cats/cat45/searchPage.html&&勁爆類::https://x.twocomic.com/cats/cat61/searchPage.html&&偽娘類::https://x.twocomic.com/cats/cat308/searchPage.html&&懸疑類::https://x.twocomic.com/cats/cat392/searchPage.html&&後宮類::https://x.twocomic.com/cats/cat394/searchPage.html&&奇幻類::https://x.twocomic.com/cats/cat395/searchPage.html&&運動類::https://x.twocomic.com/cats/cat396/searchPage.html&&美食類::https://x.twocomic.com/cats/cat397/searchPage.html&&治愈類::https://x.twocomic.com/cats/cat400/searchPage.html&&節操類::https://x.twocomic.com/cats/cat401/searchPage.html&&音樂舞蹈::https://x.twocomic.com/cats/cat402/searchPage.html&&愛情類::https://x.twocomic.com/cats/cat403/searchPage.html&&BoyLove類::https://x.twocomic.com/cats/cat406/searchPage.html&&童真類::https://x.twocomic.com/cats/cat47/searchPage.html&&爆笑類::https://x.twocomic.com/cats/cat48/searchPage.html&&惡搞類::https://x.twocomic.com/cats/cat49/searchPage.html&&動物類::https://x.twocomic.com/cats/cat64/searchPage.html&&偵探類::https://x.twocomic.com/cats/cat5/searchPage.html&&警察類::https://x.twocomic.com/cats/cat51/searchPage.html&&醫生類::https://x.twocomic.com/cats/cat52/searchPage.html&&其他職業::https://x.twocomic.com/cats/cat53/searchPage.html&&槍擊類::https://x.twocomic.com/cats/cat27/searchPage.html&&機械類::https://x.twocomic.com/cats/cat7/searchPage.html&&戰爭類::https://x.twocomic.com/cats/cat17/searchPage.html&&改造人類::https://x.twocomic.com/cats/cat25/searchPage.html&&科幻類::https://x.twocomic.com/cats/cat393/searchPage.html&&港產類::https://x.twocomic.com/cats/cat9/searchPage.html&&恐怖類::https://x.twocomic.com/cats/cat19/searchPage.html&&短篇類::https://x.twocomic.com/cats/cat18/searchPage.html&&未分類::https://x.twocomic.com/cats/cat54/searchPage.html`,

  // 搜索

  ruleSearchAuthor: '',
  ruleSearchCid: '@css:a@href@js:java.splitHref(result, -1)',
  ruleSearchCoverUrl: '@css:.swiper-lazy@data-background@js:"https://x.twocomic.com" + result',
  ruleSearchList: '@css:li',
  ruleSearchTitle: '@css:h2@text',
  ruleSearchUpdate: '@css:a b:last-child@text',
  ruleSearchUrl:
  'https://x.twocomic.com/search/result/?k=searchKey&page=searchPage@Header:{"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}',


  sort: '31',
  type: 31
};



module.exports = source31;