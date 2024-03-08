document.querySelectorAll(".btn").forEach(function (button, index) {
    button.addEventListener("click", function() {
        document.querySelectorAll("p").forEach(function (paragraph, paraIndex) {

            /* (index === paraIndex): This condition compares the index of the current button with the index of the current paragraph.
            If the indexes are equal, it means that the current button corresponds to the current paragraph, so the paragraph should be visible.
            If the indexes are not equal, it means that the current button does not correspond to the current paragraph, so the paragraph should not be visible. */


            if (index === paraIndex) {
                // Toggle the "visible" class only for the paragraph corresponding to the clicked button
                paragraph.classList.toggle("visible");
            } else {
                // Hide paragraphs corresponding to other buttons
                paragraph.classList.remove("visible");
            }
        });
    });
});




