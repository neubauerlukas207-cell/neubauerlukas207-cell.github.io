export interface SkillGroup {
  title: string
  items: string[]
}

export const skills: SkillGroup[] = [
  { title: 'Jazyky', items: ['Java', 'C#', 'Python', 'TypeScript', 'C / C++', 'PHP', 'SQL'] },
  { title: 'Backend', items: ['Spring Boot', 'ASP.NET Core', 'FastAPI', 'Symfony', 'REST API'] },
  { title: 'Frontend a mobil', items: ['React', 'HTML / CSS', 'Android', 'Windows Forms'] },
  { title: 'Data a AI', items: ['PostgreSQL', 'MySQL', 'scikit-learn', 'MATLAB'] },
  { title: 'Nástroje', items: ['Git', 'GitHub Actions', 'Docker', 'JUnit', 'xUnit', 'pytest'] },
]
