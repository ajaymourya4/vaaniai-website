// Homepage FAQ. Each question targets a search query; learnMore points to the
// guide page that covers it in depth (rendered as a "Learn More" link and
// internal-linking path for SEO).

export interface FaqItem {
  question: string;
  answer: string;
  learnMore?: { href: string; label: string };
}

export const faqData: FaqItem[] = [
  {
    question: 'How can I practice English speaking online?',
    answer:
      'Vaani lets you practice English speaking online through real AI-powered voice conversations. Choose a real-life topic — travel, work, daily life — talk naturally using hold-to-speak, and get instant feedback on grammar, pronunciation, and word choice with every sentence.',
    learnMore: {
      href: '/guides/english-conversation-practice-online/',
      label: 'Learn more about English conversation practice online',
    },
  },
  {
    question: 'How do I learn to speak English fluently?',
    answer:
      'Fluency comes from speaking out loud every day — not from more grammar study. Practice real conversations, get your mistakes corrected immediately, and build a daily 15-minute routine. With consistent speaking practice, most learners feel a clear difference within 4–6 weeks.',
    learnMore: {
      href: '/guides/how-to-speak-english-fluently/',
      label: 'Learn how to speak English fluently step by step',
    },
  },
  {
    question: 'Can I practice English speaking at home without a partner?',
    answer:
      'Yes. Self-talk, shadowing, and reading aloud build speaking volume at home, and an AI conversation coach adds the two things solo practice is missing: a partner that talks back, and corrections on every sentence. Vaani gives you both, 24/7, with no scheduling.',
    learnMore: {
      href: '/guides/practice-english-speaking-at-home/',
      label: 'Learn how to practice English speaking at home',
    },
  },
  {
    question: 'How does Vaani help improve English pronunciation?',
    answer:
      'Vaani scores every sentence you speak and highlights the exact words you mispronounced. Tap a word to see its phonetic spelling, listen to the correct pronunciation, and repeat until your accuracy score climbs — like a personal pronunciation coach on every conversation.',
    learnMore: {
      href: '/guides/improve-english-pronunciation/',
      label: 'Learn how to improve English pronunciation',
    },
  },
  {
    question: 'How do I stop being nervous when speaking English?',
    answer:
      'Hesitation is a confidence problem, not a knowledge problem — and confidence is built through safe repetitions. Practicing with Vaani removes the fear of being judged: you make mistakes cheaply, get corrected privately, and walk into real conversations already warmed up.',
    learnMore: {
      href: '/guides/speak-english-confidently-without-fear/',
      label: 'Learn how to speak English confidently without fear',
    },
  },
  {
    question: 'Can Vaani help me prepare for a job interview in English?',
    answer:
      'Yes. Use Role Play mode and the Work & Career topic to rehearse interview questions out loud with an AI interviewer that asks follow-ups. Practice your answers until they flow, fix recurring grammar mistakes, and drill the pronunciation of your key professional vocabulary.',
    learnMore: {
      href: '/guides/english-speaking-practice-for-job-interviews/',
      label: 'Learn how to practice English for job interviews',
    },
  },
  {
    question: 'Is practicing English speaking with AI effective?',
    answer:
      'Very — because AI solves the three biggest blockers: no partner, fear of judgment, and no feedback. You get unlimited voice conversations, instant corrections on every sentence, and 24/7 availability. Many learners practice more in a week with AI than in months of classes.',
    learnMore: {
      href: '/guides/practice-english-speaking-with-ai/',
      label: 'Learn how AI English speaking practice works',
    },
  },
  {
    question: 'Is Vaani free to use? Does it work for beginners?',
    answer:
      'Vaani is free to download and start practicing — no credit card required. It works for every level: the AI adapts to your current speaking ability, keeps conversations supportive and encouraging for beginners, and increases difficulty as you improve.',
  },
  {
    question: 'Is my voice data private and secure?',
    answer:
      'Yes. Your voice is processed to power the conversation and feedback, and we take privacy seriously. See our Privacy Policy for the details of how your data is handled and protected.',
    learnMore: {
      href: '/privacy-policy/',
      label: 'Read the Vaani privacy policy',
    },
  },
];
