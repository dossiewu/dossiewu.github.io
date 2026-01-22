// src/data/projects.ts

export interface Project {
  id: string;      // The URL part (e.g., "opioid-dynamics")
  title: string;   // The title on the card
  subtitle: string; // A short description for the detail page
  heroImage: string; // The main big image/video on the detail page
  cardImage: string; // The smaller image for the grid tile
  description: string; // The full text for the detail page
  tags: string[];    // Skills used
}

export const projects: Project[] = [
  {
    id: "striatal-opioid-dynamics",
    title: "Striatal μ-Opioid Dynamics",
    subtitle: "Investigating receptor influences on opioid-driven behaviors.",
    // PLACEHOLDER: Replace with your actual video file name later, e.g., "/videos/calcium-imaging.mp4"
    heroImage: "/images/placeholder-hero-1.jpg", 
    cardImage: "/images/placeholder-card-1.jpg",
    tags: ["in vivo Calcium Imaging", "MATLAB", "Neural Data Analysis"],
    description: `
      <p>This project investigates the neural substrates of opioid use disorder, focusing on how <strong>μ-opioid receptors</strong> influence striatal dynamics. Using high-throughput analysis pipelines, we process large-scale <em>in vivo</em> calcium imaging datasets to decode neural activity patterns.</p>
      <p>Key findings include identifying distinct neural ensembles in the dorsal striatum that encode opioid-induced neural dynamics and behaviors.</p>
    `,
  },
  {
    id: "antipsychotic-drug-effects",
    title: "Antipsychotic Drug Effects",
    subtitle: "A comprehensive analysis of drug mechanisms in neural circuits.",
    heroImage: "/images/placeholder-hero-2.jpg",
    cardImage: "/images/placeholder-card-2.jpg",
    tags: ["Pharmacology", "Fiber Photometry", "MATLAB", "Python"],
    description: `
      <p>A study detailing the effects of various antipsychotic drugs on neural circuit function and behavior. This research utilizes a combination of pharmacological approaches and advanced data analysis techniques to understand the underlying mechanisms of action.</p>
    <p style="margin-top: 2rem;">
        <a href="https://github.com/dossiewu/photometry_analysis" target="_blank" class="github-btn">
          View Analysis Code on GitHub &rarr;
        </a>
      </p>
      `,
  },
  // Add more projects here by copying the block above!
];