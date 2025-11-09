# 🏋FitNex – Smart Fitness Landing Page (MVP)

FitNex is a fully functional lead-generation MVP built for fitness studios and gyms.  
It captures leads from a modern responsive landing page and automatically processes them through a complete automation workflow.

This project was developed as part of the **Optimyze Agency Demo Projects**.

---

## Features

### **1. Modern Frontend (Next.js + Tailwind CSS)**
- Fully responsive fitness landing page  
- Clean UI with custom animations  
- Contact form powered by `react-hook-form` + `zod`

### **2. Supabase Lead Storage**
- Form submissions inserted into a `leads` table  
- Fields stored:
  - name  
  - email  
  - phone  
  - fitness_goal  
  - message  
  - created_at  

### **3. Automation via n8n**
After a lead submits the form:
1. Supabase stores the data  
2. Frontend calls an **n8n Webhook**  
3. n8n workflow sends:
   - A personalized Gmail confirmation email  
   - Appends the lead details to Google Sheets  

### **4. End-to-End Integration**
- Frontend → Supabase → n8n → Gmail → Google Sheets
- Zero backend server required

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Frontend | Next.js 14, Tailwind CSS, ShadCN UI |
| Form Handling | React Hook Form + Zod |
| Database | Supabase (Postgres) |
| Automation | n8n (webhook → Gmail → Sheets) |
| Deployment | Vercel |
| Notification | sonner |

---

## Setup Instructions

### 1.Clone / Download

git clone https://github.com/your-username/fitnex-mvp.git
cd fitnex-mvp

### 2. Install dependencies

npm install

### 3. create .env.local

NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key

### 4. Run locally

npm run dev


🔗 Supabase Table SQL
create table leads (
  id bigint generated always as identity primary key,
  name text,
  email text,
  phone text,
  fitness_goal text,
  message text,
  created_at timestamp default now()
);



