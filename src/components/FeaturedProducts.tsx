import { Star, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Organic Baby Spinach',
    price: 4.99,
    originalPrice: 6.99,
    rating: 4.8,
    reviews: 124,
    weight: '5 oz bag',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
    badge: 'Organic'
  },
  {
    id: 2,
    name: 'Fresh Strawberries',
    price: 5.49,
    rating: 4.9,
    reviews: 89,
    weight: '1 lb container',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop',
    badge: 'Fresh'
  },
  {
    id: 3,
    name: 'Organic Whole Milk',
    price: 3.99,
    rating: 4.7,
    reviews: 256,
    weight: '1 gallon',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop',
    badge: 'Organic'
  },
  {
    id: 4,
    name: 'Artisan Sourdough Bread',
    price: 4.50,
    rating: 4.6,
    reviews: 67,
    weight: '1 loaf',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
    badge: 'Artisan'
  },
  {
    id: 5,
    name: 'Honeycrisp Apples',
    price: 6.99,
    rating: 4.8,
    reviews: 143,
    weight: '3 lb bag',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop',
    badge: 'Premium'
  },
  {
    id: 6,
    name: 'Greek Yogurt',
    price: 1.99,
    rating: 4.5,
    reviews: 201,
    weight: '32 oz',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop',
    badge: 'Protein'
  },
  {
    id: 7,
    name: 'Organic Banana',
    price: 2.49,
    rating: 4.4,
    reviews: 178,
    weight: '2 lbs',
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=400&fit=crop',
    badge: 'Organic'
  },
  {
    id: 8,
    name: 'Farm Fresh Eggs',
    price: 5.99,
    rating: 4.9,
    reviews: 312,
    weight: '12 count',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop',
    badge: 'Farm Fresh'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked fresh products that our customers love most
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="card-product p-4 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    {product.badge}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                    Sale
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.weight}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button size="sm" className="h-8 w-8 p-0">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;