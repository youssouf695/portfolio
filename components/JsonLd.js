export default function JsonLd() {
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Njupuen Youssoufa",
      "alternateName": "Youssoufa Njupuen",
      "url": "https://njupuen.vercel.app",
      "sameAs": [
        "https://github.com/youssouf695",
        "https://www.linkedin.com/in/youssoufa-njupuen-aa566b275",
        "https://wa.me/237695121070"
      ],
      "jobTitle": "Développeur Full-Stack & UI/UX Designer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ngaoundéré",
        "addressCountry": "Cameroun"
      },
      "knowsAbout": [
        "Next.js",
        "React",
        "Node.js", 
        "PostgreSQL",
        "TailwindCSS",
        "Figma",
        "Flutter",
        "UI/UX Design"
      ],
      "alumniOf": "IUT de Ngaoundéré",
      "image": "https://njupuen.vercel.app/images/avatar_profil.png",
      "description": "Développeur freelance passionné par la création d'applications web et mobiles modernes. Spécialisé en Next.js, React et design UI/UX."
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    );
  }