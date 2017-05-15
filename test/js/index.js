var newnav = new Vue({
	el: '#new',
	data:{
		'shift':{
			'X':''
		},
		'navlist':[
			{name:'最新',class:'cun'},
			{name:'新闻'},
			{name:'活动'},
			{name:'公告'},
			{name:'论坛'}
		],
		'newly':[
				{'type':'[最新]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单1','time':'03/23'},
				{'type':'[最新]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单2','time':'03/23'},
				{'type':'[最新]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单3','time':'03/23'},
				{'type':'[最新]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单4','time':'03/23'},
				{'type':'[最新]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单5','time':'03/23'}
			],
		'news':[
				{'type':'[新闻]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单1','time':'03/23'},
				{'type':'[新闻]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单2','time':'03/23'},
				{'type':'[新闻]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单3','time':'03/23'},
				{'type':'[新闻]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单4','time':'03/23'},
				{'type':'[新闻]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单5','time':'03/23'}
			],
		'activity':[
				{'type':'[活动]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单1','time':'03/23'},
				{'type':'[活动]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单2','time':'03/23'},
				{'type':'[活动]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单3','time':'03/23'},
				{'type':'[活动]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单4','time':'03/23'},
				{'type':'[活动]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单5','time':'03/23'}
			],
		'notice':[
				{'type':'[公告]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单1','time':'03/23'},
				{'type':'[公告]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单2','time':'03/23'},
				{'type':'[公告]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单3','time':'03/23'},
				{'type':'[公告]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单4','time':'03/23'},
				{'type':'[公告]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单5','time':'03/23'}
			],
		'forum':[
				{'type':'[论坛]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单1','time':'03/23'},
				{'type':'[论坛]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单2','time':'03/23'},
				{'type':'[论坛]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单3','time':'03/23'},
				{'type':'[论坛]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单4','time':'03/23'},
				{'type':'[论坛]','href':'http://m.qy.iwgame.com/comprehensive/announcement/2017/0323/140.html','title':'【封神系统】第二期获奖名单5','time':'03/23'},
			]
	},
	methods:{
		Move:function(index){
			this.shift.X = index*6.23*-1;
			//this.navlist[index] = JSON.parse(JSON.stringify(this.navlist[index]).replace(/^name|cun/,''));
			//delete this.navlist[index].class;
			for(var i=0;i<this.navlist.length;i++){
				delete this.navlist[i].class;
			}
			this.navlist[index].class = 'cun';
		}
	},
	computed:{
		total:function(){
			return 'transform: translateX('+this.shift.X+'rem)';
		}
	}
});

var role = new Vue({
	el:'#role',
	data:{
		'shift':{
			'X':''
		},
		'navs':[
			{'name': "紫阳",'class':'cun'},
			{'name':"太乙"},
			{'name':"冲虚"},
			{'name':"天音"}
		],
		'lists':[
				{'feature':'职业特色','synopsis':'刚猛型近战肉搏职业','type':'技能类型：','type_m':'拳系/剑系，主打狂暴及防御专精技。','arms':'武器类型：','arms_m':'锰钢重剑。'},
				{'feature':'职业特色','synopsis':'敏捷型远程物攻职业','type':'技能类型：','type_m':'镰系/链攻，主攻刺杀及魂阵专精技。','arms':'武器类型：','arms_m':'飞链利刃。'},
				{'feature':'职业特色','synopsis':'智慧型远程法攻职业','type':'技能类型：','type_m':'自然法系，主攻火焰及寒冰专精技。','arms':'武器类型：','arms_m':'七卿古剑。'},
				{'feature':'职业特色','synopsis':'远程辅助控制型职业','type':'技能类型：','type_m':'速射/蓄力，主攻陷阱及医毒专精技。','arms':'武器类型：','arms_m':'御羽行风。'}
			]
	},
	methods:{
		move:function(index){
			this.shift.X = index*6.12*-1;
			for(var i=0;i<this.navs.length;i++){
				delete this.navs[i].class;
			}
			this.navs[index].class = 'cun';
		}
	},
	computed:{
		total:function(){
			return 'transform: translateX('+this.shift.X+'rem)';
		}
	}
});

