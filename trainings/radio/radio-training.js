document.addEventListener('DOMContentLoaded', () => {
    const scenarioButtons = document.querySelectorAll('.scenario-btn');
    const scenarioText = document.getElementById('scenario-text');
    const emrcButton = document.createElement('button');
    const modal = document.createElement('div');

    // Scenario data
    const scenarios = {
        'canceling-resources': 'A706 to Montgomery, you can cancel [ ] OR you can hold myself and return the rest.',
        'requesting-als': 'A706 to Montgomery: Start me a medic for [ ].',
        'requesting-police': 'A706 to Montgomery: Start me county police [routine/priority] for [ ]. We are not in danger.',
        'fill-assignment': 'A706 to Montgomery: I’ve got [ ], fill the assignment for [ ].',
        'hold-on-scene': 'A706 to Montgomery: Hold me on the scene of a [PIC/PDC] at [street]. [Report conditions if needed]. I am not involved. Go ahead and start me a [ ].',
        'ems-transport': 'A706 to EMS 700: I have a priority 3 [ ] Y/O M/F with [chief complaint] requesting to go to [ ] hospital. How do you copy?',
        'emrc-consult': 'EMRC EMRC this is Montgomery County Ambulance 706 requesting consult with [hospital].'
    };

    // Add event listeners to buttons
    scenarioButtons.forEach(button => {
        button.addEventListener('click', () => {
            const scenarioKey = button.getAttribute('data-scenario');
            scenarioText.textContent = scenarios[scenarioKey] || 'Scenario details not found.';
        });
    });

    // Create EMRC pop-up modal
    emrcButton.innerText = 'What is EMRC?';
    emrcButton.classList.add('info-btn');

    modal.classList.add('modal', 'hidden');
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-btn">×</button>
            <h3>What is EMRC?</h3>
            <p>
                The Emergency Medical Resource Center (EMRC) is a critical communication hub for EMS clinicians, enabling seamless coordination between prehospital providers and hospital-based resources. It ensures that vital information is relayed in real time to emergency departments (EDs), specialty centers, and authorized physicians, improving patient care and decision-making during emergencies.
            </p>
            <p>
                All communications via EMRC are recorded, making it a reliable and accountable tool for hospital notifications, medical consultations, and mass casualty incident (MCI) management.
            </p>
            <h4>When to Use EMRC</h4>
            <ul>
                <li><strong>Hospital Notifications:</strong> For Priority 1 and 2 patients, specialty alert cases, and trauma cases.</li>
                <li><strong>Medical Consultation:</strong> When required by protocol, for advanced treatment decisions, or at the clinician's discretion.</li>
                <li><strong>Exceptional Situations:</strong> For protocol-directed care when consultation is unavailable.</li>
                <li><strong>Mass Casualty Incidents (MCI):</strong> To coordinate communication and resource allocation effectively.</li>
            </ul>
            <h4>Essential Information for Notifications and Consultations</h4>
            <p>
                <strong>Patient Information:</strong> Priority, age, chief complaint, vital signs, physical findings, and ETA.<br>
                <strong>Specialty Cases:</strong> Trauma (GCS and category), stroke (LAMS score), STEMI (ECG and symptoms).
            </p>
        </div>
    `;
    document.body.appendChild(modal);
    document.querySelector('.interactive-materials').appendChild(emrcButton);

    // Add modal open/close functionality
    emrcButton.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.classList.add('hidden');
    });
});
