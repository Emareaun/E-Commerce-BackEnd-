// Import models
const Product = require('./ Product');
const Category = require('./ Category');
const Tag = require('./ Tag');
const ProductTag = require('./ ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // The foreign key in the Product model referencing the Category model
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // The foreign key in the Product model referencing the Category model
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, // The intermediary table/model for the many-to-many relationship
  foreignKey: 'product_id', // The foreign key in the ProductTag model referencing the Product model
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, // The intermediary table/model for the many-to-many relationship
  foreignKey: 'tag_id', // The foreign key in the ProductTag model referencing the Tag model
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
