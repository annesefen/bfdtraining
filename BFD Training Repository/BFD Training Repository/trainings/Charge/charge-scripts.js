document.addEventListener("DOMContentLoaded", () => {
    // Handle Collapsible Sections
    const collapsibleHeaders = document.querySelectorAll(".collapsible");
    collapsibleHeaders.forEach(header => {
        header.addEventListener("click", () => {
            header.classList.toggle("active");
            const content = header.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    // Create Modals for Learn More Buttons
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal-container", "hidden");
    modalContainer.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <div id="modal-text"></div>
        </div>
    `;
    document.body.appendChild(modalContainer);

    const modal = document.querySelector(".modal-container");
    const modalText = document.getElementById("modal-text");
    const closeModalBtn = modal.querySelector(".close-btn");

    // Close Modal Functionality
    closeModalBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
        modalText.innerHTML = ""; // Clear previous content
    });

    // Add Event Listeners for Learn More Buttons
    const infoButtons = document.querySelectorAll(".info-btn");
    infoButtons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonId = button.id;

            // Dynamically set modal content based on button ID
            const modalContent = {
                "sample-info-btn": `
                    <h3>SAMPLE Assessment</h3>
                    <p>The SAMPLE mnemonic helps EMS personnel gather a thorough patient history. It stands for:</p>
                    <ul>
                        <li><strong>S:</strong> Symptoms – What is bothering the patient the most?</li>
                        <li><strong>A:</strong> Allergies – Any known allergies?</li>
                        <li><strong>M:</strong> Medications – What medications is the patient taking?</li>
                        <li><strong>P:</strong> Past Medical History – Relevant medical conditions?</li>
                        <li><strong>L:</strong> Last Oral Intake – When did they last eat or drink?</li>
                        <li><strong>E:</strong> Events Leading to Incident – What were they doing when this started?</li>
                    </ul>
                `,
                "opqrst-info-btn": `
                    <h3>OPQRST Assessment</h3>
                    <p>Use OPQRST to evaluate pain and other symptoms. It stands for:</p>
                    <ul>
                        <li><strong>O:</strong> Onset – What was the patient doing when symptoms began?</li>
                        <li><strong>P:</strong> Provocation – What makes it better or worse?</li>
                        <li><strong>Q:</strong> Quality – Describe the pain (e.g., sharp, dull).</li>
                        <li><strong>R:</strong> Radiation – Does the pain move elsewhere?</li>
                        <li><strong>S:</strong> Severity – Rate the pain on a scale of 1 to 10.</li>
                        <li><strong>T:</strong> Time – When did symptoms start?</li>
                    </ul>
                `,
                "emrc-details-btn": `
                    <h3>EMRC Communication</h3>
                    <p>EMRC facilitates seamless communication between EMS and hospitals. Key uses include:</p>
                    <ul>
                        <li><strong>Hospital Notifications:</strong> Inform hospitals of incoming patients.</li>
                        <li><strong>Consultations:</strong> Discuss complex cases with hospital physicians.</li>
                        <li><strong>Exceptional Situations:</strong> Coordinate during Mass Casualty Incidents (MCI).</li>
                    </ul>
                `,
                "handoff-practice-btn": `
                    <h3>Handoff Reporting</h3>
                    <p>Deliver a concise and effective report to the receiving nurse:</p>
                    <ul>
                        <li><strong>Age & Sex:</strong> Start with basic demographics.</li>
                        <li><strong>Chief Complaint:</strong> Why is the patient seeking care?</li>
                        <li><strong>Interventions:</strong> What care was provided during transport?</li>
                        <li><strong>Vital Signs:</strong> Provide the most recent and relevant vitals.</li>
                    </ul>
                `
            };

            // Set modal content based on the button clicked
            modalText.innerHTML = modalContent[buttonId] || "Information not available.";
            modal.classList.remove("hidden");
        });
    });

    // Reset Checklists
    const resetButtons = document.querySelectorAll(".reset-btn");
    resetButtons.forEach(button => {
        button.addEventListener("click", () => {
            const checklist = button.previousElementSibling;
            if (checklist) {
                const checkboxes = checklist.querySelectorAll("input[type='checkbox']");
                checkboxes.forEach(checkbox => {
                    checkbox.checked = false;
                });
            }
        });
    });
});