var atlas =new Vue({
	el:'#atlas',
	data:{
		'frequency':{
			'num':'',
			'index':'',
			'distance':''
		},
		'lists':[
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112528976.jpg','title':'副本08'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112550513.jpg','title':'副本07'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112607852.jpg','title':'副本06'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112619903.jpg','title':'副本05'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'},
			{'src':'http://www-res.iwgame.com/site9/2016/1009/20161009112516180.jpg','title':'金蟾兽'}
		]
	},
	methods:{
		move:function(){
			this.frequency.index--;
			this.frequency.num = Math.ceil(this.lists.length/4);
			if(this.frequency.index*-1 >= this.frequency.num){
				this.frequency.index = 0;
			}
			this.frequency.distance = this.frequency.index * 4.4;
			console.log(this.frequency.index,this.frequency.num);
		}
	},
	computed:{
		total:function(){
			return 'transform: translateY('+this.frequency.distance+'rem)';
		}
	}
});

var column = new Vue({
	el:'#column',
	data:{
		'shift':{
			'X':''
		},
		'navs':[
			{'name': "新手必看",'class':'cun'},
			{'name':'高手进阶'},
			{'name':'特色玩法'},
			{'name':'赚钱玩法'}
		],
		'sprog':[
			{'title':'游戏介绍','li':[
				{'name':'游戏特色','href':'http://hd.z.iwgame.com/special/yxts/'},
				{'name':'游戏概念','href':'http://hd.z.iwgame.com/special/yxgn/'},
				{'name':'游戏背景','href':'http://m.qy.iwgame.com/xsbk/yxjs/2016/0307/29.html'}
			]},
			{
				'title':'下载安装','li':[
					{'name':'下载安装','href':'http://m.qy.iwgame.com/xsbk/xzaz/2016/0816/36.html'},
					{'name':'注册账号','href':'http://m.qy.iwgame.com/xsbk/xzaz/2016/0307/34.html'},
					{'name':'游戏配置','href':'http://m.qy.iwgame.com/xsbk/xzaz/2016/0307/33.html'}
				]
			},
			{
				'title':'进入游戏','li':[
					{'name':'基本操作','href':'http://m.qy.iwgame.com/xsbk/jryx/2016/0307/43.html'},
					{'name':'游戏快捷键','href':'http://m.qy.iwgame.com/xsbk/jryx/2016/0307/40.html'},
					{'name':'游戏界面','href':'http://m.qy.iwgame.com/xsbk/jryx/2016/0307/38.html'},
					{'name':'人物属性','href':'http://m.qy.iwgame.com/xsbk/jryx/2016/0307/37.html'}
				]
			},
			{
				'title':'首页指引','li':[
					{'name':'首次交易','href':'http://m.qy.iwgame.com/xsbk/install/2016/0816/47.html'},
					{'name':'首次聊天','href':'http://m.qy.iwgame.com/xsbk/install/2016/0307/46.html'},
					{'name':'首次组队','href':'http://m.qy.iwgame.com/xsbk/install/2016/0307/45.html'},
					{'name':'首次穿上装备','href':'http://m.qy.iwgame.com/xsbk/install/2016/0307/44.html'}
				]
			}
		],
		'killer':[
			{'title':'快速升级','li':[
				{'name':'朝歌福利','href':'http://m.qy.iwgame.com/gsjj/zbqh/2016/0308/51.html'},
				{'name':'敌营借酒','href':'http://m.qy.iwgame.com/gsjj/zbqh/2016/0307/50.html'},
				{'name':'渑池护送','href':'http://m.qy.iwgame.com/gsjj/zbqh/2016/0307/49.html'},
				{'name':'夺宝奇兵','href':'http://m.qy.iwgame.com/gsjj/zbqh/2016/0307/48.html'}
			]},
			{'title':'战力装备','li':[
				{'name':'零售品质进阶','href':'http://m.qy.iwgame.com/rwzz/2016/0307/55.html'},
				{'name':'坐骑强化','href':'http://m.qy.iwgame.com/rwzz/2016/0307/54.html'},
				{'name':'修真升级','href':'http://m.qy.iwgame.com/rwzz/2016/0307/53.html'},
				{'name':'星魂','href':'http://m.qy.iwgame.com/rwzz/2016/0816/52.html'}
			]},
			{'title':'家族精英','li':[
				{'name':'家族战','href':'http://m.qy.iwgame.com/gsjj/wgzb/2016/0307/59.html'},
				{'name':'家族NPC争夺战','href':'http://m.qy.iwgame.com/gsjj/wgzb/2016/0307/58.html'},
				{'name':'圣兽试练','href':'http://m.qy.iwgame.com/gsjj/wgzb/2016/0307/57.html'},
				{'name':'阖家欢','href':'http://m.qy.iwgame.com/gsjj/wgzb/2016/0307/56.html'}
			]},
			{'title':'帮派枭雄','li':[
				{'name':'帮派夺城战','href':'http://m.qy.iwgame.com/gsjj/zbqb/2016/0307/64.html'},
				{'name':'攻城略地','href':'http://m.qy.iwgame.com/gsjj/zbqb/2016/0307/63.html'},
				{'name':'绵薄之力','href':'http://m.qy.iwgame.com/gsjj/zbqb/2016/0307/62.html'},
				{'name':'帮派福利','href':'http://m.qy.iwgame.com/gsjj/zbqb/2016/0307/60.html'}
			]}
		],
		'feature':[
			{'title':'法宝系统','li':[
				{'name':'将魂获取','href':'http://m.qy.iwgame.com/tswf/fbrh/2016/0307/67.html'},
				{'name':'法宝融合','href':'http://m.qy.iwgame.com/tswf/fbrh/2016/0307/65.html'}
			]},
			{'title':'星宿修真','li':[
				{'name':'渡劫','href':'http://m.qy.iwgame.com/tswf/jzjn/2016/0307/88.html'},
				{'name':'修真升级','href':'http://m.qy.iwgame.com/tswf/jzjn/2016/0307/87.html'},
				{'name':'星魂','href':'http://m.qy.iwgame.com/tswf/jzjn/2016/0307/86.html'},
				{'name':'新宿升级','href':'http://m.qy.iwgame.com/tswf/jzjn/2016/0307/85.html'}
			]},
			{'title':'灵兽系统','li':[
				{'name':'灵兽品质进阶','href':'http://m.qy.iwgame.com/tswf/jzjn/2016/0307/84.html'},
				{'name':'灵兽附身技能学习','href':'http://m.qy.iwgame.com/tswf/jzjn/2016/0307/82.html'},
				{'name':'灵兽专属技能','href':'http://m.qy.iwgame.com/tswf/jzjn/2016/0307/81.html'},
				{'name':'灵兽成长','href':'http://m.qy.iwgame.com/tswf/jzjn/2016/0307/80.html'}
			]},
			{'title':'家族帮派','li':[
				{'name':'帮派夺城战','href':'http://m.qy.iwgame.com/tswf/jzjn/2016/0307/79.html'},
				{'name':'攻城略地','href':'http://m.qy.iwgame.com/tswf/jzjn/2016/0307/78.html'},
				{'name':'兴旺家族','href':'http://m.qy.iwgame.com/tswf/jzjn/2016/0307/77.html'},
				{'name':'家族技能','href':'http://m.qy.iwgame.com/tswf/jzjn/2016/0307/76.html'}
			]}
		],
		'money':[
			{'title':'西岐四本','li':[
				{'name':'万象灵地','href':'http://m.qy.iwgame.com/zqwf/gcld/2016/0308/85.html'},
				{'name':'灵魂幻境','href':'http://m.qy.iwgame.com/zqwf/gcld/2016/0307/83.html'},
				{'name':'六道轮回宫','href':'http://m.qy.iwgame.com/zqwf/gcld/2016/0307/82.html'},		
				{'name':'岐山石窟','href':'http://m.qy.iwgame.com/zqwf/gcld/2016/0307/81.html'}			
			]},
			{'title':'跨国挑战','li':[
				{'name':'敌营借酒','href':'http://m.qy.iwgame.com/zqwf/xsrw/2016/0307/89.html'},
				{'name':'刺探敌情','href':'http://m.qy.iwgame.com/zqwf/xsrw/2016/0308/88.html'},
				{'name':'渑池护送','href':'http://m.qy.iwgame.com/zqwf/xsrw/2016/0307/87.html'},			
				{'name':'夺宝奇兵','href':'http://m.qy.iwgame.com/zqwf/xsrw/2016/0307/86.html'},			
			]},
			{'title':'趣味任务','li':[
				{'name':'敌国劫镖','href':'http://m.qy.iwgame.com/zqwf/ychs/2016/0404/91.html'},
				{'name':'悬赏任务','href':'http://m.qy.iwgame.com/zqwf/ychs/2016/0308/90.html'}				
			]}		
		]
	},
	methods:{
		move:function(index){
			this.shift.X = index*6.1*-1;
			for(var i=0;i<this.navs.length;i++){
				delete this.navs[i].class;
			}
			this.navs[index].class = 'cun';
		}
	},
	computed:{
		total:function(){
			return 'transform: translateX('+this.shift.X+'rem)';
		}
	}
});