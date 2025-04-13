# Medicine-Recommendation-System


A Flask-based machine learning web application that predicts diseases based on symptoms entered by users. It also provides helpful recommendations including medications, precautions, diets, and workout tips.

---

## 🚀 Features

- ✅ Disease prediction using a trained SVM model.
- 💊 Suggests medications for predicted disease.
- ⚠️ Shows precautions to take.
- 🥗 Recommends diet plans.
- 🏃 Workout tips based on condition.
- 🙅 Handles invalid/unrecognized symptoms gracefully.
- 🌐 Clean and user-friendly web interface.

---

## 🛠 Tech Stack

- **Frontend:** HTML (via Flask templates)
- **Backend:** Python, Flask
- **ML Model:** Support Vector Classifier (`svc.pkl`)
- **Data Format:** CSV files

---

## 🗂 Folder Structure

```
disease-prediction-app/
├── app.py                      # Main Flask app
├── models/
│   └── svc.pkl                 # Trained SVC model
├── datasets/
│   ├── symptoms_df.csv         # Symptom dataset
│   ├── precautions_df.csv      # Precautions for diseases
│   ├── workout_df.csv          # Workouts suggestions
│   ├── description.csv         # Disease descriptions
│   ├── medications.csv         # Medication suggestions
│   └── diets.csv               # Diet recommendations
├── templates/
│   └── index.html              # Frontend UI page
├── static/                     # (Optional) CSS or JS files
└── README.md                   # This file
```

---

## 📦 Installation

### 🔧 Prerequisites

- Python 3.x
- pip

### ⚙️ Setup

```bash
# Clone the repo
git clone hhttps://github.com/PavanPraneethKatakam/Medicine-Recommendation-System.git
cd Medicine-Recommendation-System

# (Optional) Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the Flask server
python app.py
```

### 🌐 Access the App

Open your browser and go to:

```
http://localhost:5000
```

---

## 💬 Usage

1. Enter symptoms separated by commas.  
   Example:  
   ```
   headache, fever, nausea
   ```

2. Click **Submit**.
3. The app will display:
   - Predicted disease name
   - Description
   - Medications
   - Precautions
   - Diet plans
   - Workout suggestions

---

## 📁 Datasets

Located in the `datasets/` folder:

| File Name         | Purpose                         |
|-------------------|----------------------------------|
| `symptoms_df.csv` | List of known symptoms          |
| `precautions_df.csv` | Precautions for each disease   |
| `medications.csv` | Medications for each disease    |
| `diets.csv`       | Diet recommendations            |
| `workout_df.csv`  | Workout suggestions             |
| `description.csv` | Descriptions of diseases        |

---

## 🧠 Machine Learning Model

- Trained using **Support Vector Classifier** (SVM).
- Saved in `models/svc.pkl`.
- Uses hardcoded `symptoms_dict` and `diseases_list` for inference.
---
## Interface 
## Interface 
![Home Page](static/Screenshot%202025-04-13%20at%2023.08.24.png)
![Results](https://raw.githubusercontent.com/PavanPraneethKatakam/Medicine-Recommendation-System/main/static/Screenshot%202025-04-13%20at%2023.08.24.png)

## 🙌 Acknowledgements

- Built for educational purposes.
- Dataset simulated or compiled from publicly available sources.
- Inspired by symptom-based health checkers.

---

## 📬 Contribute

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---
