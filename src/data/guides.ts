// Guide content for /guides/* pages. One guide per target keyword — see app.md
// for the keyword research behind these. Every claim about the app must be
// supported by the Play Store listing or screenshots (no invented features).

// Text in p/list/steps/table blocks may contain inline links: [anchor](/guides/slug/)
export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'steps'; items: { title: string; text: string }[] }
  | { type: 'table'; head: string[]; rows: string[][] }
  // Sample answer / quoted script. Separate paragraphs with a blank line.
  | { type: 'example'; label?: string; text: string };

export interface GuideSection {
  heading: string;
  blocks: GuideBlock[];
}

export interface Guide {
  slug: string;
  publishedAt: string; // YYYY-MM-DD
  updatedAt: string; // YYYY-MM-DD; bump only on real content changes
  author?: { name: string; jobTitle?: string; url?: string };
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  sections: GuideSection[];
  vaani: {
    heading: string;
    intro: string;
    steps: string[];
    screenshot: { src: string; alt: string };
  };
  faqs: { question: string; answer: string }[];
  related: string[];
}

const AUTHOR = { name: 'Ajay Mourya', jobTitle: 'Founder, Vaani' };

export const guides: Guide[] = [
  {
    slug: 'how-to-speak-english-fluently',
    publishedAt: '2026-07-07',
    updatedAt: '2026-07-07',
    author: AUTHOR,
    keyword: 'how to speak english fluently',
    metaTitle: 'How to Speak English Fluently: 10 Steps That Work | Vaani',
    metaDescription:
      'Learn how to speak English fluently with 10 practical steps: daily speaking practice, thinking in English, instant feedback, and a routine you can stick to.',
    title: 'How to Speak English Fluently: 10 Steps That Actually Work',
    intro:
      'To speak English fluently, you need to speak — out loud, every day — not study more grammar. Fluency is a physical skill like swimming: it is built through repetitions of real conversation, quick feedback on your mistakes, and gradually thinking in English instead of translating. Here is a step-by-step plan that works even if you have nobody to practice with.',
    sections: [
      {
        heading: 'Why you understand English but still can’t speak it',
        blocks: [
          {
            type: 'p',
            text: 'Most learners have years of passive English — reading, listening, watching movies — but very few hours of active speaking. Understanding and speaking are stored as different skills in your brain. Reading another grammar book strengthens the skill you already have; only speaking builds the one you are missing. That is why someone who scores well on written tests can still freeze in a real conversation.',
          },
        ],
      },
      {
        heading: '10 steps to become fluent in English',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Speak out loud every day, even alone',
                text: 'Ten to twenty minutes of daily speaking beats a two-hour class once a week. Narrate what you are doing, describe your day, or talk with an AI conversation partner. The muscle memory of forming English sentences aloud is the foundation of fluency.',
              },
              {
                title: 'Learn phrases, not isolated words',
                text: 'Fluent speakers retrieve ready-made chunks — "I was wondering if…", "It turns out that…" — instead of assembling word by word. Collect full phrases from conversations and reuse them.',
              },
              {
                title: 'Stop translating in your head',
                text: 'Translating from your native language is the biggest cause of hesitation. Practice thinking directly in English: name objects around you, plan your day in English, and keep sentences short so you don’t need to translate.',
              },
              {
                title: 'Get feedback on every mistake — fast',
                text: 'Mistakes you never notice become permanent habits. The fastest improvers get corrections immediately after speaking, while the sentence is still fresh in memory.',
              },
              {
                title: 'Practice real-life scenarios, not textbook dialogues',
                text: 'Rehearse the conversations you will actually have: job interviews, ordering food, small talk with colleagues, travel situations. Scenario practice transfers directly to real life.',
              },
              {
                title: 'Shadow native speakers',
                text: 'Listen to a sentence and repeat it immediately, copying the rhythm, stress, and intonation. Shadowing trains your mouth and your ear at the same time.',
              },
              {
                title: 'Record yourself and listen back',
                text: 'You cannot fix what you cannot hear. Recording reveals the gap between how you think you sound and how you actually sound — and shows your progress over weeks.',
              },
              {
                title: 'Accept mistakes as the method, not the enemy',
                text: 'Fluency is not perfection. Native speakers make grammar slips constantly. Every mistake you make and correct in practice is one you won’t make in the moment that matters.',
              },
              {
                title: 'Make it easy to show up',
                text: 'The best practice method is the one you actually do. Remove friction: no scheduling, no partner coordination, no commute. If you can practice from your phone in five spare minutes, you will practice far more often.',
              },
              {
                title: 'Track your progress',
                text: 'Fluency grows too slowly to feel day-to-day. Accuracy scores, streaks, and a list of words you’ve mastered make progress visible and keep you motivated through the plateau.',
              },
            ],
          },
        ],
      },
      {
        heading: 'How long does it take to speak English fluently?',
        blocks: [
          {
            type: 'p',
            text: 'With consistent daily speaking practice, most learners feel a clear difference in 4–6 weeks: less hesitation, faster sentence formation, more confidence in familiar topics. Conversational comfort in most everyday situations typically takes 3–6 months. The variable that matters most is not talent or living abroad — it is how many minutes per week you actually spend speaking.',
          },
        ],
      },
    ],
    vaani: {
      heading: 'How to build fluency with Vaani',
      intro:
        'Vaani is an AI English speaking coach built around exactly this loop: speak in real scenarios, get corrected instantly, and repeat — with zero judgment and no scheduling.',
      steps: [
        'Open the Practice Hub and pick a topic you’ll actually use — Travel, Work & Career, Daily Life, Food & Cooking, and more.',
        'Hold to speak and have a real voice conversation with your AI English teacher. It responds naturally and keeps the conversation going.',
        'After each sentence, see your accuracy score and instant corrections for grammar, pronunciation, and word choice — then try the sentence again.',
        'Drill the specific words you missed in Words to Practice, with the correct pronunciation to listen to and imitate.',
        'Come back daily — Vaani is available 24/7, so your practice never depends on anyone else’s schedule.',
      ],
      screenshot: {
        src: '/images/screenshots/vaani-instant-grammar-feedback-accuracy.jpg',
        alt: 'Vaani app showing 93% accuracy score with instant feedback on a spoken English sentence and words to practice',
      },
    },
    faqs: [
      {
        question: 'Can I become fluent in English without living abroad?',
        answer:
          'Yes. Immersion helps because it forces daily speaking, but you can recreate that at home: speak English out loud every day, consume English media, and use an AI conversation partner for unlimited real conversations. Consistency matters far more than location.',
      },
      {
        question: 'Should I finish grammar first before I start speaking?',
        answer:
          'No — this is the most common trap. If you can form basic sentences, you know enough grammar to start speaking. You will learn the remaining grammar much faster through corrections in real conversation than through more study.',
      },
      {
        question: 'How many minutes a day should I practice speaking English?',
        answer:
          'Ten to twenty minutes of focused, out-loud speaking per day is enough to make visible progress within weeks. Short daily sessions beat long weekly ones because fluency depends on frequency of retrieval, not total hours.',
      },
    ],
    related: ['daily-english-speaking-practice', 'practice-english-speaking-at-home', 'speak-english-confidently-without-fear'],
  },

  {
    slug: 'practice-english-speaking-at-home',
    publishedAt: '2026-07-07',
    updatedAt: '2026-07-07',
    author: AUTHOR,
    keyword: 'practice english speaking at home',
    metaTitle: 'Practice English Speaking at Home Alone: 7 Ways | Vaani',
    metaDescription:
      'No speaking partner? Learn 7 effective ways to practice English speaking at home alone — self-talk, shadowing, recording, and AI conversation practice.',
    title: 'How to Practice English Speaking at Home — Alone, Without a Partner',
    intro:
      'You can absolutely practice English speaking at home without a partner. The most effective methods are speaking to yourself out loud, shadowing native audio, recording and reviewing your own speech, and having voice conversations with an AI coach that talks back and corrects you. Here is how to combine them into a practice system.',
    sections: [
      {
        heading: 'Why "I have nobody to practice with" doesn’t have to stop you',
        blocks: [
          {
            type: 'p',
            text: 'The old advice — "find a native speaker to talk to" — is impractical for most learners. Language partners cancel, tutors are expensive, and speaking clubs meet once a week at best. Meanwhile, your speaking skill needs daily repetitions. The good news: what builds fluency is your mouth producing English and your brain getting feedback. Both of those are now possible alone, at home, for free.',
          },
        ],
      },
      {
        heading: '7 ways to practice speaking English by yourself',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Narrate your life',
                text: 'Describe what you are doing as you do it: "I’m making tea. The water is boiling. I forgot to buy milk." It feels odd for a day or two, then becomes the easiest zero-cost practice there is.',
              },
              {
                title: 'Shadow native speakers',
                text: 'Play a short clip — a podcast, a series, a YouTube video — and repeat each sentence immediately after you hear it, copying the intonation. Ten minutes of shadowing daily noticeably improves rhythm and pronunciation.',
              },
              {
                title: 'Record yourself answering questions',
                text: 'Pick a common question ("Tell me about your city"), answer for one minute on your phone’s recorder, then listen back. Note hesitations and repeated mistakes, and answer again.',
              },
              {
                title: 'Think in English on a schedule',
                text: 'Set two daily moments — your commute, your walk — where you deliberately think in English. This attacks the translation habit that causes hesitation.',
              },
              {
                title: 'Read aloud for five minutes',
                text: 'Reading aloud trains pronunciation and sentence flow without requiring you to invent content. News articles and simple fiction work well.',
              },
              {
                title: 'Talk to an AI conversation partner',
                text: 'This is the piece the other methods can’t give you: a real back-and-forth conversation with follow-up questions, plus corrections. AI speaking apps let you converse out loud any time, with no judgment and no scheduling.',
              },
              {
                title: 'Rehearse tomorrow’s conversations',
                text: 'Have a meeting, a call, or an appointment coming up? Say your part out loud tonight. Rehearsed sentences come out smoothly under pressure.',
              },
            ],
          },
        ],
      },
      {
        heading: 'The missing ingredient when you practice alone: feedback',
        blocks: [
          {
            type: 'p',
            text: 'Self-talk and shadowing build volume, but they share one weakness — nobody tells you what you got wrong. Practicing errors cements them. That is why the highest-value addition to at-home practice is a feedback source: something that hears your English and corrects your grammar, pronunciation, and word choice immediately. This used to require a tutor; now an AI coach does it on every single sentence.',
          },
        ],
      },
    ],
    vaani: {
      heading: 'How to practice at home with Vaani',
      intro:
        'Vaani turns your phone into a speaking partner that is always available, never judges, and corrects every sentence — the exact things solo practice is missing.',
      steps: [
        'Pick a topic in the Practice Hub — start with Daily Life if you’re not sure — or choose Role Play for scenario practice.',
        'Hold to speak and answer naturally. The AI teacher asks follow-up questions, exactly like a real conversation partner.',
        'Watch your accuracy score after each response and read the instant corrections — mistakes are fixed while the sentence is still fresh.',
        'Add tricky words to your practice list and drill them with the Listen-and-repeat pronunciation tool.',
        'Practice at any hour — before work, during lunch, at midnight. No partner, no appointment, no pressure.',
      ],
      screenshot: {
        src: '/images/screenshots/vaani-practice-hub-english-speaking-topics.jpg',
        alt: 'Vaani Practice Hub with English speaking topics: Travel, Work and Career, Food and Cooking, Movies, Health and Daily Life',
      },
    },
    faqs: [
      {
        question: 'Can I really improve English speaking without a partner?',
        answer:
          'Yes. What improves speaking is producing English out loud and getting feedback on it. Self-talk, shadowing, and recording give you the production; an AI conversation coach adds the real dialogue and the corrections a partner would provide — without the scheduling.',
      },
      {
        question: 'I feel silly talking to myself in English. Is that normal?',
        answer:
          'Completely normal, and it passes within a few days. If self-talk feels too strange, start by reading aloud or talking with an AI coach instead — having a "listener" that responds makes speaking out loud feel natural immediately.',
      },
      {
        question: 'How much time at home do I need per day?',
        answer:
          'Fifteen minutes is enough if it is actual speaking: two minutes of warm-up self-talk, ten minutes of conversation practice, and a few minutes drilling the words you got wrong.',
      },
    ],
    related: ['daily-english-speaking-practice', 'practice-english-speaking-with-ai', 'how-to-speak-english-fluently'],
  },

  {
    slug: 'english-speaking-practice-for-job-interviews',
    publishedAt: '2026-07-07',
    updatedAt: '2026-10-01',
    author: AUTHOR,
    keyword: 'english speaking practice for job interviews',
    metaTitle: 'English Interview Practice: Questions & Answers | Vaani',
    metaDescription:
      'Practice English for job interviews: 10 common questions with sample spoken answers for IT roles, phrases for when you freeze, and a 5-day mock interview plan.',
    title: 'English Interview Speaking Practice: Questions, Sample Answers and a 5-Day Plan',
    intro:
      'The fastest way to stop freezing in an English job interview is to rehearse your answers out loud, not on paper. Speak the questions you will actually be asked until your answers flow, and fix the grammar and pronunciation slips that make you nervous. This guide gives you the 10 questions to practice, sample answers for IT roles, phrases for when your mind goes blank, and a 5-day plan to get ready.',
    sections: [
      {
        heading: 'Why your English disappears in interviews',
        blocks: [
          {
            type: 'p',
            text: 'Under pressure, your brain puts its effort into what you are saying, and your English, the less automatic skill, is the first thing to slip. That is why candidates who read and write English comfortably still stumble in interviews: they have rarely spoken professional English out loud with someone waiting for the answer. Rehearsal fixes this. An answer you have spoken ten times comes out smoothly even when you are nervous, because you no longer have to build it word by word.',
          },
          {
            type: 'p',
            text: 'If nervousness is the bigger problem for you, start with our guide on [speaking English confidently without fear](/guides/speak-english-confidently-without-fear/).',
          },
        ],
      },
      {
        heading: 'The 10 interview questions to practice speaking',
        blocks: [
          {
            type: 'p',
            text: 'Whether you are interviewing for a fresher role at an IT services company or a developer job at a product startup, most interviews draw from the same small set of questions. Prepare spoken answers for these and you have covered most of the conversation. The first five have sample answers below.',
          },
          {
            type: 'list',
            items: [
              '"Tell me about yourself"',
              '"Why should we hire you?"',
              '"What are your strengths and weaknesses?"',
              '"Tell me about a challenge you faced and how you handled it"',
              '"Why do you want to join this company?"',
              '"Where do you see yourself in five years?" Show ambition that fits the company: "I’d like to be leading a small team and owning a module end to end."',
              '"Why are you leaving your current job?" Stay positive. Talk about the growth you want, never complaints about your manager or team.',
              '"What are your salary expectations?" Research the range for the role first, then give a range: "Based on my research, I’m looking for X to Y lakh per annum, but I’m open to discussing the full package."',
              '"Can you explain this gap in your resume?" Give one honest sentence about the reason, then move to what you did to stay current, such as courses or projects.',
              '"Do you have any questions for us?" Always say yes, and prepare two, such as "What does the first month look like for someone in this role?"',
            ],
          },
          {
            type: 'p',
            text: 'Use the sample answers as a structure, not a script. Paragraphs memorised word for word crack under pressure, while a clear structure holds. Put your own details in, then practice saying your version out loud until it sounds like you.',
          },
        ],
      },
      {
        heading: '"Tell me about yourself": sample answers for IT roles',
        blocks: [
          {
            type: 'p',
            text: 'This is almost always the first question, and it sets the tone for the rest of the interview. Use a simple present, past, future structure: who you are now, one or two things you have done that prove it, and what you want next. Keep it to 60 to 90 seconds when spoken.',
          },
          {
            type: 'example',
            label: 'Sample answer · Fresher, B.Tech CSE',
            text: 'Hi, I’m Rahul. I recently completed my B.Tech in Computer Science, and I graduated in 2025.\n\nIn my final year, I worked with two classmates on a library management web app using React and Node.js. I handled the backend and the database, and it showed me how much I enjoy solving problems for real users. I also did a two-month internship where I wrote test cases for a payments module.\n\nNow I’m looking for a software engineer role where I can keep building my backend skills, and that’s why this position caught my attention.',
          },
          {
            type: 'example',
            label: 'Sample answer · 3 years’ experience, QA engineer',
            text: 'Hi, I’m Sneha. I’m a QA engineer with three years of experience. I currently work at an IT services company in Bengaluru, where I test web and mobile apps for a retail client.\n\nOver the last year, I moved our regression suite from manual testing to automated tests with Selenium and Java, which cut our release testing from three days to one.\n\nI’m now looking for a role with more ownership of test automation, and your team’s focus on product quality is a big reason I applied.',
          },
          {
            type: 'p',
            text: 'For 10 more samples, including 30-second and video interview versions, see our guide to [self introduction in English for interview](/guides/self-introduction-in-english-for-interview/).',
          },
        ],
      },
      {
        heading: '"Why should we hire you?"',
        blocks: [
          {
            type: 'p',
            text: 'Connect what you can do to what the role needs, and back it up with one example. Avoid lists of adjectives like "hardworking and dedicated" with no proof; every candidate says them.',
          },
          {
            type: 'example',
            label: 'Sample answer · Fresher, developer role',
            text: 'You need someone who can pick up your stack quickly and work well in a team. For my final-year project, I learned Node.js from scratch in about three weeks and then built the entire backend. During my internship, I worked in a team of six and learned to write code that other people review and maintain.\n\nI can’t claim years of experience, but I learn fast, I take feedback well, and I’m genuinely interested in the kind of products you build.',
          },
        ],
      },
      {
        heading: '"What are your strengths and weaknesses?"',
        blocks: [
          {
            type: 'p',
            text: 'Pick one strength and prove it with an example. For the weakness, choose something real that does not disqualify you for the role, and show what you are doing about it. Skip "I’m a perfectionist"; interviewers hear it every day.',
          },
          {
            type: 'example',
            label: 'Sample answer',
            text: 'My biggest strength is debugging. When something breaks, I stay calm and work through it step by step. During my internship, I was often the person teammates came to when a test kept failing.\n\nA weakness I’m working on is speaking up in meetings. I used to stay quiet even when I had ideas. Now I write down one point before each meeting and make sure I share it, and it’s getting easier every week.',
          },
        ],
      },
      {
        heading: '"Tell me about a challenge you faced"',
        blocks: [
          {
            type: 'p',
            text: 'Use the STAR structure: Situation, Task, Action, Result. Keep the situation short and spend most of your time on what you did. Interviewers want to hear "I", not only "we".',
          },
          {
            type: 'example',
            label: 'Sample answer · STAR structure',
            text: 'Two days before a client demo during my internship, our login feature started failing for some users. My task was to find the cause.\n\nI went through the logs, reproduced the issue, and found that session tokens were expiring too early on one server. I fixed the configuration and added a test so the problem would not come back.\n\nThe demo went ahead on time, and my manager asked me to document the fix for the rest of the team.',
          },
        ],
      },
      {
        heading: '"Why do you want to join this company?"',
        blocks: [
          {
            type: 'p',
            text: 'Spend ten minutes researching the company before the interview and mention something specific: its products, technology, training or growth. A generic answer ("It’s a reputed company") tells the interviewer you did not prepare.',
          },
          {
            type: 'example',
            label: 'Sample answer',
            text: 'I read about how your engineering team moved to a microservices setup, and I want to work somewhere that takes engineering quality seriously. I also like that freshers here work on client projects early, because I learn best by doing real work. And your training program in cloud technologies matches exactly where I want to grow.',
          },
        ],
      },
      {
        heading: 'Phrases to use when you freeze',
        blocks: [
          {
            type: 'p',
            text: 'Everyone blanks at some point in an interview. What matters is having a phrase ready so the silence does not turn into panic. Practice these until they come out automatically:',
          },
          {
            type: 'table',
            head: ['Situation', 'What to say'],
            rows: [
              ['You need time to think', '"That’s a good question. Let me think about it for a moment."'],
              ['You didn’t catch the question', '"Sorry, could you repeat the question, please?"'],
              ['You’re not sure what they mean', '"Just to make sure I understand, do you mean…?"'],
              ['You made a mistake mid-sentence', '"Sorry, let me put that another way."'],
              ['You don’t know the answer', '"I haven’t worked with that yet, but here’s how I would approach it."'],
              ['Explaining your thinking in a technical round', '"My first idea is to…, but let me check the edge cases."'],
              ['Finishing an answer', '"So that’s how I handled it."'],
            ],
          },
        ],
      },
      {
        heading: 'Common Indian English mistakes in interviews',
        blocks: [
          {
            type: 'p',
            text: 'Many of these phrases are normal in Indian English, and any Indian interviewer will understand them. But if you are interviewing with a global company, a foreign client or an interviewer outside India, the standard forms sound more polished:',
          },
          {
            type: 'table',
            head: ['Instead of', 'Say', 'Why'],
            rows: [
              ['"I am having 3 years of experience."', '"I have 3 years of experience."', '"Have" meaning "own" is not used in the -ing form.'],
              ['"I passed out in 2025."', '"I graduated in 2025."', 'Outside India, "passed out" means fainted.'],
              ['"Myself Rahul."', '"I’m Rahul." or "My name is Rahul."', '"Myself" cannot be the subject of a sentence.'],
              ['"My good name is Rahul."', '"My name is Rahul."', '"Good name" is a translation from Hindi and sounds unusual to international listeners.'],
              ['"I have completed my B.Tech in 2025."', '"I completed my B.Tech in 2025."', 'With a specific past year, use the simple past.'],
              ['"I will revert back to you."', '"I’ll get back to you."', '"Revert" means to return to an earlier state, and "revert back" repeats itself.'],
              ['"Please do the needful."', 'Name the action: "Please send me the offer letter."', 'The phrase is unclear to people outside India.'],
            ],
          },
        ],
      },
      {
        heading: 'Speaking exercises to do before the interview',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Record and review',
                text: 'Record your answer on your phone, listen back once, and fix one thing at a time: a filler word, a grammar slip, or a sentence that runs too long.',
              },
              {
                title: 'The 60-second timer drill',
                text: 'Set a timer and deliver "tell me about yourself" in 60 to 90 seconds. If you finish too early, add one example. If you run over, cut until it fits.',
              },
              {
                title: 'Drill the words you will definitely say',
                text: 'Your job title, your tools (Kubernetes, PostgreSQL, Selenium), your college and the company name. Mispronouncing these is distracting, so practice them until they are automatic. Our [pronunciation guide](/guides/improve-english-pronunciation/) shows how.',
              },
              {
                title: 'Explain one project out loud',
                text: 'For technical rounds, practice explaining a project in plain English: what it does, your part in it, and one problem you solved. Interviewers judge how clearly you explain, not only what you built.',
              },
              {
                title: 'Run a mock interview with follow-up questions',
                text: 'Ask a friend, or use an AI interviewer, to ask questions in random order with follow-ups like "Why did you choose that approach?" Nothing else comes as close to the real pressure.',
              },
            ],
          },
        ],
      },
      {
        heading: 'A 5-day English mock interview plan',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Day 1: Draft your answers out loud',
                text: 'Don’t write scripts. Speak each answer freely three times, using the structures above; it will tighten naturally.',
              },
              {
                title: 'Day 2: Fix the language',
                text: 'Practice your answers with a feedback source and clean up recurring grammar mistakes and mispronounced words, especially the technical vocabulary you will definitely need.',
              },
              {
                title: 'Day 3: Run a full mock interview',
                text: 'Simulate the real thing from start to finish: unpredictable question order, follow-up questions, no pausing. This is where practicing with an AI interviewer helps most.',
              },
              {
                title: 'Day 4: Drill your weak spots',
                text: 'Re-run only the questions that went badly. Drill mispronounced words individually until they are automatic.',
              },
              {
                title: 'Day 5: Light rehearsal and rest',
                text: 'Do one relaxed run-through of "tell me about yourself" and your two hardest questions. Confidence on the day comes from knowing you have already had this conversation.',
              },
            ],
          },
          {
            type: 'p',
            text: 'Interview tomorrow? Spend one focused hour: say "tell me about yourself" five times with a timer, run one full mock interview, and drill the three words you stumble on most. Then rest.',
          },
        ],
      },
      {
        heading: 'Interview rounds in India: what changes in each',
        blocks: [
          {
            type: 'list',
            items: [
              'HR round: expect "tell me about yourself", strengths, relocation and salary. Clear, confident answers matter more than complex vocabulary.',
              'Technical round: you will explain code, logic or past projects in English. Think out loud in short sentences, and say when you need a moment.',
              'Group discussion, common in campus placements: speak early, build on other people’s points ("Adding to what Priya said…"), and offer a summary at the end if no one else does. Good points beat talking the most.',
              'Phone and video interviews: the interviewer cannot read your body language, so speak a little slower than usual, pause between points, and test your microphone before the call.',
              'Managerial or client round: expect situational questions such as "What would you do if a deadline was at risk?" Answer with the STAR structure.',
            ],
          },
        ],
      },
    ],
    vaani: {
      heading: 'How to run mock interviews with Vaani',
      intro:
        'Vaani’s Role Play mode and Work & Career topic let you rehearse interview English in a real back-and-forth voice conversation, with corrections after every answer and none of the embarrassment of practicing in front of a person.',
      steps: [
        'Open the Practice Hub, switch to Role Play, and choose an interview scenario, or pick the Work & Career topic for professional conversation practice.',
        'Answer the AI interviewer’s questions out loud using hold-to-speak, including unexpected follow-ups, just like a real interview.',
        'Review your accuracy score and instant corrections after each answer: grammar slips, mispronounced words, and stronger word choices.',
        'Drill the specific words that tripped you up. Say your key vocabulary (your job title, your skills) until the accuracy score shows they are clean.',
        'Repeat the scenario daily before your interview. Each run gets smoother, and you walk in having already practiced the conversation many times.',
      ],
      screenshot: {
        src: '/images/screenshots/vaani-ai-english-conversation-practice.jpg',
        alt: 'Practicing a spoken English conversation with Vaani’s AI teacher with voice replies and follow-up questions',
      },
    },
    faqs: [
      {
        question: 'How do I stop freezing when interviewing in English?',
        answer:
          'Freezing happens when you compose answers from scratch under pressure. Rehearse your core answers out loud until they are semi-automatic, keep a few phrases ready for when you blank, and simulate the interview several times before the real one. Familiarity, not more vocabulary, is what removes the freeze.',
      },
      {
        question: 'How long should my self-introduction be in an interview?',
        answer:
          'Aim for 60 to 90 seconds when spoken, which is roughly 120 to 180 words. Cover who you are now, one or two achievements that prove it, and why you want this role. Anything longer starts to lose the interviewer’s attention.',
      },
      {
        question: 'Do small grammar mistakes matter in a job interview?',
        answer:
          'Less than most candidates fear. Interviewers care about clarity and confidence far more than perfect grammar. Cleaning up repeated errors in practice is still worth it, not for the interviewer, but because knowing your English is solid removes a major source of nervousness.',
      },
      {
        question: 'How many days before an interview should I start practicing?',
        answer:
          'Five days of 15 to 20 minute daily sessions is a solid runway for the language side. If you have less time, prioritize speaking "tell me about yourself" out loud repeatedly and one full mock interview.',
      },
    ],
    related: ['speak-english-confidently-without-fear', 'improve-english-pronunciation', 'how-to-speak-english-fluently'],
  },

  {
    slug: 'self-introduction-in-english-for-interview',
    publishedAt: '2026-10-01',
    updatedAt: '2026-10-01',
    author: AUTHOR,
    keyword: 'self introduction in english for interview',
    metaTitle: 'Self Introduction in English for Interview (Samples) | Vaani',
    metaDescription:
      'How to introduce yourself in an interview in English: a 4-part structure, 10 sample self introductions for IT freshers and experienced candidates, and how to say it confidently.',
    title: 'Self Introduction in English for Interview: 10 Samples for IT Jobs and How to Say It',
    intro:
      'A good self introduction in an interview follows a simple formula: a polite greeting, who you are now, one thing you have done that proves it, and why you want this role. Keep it to 60 to 90 seconds when spoken. Below you will find the structure, 10 sample introductions for IT freshers and experienced candidates, the mistakes to avoid, and how to practice saying yours so it sounds natural rather than memorised.',
    sections: [
      {
        heading: 'The 4-part structure of a self introduction',
        blocks: [
          {
            type: 'p',
            text: 'Interviewers already have your resume. Your introduction is not a summary of it; it is a short, spoken story that tells them who you are and why you fit this job. Every strong introduction has the same four parts:',
          },
          {
            type: 'table',
            head: ['Part', 'What to say', 'Example line'],
            rows: [
              ['1. Who you are now', 'Your name and current status or role', '"I’m Rahul, a 2025 B.Tech Computer Science graduate."'],
              ['2. Proof', 'One project, internship or achievement', '"In my final year, I built a library management app with React and Node.js."'],
              ['3. Strengths', '2 or 3 skills that match the job description', '"I’m comfortable with Java, SQL and REST APIs."'],
              ['4. Why this role', 'Connect your goal to their job', '"That’s why this backend developer role interests me."'],
            ],
          },
          {
            type: 'p',
            text: 'Pick the strengths from the job description, not from everything you know. Three skills the interviewer is looking for beat ten that they are not.',
          },
        ],
      },
      {
        heading: 'How to start and end your self introduction',
        blocks: [
          {
            type: 'p',
            text: 'A clean opening and a clear ending make even a simple introduction sound confident. Use one of these to start:',
          },
          {
            type: 'list',
            items: [
              '"Good morning, and thank you for the opportunity. I’m Rahul…"',
              '"Thank you for having me today. My name is Sneha, and I’m a QA engineer…"',
              '"Hi, I’m Arjun. Thanks for taking the time to meet me."',
            ],
          },
          {
            type: 'p',
            text: 'And one of these to finish, so the interviewer knows you are done:',
          },
          {
            type: 'list',
            items: [
              '"…and that’s why I’m excited about this role."',
              '"…so I’m looking forward to learning more about the team."',
              '"I’d be happy to tell you more about my project if you’d like."',
            ],
          },
          {
            type: 'p',
            text: 'Avoid opening with "Myself Rahul" or "My good name is". Both are common in Indian English but sound unusual in interviews with global companies. Our [interview speaking practice guide](/guides/english-speaking-practice-for-job-interviews/) has a full table of these phrases and what to say instead.',
          },
        ],
      },
      {
        heading: 'Sample self introductions for freshers',
        blocks: [
          {
            type: 'p',
            text: 'As a fresher, your proof is your project, internship or a skill you can show. You do not need work experience to give a strong introduction; you need one concrete example.',
          },
          {
            type: 'example',
            label: 'Sample 1 · B.Tech CSE fresher with an internship',
            text: 'Good morning, and thank you for the opportunity. I’m Rahul, and I completed my B.Tech in Computer Science this year.\n\nDuring a two-month internship at a fintech startup, I wrote APIs for a payments dashboard using Spring Boot and fixed bugs reported by the QA team. In my final year, I also built a library management app with React and Node.js.\n\nI enjoy backend work most, especially designing APIs, and that’s why this software developer role interests me.',
          },
          {
            type: 'example',
            label: 'Sample 2 · BCA fresher',
            text: 'Hi, I’m Kavya. I completed my BCA this year, and I’m now applying for junior developer roles.\n\nFor my final-year project, I built a hostel complaint system in PHP and MySQL that students at my college used for a full semester. I also completed an online course in Python and solved over a hundred coding problems to strengthen my basics.\n\nI’m looking for a role where I can learn from an experienced team and grow as a developer, and your fresher training program is a big reason I applied.',
          },
          {
            type: 'example',
            label: 'Sample 3 · Fresher with projects, no internship',
            text: 'Thank you for having me. I’m Aditya, a 2025 B.Tech graduate in Information Technology.\n\nI didn’t get an internship, so I focused on building projects. My main one is an expense tracker app built with React Native and Firebase, which I published for my friends and family to use. Building it taught me how to take feedback from real users and fix what they found confusing.\n\nI’d like to start my career in mobile development, and this role matches exactly what I’ve been practicing on my own.',
          },
          {
            type: 'example',
            label: 'Sample 4 · ECE graduate moving into IT',
            text: 'Good afternoon. I’m Neha, and I graduated in Electronics and Communication Engineering this year.\n\nIn my third year, I realised I enjoyed the programming parts of my course more than the hardware, so I started learning Java and data structures on my own. Since then, I’ve completed a full-stack course and built a student attendance app as my main project.\n\nMy electronics background helps me understand how systems work end to end, and I’m excited to apply that in a software engineering role.',
          },
        ],
      },
      {
        heading: 'Sample self introductions for experienced candidates',
        blocks: [
          {
            type: 'p',
            text: 'With experience, lead with your current role and your strongest result. Use numbers where you can: they make your proof concrete and easy to remember.',
          },
          {
            type: 'example',
            label: 'Sample 5 · QA engineer, 3 years',
            text: 'Hi, I’m Sneha. I’m a QA engineer with three years of experience at an IT services company in Bengaluru, where I test web and mobile apps for a retail client.\n\nLast year, I moved our regression suite from manual testing to automated tests with Selenium and Java, which cut release testing from three days to one.\n\nI’m now looking for a role with more ownership of test automation, and your team’s focus on product quality is why I applied.',
          },
          {
            type: 'example',
            label: 'Sample 6 · Java developer, 5 years',
            text: 'Good morning. I’m Vikram, a backend developer with five years of experience, mostly in Java and Spring Boot.\n\nAt my current company, I lead a team of three on an order management system that handles around fifty thousand orders a day. Recently, I redesigned our slowest service, which brought response times down by about forty percent.\n\nI’ve worked on client projects my whole career, and I’d now like to build a product long term, which is what drew me to this role.',
          },
          {
            type: 'example',
            label: 'Sample 7 · Technical support to developer',
            text: 'Hi, I’m Imran. For the past two years, I’ve worked in technical support for a SaaS product, helping customers fix login and integration issues.\n\nWhile doing that, I started writing small Python scripts to automate our most repetitive support tasks, and my team now uses three of them every day. That’s when I decided to move into development, and I’ve since completed a course in Django.\n\nI understand the product from the customer’s side, and I’d like to use that in a junior developer role.',
          },
        ],
      },
      {
        heading: 'Short versions for specific situations',
        blocks: [
          {
            type: 'p',
            text: 'Prepare more than one length. Campus placements, group discussions and panel interviews often want something shorter, while some interviewers ask you to take your time.',
          },
          {
            type: 'example',
            label: 'Sample 8 · 30-second version (campus placement or group discussion)',
            text: 'Good morning, everyone. I’m Rahul, a final-year Computer Science student. I’ve built two web applications using React and Node.js, and I did a two-month internship in backend development. I’m interested in software development roles, and I’m happy to be here.',
          },
          {
            type: 'example',
            label: 'Sample 9 · Video or phone interview',
            text: 'Hi, thank you for having me. My name is Kavya, K-A-V-Y-A. I completed my BCA this year.\n\nI’d like to share two things about my background. First, my final-year project: a hostel complaint system that students used for a full semester. Second, I’ve been strengthening my Python skills through an online course.\n\nI’m applying for this role because I want to grow as a developer in a structured team.',
          },
          {
            type: 'p',
            text: 'On video and phone calls, the interviewer cannot see your body language, so signpost clearly ("I’d like to share two things"), spell your name if it is unusual, and speak a little slower than normal.',
          },
          {
            type: 'example',
            label: 'Sample 10 · 2-minute version (when asked to take your time)',
            text: 'Good morning, and thank you for the opportunity. I’m Vikram, a backend developer with five years of experience in Java and Spring Boot.\n\nI started my career at an IT services company, working on banking applications, where I learned to write code that has to be reliable and secure. Three years ago, I moved to my current company, where I now lead a team of three on an order management system that handles around fifty thousand orders a day.\n\nThe project I’m proudest of is redesigning our slowest service. I profiled it, found the database queries causing the delay, and rewrote them with caching. Response times dropped by about forty percent, and our support tickets about slow pages went down noticeably.\n\nOutside work, I mentor two junior developers, which has made me much better at explaining technical decisions clearly.\n\nI’ve spent my career on client projects, and I’d now like to build and improve one product long term. That’s exactly what this role offers, which is why I’m excited to be here.',
          },
        ],
      },
      {
        heading: 'Self introduction mistakes to avoid',
        blocks: [
          {
            type: 'table',
            head: ['Mistake', 'Do this instead'],
            rows: [
              ['Reading out your resume line by line', 'Pick one proof point; the interviewer already has your resume.'],
              ['Family details ("My father is a bank manager, and I have one sister")', 'Skip them in IT interviews unless you are asked.'],
              ['A long list of hobbies', 'Mention one only if it shows a skill relevant to the job.'],
              ['Speaking for more than 2 minutes', 'Time yourself and aim for 60 to 90 seconds.'],
              ['Reciting a memorised script in a flat voice', 'Memorise the structure, not the exact words.'],
              ['Ending with "That’s all" or trailing off', 'Finish with why you want this role.'],
            ],
          },
        ],
      },
      {
        heading: 'How to practice saying your self introduction',
        blocks: [
          {
            type: 'p',
            text: 'Most candidates prepare their introduction on paper and then say it for the first time in the interview. The words are fine; the delivery is what fails. Practice it the way you will use it: out loud.',
          },
          {
            type: 'steps',
            items: [
              {
                title: 'Write bullet points, not a script',
                text: 'Note one line for each of the four parts. Bullet points keep you on track without making you sound like you are reading.',
              },
              {
                title: 'Say it out loud five times, with a timer',
                text: 'Your first attempt will run long or stall. By the fifth, it will be tighter and closer to 60 to 90 seconds.',
              },
              {
                title: 'Slow down and pause',
                text: 'Nervous speakers rush. Pause after your name and between each part; pauses make you sound calm and give the interviewer time to absorb what you said.',
              },
              {
                title: 'Stress the words that matter',
                text: 'Your role, your project and your result are what the interviewer should remember. Say them slightly louder and slower than the words around them.',
              },
              {
                title: 'Drill the technical words you will say',
                text: 'React, PostgreSQL, Kubernetes, the company name: a mispronounced keyword distracts from a good answer. Our [pronunciation guide](/guides/improve-english-pronunciation/) shows how to fix individual words.',
              },
              {
                title: 'Record yourself and fix one thing per run',
                text: 'Listen back once. Pick a single thing to improve, such as a filler word or a rushed sentence, and do another take.',
              },
              {
                title: 'Practice all three lengths',
                text: 'Have a 30-second, a 60 to 90 second and a 2-minute version ready, so you can adapt to whatever the interviewer asks for. If nerves make your mind go blank, read our guide on [speaking English confidently without fear](/guides/speak-english-confidently-without-fear/).',
              },
            ],
          },
        ],
      },
    ],
    vaani: {
      heading: 'How to practice your self introduction with Vaani',
      intro:
        'Vaani’s Role Play mode lets you rehearse your introduction in a real voice conversation with an AI interviewer, then shows you exactly which words and sentences to fix.',
      steps: [
        'Open the Practice Hub, switch to Role Play, and choose a job interview scenario.',
        'When the AI interviewer asks you to introduce yourself, answer out loud using hold-to-speak.',
        'Check your accuracy score and the corrections for grammar, pronunciation and word choice.',
        'Drill the words that tripped you up, such as your job title, tools and college name, until the accuracy score shows they are clean.',
        'Run the scenario again and answer the follow-up questions, so your introduction leads smoothly into the rest of the interview.',
      ],
      screenshot: {
        src: '/images/screenshots/vaani-instant-grammar-feedback-accuracy.jpg',
        alt: 'Vaani app showing an accuracy score with instant feedback on a spoken English sentence and words to practice',
      },
    },
    faqs: [
      {
        question: 'How long should a self introduction be in an interview?',
        answer:
          'Aim for 60 to 90 seconds when spoken, which is roughly 120 to 180 words. Prepare a 30-second version for campus placements and group discussions, and a 2-minute version in case the interviewer asks you to take your time.',
      },
      {
        question: 'Should I mention my family and hobbies in my self introduction?',
        answer:
          'In IT interviews, usually not. Family details take time away from what the interviewer wants to know: your skills and why you fit the role. Mention a hobby only if it shows a relevant skill, such as contributing to open-source projects.',
      },
      {
        question: 'How should I start my self introduction?',
        answer:
          'Start with a short greeting and thank the interviewer, then say your name and current status: "Good morning, and thank you for the opportunity. I’m Rahul, a 2025 Computer Science graduate." Avoid starting with "Myself Rahul".',
      },
      {
        question: 'Is it okay to memorise my self introduction?',
        answer:
          'Memorise the structure and your key points, not every word. A word-for-word script tends to sound flat and falls apart if you lose your place. Practicing from bullet points several times out loud gives you the same confidence while still sounding natural.',
      },
    ],
    related: ['english-speaking-practice-for-job-interviews', 'speak-english-confidently-without-fear', 'improve-english-pronunciation'],
  },

  {
    slug: 'improve-english-pronunciation',
    publishedAt: '2026-07-07',
    updatedAt: '2026-07-07',
    author: AUTHOR,
    keyword: 'how to improve english pronunciation',
    metaTitle: 'How to Improve English Pronunciation: Daily Exercises | Vaani',
    metaDescription:
      'Improve your English pronunciation with a listen–imitate–feedback loop: shadowing, minimal pairs, word-level drills, and instant accuracy scoring.',
    title: 'How to Improve English Pronunciation: Exercises That Actually Work',
    intro:
      'The fastest way to improve English pronunciation is a tight loop of listen → imitate → get feedback → repeat. Hear the correct model of a word, say it, find out exactly how close you were, and drill the specific sounds you miss. Generic "listen to more English" advice fails because without feedback you can’t hear your own errors. Here are the exercises that work.',
    sections: [
      {
        heading: 'Why you can’t hear your own pronunciation mistakes',
        blocks: [
          {
            type: 'p',
            text: 'Your brain filters speech through the sound system of your native language. If your language doesn’t distinguish two English sounds — like "ship" and "sheep", or the two th-sounds — you literally hear them as the same, so you can’t self-correct. This is why feedback is not optional for pronunciation: something outside your own ear has to tell you when the sound you produced doesn’t match the target.',
          },
        ],
      },
      {
        heading: '6 pronunciation exercises that work',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Shadowing',
                text: 'Repeat sentences immediately after a native speaker, copying stress and melody, not just sounds. English is rhythm-based — getting the stress right often matters more for being understood than perfecting individual sounds.',
              },
              {
                title: 'Word-level drilling with a model',
                text: 'For each problem word: listen to the correct pronunciation, say it, compare, repeat. Doing this with instant accuracy feedback turns guesswork into measurable progress.',
              },
              {
                title: 'Minimal pairs',
                text: 'Practice word pairs that differ by one sound — ship/sheep, bat/bet, pray/play — to train your ear and mouth on the exact contrasts your native language lacks.',
              },
              {
                title: 'Learn basic IPA for your problem words',
                text: 'The phonetic spelling (like /ˈtrævəl/ for "travel") shows you the actual sounds, bypassing English’s misleading spelling. You only need the dozen symbols that appear in your problem words.',
              },
              {
                title: 'Slow down and exaggerate',
                text: 'Practicing a sound slowly and exaggerated builds the mouth positions correctly; speed comes back on its own. Mumbling through at full speed just rehearses the error.',
              },
              {
                title: 'Record and compare weekly',
                text: 'Record the same paragraph once a week. Progress you can hear is the best motivation to keep drilling.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Focus on being understood, not sounding native',
        blocks: [
          {
            type: 'p',
            text: 'A useful target is clear, confident English with your own accent — not a perfect American or British accent. Prioritize the errors that cause misunderstanding: word stress, key vowel contrasts, and consistently mispronounced everyday words. Fixing your twenty most-used problem words improves how you sound more than months of generic accent work.',
          },
        ],
      },
    ],
    vaani: {
      heading: 'How to drill pronunciation with Vaani',
      intro:
        'Vaani gives you the feedback loop that solo pronunciation practice lacks: it scores every spoken sentence, highlights the exact words you mispronounced, and turns them into personal drills.',
      steps: [
        'Have a normal voice conversation in any topic — Vaani listens to every sentence you speak.',
        'See your accuracy score instantly, with mispronounced words highlighted right in your sentence.',
        'Tap a highlighted word to open Practice mode: see its IPA (like /ˈtrævəl/), tap Listen to hear the correct model, then hold to speak and imitate it.',
        'Watch your per-word accuracy climb as you repeat — the score tells you precisely when you’ve got it.',
        'Your missed words collect in Words to Practice, so every session builds a personal drill list of exactly the sounds you need.',
      ],
      screenshot: {
        src: '/images/screenshots/vaani-english-pronunciation-practice.jpg',
        alt: 'Vaani pronunciation practice screen showing the word travel with IPA transcription, listen button and accuracy score',
      },
    },
    faqs: [
      {
        question: 'Can adults still improve their English pronunciation?',
        answer:
          'Yes. Adults rarely reach a perfectly native accent, but clarity — being effortlessly understood — is very trainable at any age with targeted drilling and feedback. Most learners hear a clear difference within a few weeks of daily word-level practice.',
      },
      {
        question: 'Do I need to learn the full IPA phonetic alphabet?',
        answer:
          'No. Learn the handful of symbols that appear in your problem words — usually the vowels. IPA is a tool for seeing sounds that English spelling hides, not a subject to master.',
      },
      {
        question: 'Why do people still ask me to repeat myself?',
        answer:
          'Usually it’s word stress rather than individual sounds — saying deVELopment as DEvelopment breaks recognition for listeners. Drill the stress pattern of your common words and comprehension problems drop sharply.',
      },
    ],
    related: ['how-to-speak-english-fluently', 'daily-english-speaking-practice', 'practice-english-speaking-with-ai'],
  },

  {
    slug: 'speak-english-confidently-without-fear',
    publishedAt: '2026-07-07',
    updatedAt: '2026-07-07',
    author: AUTHOR,
    keyword: 'how to speak english confidently',
    metaTitle: 'Speak English Confidently: Overcome Fear & Hesitation | Vaani',
    metaDescription:
      'Know English but hesitate to speak? Learn why the fear happens and a step-by-step method to overcome hesitation and speak English with confidence.',
    title: 'How to Speak English Confidently — and Overcome Fear and Hesitation',
    intro:
      'If you understand English but hesitate to speak it, your problem is not knowledge — it is confidence, and confidence is trainable. The fix is safe repetitions: speaking regularly in a judgment-free setting, making mistakes cheaply, and correcting them, until English stops feeling like a performance. Here is how to break the hesitation loop step by step.',
    sections: [
      {
        heading: 'Why you hesitate even though you know English',
        blocks: [
          {
            type: 'p',
            text: 'Hesitation is a loop: you fear making a mistake in front of people → you avoid speaking → you get no speaking practice → your spoken English stays shaky → which confirms the fear. Grammar study cannot break this loop, because the bottleneck was never grammar. Many learners also translate silently from their native language before speaking, which adds a delay that feels like — and gets judged as — not knowing English.',
          },
        ],
      },
      {
        heading: '7 steps to build English speaking confidence',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Start where mistakes are free',
                text: 'Confidence grows fastest where the cost of an error is zero. Practice out loud alone or with an AI coach first — no audience, no judgment — and save real-world conversations for when the basics feel automatic.',
              },
              {
                title: 'Lower the bar deliberately',
                text: 'Aim for "clear and simple", not "impressive". Short sentences you can say fluently build more confidence than long ones you stumble through.',
              },
              {
                title: 'Get corrections privately',
                text: 'Being corrected in front of others is what made speaking scary in the first place. Private, instant feedback fixes your errors without the social sting — so correction starts feeling like progress, not embarrassment.',
              },
              {
                title: 'Rehearse high-stakes moments in advance',
                text: 'Meetings, interviews, phone calls: practice the actual conversation out loud beforehand. Walking in with rehearsed openings removes the scariest part — the start.',
              },
              {
                title: 'Kill the translation habit',
                text: 'Practice thinking in English daily. When you speak directly from thought to English, the hesitation gap that reads as "nervousness" disappears.',
              },
              {
                title: 'Collect small wins on purpose',
                text: 'One smooth conversation, one question asked in a meeting, one accuracy score improving week over week — logged wins rewire your self-image from "bad at speaking" to "improving fast".',
              },
              {
                title: 'Expose yourself gradually',
                text: 'Once solo practice feels easy, add mild stakes: a coffee order, small talk with a colleague, a longer comment in a meeting. Each level makes the next one feel normal.',
              },
            ],
          },
        ],
      },
      {
        heading: 'How long until speaking feels comfortable?',
        blocks: [
          {
            type: 'p',
            text: 'With daily practice, most learners feel noticeably less hesitation in 4–6 weeks, and comfortable in most everyday situations within 3–6 months. The mechanism is simple: hesitation shrinks in direct proportion to the number of low-pressure conversations you have had. Every safe rep makes the next real conversation less scary.',
          },
        ],
      },
    ],
    vaani: {
      heading: 'How Vaani helps you speak without fear',
      intro:
        'Vaani was built for exactly this user — the person who understands English but feels nervous or stuck while speaking. It is a practice space where mistakes cost nothing and every session ends with visible progress.',
      steps: [
        'Practice with an AI coach that never judges, never laughs, and never gets impatient — the pressure that blocks you with people simply isn’t there.',
        'Speak in everyday topics from the Practice Hub (Daily Life, Travel, Food) so you rehearse the exact situations that currently make you nervous.',
        'Get corrections instantly and privately after each sentence — grammar, pronunciation, and better phrasing — and try again immediately.',
        'Watch your accuracy scores rise session over session: objective proof that you are improving, which is what real confidence is built on.',
        'Practice anytime, 24/7 — five judgment-free minutes before a meeting can settle your nerves and warm up your English.',
      ],
      screenshot: {
        src: '/images/screenshots/vaani-ai-english-conversation-practice.jpg',
        alt: 'A judgment-free English conversation practice session with Vaani’s AI English teacher',
      },
    },
    faqs: [
      {
        question: 'Why do I freeze when speaking English even though I understand it well?',
        answer:
          'Understanding and speaking are separate skills, and fear suppresses the weaker one. Freezing means you have far more passive practice (listening, reading) than active practice (speaking under mild pressure). Safe, regular speaking reps — not more study — are the cure.',
      },
      {
        question: 'How do I stop translating from my native language in my head?',
        answer:
          'Shrink your sentences until translation is unnecessary, and practice thinking in English during daily routines. In conversation practice, prioritize responding quickly with simple English over slowly with perfect English — speed of retrieval is the skill you are training.',
      },
      {
        question: 'Is it embarrassing to practice speaking with an AI?',
        answer:
          'It’s the opposite — the absence of embarrassment is the point. An AI coach gives you the conversation practice and corrections of a human partner with none of the social fear, which makes it the ideal first stage before real-world conversations.',
      },
    ],
    related: ['practice-english-speaking-at-home', 'english-speaking-practice-for-job-interviews', 'how-to-speak-english-fluently'],
  },

  {
    slug: 'english-conversation-practice-online',
    publishedAt: '2026-07-07',
    updatedAt: '2026-07-07',
    author: AUTHOR,
    keyword: 'english conversation practice online',
    metaTitle: 'English Conversation Practice Online: Start Today | Vaani',
    metaDescription:
      'Compare the best ways to practice English conversation online — tutors, language exchanges, and AI speaking apps — and start a real conversation in minutes.',
    title: 'English Conversation Practice Online: How to Start Today',
    intro:
      'You can practice English conversation online in three main ways: booking a tutor, finding a language-exchange partner, or talking with an AI conversation app. Each has trade-offs in cost, availability, and feedback quality — but only one of them lets you start a real spoken conversation in the next two minutes. Here is how they compare and how to get the most from your practice.',
    sections: [
      {
        heading: 'Your options for online conversation practice, compared',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Online tutors',
                text: 'Real human conversation and expert correction, but $10–40 per hour, requires booking ahead, and most learners ration it to once or twice a week — far below the daily frequency fluency needs.',
              },
              {
                title: 'Language exchange partners',
                text: 'Free and social, but half of every session is you helping them with your language, partners cancel often, and untrained partners rarely correct your mistakes — pleasant conversation, weak feedback.',
              },
              {
                title: 'AI conversation apps',
                text: 'Real voice conversations, available 24/7, no scheduling, no judgment, and instant correction of grammar and pronunciation on every sentence. The conversation partner is not human — which for nervous speakers is usually an advantage, not a drawback.',
              },
              {
                title: 'The practical answer: combine them',
                text: 'Use AI conversation for your daily reps and feedback, and add human conversation (a tutor session or exchange) once a week if you can. Daily volume from AI + occasional human variety is the strongest combination.',
              },
            ],
          },
        ],
      },
      {
        heading: 'What makes conversation practice actually effective',
        blocks: [
          {
            type: 'list',
            items: [
              'You speak at least half the time — listening to a tutor talk is not speaking practice.',
              'The topics match your real life: work, travel, daily situations — so the vocabulary transfers.',
              'You get specific corrections, not just "good job!" — otherwise errors fossilize.',
              'The conversation pushes you slightly: follow-up questions, new words, unexpected turns.',
              'It happens at conversation speed — pausing to look things up trains translation, not fluency.',
            ],
          },
        ],
      },
    ],
    vaani: {
      heading: 'Start practicing conversation online with Vaani',
      intro:
        'Vaani gives you unlimited online conversation practice with an AI English teacher that speaks, listens, asks follow-up questions, and corrects you — from your phone, starting right now.',
      steps: [
        'Download Vaani and open the Practice Hub — no booking, no partner matching, no waiting.',
        'Choose the conversation that matches your life: Travel, Work & Career, Food & Cooking, Movies & Entertainment, Health & Lifestyle, or Daily Life.',
        'Talk naturally using hold-to-speak. The AI responds like a real conversation partner and keeps the discussion flowing with questions.',
        'Get instant feedback on every sentence — accuracy score, grammar fixes, and better word suggestions — so each conversation makes you measurably better.',
        'Practice daily, free to start. Ten minutes a day of real conversation beats a weekly class.',
      ],
      screenshot: {
        src: '/images/screenshots/vaani-practice-hub-english-speaking-topics.jpg',
        alt: 'Choosing an online English conversation practice topic in the Vaani app Practice Hub',
      },
    },
    faqs: [
      {
        question: 'Is online English conversation practice as effective as in-person?',
        answer:
          'For building fluency, yes — what matters is minutes spent speaking and the quality of feedback, not the room you are in. Online practice usually wins in practice because it happens more often: no commute, no scheduling, available whenever you have ten free minutes.',
      },
      {
        question: 'Can I practice English conversation online for free?',
        answer:
          'Yes. Language exchanges are free but give weak feedback, and AI conversation apps like Vaani are free to start — you get real spoken conversations with instant corrections without paying tutor rates.',
      },
      {
        question: 'How often should I do conversation practice?',
        answer:
          'Daily short sessions beat weekly long ones. Ten to fifteen minutes of real conversation every day produces visible improvement within a month, because fluency is built on frequency of speaking, not total session length.',
      },
    ],
    related: ['practice-english-speaking-with-ai', 'daily-english-speaking-practice', 'practice-english-speaking-at-home'],
  },

  {
    slug: 'practice-english-speaking-with-ai',
    publishedAt: '2026-07-07',
    updatedAt: '2026-07-07',
    author: AUTHOR,
    keyword: 'practice english speaking with ai',
    metaTitle: 'Practice English Speaking with AI: Complete Guide | Vaani',
    metaDescription:
      'Does AI English speaking practice work? How AI conversation coaches compare to tutors, what to look for in an app, and how to get fluent faster with AI.',
    title: 'Practice English Speaking with AI: The Complete Guide',
    intro:
      'Practicing English speaking with AI works because it solves the three problems that stop most learners: no partner to practice with, fear of being judged, and no feedback on mistakes. A good AI speaking app gives you unlimited real voice conversations, corrects your grammar and pronunciation on every sentence, and is available whenever you are. Here is how to use AI practice well — and what to look for in an app.',
    sections: [
      {
        heading: 'Why AI conversation practice works',
        blocks: [
          {
            type: 'list',
            items: [
              'Unlimited repetitions: fluency needs daily speaking volume, and AI never runs out of patience or time.',
              'Zero judgment: the fear of embarrassment that blocks you with humans simply isn’t there — so you speak more, and more freely.',
              'Instant feedback on every sentence: AI catches and corrects mistakes in real time, while a human partner lets most of them slide.',
              'Always available: practice at 6am or midnight, five minutes or an hour, without coordinating anyone’s calendar.',
              'Infinitely patient scenario practice: rehearse the same job interview or travel conversation ten times — no human partner will do that with you.',
            ],
          },
        ],
      },
      {
        heading: 'What to look for in an AI English speaking app',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Voice-first, not chat-first',
                text: 'Typing to an AI improves your writing. To improve speaking, the app must make you speak out loud and must respond to your actual voice.',
              },
              {
                title: 'Real conversation, not scripted drills',
                text: 'Repeating fixed sentences is pronunciation exercise, not conversation practice. Look for an AI that holds a genuine back-and-forth with follow-up questions.',
              },
              {
                title: 'Specific, immediate feedback',
                text: 'The app should tell you what was wrong in your sentence — grammar, word choice, pronunciation — right after you say it, with a measurable score so you can track improvement.',
              },
              {
                title: 'Word-level pronunciation drilling',
                text: 'Conversation shows you which words you miss; the app should let you drill exactly those words with a native audio model and accuracy scoring.',
              },
              {
                title: 'Scenarios that match your life',
                text: 'Practicing topics you’ll actually talk about — work, travel, daily life — means the phrases you learn get used, and stick.',
              },
            ],
          },
        ],
      },
      {
        heading: 'AI coach vs human tutor: which should you use?',
        blocks: [
          {
            type: 'p',
            text: 'It’s the wrong either/or. A human tutor offers cultural nuance and accountability, but costs $10–40 per session and caps your practice at your budget. An AI coach gives you the daily volume and per-sentence feedback that actually builds fluency, at a fraction of the cost. The strongest setup for most learners: AI conversation every day, and if budget allows, a human session occasionally for variety. If you must pick one, pick the one you’ll use daily — that is almost always the AI, because it’s in your pocket and always on.',
          },
        ],
      },
    ],
    vaani: {
      heading: 'How AI speaking practice works in Vaani',
      intro:
        'Vaani is a voice-first AI English coach that checks every box above: real conversations, instant per-sentence feedback, and word-level pronunciation drills.',
      steps: [
        'Pick a topic or Role Play scenario in the Practice Hub and start talking — Vaani’s AI teacher opens the conversation and keeps it flowing naturally.',
        'Speak with hold-to-speak; the AI understands your voice, replies in context, and asks follow-up questions like a curious human partner.',
        'After each sentence you get an accuracy score plus instant corrections — grammar mistakes fixed, mispronounced words highlighted, better phrases suggested.',
        'Highlighted words go to Words to Practice, where you drill them with IPA, native audio, and per-word accuracy until they’re clean.',
        'Practice 24/7, free to start — beginner to advanced, the AI adapts to your level and keeps the conversation supportive and encouraging.',
      ],
      screenshot: {
        src: '/images/screenshots/vaani-instant-grammar-feedback-accuracy.jpg',
        alt: 'Vaani AI showing instant feedback with 93% accuracy on a spoken English sentence and a word practice list',
      },
    },
    faqs: [
      {
        question: 'Is practicing English with AI as good as with a human tutor?',
        answer:
          'For daily speaking volume and error correction, AI is often better — it’s available anytime, corrects every sentence, and costs far less. Humans still win on cultural nuance and accountability. Most effective learners use AI for daily practice and humans occasionally, if at all.',
      },
      {
        question: 'Will an AI app understand my accent?',
        answer:
          'Modern speech recognition is trained on a wide range of accents and handles non-native English well. In Vaani, the accuracy score also becomes a useful signal: when the app understands you effortlessly, real people will too.',
      },
      {
        question: 'Can beginners practice English speaking with AI?',
        answer:
          'Yes — AI practice is arguably best for beginners, because the fear of embarrassing yourself is removed entirely. Vaani adapts from beginner to advanced: conversations stay simple and encouraging until you’re ready for more.',
      },
    ],
    related: ['english-conversation-practice-online', 'practice-english-speaking-at-home', 'improve-english-pronunciation'],
  },

  {
    slug: 'daily-english-speaking-practice',
    publishedAt: '2026-07-07',
    updatedAt: '2026-07-07',
    author: AUTHOR,
    keyword: 'daily english speaking practice',
    metaTitle: 'Daily English Speaking Practice: 15-Minute Routine | Vaani',
    metaDescription:
      'A realistic 15-minute daily English speaking practice routine: warm-up, real conversation, and pronunciation drills — plus how to actually stay consistent.',
    title: 'Daily English Speaking Practice: A 15-Minute Routine That Sticks',
    intro:
      'The most effective daily English speaking practice is short, spoken, and structured: 2 minutes of warm-up self-talk, 10 minutes of real conversation, and 3 minutes drilling the words you got wrong. Fifteen minutes a day outperforms a two-hour weekly class because speaking fluency is built on frequency, not duration. Here is the routine, and how to make it a habit you keep.',
    sections: [
      {
        heading: 'Why daily beats intense',
        blocks: [
          {
            type: 'p',
            text: 'Speaking English draws on fast recall — words and structures surfacing in milliseconds. Recall strength decays between practice sessions, so seven short sessions a week keep your English "warm" while one long session lets it cool for six days in between. This is why learners who switch from a weekly class to daily 15-minute practice routinely feel more progress in a month than in the previous year.',
          },
        ],
      },
      {
        heading: 'The 15-minute daily routine',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Minutes 1–2: Warm up out loud',
                text: 'Say what you did today or plan to do, in English, out loud. This shifts your brain into English mode and costs nothing.',
              },
              {
                title: 'Minutes 3–12: One real conversation',
                text: 'Have an actual back-and-forth conversation — with an AI coach, a partner, or a tutor. Pick a topic tied to your life and aim to speak at least half the time. This block is where fluency is built; protect it.',
              },
              {
                title: 'Minutes 13–15: Drill your misses',
                text: 'Take the words or phrases you fumbled in the conversation and drill them: listen to the correct model, repeat until clean. Ending with focused correction converts today’s mistakes into tomorrow’s fluency.',
              },
              {
                title: 'Weekly bonus: One review session',
                text: 'Once a week, re-run your hardest recent scenario and compare how it feels. Visible progress is the fuel that keeps a daily habit alive.',
              },
            ],
          },
        ],
      },
      {
        heading: 'How to actually stay consistent',
        blocks: [
          {
            type: 'list',
            items: [
              'Anchor practice to an existing habit: right after morning coffee, or during the commute.',
              'Make it frictionless: practice from your phone, so "no partner / no time / not at my desk" can’t become excuses.',
              'Never miss twice: skipping one day is noise, skipping two starts a new habit of not practicing.',
              'Track something visible: accuracy scores or a streak — progress you can see is the strongest motivator to continue.',
              'Keep sessions short on bad days: a 5-minute conversation on a busy day preserves the habit; perfectionism kills it.',
            ],
          },
        ],
      },
    ],
    vaani: {
      heading: 'Run your daily routine in Vaani',
      intro:
        'Vaani is built for exactly this kind of daily practice: conversations start in seconds, feedback is instant, and your weak words are collected for you — the whole routine lives in one app.',
      steps: [
        'Open Vaani and start your 10-minute conversation immediately — pick a different Practice Hub topic each day (Daily Life Monday, Work & Career Tuesday, Travel Wednesday…) to keep vocabulary broad.',
        'Speak freely with hold-to-speak; the AI teacher keeps the conversation going, so your 10 minutes are pure speaking practice.',
        'Finish with Words to Practice: your mispronounced words from today’s session are already collected — drill each one with Listen and repeat until the accuracy score is green.',
        'Because Vaani is available 24/7, your routine survives busy days: five minutes at midnight still counts.',
        'Watch your accuracy trend upward across sessions — the visible progress that makes the habit self-sustaining.',
      ],
      screenshot: {
        src: '/images/screenshots/vaani-practice-hub-english-speaking-topics.jpg',
        alt: 'Vaani Practice Hub topics for daily English speaking practice across travel, work, food and everyday life',
      },
    },
    faqs: [
      {
        question: 'How many minutes of English speaking practice per day is enough?',
        answer:
          'Fifteen minutes of actual out-loud speaking daily is enough for visible progress within a month. More is better, but consistency matters most: 15 minutes every day beats 2 hours once a week.',
      },
      {
        question: 'When is the best time of day to practice speaking?',
        answer:
          'Whenever you’ll reliably do it — anchored to an existing habit like morning coffee or a commute. Morning practice has a small bonus: it warms up your English for the rest of the day’s real conversations.',
      },
      {
        question: 'What should I do if I miss a day of practice?',
        answer:
          'Nothing dramatic — just don’t miss the next one. The "never miss twice" rule protects the habit. On overloaded days, do a 5-minute mini-session instead of skipping; keeping the chain alive matters more than the session length.',
      },
    ],
    related: ['how-to-speak-english-fluently', 'practice-english-speaking-at-home', 'english-conversation-practice-online'],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Escapes guide text, then turns [anchor](url) into links. Only site-relative
// or http(s) URLs are linked; anything else stays as literal text.
export function renderInline(text: string): string {
  return escapeHtml(text).replace(
    /\[([^\]]+)\]\((\/[^)\s]*|https?:\/\/[^)\s]+)\)/g,
    (_, anchor, url) => {
      const external = url.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${url}"${external} class="text-accent-blue underline underline-offset-2 hover:text-text-primary transition-colors">${anchor}</a>`;
    },
  );
}
