export const files = {
  "index.js": {
    "file": {
      "contents": "import express from 'express';\nconst app = express();\nconst port = 3111;\n\napp.get('/', (req, res) => {\n  res.send('Welcome to a WebContainers app! 🥳');\n});\n\napp.listen(port, () => {\n  console.log(`App is live at http://localhost:${port}`);\n});\n"
    }
  },
  "package.json": {
    "file": {
      "contents": "{\n  \"name\": \"example-app\",\n  \"type\": \"module\",\n  \"dependencies\": {\n    \"express\": \"latest\",\n    \"nodemon\": \"latest\"\n  },\n  \"scripts\": {\n    \"start\": \"nodemon index.js\"\n  }\n}\n"
    }
  }
};