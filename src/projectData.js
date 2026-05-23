// src/projectData.js
export const projectsData = [
  {
    slug: "Deep Shield Mail — AI-Powered Email Spam Detection⁠",
    title: "Deep Shield Mail — AI-Powered Email Spam Detection⁠",
    subtitle: "Built with ML models to classify and filter spam emails, detecting phishing, fraud, and business email compromise.",
    tech: ["Python", "Flask", "Scikit-learn","Naive Bayes", "Gmail API", "MLflow", "Pandas", 'Numpy'],
    description: "Integrates vehicle detection, tracking, and license plate recognition to monitor traffic in real-time.",
    githubLink: "https://github.com/Shehnazzazwala/SwiftScan",
    imageUrl: "/public/email-fraud-investigation.webp",
    heroImage: "/public/email-fraud-investigation.webp",
    overview: "Swift Scan is an advanced AI/ML project designed for real-time traffic analysis. It uses the state-of-the-art YOLOv8 model for object detection, the SORT algorithm for tracking vehicles across frames, and EasyOCR for accurate license plate recognition from video feeds.",
    keyFeatures: [
      "**Real-Time Detection:** Utilizes the YOLOv8 object detection model for high-accuracy, real-time identification of vehicles.",
      "**Persistent Tracking:** Implements the SORT (Simple Online and Realtime Tracking) algorithm to maintain a unique ID for each vehicle as it moves through the frame.",
      "**License Plate Recognition:** Integrates EasyOCR to accurately extract license plate text from detected vehicles, even at various angles."
    ],
    challenges: "The primary challenge was maintaining a vehicle's tracking identity (ID) in dense traffic or during occlusions. Another hurdle was the poor accuracy of OCR in varied lighting.",
    solution: "I fine-tuned the SORT algorithm's parameters to handle occlusions better. For the OCR issue, I implemented an OpenCV pre-processing pipeline that would normalize brightness and increase contrast on the license plate region before sending it to EasyOCR, dramatically improving its accuracy.",
    learnings: "This project was a deep dive into practical computer vision. I learned how to pipeline different models together to create a cohesive system and discovered that a project's success often lies in clever pre-processing, not just the power of the AI model itself."
  },
  {
    slug: "recommendation-system-farmers",
    title: "Recommendation System for Farmers",
    subtitle: "A machine learning model to help farmers make data-driven decisions.",
    tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    description: "Engineered a model to provide crop recommendations to farmers based on regional environmental and soil conditions.",
    githubLink: "https://github.com/Shehnazzazwala/Recommendation-System-for-Farmers",
    imageUrl: "/project_recommendation.png",
    heroImage: "/project_recommendation.png",
    overview: "This project was developed to address the critical challenge farmers face in selecting the most suitable crops. By analyzing key agricultural parameters like soil pH, rainfall, and temperature, the system provides data-driven recommendations to maximize yield and improve agricultural efficiency.",
    keyFeatures: [
      "**Data-Driven Predictions:** Uses a Random Forest algorithm to predict the most suitable crop with high accuracy.",
      "**Feature Importance:** The model can identify which environmental factors are most critical for a given region, providing valuable insights.",
      "**Scalable Design:** Built to be easily retrained with new and updated agricultural data."
    ],
    challenges: "The initial dataset was incomplete and contained inconsistencies. A significant amount of time was dedicated to data cleaning and feature engineering using Pandas to create a reliable dataset for training.",
    solution: "I implemented a full data-cleaning pipeline to handle missing values and normalize the data. The final Random Forest model was chosen after comparing its performance against other classification algorithms.",
    learnings: "This project solidified my understanding of the entire machine learning workflow, from data cleaning and preprocessing to model training and evaluation. I learned how to use metrics like accuracy and confusion matrices to validate a model's performance."
  },
  {
    slug: "image-to-text-generator",
    title: "Image to Text Generator with TTS",
    subtitle: "An AI-powered system that generates descriptive captions for images and reads them aloud.",
    tech: ["Python", "Hugging Face", "Transformers", "OpenCV", "pyttsx3"],
    description: "An AI system using a BLIP model to generate accurate textual descriptions from images and voice them.",
    githubLink: "https://github.com/Shehnazzazwala/Image-to-Text-Generator-with-Text-to-Speech",
    imageUrl: "/project_imgtxt.png", // REMEMBER TO CREATE THIS IMAGE
    heroImage: "/hero_imgtxt.png", // REMEMBER TO CREATE THIS IMAGE
    overview: "This project combines the power of modern transformer models with computer vision to create an accessible tool for understanding images. It uses the BLIP model from Hugging Face to generate accurate captions and integrates the pyttsx3 library to provide a text-to-speech feature.",
    keyFeatures: [
      "**Accurate Image Captioning:** Leverages a state-of-the-art model from Hugging Face to generate contextually relevant descriptions.",
      "**Accessibility Feature:** The integrated text-to-speech functionality makes the tool usable for visually impaired users.",
      "**Image Pre-processing:** Uses OpenCV to prepare images for the model, ensuring optimal performance."
    ],
    challenges: "Integrating the large transformer model required careful dependency management. The initial text-to-speech output was very fast and robotic.",
    solution: "I solved the TTS issue by exploring the pyttsx3 library's documentation to adjust the rate and pitch, creating a more natural-sounding voice.",
    learnings: "I gained valuable experience working with pre-trained models from the Hugging Face ecosystem. This project also taught me to think about accessibility and how software can be designed to serve a wider audience."
  },
  {
    slug: "petrol-pump-management",
    title: "Petrol-Pump Management System",
    subtitle: "A secure and efficient database management system for a commercial petrol pump.",
    tech: ["DBMS", "PL/SQL", "MySQL"],
    description: "A secure database system to manage sales, purchases, and inventory with stored procedures and triggers.",
    githubLink: "https://github.com/Shehnazzazwala/Petrol-Pump-Management-System",
    imageUrl: "/project-dbms.png", // REMEMBER TO CREATE THIS IMAGE
    heroImage: "/hero-dbms.png", // REMEMBER TO CREATE THIS IMAGE
    overview: "This project involved designing and implementing a complete backend database system to manage sales, inventory, and purchases. The focus was on data integrity, security, and performance.",
    keyFeatures: [
      "**Secure Data Handling:** Implemented stored procedures and triggers to enforce business rules and maintain data integrity.",
      "**Access Control:** Used grant and revoke privileges to create a robust user access control system.",
      "**Efficient Inventory Management:** The database schema is designed to handle stock management efficiently, preventing discrepancies."
    ],
    challenges: "Designing a normalized database schema that was both efficient and scalable was a key challenge. I spent time iterating on the entity-relationship diagram to ensure all data was stored logically without redundancy.",
    solution: "The final schema was designed up to the Third Normal Form (3NF) to reduce data duplication and improve data integrity.",
    learnings: "This project provided a deep, practical understanding of relational database design, PL/SQL, and the importance of security in data management. It was a great exercise in thinking about system architecture and long-term data integrity."
  }, {
    slug: "disease-detection-analysis",
    title: "Disease Detection Analysis",
    subtitle: "An exploratory data analysis project to uncover insights from health-related data.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    description: "An exploratory data analysis (EDA) of health-related data to identify trends and patterns for disease detection.",
    githubLink: "https://github.com/Shehnazzazwala/Disease-Detection-Analysis",
    imageUrl: "/project-disease.png", // REMEMBER TO CREATE THIS IMAGE
    heroImage: "/hero-disease.png", // REMEMBER TO CREATE THIS IMAGE
    overview: "This project focuses on the critical initial phase of any data science task: Exploratory Data Analysis (EDA). Using a health-related dataset, I leveraged powerful Python libraries like Pandas for data manipulation and Matplotlib/Seaborn for creating insightful visualizations. The goal was not just to build a model, but to deeply understand the data's underlying structure, relationships, and potential predictive features.",
    keyFeatures: [
      "**Data Cleaning & Preparation:** Systematically handled missing values and inconsistencies within the dataset using Pandas.",
      "**Univariate & Bivariate Analysis:** Analyzed individual features to understand their distributions and explored relationships between pairs of variables.",
      "**Insightful Visualizations:** Created a variety of plots (histograms, heatmaps, scatter plots) with Matplotlib and Seaborn to effectively communicate findings.",
      "**Feature Correlation:** Used a correlation matrix to identify which health metrics were most strongly associated with the presence of disease."
    ],
    challenges: "The raw dataset was not immediately ready for analysis. The main challenge was interpreting the features and deciding on the best strategies for cleaning and visualization.",
    solution: "I solved this by methodically documenting each step of my EDA process, creating a clear narrative from raw data to actionable insights.",
    learnings: "This project was a foundational exercise in 'thinking like a data scientist.' I learned that before any modeling can occur, a thorough EDA is essential to form hypotheses and guide feature engineering. It significantly strengthened my skills in using Pandas for data wrangling and Seaborn for creating clear, compelling data stories through visualization."
  },

  {
    slug: "ecommerce-sales-dashboard",
    title: "E-commerce Sales Analytics Dashboard",
    subtitle: "An interactive analytics dashboard built with Flask and PostgreSQL for real-time sales insights.",
    tech: ["Python",
    "Flask",
    "PostgreSQL",
    "Pandas",
    "Chart.js",
    "HTML",
    "CSS"],
    description: "A dynamic e-commerce dashboard that allows users to analyze sales data using multiple filters and visualize business insights through interactive charts.",
    liveLink: "#",
    githubLink: "https://github.com/kaushik-chariya/ecommerce-sales-analysis",
    imageUrl: "../public/back-analysis.jpg",
    heroImage: "../public/main.jpg", // A GIF WOULD BE COOL HERE!
    overview: "This project is a full-stack data analytics dashboard designed to analyze e-commerce sales performance. It integrates a PostgreSQL database with a Flask backend and provides interactive visualizations using Chart.js. Users can filter data dynamically and gain insights into business trends such as regional performance, category sales, and monthly growth.",
    keyFeatures: [
      "**Advanced Filtering:** Filter data by region, category, sub-category, segment, ship mode, state, and date range.",
      "**Dashboard Metrics:** Displays total sales, total orders, and unique product counts for quick insights.",
      "**Interactive Visualizations:** Includes category-wise sales charts, regional analysis, and monthly trends using Chart.js.",
      "**Dynamic Updates:** Dashboard updates instantly based on user-selected filters for real-time analysis."
    ],
    challenges: "Handling dynamic filtering across multiple parameters while maintaining performance was challenging. Ensuring smooth interaction between Flask backend and frontend charts required careful data structuring.",
    solution: "I optimized database queries and used Pandas for efficient data processing. The backend sends structured JSON responses to the frontend, enabling seamless updates of charts without reloading the page.",
    learnings: "I learned how to build a complete data-driven web application by integrating backend, database, and frontend visualization. This project improved my skills in Flask development, SQL optimization, and data visualization using Chart.js."
  }
];