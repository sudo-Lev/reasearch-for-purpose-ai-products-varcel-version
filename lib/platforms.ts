export type Platform = {
  name: string;
  shortName: string;
  description: string;
  positioning: string;
  capabilities: string[];
  signal: string;
  icon: "listening" | "detector" | "personas" | "editorio";
};

export const platforms: Platform[] = [
  {
    name: "AI Listening & Insights",
    shortName: "Listen",
    description:
      "Social listening, community feedback, and research evidence in one environment.",
    positioning:
      "The platform brings social media monitoring, media tracking, community feedback, audience research, and internal evidence into one secure AI-powered environment.",
    capabilities: [
      "Understand what communities think and need in real time",
      "Move from fragmented signals to clear, evidence-backed decisions",
      "Connect live insights to research, guidance, and internal data"
    ],
    signal: "Community signal",
    icon: "listening"
  },
  {
    name: "Misinformation Virality Detector",
    shortName: "Detect",
    description:
      "Detect harmful narratives before they spread, earlier than keyword tools.",
    positioning:
      "This platform analyses narrative structure, manipulation patterns, and virality potential. It is designed to detect what is emerging, not just what is already established.",
    capabilities: [
      "Misinformation risk assessment for emerging narratives",
      "Virality potential and manipulation pattern detection",
      "Evidence trails that help teams decide when and how to act"
    ],
    signal: "Risk signal",
    icon: "detector"
  },
  {
    name: "AI Personas",
    shortName: "Simulate",
    description:
      "Test messages with simulated audiences before any communication goes public.",
    positioning:
      "This platform brings audience perspective into the planning process earlier, enabling teams to stress-test messages, identify trust barriers, and refine framing before investing in a full campaign or consultation.",
    capabilities: [
      "AI-generated audience personas grounded in research inputs",
      "Persona chat for exploring likely reactions and resistance",
      "Message testing for trust, clarity, relevance, and framing"
    ],
    signal: "Audience signal",
    icon: "personas"
  },
  {
    name: "Editorio",
    shortName: "Create",
    description:
      "Communication materials connected to your evidence, data, and guidance.",
    positioning:
      "Editorio helps generate communication products connected to approved guidance, past campaign performance, research findings, and audience understanding.",
    capabilities: [
      "Campaign and message generation from approved inputs",
      "Human supervision workflows for quality and consistency",
      "Outputs aligned with organisational voice and audience needs"
    ],
    signal: "Content signal",
    icon: "editorio"
  }
];

export const storySteps = [
  {
    verb: "Listen",
    title: "Move from fragmented signals to clear decisions.",
    copy: "Bring social listening, community feedback, audience research, and internal evidence into one secure environment."
  },
  {
    verb: "Detect",
    title: "Detect harmful narratives earlier.",
    copy: "Analyse narrative structure, manipulation patterns, and virality potential before a claim becomes established."
  },
  {
    verb: "Simulate",
    title: "Bring audience perspective into planning.",
    copy: "Stress-test messages, identify trust barriers, and refine framing before a campaign or consultation goes live."
  },
  {
    verb: "Create",
    title: "Create materials connected to evidence.",
    copy: "Generate communication products from approved guidance, research findings, audience understanding, and past performance."
  },
  {
    verb: "Act",
    title: "Move from insight to action with support.",
    copy: "R4P researchers and specialists configure, interpret, and advise throughout the engagement."
  }
];
