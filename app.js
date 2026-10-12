const resume = {
  name: "Jaya Krishna Surampudi",
  title: "Senior Data Engineer",
  experience: "3+ years",
  location: "Hyderabad, Telangana",
  strengths: ["Python", "SQL", "PySpark", "Apache Spark", "Azure Databricks", "Snowflake", "AWS Glue", "Amazon S3", "AWS Lambda", "Apache Airflow", "dbt", "Delta Lake", "Unity Catalog", "ETL/ELT", "Data modeling", "CI/CD"],
  profile: "Data engineer and module lead who has modernized data platforms across Databricks, Snowflake and AWS, with experience in incremental processing, orchestration, governance, lineage and production support."
};

const jobs = [
  {
    id: "amazon-dsp",
    company: "Amazon",
    sector: "Technology",
    companyType: "Large technology GCC",
    title: "Data Engineer II, DSP Analytics",
    location: "Hyderabad, Telangana",
    mode: "On-site / Hyderabad",
    experience: "3+ years",
    fit: 92,
    status: "apply",
    statusLabel: "Apply now",
    confidence: "Official role page checked",
    source: "Amazon Jobs",
    link: "https://www.amazon.jobs/en/jobs/10551530/data-engineer-ii-dsp-analytics",
    companyLink: "https://www.amazon.jobs/en/locations/hyderabad",
    summary: "Build real-time and batch data pipelines for Amazon's Delivery Service Partner analytics organization, including data infrastructure for GenAI applications.",
    responsibilities: ["Design and build large-scale data pipelines and ETL using AWS technologies.", "Work with Data Scientists, Economists and Analysts on scalable analytical platforms.", "Improve data reliability, governance, auditability and operational excellence."],
    requirements: ["3+ years of data engineering experience", "Data modeling, warehousing and ETL pipelines", "Python or another modern programming language", "2+ years analyzing data with Redshift, Oracle or NoSQL"],
    matches: ["Python", "SQL / data modeling", "AWS + S3", "ETL / batch pipelines", "GenAI usage", "Production troubleshooting"],
    gaps: ["Redshift depth should be explicit", "GenAI project evidence should be ready"],
    interview: "Expect a strong SQL + Python screen, data modeling, ETL design and behavioral ownership questions. Be ready to explain the 60%+ compute reduction from your Databricks MERGE design and your 99.5% Airflow reliability work.",
    sourceNote: "Verified from the official employer page; the page shows an Apply now action and explicitly lists 3+ years."
  },
  {
    id: "doordash-data",
    company: "DoorDash",
    sector: "Technology",
    companyType: "Product and engineering GCC",
    title: "Software Engineer, Data Engineer II",
    location: "Hyderabad, India",
    mode: "Engineering hub / hybrid likely",
    experience: "3+ years",
    fit: 90,
    status: "apply",
    statusLabel: "Apply now",
    confidence: "Official role page checked",
    source: "DoorDash Careers",
    link: "https://careersatdoordash.com/jobs/software-engineer-data-engineer-ii/6281695",
    companyLink: "https://careersatdoordash.com/jobs/",
    summary: "Own critical data systems, high-volume pipelines, data reliability and the data lake / data warehouse ecosystem that supports DoorDash products.",
    responsibilities: ["Design and implement high-volume data models and pipelines for lake and warehouse environments.", "Improve ingestion, processing, ETL and reporting reliability.", "Own data products and collaborate with technical and non-technical teams."],
    requirements: ["3+ years in data platform or data engineering", "Python, Kotlin or Scala", "Airflow or equivalent orchestration", "SQL, distributed computing and data reliability", "Spark / Presto and streaming technologies"],
    matches: ["Python", "Airflow", "Spark / PySpark", "SQL + warehousing", "Data reliability", "Data platform ownership"],
    gaps: ["Kafka / streaming should be positioned carefully", "Kotlin or Scala is not shown in resume"],
    interview: "Expect data structures or coding basics, SQL, Spark execution concepts, Airflow design and a system design discussion around reliable high-volume ingestion.",
    sourceNote: "Verified from the official DoorDash Careers role page; the description explicitly lists 3+ years and Hyderabad."
  },
  {
    id: "synchrony-l9",
    company: "Synchrony",
    sector: "BFSI",
    companyType: "Financial services GCC",
    title: "Data Engineer (L09)",
    location: "Hyderabad, India",
    mode: "Hub / flexible choice",
    experience: "3+ years Ab Initio",
    fit: 76,
    status: "apply",
    statusLabel: "Apply now · stack check",
    confidence: "Official role page checked",
    source: "Synchrony Careers",
    link: "https://www.synchronycareers.com/job/hyderabad/data-engineer-l09/49398/101722826464",
    companyLink: "https://www.synchronycareers.com/category/technology-jobs/49398/9381552/1",
    summary: "Build and maintain enterprise data lake and warehouse pipelines in Synchrony's Credit Technology organization using Ab Initio, SQL and AWS-connected systems.",
    responsibilities: ["Develop ETL pipelines and execute unit, SIT and UAT testing.", "Profile data, define quality rules and document data lineage.", "Work with product, program and data teams in a scaled Agile setup."],
    requirements: ["3+ years building and maintaining Ab Initio pipelines", "Shell scripting and complex SQL", "AWS and a database such as Oracle", "Scheduling tools and CI/CD familiarity"],
    matches: ["SQL", "AWS / S3 / Redshift exposure", "Data quality", "Lineage and governance", "CI/CD and Agile"],
    gaps: ["Ab Initio is a mandatory stack signal", "Shell scripting needs to be visible if used"],
    interview: "The main risk is the Ab Initio requirement. Apply if you have transferable ETL experience, but lead with your schema-driven ingestion and data-quality frameworks rather than presenting yourself as an Ab Initio specialist.",
    sourceNote: "Verified from the official employer page; posted 8 Oct 2026 and explicitly requires minimum 3 years of Ab Initio experience."
  },
  {
    id: "bms-transparency",
    company: "Bristol Myers Squibb",
    sector: "Healthcare & Pharma",
    companyType: "Pharma and life sciences GCC",
    title: "Data Engineer I · Transparency Data Operations",
    location: "Hyderabad, Telangana",
    mode: "Hyderabad",
    experience: "1–4 years",
    fit: 84,
    status: "lead",
    statusLabel: "Career page",
    confidence: "Official career hub",
    source: "BMS India Careers",
    link: "https://careers.bms.com/in/",
    companyLink: "https://careers.bms.com/in/",
    summary: "An early-career data engineering role supporting transparency data operations at BMS. The listing is aligned to 1–4 years and Hyderabad.",
    responsibilities: ["Support data operations, quality and reporting workflows for a regulated life-sciences organization.", "Work with data stakeholders to maintain reliable, traceable datasets.", "Translate business requirements into repeatable data processes."],
    requirements: ["1–4 years of experience", "Data engineering and automation fundamentals", "Strong SQL / data-quality mindset", "Ability to work in a regulated, cross-functional environment"],
    matches: ["3+ years overall", "SQL + Python", "Data validation", "Lineage / governance", "Cross-functional delivery"],
    gaps: ["Confirm the exact technology stack on the live form", "Healthcare / transparency domain experience may be preferred"],
    interview: "Prepare examples of data-quality checks, lineage, production troubleshooting and how you handle ambiguous requirements with business stakeholders.",
    sourceNote: "The role was discovered in a public Hyderabad listing, but the application link points to the live official BMS India careers hub so you are not sent to a broken job-board page."
  },
  {
    id: "invesco-data",
    company: "Invesco",
    sector: "BFSI",
    companyType: "Investment management GCC",
    title: "Advanced Engineer I · Data & Analytics",
    location: "Hyderabad, India",
    mode: "Hyderabad",
    experience: "3–5 years",
    fit: 87,
    status: "lead",
    statusLabel: "Career page",
    confidence: "Official career hub",
    source: "Invesco India Careers",
    link: "https://careers.invesco.com/india/",
    companyLink: "https://careers.invesco.com/india/",
    summary: "Data and analytics engineering opportunity in Invesco's Hyderabad investment technology organization, aligned to the candidate's 3–5 year band.",
    responsibilities: ["Contribute to data engineering, governance and analytics capabilities.", "Partner with technology and business teams to shape trusted data products.", "Support quality, metadata and repeatable delivery practices."],
    requirements: ["3–5 years in data governance, data management, data quality or data engineering", "Foundational analytics and data platform knowledge", "Strong communication and problem solving"],
    matches: ["Data governance", "Data quality and lineage", "Python + SQL", "Snowflake / Databricks", "Stakeholder workshops"],
    gaps: ["Confirm whether the role is pipeline-heavy or governance-heavy", "Investment domain knowledge may help"],
    interview: "Frame your Unity Catalog work, schema governance, lineage and platform enablement workshops as business-facing data product ownership.",
    sourceNote: "The role was discovered in public job search with a 3–5 year range, and the application link points to the live official Invesco India careers portal."
  },
  {
    id: "fedex-data",
    company: "FedEx",
    sector: "Engineering & Industrial",
    companyType: "Logistics technology GCC",
    title: "Data Engineer I",
    location: "Hyderabad, India",
    mode: "Hyderabad",
    experience: "1–3 years",
    fit: 86,
    status: "lead",
    statusLabel: "Career page",
    confidence: "Official career hub",
    source: "FedEx Careers",
    link: "https://careers.fedex.com/",
    companyLink: "https://careers.fedex.com/",
    summary: "A junior-to-mid data engineering opening in FedEx's Hyderabad organization focused on data pipelines, quality and accessibility.",
    responsibilities: ["Design and implement pipelines to collect, process and store data efficiently.", "Protect data quality, integrity and accessibility.", "Support data products and downstream analytics consumers."],
    requirements: ["1–3 years of relevant experience", "Data pipeline and data analysis fundamentals", "Cloud data platform knowledge is useful"],
    matches: ["AWS and Azure exposure", "PySpark + Python", "ETL / ELT", "Data validation", "3 years overall"],
    gaps: ["The role may cap at 3 years", "Confirm exact cloud stack and leveling"],
    interview: "Expect practical pipeline questions, SQL, data quality and cloud fundamentals. Use your fixed-width ingestion project to demonstrate handling messy source data.",
    sourceNote: "The role was discovered in a public listing for 1–3 years, and the application link points to the live official FedEx careers site rather than a blocked mirror."
  },
  {
    id: "sanofi-data",
    company: "Sanofi",
    sector: "Healthcare & Pharma",
    companyType: "Pharma digital and technology GCC",
    title: "Data Engineer · Digital Technology Enablement",
    location: "Hyderabad, India",
    mode: "Hyderabad",
    experience: "3–5 years",
    fit: 68,
    status: "lead",
    statusLabel: "Active lead · skill check",
    confidence: "Talent500 role mirror",
    source: "Talent500 listing",
    link: "https://talent500.com/jobs/sanofi/data-engineer-hyderabad-T500_SI_R2798120/",
    companyLink: "https://jobs.sanofi.com/en/employment/hyderabad-telangana-india-digital-data-and-technology-jobs/2649/32115968/1269750-1254788-1269844-1269843/4",
    summary: "The 3–5 year listing is titled Data Engineer, but the detailed work is centered on Saviynt access-management workflows and enterprise application onboarding.",
    responsibilities: ["Configure Saviynt rules, workflows, connectors and reports.", "Onboard applications and support access certification and RBAC controls.", "Participate in UAT, troubleshooting and regulated-environment delivery."],
    requirements: ["3–4 years of hands-on Saviynt support", "Java / JavaScript and enterprise integration", "User access management, RBAC, SOX or GxP familiarity"],
    matches: ["Access control and governance", "Enterprise integration", "3+ years", "Regulated delivery mindset"],
    gaps: ["Saviynt is not in the resume", "This is IAM-heavy, not pipeline-heavy"],
    interview: "Treat this as a pivot role only if you want identity and access engineering. It is not the best match for a pure Databricks / Snowflake data-engineering path.",
    sourceNote: "The public listing says 3–5 years, but its detailed description is Saviynt/IAM-focused. Read the full page before deciding."
  },
  {
    id: "wbd-data",
    company: "Warner Bros. Discovery",
    sector: "Telecom & Media",
    companyType: "Media technology GCC",
    title: "Data Engineer II · Data Analytics Team",
    location: "Hyderabad, India",
    mode: "Hyderabad",
    experience: "3–5 years",
    fit: 82,
    status: "lead",
    statusLabel: "Active lead",
    confidence: "Public role mirror · verify source",
    source: "The Muse listing",
    link: "https://www.themuse.com/jobs/warnerbrosdiscovery/data-engineer-ii-data-analytics-team-hyderabad",
    companyLink: "https://careers.wbd.com/global/en/india-jobs",
    summary: "A data analytics engineering role in WBD's Hyderabad team, listed for 3–5 years and likely to involve production analytics pipelines and collaboration with data consumers.",
    responsibilities: ["Build and maintain analytics data pipelines and data products.", "Support data organization and complex business questions.", "Work with engineering, analytics and product stakeholders."],
    requirements: ["3–5 years of software or data engineering", "Strong SQL and programming fundamentals", "Experience with data processing and analytics systems"],
    matches: ["Python + SQL", "Spark and warehouse modeling", "Production support", "Stakeholder collaboration"],
    gaps: ["Confirm the exact cloud / streaming stack", "Media or ad-tech experience may be preferred"],
    interview: "Prepare a clear end-to-end architecture story: source ingestion, bronze/silver/gold transformations, data quality, orchestration, observability and BI consumption.",
    sourceNote: "Public role page lists Data Engineer II in Hyderabad for 3–5 years. Verify the current state on WBD's India jobs page."
  },
  {
    id: "massmutual-data",
    company: "MassMutual India",
    sector: "BFSI",
    companyType: "Insurance technology GCC",
    title: "Senior Associate, Data Engineer",
    location: "Hyderabad, Telangana",
    mode: "Hyderabad",
    experience: "Not published",
    fit: 81,
    status: "lead",
    statusLabel: "Role lead",
    confidence: "Official career category",
    source: "MassMutual India Careers",
    link: "https://careers.massmutualindia.com/category/technology-jobs/724/8630432/1",
    companyLink: "https://careers.massmutualindia.com/search-jobs",
    summary: "MassMutual India's official Technology jobs page currently surfaces a Hyderabad Senior Associate, Data Engineer role. The exact job description should be opened from the live category page.",
    responsibilities: ["Likely ownership of cloud data pipelines and analytics platforms.", "Contribute to reliable data products in an insurance technology environment.", "Collaborate across engineering and business teams."],
    requirements: ["The official category does not expose the full requirement in the search result", "Check the role page for exact experience and technology requirements"],
    matches: ["Python + SQL", "Spark and Snowflake", "AWS data engineering", "Production ownership"],
    gaps: ["Exact role requirements need confirmation", "Senior Associate leveling may vary"],
    interview: "Use the official page to confirm the role, then tailor around your AWS Lambda/S3/Snowflake and Airflow reliability stories.",
    sourceNote: "This is an official careers category lead rather than a fully extracted job page. Open the category and confirm the individual posting."
  },
  {
    id: "novartis-data",
    company: "Novartis",
    sector: "Healthcare & Pharma",
    companyType: "Life sciences technology GCC",
    title: "Senior Data Engineer · Data & AI Platforms",
    location: "Hyderabad, India",
    mode: "Office / Hyderabad",
    experience: "Likely senior",
    fit: 72,
    status: "monitor",
    statusLabel: "Monitor · senior level",
    confidence: "Official career search",
    source: "Novartis Careers",
    link: "https://www.novartis.com/in-en/careers/career-search",
    companyLink: "https://www.novartis.com/in-en/careers/career-search",
    summary: "Novartis' India career search surfaces a Senior Data Engineer – Data & AI Platforms role in Hyderabad. It is a strong employer target, but the level may be above a 3-year profile.",
    responsibilities: ["Build and evolve data and AI platform capabilities.", "Work with data, engineering and science stakeholders in a regulated environment.", "Support enterprise-scale data products and platform standards."],
    requirements: ["Exact requirement is on the live Novartis posting", "Senior platform engineering experience may be expected"],
    matches: ["Databricks and data platforms", "Governance and lineage", "Python / SQL", "Life-sciences adjacent delivery"],
    gaps: ["Likely seniority gap", "Confirm years required before applying"],
    interview: "Keep this as a high-value target and use the role page to find a less senior Data Engineer or platform role in the same Hyderabad team.",
    sourceNote: "Official Novartis search confirms a Hyderabad Senior Data Engineer – Data & AI Platforms result; the exact level should be checked live."
  },
  {
    id: "mcd-data",
    company: "McDonald's",
    sector: "Retail & Consumer",
    companyType: "Retail technology GCC",
    title: "Data Engineer III",
    location: "Hyderabad, India",
    mode: "Hyderabad",
    experience: "5–9 years",
    fit: 64,
    status: "monitor",
    statusLabel: "Stretch · senior level",
    confidence: "Official role page checked",
    source: "McDonald's Careers",
    link: "https://jobs.mcdonalds.com/job/Hyderabad-Data-Engineer-III-500081/1410434500/",
    companyLink: "https://careers.mcdonalds.com/",
    summary: "An official Hyderabad Data Engineer III role focused on digital payments data ingestion, curation and analytics. The listed level is a stretch for 3 years.",
    responsibilities: ["Build scalable data solutions for finance and payments data.", "Support ingestion, curation, reporting and analytics consumption.", "Work within a global retail technology team."],
    requirements: ["The public listing points to a senior Data Engineer III level", "Python, NoSQL, SQL, Kafka and Java or Scala are highlighted"],
    matches: ["Python + SQL", "ETL / data modeling", "Cloud data platforms", "Production data pipelines"],
    gaps: ["5–9 years is above target", "Kafka and Java/Scala are not core resume signals"],
    interview: "Apply only if the live form accepts a lower range or if the team has adjacent Data Engineer II roles. Otherwise use the company target to monitor new postings.",
    sourceNote: "Official McDonald's job page is live, but the public mirror indicates a 5–9 year profile. Treat as a monitor role."
  },
  {
    id: "s-p-global",
    company: "S&P Global",
    sector: "Professional & Info Services",
    companyType: "Financial information GCC",
    title: "Lead Software Engineer · Data Engineer",
    location: "India · Hyderabad opportunities",
    mode: "Check role page",
    experience: "Senior / role-specific",
    fit: 74,
    status: "monitor",
    statusLabel: "Monitor · new roles",
    confidence: "Official careers hub",
    source: "S&P Global Careers",
    link: "https://careers.spglobal.com/",
    companyLink: "https://www.spglobal.com/en/explore-s-p-global/careers",
    summary: "S&P Global has a substantial Hyderabad presence and regularly posts data engineering and data platform roles. The current Lead Software Engineer title is likely senior, so use the hub to find Engineer-level openings.",
    responsibilities: ["Build data platforms and software used by financial information products.", "Work across data ingestion, transformation, quality and analytics.", "Collaborate with product and engineering teams."],
    requirements: ["Role-specific; check the live posting", "SQL, cloud and modern data engineering are common signals"],
    matches: ["Financial data context", "Python / SQL", "Cloud + warehouse", "Governance and lineage"],
    gaps: ["Current lead role likely above target", "Exact active Hyderabad role needs selection"],
    interview: "Search the hub for Engineer or Associate Engineer titles and apply with the Snowflake/dbt and data modeling stories from the resume.",
    sourceNote: "The official hub is the safest entry point because search results show multiple Hyderabad data roles with changing titles."
  }
];

