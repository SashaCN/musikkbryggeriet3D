let activePopup,screenWidth=document.body.getBoundingClientRect().width,profile=document.querySelector(".profile"),profileMenu=document.querySelector(".sing-menu"),burger=document.querySelector(".burger"),burgerMenu=document.querySelector(".header-menu"),menuLine=document.querySelector(".adaptive-header-line"),lineHS=document.querySelector(".photos"),arrLeftHS=document.querySelector(".arrow-left"),arrRightHS=document.querySelector(".arrow-right"),imgHS=document.querySelectorAll(".header-slider-img"),imgWidthHS=imgHS[0].getBoundingClientRect().width,widthHS=Math.round(lineHS.getBoundingClientRect().width),lineAUS=document.querySelector(".events-line"),arrLeftAUS=document.querySelector(".arrow-left-aus"),arrRightAUS=document.querySelector(".arrow-right-aus"),events=document.querySelectorAll(".event"),eventWidthAUS=events[0].getBoundingClientRect().width+30,widthAUS=Math.round(lineAUS.getBoundingClientRect().width),lineGS=document.querySelector(".gallery-line"),arrLeftGS=document.querySelector(".arrow-left-gallery"),arrRightGS=document.querySelector(".arrow-right-gallery"),pictures=document.querySelectorAll(".scrolled-picture"),pictureWidthGS=pictures[0].getBoundingClientRect().width+12,widthGS=Math.round(lineGS.getBoundingClientRect().width),lineSPS=document.querySelector(".sponsor"),arrLeftSPS=document.querySelector(".arrow-left-sp"),arrRightSPS=document.querySelector(".arrow-right-sp"),sponsors=document.querySelectorAll(".sponsor-img-wrap"),sponsorWidthSPS=sponsors[0].getBoundingClientRect().width,widthSPS=Math.round(lineSPS.getBoundingClientRect().width),lineSS=document.querySelector(".shop-products"),arrLeftSS=document.querySelector(".arrow-left-shop"),arrRightSS=document.querySelector(".arrow-right-shop"),products=document.querySelectorAll(".shop-product"),productWidthSS=products[0].getBoundingClientRect().width+30,widthSS=Math.round(lineSS.getBoundingClientRect().width),popupBg=document.querySelector(".popup-bg"),singUpButton=document.querySelectorAll(".sing-up-button"),singUpPopup=document.querySelector(".sing-up"),singInButton=document.querySelectorAll(".sing-in-button"),singInPopup=document.querySelector(".sing-in"),forgotPasswordButton=document.querySelector(".forgot-password-button"),forgotPasswordPopup=document.querySelector(".forgot-password"),printerButton=document.querySelector(".service-3d-printer"),printerPopup=document.querySelector(".printer-popup"),sittingButton=document.querySelector(".service-sitting"),sittingPopup=document.querySelector(".sittig-popup"),wifiButton=document.querySelector(".service-wifi"),wifiPopup=document.querySelector(".wifi-popup"),printButton=document.querySelector(".service-print"),printPopup=document.querySelector(".print-popup"),microwaveButton=document.querySelector(".service-microwave"),microwavePopup=document.querySelector(".microwave-popup"),basketButton=document.querySelector(".basket"),basketPopup=document.querySelector(".basket-popup"),closeButtons=document.querySelectorAll(".close"),orderProducts=document.querySelectorAll(".product"),productPlus=document.querySelectorAll(".product-plus"),productMinus=document.querySelectorAll(".product-minus"),productQuantify=document.querySelectorAll(".product-quantify"),productPrice=document.querySelectorAll(".product-price"),deleteProduct=document.querySelectorAll(".delete-product"),productOrderInfo=document.querySelectorAll(".product-order-info");function menu(){"false"==burger.getAttribute("data-active-check")?(burger.dataset.activeCheck="true",menuLine.classList.add("burger-menu-active"),burgerMenu.style.display="block"):"true"==burger.getAttribute("data-active-check")&&(burger.dataset.activeCheck="false",menuLine.classList.remove("burger-menu-active"),burgerMenu.style.display="none",burgerMenu.removeAttribute("style"))}function leftHS(e){e.preventDefault(),widthHS=Math.floor(widthHS),0==lineHS.scrollLeft?lineHS.scroll(lineHS.scrollWidth,0):lineHS.scroll(lineHS.scrollLeft-imgWidthHS,0)}function rightHS(e){e.preventDefault(),widthHS=Math.floor(widthHS),Math.round(lineHS.scrollLeft)-10<=lineHS.scrollWidth-widthHS&&Math.round(lineHS.scrollLeft)+10>=lineHS.scrollWidth-widthHS?lineHS.scroll(0,0):lineHS.scroll(lineHS.scrollLeft+=imgWidthHS,0)}function falseS(){return!1}function leftAUS(e){e.preventDefault(),0==lineAUS.scrollLeft?lineAUS.scroll(lineAUS.scrollWidth,0):lineAUS.scroll(lineAUS.scrollLeft-eventWidthAUS,0)}function rightAUS(e){e.preventDefault(),Math.round(lineAUS.scrollLeft)-10<=lineAUS.scrollWidth-widthAUS&&Math.round(lineAUS.scrollLeft)+10>=lineAUS.scrollWidth-widthAUS?lineAUS.scroll(0,0):lineAUS.scroll(lineAUS.scrollLeft+=eventWidthAUS,0)}function leftGS(e){e.preventDefault(),0==lineGS.scrollLeft?lineGS.scroll(lineGS.scrollWidth,0):lineGS.scroll(lineGS.scrollLeft-pictureWidthGS,0)}function rightGS(e){e.preventDefault(),Math.round(lineGS.scrollLeft)-10<=lineGS.scrollWidth-widthGS&&Math.round(lineGS.scrollLeft)+10>=lineGS.scrollWidth-widthGS?lineGS.scroll(0,0):lineGS.scroll(lineGS.scrollLeft+=pictureWidthGS,0)}function leftSPS(e){e.preventDefault(),0==lineSPS.scrollLeft?lineSPS.scroll(lineSPS.scrollWidth,0):lineSPS.scroll(lineSPS.scrollLeft-2*sponsorWidthSPS,0)}function rightSPS(e){e.preventDefault(),Math.round(lineSPS.scrollLeft)-10<=lineSPS.scrollWidth-widthSPS&&Math.round(lineSPS.scrollLeft)+10>=lineSPS.scrollWidth-widthSPS?lineSPS.scroll(0,0):lineSPS.scroll(lineSPS.scrollLeft+=2*sponsorWidthSPS,0)}function leftSS(e){e.preventDefault(),0==lineSS.scrollLeft?lineSS.scroll(lineSS.scrollWidth,0):lineSS.scroll(lineSS.scrollLeft-productWidthSS,0)}function rightSS(e){e.preventDefault(),Math.round(lineSS.scrollLeft)-10<=lineSS.scrollWidth-widthSS&&Math.round(lineSS.scrollLeft)+10>=lineSS.scrollWidth-widthSS?lineSS.scroll(0,0):lineSS.scroll(lineSS.scrollLeft+=productWidthSS,0)}function closePopup(){activePopup.classList.remove("active-popup"),popupBg.style.display="none"}function checkActivePopup(){null!=activePopup&&activePopup.classList.remove("active-popup")}function checkClick(e){e.target==popupBg&&(popupBg.style.display="none",activePopup.classList.remove("active-popup"))}function singUpOpen(e){e.preventDefault(),checkActivePopup(),singUpPopup.classList.add("active-popup"),popupBg.style.display="block",activePopup=document.querySelector(".active-popup"),popupBg.onclick=checkClick}function singInOpen(e){e.preventDefault(),checkActivePopup(),singInPopup.classList.add("active-popup"),popupBg.style.display="block",activePopup=document.querySelector(".active-popup"),popupBg.onclick=checkClick}function forgotPasswordOpen(e){e.preventDefault(),checkActivePopup(),forgotPasswordPopup.classList.add("active-popup"),popupBg.style.display="block",activePopup=document.querySelector(".active-popup"),popupBg.onclick=checkClick}function printerOpen(e){e.preventDefault(),checkActivePopup(),printerPopup.classList.add("active-popup"),popupBg.style.display="block",activePopup=document.querySelector(".active-popup"),popupBg.onclick=checkClick}function sittingOpen(e){e.preventDefault(),checkActivePopup(),sittingPopup.classList.add("active-popup"),popupBg.style.display="block",activePopup=document.querySelector(".active-popup"),popupBg.onclick=checkClick}function wifiOpen(e){e.preventDefault(),checkActivePopup(),wifiPopup.classList.add("active-popup"),popupBg.style.display="block",activePopup=document.querySelector(".active-popup"),popupBg.onclick=checkClick}function printOpen(e){e.preventDefault(),checkActivePopup(),printPopup.classList.add("active-popup"),popupBg.style.display="block",activePopup=document.querySelector(".active-popup"),popupBg.onclick=checkClick}function microwaveOpen(e){e.preventDefault(),checkActivePopup(),microwavePopup.classList.add("active-popup"),popupBg.style.display="block",activePopup=document.querySelector(".active-popup"),popupBg.onclick=checkClick}function basketOpen(e){e.preventDefault(),checkActivePopup(),basketPopup.classList.add("active-popup"),popupBg.style.display="block",activePopup=document.querySelector(".active-popup"),popupBg.onclick=checkClick}for(burger.dataset.activeCheck="false",burger.onclick=menu,profile.onclick=e=>{e.preventDefault(),profile.classList.contains("profile-menu-active")?(profile.classList.remove("profile-menu-active"),profileMenu.style.display="none"):(profile.classList.add("profile-menu-active"),profileMenu.style.display="flex")},arrLeftHS.onclick=leftHS,arrRightHS.onclick=rightHS,arrLeftHS.ondblclick=falseS,arrRightHS.ondblclick=falseS,arrLeftAUS.onclick=leftAUS,arrRightAUS.onclick=rightAUS,arrLeftAUS.ondblclick=falseS,arrRightAUS.ondblclick=falseS,arrLeftGS.onclick=leftGS,arrRightGS.onclick=rightGS,arrLeftGS.ondblclick=falseS,arrRightGS.ondblclick=falseS,arrLeftSPS.onclick=leftSPS,arrRightSPS.onclick=rightSPS,arrLeftSPS.ondblclick=falseS,arrRightSPS.ondblclick=falseS,arrLeftSS.onclick=leftSS,arrRightSS.onclick=rightSS,arrLeftSS.ondblclick=falseS,arrRightSS.ondblclick=falseS,closeButtons.forEach(e=>{e.onclick=closePopup}),singUpButton.forEach(e=>{e.onclick=singUpOpen}),singInButton.forEach(e=>{e.onclick=singInOpen}),forgotPasswordButton.onclick=forgotPasswordOpen,printerButton.onclick=printerOpen,sittingButton.onclick=sittingOpen,wifiButton.onclick=wifiOpen,printButton.onclick=printOpen,microwaveButton.onclick=microwaveOpen,basketButton.onclick=basketOpen,i=0;i<orderProducts.length;i++)orderProducts[i].dataset.productNumber=i,productOrderInfo[i].dataset.productNumber=i;function prMinus(e){e.preventDefault(),console.log(this.nextElementSibling.children.value),this.nextElementSibling.children.value=this.nextElementSibling.children.value-1}for(productMinus.forEach(e=>{e.onclick=prMinus}),i=0;i<productPlus.length;i++)productPlus[i].onclick=e=>{e.preventDefault();let t=e.target.toString;console.log(t)};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsiYWN0aXZlUG9wdXAiLCJzY3JlZW5XaWR0aCIsImRvY3VtZW50IiwiYm9keSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwicHJvZmlsZSIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9maWxlTWVudSIsImJ1cmdlciIsImJ1cmdlck1lbnUiLCJtZW51TGluZSIsImxpbmVIUyIsImFyckxlZnRIUyIsImFyclJpZ2h0SFMiLCJpbWdIUyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbWdXaWR0aEhTIiwid2lkdGhIUyIsIk1hdGgiLCJyb3VuZCIsImxpbmVBVVMiLCJhcnJMZWZ0QVVTIiwiYXJyUmlnaHRBVVMiLCJldmVudHMiLCJldmVudFdpZHRoQVVTIiwid2lkdGhBVVMiLCJsaW5lR1MiLCJhcnJMZWZ0R1MiLCJhcnJSaWdodEdTIiwicGljdHVyZXMiLCJwaWN0dXJlV2lkdGhHUyIsIndpZHRoR1MiLCJsaW5lU1BTIiwiYXJyTGVmdFNQUyIsImFyclJpZ2h0U1BTIiwic3BvbnNvcnMiLCJzcG9uc29yV2lkdGhTUFMiLCJ3aWR0aFNQUyIsImxpbmVTUyIsImFyckxlZnRTUyIsImFyclJpZ2h0U1MiLCJwcm9kdWN0cyIsInByb2R1Y3RXaWR0aFNTIiwid2lkdGhTUyIsInBvcHVwQmciLCJzaW5nVXBCdXR0b24iLCJzaW5nVXBQb3B1cCIsInNpbmdJbkJ1dHRvbiIsInNpbmdJblBvcHVwIiwiZm9yZ290UGFzc3dvcmRCdXR0b24iLCJmb3Jnb3RQYXNzd29yZFBvcHVwIiwicHJpbnRlckJ1dHRvbiIsInByaW50ZXJQb3B1cCIsInNpdHRpbmdCdXR0b24iLCJzaXR0aW5nUG9wdXAiLCJ3aWZpQnV0dG9uIiwid2lmaVBvcHVwIiwicHJpbnRCdXR0b24iLCJwcmludFBvcHVwIiwibWljcm93YXZlQnV0dG9uIiwibWljcm93YXZlUG9wdXAiLCJiYXNrZXRCdXR0b24iLCJiYXNrZXRQb3B1cCIsImNsb3NlQnV0dG9ucyIsIm9yZGVyUHJvZHVjdHMiLCJwcm9kdWN0UGx1cyIsInByb2R1Y3RNaW51cyIsInByb2R1Y3RRdWFudGlmeSIsInByb2R1Y3RQcmljZSIsImRlbGV0ZVByb2R1Y3QiLCJwcm9kdWN0T3JkZXJJbmZvIiwibWVudSIsImdldEF0dHJpYnV0ZSIsImRhdGFzZXQiLCJhY3RpdmVDaGVjayIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImxlZnRIUyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmbG9vciIsInNjcm9sbExlZnQiLCJzY3JvbGwiLCJzY3JvbGxXaWR0aCIsInJpZ2h0SFMiLCJmYWxzZVMiLCJsZWZ0QVVTIiwicmlnaHRBVVMiLCJsZWZ0R1MiLCJyaWdodEdTIiwibGVmdFNQUyIsInJpZ2h0U1BTIiwibGVmdFNTIiwicmlnaHRTUyIsImNsb3NlUG9wdXAiLCJjaGVja0FjdGl2ZVBvcHVwIiwidW5kZWZpbmVkIiwiY2hlY2tDbGljayIsImUiLCJ0YXJnZXQiLCJzaW5nVXBPcGVuIiwib25jbGljayIsInNpbmdJbk9wZW4iLCJmb3Jnb3RQYXNzd29yZE9wZW4iLCJwcmludGVyT3BlbiIsInNpdHRpbmdPcGVuIiwid2lmaU9wZW4iLCJwcmludE9wZW4iLCJtaWNyb3dhdmVPcGVuIiwiYmFza2V0T3BlbiIsImNvbnRhaW5zIiwib25kYmxjbGljayIsImZvckVhY2giLCJlbGVtZW50IiwiZWxlbSIsImkiLCJsZW5ndGgiLCJwcm9kdWN0TnVtYmVyIiwicHJNaW51cyIsImNvbnNvbGUiLCJsb2ciLCJ0aGlzIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsInBlcmVtZW5hIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLElBZ0VJQSxZQWhFQUMsWUFBY0MsU0FBU0MsS0FBS0Msd0JBQXdCQyxNQUVwREMsUUFBVUosU0FBU0ssY0FBYyxZQUNqQ0MsWUFBY04sU0FBU0ssY0FBYyxjQUVyQ0UsT0FBU1AsU0FB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S0FBS0MsbUJBQW1CQyxTQUFTQyxPQUM3Q0gsS0FBS0MsbUJBQW1CQyxTQUFTQyxNQUFRSCxLQUFLQyxtQkFBbUJDLFNBQVNDLE1BQVEsRUFHcEYsSUFWQTlELGFBQWFrRCxRQUFTRSxJQUNwQkEsRUFBS2IsUUFBVWlCLFVBU2JILEVBQUksRUFBR0EsRUFBSXRELFlBQVl1RCxPQUFRRCxJQUNqQ3RELFlBQVlzRCxHQUFHZCxRQUFXdkIsSUFDeEJBLEVBQU1DLGlCQUNOLElBQUk4QyxFQUFXL0MsRUFBTXFCLE9BQU8yQixTQUM1QlAsUUFBUUMsSUFBSUsiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBzY3JlZW5XaWR0aCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsICAgICAgLy9zY3JlZW4gd2lkdGggZm9yIGFkYXB0aXZlXHJcbiAgICAvL3Byb2ZpbGVcclxuICAgIHByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVcIiksXHJcbiAgICBwcm9maWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2luZy1tZW51XCIpLFxyXG4gICAgLy9idXJnZXIgbWVudVxyXG4gICAgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIiksXHJcbiAgICBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItbWVudVwiKSxcclxuICAgIG1lbnVMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGFwdGl2ZS1oZWFkZXItbGluZVwiKSxcclxuICAgIC8vaGVhZGVyIHNsaWRlciAoSFMpXHJcbiAgICBsaW5lSFMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3Rvc1wiKSxcclxuICAgIGFyckxlZnRIUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3ctbGVmdFwiKSxcclxuICAgIGFyclJpZ2h0SFMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycm93LXJpZ2h0XCIpLFxyXG4gICAgaW1nSFMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlci1zbGlkZXItaW1nXCIpLFxyXG4gICAgaW1nV2lkdGhIUyA9IGltZ0hTWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxyXG4gICAgd2lkdGhIUyA9IE1hdGgucm91bmQobGluZUhTLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSxcclxuICAgIC8vYWJvdXQgdXMgc2xpZGVyIChBVVMpXHJcbiAgICBsaW5lQVVTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldmVudHMtbGluZVwiKSxcclxuICAgIGFyckxlZnRBVVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycm93LWxlZnQtYXVzXCIpLFxyXG4gICAgYXJyUmlnaHRBVVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycm93LXJpZ2h0LWF1c1wiKSxcclxuICAgIGV2ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXZlbnRcIiksXHJcbiAgICBldmVudFdpZHRoQVVTID0gZXZlbnRzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgMzAsXHJcbiAgICB3aWR0aEFVUyA9IE1hdGgucm91bmQobGluZUFVUy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCksXHJcbiAgICAvL2dhbGxlcnkgc2xpZGVyIChHUylcclxuICAgIGxpbmVHUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeS1saW5lXCIpLFxyXG4gICAgYXJyTGVmdEdTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnJvdy1sZWZ0LWdhbGxlcnlcIiksXHJcbiAgICBhcnJSaWdodEdTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnJvdy1yaWdodC1nYWxsZXJ5XCIpLFxyXG4gICAgcGljdHVyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNjcm9sbGVkLXBpY3R1cmVcIiksXHJcbiAgICBwaWN0dXJlV2lkdGhHUyA9IHBpY3R1cmVzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgMTIsXHJcbiAgICB3aWR0aEdTID0gTWF0aC5yb3VuZChsaW5lR1MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpLFxyXG4gICAgLy9zcG9uc29yIHNsaWRlciAoU1BTKVxyXG4gICAgbGluZVNQUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BvbnNvclwiKSxcclxuICAgIGFyckxlZnRTUFMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycm93LWxlZnQtc3BcIiksXHJcbiAgICBhcnJSaWdodFNQUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3ctcmlnaHQtc3BcIiksXHJcbiAgICBzcG9uc29ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3BvbnNvci1pbWctd3JhcFwiKSxcclxuICAgIHNwb25zb3JXaWR0aFNQUyA9IHNwb25zb3JzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxyXG4gICAgd2lkdGhTUFMgPSBNYXRoLnJvdW5kKGxpbmVTUFMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpLFxyXG4gICAgLy9zaG9wIHNsaWRlciAoU1MpXHJcbiAgICBsaW5lU1MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3AtcHJvZHVjdHNcIiksXHJcbiAgICBhcnJMZWZ0U1MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycm93LWxlZnQtc2hvcFwiKSxcclxuICAgIGFyclJpZ2h0U1MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycm93LXJpZ2h0LXNob3BcIiksXHJcbiAgICBwcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvcC1wcm9kdWN0XCIpLFxyXG4gICAgcHJvZHVjdFdpZHRoU1MgPSBwcm9kdWN0c1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArIDMwLFxyXG4gICAgd2lkdGhTUyA9IE1hdGgucm91bmQobGluZVNTLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSxcclxuICAgIC8vcG9wdXBzIFxyXG4gICAgcG9wdXBCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtYmdcIiksXHJcbiAgICBzaW5nVXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpbmctdXAtYnV0dG9uXCIpLFxyXG4gICAgc2luZ1VwUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpbmctdXBcIiksXHJcbiAgICBzaW5nSW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpbmctaW4tYnV0dG9uXCIpLFxyXG4gICAgc2luZ0luUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpbmctaW5cIiksXHJcbiAgICBmb3Jnb3RQYXNzd29yZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZ290LXBhc3N3b3JkLWJ1dHRvblwiKSxcclxuICAgIGZvcmdvdFBhc3N3b3JkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmdvdC1wYXNzd29yZFwiKSxcclxuICAgIHByaW50ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlcnZpY2UtM2QtcHJpbnRlclwiKSxcclxuICAgIHByaW50ZXJQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbnRlci1wb3B1cFwiKSxcclxuICAgIHNpdHRpbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlcnZpY2Utc2l0dGluZ1wiKSxcclxuICAgIHNpdHRpbmdQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2l0dGlnLXBvcHVwXCIpLFxyXG4gICAgd2lmaUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VydmljZS13aWZpXCIpLFxyXG4gICAgd2lmaVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aWZpLXBvcHVwXCIpLFxyXG4gICAgcHJpbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlcnZpY2UtcHJpbnRcIiksXHJcbiAgICBwcmludFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmludC1wb3B1cFwiKSxcclxuICAgIG1pY3Jvd2F2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VydmljZS1taWNyb3dhdmVcIiksXHJcbiAgICBtaWNyb3dhdmVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWljcm93YXZlLXBvcHVwXCIpLFxyXG4gICAgYmFza2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRcIiksXHJcbiAgICBiYXNrZXRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0LXBvcHVwXCIpLFxyXG4gICAgY2xvc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jbG9zZVwiKSxcclxuICAgIGFjdGl2ZVBvcHVwLFxyXG4gICAgLy9vcmRlciBtZW51XHJcbiAgICBvcmRlclByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0XCIpLFxyXG4gICAgcHJvZHVjdFBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2R1Y3QtcGx1c1wiKSxcclxuICAgIHByb2R1Y3RNaW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdC1taW51c1wiKSxcclxuICAgIHByb2R1Y3RRdWFudGlmeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdC1xdWFudGlmeVwiKSxcclxuICAgIHByb2R1Y3RQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdC1wcmljZVwiKSxcclxuICAgIGRlbGV0ZVByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS1wcm9kdWN0XCIpLFxyXG4gICAgcHJvZHVjdE9yZGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdC1vcmRlci1pbmZvXCIpXHJcblxyXG5idXJnZXIuZGF0YXNldC5hY3RpdmVDaGVjayA9IFwiZmFsc2VcIlxyXG5cclxuYnVyZ2VyLm9uY2xpY2sgPSBtZW51XHJcblxyXG5mdW5jdGlvbiBtZW51ICgpe1xyXG4gIGlmKGJ1cmdlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGl2ZS1jaGVja1wiKSA9PSBcImZhbHNlXCIpe1xyXG4gICAgYnVyZ2VyLmRhdGFzZXQuYWN0aXZlQ2hlY2sgPSBcInRydWVcIlxyXG4gICAgbWVudUxpbmUuY2xhc3NMaXN0LmFkZChcImJ1cmdlci1tZW51LWFjdGl2ZVwiKVxyXG4gICAgYnVyZ2VyTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgfWVsc2UgaWYoYnVyZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0aXZlLWNoZWNrXCIpID09IFwidHJ1ZVwiKXtcclxuICAgIGJ1cmdlci5kYXRhc2V0LmFjdGl2ZUNoZWNrID0gXCJmYWxzZVwiXHJcbiAgICBtZW51TGluZS5jbGFzc0xpc3QucmVtb3ZlKFwiYnVyZ2VyLW1lbnUtYWN0aXZlXCIpXHJcbiAgICBidXJnZXJNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgYnVyZ2VyTWVudS5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKVxyXG4gIH1cclxufSBcclxuXHJcbnByb2ZpbGUub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBpZihwcm9maWxlLmNsYXNzTGlzdC5jb250YWlucyhcInByb2ZpbGUtbWVudS1hY3RpdmVcIikpe1xyXG4gICAgcHJvZmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS1tZW51LWFjdGl2ZVwiKVxyXG4gICAgcHJvZmlsZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgfWVsc2V7XHJcbiAgICBwcm9maWxlLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLW1lbnUtYWN0aXZlXCIpXHJcbiAgICBwcm9maWxlTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcclxuICB9XHJcbn1cclxuXHJcbi8vaGVhZGVyIHNsaWRlciAoSFMpXHJcblxyXG5hcnJMZWZ0SFMub25jbGljayA9IGxlZnRIU1xyXG5hcnJSaWdodEhTLm9uY2xpY2sgPSByaWdodEhTXHJcbmFyckxlZnRIUy5vbmRibGNsaWNrID0gZmFsc2VTXHJcbmFyclJpZ2h0SFMub25kYmxjbGljayA9IGZhbHNlU1xyXG5cclxuZnVuY3Rpb24gbGVmdEhTIChldmVudCl7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIHdpZHRoSFMgPSBNYXRoLmZsb29yKHdpZHRoSFMpXHJcbiAgaWYobGluZUhTLnNjcm9sbExlZnQgPT0gMCl7XHJcbiAgICBsaW5lSFMuc2Nyb2xsKGxpbmVIUy5zY3JvbGxXaWR0aCwgMClcclxuICB9ZWxzZXtcclxuICAgIGxpbmVIUy5zY3JvbGwobGluZUhTLnNjcm9sbExlZnQtaW1nV2lkdGhIUywgMClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJpZ2h0SFMgKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgd2lkdGhIUyA9IE1hdGguZmxvb3Iod2lkdGhIUylcclxuICBpZihNYXRoLnJvdW5kKGxpbmVIUy5zY3JvbGxMZWZ0KS0xMCA8PSBsaW5lSFMuc2Nyb2xsV2lkdGggLSB3aWR0aEhTICYmIE1hdGgucm91bmQobGluZUhTLnNjcm9sbExlZnQpKzEwID49IGxpbmVIUy5zY3JvbGxXaWR0aCAtIHdpZHRoSFMpe1xyXG4gICAgbGluZUhTLnNjcm9sbCgwLCAwKVxyXG4gIH1lbHNle1xyXG4gICAgbGluZUhTLnNjcm9sbChsaW5lSFMuc2Nyb2xsTGVmdCs9aW1nV2lkdGhIUywgMClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZhbHNlUyAoKXtcclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8vYWJvdXQgdXMgc2xpZGVyIChBVVMpXHJcblxyXG5hcnJMZWZ0QVVTLm9uY2xpY2sgPSBsZWZ0QVVTXHJcbmFyclJpZ2h0QVVTLm9uY2xpY2sgPSByaWdodEFVU1xyXG5hcnJMZWZ0QVVTLm9uZGJsY2xpY2sgPSBmYWxzZVNcclxuYXJyUmlnaHRBVVMub25kYmxjbGljayA9IGZhbHNlU1xyXG5cclxuZnVuY3Rpb24gbGVmdEFVUyAoZXZlbnQpe1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBpZihsaW5lQVVTLnNjcm9sbExlZnQgPT0gMCl7XHJcbiAgICBsaW5lQVVTLnNjcm9sbChsaW5lQVVTLnNjcm9sbFdpZHRoLCAwKVxyXG4gIH1lbHNle1xyXG4gICAgbGluZUFVUy5zY3JvbGwobGluZUFVUy5zY3JvbGxMZWZ0LWV2ZW50V2lkdGhBVVMsIDApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByaWdodEFVUyAoZXZlbnQpe1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBpZihNYXRoLnJvdW5kKGxpbmVBVVMuc2Nyb2xsTGVmdCktMTAgPD0gbGluZUFVUy5zY3JvbGxXaWR0aCAtIHdpZHRoQVVTICYmIE1hdGgucm91bmQobGluZUFVUy5zY3JvbGxMZWZ0KSsxMCA+PSBsaW5lQVVTLnNjcm9sbFdpZHRoIC0gd2lkdGhBVVMpe1xyXG4gICAgbGluZUFVUy5zY3JvbGwoMCwgMClcclxuICB9ZWxzZXtcclxuICAgIGxpbmVBVVMuc2Nyb2xsKGxpbmVBVVMuc2Nyb2xsTGVmdCs9ZXZlbnRXaWR0aEFVUywgMClcclxuICB9XHJcbn1cclxuXHJcbi8vZ2FsbGVyeSBzbGlkZXIgKEdTKVxyXG5cclxuYXJyTGVmdEdTLm9uY2xpY2sgPSBsZWZ0R1NcclxuYXJyUmlnaHRHUy5vbmNsaWNrID0gcmlnaHRHU1xyXG5hcnJMZWZ0R1Mub25kYmxjbGljayA9IGZhbHNlU1xyXG5hcnJSaWdodEdTLm9uZGJsY2xpY2sgPSBmYWxzZVNcclxuXHJcbmZ1bmN0aW9uIGxlZnRHUyAoZXZlbnQpe1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBpZihsaW5lR1Muc2Nyb2xsTGVmdCA9PSAwKXtcclxuICAgIGxpbmVHUy5zY3JvbGwobGluZUdTLnNjcm9sbFdpZHRoLCAwKVxyXG4gIH1lbHNle1xyXG4gICAgbGluZUdTLnNjcm9sbChsaW5lR1Muc2Nyb2xsTGVmdC1waWN0dXJlV2lkdGhHUywgMClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJpZ2h0R1MgKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgaWYoTWF0aC5yb3VuZChsaW5lR1Muc2Nyb2xsTGVmdCktMTAgPD0gbGluZUdTLnNjcm9sbFdpZHRoIC0gd2lkdGhHUyAmJiBNYXRoLnJvdW5kKGxpbmVHUy5zY3JvbGxMZWZ0KSsxMCA+PSBsaW5lR1Muc2Nyb2xsV2lkdGggLSB3aWR0aEdTKXtcclxuICAgIGxpbmVHUy5zY3JvbGwoMCwgMClcclxuICB9ZWxzZXtcclxuICAgIGxpbmVHUy5zY3JvbGwobGluZUdTLnNjcm9sbExlZnQrPXBpY3R1cmVXaWR0aEdTLCAwKVxyXG4gIH1cclxufVxyXG5cclxuLy9zcG9uc29yIHNsaWRlciAoU1BTKVxyXG5cclxuYXJyTGVmdFNQUy5vbmNsaWNrID0gbGVmdFNQU1xyXG5hcnJSaWdodFNQUy5vbmNsaWNrID0gcmlnaHRTUFNcclxuYXJyTGVmdFNQUy5vbmRibGNsaWNrID0gZmFsc2VTXHJcbmFyclJpZ2h0U1BTLm9uZGJsY2xpY2sgPSBmYWxzZVNcclxuXHJcbmZ1bmN0aW9uIGxlZnRTUFMgKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgaWYobGluZVNQUy5zY3JvbGxMZWZ0ID09IDApe1xyXG4gICAgbGluZVNQUy5zY3JvbGwobGluZVNQUy5zY3JvbGxXaWR0aCwgMClcclxuICB9ZWxzZXtcclxuICAgIGxpbmVTUFMuc2Nyb2xsKGxpbmVTUFMuc2Nyb2xsTGVmdC1zcG9uc29yV2lkdGhTUFMqMiwgMClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJpZ2h0U1BTIChldmVudCl7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIGlmKE1hdGgucm91bmQobGluZVNQUy5zY3JvbGxMZWZ0KS0xMCA8PSBsaW5lU1BTLnNjcm9sbFdpZHRoIC0gd2lkdGhTUFMgJiYgTWF0aC5yb3VuZChsaW5lU1BTLnNjcm9sbExlZnQpKzEwID49IGxpbmVTUFMuc2Nyb2xsV2lkdGggLSB3aWR0aFNQUyl7XHJcbiAgICBsaW5lU1BTLnNjcm9sbCgwLCAwKVxyXG4gIH1lbHNle1xyXG4gICAgbGluZVNQUy5zY3JvbGwobGluZVNQUy5zY3JvbGxMZWZ0Kz1zcG9uc29yV2lkdGhTUFMqMiwgMClcclxuICB9XHJcbn1cclxuXHJcbi8vc2hvcCBzbGlkZXIgKFNTKVxyXG5cclxuYXJyTGVmdFNTLm9uY2xpY2sgPSBsZWZ0U1NcclxuYXJyUmlnaHRTUy5vbmNsaWNrID0gcmlnaHRTU1xyXG5hcnJMZWZ0U1Mub25kYmxjbGljayA9IGZhbHNlU1xyXG5hcnJSaWdodFNTLm9uZGJsY2xpY2sgPSBmYWxzZVNcclxuXHJcbmZ1bmN0aW9uIGxlZnRTUyAoZXZlbnQpe1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBpZihsaW5lU1Muc2Nyb2xsTGVmdCA9PSAwKXtcclxuICAgIGxpbmVTUy5zY3JvbGwobGluZVNTLnNjcm9sbFdpZHRoLCAwKVxyXG4gIH1lbHNle1xyXG4gICAgbGluZVNTLnNjcm9sbChsaW5lU1Muc2Nyb2xsTGVmdC1wcm9kdWN0V2lkdGhTUywgMClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJpZ2h0U1MgKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgaWYoTWF0aC5yb3VuZChsaW5lU1Muc2Nyb2xsTGVmdCktMTAgPD0gbGluZVNTLnNjcm9sbFdpZHRoIC0gd2lkdGhTUyAmJiBNYXRoLnJvdW5kKGxpbmVTUy5zY3JvbGxMZWZ0KSsxMCA+PSBsaW5lU1Muc2Nyb2xsV2lkdGggLSB3aWR0aFNTKXtcclxuICAgIGxpbmVTUy5zY3JvbGwoMCwgMClcclxuICB9ZWxzZXtcclxuICAgIGxpbmVTUy5zY3JvbGwobGluZVNTLnNjcm9sbExlZnQrPXByb2R1Y3RXaWR0aFNTLCAwKVxyXG4gIH1cclxufVxyXG5cclxuLy9wb3B1cHMgXHJcblxyXG5jbG9zZUJ1dHRvbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICBlbGVtZW50Lm9uY2xpY2sgPSBjbG9zZVBvcHVwXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2xvc2VQb3B1cCAoKXtcclxuICBhY3RpdmVQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXBvcHVwXCIpXHJcbiAgcG9wdXBCZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tBY3RpdmVQb3B1cCAoKXtcclxuICBpZihhY3RpdmVQb3B1cCAhPSB1bmRlZmluZWQpe1xyXG4gICAgYWN0aXZlUG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wb3B1cFwiKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tDbGljayAoZSl7XHJcbiAgaWYoZS50YXJnZXQgPT0gcG9wdXBCZyl7XHJcbiAgICBwb3B1cEJnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgYWN0aXZlUG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wb3B1cFwiKVxyXG4gIH0gXHJcbn1cclxuXHJcbnNpbmdVcEJ1dHRvbi5mb3JFYWNoKChlbGVtKT0+e1xyXG4gIGVsZW0ub25jbGljayA9IHNpbmdVcE9wZW5cclxufSlcclxuXHJcbnNpbmdJbkJ1dHRvbi5mb3JFYWNoKChlbGVtKT0+e1xyXG4gIGVsZW0ub25jbGljayA9IHNpbmdJbk9wZW5cclxufSlcclxuXHJcbmZ1bmN0aW9uIHNpbmdVcE9wZW4gKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgY2hlY2tBY3RpdmVQb3B1cCgpXHJcbiAgc2luZ1VwUG9wdXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wb3B1cFwiKVxyXG4gIHBvcHVwQmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gIGFjdGl2ZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtcG9wdXBcIilcclxuICBwb3B1cEJnLm9uY2xpY2sgPSBjaGVja0NsaWNrXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpbmdJbk9wZW4gKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgY2hlY2tBY3RpdmVQb3B1cCgpXHJcbiAgc2luZ0luUG9wdXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wb3B1cFwiKVxyXG4gIHBvcHVwQmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gIGFjdGl2ZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtcG9wdXBcIilcclxuICBwb3B1cEJnLm9uY2xpY2sgPSBjaGVja0NsaWNrXHJcbn1cclxuXHJcbmZvcmdvdFBhc3N3b3JkQnV0dG9uLm9uY2xpY2sgPSBmb3Jnb3RQYXNzd29yZE9wZW5cclxuXHJcbmZ1bmN0aW9uIGZvcmdvdFBhc3N3b3JkT3BlbiAoZXZlbnQpe1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBjaGVja0FjdGl2ZVBvcHVwKClcclxuICBmb3Jnb3RQYXNzd29yZFBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcG9wdXBcIilcclxuICBwb3B1cEJnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICBhY3RpdmVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlLXBvcHVwXCIpXHJcbiAgcG9wdXBCZy5vbmNsaWNrID0gY2hlY2tDbGlja1xyXG59XHJcblxyXG5wcmludGVyQnV0dG9uLm9uY2xpY2sgPSBwcmludGVyT3BlblxyXG5cclxuZnVuY3Rpb24gcHJpbnRlck9wZW4gKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgY2hlY2tBY3RpdmVQb3B1cCgpXHJcbiAgcHJpbnRlclBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcG9wdXBcIilcclxuICBwb3B1cEJnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICBhY3RpdmVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlLXBvcHVwXCIpXHJcbiAgcG9wdXBCZy5vbmNsaWNrID0gY2hlY2tDbGlja1xyXG59XHJcblxyXG5zaXR0aW5nQnV0dG9uLm9uY2xpY2sgPSBzaXR0aW5nT3BlblxyXG5cclxuZnVuY3Rpb24gc2l0dGluZ09wZW4gKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgY2hlY2tBY3RpdmVQb3B1cCgpXHJcbiAgc2l0dGluZ1BvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcG9wdXBcIilcclxuICBwb3B1cEJnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICBhY3RpdmVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlLXBvcHVwXCIpXHJcbiAgcG9wdXBCZy5vbmNsaWNrID0gY2hlY2tDbGlja1xyXG59XHJcblxyXG53aWZpQnV0dG9uLm9uY2xpY2sgPSB3aWZpT3BlblxyXG5cclxuZnVuY3Rpb24gd2lmaU9wZW4gKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgY2hlY2tBY3RpdmVQb3B1cCgpXHJcbiAgd2lmaVBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcG9wdXBcIilcclxuICBwb3B1cEJnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICBhY3RpdmVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlLXBvcHVwXCIpXHJcbiAgcG9wdXBCZy5vbmNsaWNrID0gY2hlY2tDbGlja1xyXG59XHJcblxyXG5wcmludEJ1dHRvbi5vbmNsaWNrID0gcHJpbnRPcGVuXHJcblxyXG5mdW5jdGlvbiBwcmludE9wZW4gKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgY2hlY2tBY3RpdmVQb3B1cCgpXHJcbiAgcHJpbnRQb3B1cC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXBvcHVwXCIpXHJcbiAgcG9wdXBCZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgYWN0aXZlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1wb3B1cFwiKVxyXG4gIHBvcHVwQmcub25jbGljayA9IGNoZWNrQ2xpY2tcclxufVxyXG5cclxubWljcm93YXZlQnV0dG9uLm9uY2xpY2sgPSBtaWNyb3dhdmVPcGVuXHJcblxyXG5mdW5jdGlvbiBtaWNyb3dhdmVPcGVuIChldmVudCl7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIGNoZWNrQWN0aXZlUG9wdXAoKVxyXG4gIG1pY3Jvd2F2ZVBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcG9wdXBcIilcclxuICBwb3B1cEJnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICBhY3RpdmVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlLXBvcHVwXCIpXHJcbiAgcG9wdXBCZy5vbmNsaWNrID0gY2hlY2tDbGlja1xyXG59XHJcblxyXG5iYXNrZXRCdXR0b24ub25jbGljayA9IGJhc2tldE9wZW5cclxuXHJcbmZ1bmN0aW9uIGJhc2tldE9wZW4gKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgY2hlY2tBY3RpdmVQb3B1cCgpXHJcbiAgYmFza2V0UG9wdXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wb3B1cFwiKVxyXG4gIHBvcHVwQmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gIGFjdGl2ZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtcG9wdXBcIilcclxuICBwb3B1cEJnLm9uY2xpY2sgPSBjaGVja0NsaWNrXHJcbn1cclxuXHJcbi8vb3JkZXIgbWVudSBcclxuXHJcbmZvcihpID0gMDsgaSA8IG9yZGVyUHJvZHVjdHMubGVuZ3RoOyBpKyspe1xyXG4gIG9yZGVyUHJvZHVjdHNbaV0uZGF0YXNldC5wcm9kdWN0TnVtYmVyID0gaVxyXG4gIHByb2R1Y3RPcmRlckluZm9baV0uZGF0YXNldC5wcm9kdWN0TnVtYmVyID0gaVxyXG59XHJcblxyXG5wcm9kdWN0TWludXMuZm9yRWFjaCgoZWxlbSk9PntcclxuICBlbGVtLm9uY2xpY2sgPSBwck1pbnVzXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBwck1pbnVzIChldmVudCl7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIGNvbnNvbGUubG9nKHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkcmVuLnZhbHVlKVxyXG4gIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkcmVuLnZhbHVlID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGRyZW4udmFsdWUgLSAxXHJcbn1cclxuXHJcbmZvcihpID0gMDsgaSA8IHByb2R1Y3RQbHVzLmxlbmd0aDsgaSsrKXtcclxuICBwcm9kdWN0UGx1c1tpXS5vbmNsaWNrID0gKGV2ZW50KT0+e1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgbGV0IHBlcmVtZW5hID0gZXZlbnQudGFyZ2V0LnRvU3RyaW5nXHJcbiAgICBjb25zb2xlLmxvZyhwZXJlbWVuYSlcclxuICB9XHJcbn1cclxuXHJcbi8vIHByb2R1Y3RQbHVzLmZvckVhY2goKGVsZW0pPT57XHJcbi8vICAgZWxlbS5vbmNsaWNrID0gKGV2ZW50KT0+e1xyXG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4vLyAgICAgcHJvZHVjdFBsdXMuaW5kZXhPZihlbGVtKVxyXG4vLyAgIH1cclxuLy8gfSkiXX0=
