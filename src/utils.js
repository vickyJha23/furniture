import { products } from "./assets/Static/staticdata";

export const handlePagination = (currentPage) => {
     const pageSize = 10;
     const totalPages = Math.ceil(products.length / pageSize);
     const startIndex = (currentPage - 1) * pageSize;
     const lastIndex = startIndex + pageSize;
     const paginatedProduct = products.slice(startIndex, lastIndex);
     return {paginatedProduct, totalPages};
}


export const handleCategories = (products) => {
     const modifiedArr = products.reduce((acc, currentProduct) => {
         const productIndex = acc.findIndex((item) => item.category.toLowerCase() === currentProduct.category.toLowerCase());
        if(productIndex !== -1){
               acc[productIndex] = {
                     ...acc[productIndex],
                     stock: acc[productIndex].stock + currentProduct.stock
               }
           }   
           else {
            acc.push({category: currentProduct.category, stock: currentProduct.stock})
        };
           return acc;
     }, [])
     return modifiedArr;
}

export const generateID = () => {
      let uint = new Uint8Array(16);
      window.crypto.getRandomValues(uint);
      return Array.from(uint).map((byte) => byte.toString(16).padStart(2, '0')).join('');
}