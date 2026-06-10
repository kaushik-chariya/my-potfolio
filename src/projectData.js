// src/projectData.js
export const projectsData = [

  {
    slug: "NeuroScan-AI",
    title: "NeuroScan AI — AI-Powered Brain Tumor Detection & Segmentation System",
    subtitle: "Production-grade brain tumor detection & segmentation system combining CNN, YOLOv8x, and U-Net into a 3-stage AI pipeline with automated PDF diagnostic reports — deployed live on AWS EC2.",
    tech: ["Python", "TensorFlow", "PyTorch", "YOLOv8", "U-Net", "Flask", "DVC", "OpenCV", "Docker", "AWS EC2", "AWS ECR", "GitHub Actions", "MLflow", "ReportLab", ],
    description: "Production-grade deep learning pipeline that detects, localizes, and segments brain tumors from MRI scans using CNN, YOLOv8x, and U-Net++ — with automated PDF diagnostic reports, deployed live on AWS EC2.",
    liveLink: "http://34.233.135.78:8000",
    githubLink: "https://github.com/kaushik-chariya/NeuroScan-AI",
    imageUrl: "/mainNeuro.png",
    heroImage: "/NeuroInside.png", 
    overview: "NeuroScan AI is a 3-stage deep learning pipeline built on Flask and deployed on AWS EC2 that analyzes brain MRI scans to detect, localize, and segment tumors. It runs a CNN classifier (91.17% accuracy, 95.97% AUC) for binary tumor detection, followed by YOLOv8x (mAP50: 91.9%) for bounding-box localization of 3 tumor sub-regions, and U-Net++ ResNet34 (Dice: 0.84, IoU: 0.73) for pixel-level segmentation — all trained on the BraTS 2021 dataset across T1ce, T2, and FLAIR modalities.",
    keyFeatures: [
      "**3-Stage AI Pipeline:** CNN → YOLOv8x → U-Net++ runs sequentially — classification first, then localization, then pixel-level segmentation — giving a complete tumor analysis in a single scan.",
      "**Automated PDF Reports:** Every scan generates a downloadable diagnostic report with patient info, confidence scores, YOLO bounding-box tables, U-Net Dice score, segmentation coverage %, and all 3 annotated MRI images.",
      "**DICOM Support:** Upload standard PNG/JPG or raw .dcm medical imaging files directly — making it compatible with real clinical workflows.",
      "**Patient Management & Scan History:** Full patient record system with linked scan history, searchable archive, and per-scan report downloads.",
      "**Demo Mode:** Built-in Normal and Tumor sample MRI scans for instant try-out — no upload needed.",
      "**MLOps Stack:** Model weights versioned with DVC + DagHub, experiments tracked with MLflow, containerized with Docker, deployed on AWS EC2 via GitHub Actions CI/CD."
    ],
    challenges: "The main challenge was orchestrating 3 completely different model architectures — TensorFlow CNN, PyTorch YOLOv8x, and segmentation-models-pytorch U-Net++ — into a single seamless inference pipeline without framework conflicts, while keeping response times fast enough for a web app.",
    solution: "I built a unified prediction pipeline that handles framework isolation, sequential model loading, and image preprocessing for each stage independently. DVC + DagHub manages model artifact versioning so the pipeline always pulls the correct model weights during deployment. Docker containerization ensures consistent environments across local and AWS EC2.",
    learnings: "This project taught me that building a multi-model pipeline is fundamentally a systems engineering problem, not just an ML problem. The real complexity is in the glue code — preprocessing, postprocessing, and passing outputs cleanly between stages. I also learned how much MLOps tooling (DVC, MLflow, GitHub Actions) reduces deployment friction once the system grows beyond a single model."
  },

  {
    slug: "Deep Shield Mail — AI-Powered Email Spam Detection⁠",
    title: "Deep Shield Mail — AI-Powered Email Spam Detection⁠",
    subtitle: "Production-grade MLOps system that detects spam & phishing emails in real-time using Naive Bayes + NLP — deployed on AWS with full CI/CD.",
    tech: ["Python", "Flask", "Scikit-learn", "Naive Bayes", "TF-IDF", "Gmail API", "MLflow", "DVC", "Docker", "AWS EC2", "AWS ECR"],
    description: "End-to-end email threat detection system integrating Gmail OAuth2, a custom NLP pipeline, and a production-deployed Naive Bayes model to classify spam, phishing, and fraud emails in real-time.",
    githubLink: "https://github.com/kaushik-chariya/Deep-Shield-Mail",
    liveLink: "https://deepshieldmail.duckdns.org",
    imageUrl: "/MainMail.png",
    heroImage: "/deeplshaild.png",
    overview: "Deep Shield Mail is a production-grade, end-to-end MLOps system that connects directly to your Gmail inbox via OAuth2 and classifies emails as SAFE or SPAM in real-time. It combines a Naive Bayes model (97.8% accuracy) with a hybrid feature pipeline — TF-IDF on email body (30,000 features) and 12 hand-crafted NLP meta-features — and is fully deployed on AWS EC2 behind Nginx with SSL, containerized via Docker, and tracked with MLflow and DVC.",
    keyFeatures: [
      "**Gmail OAuth2 Integration:** Securely connects to your live Gmail inbox with read-only permissions — no write access, no email storage after logout.",
      "**Hybrid NLP Pipeline:** Combines TF-IDF vectorization (30,000 features) with 12 hand-crafted meta-features like suspicious link detection, uppercase ratio, sender domain mismatch, and URL count for richer classification.",
      "**Real-Time Dashboard:** Visualizes Safe vs Spam stats with a live line chart and donut chart, plus per-email confidence scores and a full threat history log.",
      "**Full MLOps Pipeline:** Six-stage training pipeline (Ingestion → Validation → Transformation → Training → Evaluation → Pusher) orchestrated with DVC and tracked end-to-end with MLflow across 6 algorithms.",
      "**Production Deployment:** Dockerized Flask app served via Gunicorn, deployed on AWS EC2, pushed through AWS ECR, and proxied through Nginx with Let's Encrypt SSL."
    ],
    challenges: "The core ML challenge was choosing the right algorithm from six candidates while ensuring fast inference at request time. On the infrastructure side, wiring Gmail OAuth2 securely — keeping emails out of permanent storage while still powering a real-time dashboard — required careful session and scope management.",
    solution: "I ran all six algorithms (Naive Bayes, SVM, Logistic Regression, Random Forest, XGBoost, Decision Tree) on identical datasets with MLflow tracking every metric. Naive Bayes won on F1 score (97.7%), inference speed, and its natural confidence scores from probabilistic output — ideal for sparse TF-IDF vectors. For privacy, I implemented file-based sessions that wipe scan results on logout, and used Gmail's read-only OAuth scope so the app never touches send or delete permissions.",
    learnings: "This project taught me that production ML is 20% model and 80% everything else — feature engineering, schema validation, data versioning with DVC, containerization, and CI/CD. The 12 hand-crafted meta-features contributed significantly to accuracy, proving that domain knowledge in feature design often outperforms blindly throwing a bigger model at the problem."
  },
  {
    slug: "InsureAI MLOps — Vehicle Insurance Purchase Prediction",
    title: "MLOps pipeline predicting vehicle insurance purchase intent — deployed on AWS with CI/CD.",
    subtitle: "Production-ready end-to-end MLOps pipeline for vehicle insurance data — automated training, evaluation, and deployment using AWS, Docker, and GitHub Actions CI/CD.",
    tech: ["Python", "Scikit-learn", "PostgreSQL", "FastAPI", "Docker", "AWS EC2", "AWS ECR", "AWS S3", "GitHub Actions", "Pandas"],
    description: "End-to-end MLOps system that predicts vehicle insurance purchase intent from customer and vehicle data, with a six-stage automated pipeline and one-click AWS deployment.",
    githubLink: "https://github.com/kaushik-chariya/InsureAI-MLops",
    liveLink: "http://18.208.179.218:8000",
    imageUrl: "/insurance_main.png",
    heroImage: "/insureAI.png",
    overview: "InsureAI MLOps is a production-grade machine learning system built for vehicle insurance prediction. It implements a six-stage automated pipeline — from PostgreSQL data ingestion to model deployment on AWS EC2 — containerized with Docker and fully automated through GitHub Actions CI/CD. The live application supports both real-time prediction and on-demand model retraining via a web UI.",
    keyFeatures: [
      "**Six-Stage MLOps Pipeline:** Automated flow from Data Ingestion → Validation → Transformation → Training → Evaluation → Model Pusher, all orchestrated through a single training pipeline.",
      "**PostgreSQL Data Backend:** Raw vehicle data stored and fetched from a PostgreSQL database via SQLAlchemy, replacing manual CSV workflows with a proper data layer.",
      "**Smart Model Evaluation:** New models are only promoted to production if they exceed the current model's score by a defined threshold (0.02), preventing regressions.",
      "**AWS S3 Model Registry:** Best-performing model automatically pushed to S3 bucket for versioned storage and retrieval across environments.",
      "**Full CI/CD with GitHub Actions:** Every push to main triggers a Docker build, ECR push, and EC2 deployment via a self-hosted GitHub Actions runner — zero manual deployment steps."
    ],
    challenges: "The main challenge was wiring all six pipeline stages so they could run both independently during development and as a single automated flow in production. Managing credentials securely across PostgreSQL, AWS S3, ECR, and EC2 without hardcoding anything added another layer of complexity.",
    solution: "I used a constants → config_entity → artifact_entity → component pattern to keep each stage modular and independently testable. All secrets were stored as GitHub Actions repository secrets and injected at runtime, so no credentials ever touch the codebase. The self-hosted EC2 runner handles deployment automatically on every merge to main.",
    learnings: "This project solidified my understanding that MLOps is fundamentally a software engineering problem. Clean abstractions (entity classes, modular components), proper secret management, and a well-defined pipeline contract matter far more than the model itself. I also learned how fragile CI/CD pipelines can be without proper health checks — adding the /training endpoint for on-demand retraining saved hours of debugging."
  },

  // {
  //   slug: "ecommerce-sales-dashboard",
  //   title: "E-commerce Sales Dashboard",
  //   subtitle: "Interactive sales analytics dashboard with dynamic filtering and real-time chart visualizations powered by Flask and PostgreSQL.",
  //   tech: ["Python", "Flask", "PostgreSQL", "Pandas", "Matplotlib", "Seaborn", "Chart.js", "HTML", "CSS"],
  //   description: "A full-stack e-commerce analytics dashboard that lets users explore and filter sales data across regions, categories, and time periods — transforming raw transactional data into clear business insights through interactive charts and key performance metrics.",
  //   // liveLink: "#",
  //   githubLink: "https://github.com/kaushik-chariya/ecommerce-sales-analysis",
  //   imageUrl: "/sale_main.png",
  //   heroImage: "/sale_inside_hero.png", 
  //   overview: "E-commerce Sales Dashboard is a Flask-based analytics tool backed by PostgreSQL that lets users slice and explore sales data across regions, categories, segments, and time periods. It provides key business metrics — total sales, order volume, unique products — alongside interactive Chart.js visualizations that update instantly as filters change.",
  //   keyFeatures: [
  //     "**Multi-Dimensional Filtering:** Filter sales data by Region, Category, Sub-category, Segment, Ship Mode, State, and custom date ranges — all updating the dashboard instantly.",
  //     "**Key Business Metrics:** At-a-glance KPIs for Total Sales, Total Orders, and Unique Products, giving a quick snapshot of overall business health.",
  //     "**Interactive Charts:** Category-wise sales breakdown, region-wise performance comparison, and monthly sales trend charts — all rendered with Chart.js.",
  //     "**PostgreSQL Backend:** Sales data stored in a structured relational schema, queried dynamically via Pandas for flexible, filter-driven aggregations."
  //   ],
  //   challenges: "The main challenge was making all filters work together — applying multiple simultaneous filters (region + category + date range) while keeping queries efficient and the UI responsive.",
  //   solution: "I built a dynamic SQL query builder in Flask that composes WHERE clauses based on whichever filters are active, so only relevant data is fetched from PostgreSQL. Pandas handles the aggregation layer before passing results to Chart.js for rendering.",
  //   learnings: "This project taught me how much value a well-designed filter system adds to a dashboard. I also learned that the real work in analytics tools isn't the charts — it's the clean data pipeline and query logic that feeds them."
  // }

  ];