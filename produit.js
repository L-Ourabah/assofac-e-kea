const categoryFilter = document.getElementById('category-filter');
const productItems = document.getElementsByClassName('product-item');
const productList = document.querySelector('.product-list');

categoryFilter.addEventListener('change', filterItems);

function filterItems() {
  const selectedCategory = categoryFilter.value;
  
  for (let i = 0; i < productItems.length; i++) {
    const item = productItems[i];
    const category = item.getAttribute('data-category');
    
    if (selectedCategory === '' || selectedCategory === category) {
      item.style.transform = 'scale(1)';
    } else {
      item.style.transform = 'scale(0)';
    }
  }
  
  rearrangeItems();
}

function rearrangeItems() {
  const filteredItems = document.querySelectorAll('.product-item[style="transform: scale(1);"]');
  
  filteredItems.forEach(item => {
    productList.prepend(item);
  });
}