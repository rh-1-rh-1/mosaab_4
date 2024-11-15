   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var skillsProgressbar1 = document.querySelector('#skillsProgressbar1 .progress-bar');
      var skillsProgressbar1_observer = new window.ResizeObserver(entries => 
      {
         var val = Math.round(((entries[0].target.clientWidth/entries[0].target.offsetParent.clientWidth)*100));
         entries[0].target.innerText = val + '%';
         entries[0].target.setAttribute('aria-valuenow', val);
      });
      skillsProgressbar1_observer.observe(skillsProgressbar1);
      var skillsProgressbar2 = document.querySelector('#skillsProgressbar2 .progress-bar');
      var skillsProgressbar2_observer = new window.ResizeObserver(entries => 
      {
         var val = Math.round(((entries[0].target.clientWidth/entries[0].target.offsetParent.clientWidth)*100));
         entries[0].target.innerText = val + '%';
         entries[0].target.setAttribute('aria-valuenow', val);
      });
      skillsProgressbar2_observer.observe(skillsProgressbar2);
      var skillsProgressbar3 = document.querySelector('#skillsProgressbar3 .progress-bar');
      var skillsProgressbar3_observer = new window.ResizeObserver(entries => 
      {
         var val = Math.round(((entries[0].target.clientWidth/entries[0].target.offsetParent.clientWidth)*100));
         entries[0].target.innerText = val + '%';
         entries[0].target.setAttribute('aria-valuenow', val);
      });
      skillsProgressbar3_observer.observe(skillsProgressbar3);
      var skillsProgressbar4 = document.querySelector('#skillsProgressbar4 .progress-bar');
      var skillsProgressbar4_observer = new window.ResizeObserver(entries => 
      {
         var val = Math.round(((entries[0].target.clientWidth/entries[0].target.offsetParent.clientWidth)*100));
         entries[0].target.innerText = val + '%';
         entries[0].target.setAttribute('aria-valuenow', val);
      });
      skillsProgressbar4_observer.observe(skillsProgressbar4);
      var cookiePopup = document.querySelector('#cookiePopup');
      var bscookiePopup = new bootstrap.Modal(cookiePopup);
      cookiePopup.addEventListener('show.bs.modal', function(e)
      {
         var dlg = document.querySelector('#cookiePopup .modal-dialog');
         dlg.classList.remove('animate-hide');
         dlg.classList.add('animate-show');
      });
      cookiePopup.addEventListener('hide.bs.modal', function(e)
      {
         var dlg = document.querySelector('#cookiePopup .modal-dialog');
         dlg.classList.remove('animate-show');
         var forceReflow = e.target.offsetWidth;
         dlg.classList.add('animate-hide');
      });
   });
   
   $(document).ready(function()
   {
      $('#reviewsImage1').addClass('visibility-hidden');
      $('#portfolio-image2').addClass('visibility-hidden');
      $('#reviewsImage1').addClass('visibility-hidden');
      $('#portfolio-image2').addClass('visibility-hidden');
      $('#reviewsImage1').addClass('visibility-hidden');
      $('#portfolio-image2').addClass('visibility-hidden');
      $('#reviewsImage1').addClass('visibility-hidden');
      $('#portfolio-image2').addClass('visibility-hidden');
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutQuad');
      });
      $("a[href*='#intro']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_intro').offset().top-68 }, 600, 'easeOutCirc');
      });
      $("a[href*='#skills']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_skills').offset().top-68 }, 600, 'easeOutQuad');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-68 }, 600, 'easeOutQuad');
      });
      function onScrollservices()
      {
         var $obj = $("#wb_services");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('reviewsImage1', 'animate-fade-in-up', 0, 1000);
            AnimateCss('portfolio-image2', 'animate-fade-in-up', 500, 1000);
         }
      }
      onScrollservices();
      $(window).scroll(function(event)
      {
         onScrollservices();
      });
      $("a[href*='#skillsInner']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_skillsInner').offset().top-88 }, 600, 'easeOutCirc');
      });
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      $("a[href*='#servicesLayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_servicesLayoutGrid1').offset().top-68 }, 600, 'easeOutCirc');
      });
      $("a[href*='#servicesLayoutGrid2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_servicesLayoutGrid2').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#facts']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_facts').offset().top-68 }, 600, 'easeOutQuad');
      });
      $("a[href*='#portfolio']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_portfolio').offset().top-68 }, 600, 'easeOutQuad');
      });
      function onScrollportfolio()
      {
         var $obj = $("#wb_portfolio");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('reviewsImage1', 'animate-fade-in-up', 0, 1000);
            AnimateCss('portfolio-image2', 'animate-fade-in-up', 500, 1000);
         }
      }
      onScrollportfolio();
      $(window).scroll(function(event)
      {
         onScrollportfolio();
      });
      $("a[href*='#portfolioLayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_portfolioLayoutGrid1').offset().top-88 }, 600, 'easeOutCirc');
      });
      function onScrollportfolioLayoutGrid1()
      {
         var $obj = $("#wb_portfolioLayoutGrid1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('reviewsImage1', 'animate-fade-in-up', 0, 1000);
            AnimateCss('portfolio-image2', 'animate-fade-in-up', 500, 1000);
         }
      }
      onScrollportfolioLayoutGrid1();
      $(window).scroll(function(event)
      {
         onScrollportfolioLayoutGrid1();
      });
      $("a[href*='#portfolioLayoutGrid2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_portfolioLayoutGrid2').offset().top-88 }, 600, 'easeOutCirc');
      });
      function onScrollportfolioLayoutGrid2()
      {
         var $obj = $("#wb_portfolioLayoutGrid2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('reviewsImage1', 'animate-fade-in-up', 0, 1000);
            AnimateCss('portfolio-image2', 'animate-fade-in-up', 500, 1000);
         }
      }
      onScrollportfolioLayoutGrid2();
      $(window).scroll(function(event)
      {
         onScrollportfolioLayoutGrid2();
      });
      function aspectRatioportfolioRollOverText1()
      {
         var $obj = $("#portfolioRollOverText1");
         var height = $obj.width() / 1.38;
         if (height == 0)
         {
            setTimeout(function(){ aspectRatioportfolioRollOverText1() }, 250);
         }
         else
         {
            $obj.css('height', height + 'px');
         }
      }
      $(window).resize(function()
      {
         aspectRatioportfolioRollOverText1();
      });
      aspectRatioportfolioRollOverText1();
      function aspectRatioportfolioRollOverText2()
      {
         var $obj = $("#portfolioRollOverText2");
         var height = $obj.width() / 1.38;
         if (height == 0)
         {
            setTimeout(function(){ aspectRatioportfolioRollOverText2() }, 250);
         }
         else
         {
            $obj.css('height', height + 'px');
         }
      }
      $(window).resize(function()
      {
         aspectRatioportfolioRollOverText2();
      });
      aspectRatioportfolioRollOverText2();
      function aspectRatioportfolioRollOverText3()
      {
         var $obj = $("#portfolioRollOverText3");
         var height = $obj.width() / 1.38;
         if (height == 0)
         {
            setTimeout(function(){ aspectRatioportfolioRollOverText3() }, 250);
         }
         else
         {
            $obj.css('height', height + 'px');
         }
      }
      $(window).resize(function()
      {
         aspectRatioportfolioRollOverText3();
      });
      aspectRatioportfolioRollOverText3();
   function countUpfactsJavaScript1()
   {
      var $obj = $('#factsJavaScript1');
      var count = $obj.attr('data-count');
      var bottomObj = $obj.offset().top + $obj.outerHeight();
      var bottomWnd = $(window).scrollTop() + $(window).height();
      if (bottomWnd > bottomObj && count != 0)
      {
         $({countUp: $obj.text()}).animate({countUp: count},
         {
            duration: 4000,
            step: function() { $obj.text(Math.floor(this.countUp)); },
            complete: function() { $obj.text(this.countUp); $obj.attr('data-count', 0); }
         });  
      }
   }
   $(window).scroll( function()
   {
      countUpfactsJavaScript1();
   });
   countUpfactsJavaScript1();
   function countUpfactsJavaScript2()
   {
      var $obj = $('#factsJavaScript2');
      var count = $obj.attr('data-count');
      var bottomObj = $obj.offset().top + $obj.outerHeight();
      var bottomWnd = $(window).scrollTop() + $(window).height();
      if (bottomWnd > bottomObj && count != 0)
      {
         $({countUp: $obj.text()}).animate({countUp: count},
         {
            duration: 4000,
            step: function() { $obj.text(Math.floor(this.countUp)); },
            complete: function() { $obj.text(this.countUp); $obj.attr('data-count', 0); }
         });  
      }
   }
   $(window).scroll( function()
   {
      countUpfactsJavaScript2();
   });
   countUpfactsJavaScript2();
   function countUpfactsJavaScript3()
   {
      var $obj = $('#factsJavaScript3');
      var count = $obj.attr('data-count');
      var bottomObj = $obj.offset().top + $obj.outerHeight();
      var bottomWnd = $(window).scrollTop() + $(window).height();
      if (bottomWnd > bottomObj && count != 0)
      {
         $({countUp: $obj.text()}).animate({countUp: count},
         {
            duration: 4000,
            step: function() { $obj.text(Math.floor(this.countUp)); },
            complete: function() { $obj.text(this.countUp); $obj.attr('data-count', 0); }
         });  
      }
   }
   $(window).scroll( function()
   {
      countUpfactsJavaScript3();
   });
   countUpfactsJavaScript3();
   function countUpfactsJavaScript4()
   {
      var $obj = $('#factsJavaScript4');
      var count = $obj.attr('data-count');
      var bottomObj = $obj.offset().top + $obj.outerHeight();
      var bottomWnd = $(window).scrollTop() + $(window).height();
      if (bottomWnd > bottomObj && count != 0)
      {
         $({countUp: $obj.text()}).animate({countUp: count},
         {
            duration: 10000,
            step: function() { $obj.text(Math.floor(this.countUp)); },
            complete: function() { $obj.text(this.countUp); $obj.attr('data-count', 0); }
         });  
      }
   }
   $(window).scroll( function()
   {
      countUpfactsJavaScript4();
   });
   countUpfactsJavaScript4();
      $("a[href*='#contact']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top-68 }, 600, 'easeOutQuad');
      });
      $("a[href*='#contactForm']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_contactForm').offset().top-88 }, 600, 'easeOutCirc');
      });
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_facts,#wb_contact').css('background-attachment', 'scroll');
      }
   });
   
   $(document).ready(function()
   {
      var $progressbars = $('.ui-progressbar');
      
      $progressbars.each(function() 
      {
        var $obj = $(this);
        $obj.data('value', $obj.progressbar('option', 'value'));
        $obj.data('done', false);
        $obj.progressbar('option', 'value', 0);
      });
      $(window).bind('scroll', function() 
      {
         $progressbars.each(function() 
         {
            var $obj = $(this);
            if (!$obj.data('done') && $(window).scrollTop() + $(window).height() >= $obj.offset().top) 
            {
               $obj.data('done', true);
               $obj.animate({scroll: 1}, 
               { 
                  duration: 3000, 
                  step: function(now) 
                  {
                     var $obj = $(this);
                     var val = Math.round($obj.data('value') * now);
                     $obj.progressbar('option', 'value', val);
                  }
               });
            }
         });
      }).triggerHandler('scroll');
   });
   
   $(document).ready(function () 
   {
       if (document.cookie.indexOf("cookienotice=true")<0) 
       {
           $("#cookiePopup").modal("show");
       }
       $("#cookieCheckBox").change(function () 
       {
          document.cookie = "cookienotice=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";    
          $("#cookiePopup").modal("hide");
       });
      
   });
