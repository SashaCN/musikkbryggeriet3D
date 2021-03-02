let productNumber,orderProducts=document.querySelectorAll(".product"),productPlus=document.querySelectorAll(".product-plus"),productMinus=document.querySelectorAll(".product-minus"),productQuantify=document.querySelectorAll(".product-amount"),productPrice=document.querySelectorAll(".product-price"),deleteProduct=document.querySelectorAll(".delete-product"),productOrderInfo=document.querySelectorAll(".product-order-info"),sumPrice=document.querySelector(".sum-price"),basketProducts=document.querySelector(".basket-products"),balance=document.querySelector(".balance"),innerString="",totalPrice=0;function attributeAdd(){for(let t=0;t<orderProducts.length;t++)orderProducts[t].dataset.productNumber=t,productPrice[t].dataset.productStartingPrice=productPrice[t].textContent.slice(0,productPrice[t].textContent.length-1),productPrice[t].dataset.productPrice=productPrice[t].textContent.slice(0,productPrice[t].textContent.length-1)}function prMinus(t){if(t.preventDefault(),productNumber=this.closest(".product").getAttribute("data-product-number"),!(productQuantify[productNumber].value>0))return!1;productQuantify[productNumber].value=productQuantify[productNumber].value-1,productQuantify[productNumber].setAttribute("value",productQuantify[productNumber].value),localStorageAdd(),productPrice[productNumber].innerHTML=parseInt(productPrice[productNumber].getAttribute("data-product-price"))-parseInt(productPrice[productNumber].getAttribute("data-product-starting-price"))+"$",productPrice[productNumber].dataset.productPrice=productPrice[productNumber].textContent.slice(0,productPrice[productNumber].textContent.length-1),totalPriceCount()}function prPlus(t){t.preventDefault(),productNumber=this.closest(".product").getAttribute("data-product-number"),productQuantify[productNumber].value=parseInt(productQuantify[productNumber].value)+1,productQuantify[productNumber].setAttribute("value",productQuantify[productNumber].value),localStorageAdd(),productPrice[productNumber].innerHTML=parseInt(productPrice[productNumber].getAttribute("data-product-starting-price"))+parseInt(productPrice[productNumber].getAttribute("data-product-price"))+"$",productPrice[productNumber].dataset.productPrice=productPrice[productNumber].textContent.slice(0,productPrice[productNumber].textContent.length-1),totalPriceCount()}function valueChange(){productNumber=this.closest(".product").getAttribute("data-product-number"),productQuantify[productNumber].setAttribute("value",productQuantify[productNumber].value),localStorageAdd(),productPrice[productNumber].innerHTML=parseInt(productPrice[productNumber].getAttribute("data-product-starting-price"))*this.value+"$",productPrice[productNumber].dataset.productPrice=productPrice[productNumber].textContent.slice(0,productPrice[productNumber].textContent.length-1),totalPriceCount()}function totalPriceCount(){productPrice=document.querySelectorAll(".product-price"),productPrice.forEach(t=>{totalPrice+=parseInt(t.getAttribute("data-product-price"))}),sumPrice.innerHTML=totalPrice+"$",balance.innerHTML=totalPrice+"$",totalPrice=0}function refreshProducts(){orderProducts=document.querySelectorAll(".product"),productPlus=document.querySelectorAll(".product-plus"),productMinus=document.querySelectorAll(".product-minus"),productQuantify=document.querySelectorAll(".product-amount"),productPrice=document.querySelectorAll(".product-price"),deleteProduct=document.querySelectorAll(".delete-product"),productOrderInfo=document.querySelectorAll(".product-order-info"),deleteProduct=document.querySelectorAll(".delete-product"),attributeAdd(),totalPriceCount(),productPlus.forEach(t=>{t.onclick=prPlus}),productMinus.forEach(t=>{t.onclick=prMinus}),productQuantify.forEach(t=>{t.onchange=valueChange}),deleteProduct.forEach(t=>{t.onclick=e=>{e.preventDefault(),basketProducts.removeChild(orderProducts[t.closest(".product").getAttribute("data-product-number")]),orderProducts=document.querySelectorAll(".product"),localStorage.basketContent=basketProducts.innerHTML,void 0===orderProducts[0]&&(basketProducts.innerHTML='<p class="basket-clear">Basket is clear</p>'),innerString="",attributeAdd(),totalPriceCount(),localStorage.basketPrice=balance.innerHTML}}),localStorageAdd()}function localStorageAdd(){localStorage.basketContent=basketProducts.innerHTML,localStorage.basketPrice=balance.innerHTML}void 0!==localStorage.basketContent&&""!=localStorage.basketContent&&(basketProducts.innerHTML=localStorage.basketContent,refreshProducts()),""==localStorage.basketContent&&(basketProducts.innerHTML='<p class="basket-clear">Basket is clear</p>');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2tldC5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0TnVtYmVyIiwib3JkZXJQcm9kdWN0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInByb2R1Y3RQbHVzIiwicHJvZHVjdE1pbnVzIiwicHJvZHVjdFF1YW50aWZ5IiwicHJvZHVjdFByaWNlIiwiZGVsZXRlUHJvZHVjdCIsInByb2R1Y3RPcmRlckluZm8iLCJzdW1QcmljZSIsInF1ZXJ5U2VsZWN0b3IiLCJiYXNrZXRQcm9kdWN0cyIsImJhbGFuY2UiLCJpbm5lclN0cmluZyIsInRvdGFsUHJpY2UiLCJhdHRyaWJ1dGVBZGQiLCJpIiwibGVuZ3RoIiwiZGF0YXNldCIsInByb2R1Y3RTdGFydGluZ1ByaWNlIiwidGV4dENvbnRlbnQiLCJzbGljZSIsInByTWludXMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGhpcyIsImNsb3Nlc3QiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsImxvY2FsU3RvcmFnZUFkZCIsImlubmVySFRNTCIsInBhcnNlSW50IiwidG90YWxQcmljZUNvdW50IiwicHJQbHVzIiwidmFsdWVDaGFuZ2UiLCJmb3JFYWNoIiwiZWxlbSIsInJlZnJlc2hQcm9kdWN0cyIsIm9uY2xpY2siLCJvbmNoYW5nZSIsInJlbW92ZUNoaWxkIiwibG9jYWxTdG9yYWdlIiwiYmFza2V0Q29udGVudCIsInVuZGVmaW5lZCIsImJhc2tldFByaWNlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQVlJQSxjQVpBQyxjQUFnQkMsU0FBU0MsaUJBQWlCLFlBQzFDQyxZQUFjRixTQUFTQyxpQkFBaUIsaUJBQ3hDRSxhQUFlSCxTQUFTQyxpQkFBaUIsa0JBQ3pDRyxnQkFBa0JKLFNBQVNDLGlCQUFpQixtQkFDNUNJLGFBQWVMLFNBQVNDLGlCQUFpQixrQkFDekNLLGNBQWdCTixTQUFTQyxpQkFBaUIsbUJBQzFDTSxpQkFBbUJQLFNBQVNDLGlCQUFpQix1QkFDN0NPLFNBQVdSLFNBQVNTLGNBQWMsY0FDbENDLGVBQWlCVixTQUFTUyxjQUFjLG9CQUN4Q0UsUUFBVVgsU0FBU1MsY0FBYyxZQUNqQ0csWUFBYyxHQUNkQyxXQUFhLEVBVWpCLFNBQVNDLGVBQ1AsSUFBSSxJQUFJQyxFQUFJLEVBQUdBLEVBQUloQixjQUFjaUIsT0FBUUQsSUFDdkNoQixjQUFjZ0IsR0FBR0UsUUFBUW5CLGNBQWdCaUIsRUFDekNWLGFBQWFVLEdBQUdFLFFBQVFDLHFCQUF1QmIsYUFBYVUsR0FBR0ksWUFBWUMsTUFBTSxFQUFHZixhQUFhVSxHQUFHSSxZQUFZSCxPQUFPLEdBQ3ZIWCxhQUFhVSxHQUFHRSxRQUFRWixhQUFlQSxhQUFhVSxHQUFHSSxZQUFZQyxNQUFNLEVBQUdmLGFBQWFVLEdBQUdJLFlBQVlILE9BQU8sR0FJbkgsU0FBU0ssUUFBU0MsR0FHaEIsR0FGQUEsRUFBTUMsaUJBQ056QixjQUFnQjBCLEtBQUtDLFFBQVEsWUFBWUMsYUFBYSx5QkFDbkR0QixnQkFBZ0JOLGVBQWU2QixNQUFRLEdBUXhDLE9BQU8sRUFQUHZCLGdCQUFnQk4sZUFBZTZCLE1BQVF2QixnQkFBZ0JOLGVBQWU2QixNQUFRLEVBQzlFdkIsZ0JBQWdCTixlQUFlOEIsYUFBYSxRQUFTeEIsZ0JBQWdCTixlQUFlNkIsT0FDcEZFLGtCQUNBeEIsYUFBYVAsZUFBZWdDLFVBQWVDLFNBQVMxQixhQUFhUCxlQUFlNEIsYUFBYSx1QkFBeUJLLFNBQVMxQixhQUFhUCxlQUFlNEIsYUFBYSxnQ0FBaEksSUFDeENyQixhQUFhUCxlQUFlbUIsUUFBUVosYUFBZUEsYUFBYVAsZUFBZXFCLFlBQVlDLE1BQU0sRUFBR2YsYUFBYVAsZUFBZXFCLFlBQVlILE9BQU8sR0FDbkpnQixrQkFNSixTQUFTQyxPQUFRWCxHQUNmQSxFQUFNQyxpQkFDTnpCLGNBQWdCMEIsS0FBS0MsUUFBUSxZQUFZQyxhQUFhLHVCQUN0RHRCLGdCQUFnQk4sZUFBZTZCLE1BQVFJLFNBQVMzQixnQkFBZ0JOLGVBQWU2QixPQUFTLEVBQ3hGdkIsZ0JBQWdCTixlQUFlOEIsYUFBYSxRQUFTeEIsZ0JBQWdCTixlQUFlNkIsT0FDcEZFLGtCQUNBeEIsYUFBYVAsZUFBZWdDLFVBQWVDLFNBQVMxQixhQUFhUCxlQUFlNEIsYUFBYSxnQ0FBa0NLLFNBQVMxQixhQUFhUCxlQUFlNEIsYUFBYSx1QkFBekksSUFDeENyQixhQUFhUCxlQUFlbUIsUUFBUVosYUFBZUEsYUFBYVAsZUFBZXFCLFlBQVlDLE1BQU0sRUFBR2YsYUFBYVAsZUFBZXFCLFlBQVlILE9BQU8sR0FDbkpnQixrQkFHRixTQUFTRSxjQUNQcEMsY0FBZ0IwQixLQUFLQyxRQUFRLFlBQVlDLGFBQWEsdUJBQ3REdEIsZ0JBQWdCTixlQUFlOEIsYUFBYSxRQUFTeEIsZ0JBQWdCTixlQUFlNkIsT0FDcEZFLGtCQUNBeEIsYUFBYVAsZUFBZWdDLFVBQWVDLFNBQVMxQixhQUFhUCxlQUFlNEIsYUFBYSxnQ0FBa0NGLEtBQUtHLE1BQTVGLElBQ3hDdEIsYUFBYVAsZUFBZW1CLFFBQVFaLGFBQWVBLGFBQWFQLGVBQWVxQixZQUFZQyxNQUFNLEVBQUdmLGFBQWFQLGVBQWVxQixZQUFZSCxPQUFPLEdBQ25KZ0Isa0JBR0YsU0FBU0Esa0JBQ1AzQixhQUFlTCxTQUFTQyxpQkFBaUIsa0JBQ3pDSSxhQUFhOEIsUUFBU0MsSUFDcEJ2QixZQUFja0IsU0FBU0ssRUFBS1YsYUFBYSx5QkFFM0NsQixTQUFTc0IsVUFBZWpCLFdBQUgsSUFDckJGLFFBQVFtQixVQUFlakIsV0FBSCxJQUNwQkEsV0FBYSxFQUdmLFNBQVN3QixrQkFDUHRDLGNBQWdCQyxTQUFTQyxpQkFBaUIsWUFDMUNDLFlBQWNGLFNBQVNDLGlCQUFpQixpQkFDeENFLGFBQWVILFNBQVNDLGlCQUFpQixrQkFDekNHLGdCQUFrQkosU0FBU0MsaUJBQWlCLG1CQUM1Q0ksYUFBZUwsU0FBU0MsaUJBQWlCLGtCQUN6Q0ssY0FBZ0JOLFNBQVNDLGlCQUFpQixtQkFDMUNNLGlCQUFtQlAsU0FBU0MsaUJBQWlCLHVCQUM3Q0ssY0FBZ0JOLFNBQVNDLGlCQUFpQixtQkFFMUNhLGVBQ0FrQixrQkFFQTlCLFlBQVlpQyxRQUFTQyxJQUNuQkEsRUFBS0UsUUFBVUwsU0FFakI5QixhQUFhZ0MsUUFBU0MsSUFDcEJBLEVBQUtFLFFBQVVqQixVQUVqQmpCLGdCQUFnQitCLFFBQVNDLElBQ3ZCQSxFQUFLRyxTQUFXTCxjQUVsQjVCLGNBQWM2QixRQUFTQyxJQUNyQkEsRUFBS0UsUUFBV2hCLElBQ2RBLEVBQU1DLGlCQUNOYixlQUFlOEIsWUFBWXpDLGNBQWNxQyxFQUFLWCxRQUFRLFlBQVlDLGFBQWEseUJBQy9FM0IsY0FBZ0JDLFNBQVNDLGlCQUFpQixZQUMxQ3dDLGFBQWFDLGNBQWdCaEMsZUFBZW9CLGVBQ3BCYSxJQUFyQjVDLGNBQWMsS0FDZlcsZUFBZW9CLFVBQVksK0NBRTdCbEIsWUFBYyxHQUNkRSxlQUNBa0Isa0JBQ0FTLGFBQWFHLFlBQWNqQyxRQUFRbUIsYUFHdkNELGtCQUdGLFNBQVNBLGtCQUNQWSxhQUFhQyxjQUFnQmhDLGVBQWVvQixVQUM1Q1csYUFBYUcsWUFBY2pDLFFBQVFtQixlQXRHSGEsSUFBL0JGLGFBQWFDLGVBQTZELElBQTlCRCxhQUFhQyxnQkFDMURoQyxlQUFlb0IsVUFBWVcsYUFBYUMsY0FDeENMLG1CQUNnQyxJQUE5QkksYUFBYUMsZ0JBQ2ZoQyxlQUFlb0IsVUFBWSIsImZpbGUiOiJiYXNrZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgb3JkZXJQcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdFwiKSxcclxuICAgIHByb2R1Y3RQbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0LXBsdXNcIiksXHJcbiAgICBwcm9kdWN0TWludXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2R1Y3QtbWludXNcIiksXHJcbiAgICBwcm9kdWN0UXVhbnRpZnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2R1Y3QtYW1vdW50XCIpLFxyXG4gICAgcHJvZHVjdFByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0LXByaWNlXCIpLCAvLyBpbiBwb3B1cFxyXG4gICAgZGVsZXRlUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLXByb2R1Y3RcIiksXHJcbiAgICBwcm9kdWN0T3JkZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0LW9yZGVyLWluZm9cIiksXHJcbiAgICBzdW1QcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VtLXByaWNlXCIpLFxyXG4gICAgYmFza2V0UHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldC1wcm9kdWN0c1wiKSxcclxuICAgIGJhbGFuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGFuY2VcIiksXHJcbiAgICBpbm5lclN0cmluZyA9IFwiXCIsXHJcbiAgICB0b3RhbFByaWNlID0gMCxcclxuICAgIHByb2R1Y3ROdW1iZXJcclxuXHJcbmlmKGxvY2FsU3RvcmFnZS5iYXNrZXRDb250ZW50ICE9PSB1bmRlZmluZWQgJiYgbG9jYWxTdG9yYWdlLmJhc2tldENvbnRlbnQgIT0gXCJcIil7XHJcbiAgYmFza2V0UHJvZHVjdHMuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmJhc2tldENvbnRlbnRcclxuICByZWZyZXNoUHJvZHVjdHMgKClcclxufWlmKGxvY2FsU3RvcmFnZS5iYXNrZXRDb250ZW50ID09IFwiXCIpe1xyXG4gIGJhc2tldFByb2R1Y3RzLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cImJhc2tldC1jbGVhclwiPkJhc2tldCBpcyBjbGVhcjwvcD5gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dHJpYnV0ZUFkZCAoKXtcclxuICBmb3IobGV0IGkgPSAwOyBpIDwgb3JkZXJQcm9kdWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICBvcmRlclByb2R1Y3RzW2ldLmRhdGFzZXQucHJvZHVjdE51bWJlciA9IGlcclxuICAgIHByb2R1Y3RQcmljZVtpXS5kYXRhc2V0LnByb2R1Y3RTdGFydGluZ1ByaWNlID0gcHJvZHVjdFByaWNlW2ldLnRleHRDb250ZW50LnNsaWNlKDAsIHByb2R1Y3RQcmljZVtpXS50ZXh0Q29udGVudC5sZW5ndGgtMSlcclxuICAgIHByb2R1Y3RQcmljZVtpXS5kYXRhc2V0LnByb2R1Y3RQcmljZSA9IHByb2R1Y3RQcmljZVtpXS50ZXh0Q29udGVudC5zbGljZSgwLCBwcm9kdWN0UHJpY2VbaV0udGV4dENvbnRlbnQubGVuZ3RoLTEpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwck1pbnVzIChldmVudCl7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIHByb2R1Y3ROdW1iZXIgPSB0aGlzLmNsb3Nlc3QoXCIucHJvZHVjdFwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2R1Y3QtbnVtYmVyXCIpXHJcbiAgaWYocHJvZHVjdFF1YW50aWZ5W3Byb2R1Y3ROdW1iZXJdLnZhbHVlID4gMCl7XHJcbiAgICBwcm9kdWN0UXVhbnRpZnlbcHJvZHVjdE51bWJlcl0udmFsdWUgPSBwcm9kdWN0UXVhbnRpZnlbcHJvZHVjdE51bWJlcl0udmFsdWUgLSAxXHJcbiAgICBwcm9kdWN0UXVhbnRpZnlbcHJvZHVjdE51bWJlcl0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJvZHVjdFF1YW50aWZ5W3Byb2R1Y3ROdW1iZXJdLnZhbHVlKSBcclxuICAgIGxvY2FsU3RvcmFnZUFkZCAoKVxyXG4gICAgcHJvZHVjdFByaWNlW3Byb2R1Y3ROdW1iZXJdLmlubmVySFRNTCA9IGAke3BhcnNlSW50KHByb2R1Y3RQcmljZVtwcm9kdWN0TnVtYmVyXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2R1Y3QtcHJpY2VcIikpIC0gcGFyc2VJbnQocHJvZHVjdFByaWNlW3Byb2R1Y3ROdW1iZXJdLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvZHVjdC1zdGFydGluZy1wcmljZVwiKSl9JGBcclxuICAgIHByb2R1Y3RQcmljZVtwcm9kdWN0TnVtYmVyXS5kYXRhc2V0LnByb2R1Y3RQcmljZSA9IHByb2R1Y3RQcmljZVtwcm9kdWN0TnVtYmVyXS50ZXh0Q29udGVudC5zbGljZSgwLCBwcm9kdWN0UHJpY2VbcHJvZHVjdE51bWJlcl0udGV4dENvbnRlbnQubGVuZ3RoLTEpXHJcbiAgICB0b3RhbFByaWNlQ291bnQoKVxyXG4gIH1lbHNle1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwclBsdXMgKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgcHJvZHVjdE51bWJlciA9IHRoaXMuY2xvc2VzdChcIi5wcm9kdWN0XCIpLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvZHVjdC1udW1iZXJcIilcclxuICBwcm9kdWN0UXVhbnRpZnlbcHJvZHVjdE51bWJlcl0udmFsdWUgPSBwYXJzZUludChwcm9kdWN0UXVhbnRpZnlbcHJvZHVjdE51bWJlcl0udmFsdWUpICsgMVxyXG4gIHByb2R1Y3RRdWFudGlmeVtwcm9kdWN0TnVtYmVyXS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcm9kdWN0UXVhbnRpZnlbcHJvZHVjdE51bWJlcl0udmFsdWUpXHJcbiAgbG9jYWxTdG9yYWdlQWRkICgpXHJcbiAgcHJvZHVjdFByaWNlW3Byb2R1Y3ROdW1iZXJdLmlubmVySFRNTCA9IGAke3BhcnNlSW50KHByb2R1Y3RQcmljZVtwcm9kdWN0TnVtYmVyXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2R1Y3Qtc3RhcnRpbmctcHJpY2VcIikpICsgcGFyc2VJbnQocHJvZHVjdFByaWNlW3Byb2R1Y3ROdW1iZXJdLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvZHVjdC1wcmljZVwiKSl9JGBcclxuICBwcm9kdWN0UHJpY2VbcHJvZHVjdE51bWJlcl0uZGF0YXNldC5wcm9kdWN0UHJpY2UgPSBwcm9kdWN0UHJpY2VbcHJvZHVjdE51bWJlcl0udGV4dENvbnRlbnQuc2xpY2UoMCwgcHJvZHVjdFByaWNlW3Byb2R1Y3ROdW1iZXJdLnRleHRDb250ZW50Lmxlbmd0aC0xKVxyXG4gIHRvdGFsUHJpY2VDb3VudCgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbHVlQ2hhbmdlICgpe1xyXG4gIHByb2R1Y3ROdW1iZXIgPSB0aGlzLmNsb3Nlc3QoXCIucHJvZHVjdFwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2R1Y3QtbnVtYmVyXCIpXHJcbiAgcHJvZHVjdFF1YW50aWZ5W3Byb2R1Y3ROdW1iZXJdLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb2R1Y3RRdWFudGlmeVtwcm9kdWN0TnVtYmVyXS52YWx1ZSlcclxuICBsb2NhbFN0b3JhZ2VBZGQgKClcclxuICBwcm9kdWN0UHJpY2VbcHJvZHVjdE51bWJlcl0uaW5uZXJIVE1MID0gYCR7cGFyc2VJbnQocHJvZHVjdFByaWNlW3Byb2R1Y3ROdW1iZXJdLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvZHVjdC1zdGFydGluZy1wcmljZVwiKSkgKiB0aGlzLnZhbHVlfSRgXHJcbiAgcHJvZHVjdFByaWNlW3Byb2R1Y3ROdW1iZXJdLmRhdGFzZXQucHJvZHVjdFByaWNlID0gcHJvZHVjdFByaWNlW3Byb2R1Y3ROdW1iZXJdLnRleHRDb250ZW50LnNsaWNlKDAsIHByb2R1Y3RQcmljZVtwcm9kdWN0TnVtYmVyXS50ZXh0Q29udGVudC5sZW5ndGgtMSlcclxuICB0b3RhbFByaWNlQ291bnQoKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b3RhbFByaWNlQ291bnQgKCl7XHJcbiAgcHJvZHVjdFByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0LXByaWNlXCIpXHJcbiAgcHJvZHVjdFByaWNlLmZvckVhY2goKGVsZW0pPT57XHJcbiAgICB0b3RhbFByaWNlICs9IHBhcnNlSW50KGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9kdWN0LXByaWNlXCIpKVxyXG4gIH0pXHJcbiAgc3VtUHJpY2UuaW5uZXJIVE1MID0gYCR7dG90YWxQcmljZX0kYFxyXG4gIGJhbGFuY2UuaW5uZXJIVE1MID0gYCR7dG90YWxQcmljZX0kYFxyXG4gIHRvdGFsUHJpY2UgPSAwXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hQcm9kdWN0cyAoKXtcclxuICBvcmRlclByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0XCIpXHJcbiAgcHJvZHVjdFBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2R1Y3QtcGx1c1wiKVxyXG4gIHByb2R1Y3RNaW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdC1taW51c1wiKVxyXG4gIHByb2R1Y3RRdWFudGlmeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdC1hbW91bnRcIilcclxuICBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2R1Y3QtcHJpY2VcIikgLy8gaW4gcG9wdXBcclxuICBkZWxldGVQcm9kdWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtcHJvZHVjdFwiKVxyXG4gIHByb2R1Y3RPcmRlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2R1Y3Qtb3JkZXItaW5mb1wiKVxyXG4gIGRlbGV0ZVByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS1wcm9kdWN0XCIpXHJcblxyXG4gIGF0dHJpYnV0ZUFkZCgpXHJcbiAgdG90YWxQcmljZUNvdW50KClcclxuXHJcbiAgcHJvZHVjdFBsdXMuZm9yRWFjaCgoZWxlbSk9PntcclxuICAgIGVsZW0ub25jbGljayA9IHByUGx1c1xyXG4gIH0pXHJcbiAgcHJvZHVjdE1pbnVzLmZvckVhY2goKGVsZW0pPT57XHJcbiAgICBlbGVtLm9uY2xpY2sgPSBwck1pbnVzXHJcbiAgfSlcclxuICBwcm9kdWN0UXVhbnRpZnkuZm9yRWFjaCgoZWxlbSk9PntcclxuICAgIGVsZW0ub25jaGFuZ2UgPSB2YWx1ZUNoYW5nZVxyXG4gIH0pXHJcbiAgZGVsZXRlUHJvZHVjdC5mb3JFYWNoKChlbGVtKT0+e1xyXG4gICAgZWxlbS5vbmNsaWNrID0gKGV2ZW50KT0+e1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIGJhc2tldFByb2R1Y3RzLnJlbW92ZUNoaWxkKG9yZGVyUHJvZHVjdHNbZWxlbS5jbG9zZXN0KFwiLnByb2R1Y3RcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9kdWN0LW51bWJlclwiKV0pXHJcbiAgICAgIG9yZGVyUHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2R1Y3RcIilcclxuICAgICAgbG9jYWxTdG9yYWdlLmJhc2tldENvbnRlbnQgPSBiYXNrZXRQcm9kdWN0cy5pbm5lckhUTUxcclxuICAgICAgaWYob3JkZXJQcm9kdWN0c1swXSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBiYXNrZXRQcm9kdWN0cy5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJiYXNrZXQtY2xlYXJcIj5CYXNrZXQgaXMgY2xlYXI8L3A+YFxyXG4gICAgICB9XHJcbiAgICAgIGlubmVyU3RyaW5nID0gXCJcIlxyXG4gICAgICBhdHRyaWJ1dGVBZGQoKVxyXG4gICAgICB0b3RhbFByaWNlQ291bnQoKVxyXG4gICAgICBsb2NhbFN0b3JhZ2UuYmFza2V0UHJpY2UgPSBiYWxhbmNlLmlubmVySFRNTFxyXG4gICAgfVxyXG4gIH0pXHJcbiAgbG9jYWxTdG9yYWdlQWRkICgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvY2FsU3RvcmFnZUFkZCAoKXtcclxuICBsb2NhbFN0b3JhZ2UuYmFza2V0Q29udGVudCA9IGJhc2tldFByb2R1Y3RzLmlubmVySFRNTFxyXG4gIGxvY2FsU3RvcmFnZS5iYXNrZXRQcmljZSA9IGJhbGFuY2UuaW5uZXJIVE1MXHJcbn0iXX0=
