/*
 * PORTFOLIO DATA SCHEMA - TYPE-SAFE CONTENT DEFINITION
 * 
 * Data Structure Philosophy:
 * - Immutable data: readonly arrays and properties
 * - Branded types: prevent primitive obsession
 * - Discriminated unions: exhaustive pattern matching
 * - Compile-time guarantees: no runtime validation needed
 * 
 * Type Safety Benefits:
 * - IDE autocomplete for all properties
 * - Refactoring safety (rename, move)
 * - Documentation via types
 * - Zero runtime overhead (types erased)
 */

/* BRANDED TYPES: Compile-time type safety for primitive wrappers */
export type Email = string & { readonly __brand: 'Email' };
export type PhoneNumber = string & { readonly __brand: 'PhoneNumber' };
export type URL = string & { readonly __brand: 'URL' };
export type Year = number & { readonly __brand: 'Year' };
export type CGPA = number & { readonly __brand: 'CGPA' };

/* TYPE CONSTRUCTORS: Runtime-safe branded type creation */
export const Email = (value: string): Email => value as Email;
export const PhoneNumber = (value: string): PhoneNumber => value as PhoneNumber;
export const URL = (value: string): URL => value as URL;
export const Year = (value: number): Year => value as Year;
export const CGPA = (value: number): CGPA => value as CGPA;

/* PERSONAL INFORMATION */
export interface PersonalInfo {
    readonly name: string;
    readonly title: string;
    readonly location: string;
    readonly dateOfBirth: string;
    readonly email: Email;
    readonly phone: PhoneNumber;
    readonly linkedin: URL;
    readonly github: readonly URL[];
}

/* EDUCATION */
export interface Education {
    readonly institution: string;
    readonly degree: string;
    readonly field: string;
    readonly cgpa: CGPA;
    readonly duration: string;
    readonly location: string;
    readonly thesis: string;
    readonly highlights: readonly string[];
}

/* WORK EXPERIENCE */
export interface WorkExperience {
    readonly id: string;
    readonly company: string;
    readonly role: string;
    readonly duration: string;
    readonly location: string;
    readonly responsibilities: readonly string[];
    readonly technologies: readonly string[];
    readonly achievements: readonly string[];
}

/* PROJECT TYPES: Discriminated union for type-safe project handling */
export type ProjectCategory =
    | 'ai-security'
    | 'llm-chatbot'
    | 'llm-framework'
    | 'speaker-recognition';

export interface BaseProject {
    readonly id: string;
    readonly category: ProjectCategory;
    readonly title: string;
    readonly organization: string;
    readonly duration: string;
    readonly description: readonly string[];
    readonly impact: string;
    readonly technologies: readonly string[];
    readonly metrics?: readonly MetricItem[];
}

export interface MetricItem {
    readonly label: string;
    readonly value: string;
    readonly improvement?: string;
}

/* TECHNICAL CAPABILITIES - LLM & AGENTIC AI */
export interface LLMCapability {
    readonly id: string;
    readonly category: 'training' | 'inference' | 'optimization' | 'agentic';
    readonly title: string;
    readonly description: string;
    readonly technologies: readonly string[];
    readonly achievements: readonly string[];
}

export interface TrainingCapability extends LLMCapability {
    readonly category: 'training';
    readonly architectures: readonly string[];
    readonly lossFunctions: readonly string[];
    readonly dataScale: string;
    readonly distributedStrategies: readonly string[];
}

export interface InferenceCapability extends LLMCapability {
    readonly category: 'inference';
    readonly quantization: readonly string[];
    readonly batchingStrategies: readonly string[];
    readonly latencyOptimizations: readonly string[];
    readonly hardwareTargets: readonly string[];
}

export interface OptimizationCapability extends LLMCapability {
    readonly category: 'optimization';
    readonly parallelismTypes: readonly string[];
    readonly memoryOptimizations: readonly string[];
    readonly kernelOptimizations: readonly string[];
    readonly profilingTools: readonly string[];
}

export interface AgenticCapability extends LLMCapability {
    readonly category: 'agentic';
    readonly architecturePatterns: readonly string[];
    readonly toolIntegration: readonly string[];
    readonly orchestrationFrameworks: readonly string[];
    readonly safetyMechanisms: readonly string[];
}

export type TechnicalCapability =
    | TrainingCapability
    | InferenceCapability
    | OptimizationCapability
    | AgenticCapability;

/* SKILLS */
export interface SkillCategory {
    readonly category: string;
    readonly icon: string;
    readonly skills: readonly Skill[];
}

export interface Skill {
    readonly name: string;
    readonly proficiency: number; // 0-100
    readonly yearsOfExperience?: number;
}

/* FULL PORTFOLIO SCHEMA */
export interface PortfolioData {
    readonly personal: PersonalInfo;
    readonly education: readonly Education[];
    readonly experience: readonly WorkExperience[];
    readonly projects: readonly BaseProject[];
    readonly technicalCapabilities: readonly TechnicalCapability[];
    readonly skills: readonly SkillCategory[];
}
