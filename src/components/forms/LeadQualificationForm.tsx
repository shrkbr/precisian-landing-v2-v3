import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  demoRequestSchema,
  type DemoRequestFormData,
  COMPANY_SIZES,
  PRODUCTS,
  DEMO_TIME_PREFERENCES
} from '@/utils';
import { useLeadStore } from '@/store';
import { crmService, emailService } from '@/services';
import { CompanySize, SubmissionStatus } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Progress } from '@/components/ui/progress';
import { CalendarDays, CheckCircle, AlertCircle, Loader2, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

interface LeadQualificationFormProps {
  className?: string;
  onSuccess?: () => void;
}

type FormStep = 1 | 2 | 3;

const LeadQualificationForm = ({ className, onSuccess }: LeadQualificationFormProps) => {
  const { submissionState, setSubmissionState, resetSubmission } = useLeadStore();
  const [currentStep, setCurrentStep] = useState<FormStep>(1);

  const form = useForm<DemoRequestFormData>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      role: '',
      company_size: undefined,
      phone: '',
      interest_products: [],
      preferred_demo_time: undefined,
      specific_questions: '',
      agreed_to_terms: false
    },
    mode: 'onChange'
  });

  const progress = ((currentStep - 1) / 2) * 100;

  const onSubmit = async (data: DemoRequestFormData) => {
    setSubmissionState({ status: SubmissionStatus.LOADING });

    try {
      // Create lead in CRM
      const result = await crmService.createLead({
        name: data.name,
        email: data.email,
        company: data.company,
        role: data.role,
        company_size: data.company_size,
        interest_area: data.interest_products
      });

      if (result.success) {
        // Send confirmation email
        await emailService.sendWelcomeEmail(data.email, data.name.split(' ')[0]);

        setSubmissionState({
          status: SubmissionStatus.SUCCESS,
          message: 'Demo agendada com sucesso! Você receberá um email de confirmação.',
          data: result.data
        });

        onSuccess?.();
      } else {
        throw new Error(result.error?.message || 'Erro ao agendar demo');
      }
    } catch (error) {
      setSubmissionState({
        status: SubmissionStatus.ERROR,
        message: error instanceof Error ? error.message : 'Erro ao agendar demo. Tente novamente.'
      });
    }
  };

  const handleNext = async () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = await form.trigger(['name', 'email', 'company', 'role', 'company_size']);
    } else if (currentStep === 2) {
      isValid = await form.trigger(['interest_products', 'preferred_demo_time']);
    }

    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, 3) as FormStep);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1) as FormStep);
  };

  // Success State
  if (submissionState.status === SubmissionStatus.SUCCESS) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-2">Diagnóstico Agendado!</h3>
        <p className="text-muted-foreground mb-4">
          {submissionState.message}
        </p>
        <div className="bg-muted/50 rounded-lg p-4 mb-6 max-w-md mx-auto">
          <p className="text-sm">
            <strong>O que vai acontecer:</strong>
          </p>
          <ol className="text-sm text-left mt-2 space-y-1">
            <li>1. Você receberá um email com detalhes da sessão</li>
            <li>2. Um especialista vai analisar seu cenário previamente</li>
            <li>3. Na sessão, você descobrirá o tamanho do problema e as oportunidades</li>
          </ol>
        </div>
        <Button variant="outline" onClick={() => {
          resetSubmission();
          setCurrentStep(1);
          form.reset();
        }}>
          Agendar nova demo
        </Button>
      </motion.div>
    );
  }

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome completo *</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email corporativo *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="seu@empresa.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Empresa *</FormLabel>
              <FormControl>
                <Input placeholder="Nome da empresa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cargo *</FormLabel>
              <FormControl>
                <Input placeholder="Ex: CMO, Head de Marketing" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="company_size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Porte da empresa *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(COMPANY_SIZES).map(([key, { value, label }]) => (
                    <SelectItem key={key} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone (opcional)</FormLabel>
              <FormControl>
                <Input placeholder="(11) 99999-9999" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="interest_products"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Onde está seu maior problema com dados? *</FormLabel>
            <FormDescription>
              Selecione os pilares do DVQ que mais se aplicam ao seu cenário
            </FormDescription>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              {Object.entries(PRODUCTS).map(([id, product]) => (
                <div
                  key={id}
                  className={`flex items-start space-x-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                    field.value?.includes(id)
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => {
                    const current = field.value || [];
                    const updated = current.includes(id)
                      ? current.filter(p => p !== id)
                      : [...current, id];
                    field.onChange(updated);
                  }}
                >
                  <Checkbox
                    checked={field.value?.includes(id)}
                    onCheckedChange={() => {
                      const current = field.value || [];
                      const updated = current.includes(id)
                        ? current.filter(p => p !== id)
                        : [...current, id];
                      field.onChange(updated);
                    }}
                  />
                  <div>
                    <Label className="font-medium cursor-pointer">{product.name}</Label>
                    <p className="text-xs text-muted-foreground">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="preferred_demo_time"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Horário preferido para demo *</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-4"
              >
                {DEMO_TIME_PREFERENCES.map(({ value, label, icon }) => (
                  <div key={value} className="flex items-center space-x-2">
                    <RadioGroupItem value={value} id={`demo-${value}`} />
                    <Label htmlFor={`demo-${value}`} className="cursor-pointer">
                      <span className="mr-1">{icon}</span>
                      {label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="specific_questions"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Descreva seu cenário atual (opcional)</FormLabel>
            <FormDescription>
              Quanto mais contexto você der, mais preciso será nosso diagnóstico
            </FormDescription>
            <FormControl>
              <Textarea
                placeholder="Ex: Investimos R$ X/mês em mídia mas não conseguimos saber o retorno real. O GA4 mostra vendas diferentes do e-commerce. Precisamos de uma fonte única de verdade..."
                className="min-h-[120px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="agreed_to_terms"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="font-normal">
                Concordo com a{' '}
                <a href="/privacy" className="text-primary underline">
                  Política de Privacidade
                </a>{' '}
                e autorizo o contato da equipe Precisian.
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />

      {/* Summary */}
      <div className="bg-muted/50 rounded-lg p-4 space-y-2">
        <p className="font-medium text-sm">Resumo da sua solicitação:</p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• {form.getValues('name')} - {form.getValues('company')}</li>
          <li>• {form.getValues('interest_products')?.length || 0} produto(s) selecionado(s)</li>
          <li>
            • Preferência: {
              DEMO_TIME_PREFERENCES.find(p => p.value === form.getValues('preferred_demo_time'))?.label || 'Não selecionado'
            }
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <CalendarDays className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">Descobrir seu DVQ Score</span>
        </div>
        <CardTitle>
          {currentStep === 1 && 'Vamos conhecer seu cenário'}
          {currentStep === 2 && 'Qual o tamanho do problema?'}
          {currentStep === 3 && 'Confirmar diagnóstico gratuito'}
        </CardTitle>
        <CardDescription>
          {currentStep === 1 && 'Entender sua operação é o primeiro passo para descobrir oportunidades'}
          {currentStep === 2 && 'Isso não é uma demo comercial - é um diagnóstico do seu DVQ'}
          {currentStep === 3 && 'Revise e agende sua sessão de descoberta'}
        </CardDescription>

        {/* Progress */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Passo {currentStep} de 3</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
              </motion.div>
            </AnimatePresence>

            {/* Error Message */}
            <AnimatePresence>
              {submissionState.status === SubmissionStatus.ERROR && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 text-destructive text-sm p-3 bg-destructive/10 rounded-lg"
                >
                  <AlertCircle className="h-4 w-4" />
                  {submissionState.message}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>

              {currentStep < 3 ? (
                <Button type="button" onClick={handleNext}>
                  Próximo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={submissionState.status === SubmissionStatus.LOADING}
                >
                  {submissionState.status === SubmissionStatus.LOADING ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Agendando diagnóstico...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Descobrir meu DVQ Score
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LeadQualificationForm;