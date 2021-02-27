let productNumber,lineHS=document.querySelector(".photos"),arrLeftHS=document.querySelector(".arrow-left"),arrRightHS=document.querySelector(".arrow-right"),imgHS=document.querySelectorAll(".header-slider-img"),imgWidthHS=imgHS[0].getBoundingClientRect().width,widthHS=Math.round(lineHS.getBoundingClientRect().width),lineGS=document.querySelector(".gallery-line"),arrLeftGS=document.querySelector(".arrow-left-gallery"),arrRightGS=document.querySelector(".arrow-right-gallery"),pictures=document.querySelectorAll(".scrolled-picture"),pictureWidthGS=pictures[0].getBoundingClientRect().width+12,widthGS=Math.round(lineGS.getBoundingClientRect().width),lineSPS=document.querySelector(".sponsor"),arrLeftSPS=document.querySelector(".arrow-left-sp"),arrRightSPS=document.querySelector(".arrow-right-sp"),sponsors=document.querySelectorAll(".sponsor-img-wrap"),sponsorWidthSPS=sponsors[0].getBoundingClientRect().width,widthSPS=Math.round(lineSPS.getBoundingClientRect().width),lineSS=document.querySelector(".shop-products"),arrLeftSS=document.querySelector(".arrow-left-shop"),arrRightSS=document.querySelector(".arrow-right-shop"),products=document.querySelectorAll(".shop-product"),productWidthSS=products[0].getBoundingClientRect().width+30,widthSS=Math.round(lineSS.getBoundingClientRect().width),printerButton=document.querySelector(".service-3d-printer"),printerPopup=document.querySelector(".printer-popup"),sittingButton=document.querySelector(".service-sitting"),sittingPopup=document.querySelector(".sittig-popup"),wifiButton=document.querySelector(".service-wifi"),wifiPopup=document.querySelector(".wifi-popup"),printButton=document.querySelector(".service-print"),printPopup=document.querySelector(".print-popup"),microwaveButton=document.querySelector(".service-microwave"),microwavePopup=document.querySelector(".microwave-popup"),basketButton=document.querySelector(".basket"),basketPopup=document.querySelector(".basket-popup"),orderProducts=document.querySelectorAll(".product"),productPlus=document.querySelectorAll(".product-plus"),productMinus=document.querySelectorAll(".product-minus"),productQuantify=document.querySelectorAll(".product-amount"),price=document.querySelectorAll(".price"),productPrice=document.querySelectorAll(".product-price"),deleteProduct=document.querySelectorAll(".delete-product"),productOrderInfo=document.querySelectorAll(".product-order-info"),sumPrice=document.querySelector(".sum-price"),addProductButton=document.querySelectorAll(".product-button"),productName=document.querySelectorAll(".product-name"),basketProducts=document.querySelector(".basket-products"),shopProducts=document.querySelectorAll(".shop-product"),productImg=document.querySelectorAll(".shop-product img"),balance=document.querySelector(".balance"),innerString="",totalPrice=0;function leftHS(t){lineLeft(t,lineHS,imgWidthHS)}function rightHS(t){lineRight(t,lineHS,widthHS,imgWidthHS)}function leftGS(t){lineLeft(t,lineGS,pictureWidthGS)}function rightGS(t){lineRight(t,lineGS,widthGS,pictureWidthGS)}function leftSPS(t){lineLeft(t,lineSPS,sponsorWidthSPS)}function rightSPS(t){lineRight(t,lineSPS,widthSPS,sponsorWidthSPS)}function leftSS(t){lineLeft(t,lineSS,productWidthSS)}function rightSS(t){lineRight(t,lineSS,widthSS,productWidthSS)}function printerOpen(t){popupOpen(t,printerPopup)}function sittingOpen(t){popupOpen(t,sittingPopup)}function wifiOpen(t){popupOpen(t,wifiPopup)}function printOpen(t){popupOpen(t,printPopup)}function microwaveOpen(t){popupOpen(t,microwavePopup)}function basketOpen(t){popupOpen(t,basketPopup)}function attributeAdd(){for(let t=0;t<orderProducts.length;t++)orderProducts[t].dataset.productNumber=t,productOrderInfo[t].dataset.productNumber=t,productPrice[t].dataset.productStartingPrice=productPrice[t].textContent.slice(0,productPrice[t].textContent.length-1),productPrice[t].dataset.productPrice=productPrice[t].textContent.slice(0,productPrice[t].textContent.length-1)}function prMinus(t){if(t.preventDefault(),productNumber=this.closest(".product-order-info").getAttribute("data-product-number"),!(this.nextElementSibling.firstChild.value>0))return!1;productQuantify[productNumber].value=productQuantify[productNumber].value-1,productPrice[productNumber].innerHTML=parseInt(productPrice[productNumber].getAttribute("data-product-price"))-parseInt(productPrice[productNumber].getAttribute("data-product-starting-price"))+"$",productPrice[productNumber].dataset.productPrice=productPrice[productNumber].textContent.slice(0,productPrice[productNumber].textContent.length-1),totalPriceCount()}function prPlus(t){t.preventDefault(),productNumber=this.closest(".product-order-info").getAttribute("data-product-number"),productQuantify[productNumber].value=parseInt(productQuantify[productNumber].value)+1,productPrice[productNumber].innerHTML=parseInt(productPrice[productNumber].getAttribute("data-product-starting-price"))+parseInt(productPrice[productNumber].getAttribute("data-product-price"))+"$",productPrice[productNumber].dataset.productPrice=productPrice[productNumber].textContent.slice(0,productPrice[productNumber].textContent.length-1),totalPriceCount()}function valueChange(){productNumber=this.closest(".product-order-info").getAttribute("data-product-number"),productPrice[productNumber].innerHTML=parseInt(productPrice[productNumber].getAttribute("data-product-starting-price"))*this.value+"$",productPrice[productNumber].dataset.productPrice=productPrice[productNumber].textContent.slice(0,productPrice[productNumber].textContent.length-1),totalPriceCount()}function totalPriceCount(){productPrice=document.querySelectorAll(".product-price"),productPrice.forEach(t=>{totalPrice+=parseInt(t.getAttribute("data-product-price"))}),sumPrice.innerHTML=totalPrice+"$",balance.innerHTML=totalPrice+"$",totalPrice=0}arrLeftHS.onclick=leftHS,arrRightHS.onclick=rightHS,arrLeftHS.ondblclick=falseS,arrRightHS.ondblclick=falseS,arrLeftGS.onclick=leftGS,arrRightGS.onclick=rightGS,arrLeftGS.ondblclick=falseS,arrRightGS.ondblclick=falseS,arrLeftSPS.onclick=leftSPS,arrRightSPS.onclick=rightSPS,arrLeftSPS.ondblclick=falseS,arrRightSPS.ondblclick=falseS,arrLeftSS.onclick=leftSS,arrRightSS.onclick=rightSS,arrLeftSS.ondblclick=falseS,arrRightSS.ondblclick=falseS,printerButton.onclick=printerOpen,sittingButton.onclick=sittingOpen,wifiButton.onclick=wifiOpen,printButton.onclick=printOpen,microwaveButton.onclick=microwaveOpen,basketButton.onclick=basketOpen,addProductButton.forEach(t=>{t.onclick=addProduct});for(let t=0;t<shopProducts.length;t++)shopProducts[t].dataset.productNumber=t;function addProduct(t){t.preventDefault(),productNumber=this.closest(".shop-product").getAttribute("data-product-number"),refreshProducts(),orderProducts=document.querySelectorAll(".product"),productPlus=document.querySelectorAll(".product-plus"),productMinus=document.querySelectorAll(".product-minus"),productQuantify=document.querySelectorAll(".product-amount"),productPrice=document.querySelectorAll(".product-price"),deleteProduct=document.querySelectorAll(".delete-product"),productOrderInfo=document.querySelectorAll(".product-order-info"),deleteProduct=document.querySelectorAll(".delete-product"),attributeAdd(),totalPriceCount(),productPlus.forEach(t=>{t.onclick=prPlus}),productMinus.forEach(t=>{t.onclick=prMinus}),productQuantify.forEach(t=>{t.onchange=valueChange}),deleteProduct.forEach(t=>{t.onclick=e=>{e.preventDefault(),basketProducts.removeChild(orderProducts[t.closest(".product").getAttribute("data-product-number")]),attributeAdd(),totalPriceCount(),orderProducts=document.querySelectorAll(".product"),innerString="",attributeAdd(),totalPriceCount()}})}function refreshProducts(){if(basketProducts.innerHTML="",void 0===orderProducts[0])basketProducts.innerHTML=`<figure class="product">${productImg[productNumber].outerHTML}<figcaption> <p class="product-name">${productName[productNumber].textContent}</p><div class="product-info"><div class="product-description"> <p>size - L</p><p>for women</p></div><div class="product-order-info"> <form class="product-quantity"> <button class="product-minus">-</button><label><input class="product-amount" type="number" name="product-quantity" value="1"/></label><button class="product-plus">+</button></form><div class="price-wrap"> <p class="product-price">${price[productNumber].textContent}</p><span class="delete-product"></span></div></div></div></figcaption></figure>`;else{for(let t=0;t<orderProducts.length;t++)innerString=`${innerString}${orderProducts[t].outerHTML}`;basketProducts.innerHTML=`${innerString}<figure class="product">${productImg[productNumber].outerHTML}<figcaption> <p class="product-name">${productName[productNumber].textContent}</p><div class="product-info"><div class="product-description"> <p>size - L</p><p>for women</p></div><div class="product-order-info"> <form class="product-quantity"> <button class="product-minus">-</button><label><input class="product-amount" type="number" name="product-quantity" value="1"/></label><button class="product-plus">+</button></form><div class="price-wrap"> <p class="product-price">${price[productNumber].textContent}</p><span class="delete-product"></span></div></div></div></figcaption></figure>`,innerString=""}}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsicHJvZHVjdE51bWJlciIsImxpbmVIUyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFyckxlZnRIUyIsImFyclJpZ2h0SFMiLCJpbWdIUyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbWdXaWR0aEhTIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aWR0aEhTIiwiTWF0aCIsInJvdW5kIiwibGluZUdTIiwiYXJyTGVmdEdTIiwiYXJyUmlnaHRHUyIsInBpY3R1cmVzIiwicGljdHVyZVdpZHRoR1MiLCJ3aWR0aEdTIiwibGluZVNQUyIsImFyckxlZnRTUFMiLCJhcnJSaWdodFNQUyIsInNwb25zb3JzIiwic3BvbnNvcldpZHRoU1BTIiwid2lkdGhTUFMiLCJsaW5lU1MiLCJhcnJMZWZ0U1MiLCJhcnJSaWdodFNTIiwicHJvZHVjdHMiLCJwcm9kdWN0V2lkdGhTUyIsIndpZHRoU1MiLCJwcmludGVyQnV0dG9uIiwicHJpbnRlclBvcHVwIiwic2l0dGluZ0J1dHRvbiIsInNpdHRpbmdQb3B1cCIsIndpZmlCdXR0b24iLCJ3aWZpUG9wdXAiLCJwcmludEJ1dHRvbiIsInByaW50UG9wdXAiLCJtaWNyb3dhdmVCdXR0b24iLCJtaWNyb3dhdmVQb3B1cCIsImJhc2tldEJ1dHRvbiIsImJhc2tldFBvcHVwIiwib3JkZXJQcm9kdWN0cyIsInByb2R1Y3RQbHVzIiwicHJvZHVjdE1pbnVzIiwicHJvZHVjdFF1YW50aWZ5IiwicHJpY2UiLCJwcm9kdWN0UHJpY2UiLCJkZWxldGVQcm9kdWN0IiwicHJvZHVjdE9yZGVySW5mbyIsInN1bVByaWNlIiwiYWRkUHJvZHVjdEJ1dHRvbiIsInByb2R1Y3ROYW1lIiwiYmFza2V0UHJvZHVjdHMiLCJzaG9wUHJvZHVjdHMiLCJwcm9kdWN0SW1nIiwiYmFsYW5jZSIsImlubmVyU3RyaW5nIiwidG90YWxQcmljZSIsImxlZnRIUyIsImV2ZW50IiwibGluZUxlZnQiLCJyaWdodEhTIiwibGluZVJpZ2h0IiwibGVmdEdTIiwicmlnaHRHUyIsImxlZnRTUFMiLCJyaWdodFNQUyIsImxlZnRTUyIsInJpZ2h0U1MiLCJwcmludGVyT3BlbiIsInBvcHVwT3BlbiIsInNpdHRpbmdPcGVuIiwid2lmaU9wZW4iLCJwcmludE9wZW4iLCJtaWNyb3dhdmVPcGVuIiwiYmFza2V0T3BlbiIsImF0dHJpYnV0ZUFkZCIsImkiLCJsZW5ndGgiLCJkYXRhc2V0IiwicHJvZHVjdFN0YXJ0aW5nUHJpY2UiLCJ0ZXh0Q29udGVudCIsInNsaWNlIiwicHJNaW51cyIsInByZXZlbnREZWZhdWx0IiwidGhpcyIsImNsb3Nlc3QiLCJnZXRBdHRyaWJ1dGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJmaXJzdENoaWxkIiwidmFsdWUiLCJpbm5lckhUTUwiLCJwYXJzZUludCIsInRvdGFsUHJpY2VDb3VudCIsInByUGx1cyIsInZhbHVlQ2hhbmdlIiwiZm9yRWFjaCIsImVsZW0iLCJvbmNsaWNrIiwib25kYmxjbGljayIsImZhbHNlUyIsImFkZFByb2R1Y3QiLCJyZWZyZXNoUHJvZHVjdHMiLCJvbmNoYW5nZSIsInJlbW92ZUNoaWxkIiwidW5kZWZpbmVkIiwib3V0ZXJIVE1MIl0sIm1hcHBpbmdzIjoiQUFBQSxJQTJESUEsY0ExREFDLE9BQVNDLFNBQVNDLGNBQWMsV0FDaENDLFVBQVlGLFNBQVNDLGNBQWMsZUFDbkNFLFdBQWFILFNBQVNDLGNBQWMsZ0JBQ3BDRyxNQUFRSixTQUFTSyxpQkFBaUIsc0JBQ2xDQyxXQUFhRixNQUFNLEdBQUdHLHdCQUF3QkMsTUFDOUNDLFFBQVVDLEtBQUtDLE1BQU1aLE9BQU9RLHdCQUF3QkMsT0FFcERJLE9BQVNaLFNBQVNDLGNBQWMsaUJBQ2hDWSxVQUFZYixTQUFTQyxjQUFjLHVCQUNuQ2EsV0FBYWQsU0FBU0MsY0FBYyx3QkFDcENjLFNBQVdmLFNBQVNLLGlCQUFpQixxQkFDckNXLGVBQWlCRCxTQUFTLEdBQUdSLHdCQUF3QkMsTUFBUSxHQUM3RFMsUUFBVVAsS0FBS0Ms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VUFBWSwyQkFBMkJyQyxXQUFXekQsZUFBZTZHLGlEQUFpRHZELFlBQVl0RCxlQUFlb0YsMFpBQTBacEMsTUFBTWhELGVBQWVvRixrR0FDeGtCLENBQ0gsSUFBSSxJQUFJSixFQUFJLEVBQUdBLEVBQUlwQyxjQUFjcUMsT0FBUUQsSUFDdkNyQixZQUFjLEdBQUdBLGNBQWNmLGNBQWNvQyxHQUFHNkIsWUFFbER0RCxlQUFldUMsVUFBWSxHQUFHbkMsc0NBQXNDRixXQUFXekQsZUFBZTZHLGlEQUFpRHZELFlBQVl0RCxlQUFlb0YsMFpBQTBacEMsTUFBTWhELGVBQWVvRiw4RkFDemxCekIsWUFBYyIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IC8vaGVhZGVyIHNsaWRlciAoSFMpXHJcbiAgICBsaW5lSFMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3Rvc1wiKSxcclxuICAgIGFyckxlZnRIUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3ctbGVmdFwiKSxcclxuICAgIGFyclJpZ2h0SFMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycm93LXJpZ2h0XCIpLFxyXG4gICAgaW1nSFMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlci1zbGlkZXItaW1nXCIpLFxyXG4gICAgaW1nV2lkdGhIUyA9IGltZ0hTWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxyXG4gICAgd2lkdGhIUyA9IE1hdGgucm91bmQobGluZUhTLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSxcclxuICAgIC8vZ2FsbGVyeSBzbGlkZXIgKEdTKVxyXG4gICAgbGluZUdTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5LWxpbmVcIiksXHJcbiAgICBhcnJMZWZ0R1MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycm93LWxlZnQtZ2FsbGVyeVwiKSxcclxuICAgIGFyclJpZ2h0R1MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycm93LXJpZ2h0LWdhbGxlcnlcIiksXHJcbiAgICBwaWN0dXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2Nyb2xsZWQtcGljdHVyZVwiKSxcclxuICAgIHBpY3R1cmVXaWR0aEdTID0gcGljdHVyZXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyAxMixcclxuICAgIHdpZHRoR1MgPSBNYXRoLnJvdW5kKGxpbmVHUy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCksXHJcbiAgICAvL3Nwb25zb3Igc2xpZGVyIChTUFMpXHJcbiAgICBsaW5lU1BTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcG9uc29yXCIpLFxyXG4gICAgYXJyTGVmdFNQUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3ctbGVmdC1zcFwiKSxcclxuICAgIGFyclJpZ2h0U1BTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnJvdy1yaWdodC1zcFwiKSxcclxuICAgIHNwb25zb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zcG9uc29yLWltZy13cmFwXCIpLFxyXG4gICAgc3BvbnNvcldpZHRoU1BTID0gc3BvbnNvcnNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXHJcbiAgICB3aWR0aFNQUyA9IE1hdGgucm91bmQobGluZVNQUy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCksXHJcbiAgICAvL3Nob3Agc2xpZGVyIChTUylcclxuICAgIGxpbmVTUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvcC1wcm9kdWN0c1wiKSxcclxuICAgIGFyckxlZnRTUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3ctbGVmdC1zaG9wXCIpLFxyXG4gICAgYXJyUmlnaHRTUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3ctcmlnaHQtc2hvcFwiKSxcclxuICAgIHByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG9wLXByb2R1Y3RcIiksXHJcbiAgICBwcm9kdWN0V2lkdGhTUyA9IHByb2R1Y3RzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgMzAsXHJcbiAgICB3aWR0aFNTID0gTWF0aC5yb3VuZChsaW5lU1MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpLFxyXG4gICAgLy9wb3B1cHMgXHJcbiAgICBwcmludGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2aWNlLTNkLXByaW50ZXJcIiksXHJcbiAgICBwcmludGVyUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW50ZXItcG9wdXBcIiksXHJcbiAgICBzaXR0aW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2aWNlLXNpdHRpbmdcIiksXHJcbiAgICBzaXR0aW5nUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpdHRpZy1wb3B1cFwiKSxcclxuICAgIHdpZmlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlcnZpY2Utd2lmaVwiKSxcclxuICAgIHdpZmlQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lmaS1wb3B1cFwiKSxcclxuICAgIHByaW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2aWNlLXByaW50XCIpLFxyXG4gICAgcHJpbnRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbnQtcG9wdXBcIiksXHJcbiAgICBtaWNyb3dhdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlcnZpY2UtbWljcm93YXZlXCIpLFxyXG4gICAgbWljcm93YXZlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pY3Jvd2F2ZS1wb3B1cFwiKSxcclxuICAgIGJhc2tldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0XCIpLFxyXG4gICAgYmFza2V0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldC1wb3B1cFwiKSxcclxuICAgIC8vb3JkZXIgbWVudVxyXG4gICAgb3JkZXJQcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdFwiKSxcclxuICAgIHByb2R1Y3RQbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0LXBsdXNcIiksXHJcbiAgICBwcm9kdWN0TWludXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2R1Y3QtbWludXNcIiksXHJcbiAgICBwcm9kdWN0UXVhbnRpZnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2R1Y3QtYW1vdW50XCIpLFxyXG4gICAgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaWNlXCIpLFxyXG4gICAgcHJvZHVjdFByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0LXByaWNlXCIpLCAvLyBpbiBwb3B1cFxyXG4gICAgZGVsZXRlUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLXByb2R1Y3RcIiksXHJcbiAgICBwcm9kdWN0T3JkZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0LW9yZGVyLWluZm9cIiksXHJcbiAgICBzdW1QcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VtLXByaWNlXCIpLFxyXG4gICAgYWRkUHJvZHVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdC1idXR0b25cIiksXHJcbiAgICBwcm9kdWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdC1uYW1lXCIpLFxyXG4gICAgYmFza2V0UHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldC1wcm9kdWN0c1wiKSxcclxuICAgIHNob3BQcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvcC1wcm9kdWN0XCIpLFxyXG4gICAgcHJvZHVjdEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvcC1wcm9kdWN0IGltZ1wiKSxcclxuICAgIGJhbGFuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGFuY2VcIiksXHJcbiAgICBpbm5lclN0cmluZyA9IFwiXCIsXHJcbiAgICB0b3RhbFByaWNlID0gMCxcclxuICAgIHByb2R1Y3ROdW1iZXJcclxuXHJcbi8vaGVhZGVyIHNsaWRlciAoSFMpXHJcblxyXG5hcnJMZWZ0SFMub25jbGljayA9IGxlZnRIU1xyXG5hcnJSaWdodEhTLm9uY2xpY2sgPSByaWdodEhTXHJcbmFyckxlZnRIUy5vbmRibGNsaWNrID0gZmFsc2VTXHJcbmFyclJpZ2h0SFMub25kYmxjbGljayA9IGZhbHNlU1xyXG5cclxuZnVuY3Rpb24gbGVmdEhTIChldmVudCl7XHJcbiAgbGluZUxlZnQoZXZlbnQsIGxpbmVIUywgaW1nV2lkdGhIUylcclxufVxyXG5cclxuZnVuY3Rpb24gcmlnaHRIUyAoZXZlbnQpe1xyXG4gIGxpbmVSaWdodChldmVudCwgbGluZUhTLCB3aWR0aEhTLCBpbWdXaWR0aEhTKVxyXG59XHJcblxyXG4vL2dhbGxlcnkgc2xpZGVyIChHUylcclxuXHJcbmFyckxlZnRHUy5vbmNsaWNrID0gbGVmdEdTXHJcbmFyclJpZ2h0R1Mub25jbGljayA9IHJpZ2h0R1NcclxuYXJyTGVmdEdTLm9uZGJsY2xpY2sgPSBmYWxzZVNcclxuYXJyUmlnaHRHUy5vbmRibGNsaWNrID0gZmFsc2VTXHJcblxyXG5mdW5jdGlvbiBsZWZ0R1MgKGV2ZW50KXtcclxuICBsaW5lTGVmdChldmVudCwgbGluZUdTLCBwaWN0dXJlV2lkdGhHUylcclxufVxyXG5cclxuZnVuY3Rpb24gcmlnaHRHUyAoZXZlbnQpe1xyXG4gIGxpbmVSaWdodChldmVudCwgbGluZUdTLCB3aWR0aEdTLCBwaWN0dXJlV2lkdGhHUylcclxufVxyXG5cclxuLy9zcG9uc29yIHNsaWRlciAoU1BTKVxyXG5cclxuYXJyTGVmdFNQUy5vbmNsaWNrID0gbGVmdFNQU1xyXG5hcnJSaWdodFNQUy5vbmNsaWNrID0gcmlnaHRTUFNcclxuYXJyTGVmdFNQUy5vbmRibGNsaWNrID0gZmFsc2VTXHJcbmFyclJpZ2h0U1BTLm9uZGJsY2xpY2sgPSBmYWxzZVNcclxuXHJcbmZ1bmN0aW9uIGxlZnRTUFMgKGV2ZW50KXtcclxuICBsaW5lTGVmdChldmVudCwgbGluZVNQUywgc3BvbnNvcldpZHRoU1BTKVxyXG59XHJcblxyXG5mdW5jdGlvbiByaWdodFNQUyAoZXZlbnQpe1xyXG4gIGxpbmVSaWdodChldmVudCwgbGluZVNQUywgd2lkdGhTUFMsIHNwb25zb3JXaWR0aFNQUylcclxufVxyXG5cclxuLy9zaG9wIHNsaWRlciAoU1MpXHJcblxyXG5hcnJMZWZ0U1Mub25jbGljayA9IGxlZnRTU1xyXG5hcnJSaWdodFNTLm9uY2xpY2sgPSByaWdodFNTXHJcbmFyckxlZnRTUy5vbmRibGNsaWNrID0gZmFsc2VTXHJcbmFyclJpZ2h0U1Mub25kYmxjbGljayA9IGZhbHNlU1xyXG5cclxuZnVuY3Rpb24gbGVmdFNTIChldmVudCl7XHJcbiAgbGluZUxlZnQoZXZlbnQsIGxpbmVTUywgcHJvZHVjdFdpZHRoU1MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJpZ2h0U1MgKGV2ZW50KXtcclxuICBsaW5lUmlnaHQoZXZlbnQsIGxpbmVTUywgd2lkdGhTUywgcHJvZHVjdFdpZHRoU1MpXHJcbn1cclxuXHJcbi8vcG9wdXBzIFxyXG5cclxucHJpbnRlckJ1dHRvbi5vbmNsaWNrID0gcHJpbnRlck9wZW5cclxuXHJcbmZ1bmN0aW9uIHByaW50ZXJPcGVuIChldmVudCl7XHJcbiAgcG9wdXBPcGVuIChldmVudCwgcHJpbnRlclBvcHVwKVxyXG59XHJcblxyXG5zaXR0aW5nQnV0dG9uLm9uY2xpY2sgPSBzaXR0aW5nT3BlblxyXG5cclxuZnVuY3Rpb24gc2l0dGluZ09wZW4gKGV2ZW50KXtcclxuICBwb3B1cE9wZW4gKGV2ZW50LCBzaXR0aW5nUG9wdXApXHJcbn1cclxuXHJcbndpZmlCdXR0b24ub25jbGljayA9IHdpZmlPcGVuXHJcblxyXG5mdW5jdGlvbiB3aWZpT3BlbiAoZXZlbnQpe1xyXG4gIHBvcHVwT3BlbiAoZXZlbnQsIHdpZmlQb3B1cClcclxufVxyXG5cclxucHJpbnRCdXR0b24ub25jbGljayA9IHByaW50T3BlblxyXG5cclxuZnVuY3Rpb24gcHJpbnRPcGVuIChldmVudCl7XHJcbiAgcG9wdXBPcGVuIChldmVudCwgcHJpbnRQb3B1cClcclxufVxyXG5cclxubWljcm93YXZlQnV0dG9uLm9uY2xpY2sgPSBtaWNyb3dhdmVPcGVuXHJcblxyXG5mdW5jdGlvbiBtaWNyb3dhdmVPcGVuIChldmVudCl7XHJcbiAgcG9wdXBPcGVuIChldmVudCwgbWljcm93YXZlUG9wdXApXHJcbn1cclxuXHJcbmJhc2tldEJ1dHRvbi5vbmNsaWNrID0gYmFza2V0T3BlblxyXG5cclxuZnVuY3Rpb24gYmFza2V0T3BlbiAoZXZlbnQpe1xyXG4gIHBvcHVwT3BlbiAoZXZlbnQsIGJhc2tldFBvcHVwKVxyXG59XHJcblxyXG4vL29yZGVyIG1lbnUgXHJcbmZ1bmN0aW9uIGF0dHJpYnV0ZUFkZCAoKXtcclxuICBmb3IobGV0IGkgPSAwOyBpIDwgb3JkZXJQcm9kdWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICBvcmRlclByb2R1Y3RzW2ldLmRhdGFzZXQucHJvZHVjdE51bWJlciA9IGlcclxuICAgIHByb2R1Y3RPcmRlckluZm9baV0uZGF0YXNldC5wcm9kdWN0TnVtYmVyID0gaVxyXG4gICAgcHJvZHVjdFByaWNlW2ldLmRhdGFzZXQucHJvZHVjdFN0YXJ0aW5nUHJpY2UgPSBwcm9kdWN0UHJpY2VbaV0udGV4dENvbnRlbnQuc2xpY2UoMCwgcHJvZHVjdFByaWNlW2ldLnRleHRDb250ZW50Lmxlbmd0aC0xKVxyXG4gICAgcHJvZHVjdFByaWNlW2ldLmRhdGFzZXQucHJvZHVjdFByaWNlID0gcHJvZHVjdFByaWNlW2ldLnRleHRDb250ZW50LnNsaWNlKDAsIHByb2R1Y3RQcmljZVtpXS50ZXh0Q29udGVudC5sZW5ndGgtMSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByTWludXMgKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgcHJvZHVjdE51bWJlciA9IHRoaXMuY2xvc2VzdChcIi5wcm9kdWN0LW9yZGVyLWluZm9cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9kdWN0LW51bWJlclwiKVxyXG4gIGlmKHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0Q2hpbGQudmFsdWUgPiAwKXtcclxuICAgIHByb2R1Y3RRdWFudGlmeVtwcm9kdWN0TnVtYmVyXS52YWx1ZSA9IHByb2R1Y3RRdWFudGlmeVtwcm9kdWN0TnVtYmVyXS52YWx1ZSAtIDFcclxuICAgIHByb2R1Y3RQcmljZVtwcm9kdWN0TnVtYmVyXS5pbm5lckhUTUwgPSBgJHtwYXJzZUludChwcm9kdWN0UHJpY2VbcHJvZHVjdE51bWJlcl0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9kdWN0LXByaWNlXCIpKSAtIHBhcnNlSW50KHByb2R1Y3RQcmljZVtwcm9kdWN0TnVtYmVyXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2R1Y3Qtc3RhcnRpbmctcHJpY2VcIikpfSRgXHJcbiAgICBwcm9kdWN0UHJpY2VbcHJvZHVjdE51bWJlcl0uZGF0YXNldC5wcm9kdWN0UHJpY2UgPSBwcm9kdWN0UHJpY2VbcHJvZHVjdE51bWJlcl0udGV4dENvbnRlbnQuc2xpY2UoMCwgcHJvZHVjdFByaWNlW3Byb2R1Y3ROdW1iZXJdLnRleHRDb250ZW50Lmxlbmd0aC0xKVxyXG4gICAgdG90YWxQcmljZUNvdW50KClcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJQbHVzIChldmVudCl7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIHByb2R1Y3ROdW1iZXIgPSB0aGlzLmNsb3Nlc3QoXCIucHJvZHVjdC1vcmRlci1pbmZvXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvZHVjdC1udW1iZXJcIilcclxuICBwcm9kdWN0UXVhbnRpZnlbcHJvZHVjdE51bWJlcl0udmFsdWUgPSBwYXJzZUludChwcm9kdWN0UXVhbnRpZnlbcHJvZHVjdE51bWJlcl0udmFsdWUpICsgMVxyXG4gIHByb2R1Y3RQcmljZVtwcm9kdWN0TnVtYmVyXS5pbm5lckhUTUwgPSBgJHtwYXJzZUludChwcm9kdWN0UHJpY2VbcHJvZHVjdE51bWJlcl0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9kdWN0LXN0YXJ0aW5nLXByaWNlXCIpKSArIHBhcnNlSW50KHByb2R1Y3RQcmljZVtwcm9kdWN0TnVtYmVyXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2R1Y3QtcHJpY2VcIikpfSRgXHJcbiAgcHJvZHVjdFByaWNlW3Byb2R1Y3ROdW1iZXJdLmRhdGFzZXQucHJvZHVjdFByaWNlID0gcHJvZHVjdFByaWNlW3Byb2R1Y3ROdW1iZXJdLnRleHRDb250ZW50LnNsaWNlKDAsIHByb2R1Y3RQcmljZVtwcm9kdWN0TnVtYmVyXS50ZXh0Q29udGVudC5sZW5ndGgtMSlcclxuICB0b3RhbFByaWNlQ291bnQoKVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWx1ZUNoYW5nZSAoKXtcclxuICBwcm9kdWN0TnVtYmVyID0gdGhpcy5jbG9zZXN0KFwiLnByb2R1Y3Qtb3JkZXItaW5mb1wiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2R1Y3QtbnVtYmVyXCIpXHJcbiAgcHJvZHVjdFByaWNlW3Byb2R1Y3ROdW1iZXJdLmlubmVySFRNTCA9IGAke3BhcnNlSW50KHByb2R1Y3RQcmljZVtwcm9kdWN0TnVtYmVyXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2R1Y3Qtc3RhcnRpbmctcHJpY2VcIikpICogdGhpcy52YWx1ZX0kYFxyXG4gIHByb2R1Y3RQcmljZVtwcm9kdWN0TnVtYmVyXS5kYXRhc2V0LnByb2R1Y3RQcmljZSA9IHByb2R1Y3RQcmljZVtwcm9kdWN0TnVtYmVyXS50ZXh0Q29udGVudC5zbGljZSgwLCBwcm9kdWN0UHJpY2VbcHJvZHVjdE51bWJlcl0udGV4dENvbnRlbnQubGVuZ3RoLTEpXHJcbiAgdG90YWxQcmljZUNvdW50KClcclxufVxyXG5cclxuZnVuY3Rpb24gdG90YWxQcmljZUNvdW50ICgpe1xyXG4gIHByb2R1Y3RQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdC1wcmljZVwiKVxyXG4gIHByb2R1Y3RQcmljZS5mb3JFYWNoKChlbGVtKT0+e1xyXG4gICAgdG90YWxQcmljZSArPSBwYXJzZUludChlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvZHVjdC1wcmljZVwiKSlcclxuICB9KVxyXG4gIHN1bVByaWNlLmlubmVySFRNTCA9IGAke3RvdGFsUHJpY2V9JGBcclxuICBiYWxhbmNlLmlubmVySFRNTCA9IGAke3RvdGFsUHJpY2V9JGBcclxuICB0b3RhbFByaWNlID0gMFxyXG59XHJcblxyXG5hZGRQcm9kdWN0QnV0dG9uLmZvckVhY2goKGVsZW0pPT57XHJcbiAgZWxlbS5vbmNsaWNrID0gYWRkUHJvZHVjdFxyXG59KVxyXG5cclxuZm9yKGxldCBpID0gMDsgaSA8IHNob3BQcm9kdWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgc2hvcFByb2R1Y3RzW2ldLmRhdGFzZXQucHJvZHVjdE51bWJlciA9IGlcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvZHVjdCAoZXZlbnQpe1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBwcm9kdWN0TnVtYmVyID0gdGhpcy5jbG9zZXN0KFwiLnNob3AtcHJvZHVjdFwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2R1Y3QtbnVtYmVyXCIpXHJcbiAgXHJcbiAgcmVmcmVzaFByb2R1Y3RzKClcclxuXHJcbiAgb3JkZXJQcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdFwiKVxyXG4gIHByb2R1Y3RQbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0LXBsdXNcIilcclxuICBwcm9kdWN0TWludXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2R1Y3QtbWludXNcIilcclxuICBwcm9kdWN0UXVhbnRpZnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2R1Y3QtYW1vdW50XCIpXHJcbiAgcHJvZHVjdFByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0LXByaWNlXCIpIC8vIGluIHBvcHVwXHJcbiAgZGVsZXRlUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLXByb2R1Y3RcIilcclxuICBwcm9kdWN0T3JkZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0LW9yZGVyLWluZm9cIilcclxuICBkZWxldGVQcm9kdWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtcHJvZHVjdFwiKVxyXG5cclxuICBhdHRyaWJ1dGVBZGQoKVxyXG4gIHRvdGFsUHJpY2VDb3VudCgpXHJcblxyXG4gIHByb2R1Y3RQbHVzLmZvckVhY2goKGVsZW0pPT57XHJcbiAgICBlbGVtLm9uY2xpY2sgPSBwclBsdXNcclxuICB9KVxyXG4gIHByb2R1Y3RNaW51cy5mb3JFYWNoKChlbGVtKT0+e1xyXG4gICAgZWxlbS5vbmNsaWNrID0gcHJNaW51c1xyXG4gIH0pXHJcbiAgcHJvZHVjdFF1YW50aWZ5LmZvckVhY2goKGVsZW0pPT57XHJcbiAgICBlbGVtLm9uY2hhbmdlID0gdmFsdWVDaGFuZ2VcclxuICB9KVxyXG4gIGRlbGV0ZVByb2R1Y3QuZm9yRWFjaCgoZWxlbSk9PntcclxuICAgIGVsZW0ub25jbGljayA9IChldmVudCk9PntcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICBiYXNrZXRQcm9kdWN0cy5yZW1vdmVDaGlsZChvcmRlclByb2R1Y3RzW2VsZW0uY2xvc2VzdChcIi5wcm9kdWN0XCIpLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvZHVjdC1udW1iZXJcIildKVxyXG4gICAgICBhdHRyaWJ1dGVBZGQoKVxyXG4gICAgICB0b3RhbFByaWNlQ291bnQoKVxyXG4gICAgICBvcmRlclByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0XCIpXHJcbiAgICAgIGlubmVyU3RyaW5nID0gXCJcIlxyXG4gICAgICBhdHRyaWJ1dGVBZGQoKVxyXG4gICAgICB0b3RhbFByaWNlQ291bnQoKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZWZyZXNoUHJvZHVjdHMgKCl7XHJcbiAgYmFza2V0UHJvZHVjdHMuaW5uZXJIVE1MID0gXCJcIlxyXG4gIGlmKG9yZGVyUHJvZHVjdHNbMF0gPT09IHVuZGVmaW5lZCl7XHJcbiAgICBiYXNrZXRQcm9kdWN0cy5pbm5lckhUTUwgPSBgPGZpZ3VyZSBjbGFzcz1cInByb2R1Y3RcIj4ke3Byb2R1Y3RJbWdbcHJvZHVjdE51bWJlcl0ub3V0ZXJIVE1MfTxmaWdjYXB0aW9uPiA8cCBjbGFzcz1cInByb2R1Y3QtbmFtZVwiPiR7cHJvZHVjdE5hbWVbcHJvZHVjdE51bWJlcl0udGV4dENvbnRlbnR9PC9wPjxkaXYgY2xhc3M9XCJwcm9kdWN0LWluZm9cIj48ZGl2IGNsYXNzPVwicHJvZHVjdC1kZXNjcmlwdGlvblwiPiA8cD5zaXplIC0gTDwvcD48cD5mb3Igd29tZW48L3A+PC9kaXY+PGRpdiBjbGFzcz1cInByb2R1Y3Qtb3JkZXItaW5mb1wiPiA8Zm9ybSBjbGFzcz1cInByb2R1Y3QtcXVhbnRpdHlcIj4gPGJ1dHRvbiBjbGFzcz1cInByb2R1Y3QtbWludXNcIj4tPC9idXR0b24+PGxhYmVsPjxpbnB1dCBjbGFzcz1cInByb2R1Y3QtYW1vdW50XCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJwcm9kdWN0LXF1YW50aXR5XCIgdmFsdWU9XCIxXCIvPjwvbGFiZWw+PGJ1dHRvbiBjbGFzcz1cInByb2R1Y3QtcGx1c1wiPis8L2J1dHRvbj48L2Zvcm0+PGRpdiBjbGFzcz1cInByaWNlLXdyYXBcIj4gPHAgY2xhc3M9XCJwcm9kdWN0LXByaWNlXCI+JHtwcmljZVtwcm9kdWN0TnVtYmVyXS50ZXh0Q29udGVudH08L3A+PHNwYW4gY2xhc3M9XCJkZWxldGUtcHJvZHVjdFwiPjwvc3Bhbj48L2Rpdj48L2Rpdj48L2Rpdj48L2ZpZ2NhcHRpb24+PC9maWd1cmU+YFxyXG4gIH1lbHNle1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG9yZGVyUHJvZHVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICBpbm5lclN0cmluZyA9IGAke2lubmVyU3RyaW5nfSR7b3JkZXJQcm9kdWN0c1tpXS5vdXRlckhUTUx9YFxyXG4gICAgfVxyXG4gICAgYmFza2V0UHJvZHVjdHMuaW5uZXJIVE1MID0gYCR7aW5uZXJTdHJpbmd9PGZpZ3VyZSBjbGFzcz1cInByb2R1Y3RcIj4ke3Byb2R1Y3RJbWdbcHJvZHVjdE51bWJlcl0ub3V0ZXJIVE1MfTxmaWdjYXB0aW9uPiA8cCBjbGFzcz1cInByb2R1Y3QtbmFtZVwiPiR7cHJvZHVjdE5hbWVbcHJvZHVjdE51bWJlcl0udGV4dENvbnRlbnR9PC9wPjxkaXYgY2xhc3M9XCJwcm9kdWN0LWluZm9cIj48ZGl2IGNsYXNzPVwicHJvZHVjdC1kZXNjcmlwdGlvblwiPiA8cD5zaXplIC0gTDwvcD48cD5mb3Igd29tZW48L3A+PC9kaXY+PGRpdiBjbGFzcz1cInByb2R1Y3Qtb3JkZXItaW5mb1wiPiA8Zm9ybSBjbGFzcz1cInByb2R1Y3QtcXVhbnRpdHlcIj4gPGJ1dHRvbiBjbGFzcz1cInByb2R1Y3QtbWludXNcIj4tPC9idXR0b24+PGxhYmVsPjxpbnB1dCBjbGFzcz1cInByb2R1Y3QtYW1vdW50XCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJwcm9kdWN0LXF1YW50aXR5XCIgdmFsdWU9XCIxXCIvPjwvbGFiZWw+PGJ1dHRvbiBjbGFzcz1cInByb2R1Y3QtcGx1c1wiPis8L2J1dHRvbj48L2Zvcm0+PGRpdiBjbGFzcz1cInByaWNlLXdyYXBcIj4gPHAgY2xhc3M9XCJwcm9kdWN0LXByaWNlXCI+JHtwcmljZVtwcm9kdWN0TnVtYmVyXS50ZXh0Q29udGVudH08L3A+PHNwYW4gY2xhc3M9XCJkZWxldGUtcHJvZHVjdFwiPjwvc3Bhbj48L2Rpdj48L2Rpdj48L2Rpdj48L2ZpZ2NhcHRpb24+PC9maWd1cmU+YFxyXG4gICAgaW5uZXJTdHJpbmcgPSBcIlwiXHJcbiAgfVxyXG59Il19
