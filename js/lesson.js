// generate lesson list and links
document.addEventListener("DOMContentLoaded", function() {
    // get the ul element where the list items will be added
    const lessonList = document.getElementById("lessonList");

    // loop through the lessons and generate the list items
    for (let i = 1; i <= 27; i++) {
        const lessonNumber = i.toString().padStart(2, "0");
        const lessonUrl = `http://www.wahfucoc.org.hk/course/lesson${lessonNumber}.pdf`;
        const lessonText = `第${lessonNumber}課`; // Lesson text

        // create the li element
        const listItem = document.createElement("li");

        // set the text content of the li element
        listItem.textContent = lessonText;

        // attach click event listener to the li element
        listItem.addEventListener("click", function() {
            window.open(lessonUrl, "_blank"); // open the link in a new tab or window when the li is clicked
        });

        // append the li element to the ul element
        lessonList.appendChild(listItem);
    }
});