export interface Profile {
  name: string;
  role: string;
  focus: string;
  location: string;
  email: string;
  linkedin: string;
  github: { name: string; url: string }[];
  resumeUrl: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  mechanisms: string[];
}

export interface Project {
  id: string;
  name: string;
  kind: string;
  status: string;
  summary: string;
  details: string[];
  stack: string[];
  url: string;
  sourceUrl?: string;
}

export interface Writing {
  id: string;
  title: string;
  kind: string;
  status: string;
  description: string;
  url: string;
  topics: string[];
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  focus: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
}

export interface Expertise {
  title: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  project: string;
}

export const profile: Profile = {
  name: 'Hemanth Kandimalla',
  role: 'Applied AI Scientist',
  focus: 'Agent alignment & control',
  location: 'Bengaluru, India',
  email: 'kandimallahemanthies@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hemanth-k-a88786215',
  github: [
    { name: 'neuralatlasai', url: 'https://github.com/neuralatlasai' },
    { name: 'generalaimodels', url: 'https://github.com/generalaimodels' },
    { name: 'HemanthIITJ', url: 'https://github.com/HemanthIITJ' },
  ],
  resumeUrl: '/Hemanth_Kandimalla_Resume.pdf',
};

export const researchAreas: ResearchArea[] = [
  {
    id: 'harness-control',
    title: 'Harness & control',
    description:
      'I investigate how agent harnesses turn model capability into bounded, inspectable execution, with explicit decisions about tools, verification, and recovery.',
    mechanisms: [
      'Execution state machines',
      'Plan–execute–verify–repair loops',
      'Tool permissions & contracts',
      'Budgets & termination rules',
    ],
  },
  {
    id: 'memory-context',
    title: 'Memory & context',
    description:
      'I work on continuous memory and context: what an agent retains, what it retrieves, and how useful evidence reaches the next decision.',
    mechanisms: [
      'Persistent state',
      'Context construction',
      'Retrieval & reranking',
      'Memory lifecycle',
    ],
  },
  {
    id: 'graphs-coordination',
    title: 'Graphs & coordination',
    description:
      'I study workflow and dependency graphs alongside memory and knowledge graphs, connecting execution structure with the information an agent needs to act.',
    mechanisms: [
      'Workflow & dependency graphs',
      'Memory & knowledge graphs',
      'Task coordination',
      'State & provenance',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'trainscale',
    name: 'TrainScale',
    kind: 'Model training infrastructure',
    status: 'Public source',
    summary:
      'A YAML-driven PyTorch framework connecting data preparation, training objectives, distributed execution, and restartable checkpoints.',
    details: [
      'Dataset introspection, prompt construction, tokenization, and sequence packing feed configurable training workflows.',
      'DPO and SimPO objectives sit alongside LoRA/QLoRA workflows and DDP/FSDP execution paths.',
      'Triton forward/backward kernels for cross-entropy, RMSNorm, and RoPE integrate with PyTorch autograd, torch.compile, and CUDA Graph paths.',
    ],
    stack: ['PyTorch', 'Triton', 'DDP / FSDP', 'LoRA / QLoRA', 'DPO / SimPO'],
    url: 'https://github.com/generalaimodels/TrainScale',
    sourceUrl:
      'https://github.com/generalaimodels/TrainScale/tree/main/data_pipeline/trainer',
  },
  {
    id: 'sdkatlas',
    name: 'SDKAtlas',
    kind: 'Static analysis & developer tooling',
    status: 'Experimental · v0.1',
    summary:
      'An AST-based inventory tool that maps Python SDK surfaces without importing or executing the target package.',
    details: [
      'Resolves signatures, inheritance, declared return types, and resource paths from source evidence.',
      'Exports 14 deterministic CSV, JSONL, and SQLite artifacts with provenance and explicit partial or unknown results.',
      'Includes differential fixture tests, property tests, fuzz cases, and artifact regressions.',
    ],
    stack: ['Python', 'AST analysis', 'SQLite', 'Hypothesis', 'pytest'],
    url: 'https://github.com/neuralatlasai/SDKAtlas',
    sourceUrl: 'https://github.com/neuralatlasai/SDKAtlas/tree/main/src/sdk_atlas',
  },
  {
    id: 'neuralskills',
    name: 'NeuralSkills',
    kind: 'Reusable agent workflows',
    status: 'Workflow pack · v2.0.0',
    summary:
      'Six software-lifecycle skills with shared evidence contracts, typed records, portable packaging, and deterministic validation.',
    details: [
      'Reusable stages cover planning, design, implementation, testing, deployment, and maintenance.',
      'Artifact schemas, source digests, handoff records, and release manifests make workflow state inspectable.',
      'A behavioral evaluation harness keeps executed, blocked, and unrun trials distinct from deterministic validation.',
    ],
    stack: ['Agent Skills', 'Python', 'JSON Schema', 'Evaluation harnesses'],
    url: 'https://github.com/neuralatlasai/NeuralSkills',
    sourceUrl:
      'https://github.com/neuralatlasai/NeuralSkills/tree/main/ai_sdlc_skills',
  },
];

export const writings: Writing[] = [
  {
    id: 'model-stack',
    title: 'The Model Stack',
    kind: 'Technical book & research atlas',
    status: 'In development',
    description:
      'From Data and Silicon to Intelligence. A connected treatment of the foundation-model lifecycle, from data and training to inference, evaluation, and systems.',
    url: 'https://neuralatlasai.github.io/The_Model_Stack/',
    topics: ['Model lifecycle', 'Training', 'Inference', 'Evaluation'],
  },
  {
    id: 'reliable-agentic-systems',
    title: 'Engineering Reliable Agentic AI Systems',
    kind: 'Technical book',
    status: 'Book project',
    description:
      'An engineering treatment of agents as executable systems: harnesses, tool contracts, memory, context, orchestration, evaluation, and recovery.',
    url: 'https://neuralatlasai.github.io/Engineering-Reliable-AgenticAI-Systems/',
    topics: ['Harnesses', 'Memory & context', 'Orchestration', 'Reliability'],
  },
  {
    id: 'system-architecture',
    title: 'System Architecture Book',
    kind: 'Technical book',
    status: 'Online edition',
    description:
      'A 15-chapter exploration of data-intensive, AI-native, and distributed systems architecture, connecting design decisions with operational constraints.',
    url: 'https://neuralatlasai.github.io/System_Architecture_Book/',
    topics: ['Distributed systems', 'Data architecture', 'AI infrastructure'],
  },
  {
    id: 'engineering-journal',
    title: 'Neural Atlas AI Engineering Journal',
    kind: 'Research & engineering journal',
    status: 'Ongoing',
    description:
      'Technical analysis and architecture reconstruction across AI models, agent systems, training, inference, and production infrastructure.',
    url: 'https://neuralatlasai.github.io/neural-atlas-ai-engineering-journal/',
    topics: ['Research analysis', 'Agent systems', 'Model infrastructure'],
  },
];

export const experience: Experience[] = [
  {
    id: 'celebal',
    company: 'Celebal Technologies',
    title: 'Senior Software Engineer – Data Science',
    focus: 'Applied AI Scientist',
    period: 'Sep 2026 – Present',
    location: 'Bengaluru, India',
    summary:
      'Applied AI research and engineering across domain-specialized models and reliable agent execution.',
    bullets: [
      'Investigate agent alignment and control through continuous memory and context, workflow dependencies, and memory/knowledge graphs.',
      'Engineer SLM/LLM applications spanning model adaptation, evaluation, inference efficiency, and scalable deployment.',
    ],
  },
  {
    id: 'cdac',
    company: 'Centre for Development of Advanced Computing (C-DAC)',
    title: 'Knowledge Associate',
    focus: 'Applied AI Research',
    period: 'Aug 2023 – Aug 2026',
    location: 'Bengaluru, India',
    summary:
      'Built domain-model applications, agent harnesses, and training and serving workflows across AI research and development.',
    bullets: [
      'Delivered 10 AI proofs of concept and adapted a 3B-parameter language model with retrieval, reranking, grounded generation, memory, and FastAPI/vLLM serving.',
      'Engineered agent harnesses with persistent memory, context assembly, MCP/JSON-RPC tools, bounded verification and repair, permission gates, and rollback.',
      'Profiled latency, throughput, and GPU memory to guide caching, batching, quantization, and precision decisions; developed adversarial-robustness evaluation workflows.',
    ],
  },
  {
    id: 'mediatek',
    company: 'MediaTek',
    title: 'Modem Software Engineer Intern',
    focus: 'Wireless systems engineering',
    period: 'Jul 2022 – Jan 2023',
    location: 'Bengaluru, India',
    summary:
      'Modem validation and cross-layer debugging in a production wireless engineering environment.',
    bullets: [
      'Validated LTE/5G PHY–MAC behavior through protocol-log analysis, profiling, and hardware–software debugging.',
      'Explored concurrent Wi-Fi and cellular operation and received a pre-placement offer after the internship.',
    ],
  },
];

export const expertise: Expertise[] = [
  {
    title: 'Harness & control',
    items: ['State machines', 'Verification & repair', 'MCP / JSON-RPC', 'Agent Skills'],
  },
  {
    title: 'Memory & graph systems',
    items: ['Persistent state', 'Context construction', 'RAG', 'Workflow & knowledge graphs'],
  },
  {
    title: 'Model development',
    items: ['PyTorch', 'Transformers', 'SFT', 'DPO / SimPO', 'LoRA / QLoRA', 'DDP / FSDP'],
  },
  {
    title: 'GPU & inference',
    items: ['Triton / autograd', 'torch.compile', 'CUDA Graphs', 'vLLM', 'KV-cache', 'Quantization'],
  },
  {
    title: 'Engineering & evaluation',
    items: ['Python / C++', 'FastAPI', 'AST analysis', 'Deterministic validation', 'Docker / Linux'],
  },
];

export const education: Education = {
  institution: 'Indian Institute of Technology Jammu',
  degree: 'M.Tech, Communications and Signal Processing',
  period: '2021 – 2023',
  cgpa: '8.34/10',
  project:
    'Speaker recognition research spanning voice-data curation, audio preprocessing, Transformer embeddings, triplet-loss training, evaluation, and onsite deployment.',
};
