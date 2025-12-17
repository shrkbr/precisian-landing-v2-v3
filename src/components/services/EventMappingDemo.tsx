import { ShoppingCart, ArrowRight } from "lucide-react";

const platforms = [
  { name: "Google Analytics", event: "add_to_cart", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  { name: "Meta Ads", event: "AddToCart", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { name: "Google Ads", event: "add_to_cart", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  { name: "Pinterest Ads", event: "AddToCart", color: "bg-red-500/20 text-red-400 border-red-500/30" },
  { name: "TikTok Ads", event: "AddToCart", color: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
  { name: "CRM (HubSpot, RD)", event: "product_interest", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
];

const EventMappingDemo = () => {
  return (
    <div className="card-gradient rounded-xl border border-border p-6 mt-6">
      <div className="text-center mb-6">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Exemplo de Mapeamento</span>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center gap-6">
        {/* User Action */}
        <div className="flex-shrink-0">
          <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-primary/20 flex items-center justify-center">
              <ShoppingCart className="h-8 w-8 text-primary" />
            </div>
            <p className="text-sm font-medium text-foreground mb-1">Usuário clica em</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">
              <ShoppingCart className="h-4 w-4" />
              Adicionar ao Carrinho
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="hidden lg:block w-12 h-0.5 bg-gradient-to-r from-primary/50 to-primary" />
            <div className="lg:hidden h-8 w-0.5 bg-gradient-to-b from-primary/50 to-primary" />
            <ArrowRight className="h-6 w-6 text-primary hidden lg:block" />
            <ArrowRight className="h-6 w-6 text-primary rotate-90 lg:hidden" />
          </div>
        </div>

        {/* Platform Events */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {platforms.map((platform) => (
              <div 
                key={platform.name}
                className={`rounded-lg border p-3 ${platform.color} transition-all duration-300 hover:scale-105`}
              >
                <p className="text-xs font-medium mb-1 opacity-80">{platform.name}</p>
                <code className="text-xs font-mono font-bold">{platform.event}</code>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-6">
        Um único evento, mapeado e traduzido automaticamente para cada plataforma
      </p>
    </div>
  );
};

export default EventMappingDemo;
