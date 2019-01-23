const checkIfImageExist = fetchedData => {
    for (let resultFetch of fetchedData) {
        if ( resultFetch.pagemap.cse_image ){
            console.log('si entro a la condicion', resultFetch.pagemap.cse_image[0].src);
            return resultFetch.pagemap.cse_image[0].src;
        }
      }
    return null;
}

export { checkIfImageExist };

// cacheId: "8jdNChwhVCgJ"
// displayLink: "www.mobile.de"
// formattedUrl: "https://www.mobile.de/nl/.../bmw-i/vhc:car,pgn:99,pgs:10,ms1:3500__i"
// htmlFormattedUrl: "https://www.mobile.de/nl/.../<b>bmw-i</b>/vhc:car,pgn:99,pgs:10,ms1:3500__i"
// htmlSnippet: "Kies uit het grote aanbod van gebruikte Auto-voertuigen van <b>BMW i</b> in ons deel <br>↵met bedrijfswagens voor aankoop en verkoop op mobile.de."
// htmlTitle: "<b>BMW i</b> gebruikt | Auto gebruikt | mobile.de"
// kind: "customsearch#result"
// link: "https://www.mobile.de/nl/auto/bmw-i/vhc:car,pgn:99,pgs:10,ms1:3500__i"
// pagemap: {cse_thumbnail: Array(1), metatags: Array(1), cse_image: Array(1)}
// snippet: "Kies uit het grote aanbod van gebruikte Auto-voertuigen van BMW i in ons deel ↵met bedrijfswagens voor aankoop en verkoop op mobile.de."
// title: "BMW i gebruikt | Auto gebruikt | mobile.de"