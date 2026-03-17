const QUESTIONS = [
  {
    id: 1,
    answer: "communism",
    aliases: ["socialism", "marxism"],
    category: "Politics",
    clues: [
      "X is a political and economic system in which the means of production are owned collectively rather than privately.",
      "X aims to eliminate class distinctions and promote equality, often calling for the abolition of private property.",
      "Various countries attempted to implement X throughout the 20th century — from the Soviet Union to Cuba to China."
    ],
    explanation: "Communism advocates for collective ownership and a classless society, most famously theorized by Karl Marx and Friedrich Engels in the 1848 Communist Manifesto."
  },
  {
    id: 2,
    answer: "generator",
    aliases: ["electric generator", "electrical generator"],
    category: "Science",
    clues: [
      "X is a device that converts mechanical energy into electrical energy.",
      "X operates on the principle of electromagnetic induction, discovered by Michael Faraday in 1831.",
      "Power plants around the world rely on X to supply electricity to cities and industries, whether driven by steam, water, or wind."
    ],
    explanation: "A generator works by moving a conductor through a magnetic field, inducing a flow of electrons — the basis for nearly all electricity generation on Earth."
  },
  {
    id: 3,
    answer: "treaty of versailles",
    aliases: ["versailles", "versailles treaty"],
    category: "History",
    clues: [
      "X is a treaty that formally ended the First World War.",
      "X imposed heavy reparations and significant territorial losses on Germany, stripping it of land, colonies, and military capacity.",
      "Many historians consider X a contributing factor to the rise of extremism in Europe and the outbreak of the Second World War."
    ],
    explanation: "Signed in 1919, the Treaty of Versailles forced Germany to accept full blame for WWI. Its harsh terms fueled resentment that Hitler later exploited to rise to power."
  },
  {
    id: 4,
    answer: "black hole",
    aliases: ["blackhole"],
    category: "Science",
    clues: [
      "X is a region in space where gravity is so extreme that nothing — not even light — can escape its pull.",
      "X forms when a massive star exhausts its fuel and collapses under its own gravity into an infinitely dense point.",
      "The first direct image of X was captured in 2019 by the Event Horizon Telescope, revealing a glowing ring of light around a dark void."
    ],
    explanation: "Black holes were predicted by Einstein's general relativity in 1916. The supermassive one at the center of galaxy M87, imaged in 2019, contains 6.5 billion times the mass of our Sun."
  },
  {
    id: 5,
    answer: "democracy",
    aliases: ["democratic system"],
    category: "Politics",
    clues: [
      "X is a system of government in which power is vested in the people, exercised directly or through elected representatives.",
      "X originated in ancient Athens around the 5th century BC, where male citizens gathered in public assemblies to vote on laws.",
      "Today, X is the most widely adopted form of governance worldwide, though its practice varies enormously between nations."
    ],
    explanation: "The word comes from the Greek demos (people) and kratos (power). Modern democracy developed through revolutions in America and France before spreading globally."
  },
  {
    id: 6,
    answer: "the internet",
    aliases: ["internet"],
    category: "Technology",
    clues: [
      "X is a global system of interconnected computer networks that use standardized protocols to link billions of devices worldwide.",
      "X evolved from ARPANET, a US military research project created in 1969 to allow computers to communicate across long distances.",
      "X has fundamentally transformed how humans communicate, trade, learn, and organize — arguably the most disruptive technology of the 20th century."
    ],
    explanation: "ARPANET sent its first message in 1969. The World Wide Web, invented by Tim Berners-Lee in 1989, turned the internet into the public platform we use today."
  },
  {
    id: 7,
    answer: "gravity",
    aliases: ["gravitation", "gravitational force"],
    category: "Science",
    clues: [
      "X is a fundamental force of nature that attracts all objects with mass toward one another.",
      "Isaac Newton formulated the first mathematical law of X in 1687, famously inspired — legend has it — by a falling apple.",
      "Einstein later redefined X not as a force but as the curvature of spacetime caused by mass, a description that predicted phenomena Newton's theory could not explain."
    ],
    explanation: "Gravity is the weakest of the four fundamental forces yet dominates at cosmic scales. Einstein's general relativity predicted gravitational waves, confirmed by LIGO in 2015."
  },
  {
    id: 8,
    answer: "dna",
    aliases: ["deoxyribonucleic acid"],
    category: "Biology",
    clues: [
      "X is a molecule found in the cells of all living organisms that carries the genetic instructions for development, function, and reproduction.",
      "X has a double-helix structure — two strands wound around each other — first described by Watson and Crick in 1953.",
      "Forensic scientists use X to identify individuals with near-perfect accuracy, and it has exonerated hundreds of wrongly convicted people."
    ],
    explanation: "DNA stands for deoxyribonucleic acid. Its sequence of four chemical bases — A, T, C, G — encodes the blueprint for every living thing on Earth."
  },
  {
    id: 9,
    answer: "renaissance",
    aliases: ["the renaissance"],
    category: "History",
    clues: [
      "X was a profound cultural and intellectual movement that began in 14th-century Italy and spread across Europe over the following two centuries.",
      "X marked a revival of interest in classical Greek and Roman art, philosophy, and literature, breaking from the dominant religious worldview of the medieval period.",
      "Leonardo da Vinci, Michelangelo, Raphael, and Botticelli are among the defining figures of X, producing works that remain pinnacles of human creativity."
    ],
    explanation: "The Renaissance (French for 'rebirth') began in Florence, funded by wealthy patrons like the Medici family. It laid the groundwork for the Scientific Revolution and modern Western thought."
  },
  {
    id: 10,
    answer: "photosynthesis",
    aliases: [],
    category: "Biology",
    clues: [
      "X is the process by which green plants and certain other organisms convert light energy into chemical energy stored as sugar.",
      "X takes place in chloroplasts using sunlight, water absorbed through roots, and carbon dioxide absorbed from the air.",
      "Without X, Earth's atmosphere would contain almost no oxygen, and the food chains that sustain virtually all complex life would not exist."
    ],
    explanation: "Photosynthesis produces roughly 100 billion tonnes of organic material each year. The oxygen we breathe is a byproduct of this process, which has been occurring for over 3 billion years."
  },
  {
    id: 11,
    answer: "the cold war",
    aliases: ["cold war"],
    category: "History",
    clues: [
      "X was a state of geopolitical tension between two superpowers that defined the second half of the 20th century.",
      "X was characterized by ideological rivalry, proxy wars, nuclear arms races, and a space race — but no direct military conflict between the two powers.",
      "X formally ended with the dissolution of the Soviet Union in 1991, leaving the United States as the world's sole superpower."
    ],
    explanation: "The Cold War pitted the US-led capitalist West against the Soviet-led communist East from 1947 to 1991. It shaped decolonization, spawned dozens of proxy conflicts, and defined a generation's fear of nuclear annihilation."
  },
  {
    id: 12,
    answer: "evolution",
    aliases: ["natural selection", "theory of evolution"],
    category: "Biology",
    clues: [
      "X is the process by which populations of organisms change over successive generations through inherited variation and differential survival.",
      "X explains both the extraordinary diversity of life on Earth and the common ancestry shared by all species — from bacteria to blue whales.",
      "Charles Darwin published his theory of X in 'On the Origin of Species' in 1859, one of the most consequential books in the history of science."
    ],
    explanation: "Evolution by natural selection states that organisms with traits better suited to their environment survive and reproduce more. Over millions of years, this produces new species."
  },
  {
    id: 13,
    answer: "the french revolution",
    aliases: ["french revolution"],
    category: "History",
    clues: [
      "X was a period of radical political and social upheaval that dismantled the French monarchy and aristocracy in the late 18th century.",
      "X was driven by Enlightenment ideals of liberty, equality, and fraternity — and by severe economic hardship and famine among ordinary people.",
      "X began with the storming of the Bastille prison on 14 July 1789 and unleashed forces — including the Reign of Terror — that reshaped Europe."
    ],
    explanation: "The French Revolution abolished feudalism, executed King Louis XVI, and declared the rights of citizens. Its ideals of popular sovereignty influenced revolutions worldwide for the next two centuries."
  },
  {
    id: 14,
    answer: "penicillin",
    aliases: [],
    category: "Science",
    clues: [
      "X is a naturally occurring antibiotic that kills or inhibits the growth of certain harmful bacteria.",
      "X was discovered by Alexander Fleming in 1928 when he noticed a mold contaminating his Petri dishes — and destroying the bacteria around it.",
      "X transformed modern medicine, making previously fatal infections like pneumonia and blood poisoning routinely treatable and saving hundreds of millions of lives."
    ],
    explanation: "Fleming's accidental discovery of penicillin led to the entire class of antibiotic medicines. Mass production began during WWII, dramatically reducing death rates from infected wounds."
  },
  {
    id: 15,
    answer: "printing press",
    aliases: ["the printing press", "gutenberg press"],
    category: "History",
    clues: [
      "X is a mechanical device for applying ink to paper in a precise, repeatable way, enabling mass production of text.",
      "Johannes Gutenberg invented X around 1440 in Mainz, Germany, dramatically reducing the cost and time required to produce books.",
      "X transformed European civilization by accelerating the spread of literacy, fueling the Protestant Reformation, and laying the groundwork for the Scientific Revolution."
    ],
    explanation: "Before the printing press, books were copied by hand — expensive, slow, and rare. Gutenberg's invention made books affordable, destabilizing the Catholic Church's monopoly on information within decades."
  },
  {
    id: 16,
    answer: "quantum mechanics",
    aliases: ["quantum physics", "quantum theory"],
    category: "Science",
    clues: [
      "X is a fundamental theory in physics describing the behavior of matter and energy at the smallest scales — atoms and subatomic particles.",
      "X reveals deeply counterintuitive phenomena: particles can exist in multiple states simultaneously, and the act of observation itself affects outcomes.",
      "Developed in the early 20th century by Bohr, Heisenberg, and Schrödinger, X underpins nearly all modern technology — semiconductors, lasers, and MRI scanners."
    ],
    explanation: "Quantum mechanics replaced classical physics at the atomic scale. Its famous puzzles — Schrödinger's cat, quantum entanglement, the uncertainty principle — continue to challenge our understanding of reality."
  },
  {
    id: 17,
    answer: "silk road",
    aliases: ["the silk road"],
    category: "History",
    clues: [
      "X was an ancient network of trade routes connecting East Asia with Central Asia, the Middle East, and Europe.",
      "X enabled the exchange not just of goods — silk, spices, porcelain, gold — but also of ideas, religions, technologies, and diseases across entire continents.",
      "X flourished under Mongol protection in the 13th century before being largely supplanted by European sea routes to Asia in the 15th century."
    ],
    explanation: "The Silk Road was never a single road but a web of overland and maritime routes spanning 4,000 miles. It spread Buddhism, Islam, and Christianity, and carried the Black Death to Europe in the 1340s."
  },
  {
    id: 18,
    answer: "vaccine",
    aliases: ["vaccination", "inoculation"],
    category: "Medicine",
    clues: [
      "X is a biological preparation that provides acquired immunity to a specific infectious disease without causing the disease itself.",
      "X works by introducing a weakened, inactivated, or partial form of a pathogen, training the immune system to recognize and fight it.",
      "Edward Jenner developed the first modern X in 1796 by using cowpox material to protect against the far more deadly smallpox."
    ],
    explanation: "Vaccines have eradicated smallpox, nearly eliminated polio, and prevented hundreds of millions of deaths. The word comes from 'vacca' (Latin for cow), a nod to Jenner's cowpox experiments."
  },
  {
    id: 19,
    answer: "black death",
    aliases: ["bubonic plague", "the plague", "the black death"],
    category: "History",
    clues: [
      "X was one of the deadliest pandemics in recorded human history, killing an estimated 30 to 60 percent of Europe's population within a few years.",
      "X was caused by the bacterium Yersinia pestis, primarily spread through the bites of fleas carried by rats on trade ships.",
      "X swept through Europe from 1347 to 1351, fundamentally reshaping its population, economy, religious faith, and social order."
    ],
    explanation: "The Black Death killed 25 million people in Europe alone. The labor shortage it caused empowered surviving peasants to demand better conditions, helping to end feudalism."
  },
  {
    id: 20,
    answer: "stoicism",
    aliases: ["stoic philosophy", "stoic"],
    category: "Philosophy",
    clues: [
      "X is an ancient philosophy that teaches virtue, self-control, and reason as the only true path to a good and tranquil life.",
      "X holds that we cannot control external events — wealth, health, reputation — only our own judgments and responses to them.",
      "Founded in Athens around 300 BC by Zeno of Citium, X was later embraced by Roman Emperor Marcus Aurelius, statesman Seneca, and former slave Epictetus."
    ],
    explanation: "Stoicism teaches the dichotomy of control: focus only on what you can influence, accept what you cannot. Its ideas have experienced a major revival in modern psychology and self-help culture."
  },
  {
    id: 21,
    answer: "capitalism",
    aliases: ["free market", "free market capitalism"],
    category: "Economics",
    clues: [
      "X is an economic system characterized by private ownership of the means of production and operation for profit in competitive markets.",
      "Under X, the price of goods and services is determined primarily by supply and demand, with limited government intervention.",
      "X became the dominant global economic system following the Industrial Revolution and accelerated further after the collapse of the Soviet Union."
    ],
    explanation: "Capitalism, as systematically described by Adam Smith in 'The Wealth of Nations' (1776), holds that self-interest and free markets produce collective prosperity through the 'invisible hand.'"
  },
  {
    id: 22,
    answer: "relativity",
    aliases: ["theory of relativity", "general relativity", "special relativity", "einsteins theory"],
    category: "Science",
    clues: [
      "X is a physical theory establishing that the laws of physics are identical for all observers moving at constant velocity relative to each other.",
      "X revealed that space and time are not fixed and absolute, but relative — and that they are woven together into a single four-dimensional fabric.",
      "Albert Einstein published X in 1905 (special) and 1915 (general), producing E=mc², which showed that mass and energy are equivalent and interconvertible."
    ],
    explanation: "Einstein's relativity overturned 200 years of Newtonian physics. GPS satellites must correct for relativistic effects — without those corrections, they would accumulate errors of kilometres per day."
  },
  {
    id: 23,
    answer: "feudalism",
    aliases: ["feudal system"],
    category: "History",
    clues: [
      "X was a hierarchical social and political system that structured medieval European society around land ownership and personal loyalty.",
      "Under X, a king granted land to lords, who in turn granted portions to knights, who in turn obligated peasants to work the land in exchange for protection.",
      "X gradually declined in Europe after the Black Death, the growth of trade economies, and the rise of centralized nation-states weakened the need for local military lords."
    ],
    explanation: "Feudalism dominated Europe from roughly the 9th to 15th centuries. It was not a formal legal system but an informal web of obligations and dependencies centered on land as the primary form of wealth."
  },
  {
    id: 24,
    answer: "nuclear fission",
    aliases: ["fission", "atomic fission"],
    category: "Science",
    clues: [
      "X is the process in which the nucleus of a heavy atom — typically uranium or plutonium — splits into smaller nuclei, releasing an enormous amount of energy.",
      "X can sustain a chain reaction: neutrons released from each split nucleus cause further splits in neighboring atoms, releasing exponentially more energy.",
      "X is the principle behind both nuclear power plants, which generate about 10 percent of the world's electricity, and atomic weapons."
    ],
    explanation: "Nuclear fission was first achieved in a lab in 1938 by Otto Hahn. The Manhattan Project weaponized it within seven years. A single kilogram of uranium fuel contains as much energy as 3,000 tonnes of coal."
  },
  {
    id: 25,
    answer: "inflation",
    aliases: ["economic inflation"],
    category: "Economics",
    clues: [
      "X is the sustained rise in the general price level of goods and services in an economy, which reduces the purchasing power of money over time.",
      "X can be triggered by excess money supply, rising production costs, or strong consumer demand outpacing the supply of goods.",
      "Central banks — such as the US Federal Reserve or the European Central Bank — primarily combat X by raising interest rates to slow borrowing and spending."
    ],
    explanation: "Moderate inflation of around 2% is considered healthy by most economists. Hyperinflation, as seen in Weimar Germany in 1923 or Zimbabwe in 2008, can destroy an economy within months."
  },
  {
    id: 26,
    answer: "telescope",
    aliases: ["the telescope"],
    category: "Science",
    clues: [
      "X is an optical instrument that uses lenses or mirrors to gather and focus light, making distant objects appear larger and clearer.",
      "Galileo Galilei was the first to systematically use X for astronomical observations in 1609, discovering Jupiter's moons and craters on the Moon.",
      "Modern versions of X — including the Hubble and James Webb space observatories — have revealed galaxies billions of light-years away and the composition of exoplanet atmospheres."
    ],
    explanation: "The telescope was invented around 1608 in the Netherlands. It transformed astronomy from a purely mathematical discipline into an observational science, and Galileo's findings directly challenged the geocentric model of the universe."
  },
  {
    id: 27,
    answer: "artificial intelligence",
    aliases: ["ai", "machine intelligence"],
    category: "Technology",
    clues: [
      "X is the development of computer systems capable of performing tasks that normally require human intelligence — such as reasoning, learning, and understanding language.",
      "X includes subfields like machine learning, where systems improve their performance by analyzing data, and neural networks, loosely modeled on the human brain.",
      "Recent breakthroughs in X — including large language models and image generators — have sparked global debate about automation, creativity, and the future of work."
    ],
    explanation: "Alan Turing first proposed testing machine intelligence in 1950. Decades of slow progress gave way to rapid acceleration after 2012 when deep learning dramatically improved performance on vision, language, and games."
  },
  {
    id: 28,
    answer: "climate change",
    aliases: ["global warming", "the climate crisis"],
    category: "Science",
    clues: [
      "X refers to long-term shifts in global temperatures and weather patterns that affect ecosystems, sea levels, and human societies.",
      "While X has occurred naturally throughout Earth's history, human activity since the Industrial Revolution — burning fossil fuels, deforestation — has accelerated it at an unprecedented rate.",
      "X is primarily driven by rising concentrations of greenhouse gases like carbon dioxide and methane in the atmosphere, which trap heat that would otherwise escape into space."
    ],
    explanation: "Earth has warmed approximately 1.1°C since pre-industrial times. Scientists warn that exceeding 1.5°C risks triggering irreversible tipping points — ice sheet collapse, coral reef die-off, and intensified extreme weather."
  },
  {
    id: 29,
    answer: "the olympics",
    aliases: ["olympics", "olympic games"],
    category: "Culture",
    clues: [
      "X is an international multi-sport event held every four years, uniting athletes from virtually every nation on Earth in peaceful competition.",
      "X originated in ancient Greece as a religious festival honouring Zeus, with records of athletic competitions at Olympia dating back to 776 BC.",
      "The modern X was revived in Athens in 1896 by French educator Pierre de Coubertin, who believed athletic competition could promote international peace and understanding."
    ],
    explanation: "The ancient Olympic Games were held for over a thousand years before being banned by Roman Emperor Theodosius I in 393 AD. The modern Games have been held every four years since 1896, with interruptions only for World Wars."
  },
  {
    id: 30,
    answer: "colonialism",
    aliases: ["colonization", "imperialism"],
    category: "History",
    clues: [
      "X is the practice by which a powerful nation establishes control over another territory, exploiting its land, resources, and people for the benefit of the colonizing power.",
      "X was typically justified through narratives of racial or cultural superiority and framed as a civilizing mission for the peoples being subjugated.",
      "European powers — led by Spain, Portugal, Britain, France, and the Netherlands — engaged in X from the 15th century onward, reshaping the political, economic, and cultural map of the world."
    ],
    explanation: "At its peak in the early 20th century, European empires controlled over 80% of the world's land surface. The legacies of X — including borders drawn without regard for peoples, extracted wealth, and imposed languages — continue to shape global inequality today."
  }
];
