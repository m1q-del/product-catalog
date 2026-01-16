function addProduct(catalog, product){
    if(!catalog[product.id]){
        return {...catalog, [product.id]:product}
    }

    return catalog
}


function removeProduct(catalog, productId){
    const {[productId]: removed , ...newCatalog} = catalog

    return newCatalog
}

function updateProduct(catalog, productId, updates){
    if(!catalog[productId]){
        return catalog
    }


    return {
        ...catalog, [productId]: {
            ...catalog[productId], ...updates
        }
    }
}

function hasProduct(catalog, productId){
    return productId in catalog
}

function getProduct(catalog, productId){
    if(productId in catalog){
        return {...catalog[productId]}
    }

    return null
}