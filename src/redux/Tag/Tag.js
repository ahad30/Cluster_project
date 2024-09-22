export const tags = [
 
  // Admin
  {
    name: 'Trial', 
    tag: 'trials', 
  },
  {
    name: 'Product', 
    tag: 'products', 
  },
  {
    name: 'Order', 
    tag: 'orders', 
  }

];

export const getTagsByModuleName = (moduleName) => {
  return tags
    .filter(tag => tag.name.toLowerCase() === moduleName.toLowerCase())
    .map(tag => tag.tag);
};