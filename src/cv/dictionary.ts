export type Language = 'lt' | 'en'
// export type Dictionary = Record<string, Record<Language, string>>;

type DictionaryKeys =
  | 'profession'
  | 'rideshare'
  | 'rideshareInfo'
  | 'experience'
  | 'present'
  | 'websiteAdministrator'
  | 'softwareDeveloper'
  | 'juniorSoftwareDeveloper'
  | 'projects'
  | 'mmmInfo'
  | 'education'
  | 'bachelor'
  | 'bachelorInfo'
  | 'secondaryEducation'
  | 'courses'
  | 'languages'
  | 'Lithuanian'
  | 'English'
  | 'Russian'
  | 'native'
  | 'skills'
  | 'highExperience'
  | 'lowExperience'
  | 'driverLicenses'

const dictionary: Record<DictionaryKeys, Record<Language, string>> = {
  profession: {
    lt: 'Programuotojas',
    en: 'Software Developer',
  },
  rideshare: {
    lt: 'Pavežėjas',
    en: 'Rideshare driver',
  },
  rideshareInfo: {
    lt: 'Platformoje Bolt',
    en: 'At Bolt',
  },
  experience: {
    lt: 'Profesinė patirtis',
    en: 'Professional Experience',
  },
  present: {
    lt: 'dabar',
    en: 'current',
  },
  websiteAdministrator: {
    lt: 'Svetainės administratorius',
    en: 'Website Administrator',
  },
  softwareDeveloper: {
    lt: 'Programuotojas',
    en: 'Software Developer',
  },
  juniorSoftwareDeveloper: {
    lt: 'Jaunasis programuotojas',
    en: 'Junior Software Developer',
  },
  projects: {
    lt: 'Asmeniniai projektai',
    en: 'Personal Projects',
  },
  mmmInfo: {
    lt: 'Projektą vykdėme su 2 bendraklasiais, kol mokėmės mokykloje.',
    en: 'The project was done together with 2 classmates in high school.',
  },
  education: {
    lt: 'Išsilavinimas',
    en: 'Education',
  },
  bachelor: {
    lt: 'Programų sistemos (bakalauras)',
    en: 'Bachelor’s Degree in Software Systems (programų sistemos)',
  },
  bachelorInfo: {
    lt: 'Studijas sustabdęs, liko paskutinis pusmetis.',
    en: 'Studies temporarily suspended (only the last semester is left).',
  },
  secondaryEducation: {
    lt: 'Vidurinis išsilavinimas',
    en: 'Secondary Education',
  },
  courses: {
    lt: 'Kursai ir akademijos',
    en: 'Courses & Academies',
  },
  languages: {
    lt: 'Kalbos',
    en: 'Languages',
  },
  native: {
    lt: 'Gimtoji',
    en: 'Native',
  },
  Lithuanian: {
    lt: 'Lietuvių kalba',
    en: 'Lithuanian',
  },
  English: {
    lt: 'Anglų kalba',
    en: 'English',
  },
  Russian: {
    lt: 'Rusų kalba',
    en: 'Russian',
  },
  skills: {
    lt: 'Techniniai įgūdžiai',
    en: 'Skills',
  },
  highExperience: {
    lt: 'Didelė patirtis',
    en: 'Extensive experience',
  },
  lowExperience: {
    lt: 'Maža patirtis',
    en: 'Limited experience',
  },
  driverLicenses: {
    lt: 'Vairuotojo pažymėjimo kategorijos',
    en: `Driver’s License Classes`,
  },
}


export default dictionary