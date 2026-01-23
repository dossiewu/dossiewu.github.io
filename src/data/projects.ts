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
    title: "in vivo μ-Opioid Dynamics",
    subtitle: "Investigating receptor influences on opioid-driven behaviors.",
    // PLACEHOLDER: Replace with your actual video file name later, e.g., "/videos/calcium-imaging.mp4"
    heroImage: "/images/2p_sample.mp4", 
    cardImage: "/images/2p.jpg",
    tags: ["in vivo Calcium Imaging", "MATLAB", "Neural Data Analysis"],
    description: `
      <p>This project investigates the neural substrates of opioid use disorder, focusing on how <strong>μ-opioid receptors</strong> influence neural dynamics. Using high-throughput analysis pipelines, we process large-scale <em>in vivo</em> calcium imaging datasets to decode neural activity patterns.</p>
      <p>Key findings include identifying distinct neural ensembles in the brain that encode opioid-induced neural dynamics and behaviors.</p>
    `,
  },
  {
    id: "antipsychotic-drug-effects",
    title: "Antipsychotic Drug Effects",
    subtitle: "A comprehensive analysis of drug mechanisms in neural circuits.",
    heroImage: "/images/fiber_photometry_hero.jpg",
    cardImage: "/images/antipsychotic.jpg",
    tags: ["Pharmacology", "Fiber Photometry", "MATLAB", "Python"],
    description: `
      <p>A study detailing the effects of various antipsychotic drugs on neural circuit function and behavior. This research utilizes a combination of pharmacological approaches, multiplexed fiber photometry, and advanced data analysis techniques to understand the underlying mechanisms of action.</p>
    <p style="margin-top: 2rem;">
        <a href="https://github.com/dossiewu/photometry_analysis" target="_blank" class="github-btn">
          View Analysis Code on GitHub &rarr;
        </a>
      </p>
      `,
  },
{
    id: "thermosensory-circuits",
    title: "Neural Circuits of Thermosensory Behavior",
    subtitle: "Mapping the neural substrates underlying temperature-driven reproductive behaviors in Drosophila.",
    heroImage: "/images/fly_hero.jpg",
    cardImage: "/images/fly.jpg",
    tags: ["in vivo Calcium Imaging", "Drosophila", "Behavioral Analysis"],
    description: `
      <p>As a Master's student in the <strong>Gallio Lab</strong> at Northwestern, I explored how environmental cues, specifically temperature, influence complex reproductive behaviors. Using <em>Drosophila melanogaster</em> as a model system, I investigated the neural circuits that integrate thermal information to modulate decision-making.</p>
      
      <p>I employed <strong>immunohistochemistry</strong> to map neural connectivity and <strong><em>in vivo</em> 2-photon calcium imaging</strong> to visualize neuronal dynamics in response to temperature changes. This research contributed to a deeper understanding of how sensory processing guides fundamental survival behaviors.</p>
    `,
  },
    {
    id: "cancer-immunotherapy",
    title: "Microparticle-Based Cancer Immunotherapy",
    subtitle: "Engineering polymeric delivery systems to enhance immune responses against solid tumors.",
    heroImage: "/images/microparticle_hero.jpg",
    cardImage: "/images/microparticle.jpg",
    tags: ["Immunotherapy", "Bioengineering", "Flow Cytometry"],
    description: `
      <p>During my time as a Visiting Student at the <strong>Langer Lab (MIT)</strong>, I investigated novel drug delivery systems for cancer immunotherapy. The project focused on developing and characterizing polymeric microparticles designed to deliver immunostimulatory agents directly to the tumor microenvironment.</p>
      
      <p>My work involved validating these systems in <em>in vivo</em> mouse models, including tumor implantation and monitoring. I utilized <strong>flow cytometry</strong> to profile immune cell populations within the tumor, assessing the efficacy of the microparticle-based treatment in activating the host immune system.</p>
    `,
  },
  // Add more projects here by copying the block above!
];