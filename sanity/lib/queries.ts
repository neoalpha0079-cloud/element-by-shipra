export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  name,
  shortName,
  tagline,
  description,
  phone,
  email,
  address,
  heroStatement,
  heroSupport,
  brandStatement,
  workingHours,
  trustFootnote,
  socialLinks
}`;

export const navigationQuery = `*[_type == "navigation"][0]{
  items[]{label, href}
}`;

export const heroQuery = `*[_type == "hero"][0]{
  eyebrow,
  headline,
  scriptText,
  description,
  ctaText,
  image
}`;

export const servicesQuery = `*[_type == "service"] | order(number asc){
  number,
  title,
  mobileTitle,
  description,
  image
}`;

export const projectsQuery = `*[_type == "project"] | order(number asc){
  number,
  name,
  tagline,
  type,
  location,
  description,
  image,
  tags[]{label}
}`;

export const testimonialsQuery = `*[_type == "testimonial"]{
  quote,
  name,
  role,
  avatar,
  projectImage
}`;

export const testimonialStatsQuery = `*[_type == "testimonialStats"][0]{
  stats[]{value, label}
}`;

export const blogPostsQuery = `*[_type == "blogPost"]{
  title,
  category,
  readTime,
  image,
  slug
}`;

export const promisesQuery = `*[_type == "promise"] | order(number asc){
  number,
  title,
  mobileTitle,
  description,
  stat,
  statLabel
}`;

export const aboutSectionQuery = `*[_type == "aboutSection"][0]{
  eyebrow,
  title,
  founderBio,
  founderName,
  founderTitle,
  founderImage,
  stats[]{value, label},
  pillars[]{title, mobileTitle, description}
}`;

export const transformationQuery = `*[_type == "transformation"][0]{
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
  caption
}`;

export const turnkeyProcessQuery = `*[_type == "turnkeyProcess"][0]{
  steps[]{number, title, description},
  guarantees[]{title, description}
}`;

export const consultationQuery = `*[_type == "consultation"][0]{
  eyebrow,
  title,
  description,
  serviceOptions,
  budgetRanges
}`;
