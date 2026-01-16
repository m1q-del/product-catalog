function listProducts(catalog){
    const result = []

    for(let productId in catalog){
        
        if(catalog.hasOwnProperty(productId)){
            result.push({...catalog[productId]})
        }
    }

    return result
}

function filterByCategory(catalog, categoryName){
    const result = []

    for(let productId in catalog){
        const product = catalog[productId]
    
        if(product.category && product.category.main === categoryName){
            result.push({...product})
        }
    }

    return result
}

function mergeCatalogs(c1, c2){
    return {
        ...c1,
        ...c2
    }
}


function cloneCatalog(catalog){
    return JSON.parse(JSON.stringify(catalog))
}

function searchByName(catalog, query){
    const result = []

    for(let productId in catalog){
        const product = catalog[productId]

        if(product.name.toLowerCase().includes(query.toLowerCase())){
            result.push({...product})
        }
    }

    return result
}

function generateId(catalog){
    const random = Math.floor(Math.random() * 10000)

    const newId = `p${random.toString().padStart(4,"0")}`

    if(catalog[newId]){
        return generateId(catalog)
    }

    return newId
}