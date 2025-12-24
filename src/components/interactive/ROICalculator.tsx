import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCalculatorStore } from '@/store';
import { CalculatorStep, CompanySize } from '@/types';
import { formatCurrency, formatPercentage, COMPANY_SIZES, INDUSTRIES, ANALYTICS_TOOLS, PRIORITY_AREAS } from '@/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, ArrowRight, Calculator, TrendingUp, PiggyBank, Clock, Download, RotateCcw } from 'lucide-react';

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
};

const ROICalculator = () => {
  const {
    currentStep,
    formData,
    results,
    isCalculating,
    updateFormData,
    calculateROI,
    resetCalculator,
    goToNextStep,
    goToPreviousStep
  } = useCalculatorStore();

  const [direction, setDirection] = useState(0);

  const progress = ((currentStep - 1) / 3) * 100;

  const handleNext = () => {
    setDirection(1);
    if (currentStep === CalculatorStep.GOALS) {
      calculateROI();
    } else {
      goToNextStep();
    }
  };

  const handlePrevious = () => {
    setDirection(-1);
    goToPreviousStep();
  };

  const handleToolToggle = (tool: string) => {
    const currentTools = formData.current_tools || [];
    const newTools = currentTools.includes(tool)
      ? currentTools.filter(t => t !== tool)
      : [...currentTools, tool];
    updateFormData({ current_tools: newTools });
  };

  const handlePriorityToggle = (priority: string) => {
    const currentPriorities = formData.priority_areas || [];
    const newPriorities = currentPriorities.includes(priority)
      ? currentPriorities.filter(p => p !== priority)
      : [...currentPriorities, priority];
    updateFormData({ priority_areas: newPriorities });
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="company_size">Porte da Empresa</Label>
        <Select
          value={formData.company_size}
          onValueChange={(value) => updateFormData({ company_size: value as CompanySize })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione o porte" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(COMPANY_SIZES).map(([key, { value, label }]) => (
              <SelectItem key={key} value={value}>{label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Setor</Label>
        <Select
          value={formData.industry}
          onValueChange={(value) => updateFormData({ industry: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione o setor" />
          </SelectTrigger>
          <SelectContent>
            {INDUSTRIES.map(({ value, label }) => (
              <SelectItem key={value} value={value}>{label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="current_revenue">Receita Anual (R$)</Label>
        <Input
          id="current_revenue"
          type="number"
          placeholder="Ex: 5000000"
          value={formData.current_revenue || ''}
          onChange={(e) => updateFormData({ current_revenue: Number(e.target.value) })}
        />
        <p className="text-sm text-muted-foreground">
          {formData.current_revenue ? formatCurrency(formData.current_revenue) : 'Digite a receita anual aproximada'}
        </p>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label>Ferramentas de Analytics Atuais</Label>
        <div className="grid grid-cols-2 gap-2">
          {ANALYTICS_TOOLS.map(({ value, label }) => (
            <div key={value} className="flex items-center space-x-2">
              <Checkbox
                id={value}
                checked={(formData.current_tools || []).includes(value)}
                onCheckedChange={() => handleToolToggle(value)}
              />
              <label htmlFor={value} className="text-sm cursor-pointer">
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="team_size">Tamanho do Time de Marketing/Analytics</Label>
        <Input
          id="team_size"
          type="number"
          placeholder="Ex: 5"
          min={1}
          max={100}
          value={formData.team_size || ''}
          onChange={(e) => updateFormData({ team_size: Number(e.target.value) })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="monthly_analytics_cost">Custo Mensal com Analytics (R$)</Label>
        <Input
          id="monthly_analytics_cost"
          type="number"
          placeholder="Ex: 10000"
          value={formData.monthly_analytics_cost || ''}
          onChange={(e) => updateFormData({ monthly_analytics_cost: Number(e.target.value) })}
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="growth_target">Meta de Crescimento (%)</Label>
        <Input
          id="growth_target"
          type="number"
          placeholder="Ex: 30"
          min={5}
          max={200}
          value={formData.growth_target || ''}
          onChange={(e) => updateFormData({ growth_target: Number(e.target.value) })}
        />
        <p className="text-sm text-muted-foreground">
          Qual a meta de crescimento anual para os próximos 12 meses?
        </p>
      </div>

      <div className="space-y-3">
        <Label>Áreas Prioritárias para Melhoria</Label>
        <div className="grid grid-cols-2 gap-2">
          {PRIORITY_AREAS.map(({ value, label }) => (
            <div key={value} className="flex items-center space-x-2">
              <Checkbox
                id={value}
                checked={(formData.priority_areas || []).includes(value)}
                onCheckedChange={() => handlePriorityToggle(value)}
              />
              <label htmlFor={value} className="text-sm cursor-pointer">
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeline_months">Prazo para Implementação (meses)</Label>
        <Select
          value={formData.timeline_months?.toString()}
          onValueChange={(value) => updateFormData({ timeline_months: Number(value) })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione o prazo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3">3 meses (Fast Track)</SelectItem>
            <SelectItem value="6">6 meses (Padrão)</SelectItem>
            <SelectItem value="12">12 meses (Completo)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderResults = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-6xl font-bold text-primary"
        >
          {results?.roi_percentage}%
        </motion.div>
        <p className="text-xl text-muted-foreground mt-2">ROI Estimado</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <PiggyBank className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Economia Anual</p>
                  <p className="text-xl font-semibold">{formatCurrency(results?.cost_savings || 0)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Impacto na Receita</p>
                  <p className="text-xl font-semibold">{formatCurrency(results?.revenue_impact || 0)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Payback</p>
                  <p className="text-xl font-semibold">{results?.payback_months} meses</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-8">
        <Button className="flex-1" size="lg">
          <Download className="mr-2 h-4 w-4" />
          Download Relatório PDF
        </Button>
        <Button variant="outline" size="lg" onClick={resetCalculator}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Recalcular
        </Button>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground mb-3">
          Quer discutir esses resultados com um especialista?
        </p>
        <Button variant="secondary" size="lg">
          Agendar Consultoria Gratuita
        </Button>
      </div>
    </div>
  );

  const stepTitles = {
    [CalculatorStep.COMPANY_INFO]: { title: 'Informações da Empresa', description: 'Conte-nos sobre sua empresa' },
    [CalculatorStep.CURRENT_STATE]: { title: 'Estado Atual', description: 'Como você trabalha com dados hoje?' },
    [CalculatorStep.GOALS]: { title: 'Objetivos', description: 'Onde você quer chegar?' },
    [CalculatorStep.RESULTS]: { title: 'Seu ROI Estimado', description: 'Veja o potencial de retorno' }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case CalculatorStep.COMPANY_INFO:
        return formData.company_size && formData.industry && formData.current_revenue;
      case CalculatorStep.CURRENT_STATE:
        return (formData.current_tools?.length || 0) > 0 && formData.team_size;
      case CalculatorStep.GOALS:
        return formData.growth_target && (formData.priority_areas?.length || 0) > 0;
      default:
        return true;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Calculator className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">Calculadora de ROI</span>
        </div>
        <CardTitle>{stepTitles[currentStep].title}</CardTitle>
        <CardDescription>{stepTitles[currentStep].description}</CardDescription>

        {currentStep !== CalculatorStep.RESULTS && (
          <div className="mt-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Passo {currentStep} de 3</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardHeader>

      <CardContent>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.3 }}
          >
            {currentStep === CalculatorStep.COMPANY_INFO && renderStep1()}
            {currentStep === CalculatorStep.CURRENT_STATE && renderStep2()}
            {currentStep === CalculatorStep.GOALS && renderStep3()}
            {currentStep === CalculatorStep.RESULTS && renderResults()}
          </motion.div>
        </AnimatePresence>

        {currentStep !== CalculatorStep.RESULTS && (
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === CalculatorStep.COMPANY_INFO}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
            <Button
              onClick={handleNext}
              disabled={!isStepValid() || isCalculating}
            >
              {isCalculating ? (
                <>Calculando...</>
              ) : currentStep === CalculatorStep.GOALS ? (
                <>Calcular ROI</>
              ) : (
                <>
                  Próximo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ROICalculator;