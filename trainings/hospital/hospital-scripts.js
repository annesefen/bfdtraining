document.addEventListener('DOMContentLoaded', () => {
    // Feedback data for scenarios
    const scenarioFeedback = {
        "3 YOM who accidentally got sunscreen in their eye. Wouldn’t stop crying so babysitter called 911.":
            { correct: "normal-er", message: "Correct! This is a non-critical emergency and can be handled by a Normal ER." },
        "30 YOM construction worker, chain saw chain snapped and hit his face/eye. Swelling and tenderness around orbital but no obvious cuts to the eyeball.":
            { correct: "consult", message: "Correct! Consultation with an Eye Center or Trauma Center is necessary for this case." },
        "16 YOM accidentally shot in eye with BB gun. BB didn’t penetrate eyeball, but scratched eye.":
            { correct: "normal-er", message: "Correct! A Normal ER can handle minor eye injuries." },
        "20 YOM, drunk and playing around with BBQ skewers with his friends. Gets one impaled in his eye. Doesn’t go into brain. Vitals stable but in pain.":
            { correct: "consult", message: "Correct! Consult both a Trauma Center and Eye Center for this case." },
        "18 YOF playing golf, ball hits her in the eye in just the right way and eyeball comes out of socket. Vitals stable, complaining of headache, freaked out about eyeball dislodgement.":
            { correct: "consult", message: "Correct! This patient needs immediate consultation with an Eye Center and Trauma Center." },
        "Grocery store employee got three fingers chewed up in a meat grinder. Bleeding controlled with pressure dressing. Two fingers up to 2nd knuckle are grinded up.":
            { correct: "hand-center", message: "Correct! A Hand Center is the appropriate destination for this severe hand trauma." },
        "Another grocery store employee accidentally got his finger partially sliced off in a deli meat slicer. The finger is sliced about ⅔ of the way through between the 1st & 2nd knuckles.":
            { correct: "hand-center", message: "Correct! A Hand Center is the best destination for this type of injury." },
        "35 YOM got his foot run over by a lawn mower. Several lacerations, and two toes sliced off completely. Bleeding controlled with a tourniquet. Vitals stable.":
            { correct: "trauma-center", message: "Correct! This is a case for an Adult Trauma Center." },
        "12 YOF accidentally sliced her hand open while trying to cut vegetables making dinner. Parents saw blood spurting and put a homemade tourniquet on (learned from scout camp), which is controlling bleeding. Can’t feel anything in fingers and can see that cut is about ½ way through palm.":
            { correct: "pediatric-trauma-center", message: "Correct! This needs immediate attention at a Pediatric Trauma Center." },
        "19 YOF who was sexually assaulted at a party. As you walk up to her you notice some small cuts and scrapes on her face and arms, but no other visible injuries. Her vitals are stable and she is AOx4.":
            { correct: "safe-hospital", message: "Correct! This patient should be taken to a SAFE Hospital for specialized care." },
        "10 YOM in the custody of MCPD. Called due to possible child abuse allegations and reports that child was recently sexually assaulted. Patient has no outward physical injuries and is not complaining of any pain.":
            { correct: "safe-hospital", message: "Correct! A SAFE Hospital is the appropriate destination for this patient." }
    };

    // Add event listeners to scenario buttons
    const scenarioElements = document.querySelectorAll('.scenario');
    scenarioElements.forEach(scenario => {
        const description = scenario.querySelector('.scenario-description').innerText;
        const selectElement = scenario.querySelector('.scenario-select');
        const submitButton = scenario.querySelector('.submit-btn');
        const feedbackElement = scenario.querySelector('.feedback');

        submitButton.addEventListener('click', () => {
            const selectedValue = selectElement.value;

            if (!selectedValue) {
                feedbackElement.innerText = "Please select an option!";
                feedbackElement.style.color = "red";
                selectElement.style.border = "2px solid red"; // Highlight the dropdown in red
            } else if (scenarioFeedback[description]) {
                if (selectedValue === scenarioFeedback[description].correct) {
                    feedbackElement.innerText = scenarioFeedback[description].message;
                    feedbackElement.style.color = "green";
                    selectElement.style.border = "2px solid green"; // Highlight the dropdown in green
                } else {
                    feedbackElement.innerText = "Incorrect. Please review the scenario and try again.";
                    feedbackElement.style.color = "red";
                    selectElement.style.border = "2px solid red"; // Highlight the dropdown in red
                }
            } else {
                feedbackElement.innerText = "Error: Scenario not found.";
                feedbackElement.style.color = "orange";
            }
        });

        // Reset feedback and styles on dropdown change
        selectElement.addEventListener('change', () => {
            feedbackElement.innerText = "";
            selectElement.style.border = "1px solid #ccc"; // Reset border to default
        });
    });

    // Click-to-reveal functionality for hospital locations
    const revealButtons = document.querySelectorAll('.reveal-btn');

    revealButtons.forEach(button => {
        button.addEventListener('click', () => {
            const locationDetails = button.nextElementSibling; // Find the <p> with class "location-details"
            locationDetails.classList.toggle('hidden'); // Toggle visibility

            if (locationDetails.classList.contains('hidden')) {
                button.innerText = "Click to Reveal Capabilities";
            } else {
                button.innerText = "Click to Hide Capabilities";
            }
        });
    });
});