const companies = [
  ["Amazon", "Technology", "Large technology GCC", "https://www.amazon.jobs/en/locations/hyderabad", "Role lead"],
  ["Microsoft", "Technology", "Global technology and engineering", "https://careers.microsoft.com/v2/global/en/locations/hyderabad.html", "Target"],
  ["DoorDash", "Technology", "Product and engineering GCC", "https://careersatdoordash.com/jobs/", "Role lead"],
  ["Synchrony", "BFSI", "Financial services GCC", "https://www.synchronycareers.com/category/technology-jobs/49398/9381552/1", "Role lead"],
  ["Bristol Myers Squibb", "Healthcare & Pharma", "Life sciences GCC", "https://careers.bms.com/in/", "Role lead"],
  ["Invesco", "BFSI", "Investment technology GCC", "https://careers.invesco.com/india/", "Role lead"],
  ["FedEx", "Engineering & Industrial", "Logistics technology GCC", "https://careers.fedex.com/", "Role lead"],
  ["Warner Bros. Discovery", "Telecom & Media", "Media technology GCC", "https://careers.wbd.com/global/en/india-jobs", "Role lead"],
  ["MassMutual India", "BFSI", "Insurance technology GCC", "https://careers.massmutualindia.com/search-jobs", "Role lead"],
  ["Sanofi", "Healthcare & Pharma", "Pharma digital GCC", "https://jobs.sanofi.com/en/employment/hyderabad-telangana-india-digital-data-and-technology-jobs/2649/32115968/1269750-1254788-1269844-1269843/4", "Role lead"],
  ["Novartis", "Healthcare & Pharma", "Life sciences technology GCC", "https://www.novartis.com/in-en/careers/career-search", "Monitor"],
  ["S&P Global", "Professional & Info Services", "Financial information GCC", "https://careers.spglobal.com/", "Monitor"],
  ["JPMorganChase", "BFSI", "Financial technology GCC", "https://www.jpmorganchase.com/careers", "Target"],
  ["Wells Fargo", "BFSI", "Financial services GCC", "https://www.wellsfargojobs.com/en/", "Target"],
  ["Optum", "Healthcare & Pharma", "Health technology GCC", "https://careers.unitedhealthgroup.com/", "Target"],
  ["State Street", "BFSI", "Investment services GCC", "https://careers.statestreet.com/", "Target"],
  ["McDonald's", "Retail & Consumer", "Retail technology GCC", "https://careers.mcdonalds.com/", "Monitor"],
  ["Google", "Technology", "Technology GCC", "https://www.google.com/about/careers/applications/jobs/results/?location=Hyderabad%2C%20India", "Target"],
  ["Qualcomm", "Technology", "Semiconductor engineering GCC", "https://careers.qualcomm.com/careers", "Target"],
  ["Oracle", "Technology", "Cloud and database technology", "https://careers.oracle.com/", "Target"],
  ["Salesforce", "Technology", "Cloud software GCC", "https://careers.salesforce.com/en/jobs/?search=Hyderabad", "Target"],
  ["HSBC", "BFSI", "Banking technology GCC", "https://mycareer.hsbc.com/", "Target"],
  ["Goldman Sachs", "BFSI", "Financial technology GCC", "https://higher.gs.com/results?location=Hyderabad", "Target"],
  ["PepsiCo", "Retail & Consumer", "Consumer analytics GCC", "https://www.pepsicojobs.com/", "Target"],
  ["Experian", "Professional & Info Services", "Credit data and analytics", "https://www.experianplc.com/careers", "Monitor"],
  ["Chubb", "BFSI", "Insurance engineering GCC", "https://about.chubb.com/careers/engineering-centers/india-engineering-center.html", "Monitor"],
  ["JLL", "Professional & Info Services", "Real estate technology GCC", "https://www.jll.com/en/careers", "Target"],
  ["Eli Lilly", "Healthcare & Pharma", "Pharma technology GCC", "https://careers.lilly.com/", "Target"],
  ["McKinsey / QuantumBlack", "Professional & Info Services", "Analytics and AI", "https://www.mckinsey.com/careers", "Target"]
].map(([name, sector, type, link, state]) => ({ name, sector, type, link, state }));

