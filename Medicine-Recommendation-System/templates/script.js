
            // Sample symptoms list for auto-suggestions
            const symptomsList = [
                'itching', 'skin rash', 'nodal skin eruptions', 'continuous sneezing', 'shivering', 'chills', 
                'joint pain', 'stomach pain', 'acidity', 'ulcers on tongue', 'muscle wasting', 'vomiting', 
                'burning micturition', 'spotting urination', 'fatigue', 'weight gain', 'anxiety', 'cold hands and feet', 
                'mood swings', 'weight loss', 'restlessness', 'lethargy', 'patches in throat', 'irregular sugar level', 
                'cough', 'high fever', 'sunken eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 
                'headache', 'yellowish skin', 'dark urine', 'nausea', 'loss of appetite', 'pain behind the eyes', 
                'back pain', 'constipation', 'abdominal pain', 'diarrhoea', 'mild fever', 'yellow urine', 
                'yellowing of eyes', 'acute liver failure', 'fluid overload', 'swelling of stomach', 'swelled lymph nodes', 
                'malaise', 'blurred and distorted vision', 'phlegm', 'throat irritation', 'redness of eyes', 
                'sinus pressure', 'runny nose', 'congestion', 'chest pain', 'weakness in limbs', 'fast heart rate', 
                'pain during bowel movements', 'pain in anal region', 'bloody stool', 'irritation in anus', 'neck pain', 
                'dizziness', 'cramps', 'bruising', 'obesity', 'swollen legs', 'swollen blood vessels', 'puffy face and eyes', 
                'enlarged thyroid', 'brittle nails', 'swollen extremities', 'excessive hunger', 'extra marital contacts', 
                'drying and tingling lips', 'slurred speech', 'knee pain', 'hip joint pain', 'muscle weakness', 
                'stiff neck', 'swelling joints', 'movement stiffness', 'spinning movements', 'loss of balance', 
                'unsteadiness', 'weakness of one body side', 'loss of smell', 'bladder discomfort', 'foul smell of urine', 
                'continuous feel of urine', 'passage of gases', 'internal itching', 'toxic look (typhos)', 
                'depression', 'irritability', 'muscle pain', 'altered sensorium', 'red spots over body', 'belly pain', 
                'abnormal menstruation', 'dischromic patches', 'watering from eyes', 'increased appetite', 'polyuria', 
                'family history', 'mucoid sputum', 'rusty sputum', 'lack of concentration', 'visual disturbances', 
                'receiving blood transfusion', 'receiving unsterile injections', 'coma', 'stomach bleeding', 
                'distention of abdomen', 'history of alcohol consumption', 'fluid overload', 'blood in sputum', 
                'prominent veins on calf', 'palpitations', 'painful walking', 'pus filled pimples', 'blackheads', 
                'scurring', 'skin peeling', 'silver like dusting', 'small dents in nails', 'inflammatory nails', 
                'blister', 'red sore around nose', 'yellow crust ooze'
            ];
    
            // Elements
            const symptomsInput = document.getElementById('symptoms');
            const symptomsSuggestions = document.getElementById('symptomsSuggestions');
            const startSpeechRecognition = document.getElementById('startSpeechRecognition');
            const transcription = document.getElementById('transcription');
            const typingIndicator = document.getElementById('typingIndicator');
            const modeToggle = document.getElementById('modeToggle');
            
            // Show suggestions when typing in the symptoms input
            symptomsInput.addEventListener('input', function() {
                const inputValue = this.value.toLowerCase();
                if (inputValue.length < 2) {
                    symptomsSuggestions.style.display = 'none';
                    return;
                }
                
                const filteredSymptoms = symptomsList.filter(symptom => 
                    symptom.toLowerCase().includes(inputValue)
                );
                
                if (filteredSymptoms.length > 0) {
                    symptomsSuggestions.innerHTML = '';
                    filteredSymptoms.slice(0, 5).forEach(symptom => {
                        const div = document.createElement('div');
                        div.textContent = symptom;
                        div.addEventListener('click', function() {
                            if (symptomsInput.value) {
                                symptomsInput.value += ', ' + symptom;
                            } else {
                                symptomsInput.value = symptom;
                            }
                            symptomsSuggestions.style.display = 'none';
                        });
                        symptomsSuggestions.appendChild(div);
                    });
                    symptomsSuggestions.style.display = 'block';
                } else {
                    symptomsSuggestions.style.display = 'none';
                }
            });
            
            // Hide suggestions when clicking outside
            document.addEventListener('click', function(e) {
                if (e.target !== symptomsInput && e.target !== symptomsSuggestions) {
                    symptomsSuggestions.style.display = 'none';
                }
            });
            
            // Speech recognition functionality
            if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                const recognition = new SpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = true;
                
                startSpeechRecognition.addEventListener('click', function() {
                    recognition.start();
                    typingIndicator.classList.remove('d-none');
                    startSpeechRecognition.disabled = true;
                    startSpeechRecognition.innerHTML = '<i class="fas fa-microphone-slash me-2"></i> Listening...';
                    transcription.textContent = '';
                });
                
                recognition.onresult = function(event) {
                    const transcript = Array.from(event.results)
                        .map(result => result[0])
                        .map(result => result.transcript)
                        .join('');
                    
                    transcription.textContent = transcript;
                    
                    if (event.results[0].isFinal) {
                        if (symptomsInput.value) {
                            symptomsInput.value += ', ' + transcript;
                        } else {
                            symptomsInput.value = transcript;
                        }
                    }
                };
                
                recognition.onend = function() {
                    typingIndicator.classList.add('d-none');
                    startSpeechRecognition.disabled = false;
                    startSpeechRecognition.innerHTML = '<i class="fas fa-microphone me-2"></i> Voice Input';
                };
                
                recognition.onerror = function(event) {
                    console.error('Speech recognition error', event.error);
                    typingIndicator.classList.add('d-none');
                    startSpeechRecognition.disabled = false;
                    startSpeechRecognition.innerHTML = '<i class="fas fa-microphone me-2"></i> Voice Input';
                    transcription.textContent = 'Error: ' + event.error;
                };
            } else {
                startSpeechRecognition.addEventListener('click', function() {
                    alert('Speech recognition is not supported in your browser. Please try Chrome or Edge.');
                });
            }
            
            // Dark mode toggle
            modeToggle.addEventListener('click', function() {
                document.body.classList.toggle('dark-mode');
                
                if (document.body.classList.contains('dark-mode')) {
                    modeToggle.innerHTML = '<i class="fas fa-sun"></i><span class="sr-only">Toggle light mode</span>';
                } else {
                    modeToggle.innerHTML = '<i class="fas fa-moon"></i><span class="sr-only">Toggle dark mode</span>';
                }
            });
