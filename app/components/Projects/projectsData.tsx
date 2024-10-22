// app/components/Projects/projectsData.ts

// Define the structure of the project data
export interface Project {
    title: string;
    description: string;
    image: string;
  }
  
  // Array of projects
  export const projects: Project[] = [
    {
      title: 'E-Commerce Website for Decorative Plants',
      description:
        'This website allows users to browse and purchase decorative plants and rare species. It includes real-time inventory, product search, and a secure checkout process.',
      image: '/images/plants.png', // Path to the image in the public folder
    },
    {
      title: 'Hospital Management System',
      description:
        'A system designed to manage hospital operations, including patient registration, appointment scheduling, billing, and record management. It improves the hospital’s workflow efficiency and keeps data secure.',
      image: '/images/Medical.png', // Path to the image in the public folder
    },
  ];
  