let activeJobs = jobs;
const roleList = document.querySelector("#role-list");
const searchInput = document.querySelector("#search-input");
const statusFilter = document.querySelector("#status-filter");
const sectorFilter = document.querySelector("#sector-filter");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");

function initials(name) { return name.split(/[\s&/]+/).filter(Boolean).slice(0, 2).map(word => word[0]).join("").toUpperCase(); }
function statusClass(status) { return status === "apply" ? "" : status === "lead" ? "lead" : "monitor"; }
function matchesSearch(item, query) { const text = JSON.stringify(item).toLowerCase(); return !query || text.includes(query.toLowerCase()); }
function filteredJobs() {
  const query = searchInput.value.trim();
  const status = statusFilter.value;
  const sector = sectorFilter.value;
  return activeJobs.filter(job => (status === "all" || job.status === status) && (sector === "all" || job.sector === sector) && matchesSearch(job, query)).sort((a, b) => b.fit - a.fit);
}

function jobItem(job) {
  const applyUrl = job.applicationUrl || job.link;
  const linkLabel = job.linkStatusLabel || "Source link";
  return `<article class="job-row">
    <div class="job-main"><div class="job-company"><span class="company-initial">${initials(job.company)}</span><div><strong>${job.company}</strong><small>${job.sector}</small></div></div><a class="job-title" href="${applyUrl}" target="_blank" rel="noreferrer">${job.title}</a><span class="job-source">${job.source} · ${linkLabel}</span></div>
    <div class="job-cell"><small>Location</small><span>${job.location}</span></div>
    <div class="job-cell"><small>Experience</small><span>${job.experience}</span></div>
    <div class="job-fit"><strong>${job.fit}%</strong><small>resume fit</small></div>
    <div class="job-action"><span class="role-status ${statusClass(job.status)}">${job.statusLabel}</span><a class="apply-link" href="${applyUrl}" target="_blank" rel="noreferrer">Apply <span>↗</span></a></div>
  </article>`;
}

function renderJobs() {
  const results = filteredJobs();
  resultCount.textContent = `${results.length} job${results.length === 1 ? "" : "s"}`;
  roleList.innerHTML = results.map(jobItem).join("");
  emptyState.classList.toggle("hidden", results.length > 0);
}

function resetFilters() { searchInput.value = ""; statusFilter.value = "all"; sectorFilter.value = "all"; renderJobs(); }
[searchInput, statusFilter, sectorFilter].forEach(control => control.addEventListener("input", renderJobs));
document.querySelector("#clear-filters").addEventListener("click", resetFilters);

async function loadJobs() {
  try {
    const response = await fetch("data/jobs.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`jobs.json returned ${response.status}`);
    const data = await response.json();
    if (Array.isArray(data) && data.length) activeJobs = data;
  } catch (error) {
    console.info("Using the built-in job snapshot:", error.message);
  }
  renderJobs();
}

loadJobs();
