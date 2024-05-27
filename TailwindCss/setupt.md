## how to setup tailwind

step 1 : Run the following commands 
```
npm install -D tailwindcss
npx tailwindcss init
```

step 2: update tailwind.config.js to include this line :
```
content["*html"]
```

step 3 : 
create src/input.css
add 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

step 4: run following command on terminal to get output.css
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

step 5: include output.css file in main html file 
```
<link rel="stylesheet" href="src/output.css">
```
