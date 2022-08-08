$(document).ready(function() {
	
	if ($(window).width() > 993) {
		$('.parallaxme').parallax("100%", 0.5);
	}	
	
	setInterval(function(){
		if($(".stats_followers").text() != "" && $(".stats_followers").text() != null && $(".stats_followers").text() != undefined)
		{
			localStorage.setItem("snapchatfollowers",$(".stats_followers").text());
			localStorage.setItem("snapchatviews",$(".stats_views").text());
		}
	},2000);
	
	if(localStorage.snapchatfollowers == undefined || localStorage.snapchatfollowers == "NaN")
	{
		$('.stats_followers').countTo();
		$('.stats_views').countTo();
	}
	else
	{
		$('.stats_followers').countTo({
			from: parseInt(localStorage.snapchatfollowers)
		});
		
		$('.stats_views').countTo({
			from: parseInt(localStorage.snapchatviews)
		});		
	}
	 
	$('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
	
    $('.snapchat-followers-start').click(function () {
		window.scrollTo(0, $(".second-step.snapchat-followers").offset().top);
		$('.first-step').fadeOut(500, function() {
			$('.processing-request-wrapper').fadeIn(500, function() {
				setTimeout(function() { $('.processing-request-wrapper').fadeOut(500, function() {
					setTimeout(function() { $('.second-step.snapchat-followers').fadeIn(); }, 10 );
				}); }, 1500 );
			});
		});		
	});
	$('.snapchat-followers-back').click(function () {
		$('.second-step.snapchat-followers').fadeOut(500, function() {
			$('.processing-request-wrapper').fadeIn(500, function() {
				setTimeout(function() { $('.processing-request-wrapper').fadeOut(500, function() {
					setTimeout(function() { $('.first-step').fadeIn(); }, 10 );
				}); }, 200 );
			});
		});		
	});
	
	$('.snapchat-views-start').click(function () {
		window.scrollTo(0, $(".second-step.snapchat-views").offset().top);
		$('.first-step').fadeOut(500, function() {
			$('.processing-request-wrapper').fadeIn(500, function() {
				setTimeout(function() { $('.processing-request-wrapper').fadeOut(500, function() {
					setTimeout(function() { $('.second-step.snapchat-views').fadeIn(); }, 10 );
				}); }, 1500 );
			});
		});		
	});
	$('.snapchat-views-back').click(function () {
		$('.second-step.snapchat-views').fadeOut(500, function() {
			$('.processing-request-wrapper').fadeIn(500, function() {
				setTimeout(function() { $('.processing-request-wrapper').fadeOut(500, function() {
					setTimeout(function() { $('.first-step').fadeIn(); }, 10 );
				}); }, 200 );
			});
		});		
	});	
	
	
	var $selected_FBL = '';
	var $selected_FBS = '';
	
	function fixSCviewsBox($SCviews_parent_class) {
        resetSCviewsBoxes();
        if ($SCviews_parent_class.hasClass('snapchatviews-1')) {
            $selected_FBL = '999';
        }
        if ($SCviews_parent_class.hasClass('snapchatviews-2')) {
            $selected_FBL = '1999';
        }
        if ($SCviews_parent_class.hasClass('snapchatviews-3')) {
            $selected_FBL = '4999';
        }
        $SCviews_parent_class.addClass('active');
    }	
    function resetSCviewsBoxes() {
        var $scv_list = $('.snapchatviews-1, .snapchatviews-2, .snapchatviews-3');	
        if ($scv_list.hasClass('active')) {
            $scv_list.removeClass('active');
        }
    }
	$('.snapchat-views-amount-select').click(function() {
		fixSCviewsBox($(this));				      
    });
	
	function fixSCfollowersBox($SCfollowers_parent_class) {
        resetSCfollowersBoxes();
        if ($SCfollowers_parent_class.hasClass('snapchatfollowers-1')) {
            $selected_FBL = '999';
        }
        if ($SCfollowers_parent_class.hasClass('snapchatfollowers-2')) {
            $selected_FBL = '1999';
        }
        if ($SCfollowers_parent_class.hasClass('snapchatfollowers-3')) {
            $selected_FBL = '4999';
        }
        $SCfollowers_parent_class.addClass('active');
    }	
    function resetSCfollowersBoxes() {
        var $scf_list = $('.snapchatfollowers-1, .snapchatfollowers-2, .snapchatfollowers-3');	
        if ($scf_list.hasClass('active')) {
            $scf_list.removeClass('active');
        }
    }
	$('.snapchat-followers-amount-select').click(function() {
		fixSCfollowersBox($(this));				      
    });
	
	
	$('.snapchat-views-next').click(function () {
		window.scrollTo(0, $(".second-step").offset().top);
		if($('#sc-generator-input-fbl').val() != ''){
			$('.second-step.snapchat-views').fadeOut(500, function() {
				$('.processing-request-wrapper').fadeIn(500, function() {
					setTimeout(function() { $('.processing-request-wrapper').fadeOut(500, function() {
						setTimeout(function() { $('.third-step.snapchat-views').fadeIn(); }, 0 );
					}); }, 2500 );
				});
			});
		} else {
			 sweetAlert("Error", "Please enter your Snapchat Username.", "error");
		}		
	});
	$('.snapchat-followers-next').click(function () {
		window.scrollTo(0, $(".second-step").offset().top);
		if($('#sc-generator-input-fbs').val() != ''){
			$('.second-step.snapchat-followers').fadeOut(500, function() {
				$('.processing-request-wrapper').fadeIn(500, function() {
					setTimeout(function() { $('.processing-request-wrapper').fadeOut(500, function() {
						setTimeout(function() { $('.third-step.snapchat-followers').fadeIn(); }, 0 );
					}); }, 2500 );
				});
			});
		} else {
			 sweetAlert("Error", "Please enter your Snapchat Username.", "error");
		}		
	});
	
	var $snapchat_amount_list = $('.generator-amount-select');
	$('.snapchat-views-next-complete').click(function () {
		if ($snapchat_amount_list.hasClass('active')) {
			$('.third-step.snapchat-views').fadeOut(500, function() {			
				$('.generator-console-wrapper').fadeIn(500, function() {
					window.scrollTo(0, $(".generator-console-wrapper").offset().top);
					setTimeout(function() { $('.console-message-1').fadeIn(); }, 300 );
					setTimeout(function() { $('.console-message-2').fadeIn(); }, 1200 );
					setTimeout(function() { $('.console-message-3').fadeIn(); }, 2100 );
					setTimeout(function() { $('.console-message-4').fadeIn(); }, 3000 );
					setTimeout(function() { $('.console-message-5').fadeIn(); }, 4500 );
					setTimeout(function() { $('.console-message-6').fadeIn(); }, 5800 );
					setTimeout(function() { $('.console-message-7').fadeIn(); }, 6800 );
					setTimeout(function() { $('.console-message-8-FBL').fadeIn(); }, 7900 );
					setTimeout(function() { $('.console-message-9-FBL').fadeIn(); }, 10500 );
					setTimeout(function() { $('.console-message-10').fadeIn(); }, 11800 );
					setTimeout(function() { $('.console-message-11').fadeIn(); }, 13500 );
					setTimeout(function() { $('.console-message-12').fadeIn(); }, 15000 );
					setTimeout(function() { $('.generator-console-wrapper').fadeOut(200); }, 17500 );	
					setTimeout(function() { $('.human-verification-wrapper').fadeIn(200); }, 17700 );	
				});
			});
		} else {
			sweetAlert("Error", "Please select the amount of Snapchat views to add.", "error");
		}
	});	

	$('.snapchat-followers-next-complete').click(function () {		
		if ($snapchat_amount_list.hasClass('active')) {
			$('.third-step.snapchat-followers').fadeOut(500, function() {			
				$('.generator-console-wrapper').fadeIn(500, function() {
					window.scrollTo(0, $(".generator-console-wrapper").offset().top);
					setTimeout(function() { $('.console-message-1').fadeIn(); }, 300 );
					setTimeout(function() { $('.console-message-2').fadeIn(); }, 1200 );
					setTimeout(function() { $('.console-message-3').fadeIn(); }, 2100 );
					setTimeout(function() { $('.console-message-4').fadeIn(); }, 3000 );
					setTimeout(function() { $('.console-message-5').fadeIn(); }, 4500 );
					setTimeout(function() { $('.console-message-6').fadeIn(); }, 5800 );
					setTimeout(function() { $('.console-message-7').fadeIn(); }, 6800 );
					setTimeout(function() { $('.console-message-8-FBS').fadeIn(); }, 7900 );
					setTimeout(function() { $('.console-message-9-FBS').fadeIn(); }, 10500 );
					setTimeout(function() { $('.console-message-10').fadeIn(); }, 11800 );
					setTimeout(function() { $('.console-message-11').fadeIn(); }, 13500 );
					setTimeout(function() { $('.console-message-12').fadeIn(); }, 15000 );
					setTimeout(function() { $('.generator-console-wrapper').fadeOut(200); }, 17500 );	
					setTimeout(function() { $('.human-verification-wrapper').fadeIn(200); }, 17700 );	
				});
			});
		} else {
			sweetAlert("Error", "Please select the amount of Snapchat Followers to add.", "error");
		}
	});	
	
	
    $('.popup-tos').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-contact').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-pp').magnificPopup({
        type: 'inline',
        preloader: false
    });
	
	$(".follow-scroll").hide();
	$(window).scroll(function() {
		console.log($(window).scrollTop());
		if ($(window).scrollTop() > 150) {
			$(".follow-scroll").fadeIn();
		} else {
			$(".follow-scroll").fadeOut();
		}

	});
});

	var ee;
	var eenum2 = 334;
	function dis_num3() {
		document.getElementById("online2").innerHTML = eenum2;
		var randWay = Math.floor(Math.random() * 10 + 1);
		if (randWay <= 5) {
			eenum2 = eenum2 + Math.floor(Math.random() * 10 + 1);;
		} else {
			eenum2 = eenum2 - Math.floor(Math.random() * 10 + 1);;
		}
		ee = setTimeout("dis_num3()", 1000);
	}
	dis_num3();

	var ChatReplied = false;
	var ChatDate = new Date();
	var ChatUserName = '';
	var ChatUserNames = ["TurtletheCat", "Pobelter", "EugeneJPark", "Doublelift", "C9Sneaky", "lamBjerg", "Popobelterold", "HOGEE", "WizFujiiN", "HotGuy6Pack", "dawoofsclaw", "TiPApollo", "Soeren", "FSNChunkyfresh", "Ariana22ROO", "Waker", "Podu", "C9Hard", "Shiphtur", "HOoZy", "Chapanya", "Dyrus", "Entranced", "WildTurtle", "WildTurtl", "lntense", "Hauntzer", "LiquidFeniX", "THExJOHNxCENA555", "Imaqtpie", "ZionSpartan", "JJackstar", "Ekkocat", "LiquidKEITH", "mldkingking", "Loopercorn", "TiPMa", "Ohhhq", "ninjamaster69xxx", "CaliTrlolz8", "ice", "C9Meteos", "JannaMechanics", "KEITHMCBRIEF", "dunamis", "Quasmire", "scorro", "LiquidQuas", "GVHauntzer", "PengYiliang", "Casely", "wahoolahoola", "godisfeng66666", "Zbuum", "ilovefatdongs", "TransIogic", "LemonBoy", "Link", "Chipotlehunter", "TDKkina", "DJTrance", "Duocek", "Hate", "KonKwon", "Nihillmatic", "Zaryab", "intero", "Biofrost", "LongCat4", "CSTJesiz", "GVKeane", "TiPyoondog", "RedoutabIe", "LiquidXpecial", "JayJ", "GVCop", "iKeNNyu", "C9Hai", "FunFrock", "CLGLourlo", "evertan", "Chaullenger", "Aniratak", "PorpoiseDeluxe", "Isuyu", "CLGDandyLite", "Arcsecond", "BloodWater", "Jynthe", "Sickoscott", "RickyTang", "DaBox", "ALLRekklesvNA", "Hoofspark", "DuBuKiD", "AdrianMa", "GuriAndGunji", "stuntopia", "RyanChoi", "AiShiTeru", "FSNMeMer", "J0kes", "C9Balls", "C9SoIo", "yungmulahBABY", "FeelTheLove", "dawolfsclaw", "BaamSouma", "NMEotter", "stuntopolis", "llRomell", "GoJeongPa", "p0z", "Trisexual", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "goldenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "fabbbyyy", "halo3madsniper", "iLucent", "1k2o1ko12ko12ko2", "Bokbokimacat", "VANISHINGDRAG0N", "LiquidPiglet", "playmkngsupport", "Gambler", "Gaggiano", "JJayel", "JoopsaKid", "1brayle", "Azingy", "Kebrex", "WahzYan", "willxo", "TailsLoL", "darksnipa47", "Thyak", "JimmyTalon", "vane", "sooyoung", "lalaisland", "Lourlo", "Sunar", "PlayWithAnimals", "scarra", "HUYAGorilIA", "Lock0nStratos", "aphromoo", "KMadClown", "ChaIlengerAhri", "YY90001PiKaChu", "Thefatkidfromup", "ahqwe5tdoor", "Nintenpai", "JustJayce", "toontown", "BasedYoona", "GoldStars", "ExecutionerKen", "nicemoves", "InvertedComposer", "LiquidIWD", "Stan007", "woshishabi", "JukeKing", "xPecake", "BlGHUEVOS", "Plun", "KingCobra", "TDKSmoothie", "TSMLustboy", "C10Meteos", "lllllllllllllIII", "ohdaughter", "PekinWoof", "BrandonFtw8", "m2sticc", "DaiJurJur", "DontMashMe", "CaseOpened", "otte", "wutroletoplay", "Thurtle", "Dodo8", "Frostalicious", "bobqinXD", "MrCarter", "Hellkey", "Chimonaa1", "DaBoxII", "GVVicious", "Jummychu", "PAlNLESS", "LiLBunnyFuFuu", "Lukeeeeeeeeee", "Lattman", "Daserer", "AlliancePatrick", "Lionsexual", "St1xxay", "Kojolika", "CSTCris", "KojotheCat", "StellaLoussier", "Gleebglarbu", "Altrum", "RiotMeyeA", "Rule18", "mandatorycloud", "Tritan", "LiquidDominate", "cidadedecack", "RoA", "BillyBoss", "xPepastel", "TaketheDraw", "ST2g", "Migipooop", "dKiWiKid", "NMEflareszx", "Gundamu", "imp", "DDABONG", "Daydreamin", "Nightlie", "MRHIGHLIGHTREEL", "Shweeb", "JinMori", "Tailsz", "Bischu", "CRBRakin", "Chaox", "Grigne", "LogicalDan", "DAKular", "DifferentSword", "Geranimoo", "InnoX", "FishingforUrf", "FluffyKittens206", "ImJinAh", "CloudNguyen", "moonway", "whoishe", "TiensiNoAkuma", "Ethil", "nothinghere", "SuperMetroid", "hiimgosu", "Mammon", "BGJessicaJung", "coBBz", "waitingforu", "LearningToPIay", "YiOwO", "heavenTime", "AnDa", "WakaWaka", "hashinshin", "TDKKez", "MariaCreveling", "Cypress", "YahooDotCom", "Phanimal", "Aror", "RFLegendary", "BenNguyen", "AHHHHHHHHH", "Linsanityy", "Valkrin", "Gate", "Allorim", "Johnp0t", "Superrrman", "Laughing", "AKAPapaChau", "denoshuresK", "Anthony", "Nightblue3", "Aranium", "Pallione", "BamfDotaPlayer", "FakerSama", "xiaolan", "Sweept", "HooManDu", "XiaoWeiXiao", "HctMike", "Revenge", "Apauloh", "latebloomer", "CRBFyre", "MongolWarrior", "Hiphophammer", "CoachLFProTeam", "hiimria", "Jackoo", "Saskio", "DadeFakerPawn", "GVStvicious", "NeonSurge", "NMEBodydrop", "MatLifeTriHard", "PantsareDragon", "GinormousNoob", "IMbz", "miqo", "VoyboyCARRY", "Hakuho", "Hexadecimal", "themassacre8", "Ayr", "SeaHorsee", "F0rtissimo", "GamerXz", "Remie", "Soghp", "Raimazz", "Ultimazero", "bigfatlp", "NMETrashyy", "C9LOD", "Popuh", "SAGASUPVEIGM", "Iamagoodboy", "TrollerDog", "Descraton", "LiquidInoriTV", "MiniMe", "IlIlIIIlIIIIlIII", "Shweebie", "KatLissEverdeen", "PoppersOP", "B1GKr1T", "DGB", "stephyscute2", "TEESEMM", "Cyprincess", "baohando", "urbutts", "maplestreeTT", "jamee", "SawitonReddit", "VeryBitter", "BenignSentinel", "MrJuvel", "Denny", "LeeGuitarStringa", "DKrupt", "LAGEhsher", "eLLinOiSe", "MochiBalls", "Sonnynot6", "ixou", "Taeyawn", "Dezx", "7hThintoN", "BeautifulKorean", "VwSTeesum", "TLIWDominate", "Vsepr", "ktSmurf", "Vultix", "Soredemo", "ROBERTxLEE", "AnnieBot", "aksn1per", "IamFearless", "FrostyLights", "SoYung", "Tuoooor", "Polx", "Agolite", "CloudWater", "Delta", "LAGOrbwalk", "sexycan", "SimonHawkes", "Rohammers", "NMEInnoX", "ChineseJester", "IAmDoughboy", "Cytosine", "Vanxer", "SDiana2", "Araya", "TheItalianOne", "F1Flow", "Kazahana", "Malajukii", "xiaoweiba", "JoshMabrey", "shinymew", "Event", "freelancer18", "ZnipetheDog", "hiitsviper", "HappyBirfdizzay", "Abou222", "Gir1shot2diamond", "KiNGNidhogg", "PurpleFloyd", "Rathul", "Kwaku", "BeachedWhaIe", "14h", "Xpecial", "CLGThink", "Aiciel", "oerh", "butttpounder", "TalkPIayLove", "jordank", "TwistyJuker", "MeganFoxisGG", "NiHaoDyLan", "TallerACE", "Doomtrobo", "Wardrium", "TwtchTviLoveSezu", "Westrice", "iMysterious", "BennyHung", "EnmaDaiO", "xTc4", "FallenBandit", "RumbIeMidGG", "deft1", "GochuHunter", "XxRobvanxX", "DuoChiDianShi", "coLBubbadub", "LeBulbe", "TanHat", "Dusty", "Jibberwackey", "Tallwhitebro", "llllllllllllIIII", "LilBuu", "Diamond", "cesuna", "BigolRon", "xSojin", "Gh3ttoWatermelon", "KingofMemes", "111094Jrh", "bive", "Yammy", "FasScriptor", "Docxm", "GVBunnyFuFuu", "Alphabetical", "Liquidzig", "YouHadNoDream", "TINYHUEVOS", "Sheepx", "GangstaSwerve", "LeBulbetier", "amandagugu", "Rushmore", "AnnieCHastur", "OverlordForte", "Muffintopper66", "Kazura", "zetsuen", "wozhixiangyin", "CaptainNuke", "alextheman", "Seongmin", "Working", "kyaasenpaix3", "gurminder", "VwSKhoachitizer", "TGZ", "KrucifixKricc", "Kevnn", "Academiic", "ArianaLovato", "Elemia", "CLGDeftsu", "XerbeK", "CeIestic", "RedEyeAkame", "Kerpal", "xFSNSaber", "MakNooN", "Hcore", "MrGamer", "zeralf", "Fenixlol", "Indivisible", "SHOWMETHEMONEY", "Adorations", "Niqhtmarex", "RambointheJungle", "Iucid", "iOddOrange", "Uncover", "DD666666", "r0b0cop", "VictoricaDebloiz", "Gleebglarb", "EmperorSteeleye", "SillyAdam", "WWWWWWWWWWWWWWMW", "tempname456543", "FeedOn", "iJesus69", "OmegaB", "Riftcrawl", "Xandertrax", "Krymer", "TwistedSun", "DeTRFShinmori", "RiceFox", "iKoogar", "Mizuji", "White", "zgerman", "FORG1VENliftlift", "sakurafIowers", "xSaury", "PiPiPig", "Pyrr", "TheCptAmerica", "NtzNasty", "SlowlyDriftnAway", "cre4tive", "LAGGoldenShiv", "FSNDLuffy", "NintendudeX", "duliniul", "Cybody", "Odete49", "TFBlade", "Platoon", "CopyCat", "BarbecueRibs", "TitanDweevil", "HeroesOfTheStorm", "JRT94", "RedBerrrys", "Rockblood", "YoloOno", "BalmungLFT", "IreliaCarriesU", "LikeAMaws", "PaulDano", "ErzaScarIet", "KiritoKamui", "ProofOfPayment", "DonPorks", "BarronZzZ", "Pikaboo", "aLeo", "MikeytheBully", "7Qing", "BillyBossXD", "DragonRaider", "Haughty", "KMadClowns", "ikORY", "Nikkone", "WeixiaTianshi", "QQ346443922", "FoxDog", "Tahx", "Hawk", "Haruka", "Scrumm", "cackgod", "iAmNotSorry", "coLROBERTO", "GladeGleamBright", "MonkeyDufle", "M1ssBear", "theletter3", "Sandrew", "RongRe", "MrGatsby", "xBlueMoon", "Merryem", "ElkWhisperer", "Enticed", "Draguner", "DeliciousMilkGG", "Patoy", "Lucl3n3Ch4k0", "Smoian", "Piaget", "Xiaomi", "zeflife", "IsDatLohpally", "HatersWantToBeMe", "Blackmill", "PrinceChumpJohn", "NhatNguyen", "Nebulite", "IAmTheIRS", "TedStickles", "LOD", "CallMeExtremity", "kimjeii", "Kappasun", "JJJackstar", "TSMMeNoHaxor", "Zealous", "Normalize", "Topcatz", "KimchimanBegins", "DrawingPalette", "AnarchyofDinh", "hiimxiao", "MikeHct", "Manco", "ChumpJohnsTeemo", "Heejae", "delirous", "Iodus", "WakaWakaWak", "Hawez", "ThaOGTschussi", "TwistedFox", "PureCorruption", "HotshotGG", "Turdelz", "ysohardstylez", "Brainfre3z", "ilyTaylor", "Zaineking", "QualityADC", "LingTong", "DyrudeJstormRMX", "AnObesePanda", "silvermidget", "CornStyle", "LafalgarTaw", "Zeyzal", "Meowwwwwww", "Pokemorph", "JimmyHong", "Hoardedsoviet", "Nematic", "C9Yusui", "BlownbyJanna", "Sojs", "Cerathe", "FairieTail", "Xeralis", "ichibaNNN", "SerenityKitty", "Contractz", "WWvvWvvWvvwWwvww", "BlueHole", "SAGANoPause", "Mookiez", "RiotChun", "ValkrinSenpai", "HeXrisen", "CptJack", "Sleepyz", "HurricaneJanna", "ToxiGood", "ItsYourChoice", "TaintedDucky", "probablycoL", "Ina", "FreeGaming", "Phaxen", "tofumanoftruth", "xHeroofChaos", "Rockllee", "Sunohara", "Ryzer", "SpiritDog", "Kazma", "Sjvir", "Maulface", "SombreroGalaxy", "Bebhead", "ecco", "AurionKratos", "RoseByrne", "Kammgefahr", "VwSSandvich", "TDKLouisXGeeGee", "Picarus", "erwinbooze", "xrawrgasm", "Tangularx", "CSauce", "Back2Nexus", "SepekuAW", "Chuuper", "Airtom", "pro711", "Theifz", "SirhcEezy", "LuckyLone56", "AtomicN", "Splorchicken", "00000000", "UpAIlNight", "k3soju", "MikeyC", "s7efen", "FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea", "OMikasaAckermanO", "wompwompwompwomp", "Kiyoon", "LiquidNyjacky", "ATColdblood", "SandPaperX", "0Sleepless", "pr0llylol", "AxelsFinalFlame", "DrSeussGRINCH", "ZENPhooka", "oMizu", "HamSammiches", "Pcboy", "RamenWithCheese", "Yook", "Dafreakz", "Winno", "XxWarDoomxX", "LifelessEyes", "UrekMazin0", "FrenchLady", "Pillowesque", "GodOfZed", "D3cimat3r", "broIy", "1stTimeDraven", "Exxpression", "godofcontrol", "nokappazone", "Shoopufff", "IlIIlIIIlIIIIIII", "Fragnat1c", "Abidius", "irvintaype", "YellOwish", "japanman", "CaristinnQT", "LeithaI", "Kitzuo", "Akatsuki", "ROBERTZEBRONZE", "aenba", "Arcenius", "Torgun", "Ryden7", "Entus", "CutestNeo", "MonkeyDx", "Xerosenkio", "JHHoon", "DeTFMCeros", "Rakinas", "MetaRhyperior", "MegaMilkGG", "EmilyVanCamp", "SecretofMana", "Snidstrat", "SJAero", "Mixture", "Teaz89", "ArizonaGreenTea", "AKASIeepingDAWG", "sh4pa", "Hanjaro", "BestFelixNA", "Dragles", "TummyTuck", "sciberbia", "KLucid", "Isunari", "lAtmospherel", "Zwag", "yuBinstah", "ionz", "Nove", "Nickywu", "BlueRainn", "lilgrim", "Rekeri", "Kaichu", "Arnold", "ArcticPuffin11", "UnholyNirvana", "IREGlNALD"];
	var ChatContent = ["How much snapchat friends can I get?", "Anyone tried this already?", "Does it work in CA?", "Why this is so easy lol?", "This is incredible, never thought it would work.", "I got 280 followers , can't wait to get more.", "This is the beast, I couldn't believe it's gonna work, but works flawless.", "Can someone help me with the offers?", "OMG!", "LOL!", "ROFL!", "Real", "yayyyy finally got my 570 followers", "easy", "bro", "What can I do here?", "Shut up man I love this website", "hi guys", "How much sc followers u made so far?", "what about offers on mobile phone?", "Is this free?", "How long do you have to wait?", "Yea", "No", "I know", "Exactly why this is so good", "uhm", "maybe", "I can't wait anymoreeee", "Is this for real guys?", "Thanks man I appreciate this.", "Cool =)", "<message deleted>", "oh god", "damn", "I love this", "Never imagined this would work but damn its so simple", "saw this on forums pretty impressive", "yo guys dont spam okay?", "anyone up for more views?", "you think this will be patched any time soon", "pretty sure this is saving me a lot of money", "any idea which is better followers or views??", "so happy i found this", "you guys watch nightblue?", "I have seen this website on twitch stream i think", "just wow", "Where do I get my snapchat friends?", "a friend told me about this", "thanks to whoever spams this website lol", "where do i put my snapchat username?", "so far I am cool with this", "can I get for free?", "bye guys", "okay i applied for snapchat views thank you", "how much can you even have", "incredible", "ten minutes", "need to go now", "brb", "You should give it a try", "dont regret being here", "fucking is real", "omg stop asking how to get firneds or views just get one in form", "guys this is so easy, it takes less than a minute", "Can anyone do it for me? My username is brazilpidgey", "PM me pls", "wow sucks noobs haha", "niantic pls", "today is lucky day", "this is the best snapchat free promotion website because we all have more than a chance", "i think everyone here got followers", "when can I get friends I am new to this", "Views for free?", "Do followers expire?", "I got big pack of views for my girlfriend making her happy and i dont pay for them lol", "man servers are always down fuk it", "funny how this works but it does like always", "hi again im here for more views and followers", "i need some friends and views what do i do", "this worked lol", "fuck i have no offers left, had like 1k friends already in my snapchat acc", "where do all of you come from", "nice service for free snapchat boosting", "I was stuck in offer had to do again but it worked then", "thank you for giving me snapchat followers!", "saw on stream yo", "Snapchat followers working fine", "i love snapchat so much", "this makes my game more enjoyable i hope", "thank you all for helping me out bros", "thanks to whoever pmed me it worked", "thank you for messaging me man", "when do you wanna start using it?", "imagine all the people waiting fo this", "any idea if this still works tomorrow", "best views and followers website", "is this twitch chat?", "wow really many people online here", "hi all who has some friends for me", "anyone not here for Facebook lol?", "what was the last snapchat views package", "who is up for a chat hehe?", "i am from EU", "check my profile i am rich", "when is views start men?", "even noobs can do this", "when did you guys start using it wow", "i can only recommend this stuff", "great i can test the views before actually trying it", "can't wait for it to start!", "where do you come from?", "does this giveaway go forever?", "pretty good views signup form guys", "i begin to like this very much. third pack i unlocked", "worth", "ok cool", "i see limits on how many snapchat views you can get thats so epic", "which country are you in guys?", "think so man", "Likely, but I think one day this will fail", "this still works at the moment", "i havent seen this before but im impressed with the result!", "my boyfriend will freak out :D", "nice ", "offers dont appaer every time but i think its there to have enough money for the website to keep it up", "actually i had no problem with any offer ever, just try?", "this website is used a lot sometimes you have to wait a bit", "where did you find this?", "so when will views start?", "ty for the followers and views opt in guys!", "I wish i found this earlier", "i wasted so much money on snapchat lol - good this is free here", "how come i dont see any trolls here", "just dodged queue for this", "any bro needs help?", "i would do screenshot but maybe you report me then", "are there new packages in this update?", "did you try 1000 friends pack yet? I used on NL but maybe other locations can use it too", "trololo Snapchat sucks hahahaha", "i feel like this will be the best! it was starting to get boring lol", "think so", "what you can get views here for free?", "ok sounds good enough for me bros", "anyone reddit here?", "Okay I believe this works cus I just completed and saw my views flow ROFL", "I had a bit trouble with some offers thing but no problem if you just choose an easy", "my friends on facebook spam this like every day they are rly happy about it", "Where do i put my snapchat account", "what?", "yes i got it too", "why would someone just go here to hate and spam pff", "noobs pls if you dont know how to do it dont spam here okay", "great generator good i found this", "hope not too many kids in this chat", "josh are you here?", "unlocking takes some time for me", "derp", "i am curious is this legit?", "Works on iPad?", "had to reload page before it worked", "used this three times and applied for 3 1000 followers packs, lol see you ingame suckers", "i see most people here write positive things it is true?", "hi my english no good i here get views?", "Exactly what I think", "you can have reginalds IQ and still be able to get friends", "when i came first to this website i was like most of you guys just spamming here the chat, in the end im glad that i tried it because now for next year or so i am not leaving my room", "if you want a proof add me on skype", "I thought snapchat is slowly dying, i hope this release will get some snapchatters back", "thank you!", "are you not bored at all? i cant wait for extra views pack", "i am looking for a friend please pm me", "i thought my friend wanted to fool me with this website link. but you can rly get views here if you dont mess up with the offers part", "aasdasdasd", "Ok so I am back and what I can say is that i got my views! I can not do a screenshot cus the chat would block any links meh but rly go try it its worth it", "worth got my views and followers", "i agree", "i am fine with having free views how about you", "what i always disliked is when you get close to release date and they move it even further", "from all websites ive been on this is the first and probably the only one which rly gives you the views", "i have tried too many snapchat services in my life finally i got lucky here ", "yeah free snapchat views is cool", "you like this?", "What you think about all this", "I wants to get sc views from korea", "wow i waited ages to get a server transfer now here it shouldnt be a problem anymore", "lol ProAsh32 is here? you were in my skype! how are you guy", "i checked some of the people accounts here they are actually real humans maybe not all though", "now the secret is solved", "this works for EU snapchat accounts right?", "hey i am a newbie will i be able to use it?", "i signed up, now the waiting starts :/ i hope they will launch sooner", "can i do this with my nexus phone?", "...^^", "fucking hilarious some people", "Views here I come", "wow 10 minutes ago this was empty now all people here wtf", "i dont rly like snapchat go", "god thanks for snapchat go finally", "i can imagine that", "okay", "not sure if i understood? its all free right?", "I would be so sad if this did not work because it took a while, thankfully it worked then", "uhm", "so you can get 1000 friends now?", "i think with this free service snapchat might become somewhat more interesting", "fucking helll! got my 556 views!.", "yayy", "servers i tested this and its working", "i usually choose the first offer in the list because its normally the easiest one", "i think some offers easier in countries like USA", "if you chose an offer make sure to finish it complete or you will not get anything guys!"];
	var ChatAntiBot = ["Fuck you I'm not a bot", "Does this sound like a bot to you noob?", "yeah we're all bots Kappa", "bot? i'm here for spamming this shit lol", "are you stupid or something? they have anti bot protection", "sure bot, 0101010110 lmao xD", "no, we're not bots Kappa"];


	$(document).ready(function() {

		$('#X00ChatContent').niceScroll({
			autohidemode: false
		});
		$('#ascrail2000').show();
		ChatStart();
		ChatLog("Welcome to the chatroom, posting links or spamming will result in a kick.");
		ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], ChatContent[rng(0, ChatContent['length'] - 1)]);
		$('#X00InputChat')['keypress'](function(_0xaa63xc) {
			if (_0xaa63xc['keyCode'] == 13) {
				$('#X00ButtonChat')['click']();
			};
		});
		$('#X00ButtonChat')['click'](function() {
			if (ChatUserName == '') {
				$('#X00ContainerChatUserName')['fadeIn'](250);
				$('.X00OverlaySmall').fadeIn(200);
			} else {
				$msg = $('#X00InputChat')['val']();

				ChatAddEntry('<span>' + ChatUserName + '</span>', $msg);
				$('#X00InputChat')['val']('');
				if ($msg.indexOf("bots") >= 0 || $msg.indexOf("bot") >= 0 || $msg.indexOf("robots") >= 0) {
					setTimeout(function() {
						ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>' + ChatAntiBot[rng(0, ChatAntiBot['length'] - 1)]);
					}, rng(7250, 9300));
				}
				if (!ChatReplied) {
					setTimeout(function() {
						ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  lol stop wasting time and take your free views likes or subs');

						setTimeout(function() {
							ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  is this your first time here? this is like the only legit snapchat site out there');
							setTimeout(function() {
								ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], 'guys dont listen to ' + '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span> ' + ' he just wants all snapchat views for himself haha');

							}, rng(11500, 19500));
						}, rng(6500, 8500));
					}, rng(6000, 9500));
					ChatReplied = true;
				}
			};
		});
		$('#X00ButtonChatUserName')['click'](function() {
			ChatUserName = $('#X00InputChatUserName')['val']();
			$('#X00ContainerChatUserName')['fadeOut'](250, function() {
				$('.X00OverlaySmall').fadeOut(200, function() {
					$('#X00ButtonChat')['click']();
				});
			});
		});


	});

	Date.prototype.getFullMinutes = function() {
		if (this.getMinutes() < 10) {
			return '0' + this.getMinutes();
		}
		return this.getMinutes();
	};

	function rng(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);

	}
	$(function() {

		$('#X00InputComment').focus(function() {
			$('#X00ContainerAdditional').slideDown(500);
		});
	});

	function Random(_0xaa63x2, _0xaa63x3) {
		return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
	};

	function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
		if (_0xaa63x5 == '' || _0xaa63x6 == '') {
			return;
		};
		$('<div class=\"X00ChatEntry\"><span class=\"X00EntryUserName\">[' + ChatDate.getHours() + ':' + ChatDate.getFullMinutes() + ']  ' + _0xaa63x5 + ':</span><span class=\"X00EntryContent\">' + _0xaa63x6 + '</span></div>')['appendTo']('#X00ChatContent')['hide'](0)['fadeIn'](250);
		$('#X00ChatContent')['scrollTop']($('#X00ChatContent')[0]['scrollHeight']);
	};

	function ChatLog(_0xaa63x6) {
		$('<div class=\"X00ChatEntry\"><span class=\"ChatNotification\">' + _0xaa63x6 + '</span></div>')['appendTo']('#X00ChatContent')['hide'](0)['fadeIn'](250);
		$('#X00ChatContent')['scrollTop']($('#X00ChatContent')[0]['scrollHeight']);
	};

	function ChatStart() {
		var _0xaa63x8 = function() {
			setTimeout(function() {
				var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];
				var _0xaa63xa = ChatContent[Random(0, ChatContent['length'] - 1)];
				ChatAddEntry(_0xaa63x9, _0xaa63xa);
				_0xaa63x8();
			}, Random(1000, 15000));
		};
		_0xaa63x8();
	};