import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { contactFormSchema, type ContactFormData, CONTACT_SUBJECTS, CONTACT_PREFERENCES, PRODUCTS } from '@/utils';
import { useLeadStore } from '@/store';
import { crmService } from '@/services';
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
import { Send, CheckCircle, AlertCircle, Loader2, MessageSquare } from 'lucide-react';

interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
  variant?: 'default' | 'minimal' | 'inline';
  prefilledSubject?: string;
}

const ContactForm = ({
  className,
  onSuccess,
  variant = 'default',
  prefilledSubject
}: ContactFormProps) => {
  const { submissionState, setSubmissionState, resetSubmission } = useLeadStore();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: prefilledSubject || '',
      message: '',
      preferred_contact: 'email',
      agreed_to_terms: false
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState({ status: SubmissionStatus.LOADING });

    try {
      // Create lead in CRM
      const result = await crmService.createLead({
        name: data.name,
        email: data.email,
        company: data.company,
        role: 'Não informado', // Contact form doesn't require role
        company_size: CompanySize.MEDIUM, // Default
        interest_area: selectedProducts.length > 0 ? selectedProducts : ['general-inquiry']
      });

      if (result.success) {
        setSubmissionState({
          status: SubmissionStatus.SUCCESS,
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
          data: result.data
        });
        form.reset();
        setSelectedProducts([]);
        onSuccess?.();
      } else {
        throw new Error(result.error?.message || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      setSubmissionState({
        status: SubmissionStatus.ERROR,
        message: error instanceof Error ? error.message : 'Erro ao enviar mensagem. Tente novamente.'
      });
    }
  };

  const handleProductToggle = (productId: string) => {
    setSelectedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(p => p !== productId)
        : [...prev, productId]
    );
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
        <h3 className="text-2xl font-bold mb-2">Recebemos sua mensagem!</h3>
        <p className="text-muted-foreground mb-4">
          {submissionState.message}
        </p>
        <div className="bg-muted/50 rounded-lg p-4 mb-6 max-w-md mx-auto text-left">
          <p className="text-sm font-medium mb-2">O que acontece agora:</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Um especialista vai analisar seu caso</li>
            <li>• Entraremos em contato em até 24h úteis</li>
            <li>• Prepare suas dúvidas sobre seus dados!</li>
          </ul>
        </div>
        <Button variant="outline" onClick={resetSubmission}>
          Enviar nova mensagem
        </Button>
      </motion.div>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">Fale Conosco</span>
        </div>
        <CardTitle>Descubra o tamanho do seu problema com dados</CardTitle>
        <CardDescription>
          Essa não é uma proposta comercial. É um diagnóstico gratuito baseado em dados reais
          para descobrir quanto você está perdendo por não ter visibilidade completa.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome completo</FormLabel>
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
                    <FormLabel>Email corporativo</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="seu@empresa.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Company & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome da empresa" {...field} />
                    </FormControl>
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

            {/* Subject */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assunto</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o assunto" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {CONTACT_SUBJECTS.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Products of Interest */}
            {variant === 'default' && (
              <div className="space-y-3">
                <Label>Produtos de interesse (opcional)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {Object.entries(PRODUCTS).slice(0, 6).map(([id, product]) => (
                    <div key={id} className="flex items-center space-x-2">
                      <Checkbox
                        id={id}
                        checked={selectedProducts.includes(id)}
                        onCheckedChange={() => handleProductToggle(id)}
                      />
                      <label
                        htmlFor={id}
                        className="text-sm cursor-pointer leading-tight"
                      >
                        {product.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sua mensagem</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Hoje não consigo saber qual canal de mídia está realmente trazendo retorno. O GA4 mostra uma coisa, o e-commerce mostra outra..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Descreva seu desafio atual. Quanto mais contexto, mais preciso será nosso diagnóstico.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Preferred Contact */}
            <FormField
              control={form.control}
              name="preferred_contact"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Como prefere ser contatado?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-wrap gap-4"
                    >
                      {CONTACT_PREFERENCES.map(({ value, label, icon }) => (
                        <div key={value} className="flex items-center space-x-2">
                          <RadioGroupItem value={value} id={`contact-${value}`} />
                          <Label htmlFor={`contact-${value}`} className="cursor-pointer">
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

            {/* Terms */}
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
                      e autorizo o contato.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

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

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={submissionState.status === SubmissionStatus.LOADING}
            >
              {submissionState.status === SubmissionStatus.LOADING ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;