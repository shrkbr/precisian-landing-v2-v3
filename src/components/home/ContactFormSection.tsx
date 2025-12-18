import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const painPoints = [
  "Discrepância de valor entre plataformas",
  "Alta reprovação de produtos no Merchant Center",
  "Falta de visão de como está a configuração atual",
  "Google Tag Manager sem revisão ou desatualizado",
  "Relatórios errados ou incompletos no GA4",
  "Falta de visão consolidada dos dados",
  "Dados espalhados em diversos lugares e ferramentas",
  "Dificuldade em atribuir vendas aos canais corretos",
  "Problemas na parametrização de campanhas (UTM)",
  "Falta de integração entre CRM e plataformas de mídia",
  "Dificuldade em mensurar ROI de campanhas",
  "App mobile sem tracking adequado",
];

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
    selectedPainPoints: [] as string[],
    otherPainPoints: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePainPointToggle = (painPoint: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedPainPoints: prev.selectedPainPoints.includes(painPoint)
        ? prev.selectedPainPoints.filter((p) => p !== painPoint)
        : [...prev.selectedPainPoints, painPoint],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.companyName) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, e-mail e empresa.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Formulário enviado!",
      description: "Entraremos em contato em breve.",
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Obrigado pelo contato!
            </h2>
            <p className="text-muted-foreground text-lg">
              Recebemos suas informações e um de nossos especialistas entrará em contato em breve para entender melhor suas necessidades.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Fale Conosco
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">
              Quais são suas{" "}
              <span className="gradient-text">principais dores</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conte-nos um pouco sobre os desafios do seu negócio e descubra como podemos ajudar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Basic Info */}
            <div className="card-gradient p-6 md:p-8 rounded-2xl border border-border">
              <h3 className="font-display font-semibold text-lg mb-6 text-foreground">
                Informações de Contato
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Empresa *</Label>
                  <Input
                    id="companyName"
                    placeholder="Nome da empresa"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Seu nome *</Label>
                  <Input
                    id="name"
                    placeholder="Nome completo"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Celular</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-background border-border"
                  />
                </div>
              </div>
            </div>

            {/* Pain Points Selection */}
            <div className="card-gradient p-6 md:p-8 rounded-2xl border border-border">
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                Quais dessas dores você sente no seu negócio?
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Selecione todas as opções que se aplicam
              </p>
              
              <div className="grid md:grid-cols-2 gap-3">
                {painPoints.map((painPoint) => (
                  <div
                    key={painPoint}
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      formData.selectedPainPoints.includes(painPoint)
                        ? "bg-primary/10 border-primary/50"
                        : "bg-background/50 border-border hover:border-primary/30"
                    }`}
                    onClick={() => handlePainPointToggle(painPoint)}
                  >
                    <Checkbox
                      id={painPoint}
                      checked={formData.selectedPainPoints.includes(painPoint)}
                      onCheckedChange={() => handlePainPointToggle(painPoint)}
                      className="mt-0.5"
                    />
                    <Label
                      htmlFor={painPoint}
                      className="text-sm cursor-pointer leading-tight"
                    >
                      {painPoint}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Pain Points */}
            <div className="card-gradient p-6 md:p-8 rounded-2xl border border-border">
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                Outras dores ou observações
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Descreva outros desafios que você enfrenta
              </p>
              <Textarea
                placeholder="Conte-nos mais sobre os desafios do seu negócio..."
                value={formData.otherPainPoints}
                onChange={(e) =>
                  setFormData({ ...formData, otherPainPoints: e.target.value })
                }
                className="bg-background border-border min-h-[120px] resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="px-10 py-6 text-lg font-display font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar formulário
                  </>
                )}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Responderemos em até 24 horas úteis
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
