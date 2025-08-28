import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-groceries.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-dark via-primary to-primary-light overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-primary-foreground animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Fresh Groceries
                <span className="block text-accent-light">Delivered to Your</span>
                <span className="block">Doorstep</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-lg">
                Get farm-fresh organic produce, dairy, and everyday essentials delivered fast. 
                Quality guaranteed, prices you'll love.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Shop Now
              </Button>
              <Button variant="ghost" size="lg" className="text-lg px-8 py-4 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Deals
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Free delivery over $50</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Same day delivery</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Fresh groceries and vegetables" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-foreground/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-foreground/5 to-transparent"></div>
    </section>
  );
};

export default Hero;