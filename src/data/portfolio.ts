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
  implementation: { title: string; description: string }[];
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
  id: string;
  title: string;
  mechanisms: string;
  work: string;
  evidence: { label: string; kind: string; url: string }[];
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
  resumeUrl: '/Hemanth_Kandimalla_Resume.pdf?v=20261029-536b63d2',
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
      'A YAML-driven PyTorch framework connecting data preparation, model adaptation, distributed execution, and restartable checkpoints.',
    implementation: [
      { title: 'Data preparation', description: 'Dataset introspection, prompt construction, tokenization, and sequence packing feed configurable training workflows.' },
      { title: 'Loss modules & training paths', description: 'Implements DPO/SimPO loss modules; LoRA/QLoRA and DDP/FSDP training paths are configured separately.' },
      { title: 'Kernel execution', description: 'Triton forward/backward kernels for cross-entropy, RMSNorm, and RoPE connect to PyTorch autograd, torch.compile, and CUDA Graph paths.' },
    ],
    stack: ['PyTorch', 'Triton', 'DDP / FSDP', 'LoRA / QLoRA', 'DPO / SimPO losses'],
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
    implementation: [
      { title: 'Reconstruct the interface', description: 'Resolves signatures, inheritance, declared return types, and resource paths from Python source evidence.' },
      { title: 'Keep uncertainty explicit', description: 'Exports 14 CSV, JSONL, and SQLite artifacts in deterministic order, with provenance and partial or unknown results.' },
      { title: 'Check the exported evidence', description: 'Differential fixtures, property tests, fuzz cases, and artifact regressions exercise the inventory and its outputs.' },
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
    implementation: [
      { title: 'Six lifecycle stages', description: 'Reusable skills cover planning, design, implementation, testing, deployment, and maintenance.' },
      { title: 'Inspect each handoff', description: 'Artifact schemas, source digests, typed records, and release manifests carry the evidence between stages.' },
      { title: 'Separate checks from outcomes', description: 'Behavioral evaluation specifications distinguish executed, blocked, and unrun trials from deterministic validation.' },
    ],
    stack: ['Agent Skills', 'Python', 'JSON Schema', 'Evaluation harnesses'],
    url: 'https://github.com/neuralatlasai/NeuralSkills',
    sourceUrl:
      'https://github.com/neuralatlasai/NeuralSkills/tree/main/ai_sdlc_skills',
  },
];

export const featuredResearch: Writing & { subtitle: string; sourceUrl: string } = {
  id: 'autonomyatlas',
  title: 'Agentic State',
  subtitle: 'Context, Memory, and Control in Adaptive AI',
  kind: 'Technical monograph',
  status: 'Online edition',
  description:
    'A cross-layer research synthesis connecting context–memory–policy consistency with authorization, tool execution, verification, and self-improvement.',
  url: 'https://neuralatlasai.github.io/AutonomyAtlas/',
  sourceUrl: 'https://github.com/neuralatlasai/AutonomyAtlas',
  topics: ['Context', 'Memory', 'Agent control', 'Evaluation'],
};

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
    id: 'agent-harnesses',
    title: 'Agent harnesses & control',
    mechanisms: 'Execution state, tool contracts, MCP/JSON-RPC boundaries, permission checks, verification, and recovery.',
    work: 'Connect model proposals to execution authority and evidence of external effects.',
    evidence: [
      { label: 'Agentic State · harnesses', kind: 'Research synthesis', url: 'https://neuralatlasai.github.io/AutonomyAtlas/chapters/20-harnesses/' },
      { label: 'NeuralSkills · governance', kind: 'Workflow contracts', url: 'https://github.com/neuralatlasai/NeuralSkills/blob/main/ai_sdlc_skills/shared/governance.md' },
    ],
  },
  {
    id: 'context-memory',
    title: 'Context & persistent memory',
    mechanisms: 'Session histories, context assembly, retrieval, memory validity, provenance, and workflow dependencies.',
    work: 'Analyze which information reaches the next decision and what must remain consistent when memory changes.',
    evidence: [
      { label: 'Agentic State · consistency', kind: 'Research synthesis', url: 'https://neuralatlasai.github.io/AutonomyAtlas/chapters/17-consistency/' },
    ],
  },
  {
    id: 'skills-evaluation',
    title: 'Agent Skills & evaluation',
    mechanisms: 'Reusable instructions, typed evidence records, schema validation, portable bundles, and trace-backed assessment.',
    work: 'NeuralSkills packages six lifecycle stages and keeps deterministic validation separate from behavioral qualification.',
    evidence: [
      { label: 'AI-SDLC skill pack', kind: 'Implementation & contracts', url: 'https://github.com/neuralatlasai/NeuralSkills/tree/main/ai_sdlc_skills' },
      { label: 'Evaluation cases', kind: 'Assessment specification', url: 'https://github.com/neuralatlasai/NeuralSkills/blob/main/ai_sdlc_skills/evaluations/cases.md' },
    ],
  },
  {
    id: 'model-systems',
    title: 'Model training & GPU paths',
    mechanisms: 'Data packing, LoRA/QLoRA and DDP/FSDP paths, DPO/SimPO loss modules, Triton kernels, and PyTorch autograd.',
    work: 'TrainScale provides configurable data, trainer, loss, kernel, and checkpoint modules.',
    evidence: [
      { label: 'TrainScale · trainer', kind: 'Software source', url: 'https://github.com/generalaimodels/TrainScale/tree/main/data_pipeline/trainer' },
      { label: 'Kernel implementations', kind: 'Software source', url: 'https://github.com/generalaimodels/TrainScale/tree/main/data_pipeline/trainer/kernels' },
    ],
  },
  {
    id: 'source-analysis',
    title: 'Static analysis & verification',
    mechanisms: 'Python ASTs, signatures, inheritance and resource resolution, explicit uncertainty, and artifact regression checks.',
    work: 'SDKAtlas converts source evidence into queryable CSV, JSONL, and SQLite inventories without importing the target package.',
    evidence: [
      { label: 'SDKAtlas · analyzer', kind: 'Software source', url: 'https://github.com/neuralatlasai/SDKAtlas/tree/main/src/sdk_atlas' },
      { label: 'Testing contracts', kind: 'Verification specification', url: 'https://github.com/neuralatlasai/SDKAtlas/blob/main/docs/testing.md' },
    ],
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
