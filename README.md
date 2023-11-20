# React Profile App

This is a simple React app that displays a user profile card with information and posts.
## Project deployed link : https://social-pro-lemon.vercel.app

## Getting Started

### Prerequisites

- Node.js and npm must be installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-profile-app.git
2. Navigate to the project directory:
   cd react-profile-app
3. Install dependencies:
   npm install
### Running the App
1. Run the development server: npm start
2. The app will be available at http://localhost:3000/.

### Project Structure

1. src/components: Contains React components.

2. profile.js: the UserCard.js is wrapped in this component

3. UserCard.js: it is the main component where json data is imported used bootstrap and css for styling
             used map function to map all the posts data in the json data.
             
4. Profile.css: contains all the css code. it is linked to the profile.js.

5. src/json/profileData.json: JSON file with profile and post data.

public: Public assets, including images.

### Customization
Update profileData.json to change profile and post data.
Modify CSS files (Profile.css, UserCard.css) for styling.

### Contributing
Feel free to contribute to the project by opening issues or creating pull requests.
