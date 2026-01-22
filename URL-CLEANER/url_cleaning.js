let messyUrl= "  HTTPS://WWW.Example.Com// shop // products///item.html?id=123&utm_source=google$utm=medium=email&&ref=facebook "  ;
function cleanUrl(url){
   let  cleanedUrl = url.trim();
    cleanedUrl = cleanedUrl.toLowerCase();
    cleanedUrl= cleanedUrl.replace(/\s+/g,""); // remove spaces inside url
    cleanedUrl=cleanedUrl.replace("www.","");
    cleanedUrl=cleanedUrl.replace(/\/+/g,"/");  // replace multiple slashes with single slash
    //fix https protocol 
    cleanedUrl=cleanedUrl.replace("https:/","https://");
    // fix invalid separator 
    cleanedUrl=cleanedUrl.replace(/\$+/g,"&");
    let parts =cleanedUrl.split("?");
    let baseUrl=parts[0];
    if(parts[1]){

        let  params= parts[1].split("&");
        let filteredParams=params.filter(param=>!param.startsWith("utm"));
        cleanedUrl=baseUrl + "?" + filteredParams.join("&");

    }
    cleanedUrl=cleanedUrl.replace(/\&+/g,"&");



   return cleanedUrl;

}
console.log(cleanUrl(messyUrl));