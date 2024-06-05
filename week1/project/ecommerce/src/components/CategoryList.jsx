// import React from 'react';

// function CategoryList({ categories, selectedCategory, onCategorySelect }) {
//   return (
//     <div className="category-list">
//       {categories.map(category => (
//         <button 
//           key={category} 
//           onClick={() => onCategorySelect(category)}
//           className={selectedCategory === category ? 'active' : ''}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default CategoryList;

import React from 'react';

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-list">
      {categories.map(category => (
        <button
          key={category}
          className={`nav-link ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category.replace('FAKE: ', '')}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;