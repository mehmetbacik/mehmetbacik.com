export interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
  technology: string;
  logo: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  study: string;
  date: string;
  logo: string;
}

export interface TechnologyItem {
  name: string;
  icon: string;
}

export interface Projects {
  id: string;
  title: string;
  url: string;
  description: string;
  image: string;
  tags: string[];
}

export interface ProjectsData {
  [key: string]: Projects[];
}

export interface SocialMediaItem {
  platform: string;
  url: string;
  icon: string;
}

export interface SidebarItem {
  name: string;
  icon: string;
}
