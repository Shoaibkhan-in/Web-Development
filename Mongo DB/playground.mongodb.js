
// Select the database to use.
use('webdev');

// Insert a few documents into the sales collection.
db.getCollection('development1').insertMany([
        {
            "course_name": "Java Script",
            "price": 20000,
            "instructor": "Shoaib"
        },
        {
            "course_name": "Python Basics",
            "price": 15000,
            "instructor": "Alice"
        },
        {
            "course_name": "Web Development Fundamentals",
            "price": 18000,
            "instructor": "Bob"
        },
        {
            "course_name": "Data Science Essentials",
            "price": 22000,
            "instructor": "Carol"
        },
        {
            "course_name": "Mobile App Development",
            "price": 25000,
            "instructor": "David"
        },
        {
            "course_name": "Frontend Frameworks",
            "price": 21000,
            "instructor": "Eva"
        },
        {
            "course_name": "Database Management",
            "price": 19000,
            "instructor": "Frank"
        },
        {
            "course_name": "Cloud Computing",
            "price": 23000,
            "instructor": "Grace"
        },
        {
            "course_name": "UI/UX Design",
            "price": 17000,
            "instructor": "Henry"
        },
        {
            "course_name": "Cybersecurity Basics",
            "price": 24000,
            "instructor": "Ivy"
        }
    ]);



// Print a message to the output window.
console.log(`Done Inserting Data`);
