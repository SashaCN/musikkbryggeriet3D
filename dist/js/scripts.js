let screenWidth=document.body.getBoundingClientRect().width,profile=document.querySelector(".profile"),profileMenu=document.querySelector(".sing-up"),burger=document.querySelector(".burger"),burgerMenu=document.querySelector(".header-menu"),menuLine=document.querySelector(".adaptive-header-line"),lineHS=document.querySelector(".photos"),arrLeftHS=document.querySelector(".arrow-left"),arrRightHS=document.querySelector(".arrow-right"),imgHS=document.querySelectorAll(".header-slider-img"),imgWidthHS=imgHS[0].getBoundingClientRect().width,widthHS=Math.round(lineHS.getBoundingClientRect().width),lineAUS=document.querySelector(".events-line"),arrLeftAUS=document.querySelector(".arrow-left-aus"),arrRightAUS=document.querySelector(".arrow-right-aus"),events=document.querySelectorAll(".event"),eventWidthAUS=events[0].getBoundingClientRect().width+30,widthAUS=Math.round(lineAUS.getBoundingClientRect().width),lineSPS=document.querySelector(".sponsor"),arrLeftSPS=document.querySelector(".arrow-left-sp"),arrRightSPS=document.querySelector(".arrow-right-sp"),sponsors=document.querySelectorAll(".sponsor-img-wrap"),sponsorWidthSPS=sponsors[0].getBoundingClientRect().width,widthSPS=Math.round(lineSPS.getBoundingClientRect().width),lineSS=document.querySelector(".shop-products"),arrLeftSS=document.querySelector(".arrow-left-shop"),arrRightSS=document.querySelector(".arrow-right-shop"),products=document.querySelectorAll(".shop-product"),productWidthSS=products[0].getBoundingClientRect().width+30,widthSS=Math.round(lineSS.getBoundingClientRect().width);function menu(){"false"==burger.getAttribute("data-active-check")?(burger.dataset.activeCheck="true",menuLine.classList.add("burger-menu-active"),burgerMenu.style.display="block"):"true"==burger.getAttribute("data-active-check")&&(burger.dataset.activeCheck="false",menuLine.classList.remove("burger-menu-active"),burgerMenu.style.display="none",burgerMenu.removeAttribute("style"))}function leftHS(e){e.preventDefault(),widthHS=Math.floor(widthHS),0==lineHS.scrollLeft?lineHS.scroll(lineHS.scrollWidth,0):lineHS.scroll(lineHS.scrollLeft-imgWidthHS,0)}function rightHS(e){e.preventDefault(),widthHS=Math.floor(widthHS),Math.round(lineHS.scrollLeft)-10<=lineHS.scrollWidth-widthHS&&Math.round(lineHS.scrollLeft)+10>=lineHS.scrollWidth-widthHS?lineHS.scroll(0,0):lineHS.scroll(lineHS.scrollLeft+=imgWidthHS,0)}function falseS(){return!1}function leftAUS(e){e.preventDefault(),widthAUS=Math.floor(widthAUS),0==lineAUS.scrollLeft?lineAUS.scroll(lineAUS.scrollWidth,0):lineAUS.scroll(lineAUS.scrollLeft-eventWidthAUS,0)}function rightAUS(e){e.preventDefault(),widthAUS=Math.floor(widthAUS),Math.round(lineAUS.scrollLeft)-10<=lineAUS.scrollWidth-widthAUS&&Math.round(lineAUS.scrollLeft)+10>=lineAUS.scrollWidth-widthAUS?lineAUS.scroll(0,0):lineAUS.scroll(lineAUS.scrollLeft+=eventWidthAUS,0)}function leftSPS(e){e.preventDefault(),widthSPS=Math.floor(widthSPS),0==lineSPS.scrollLeft?lineSPS.scroll(lineSPS.scrollWidth,0):lineSPS.scroll(lineSPS.scrollLeft-2*sponsorWidthSPS,0)}function rightSPS(e){e.preventDefault(),widthSPS=Math.floor(widthSPS),Math.round(lineSPS.scrollLeft)-10<=lineSPS.scrollWidth-widthSPS&&Math.round(lineSPS.scrollLeft)+10>=lineSPS.scrollWidth-widthSPS?lineSPS.scroll(0,0):lineSPS.scroll(lineSPS.scrollLeft+=2*sponsorWidthSPS,0)}function leftSS(e){e.preventDefault(),widthSS=Math.floor(widthSS),0==lineSS.scrollLeft?lineSS.scroll(lineSS.scrollWidth,0):lineSS.scroll(lineSS.scrollLeft-productWidthSS,0)}function rightSS(e){e.preventDefault(),widthSS=Math.floor(widthSS),Math.round(lineSS.scrollLeft)-10<=lineSS.scrollWidth-widthSS&&Math.round(lineSS.scrollLeft)+10>=lineSS.scrollWidth-widthSS?lineSS.scroll(0,0):lineSS.scroll(lineSS.scrollLeft+=productWidthSS,0)}burger.dataset.activeCheck="false",burger.onclick=menu,profile.onclick=e=>{e.preventDefault(),profile.classList.contains("profile-menu-active")?(profile.classList.remove("profile-menu-active"),profileMenu.style.display="none"):(profile.classList.add("profile-menu-active"),profileMenu.style.display="flex")},arrLeftHS.onclick=leftHS,arrRightHS.onclick=rightHS,arrLeftHS.ondblclick=falseS,arrRightHS.ondblclick=falseS,arrLeftAUS.onclick=leftAUS,arrRightAUS.onclick=rightAUS,arrLeftAUS.ondblclick=falseS,arrRightAUS.ondblclick=falseS,arrLeftSPS.onclick=leftSPS,arrRightSPS.onclick=rightSPS,arrLeftSPS.ondblclick=falseS,arrRightSPS.ondblclick=falseS,arrLeftSS.onclick=leftSS,arrRightSS.onclick=rightSS,arrLeftSS.ondblclick=falseS,arrRightSS.ondblclick=falseS;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsic2NyZWVuV2lkdGgiLCJkb2N1bWVudCIsImJvZHkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInByb2ZpbGUiLCJxdWVyeVNlbGVjdG9yIiwicHJvZmlsZU1lbnUiLCJidXJnZXIiLCJidXJnZXJNZW51IiwibWVudUxpbmUiLCJsaW5lSFMiLCJhcnJMZWZ0SFMiLCJhcnJSaWdodEhTIiwiaW1nSFMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW1nV2lkdGhIUyIsIndpZHRoSFMiLCJNYXRoIiwicm91bmQiLCJsaW5lQVVTIiwiYXJyTGVmdEFVUyIsImFyclJpZ2h0QVVTIiwiZXZlbnRzIiwiZXZlbnRXaWR0aEFVUyIsIndpZHRoQVVTIiwibGluZVNQUyIsImFyckxlZnRTUFMiLCJhcnJSaWdodFNQUyIsInNwb25zb3JzIiwic3BvbnNvcldpZHRoU1BTIiwid2lkdGhTUFMiLCJsaW5lU1MiLCJhcnJMZWZ0U1MiLCJhcnJSaWdodFNTIiwicHJvZHVjdHMiLCJwcm9kdWN0V2lkdGhTUyIsIndpZHRoU1MiLCJtZW51IiwiZ2V0QXR0cmlidXRlIiwiZGF0YXNldCIsImFjdGl2ZUNoZWNrIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJkaXNwbGF5IiwicmVtb3ZlIiwicmVtb3ZlQXR0cmlidXRlIiwibGVmdEhTIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZsb29yIiwic2Nyb2xsTGVmdCIsInNjcm9sbCIsInNjcm9sbFdpZHRoIiwicmlnaHRIUyIsImZhbHNlUyIsImxlZnRBVVMiLCJyaWdodEFVUyIsImxlZnRTUFMiLCJyaWdodFNQUyIsImxlZnRTUyIsInJpZ2h0U1MiLCJvbmNsaWNrIiwiY29udGFpbnMiLCJvbmRibGNsaWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxZQUFjQyxTQUFTQyxLQUFLQyx3QkFBd0JDLE1BRXBEQyxRQUFVSixTQUFTSyxjQUFjLFlBQ2pDQyxZQUFjTixTQUFTSyxj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QSxFQUFNQyxpQkFDSDdDLFFBQVFxQyxVQUFVc0IsU0FBUyx3QkFDNUIzRCxRQUFRcUMsVUFBVUksT0FBTyx1QkFDekJ2QyxZQUFZcUMsTUFBTUMsUUFBVSxTQUU1QnhDLFFBQVFxQyxVQUFVQyxJQUFJLHVCQUN0QnBDLFlBQVlxQyxNQUFNQyxRQUFVLFNBTWhDakMsVUFBVW1ELFFBQVVmLE9BQ3BCbkMsV0FBV2tELFFBQVVSLFFBQ3JCM0MsVUFBVXFELFdBQWFULE9BQ3ZCM0MsV0FBV29ELFdBQWFULE9BNEJ4Qm5DLFdBQVcwQyxRQUFVTixRQUNyQm5DLFlBQVl5QyxRQUFVTCxTQUN0QnJDLFdBQVc0QyxXQUFhVCxPQUN4QmxDLFlBQVkyQyxXQUFhVCxPQW1EekI3QixXQUFXb0MsUUFBVUosUUFDckIvQixZQUFZbUMsUUFBVUgsU0FDdEJqQyxXQUFXc0MsV0FBYVQsT0FDeEI1QixZQUFZcUMsV0FBYVQsT0F3QnpCdkIsVUFBVThCLFFBQVVGLE9BQ3BCM0IsV0FBVzZCLFFBQVVELFFBQ3JCN0IsVUFBVWdDLFdBQWFULE9BQ3ZCdEIsV0FBVytCLFdBQWFUIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc2NyZWVuV2lkdGggPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLCAgICAgIC8vc2NyZWVuIHdpZHRoIGZvciBhZGFwdGl2ZVxyXG4gICAgLy9wcm9maWxlXHJcbiAgICBwcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlXCIpLFxyXG4gICAgcHJvZmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpbmctdXBcIiksXHJcbiAgICAvL2J1cmdlciBtZW51XHJcbiAgICBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKSxcclxuICAgIGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1tZW51XCIpLFxyXG4gICAgbWVudUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkYXB0aXZlLWhlYWRlci1saW5lXCIpLFxyXG4gICAgLy9oZWFkZXIgc2xpZGVyIChIUylcclxuICAgIGxpbmVIUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG9zXCIpLFxyXG4gICAgYXJyTGVmdEhTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnJvdy1sZWZ0XCIpLFxyXG4gICAgYXJyUmlnaHRIUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3ctcmlnaHRcIiksXHJcbiAgICBpbWdIUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyLXNsaWRlci1pbWdcIiksXHJcbiAgICBpbWdXaWR0aEhTID0gaW1nSFNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXHJcbiAgICB3aWR0aEhTID0gTWF0aC5yb3VuZChsaW5lSFMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpLFxyXG4gICAgLy9hYm91dCB1cyBzbGlkZXIgKEFVUylcclxuICAgIGxpbmVBVVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV2ZW50cy1saW5lXCIpLFxyXG4gICAgYXJyTGVmdEFVUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3ctbGVmdC1hdXNcIiksXHJcbiAgICBhcnJSaWdodEFVUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3ctcmlnaHQtYXVzXCIpLFxyXG4gICAgZXZlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ldmVudFwiKSxcclxuICAgIGV2ZW50V2lkdGhBVVMgPSBldmVudHNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyAzMCxcclxuICAgIHdpZHRoQVVTID0gTWF0aC5yb3VuZChsaW5lQVVTLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSxcclxuICAgIC8vZ2FsbGVyeSBzbGlkZXIgKEdTKVxyXG4gICAgLypsaW5lR1MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnktbGluZVwiKSxcclxuICAgIGFyckxlZnRHUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3ctbGVmdC1nYWxsZXJ5XCIpLFxyXG4gICAgYXJyUmlnaHRHUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3ctcmlnaHQtZ2FsbGVyeVwiKSxcclxuICAgIHBpY3R1cmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zY3JvbGxlZC1waWN0dXJlXCIpLFxyXG4gICAgcGljdHVyZVdpZHRoR1MgPSBwaWN0dXJlc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcclxuICAgIHdpZHRoR1MgPSBNYXRoLnJvdW5kKGxpbmVHUy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCksKi9cclxuICAgIC8vc3BvbnNvciBzbGlkZXIgKFNQUylcclxuICAgIGxpbmVTUFMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwb25zb3JcIiksXHJcbiAgICBhcnJMZWZ0U1BTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnJvdy1sZWZ0LXNwXCIpLFxyXG4gICAgYXJyUmlnaHRTUFMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycm93LXJpZ2h0LXNwXCIpLFxyXG4gICAgc3BvbnNvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNwb25zb3ItaW1nLXdyYXBcIiksXHJcbiAgICBzcG9uc29yV2lkdGhTUFMgPSBzcG9uc29yc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcclxuICAgIHdpZHRoU1BTID0gTWF0aC5yb3VuZChsaW5lU1BTLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSxcclxuICAgIC8vc2hvcCBzbGlkZXIgKFNTKVxyXG4gICAgbGluZVNTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG9wLXByb2R1Y3RzXCIpLFxyXG4gICAgYXJyTGVmdFNTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnJvdy1sZWZ0LXNob3BcIiksXHJcbiAgICBhcnJSaWdodFNTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnJvdy1yaWdodC1zaG9wXCIpLFxyXG4gICAgcHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3AtcHJvZHVjdFwiKSxcclxuICAgIHByb2R1Y3RXaWR0aFNTID0gcHJvZHVjdHNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyAzMCxcclxuICAgIHdpZHRoU1MgPSBNYXRoLnJvdW5kKGxpbmVTUy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aClcclxuXHJcbmJ1cmdlci5kYXRhc2V0LmFjdGl2ZUNoZWNrID0gXCJmYWxzZVwiXHJcblxyXG5idXJnZXIub25jbGljayA9IG1lbnVcclxuXHJcbmZ1bmN0aW9uIG1lbnUgKCl7XHJcbiAgaWYoYnVyZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0aXZlLWNoZWNrXCIpID09IFwiZmFsc2VcIil7XHJcbiAgICBidXJnZXIuZGF0YXNldC5hY3RpdmVDaGVjayA9IFwidHJ1ZVwiXHJcbiAgICBtZW51TGluZS5jbGFzc0xpc3QuYWRkKFwiYnVyZ2VyLW1lbnUtYWN0aXZlXCIpXHJcbiAgICBidXJnZXJNZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICB9ZWxzZSBpZihidXJnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3RpdmUtY2hlY2tcIikgPT0gXCJ0cnVlXCIpe1xyXG4gICAgYnVyZ2VyLmRhdGFzZXQuYWN0aXZlQ2hlY2sgPSBcImZhbHNlXCJcclxuICAgIG1lbnVMaW5lLmNsYXNzTGlzdC5yZW1vdmUoXCJidXJnZXItbWVudS1hY3RpdmVcIilcclxuICAgIGJ1cmdlck1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICBidXJnZXJNZW51LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpXHJcbiAgfVxyXG59IFxyXG5cclxucHJvZmlsZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIGlmKHByb2ZpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvZmlsZS1tZW51LWFjdGl2ZVwiKSl7XHJcbiAgICBwcm9maWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLW1lbnUtYWN0aXZlXCIpXHJcbiAgICBwcm9maWxlTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICB9ZWxzZXtcclxuICAgIHByb2ZpbGUuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtbWVudS1hY3RpdmVcIilcclxuICAgIHByb2ZpbGVNZW51LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxyXG4gIH1cclxufVxyXG5cclxuLy9oZWFkZXIgc2xpZGVyIChIUylcclxuXHJcbmFyckxlZnRIUy5vbmNsaWNrID0gbGVmdEhTXHJcbmFyclJpZ2h0SFMub25jbGljayA9IHJpZ2h0SFNcclxuYXJyTGVmdEhTLm9uZGJsY2xpY2sgPSBmYWxzZVNcclxuYXJyUmlnaHRIUy5vbmRibGNsaWNrID0gZmFsc2VTXHJcblxyXG5mdW5jdGlvbiBsZWZ0SFMgKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgd2lkdGhIUyA9IE1hdGguZmxvb3Iod2lkdGhIUylcclxuICBpZihsaW5lSFMuc2Nyb2xsTGVmdCA9PSAwKXtcclxuICAgIGxpbmVIUy5zY3JvbGwobGluZUhTLnNjcm9sbFdpZHRoLCAwKVxyXG4gIH1lbHNle1xyXG4gICAgbGluZUhTLnNjcm9sbChsaW5lSFMuc2Nyb2xsTGVmdC1pbWdXaWR0aEhTLCAwKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmlnaHRIUyAoZXZlbnQpe1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICB3aWR0aEhTID0gTWF0aC5mbG9vcih3aWR0aEhTKVxyXG4gIGlmKE1hdGgucm91bmQobGluZUhTLnNjcm9sbExlZnQpLTEwIDw9IGxpbmVIUy5zY3JvbGxXaWR0aCAtIHdpZHRoSFMgJiYgTWF0aC5yb3VuZChsaW5lSFMuc2Nyb2xsTGVmdCkrMTAgPj0gbGluZUhTLnNjcm9sbFdpZHRoIC0gd2lkdGhIUyl7XHJcbiAgICBsaW5lSFMuc2Nyb2xsKDAsIDApXHJcbiAgfWVsc2V7XHJcbiAgICBsaW5lSFMuc2Nyb2xsKGxpbmVIUy5zY3JvbGxMZWZ0Kz1pbWdXaWR0aEhTLCAwKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmFsc2VTICgpe1xyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLy9hYm91dCB1cyBzbGlkZXIgKEFVUylcclxuXHJcbmFyckxlZnRBVVMub25jbGljayA9IGxlZnRBVVNcclxuYXJyUmlnaHRBVVMub25jbGljayA9IHJpZ2h0QVVTXHJcbmFyckxlZnRBVVMub25kYmxjbGljayA9IGZhbHNlU1xyXG5hcnJSaWdodEFVUy5vbmRibGNsaWNrID0gZmFsc2VTXHJcblxyXG5mdW5jdGlvbiBsZWZ0QVVTIChldmVudCl7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIHdpZHRoQVVTID0gTWF0aC5mbG9vcih3aWR0aEFVUylcclxuICBpZihsaW5lQVVTLnNjcm9sbExlZnQgPT0gMCl7XHJcbiAgICBsaW5lQVVTLnNjcm9sbChsaW5lQVVTLnNjcm9sbFdpZHRoLCAwKVxyXG4gIH1lbHNle1xyXG4gICAgbGluZUFVUy5zY3JvbGwobGluZUFVUy5zY3JvbGxMZWZ0LWV2ZW50V2lkdGhBVVMsIDApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByaWdodEFVUyAoZXZlbnQpe1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICB3aWR0aEFVUyA9IE1hdGguZmxvb3Iod2lkdGhBVVMpXHJcbiAgaWYoTWF0aC5yb3VuZChsaW5lQVVTLnNjcm9sbExlZnQpLTEwIDw9IGxpbmVBVVMuc2Nyb2xsV2lkdGggLSB3aWR0aEFVUyAmJiBNYXRoLnJvdW5kKGxpbmVBVVMuc2Nyb2xsTGVmdCkrMTAgPj0gbGluZUFVUy5zY3JvbGxXaWR0aCAtIHdpZHRoQVVTKXtcclxuICAgIGxpbmVBVVMuc2Nyb2xsKDAsIDApXHJcbiAgfWVsc2V7XHJcbiAgICBsaW5lQVVTLnNjcm9sbChsaW5lQVVTLnNjcm9sbExlZnQrPWV2ZW50V2lkdGhBVVMsIDApXHJcbiAgfVxyXG59XHJcblxyXG4vL2dhbGxlcnkgc2xpZGVyIChHUylcclxuXHJcbi8qYXJyTGVmdEdTLm9uY2xpY2sgPSBsZWZ0R1NcclxuYXJyUmlnaHRHUy5vbmNsaWNrID0gcmlnaHRHU1xyXG5hcnJMZWZ0R1Mub25kYmxjbGljayA9IGZhbHNlU1xyXG5hcnJSaWdodEdTLm9uZGJsY2xpY2sgPSBmYWxzZVNcclxuXHJcbmZ1bmN0aW9uIGxlZnRHUyAoZXZlbnQpe1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICB3aWR0aEdTID0gTWF0aC5mbG9vcih3aWR0aEdTKVxyXG4gIGlmKGxpbmVHUy5zY3JvbGxMZWZ0ID09IDApe1xyXG4gICAgbGluZUdTLnNjcm9sbChsaW5lR1Muc2Nyb2xsV2lkdGgsIDApXHJcbiAgfWVsc2V7XHJcbiAgICBsaW5lR1Muc2Nyb2xsKGxpbmVHUy5zY3JvbGxMZWZ0LXBpY3R1cmVXaWR0aEdTLCAwKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmlnaHRHUyAoZXZlbnQpe1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICB3aWR0aEdTID0gTWF0aC5mbG9vcih3aWR0aEdTKVxyXG4gIGlmKE1hdGgucm91bmQobGluZUdTLnNjcm9sbExlZnQpLTEwIDw9IGxpbmVHUy5zY3JvbGxXaWR0aCAtIHdpZHRoR1MgJiYgTWF0aC5yb3VuZChsaW5lR1Muc2Nyb2xsTGVmdCkrMTAgPj0gbGluZUdTLnNjcm9sbFdpZHRoIC0gd2lkdGhHUyl7XHJcbiAgICBsaW5lR1Muc2Nyb2xsKDAsIDApXHJcbiAgfWVsc2V7XHJcbiAgICBsaW5lR1Muc2Nyb2xsKGxpbmVHUy5zY3JvbGxMZWZ0Kz1waWN0dXJlV2lkdGhHUywgMClcclxuICB9XHJcbn0qL1xyXG5cclxuLy9zcG9uc29yIHNsaWRlciAoU1BTKVxyXG5cclxuYXJyTGVmdFNQUy5vbmNsaWNrID0gbGVmdFNQU1xyXG5hcnJSaWdodFNQUy5vbmNsaWNrID0gcmlnaHRTUFNcclxuYXJyTGVmdFNQUy5vbmRibGNsaWNrID0gZmFsc2VTXHJcbmFyclJpZ2h0U1BTLm9uZGJsY2xpY2sgPSBmYWxzZVNcclxuXHJcbmZ1bmN0aW9uIGxlZnRTUFMgKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgd2lkdGhTUFMgPSBNYXRoLmZsb29yKHdpZHRoU1BTKVxyXG4gIGlmKGxpbmVTUFMuc2Nyb2xsTGVmdCA9PSAwKXtcclxuICAgIGxpbmVTUFMuc2Nyb2xsKGxpbmVTUFMuc2Nyb2xsV2lkdGgsIDApXHJcbiAgfWVsc2V7XHJcbiAgICBsaW5lU1BTLnNjcm9sbChsaW5lU1BTLnNjcm9sbExlZnQtc3BvbnNvcldpZHRoU1BTKjIsIDApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByaWdodFNQUyAoZXZlbnQpe1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICB3aWR0aFNQUyA9IE1hdGguZmxvb3Iod2lkdGhTUFMpXHJcbiAgaWYoTWF0aC5yb3VuZChsaW5lU1BTLnNjcm9sbExlZnQpLTEwIDw9IGxpbmVTUFMuc2Nyb2xsV2lkdGggLSB3aWR0aFNQUyAmJiBNYXRoLnJvdW5kKGxpbmVTUFMuc2Nyb2xsTGVmdCkrMTAgPj0gbGluZVNQUy5zY3JvbGxXaWR0aCAtIHdpZHRoU1BTKXtcclxuICAgIGxpbmVTUFMuc2Nyb2xsKDAsIDApXHJcbiAgfWVsc2V7XHJcbiAgICBsaW5lU1BTLnNjcm9sbChsaW5lU1BTLnNjcm9sbExlZnQrPXNwb25zb3JXaWR0aFNQUyoyLCAwKVxyXG4gIH1cclxufVxyXG5cclxuLy9zaG9wIHNsaWRlciAoU1MpXHJcblxyXG5hcnJMZWZ0U1Mub25jbGljayA9IGxlZnRTU1xyXG5hcnJSaWdodFNTLm9uY2xpY2sgPSByaWdodFNTXHJcbmFyckxlZnRTUy5vbmRibGNsaWNrID0gZmFsc2VTXHJcbmFyclJpZ2h0U1Mub25kYmxjbGljayA9IGZhbHNlU1xyXG5cclxuZnVuY3Rpb24gbGVmdFNTIChldmVudCl7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIHdpZHRoU1MgPSBNYXRoLmZsb29yKHdpZHRoU1MpXHJcbiAgaWYobGluZVNTLnNjcm9sbExlZnQgPT0gMCl7XHJcbiAgICBsaW5lU1Muc2Nyb2xsKGxpbmVTUy5zY3JvbGxXaWR0aCwgMClcclxuICB9ZWxzZXtcclxuICAgIGxpbmVTUy5zY3JvbGwobGluZVNTLnNjcm9sbExlZnQtcHJvZHVjdFdpZHRoU1MsIDApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByaWdodFNTIChldmVudCl7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIHdpZHRoU1MgPSBNYXRoLmZsb29yKHdpZHRoU1MpXHJcbiAgaWYoTWF0aC5yb3VuZChsaW5lU1Muc2Nyb2xsTGVmdCktMTAgPD0gbGluZVNTLnNjcm9sbFdpZHRoIC0gd2lkdGhTUyAmJiBNYXRoLnJvdW5kKGxpbmVTUy5zY3JvbGxMZWZ0KSsxMCA+PSBsaW5lU1Muc2Nyb2xsV2lkdGggLSB3aWR0aFNTKXtcclxuICAgIGxpbmVTUy5zY3JvbGwoMCwgMClcclxuICB9ZWxzZXtcclxuICAgIGxpbmVTUy5zY3JvbGwobGluZVNTLnNjcm9sbExlZnQrPXByb2R1Y3RXaWR0aFNTLCAwKVxyXG4gIH1cclxufSJdfQ==
