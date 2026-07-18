export type Milestone = {
  seconds: number;
  label: string;
  description: string;
  category: "Coeur" | "Poumons" | "Cerveau" | "Corps" | "Sens" | "Sommeil";
};

const MIN = 60;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

// Paliers complets — arrêt joints tabac + shit (nicotine + THC)
export const MILESTONES: Milestone[] = [
  {
    seconds: 20 * MIN,
    label: "20 minutes",
    category: "Coeur",
    description:
      "Ton rythme cardiaque et ta tension artérielle redescendent déjà. Le corps respire mieux.",
  },
  {
    seconds: 1 * HOUR,
    label: "1 heure",
    category: "Corps",
    description:
      "Le taux de glucose dans le sang se stabilise. Le pic de nicotine commence à descendre.",
  },
  {
    seconds: 2 * HOUR,
    label: "2 heures",
    category: "Cerveau",
    description:
      "Les premières envies apparaissent mais la concentration reste stable. Tiens bon.",
  },
  {
    seconds: 4 * HOUR,
    label: "4 heures",
    category: "Corps",
    description:
      "Le métabolisme de l'insuline se normalise. La nicotine chute à 50 % dans le sang.",
  },
  {
    seconds: 8 * HOUR,
    label: "8 heures",
    category: "Poumons",
    description:
      "Le monoxyde de carbone des roulés est divisé par deux. L'oxygène circule mieux.",
  },
  {
    seconds: 12 * HOUR,
    label: "12 heures",
    category: "Poumons",
    description:
      "Le niveau de monoxyde de carbone dans le sang est quasiment normal. Les poumons se nettoient.",
  },
  {
    seconds: 24 * HOUR,
    label: "24 heures",
    category: "Corps",
    description:
      "La nicotine a quitté ton corps. Les poumons commencent à évacuer goudrons et résines en surface.",
  },
  {
    seconds: 36 * HOUR,
    label: "36 heures",
    category: "Cerveau",
    description:
      "Les récepteurs nicotiniques du cerveau commencent à se régénérer. Le vrai manque pointe son nez.",
  },
  {
    seconds: 48 * HOUR,
    label: "2 jours",
    category: "Sens",
    description:
      "Le goût et l'odorat reviennent en force. C'est le pic du manque — tiens bon, ça passe.",
  },
  {
    seconds: 72 * HOUR,
    label: "3 jours",
    category: "Poumons",
    description:
      "Les bronches se détendent, tu respires plus profond. Les rêves reviennent, souvent intenses (effet du THC qui quitte).",
  },
  {
    seconds: 5 * DAY,
    label: "5 jours",
    category: "Corps",
    description:
      "Les saignements des gencives et l'irritation buccale diminuent. La salivation se normalise.",
  },
  {
    seconds: 1 * WEEK,
    label: "1 semaine",
    category: "Sommeil",
    description:
      "Le sommeil se stabilise, l'anxiété de sevrage chute. Tu as franchi le plus dur.",
  },
  {
    seconds: 10 * DAY,
    label: "10 jours",
    category: "Poumons",
    description:
      "Toux de sevrage possible : c'est normal, les cils bronchiques reprennent leur travail d'évacuation.",
  },
  {
    seconds: 2 * WEEK,
    label: "2 semaines",
    category: "Coeur",
    description:
      "La circulation sanguine s'améliore nettement. Le brouillard mental se lève progressivement.",
  },
  {
    seconds: 3 * WEEK,
    label: "3 semaines",
    category: "Cerveau",
    description:
      "L'habitude physique est quasi brisée. Les pics de manque deviennent de simples pensées fugaces.",
  },
  {
    seconds: 1 * MONTH,
    label: "1 mois",
    category: "Poumons",
    description:
      "Capacité pulmonaire en hausse. Tu tousses moins, la peau est plus nette, l'énergie remonte.",
  },
  {
    seconds: 6 * WEEK,
    label: "6 semaines",
    category: "Sens",
    description:
      "L'acuité gustative et olfactive est presque complètement restaurée. Les repas sont un vrai plaisir.",
  },
  {
    seconds: 2 * MONTH,
    label: "2 mois",
    category: "Coeur",
    description:
      "Le risque d'infarctius commence à baisser. La respiration est plus fluide au quotidien.",
  },
  {
    seconds: 3 * MONTH,
    label: "3 mois",
    category: "Poumons",
    description:
      "Souffle +30 %. La mémoire de court terme et la motivation reviennent franchement.",
  },
  {
    seconds: 4 * MONTH,
    label: "4 mois",
    category: "Cerveau",
    description:
      "Les récepteurs cannabinoïdes CB1 se rééquilibrent. L'humeur naturelle, sans substances, redevient stable.",
  },
  {
    seconds: 5 * MONTH,
    label: "5 mois",
    category: "Poumons",
    description:
      "Toux chronique et expectorations de résine diminuent fortement. L'appétit se régule naturellement.",
  },
  {
    seconds: 6 * MONTH,
    label: "6 mois",
    category: "Cerveau",
    description:
      "Les récepteurs cannabinoïdes sont rééquilibrés. Le plaisir naturel — musique, rire, repos — redevient intense.",
  },
  {
    seconds: 8 * MONTH,
    label: "8 mois",
    category: "Poumons",
    description:
      "Les infections respiratoires (rhumes, bronchites) deviennent beaucoup moins fréquentes et moins graves.",
  },
  {
    seconds: 9 * MONTH,
    label: "9 mois",
    category: "Poumons",
    description:
      "Les cils des voies respiratoires sont régénérés. Le nettoyage naturel des poumons est de nouveau efficace.",
  },
  {
    seconds: 1 * YEAR,
    label: "1 an",
    category: "Coeur",
    description:
      "Risque de maladie cardiaque divisé par deux. L'anxiété de fond a largement redescendu.",
  },
  {
    seconds: 18 * MONTH,
    label: "1 an et demi",
    category: "Poumons",
    description:
      "La capacité pulmonaire est quasi normale. Tu peux monter des escaliers sans essoufflement.",
  },
  {
    seconds: 2 * YEAR,
    label: "2 ans",
    category: "Cerveau",
    description:
      "La matière grise impactée par le THC chronique récupère. La mémoire de travail est presque restaurée.",
  },
  {
    seconds: 3 * YEAR,
    label: "3 ans",
    category: "Coeur",
    description:
      "Le risque d'insuffisance cardiaque et de rétrécissement des vaisseaux sanguins est fortement réduit.",
  },
  {
    seconds: 4 * YEAR,
    label: "4 ans",
    category: "Corps",
    description:
      "Le taux de mortalité global lié au tabac diminue significativement. Le corps se reconstruit en profondeur.",
  },
  {
    seconds: 5 * YEAR,
    label: "5 ans",
    category: "Coeur",
    description:
      "Risque d'AVC au niveau d'un non-fumeur. Les fonctions cognitives sont pleinement restaurées.",
  },
  {
    seconds: 7 * YEAR,
    label: "7 ans",
    category: "Corps",
    description:
      "Risque de cancer de la vessie réduit de 50 %. Risque de cancer du pancréas en baisse nette.",
  },
  {
    seconds: 8 * YEAR,
    label: "8 ans",
    category: "Corps",
    description:
      "Risque de diabète de type 2 revenu au niveau d'un non-fumeur. Sensibilité à l'insuline restaurée.",
  },
  {
    seconds: 10 * YEAR,
    label: "10 ans",
    category: "Poumons",
    description:
      "Risque de cancer du poumon divisé par deux. Risque de cancer du larynx et de l'œsophage en chute libre.",
  },
  {
    seconds: 12 * YEAR,
    label: "12 ans",
    category: "Poumons",
    description:
      "Risque de BPCO (bronchopneumopathie chronique obstructive) et d'emphysème fortement réduit.",
  },
  {
    seconds: 15 * YEAR,
    label: "15 ans",
    category: "Coeur",
    description:
      "Risque cardiaque quasi identique à celui d'un non-fumeur. Ton corps a oublié le tabac.",
  },
  {
    seconds: 20 * YEAR,
    label: "20 ans",
    category: "Corps",
    description:
      "Risque de cancer buccal et de la gorge identique à un non-fumeur. Tu as tourné la page pour de bon.",
  },
  {
    seconds: 25 * YEAR,
    label: "25 ans",
    category: "Corps",
    description:
      "Risque de cancer du cerveau et de la moelle épinière au niveau d'un non-fumeur. C'est fini.",
  },
];

export function formatElapsed(totalSeconds: number) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const days = Math.floor(s / DAY);
  const hours = Math.floor((s % DAY) / HOUR);
  const minutes = Math.floor((s % HOUR) / MIN);
  const seconds = s % 60;
  return { days, hours, minutes, seconds };
}

export function formatDuration(seconds: number): string {
  if (seconds < HOUR) return `${Math.round(seconds / MIN)} min`;
  if (seconds < DAY) return `${Math.round(seconds / HOUR)} h`;
  if (seconds < MONTH) return `${Math.round(seconds / DAY)} j`;
  if (seconds < YEAR) return `${Math.round(seconds / MONTH)} mois`;
  return `${(seconds / YEAR).toFixed(seconds < 2 * YEAR ? 1 : 0)} ans`;
}
