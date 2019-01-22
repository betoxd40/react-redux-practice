const checkIfImageExist = fetchedData => {
    for (let resultFetch of fetchedData) {
        if ( resultFetch.pagemap.cse_image ){
            return resultFetch.pagemap.cse_image[0].src;
        }
      }
    return null;
}

export { checkIfImageExist };