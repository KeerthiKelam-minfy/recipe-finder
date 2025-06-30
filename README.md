# Recipe finder

A responsive React application that allows users to search for meals, view detailed recipes, and explore dishes using the free [TheMealDB API](https://www.themealdb.com/api.php).

---

##  Features Implemented

###  **Part 1: Core Features**
-  **Search Recipes**: Search meals by name using TheMealDB API.
-  **Recipe List Display**: See recipe name and image in a responsive grid layout.
-  **Loading & Error Handling**: Displays loading messages and handles "no results" case.
-  **Styling**: Basic CSS for clean and responsive design.

###  **Part 2: Intermediate Features**
-  **React Router Integration**: Enables SPA routing with `/` and `/recipe/:recipeId` pages.
-  **Recipe Detail Page**: View full recipe including category, image, instructions, and ingredients.
-  **Back to Search** link for easy navigation.

---

##  Tech Stack

- React (CRA)
- React Router DOM
- Fetch API
- CSS (custom)

---

##  Local Setup Instructions

### 1. Clone the Repository

<pre>
git clone https://github.com/KeerthiKelam-minfy/recipe-finder.git
cd recipe-finder  
</pre>

### 2. Install Dependencies
<pre>
npm install  
</pre>

### 3. Run the Application
<pre>
npm run dev  
</pre>

The app will run on http://localhost:3000

### API Endpoints Used
<pre>
Search by name:
https://www.themealdb.com/api/json/v1/1/search.php?s=chicken

Lookup by ID:
https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

Random recipe (if used):
https://www.themealdb.com/api/json/v1/1/random.php
</pre>


### Home seacch page
![image](https://github.com/user-attachments/assets/a830c44c-fad1-4134-bc22-d51babb179d7)

### Search Result Page
![image](https://github.com/user-attachments/assets/1ef55726-c682-47a1-b473-74e68ee3d7f2)

### Recipe Detail Page
![image](https://github.com/user-attachments/assets/5d77a2db-604a-4aa1-b304-ca5bf294f561)
