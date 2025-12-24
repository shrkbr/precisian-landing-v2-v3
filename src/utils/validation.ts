import { z } from 'zod';
import { CompanySize } from '@/types';

// Common validations
const emailSchema = z
  .string()
  .min(1, 'Email é obrigatório')
  .email('Formato de email inválido')
  .refine(
    (email) => {
      // Check for common typos in email domains
      const domain = email.split('@')[1];
      const commonDomains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com'];
      const typos = ['gmial.com', 'gmai.com', 'hotmial.com', 'yahooo.com'];

      return !typos.includes(domain);
    },
    'Verifique se o email está correto'
  );

const phoneSchema = z
  .string()
  .regex(/^[\s\d()+-]+$/, 'Formato de telefone inválido')
  .min(10, 'Telefone deve ter pelo menos 10 dígitos')
  .optional();

const nameSchema = z
  .string()
  .min(2, 'Nome deve ter pelo menos 2 caracteres')
  .max(100, 'Nome muito longo')
  .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras');

const companyNameSchema = z
  .string()
  .min(2, 'Nome da empresa é obrigatório')
  .max(100, 'Nome da empresa muito longo');

// Lead form validation
export const createLeadSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  company: companyNameSchema,
  role: z
    .string()
    .min(2, 'Cargo é obrigatório')
    .max(100, 'Cargo muito longo'),
  company_size: z.nativeEnum(CompanySize, {
    errorMap: () => ({ message: 'Selecione o porte da empresa' })
  }),
  interest_area: z
    .array(z.string())
    .min(1, 'Selecione pelo menos um produto de interesse')
    .max(5, 'Máximo 5 produtos'),
  phone: phoneSchema,
  message: z
    .string()
    .max(500, 'Mensagem muito longa')
    .optional(),
  utm_source: z.string().optional(),
  utm_campaign: z.string().optional(),
  agreed_to_terms: z
    .boolean()
    .refine(val => val === true, 'Você deve aceitar os termos'),
  agreed_to_newsletter: z.boolean().optional()
});

export type CreateLeadFormData = z.infer<typeof createLeadSchema>;

// ROI Calculator validation
export const roiCalculatorSchema = z.object({
  // Step 1: Company Info
  company_size: z.nativeEnum(CompanySize),
  industry: z
    .string()
    .min(1, 'Selecione o setor da empresa'),
  current_revenue: z
    .number()
    .min(100000, 'Receita deve ser pelo menos R$ 100.000')
    .max(10000000000, 'Valor muito alto'),

  // Step 2: Current State
  current_tools: z
    .array(z.string())
    .min(1, 'Selecione pelo menos uma ferramenta atual'),
  team_size: z
    .number()
    .int('Número de pessoas deve ser inteiro')
    .min(1, 'Deve ter pelo menos 1 pessoa no time')
    .max(1000, 'Time muito grande'),
  monthly_analytics_cost: z
    .number()
    .min(0, 'Custo não pode ser negativo')
    .max(1000000, 'Custo muito alto'),

  // Step 3: Goals
  growth_target: z
    .number()
    .min(5, 'Meta de crescimento deve ser pelo menos 5%')
    .max(500, 'Meta muito alta'),
  priority_areas: z
    .array(z.string())
    .min(1, 'Selecione pelo menos uma área prioritária'),
  timeline_months: z
    .number()
    .int('Timeline deve ser em meses inteiros')
    .min(3, 'Mínimo 3 meses')
    .max(60, 'Máximo 60 meses')
});

export type ROICalculatorFormData = z.infer<typeof roiCalculatorSchema>;

// Contact form validation (simplified)
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  company: companyNameSchema,
  phone: phoneSchema,
  subject: z
    .string()
    .min(5, 'Assunto deve ter pelo menos 5 caracteres')
    .max(100, 'Assunto muito longo'),
  message: z
    .string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(1000, 'Mensagem muito longa'),
  preferred_contact: z
    .enum(['email', 'phone', 'whatsapp'], {
      errorMap: () => ({ message: 'Selecione como prefere ser contatado' })
    }),
  agreed_to_terms: z
    .boolean()
    .refine(val => val === true, 'Você deve aceitar os termos')
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Demo request validation
export const demoRequestSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  company: companyNameSchema,
  role: z.string().min(2, 'Cargo é obrigatório'),
  company_size: z.nativeEnum(CompanySize),
  phone: phoneSchema,
  interest_products: z
    .array(z.string())
    .min(1, 'Selecione pelo menos um produto'),
  preferred_demo_time: z
    .enum(['morning', 'afternoon', 'evening'], {
      errorMap: () => ({ message: 'Selecione um horário preferido' })
    }),
  specific_questions: z
    .string()
    .max(500, 'Perguntas muito longas')
    .optional(),
  agreed_to_terms: z
    .boolean()
    .refine(val => val === true, 'Você deve aceitar os termos')
});

export type DemoRequestFormData = z.infer<typeof demoRequestSchema>;

// Newsletter subscription validation
export const newsletterSchema = z.object({
  email: emailSchema,
  name: z.string().optional(),
  interests: z.array(z.string()).optional(),
  frequency: z
    .enum(['weekly', 'monthly'], {
      errorMap: () => ({ message: 'Selecione a frequência' })
    })
    .default('weekly')
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

// Validation helpers
export const validateForm = <T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: boolean; data?: T; errors?: z.ZodError } => {
  try {
    const validData = schema.parse(data);
    return { success: true, data: validData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error };
    }
    throw error;
  }
};

export const getFieldError = (
  errors: z.ZodError | undefined,
  fieldName: string
): string | undefined => {
  if (!errors) return undefined;

  const fieldError = errors.errors.find(error =>
    error.path.join('.') === fieldName
  );

  return fieldError?.message;
};