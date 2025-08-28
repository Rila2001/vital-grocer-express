import { Clock, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const deals = [
  {
    id: 1,
    title: 'Weekend Special',
    description: '30% off on all organic vegetables',
    discount: '30% OFF',
    timeLeft: '2 days left',
    image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400&h=300&fit=crop',
    bgColor: 'from-green-500 to-green-600'
  },
  {
    id: 2,
    title: 'Fresh Fruit Fiesta',
    description: 'Buy 2 get 1 free on seasonal fruits',
    discount: 'Buy 2 Get 1',
    timeLeft: '5 days left',
    image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=400&h=300&fit=crop',
    bgColor: 'from-orange-500 to-red-500'
  },
  {
    id: 3,
    title: 'Dairy Delight',
    description: '25% off on milk, cheese & yogurt',
    discount: '25% OFF',
    timeLeft: '3 days left',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop',
    bgColor: 'from-blue-500 to-blue-600'
  }
];

const DealsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Tag className="w-6 h-6 text-accent" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Today's Best Deals
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Limited time offers on your favorite fresh products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {deals.map((deal, index) => (
            <div 
              key={deal.id}
              className="relative overflow-hidden rounded-xl group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Image */}
              <div className="relative h-64">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${deal.bgColor} opacity-80`}></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {deal.discount}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
                  <p className="text-white/90 text-sm">{deal.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{deal.timeLeft}</span>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0"
                  >
                    Shop Now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-card rounded-2xl p-8 text-center shadow-[0_8px_30px_hsla(var(--primary),0.1)]">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Never Miss a Deal!
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Subscribe to our newsletter and get exclusive deals delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-muted/50 focus:outline-none focus:border-primary"
            />
            <Button variant="default" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;