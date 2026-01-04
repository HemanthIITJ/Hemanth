/*
 * PORTFOLIO DATA - HEMANTH KANDIMALLA
 * AI/ML Researcher | CDAC Bengaluru
 * 
 * Content Structure:
 * - Personal information and contact details
 * - Education history (IIT Jammu)
 * - Work experience (CDAC, MediaTek)
 * - Major projects (4 flagship projects)
 * - Technical capabilities (LLM training, agentic AI, optimization)
 * - Skills matrix (programming, ML/AI, infrastructure)
 */

import type {
    PortfolioData,
    Email,
    PhoneNumber,
    URL,
    CGPA,
    TrainingCapability,
    InferenceCapability,
    OptimizationCapability,
    AgenticCapability,
} from '@types/portfolio';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Hemanth Kandimalla',
        title: 'Knowledge Associate (R&D) | AI/ML Researcher',
        location: 'Bengaluru, Karnataka, India',
        dateOfBirth: '17 May 1994',
        email: 'kandimallahemanthies@gmail.com' as Email,
        phone: '+91 9346088293' as PhoneNumber,
        linkedin: 'https://www.linkedin.com/in/hemanth-k-a88786215' as URL,
        github: [
            'https://github.com/HemanthIITJ' as URL,
            'https://github.com/generalaimodels' as URL,
        ],
    },

    education: [
        {
            institution: 'Indian Institute of Technology Jammu (IIT-J)',
            degree: 'Master of Technology (M.Tech)',
            field: 'Communications & Signal Processing',
            cgpa: 8.34 as CGPA,
            duration: 'Sept 2021 - May 2023',
            location: 'Jammu, India',
            thesis: 'Real-time Speaker Recognition System using Transformer Architecture',
            highlights: [
                'Built end-to-end speaker recognition system from concept to deployment',
                'Collected IIT Jammu voice dataset: whispered, normal, mimicked speech',
                'Developed Transformer-based model with triplet loss optimization',
                'Integrated system into laboratory application workflow',
                'Achieved real-time inference with < 100ms latency',
            ],
        },
    ],

    experience: [
        {
            id: 'cdac-2023',
            company: 'Centre for Development of Advanced Computing (CDAC)',
            role: 'Knowledge Associate - Research & Development',
            duration: 'Aug 2023 - Present',
            location: 'Bengaluru, Karnataka',
            responsibilities: [
                'Design, implement, and evaluate frontier foundation-model architectures with novel loss functions',
                'Build multilingual and multimodal data pipelines for large-scale training',
                'Deliver reproducible training runs with rigorous ablation studies across modalities',
                'Advance model reasoning through curriculum design and synthetic data generation',
                'Train models for tool-use and agentic behavior with comprehensive evaluation suites',
                'Apply probabilistic diagnostics to identify failure modes and iterative improvements',
                'Optimize training and serving on TPUs/GPUs with parallelism strategies',
                'Implement memory-aware custom kernels and quantization techniques',
                'Profile latency/throughput metrics and build production inference stacks',
                'Build agentic RAG applications with multi-agent orchestration via CLI tools',
                'Integrate retrieval, planning, and safety constraints into production systems',
                'Monitor agent behavior with traceability and evaluation frameworks',
            ],
            technologies: [
                'Python', 'PyTorch', 'JAX/Flax', 'Transformers', 'DeepSpeed', 'Megatron-LM',
                'TPU/GPU', 'CUDA', 'Triton', 'vLLM', 'Ray', 'Weights & Biases',
                'LangChain', 'LlamaIndex', 'Hugging Face', 'PEFT', 'bitsandbytes',
            ],
            achievements: [
                'Achieved 35% improvement in adversarial robustness through RL-based optimization',
                'Reduced data preprocessing time by 60% with custom dataset loaders',
                'Cut computational costs by 50% using mixed-precision quantization',
                'Improved chatbot response accuracy and engagement by 40%',
                'Successfully deployed speaker recognition system at IIT Jammu',
            ],
        },
        {
            id: 'mediatek-2022',
            company: 'MediaTek',
            role: 'Modem Software Engineer - Research & Development',
            duration: 'Jul 2022 - Dec 2022',
            location: 'Bengaluru, Karnataka',
            responsibilities: [
                'Optimized LTE modem development for enhanced system efficiency',
                'Improved wireless product performance via PHY/MAC layer tuning',
                'Conducted validation and profiling of modem performance metrics',
                'Collaborated cross-functionally on architecture and integration',
                'Debugged complex issues in 4G/LTE protocol stack',
            ],
            technologies: [
                'C/C++', 'LTE PHY/MAC', '3GPP Standards', 'Protocol Stack',
                'Performance Profiling', 'Signal Processing',
            ],
            achievements: [
                'Reduced processing latency through targeted optimizations',
                'Increased overall system efficiency of modem software',
                'Delivered critical bug fixes ahead of product release deadlines',
            ],
        },
    ],

    projects: [
        {
            id: 'nsm-aics',
            category: 'ai-security',
            title: 'AI for Cyber Security - Dynamic Adversarial Robustness Analysis Framework (NSM-AICS)',
            organization: 'Centre for Development of Advanced Computing (CDAC)',
            duration: 'Aug 2023 - Present',
            description: [
                'Implemented comprehensive attack-defense optimization framework using Reinforcement Learning',
                'Developed 10 adversarial attack strategies: FGSM, PGD, C&W, DeepFool, boundary attacks',
                'Implemented 10 defense mechanisms: adversarial training, certified defenses, input transformations',
                'Utilized Proximal Policy Optimization (PPO) for identifying optimal defense strategies',
                'Created automated evaluation pipeline for robustness assessment',
            ],
            impact: 'Enhanced system robustness by 35%, exceeding initial security benchmarks through RL-optimized defense selection',
            technologies: [
                'PyTorch', 'Stable-Baselines3', 'PPO', 'Adversarial Robustness Toolbox',
                'CleverHans', 'Foolbox', 'NVIDIA GPUs', 'TensorBoard',
            ],
            metrics: [
                { label: 'Attack Strategies', value: '10', improvement: 'Comprehensive coverage' },
                { label: 'Defense Mechanisms', value: '10', improvement: 'Multi-layered protection' },
                { label: 'Robustness Improvement', value: '35%', improvement: 'vs baseline' },
            ],
        },
        {
            id: 'darfa-bot',
            category: 'llm-chatbot',
            title: 'DARFA-BOT - Generalized LLM-based Chatbot with RAG',
            organization: 'Centre for Development of Advanced Computing (CDAC)',
            duration: 'Sept 2023 - Dec 2023',
            description: [
                'Developed sophisticated chatbot using Llama-3.2-Instruct with Retrieval-Augmented Generation',
                'Designed end-to-end pipeline: data collection, embedding, similarity search, generation',
                'Implemented multimodal support for text and audio inputs/outputs',
                'Built vector database with efficient similarity search (FAISS, cosine similarity)',
                'Created comprehensive evaluation framework for response quality',
            ],
            impact: 'Improved response accuracy and user engagement by 40% through RAG-enhanced context retrieval',
            technologies: [
                'Llama-3.2', 'LangChain', 'FAISS', 'Sentence Transformers',
                'Whisper (Audio)', 'TTS Models', 'ChromaDB', 'OpenAI Embeddings',
            ],
            metrics: [
                { label: 'Response Accuracy', value: '40%', improvement: 'improvement' },
                { label: 'Context Retrieval', value: '< 100ms', improvement: 'latency' },
                { label: 'Modalities', value: 'Text + Audio', improvement: 'I/O support' },
            ],
        },
        {
            id: 'llm-framework',
            category: 'llm-framework',
            title: 'LLMs on Custom Datasets - Universal Training Framework (52 File Extensions)',
            organization: 'Centre for Development of Advanced Computing (CDAC)',
            duration: 'Oct 2023 - Present',
            description: [
                'Built generalized framework for LLM dataset loading, preprocessing, training, and fine-tuning',
                'Developed advanced preprocessing API with automatic data loaders for 52 file extensions',
                'Implemented 4-bit and 8-bit mixed-precision quantization (QLoRA, GPTQ)',
                'Created innovative decoding strategies: Correction with Backtracking, constrained generation',
                'Built distributed training pipeline with FSDP and DeepSpeed integration',
            ],
            impact: 'Reduced data preparation time by 60% and computational costs by 50% through efficient quantization',
            technologies: [
                'PyTorch', 'Transformers', 'PEFT (LoRA, QLoRA)', 'bitsandbytes',
                'DeepSpeed', 'FSDP', 'Accelerate', 'Datasets (HuggingFace)',
                'Tokenizers', 'SentencePiece', 'Weights & Biases',
            ],
            metrics: [
                { label: 'File Extensions Supported', value: '52', improvement: 'Universal compatibility' },
                { label: 'Data Prep Time', value: '60%', improvement: 'reduction' },
                { label: 'Computational Cost', value: '50%', improvement: 'reduction via quantization' },
            ],
        },
        {
            id: 'speaker-recognition',
            category: 'speaker-recognition',
            title: 'Real-time Speaker Recognition System - Transformer Architecture',
            organization: 'Indian Institute of Technology Jammu (IIT-J)',
            duration: 'Sept 2022 - Apr 2023',
            description: [
                'Spearheaded development of real-time speaker recognition using Transformer architecture',
                'Collected and curated diverse voice datasets: whisper, mimic, normal speech',
                'Implemented triplet loss for metric learning and embedding optimization',
                'Achieved real-time inference with < 100ms latency on CPU',
                'Successfully deployed system at IIT Jammu for laboratory access control',
            ],
            impact: 'Increased dataset diversity by 70%, enabling robust recognition across voice conditions',
            technologies: [
                'PyTorch', 'Transformers (self-attention)', 'Triplet Loss',
                'MFCC Features', 'Spectrogram Processing', 'ONNX Runtime',
                'FastAPI (deployment)', 'Docker',
            ],
            metrics: [
                { label: 'Inference Latency', value: '< 100ms', improvement: 'Real-time performance' },
                { label: 'Dataset Diversity', value: '70%', improvement: 'increase' },
                { label: 'Deployment Status', value: 'Production', improvement: 'IIT Jammu lab' },
            ],
        },
    ],

    technicalCapabilities: [
        {
            id: 'llm-training',
            category: 'training',
            title: 'Foundation Model Training & Architecture Design',
            description: 'Design and train frontier foundation models from scratch with novel architectures, loss functions, and training strategies for multilingual and multimodal tasks.',
            technologies: [
                'PyTorch', 'JAX/Flax', 'DeepSpeed', 'Megatron-LM', 'FSDP',
                'Transformers', 'Flash Attention', 'Mixed Precision (FP16/BF16)',
            ],
            achievements: [
                'Designed custom Transformer variants with architectural innovations',
                'Implemented curriculum learning schedules for improved convergence',
                'Trained models on multilingual datasets (100+ languages)',
                'Conducted rigorous ablation studies across hyperparameters',
            ],
            architectures: [
                'Transformer (encoder, decoder, encoder-decoder)',
                'Mixture of Experts (MoE)',
                'State Space Models (Mamba, S4)',
                'Hybrid architectures (conv-attention)',
            ],
            lossFunctions: [
                'Cross-Entropy with label smoothing',
                'Contrastive Loss (InfoNCE, triplet)',
                'Multi-task learning objectives',
                'Auxiliary losses (perplexity, diversity)',
            ],
            dataScale: 'Trained on datasets ranging from 10M to 1B+ tokens',
            distributedStrategies: [
                'Data Parallelism (DDP)',
                'Fully Sharded Data Parallelism (FSDP)',
                'Pipeline Parallelism',
                'Tensor Parallelism',
                'Zero Redundancy Optimizer (ZeRO-1/2/3)',
            ],
        } as TrainingCapability,

        {
            id: 'llm-inference',
            category: 'inference',
            title: 'Production Inference Optimization & Quantization',
            description: 'Build highly optimized inference stacks for production deployment with quantization, batching, and hardware-specific optimizations for minimal latency and maximum throughput.',
            technologies: [
                'vLLM', 'TensorRT-LLM', 'ONNX Runtime', 'bitsandbytes',
                'GPTQ', 'AWQ', 'SmoothQuant', 'Flash Decoding',
            ],
            achievements: [
                'Achieved 50% cost reduction through 4-bit/8-bit quantization',
                'Implemented continuous batching for 3x throughput improvement',
                'Reduced P99 latency to < 200ms for production workloads',
                'Built automated regression test suites for inference correctness',
            ],
            quantization: [
                '4-bit (GPTQ, AWQ) - 75% memory reduction',
                '8-bit (LLM.int8) - 50% memory reduction',
                'Mixed precision inference (FP16/BF16)',
                'Dynamic quantization for activation compression',
            ],
            batchingStrategies: [
                'Continuous batching (vLLM)',
                'Dynamic batching with request padding',
                'Speculative decoding',
                'Prefix caching for repeated prompts',
            ],
            latencyOptimizations: [
                'FlashAttention-2 for 2-3x speedup',
                'KV cache optimization',
                'Paged Attention for memory efficiency',
                'Custom CUDA kernels (Triton)',
            ],
            hardwareTargets: [
                'NVIDIA GPUs (A100, H100, L4, T4)',
                'Google TPUs (v4, v5e)',
                'AMD GPUs (MI250)',
                'Apple Silicon (Metal Performance Shaders)',
            ],
        } as InferenceCapability,

        {
            id: 'tpu-gpu-optimization',
            category: 'optimization',
            title: 'Distributed Training & Hardware Optimization',
            description: 'Optimize training and serving on TPUs/GPUs through parallelism strategies, memory-aware kernel development, and comprehensive profiling for maximum hardware utilization.',
            technologies: [
                'CUDA', 'Triton', 'XLA', 'NCCL', 'TPU Compiler',
                'NVIDIA Nsight', 'PyTorch Profiler', 'TensorBoard Profiler',
            ],
            achievements: [
                'Achieved 90%+ GPU utilization through optimized data loading',
                'Reduced inter-node communication overhead by 40% with gradient compression',
                'Implemented custom kernels for 2x speedup in attention computation',
                'Profiled and optimized memory bottlenecks for 3x larger batch sizes',
            ],
            parallelismTypes: [
                'Data Parallel (synchronous, asynchronous)',
                'Tensor Parallel (Megatron-style)',
                'Pipeline Parallel (GPipe, 1F1B schedule)',
                '3D Parallelism (data + tensor + pipeline)',
                'Expert Parallelism (for MoE models)',
            ],
            memoryOptimizations: [
                'Gradient checkpointing (activation recomputation)',
                'CPU offloading for optimizer states',
                'Mixed precision with automatic scaling',
                'Memory-efficient attention (Flash, xFormers)',
            ],
            kernelOptimizations: [
                'Custom CUDA kernels for fused operations',
                'Triton kernels for auto-vectorization',
                'Layer fusion (conv-bn-relu)',
                'Memory coalescing for bandwidth optimization',
            ],
            profilingTools: [
                'NVIDIA Nsight Systems/Compute',
                'PyTorch Profiler with TensorBoard',
                'JAX Profiler for TPU',
                'Weights & Biases system metrics',
            ],
        } as OptimizationCapability,

        {
            id: 'agentic-ai',
            category: 'agentic',
            title: 'Agentic AI & Multi-Agent Orchestration',
            description: 'Build agentic RAG applications and multi-agent systems with tool integration, planning capabilities, safety constraints, and comprehensive evaluation frameworks for real-world deployment.',
            technologies: [
                'LangChain', 'LlamaIndex', 'AutoGen', 'CrewAI',
                'ReAct', 'ReWOO', 'Tool-use APIs', 'Function Calling',
            ],
            achievements: [
                'Built production agentic CLI tools with retrieval and planning',
                'Implemented multi-agent collaboration for complex task decomposition',
                'Integrated safety constraints and guardrails for reliable behavior',
                'Created comprehensive traceability and evaluation dashboards',
            ],
            architecturePatterns: [
                'ReAct (Reasoning + Acting)',
                'Plan-and-Execute',
                'Reflection and Self-Correction',
                'Tree of Thoughts (ToT)',
                'Graph of Thoughts (GoT)',
                'Chain of Thought (CoT) prompting',
            ],
            toolIntegration: [
                'Function calling with API schemas',
                'External API integration (REST, GraphQL)',
                'Code execution environments (sandboxed)',
                'Database query generation and execution',
                'Web browsing and scraping',
                'File system operations',
            ],
            orchestrationFrameworks: [
                'LangGraph for stateful agent workflows',
                'Multi-agent collaboration (hierarchical, sequential)',
                'Task decomposition and delegation',
                'Consensus mechanisms for multi-agent decisions',
            ],
            safetyMechanisms: [
                'Input sanitization and validation',
                'Output filtering and content moderation',
                'Tool access control and permissions',
                'Budget limits (API calls, tokens, time)',
                'Guardrails for harmful content prevention',
                'Audit logging and traceability',
            ],
        } as AgenticCapability,
    ],

    skills: [
        {
            category: 'Programming Languages',
            icon: '💻',
            skills: [
                { name: 'Python', proficiency: 95, yearsOfExperience: 5 },
                { name: 'C++', proficiency: 85, yearsOfExperience: 4 },
                { name: 'CUDA', proficiency: 80, yearsOfExperience: 2 },
                { name: 'Bash/Shell', proficiency: 85, yearsOfExperience: 4 },
                { name: 'SQL', proficiency: 75, yearsOfExperience: 3 },
            ],
        },
        {
            category: 'ML/AI Frameworks',
            icon: '🤖',
            skills: [
                { name: 'PyTorch', proficiency: 95, yearsOfExperience: 4 },
                { name: 'Transformers (HF)', proficiency: 95, yearsOfExperience: 3 },
                { name: 'JAX/Flax', proficiency: 80, yearsOfExperience: 2 },
                { name: 'DeepSpeed', proficiency: 85, yearsOfExperience: 2 },
                { name: 'vLLM', proficiency: 90, yearsOfExperience: 2 },
                { name: 'LangChain', proficiency: 90, yearsOfExperience: 2 },
            ],
        },
        {
            category: 'LLM Specializations',
            icon: '🧠',
            skills: [
                { name: 'Fine-tuning & PEFT', proficiency: 95 },
                { name: 'RLHF & DPO', proficiency: 85 },
                { name: 'RAG Systems', proficiency: 95 },
                { name: 'Quantization', proficiency: 90 },
                { name: 'Prompt Engineering', proficiency: 95 },
            ],
        },
        {
            category: 'Infrastructure & MLOps',
            icon: '⚙️',
            skills: [
                { name: 'TPU/GPU Optimization', proficiency: 85 },
                { name: 'Distributed Training', proficiency: 90 },
                { name: 'Docker/Kubernetes', proficiency: 80 },
                { name: 'Weights & Biases', proficiency: 90 },
                { name: 'FastAPI', proficiency: 90 },
            ],
        },
        {
            category: 'Research Domains',
            icon: '🔬',
            skills: [
                { name: 'Speaker Recognition', proficiency: 95 },
                { name: 'Adversarial ML', proficiency: 85 },
                { name: 'Multimodal Learning', proficiency: 80 },
                { name: 'Signal Processing', proficiency: 85 },
            ],
        },
    ],
};
