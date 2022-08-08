const express = require('express');
const vertoken = require('../tools/token');
const router = express.Router();

const mockList = [
    {
        "id": 1,
        "title": "习近平会见来京述职的林郑月娥",
        "abstracts": "习近平会见来京述职的林郑月娥",
        "author": "李鹏飞",
        "publishDate": "555021245043",
        "content": "<p><strong>央视网消息</strong>（新闻联播）：国家主席习近平15日下午在中南海瀛台会见了来京述职的香港特别行政区行政长官林郑月娥，听取了她对香港当前形势和特别行政区政府工作情况的汇报。</p><p>　　习近平说，今年7月1日，我到香港出席庆祝香港回归祖国20周年大会暨香港特别行政区第五届政府就职典礼，见证了林郑月娥行政长官和新一届特别行政区政府主要官员宣誓就职。我高兴地看到，行政长官就任以来，带领管治团队依法施政，积极作为，聚焦发展经济、改善民生，推出一系列政策举措，加强同各界人士沟通，促进社会稳定，实现了良好开局，得到香港社会各界广泛认同。中央对林郑月娥行政长官和新一届特别行政区政府的工作是充分肯定的。</p><p>　　习近平指出，中共十九大召开后，行政长官带领特别行政区政府管治团队及时学习领会大会精神，邀请和配合中央宣讲团到香港开展宣讲活动，这些做法都很好。中共十九大把“坚持‘一国两制’和推进祖国统一”确定为新时代坚持和发展中国特色社会主义基本方略的重要内容，意义重大。这不仅表明中央对港澳工作的重视，而且表明中央在香港、澳门实行“一国两制”方针是长期的、坚定不移的。</p><p>　　习近平强调，在香港成功推进“一国两制”事业，关键是要全面准确贯彻“一国两制”、“港人治港”、高度自治的方针，严格依照宪法和基本法办事。为此，要把维护中央对香港特别行政区全面管治权和保障特别行政区高度自治权有机结合起来。</p><p>　　习近平表示，我在中共十九大报告中提出，要支持香港融入国家发展大局，这为香港发展指明了方向，也是香港与内地优势互补、合作共赢的必然选择。希望行政长官带领香港特别行政区政府，广泛团结社会各界人士，抓住机遇，共谋发展，与祖国人民共襄中华民族伟大复兴的伟业。</p>"
    },
    {
        "id": 2,
        "title": "全面屏手机不足千元 谁糟蹋了全面屏技术？",
        "abstracts": "与价格战相比，全面屏这场厮杀更为猛烈。在私下交流时，一位知名手机品牌的高管感慨：没想到全面屏手机的竞争会如此残暴，现在你不跟进就没有销量，跟进也很难盈利。　　就在苹果全面屏手机iPhoneX刚发布",
        "author": "张琪格",
        "publishDate": "655021245043",
        "content": "<p>与价格战相比，全面屏这场厮杀更为猛烈。在私下交流时，一位知名手机品牌的高管感慨：没想到全面屏手机的竞争会如此残暴，现在你不跟进就没有销量，跟进也很难盈利。</p><p><img style=\"float: left;\" src=\"https://timg01.bdimg.com/timg?pacompress&amp;imgtype=1&amp;sec=1439619614&amp;autorotate=1&amp;di=08be19928ecf67c59fc3a855411d15c0&amp;quality=90&amp;size=b870_10000&amp;src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F35db55a2ceb1f743ee9fd98dfcfcc20a.jpeg\" data-mce-src=\"https://timg01.bdimg.com/timg?pacompress&amp;imgtype=1&amp;sec=1439619614&amp;autorotate=1&amp;di=08be19928ecf67c59fc3a855411d15c0&amp;quality=90&amp;size=b870_10000&amp;src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F35db55a2ceb1f743ee9fd98dfcfcc20a.jpeg\" data-mce-style=\"float: left;\"></p><p>&nbsp; &nbsp; &nbsp; &nbsp;就在苹果全面屏手机iPhone X刚发布后，国内一家名为 &nbsp; &nbsp;糖果 的手机品牌推出了全面屏手机SOAP R11，售价899 &nbsp; &nbsp;元，打响了全面屏手机价格战的第一枪。现在，全面屏手机 &nbsp;有的售价上万，有的售价几百，难怪有网友称全面屏已经被 &nbsp;玩坏了。</p><p>　<strong>　被过度营销的全面屏</strong></p><p>　　全面屏并不是什么新鲜事物，夏普早在三年前就推出了全 &nbsp;面屏手机。按照夏普官方的叙述，截至今年夏普已经推出了2 &nbsp;8款全面屏手机。尽管2017已经成为了全面屏普及年，但全面 &nbsp;屏依然没有技术标准。尽管2017已经成为了全面屏普及年， &nbsp;但全面屏依然没有技术标准。</p><p>一针见血的说，现在目前市场上绝大多数的全面屏手机，是被营销出来的，而不是技术革新的产物。按照百科的定义，全面屏就是手机的正面全部都是屏幕，手机的四个边框位置都是采用无边框设计，追求接近100%的屏占比。实际上，受限于目前的技术，目前全面屏手机只是超高屏占比的手机，没有能做到手机正面屏占比100%的手机。现在大家所说的全面屏手机是指屏占比可以达到90%以上，拥有超窄边框设计的手机。</p><p>　　从已经发布的一些产品也会发现，无论是三星Note8，还是苹果的iPhone X，以及vivo X20，抑或是售价不足千元的糖果SOAP R11，这些以全面屏自居的手机，无非是屏占比更高一些，显示比例由过去的16：9变成了18：9。与使用传统屏幕的手机相比，全面屏手机的视觉效果更好一些，在打游戏和观看视频的时候，能够看到更广的画面。</p><p><img src=\"https://timg01.bdimg.com/timg?pacompress&amp;imgtype=1&amp;sec=1439619614&amp;autorotate=1&amp;di=7b513b9bea21bc5f08fecbb4f3109e56&amp;quality=90&amp;size=b870_10000&amp;src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2Fdd0bff2dec422c0329dff547ce0acc0e.jpeg\" data-mce-src=\"https://timg01.bdimg.com/timg?pacompress&amp;imgtype=1&amp;sec=1439619614&amp;autorotate=1&amp;di=7b513b9bea21bc5f08fecbb4f3109e56&amp;quality=90&amp;size=b870_10000&amp;src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2Fdd0bff2dec422c0329dff547ce0acc0e.jpeg\" style=\"float: right;\" data-mce-style=\"float: right;\"></p><div data-mce-style=\"text-align: left;\" style=\"text-align: left;\">&nbsp; &nbsp; &nbsp; &nbsp;一针见血的说，现在目前市场上绝大多数的全面屏手机，是被营销出来的，而不是技术革新的产物。按照百科的定义，全面屏就是手机的正面全部都是屏幕，手机的四个边框是采边框设计，追求接近100%的屏占比。实际上，受限于目前的技术，目前全面屏手机只是超高屏占比的手机，没有能做到手机正面屏占比100%的手机。现在大家所说的全面屏手机指屏占比可以达到90%以上，拥有超窄边框设计的手机。</div><div data-mce-style=\"text-align: left;\" style=\"text-align: left;\">　　从已经发布的一些产品也会发现，无论是三星Note8，还是苹果的iPhone X，以及vivo X20，抑或是售价不足千元的糖果SOAP R11，这些以全面屏自居的手机，无非是屏占比更高一些，显示比例由过去的16：9变成了18：9。与使用传统屏幕的手机相比</div><div data-mce-style=\"text-align: left;\" style=\"text-align: left;\"><br data-mce-bogus=\"1\"></div><div data-mce-style=\"text-align: left;\" style=\"text-align: left;\"><p>再看现在的一些产品，除了iPhone X和夏普S2这两款全面屏产品外，很多全面屏手机包括三星Note8，都是通过把前置指纹放在机身背后，以及最大尺度减小前置摄像头和光传感器占用空间的做法，把屏占比做到了极致。不过，做大屏占比的做法也有差异。夏普S2和iPhone X的做法更有挑战，把听筒和光传感器与前置摄像头高密集的集成，这种方案的技术难度较高。相比之下，vivo X20和荣耀7X则是把指纹后置，然后听筒和前置摄像头的空间压缩，以提高屏占比，这是业内的主流做法，技术难度较低。</p><p>　　另据供应链人士透露，全面屏对上游供应链液晶面板厂商的挑战并不大，只需要更改一下屏幕切割的方法就可以了。也就是说，全面屏技术门槛并不像手机厂商宣传的那么高。很多手机品牌蜂拥而上，这足以说明全面屏手机就是一款被过度营销的产品。</p><p>　　<strong>谁玩坏了全面屏手机?</strong></p><p>　　过度的营销之下，全面屏手机的一些优势被刻意夸大了。在一些手机品牌的宣传中，全面屏不仅是高大上的科技，还是制造工艺非常难的新技术。一些全面屏手机上市后，这些谎言全部被拆穿。显然，手机品牌的营销们，把全面屏手机玩坏了。在全面屏手机被玩坏的现状背后，是手机创新匮乏的真实写照。</p><p>　　的确，最近两年智能手机硬件确实遭遇了创新瓶颈，手机处理器也进入了性能严重过剩的时代。在PC仍旧是4G内存的情况下，很多2000多块钱的手机已经标配了6G大内存;在PC屏幕的分辨率刚刚达到720P的时候，很多千元机的屏幕分辨率已经是1080P，售价2000多块钱的手机已经用上了新潮的2K屏幕……从手机制造商的角度来看，智能手机创新已经是一件难事。</p><p>　　然而，从消费者的角度来看，基于各种应用场景下的需求依然旺盛，而这并没有成为手机制造商创新的动力。举一个很简单的例子，手机充电接口现在可谓是五花八门，即有比较老套的Micro USB，还有TYPE-C接口，苹果也有自己的接口标准。对于消费者而言，频繁的更换数据线和充电头也是一个很繁琐的事情，安卓手机为何不能统一充电接口?这看似一个小需求，但这种创新对于用户体验的改变是毋庸置疑的。</p><p data-bjh-caption-id=\"cap-88334769\"><img src=\"https://timg01.bdimg.com/timg?pacompress&amp;imgtype=1&amp;sec=1439619614&amp;autorotate=1&amp;di=eef6f9e7caeaad8e5be18e2e9da16979&amp;quality=90&amp;size=b870_10000&amp;src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2Fac5a9055dc97ae08a25b3d91f88fbbb1.jpeg\" data-w=\"550\" data-h=\"325\" data-mce-src=\"https://timg01.bdimg.com/timg?pacompress&amp;imgtype=1&amp;sec=1439619614&amp;autorotate=1&amp;di=eef6f9e7caeaad8e5be18e2e9da16979&amp;quality=90&amp;size=b870_10000&amp;src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2Fac5a9055dc97ae08a25b3d91f88fbbb1.jpeg\" style=\"display: block; margin-left: auto; margin-right: auto;\" data-mce-style=\"display: block; margin-left: auto; margin-right: auto;\"></p><p>　　除了充电接口外，用户在日常使用中存在大量的需求，这些都能转化为手机厂商的创新点。大屏幕手机易碎这一问题困扰了用户很久，但至今没有一个厂商去研究如何保护手机屏幕的安全。在荣耀畅玩7X发布会上，荣耀总裁称搭载了全面屏的荣耀7X在防摔上做出了一些努力，并当场演示了手机从一米多高的地方跌落，手机屏幕没有任何损伤。虽说荣耀7X抗摔性是否真实，但这这样的方向，不失为智能手机创新的一个方向。对于消费者而言，手机屏幕防摔，远比全面屏带更具吸引力。</p><p>　　在指纹识别已经成为智能手机标配的今天，一旦手沾水就无法识别的痛点仍旧存在，用户的需求被漠视。尽管很多手机品牌一直强调创新，但真正能够解决用户痛点的却少之又少。多年来，手机品牌一味用硬件参数来标榜创新，被玩坏的全面屏，同样是手机品牌秀硬件参数的恶性竞争。如果全面屏被玩坏了仍旧无法引起手机品牌的重视，那么全面屏恶意竞争加剧，最受伤的还是手机厂商和用户。</p><p>　　写在最后：从第一款全面屏手机上市到今天，短短两个多月的时间，一些全面屏手机的售价已经跌破千元，全面屏概念瞬间被玩坏。上升到产业高度来看，全面屏概念被营销糟蹋，是国内智能手机行业病态的真相。如果再一味用硬件参数和营销拉升销量，国产手机或将倒在营销的利刃之下。</p></div>"
    },
    {
        "id": 3,
        "title": "中国自主建造破冰船命名“雪龙2” 计划2019年建成",
        "abstracts": "中国自主建造破冰船命名“雪龙2” 计划2019年建成",
        "author": "张琪格",
        "publishDate": "635021245043",
        "content": "<p>科技日报北京9月26日电 （记者陈瑜）“雪龙2”号，将成为我国自主建造的首艘破冰船的名字。26日，中国极地研究中心相关负责人向科技日报记者透露，当天，该船开始连续建造，根据计划，将于2019年建成，届时将与“雪龙”号破冰船一道，组队助力科考。</p>"
    },
    {
        "id": 4,
        "title": "惊艳世界！中国在加勒比海干了件大事",
        "abstracts": "惊艳世界！中国在加勒比海干了件大事",
        "author": "张琪格",
        "publishDate": "615021245043",
        "content": "<p><strong>　央视网消息：</strong>“我十分感谢祖国，谢谢国家对我们的关心！”面对镜头，多米尼克一家中餐馆的老板留下激动的眼泪。目前，她和400多名同胞一起已经抵达安提瓜和巴布达首都圣约翰港并得到妥善安置。<strong>　央视网消息：</strong>“我十分感谢祖国，谢谢国家对我们的关心！”面对镜头，多米尼克一家中餐馆的老板留下激动的眼泪。目前，她和400多名同胞一起已经抵达安提瓜和巴布达首都圣约翰港并得到妥善安置。</p>"
    },
    {
        "id": 5,
        "title": "中办国办印发《建立国家公园体制总体方案》",
        "abstracts": "中办国办印发《建立国家公园体制总体方案》",
        "author": "张琪格",
        "publishDate": "612021245043",
        "content": "<p>新华社北京9月26日电 近日，中共中央办公厅、国务院办公厅印发了《建立国家公园体制总体方案》，并发出通知，要求各地区各部门结合实际认真贯彻落实。</p>"
    },
    {
        "id": 6,
        "title": "教育部通报各地学前教育、普通高中等经费投入情况",
        "abstracts": "教育部通报各地学前教育、普通高中等经费投入情况",
        "author": "张琪格",
        "publishDate": "614021245043",
        "content": "<p><strong>央视网消息：</strong>据教育部网站消息，教育部办公厅近日发布《关于各地建立完善学前教育、普通高中和特殊教育经费投入机制情况的通报》。学前教育方面，目前北京、山西等13个省份和宁波等3个计划单列市及新疆生产建设兵团出台了公办园生均公用经费拨款标准，大连出台了生均综合补助标准。其中，北京为2250元，上海、天津为1200元。</p>"
    },
    {
        "id": 7,
        "title": "美国国务卿蒂勒森将于9月30日访华",
        "abstracts": "美国国务卿蒂勒森将于9月30日访华美国国务卿蒂勒森将于9月30日访华",
        "author": "吴明东",
        "publishDate": "514021245043",
        "content": "<p>外交部发言人陆慷在27日的例行记者会上宣布，应外交部长王毅邀请，美国国务卿雷克斯·蒂勒森将于9月30日访华。届时，中美双方将就中美关系、特朗普总统应习近平主席邀请于年内对中国进行国事访问及重大国际和地区问题交换意见。<span class=\"ifengLogo\"><a href=\"http://www.ifeng.com/\" target=\"_blank\" rel=\"noopener\" data-mce-href=\"http://www.ifeng.com/\"><img src=\"http://p2.ifengimg.com/a/2016/0810/204c433878d5cf9size1_w16_h16.png\" data-mce-src=\"http://p2.ifengimg.com/a/2016/0810/204c433878d5cf9size1_w16_h16.png\"></a></span></p>"
    },
    {
        "id": 8,
        "title": "日大选执政党欲获过半席位 安倍：达不到就辞职",
        "abstracts": "个晚饭威风威风威风威风",
        "author": "吴明东",
        "publishDate": "534021245043",
        "content": "<p>时空大家金坷垃收到了估计快了离开家两款都是管理会计丽景路口圣诞节两件事的高级连击拉克丝大家观看了就是离开的国家昆仑决昆仑决昆仑决抗裂砂浆的风口浪尖老了立刻就哭了圣诞节风口浪尖离开家发斯蒂芬斯蒂芬克隆空间立刻就哭了拉开金坷垃快乐j</p><p>深刻了多久风口浪尖接口l</p><p>是劳动纠纷离开家金坷垃 家里看书的法律框架lk斯蒂芬斯蒂芬</p>"
    },
    {
        "id": 9,
        "title": "重访习近平总书记党的十八大以来国内考察地",
        "abstracts": "fewfwef232323",
        "author": "王亚兰",
        "publishDate": "544021245043",
        "content": "<p>时空大家金坷垃收到了估计快了离开家两款都是管理会计丽景路口圣诞节两件事的高级连击拉克丝大家观看了就是离开的国家昆仑决昆仑决昆仑决抗裂砂浆的风口浪尖老了立刻就哭了圣诞节风口浪尖离开家</p>"
    },
    {
        "id": 10,
        "title": "习近平出席国际刑警组织大会并演讲  全文",
        "abstracts": "fewfwef",
        "author": "张小明",
        "publishDate": "554021245043",
        "content": "<p>fsdfwefwef</p>"
    },
]

router.get('/api/article/list',(req,res)=>{
    const { current = 1, size = 20} = req.query;
    const pageList = mockList.filter((item,idx)=>idx<size*current&&idx>=size*(current-1));
    res.json({
        code:0,
        data:pageList,
        total:mockList.length
    });
})

router.get('/api/article/delete',(req,res)=>{
    const id  = req.query.id;
    const index = mockList.findIndex(item=>{
        if(item.id == id){
            return true;
        }
    });
    mockList.splice(index,1);
    res.json({
        code:0,
        data:'删除成功'
    });
});

router.post('/api/article/create',(req,res)=>{
    const data = req.body;
    mockList.push(data);
    res.json({
        code:0,
        data:'success'
    });
});

module.exports = router;