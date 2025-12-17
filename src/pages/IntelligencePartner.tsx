import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { 
  UserCheck, 
  Users, 
  Code, 
  BarChart3, 
  MessageSquare, 
  Clock, 
  FileText, 
  Settings,
  Target,
  Layers,
  Smartphone,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const responsibilities = [
  {
    icon: Target,
    title: "Coleta & Mapeamento",
    description: "Responsável por toda coleta, tratamento e atribuição dos dados de Marketing Digital do projeto."
  },
  {
    icon: Users,
    title: "Conexão com Todos os Times",
    description: "Contato direto com mídia paga, social media, CRM e todos os departamentos para garantir mapeamento completo."
  },
  {
    icon: Code,
    title: "Integração Técnica",
    description: "Trabalha junto ao time de desenvolvimento para otimizar data layer, checkout e parametrização de apps."
  },
  {
    icon: Shield,
    title: "Governança de Dados",
    description: "Palavra final em alterações de código, garantindo que nenhuma mudança comprometa a parametrização existente."
  }
];

const expertise = [
  {
    icon: Settings,
    title: "Google Tag Manager",
    description: "Especialista em configuração, manutenção e novas implementações de tags e triggers."
  },
  {
    icon: BarChart3,
    title: "Google Analytics",
    description: "Domínio completo de GA4, desde setup inicial até análises avançadas e atribuição."
  },
  {
    icon: Smartphone,
    title: "Apps & Firebase",
    description: "Implementação correta de Firebase e AppsFlyer para tracking completo em aplicativos."
  },
  {
    icon: FileText,
    title: "Plano de Mensuração",
    description: "Criação de plano completo mapeando todas as frentes, ferramentas e domínios do projeto."
  }
];

const advantages = [
  {
    icon: MessageSquare,
    title: "Comunicação Universal",
    description: "Entende tanto de Marketing Digital quanto de tecnologia, alinhando o discurso para diretores, analistas e programadores."
  },
  {
    icon: Clock,
    title: "Disponibilidade 100%",
    description: "Dedicação total ao projeto, disponível para chat, reuniões e suporte técnico a qualquer momento."
  },
  {
    icon: Zap,
    title: "Tempo Zero de Atendimento",
    description: "SLA baixo com resposta imediata, pois o profissional está 100% dedicado ao seu projeto."
  },
  {
    icon: Users,
    title: "Reuniões com Parceiros",
    description: "Disponibilidade para participar de reuniões com parceiros e implementar novas ferramentas."
  }
];

const deliverables = [
  "Implementação completa de eventos (Precisian Journey)",
  "Gestão de catálogo de produtos (Precisian SKU)",
  "Integração de vendas e atribuição (Precisian Core)",
  "Modelagem de atribuição avançada (Precisian MMM)",
  "Dashboards e visualização de dados (Precisian Clarity)",
  "Padronização de UTMs e processos",
  "Configuração de Firebase e AppsFlyer",
  "Otimização de data layer e checkout"
];

const IntelligencePartner = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={UserCheck}
        title="Intelligence Partner"
        subtitle="Seu Analista Dedicado de Web Analytics"
        description="Um profissional especializado 100% dedicado ao seu projeto, combinando expertise em data analytics com todas as nossas ferramentas de Sales Boost para garantir a entrega completa de todas as soluções Precisian."
      >
        {/* O Que É */}
        <ContentSection title="O Que É o Intelligence Partner?">
          <p>
            O Intelligence Partner é a nossa solução de <strong>profissional dedicado</strong> para o seu projeto. 
            Um Web Analista experiente que carrega toda a expertise na área de data analytics, somado com todas 
            as nossas ferramentas de Sales Boost, garantindo a entrega de todas as nossas soluções em um único ponto de contato.
          </p>
          <p>
            Ele é responsável por toda a <strong>coleta, tratamento e atribuição</strong> dos dados relacionados 
            ao Marketing Digital do projeto, tendo contato com todos os times e todas as frentes da empresa.
          </p>
        </ContentSection>

        {/* Responsabilidades */}
        <ContentSection title="Responsabilidades">
          <div className="grid md:grid-cols-2 gap-6">
            {responsibilities.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </ContentSection>

        {/* Expertise Técnica */}
        <ContentSection title="Expertise Técnica">
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </ContentSection>

        {/* Governança */}
        <ContentSection title="Governança & Controle">
          <div className="bg-card rounded-xl border border-border p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">A Palavra Final é do Intelligence Partner</h3>
                <p className="text-muted-foreground">
                  O profissional garante que alterações no código não afetem a parametrização existente, 
                  que novas campanhas estejam sendo mensuradas corretamente, e padroniza processos quando necessário.
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <span className="font-medium text-foreground">Validação de Deploys</span>
                  <p className="text-sm text-muted-foreground">Garante que atualizações de código não quebrem o tracking</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <span className="font-medium text-foreground">Auditoria de Campanhas</span>
                  <p className="text-sm text-muted-foreground">Verifica se novas campanhas estão parametrizadas corretamente</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <span className="font-medium text-foreground">Padronização de UTMs</span>
                  <p className="text-sm text-muted-foreground">Cria planilhas e processos padronizados para todos os times</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <span className="font-medium text-foreground">Documentação Completa</span>
                  <p className="text-sm text-muted-foreground">Mantém plano de mensuração atualizado com todas as frentes</p>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>

        {/* O Que Entrega */}
        <ContentSection title="O Que o Intelligence Partner Entrega">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 p-8">
            <p className="text-muted-foreground mb-6">
              O Intelligence Partner executa <strong>todas as entregas</strong> das nossas soluções especializadas:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ContentSection>

        {/* Vantagens */}
        <ContentSection title="Principais Vantagens">
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </ContentSection>

        {/* Soluções Relacionadas */}
        <ContentSection title="Soluções Incluídas">
          <p className="mb-6">
            O Intelligence Partner domina e implementa todas as nossas soluções especializadas:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Precisian Journey", path: "/precisian-events", desc: "Mapeamento de eventos" },
              { name: "Precisian SKU", path: "/precisian-sku", desc: "Gestão de catálogo" },
              { name: "Precisian Core", path: "/precisian-core", desc: "Integração de vendas" },
              { name: "Precisian MMM", path: "/google-meridian", desc: "Modelagem de atribuição" },
              { name: "Precisian Clarity", path: "/data-visualization", desc: "Visualização de dados" },
              { name: "GTM Setup", path: "/gtm-setup", desc: "Configuração de tags" }
            ].map((solution) => (
              <Link key={solution.path} to={solution.path}>
                <div className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/30 transition-all group">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {solution.name}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{solution.desc}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ContentSection>
      </ServicePageLayout>
    </Layout>
  );
};

export default IntelligencePartner;
