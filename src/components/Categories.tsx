import { Carrot, Apple, Milk, Cookie, Coffee, Candy } from 'lucide-react';
import vegetablesImg from '@/assets/vegetables.jpg';
import fruitsImg from '@/assets/fruits.jpg';
import dairyImg from '@/assets/dairy.jpg';

const categories = [
  {
    name: 'Vegetables',
    icon: Carrot,
    image: vegetablesImg,
    itemCount: '150+ items'
  },
  {
    name: 'Fruits',
    icon: Apple,
    image: fruitsImg,
    itemCount: '80+ items'
  },
  {
    name: 'Dairy',
    icon: Milk,
    image: dairyImg,
    itemCount: '45+ items'
  },
  {
    name: 'Bakery',
    icon: Cookie,
    itemCount: '35+ items'
  },
  {
    name: 'Beverages',
    icon: Coffee,
    itemCount: '60+ items'
  },
  {
    name: 'Snacks',
    icon: Candy,
    itemCount: '90+ items'
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover fresh, quality products organized by category for easy shopping
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.name}
                className="card-category p-6 rounded-xl text-center cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  {category.image ? (
                    <div className="w-16 h-16 mx-auto rounded-full overflow-hidden bg-primary/10 p-2">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.itemCount}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;