// JavaScript Document
// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', () => {
    const textareas = document.querySelectorAll('textarea');
    const saveButton = document.createElement('button');
    const clearButton = document.createElement('button');
    const scenarioSection = document.createElement('div');
    const nextScenarioButton = document.createElement('button');

    // Add Save Button
    saveButton.textContent = 'Save Report';
    saveButton.classList.add('action-button');
    saveButton.id = 'save-btn';
    saveButton.disabled = true;

    // Add Clear Button
    clearButton.textContent = 'Clear All';
    clearButton.classList.add('action-button');
    clearButton.id = 'clear-btn';

    const actionsSection = document.createElement('div');
    actionsSection.classList.add('actions');
    actionsSection.appendChild(saveButton);
    actionsSection.appendChild(clearButton);
    document.querySelector('main').appendChild(actionsSection);

    // Scenario Section
    const scenarios = [
        "A 35-year-old male with chest pain and shortness of breath. Denies any trauma. Vital signs: BP 145/90, HR 110, RR 22, SpO2 94% on room air.",
        "A 62-year-old female with weakness on the left side and slurred speech. Last known well was 1 hour ago. Vital signs: BP 170/100, HR 88, RR 20, SpO2 98%.",
        "A 10-year-old male with a possible arm fracture after falling off a bike. Complains of severe pain in the left arm. Vital signs: BP 110/70, HR 100, RR 20, SpO2 99%.",
        "A 75-year-old female with altered mental status found by family. Blood sugar is 42 mg/dL. Vital signs: BP 130/80, HR 78, RR 16, SpO2 96%.",
        "A 50-year-old male complaining of severe abdominal pain radiating to the back. Reports no bowel movement in 3 days. Vital signs: BP 140/85, HR 92, RR 18, SpO2 97%.",
        "A 28-year-old female experiencing difficulty breathing after being stung by a bee. Rash noted on arms. Vital signs: BP 90/60, HR 120, RR 28, SpO2 90%.",
        "A 45-year-old male found unconscious at a construction site. Head injury noted. Vital signs: BP 100/60, HR 50, RR 8, SpO2 85%.",
        "A 22-year-old female with a high fever, headache, and stiff neck. Reports nausea and vomiting. Vital signs: BP 120/80, HR 100, RR 22, SpO2 98%.",
        "A 60-year-old male with sudden chest pain and diaphoresis. Reports a history of heart disease. Vital signs: BP 90/50, HR 120, RR 24, SpO2 92%.",
        "A 30-year-old female in labor with contractions 2 minutes apart. Reports her water broke an hour ago. Vital signs: BP 130/85, HR 90, RR 20, SpO2 99%."
    ];

    let currentScenarioIndex = 0;

    scenarioSection.classList.add('scenario-section');
    scenarioSection.innerHTML = `<h3>Scenario</h3><p>${scenarios[currentScenarioIndex]}</p>`;
    document.querySelector('main').prepend(scenarioSection);

    // Add Next Scenario Button
    nextScenarioButton.textContent = 'Next Scenario';
    nextScenarioButton.classList.add('action-button');
    nextScenarioButton.id = 'next-scenario-btn';
    scenarioSection.appendChild(nextScenarioButton);

    nextScenarioButton.addEventListener('click', () => {
        currentScenarioIndex = (currentScenarioIndex + 1) % scenarios.length;
        scenarioSection.querySelector('p').textContent = scenarios[currentScenarioIndex];
    });

    // Function to enable/disable Save Button based on textarea content
    const toggleSaveButton = () => {
        saveButton.disabled = !Array.from(textareas).some(textarea => textarea.value.trim() !== '');
    };

    // Attach input event to textareas to monitor changes
    textareas.forEach(textarea => {
        textarea.addEventListener('input', toggleSaveButton);
    });

    // Save Button Click Event
    saveButton.addEventListener('click', () => {
        const reportData = {};
        textareas.forEach(textarea => {
            const sectionName = textarea.previousElementSibling.textContent;
            reportData[sectionName] = textarea.value.trim();
        });

        // Format the report for printing
        let reportContent = '';
        for (const [section, content] of Object.entries(reportData)) {
            reportContent += `<h2>${section}</h2><p>${content}</p>`;
        }

        // Open a new window for printing
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
            <head>
                <title>eMeds CHART Report</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                    }
                    h2 {
                        color: #007bff;
                    }
                    p {
                        margin-bottom: 20px;
                    }
                </style>
            </head>
            <body>
                ${reportContent}
            </body>
            </html>
        `);

        printWindow.document.close();
        printWindow.focus();

        // Trigger print
        printWindow.print();

        // Close the print window after printing
        printWindow.onafterprint = () => {
            printWindow.close();
        };
    });

    // Clear Button Click Event
    clearButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all sections?')) {
            textareas.forEach(textarea => (textarea.value = ''));
            toggleSaveButton();
        }
    });
});
