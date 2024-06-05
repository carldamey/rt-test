const quizData = [
	{
		question:
			"The respiratory therapist should evaluate which of the following to develop a teaching plan for a patient who will be using a small volume nebulizer at home?",
		options: {
			A: "highest grade level achieved in school",
			B: "manual dexterity",
			C: "spousal support",
			D: "english speaking proficiency",
		},
		answer: "B",
		answer_explanation:
			"A patient that is taking nebulizer treatments needs to be able to demonstrate manual dexterity, and the ability to hold and manipulate the nebulizer. During the instruction, appropriate language skills are also important but English proficiency is not required. What is NOT important is the patient's spousal support. This will have no effect on their ability to self administer nebulizer treatments.",
	},
	{
		question:
			"Which of the following would be most beneficial in resolving microatelectasis?",
		options: {
			A: "Thoracentesis",
			B: "Bronchoscopy",
			C: "Percutaneous ventilation",
			D: "Chest tubes",
		},
		answer: "B",
		answer_explanation:
			"A bronchoscopy would be most beneficial because it can ventilate and recruit alveoli in the lung. The other options will not decrease atelectasis.",
	},
	{
		question:
			"A 45 year-old patient is recovering in the intensive care unit after undergoing a surgical procedure to repair a hernia. The patient remains unconscious. To prevent soft tissue obstruction, the respiratory therapist should recommend a(n)",
		options: {
			A: "double-lumen endobronchial tube",
			B: "nasopharyngeal airway",
			C: "bite block",
			D: "oropharyngeal airway",
		},
		answer: "D",
		answer_explanation:
			"An oral pharyngeal airway is the primary mechanism used to prevent the time from falling back and obstructing the airway. Although a double lumen endobronchial tube would also do this, it is far too invasive and not necessary.",
	},
	{
		question:
			"Quality control material has published values for pH of 7.20, PO2 of 65 mmHg. Documentation indicates the range of pH is 0.5% and is 3% for PO2. Machine results are as follows:\npH PO2 (mmHg) Run 1 7.19 64Run 2 7.1069Run 3 7.2165\nWhich quality control run(s) indicate the machine is out of control?",
		options: {
			A: "Run 2 and 3",
			B: "Run 1 and 2",
			C: "Run 2 only",
			D: "Run 3 only",
		},
		answer: "C",
		answer_explanation:
			"This question involves doing some math. You must look at each pH and add and subtract 0.5%. You must do the same for the PO2, using 3%. From there you can look at the results and determine which Run is out of control. In this case only Run two is out of control.",
	},
	{
		question:
			"A respiratory therapist is considering a patient's readiness to wean from mechanical ventilation. To determine the A-aDO2, the therapist will need which of the following?",
		options: {
			A: "CaO2 and PAO2",
			B: "VD/VT and PAO2",
			C: "VD/VT and ABG",
			D: "ABG and alveolar oxygen tension",
		},
		answer: "D",
		answer_explanation:
			"This question requires you to remember what is needed to calculate A-a gradient. You only need two things - the alveolar oxygen tension (PAO2), and the arterial oxygen tension, determined from an arterial blood gas.",
	},
	{
		question:
			"A patient with increased airway resistance from a fixed upper airway obstruction would benefit most from which of the following?",
		options: {
			A: "heliox therapy",
			B: "aerosolized atropine",
			C: "epinephrine",
			D: "bronchodilator therapy",
		},
		answer: "A",
		answer_explanation:
			"A fixed upper airway obstruction means air is having difficulty moving both in and out. It is usually caused by cancer or other non-changeable conditions. In this case the best thing we can do is decrease airway resistance by using helium or Heliox therapy.",
	},
	{
		question:
			"Evaluating MIP (maximum inspiratory pressure) is most useful in evaluating which of the following?",
		options: {
			A: "presence of a restrictive pulmonary defect",
			B: "presence of obstructive pulmonary defect",
			C: "inspiratory muscle strength",
			D: "effectiveness of cough",
		},
		answer: "C",
		answer_explanation:
			"Maximum inspiratory pressure is most useful in evaluating for inspiratory muscle strength, or the ability to sustain ventilation. To determine if a patient has a restricted pulmonary defect one would need to do a pulmonary function test. The effectiveness of a cough would be assessed through doing a maximum expiratory pressure maneuver, or MEP.",
	},
	{
		question:
			"An air-entrainment jet nebulizer is set at 50%. The respiratory therapist analyzes the oxygen coming from the end of the tubing and finds it is 60%. Which of the following most likely explains this finding?",
		options: {
			A: "excess water in the tubing",
			B: "poorly calibrated analyzer",
			C: "leak in the tubing",
			D: "low flow through the jet orifice",
		},
		answer: "A",
		answer_explanation:
			"When administering oxygen by any device that has a venturi mechanism, back pressure on the venturi will slow the speed of gas, decrease room air entrainment, and result in an increase in FIO2. Of the options offered, only excess water in the tubing would cause this type of back pressure.",
	},
	{
		question:
			"During a preoperational test of the ventilator with a test lung, the respiratory therapist notes a return tidal volume of 600 cc. Ventilator settings are:\nMode Assist/control FIO2 0.50Mandatory rate 10VT 750 mL\nWhat action should the therapist take?",
		options: {
			A: "Obtain a smaller test lung",
			B: "Examine the ventilator circuit for proper connections",
			C: "Increase the set tidal volume to 900 mL",
			D: "Obtain a larger test lung",
		},
		answer: "B",
		answer_explanation:
			"The purpose of a preoperational test on a ventilator is to ensure proper connections and assembly of those necessary parts. The reduced return tidal volume observed would most logically be caused by a failure to make a good connection between the ventilator circuit in the ventilator.",
	},
	{
		question:
			"During the preoperational test of the ventilator, the respiratory therapist notices the galvanic analyzer on the ventilator is reading erroneously low. Which of the following can the respiratory therapist do to correct the problem?",
		options: {
			A: "change the fuel cell",
			B: "replace the analyzer batteries",
			C: "tag the ventilator as non-functional and avoid placing it in service",
			D: "replace the electrolyte solution in the analyzer",
		},
		answer: "A",
		answer_explanation:
			"A galvanic oxygen analyzer will read erroneously under two conditions: the probe or the fuel cell is depleted or the analyzer requires calibration. In this case the probe, which provides the energy for the analyzer, is the most likely culprit and should be changed.",
	},
	{
		question:
			"Which of the following is most likely to increase nosocomial infection in a hospital?",
		options: {
			A: "use of alcohol-based hand cleaners",
			B: "poor hand washing among staff",
			C: "frequent disconnection in the ventilator circuit",
			D: "use of an HME for 48 hours",
		},
		answer: "B",
		answer_explanation:
			"The most common nosocomial infection source is from poor hand washing. Although frequent disconnection of a ventilator circuit will also increase incidence of infection, poor hand washing is by far more common.",
	},
	{
		question:
			"While monitoring a patient receiving mechanical ventilation, the respiratory therapist notices the low-pressure and low exhaled volume alarms are sounding. Which of the following could be the cause?",
		options: {
			A: "disconnected thermistor line",
			B: "herniated endotracheal tube cuff",
			C: "kinked endotracheal tube",
			D: "excess water in the inspiratory limb of the circuit",
		},
		answer: "A",
		answer_explanation:
			"If you have a low pressure or low exhaled volume ventilator alarm, you must look for the problem that could cause that specific type of alarm. If you look at the answers, a kink in the endotracheal tube would cause a high-pressure alarm so that cannot be the cause. Excess water in the limbs of the circuit would do the same. A high-pressure alarm would also develope if there is a herniated endotracheal tube cuff. This leaves the only possible answer which is a disconnected thermistor line.",
	},
	{
		question:
			"A patient receiving positive pressure ventilation has a low-pressure alarm sounding. Which of the following could be the cause?",
		options: {
			A: "a fracture in the plastic wye",
			B: "kinked ET tube",
			C: "excess secretions in the airway",
			D: "herniated cuff",
		},
		answer: "A",
		answer_explanation:
			"A low-pressure alarm is caused by a leak or a disconnection or by the patient if he or she is inhaling at a higher inspiratory demand than that being delivered by the ventilator. The solution of this problem is to look each of the answers and determine which one of those things could cause a low-pressure alarm. In this case a crack in the Y plastic piece would cause a leak. A herniated cuff, excess secretions in the airway, and a kinked ET tube would all cause high-pressure alarms.",
	},
	{
		question:
			"The high pressure alarm is sounding on a patient receiving volume controlled ventilation. The respiratory therapist should FIRST",
		options: {
			A: "suction the patient",
			B: "cancel the alarm",
			C: "observe the alarm panel to determine source",
			D: "provide manual ventilation",
		},
		answer: "D",
		answer_explanation:
			"The NBRC knows that in real life, when you hear a ventilator alarm, you're tempted to cancel the alarm or attempt to immediately solve the problem. However, the correct answer is always to first provide manual ventilation to the patient. This is true of any ventilator alarm. Your first action should be to stabilize the ventilatory status of the patient, and then troubleshoot the problem.",
	},
	{
		question:
			"Which of the following medications is shown to have sufficient affect when facial muscle twitching is observed?",
		options: {
			A: "Curare (d-turbo curare)",
			B: "Romazicon",
			C: "Halcion",
			D: "Anectine (succinylcholine chloride)",
		},
		answer: "D",
		answer_explanation:
			"Anectine is the medication that manifests muscle twitching about the face and neck when it is working properly.",
	},
	{
		question:
			"A respiratory therapist is preparing to measure SVC on a patient in the emergency department. Which of the following equipment is required?",
		options: {
			A: "Collins water-seal spirometer",
			B: "Wheatstone bridge",
			C: "respirometer",
			D: "Geissler tube",
			F: "A Collins water spirometer would also accomplish an SVC, but it is large equipment that is not transferable to bed side.",
		},
		answer: "C",
		answer_explanation:
			"A respirometer is the most important piece of equipment when measuring an SVC. A Collins water spirometer would also accomplish an SVC, but it is large equipment that is not transferable to bed side.",
	},
	{
		question:
			"A respiratory therapist is asked to determine a patient's inspiratory muscle strength. Which of the following equipment is required for this evaluation?",
		options: {
			A: "pressure manometer",
			B: "peak flow meter",
			C: "respirometer",
			D: "Fleisch pneumotachometer",
		},
		answer: "A",
		answer_explanation:
			"Inspiratory muscle strength is determined by measuring the maximum inspiratory pressure. This is done with a pressure manometer. The other devices measure flow, which is not what we are needing.",
	},
	{
		question:
			"A respiratory therapist is ordered to do a bedside assessment of the effectiveness of a bronchodilator on a patient with an acute asthmatic episode. Which of the following equipment will be needed to perform this evaluation?",
		options: {
			A: "Collins water-seal spirometer",
			B: "peak flow meter",
			C: "maximum inspiratory pressure manometer",
			D: "respirometer",
		},
		answer: "B",
		answer_explanation:
			"To determine the effectiveness of a bronchodilator one must measure the flow. In this case a peak flow meter would be most appropriate. A respirometer would measure volume which is not what we are looking for in this circumstance.",
	},
	{
		question:
			"Which of the following pressures is most consistent with a normal pulmonary artery pressure (PAP)?",
		options: {A: "25/8 mmHg", B: "25/4 mmHg", C: "120/80 mmHg", D: "12/8 mmHg"},
		answer: "A",
		answer_explanation:
			"To answer this question you must memorize normal mPAP. Normally we look at PAP as a mean value and therefore has a single number. But, it can also be expressed as a systolic over a diastolic number. In this case 25/8 mmHg.",
	},
	{
		question:
			"A patient receiving heliox therapy at 70%/30% mixture by non-rebreathing mask has the following arterial blood gas results:\npH 7.35 PaCO2 45 mmHgPaO2 110 mmHgHCO3- 24 mEq/LBE 0 mEq/L\nWhich of the following actions is appropriate?",
		options: {
			A: "change to a heliox mixture of 60%/40%",
			B: "switch to a partial rebreathing mask",
			C: "change to an 80%20% heliox mixture",
			D: "discontinue heliox therapy",
		},
		answer: "C",
		answer_explanation:
			"This patient is receiving 30% oxygen though a Heliox mixture. One look at the blood gas shows a PaO2 of 110 mmHg. This over oxygenation state indicates a need to lower supplemental oxygen. Changing to an 80-20% Heliox mixture is most appropriate",
	},
	{
		question:
			"A COPD patient complains of shortness of breath while exercising with a 2 L/min nasal cannula. During exercise, SPO2 is noted to fall to 84%. Which of the following would be most helpful to the patient during exercise?",
		options: {
			A: "avoid exercising",
			B: "decrease flow to 1 L/min nasal cannula",
			C: "use a non-rebreathing mask",
			D: "use an air-entrainment mask set at 28%",
		},
		answer: "D",
		answer_explanation:
			"When a COPD patient exercises the patient accidentally lowers FIO2 because they entrain more room air through their nose when they breathe more deeply. One way to compensate for this is to place them on a Venturi mask at the same approximate FIO2. A Venturi mask set at 28% is equivalent to 2 L/min. nasal cannula.",
	},
	{
		question:
			"A patient in the emergency room is receiving oxygen by nasal cannula at 3 L/min. Blood gases reveal the following:\npH 7.53 PaCO2 30 mmHgPaO2 51 torrHCO3- 23 mEq/LBE -1 mEq/L\nThe respiratory therapist should immediately",
		options: {
			A: "place the patient on a non-rebreathing mask",
			B: "place the patient on a Venturi mask at 40%",
			C: "decrease flow to 1 L/min",
			D: "increase flow to 5 L/min",
		},
		answer: "A",
		answer_explanation:
			"This patient has profound hypoxemia even with supplemental oxygen. It is evident that a small increase in oxygen will not be sufficient. 100% oxygen by a non-rebreather mask is the most appropriate option.",
	},
	{
		question:
			"An 80-kg (176-lb) female patient is receiving mechanical ventilation on the following settings:\nMode assist/control Mandatory rate 14/minTotal rate 14/minVT 550 mLFIO2 0.60PEEP 20 cmH2O ABGs pH 7.38PaCO2 42 mmHgPaO2 62 mmHgHCO3- 26 mEq/LBE +2 mEq/L\nThe respiratory therapist should",
		options: {
			A: "increase FIO2 to 0.7",
			B: "order a chest radiograph",
			C: "increase FIO2 to 1.0",
			D: "increase PEEP to 22 cmH2O",
		},
		answer: "D",
		answer_explanation:
			"The arterial blood gas reveals that the patient is under oxygenating. Therefore, a change in either PEEP or FIO2 is appropriate. Normally, FIO2 should be increased up to 60% first before PEEP is adjusted. In this case the FIO2 is already at 60%, so the next logical step is to increase the PEEP.",
	},
	{
		question: "suggest to",
		options: {
			A: "sedate the patient",
			B: "decrease FIO2 to 0.50",
			C: "increase flow to 15 L/min",
			D: "increase FIO2 to 1.0 and the flow to 15 L/min",
		},
		answer: "C",
		answer_explanation:
			"This question is about recognizing that the patient is not receiving adequate inspiratory flow, or that the inspiratory demanded the patient is not being met. Some simple math will show you that the patient's minute ventilation is higher than the total flow being received from the large volume nebulizer. 800 mL multiplied by 30 times a minute is equal to a minute ventilation of 24 L per minute. The ratio of air to oxygen at 60% is 1:1. 1 +1 = 2. Next, 2 x 10 L/min = total gas flow of 20 L/min., 10 L/min less than the inspiratory demand of the patient. Although the question does not ask this, the remedy for this situation would be to implement a tandem device, or another side-by-side large volume nebulizer. This would double the total gas flow to the patient and exceed the inspiratory demand, which is what we want.",
	},
	{
		question:
			"The physician orders a change in I:E ratio from 1:2 to 1:4 for a COPD patient receiving volume-cycled mechanical ventilation. Which of the following accommodates the physician's request if the mandatory rate is not changed?",
		options: {
			A: "decrease inspiratory flow rate",
			B: "increase inspiratory time",
			C: "decrease inspiratory time",
			D: "decrease expiratory time",
		},
		answer: "C",
		answer_explanation:
			"To decrease the I:E ratio, expiratory time must be increased by decreasing inspiratory time. This is done by decreasing inspiratory flow rate.",
	},
	{
		question:
			"For a patient receiving volume-controlled ventilation in the assist/control mode, the starting of the inhalation cycle before the expiratory flow rate returns to zero would result in which of the following?",
		options: {
			A: "atelectasis",
			B: "autoPEEP",
			C: "alveolar collapse",
			D: "decreased FRC",
		},
		answer: "B",
		answer_explanation:
			"When a patient on a ventilator is unable to exhale completely before the inhalation cycle starts, the result will be air-trapping, which will result in autoPEEP.",
	},
	{
		question:
			"While assisting a physician during a bronchoscopy procedure, the therapist notices bright red blood in the specimen tube. The therapist should prepare which of the following NEXT?",
		options: {
			A: "cold normal saline",
			B: "epinephrine",
			C: "Heparin",
			D: "Atropine",
		},
		answer: "B",
		answer_explanation:
			"The installation of epinephrine down the bronchoscope to an actively bleeding site will help to immediately stop the bleeding. This should be the first step in treating a bleed in the bronchial tree. The next step should be to compress the site with the bronchoscope followed by the insertion of the Fogarty catheter to tamponade the bleeding site.",
	},
	{
		question:
			"A respiratory therapist is asked to assist a physician with a bronchoscopy procedure on a patient who is ventilator dependent and requires high levels of PEEP. Which of the following equipment should be used?",
		options: {
			A: "Bodai adapter",
			B: "closed in-line suction catheter",
			C: "manual PEEP valve",
			D: "Magill forceps",
		},
		answer: "A",
		answer_explanation:
			"The device that may be attached to the end of the ET tube that allows PEEP to be maintained during a bronchoscopy is called a Bodai adapter. This adapter attaches to then of the ET tube and has a small port that fits snugly around the broncoscope tube.",
	},
	{
		question:
			"A patient receiving 0.5 mL Albuterol by small volume nebulizer complains of tingling fingers, nervousness, and heart palpitations. The therapist should",
		options: {
			A: "instruct the patient in performing shallow inspirations",
			B: "reduce future treatment dosage to 0.25 mL",
			C: "have the patient pause at the top of each breath",
			D: "decrease dosage to 0.15 mL",
		},
		answer: "B",
		answer_explanation:
			"When a patient is experiencing an adverse reaction from a breathing treatment or any other procedure, the first action should be to stop therapy. However, this is not offered in this question. The next option would be to modify the therapy to accomplish the same objective. In this case the 0.5 mL of albuterol may be reduced to another acceptable adult dosage, 0.25 mL. Keep in mind that you can reduce a dosage only if the new dosage is still in the acceptable therpeutic range. For instance, if the patient was receiving 0.25 mL of albuterol, it would be unacceptable to cut that dose in half. In this case, it is acceptable because the adult therapeutic range of albuterol is 0.25-0.5 mL.",
	},
	{
		question:
			"For which of the following is the respiratory therapist observing if obtaining a series of oblique chest radiographs?",
		options: {
			A: "pneumothorax",
			B: "pneumonia",
			C: "cancerous mass in the lung",
			D: "pleural effusion",
		},
		answer: "C",
		answer_explanation:
			"The purpose of a series of chest x-rays taken from different angles is to increase the three dimensionality of that which is seen in the lung. Pneumonia, secretions, a pneumothorax, and pleural effusion do not require a three-dimensional examination. However, a cancerous mass or object inside the lung is three-dimensional in nature. For instance, if you saw a round object from a PA x-ray in the lung, and then you obtained a lateral x-ray and the object was round from that point of view as well, you know the shape of the object is spherical. Spherical objects in the lung are usually associated with cancerous masses.",
	},
	{
		question:
			"A spiral CT scan would be most helpful in evaluating which of the following?",
		options: {
			A: "pneumonia",
			B: "asbestosis",
			C: "atelectasis",
			D: "mass in the left lobe",
		},
		answer: "D",
		answer_explanation:
			"A spiral CT scan is a way of examining the lungs in a three-dimensional fashion. So, it would be most useful for evaluating a mass in the left lobe. Pneumonia, atelectasis, and asbestos do not have three-dimensional qualities and therefore do not need to be observed through a spiral CT scan.",
	},
	{
		question:
			"A 65-kg (143-lb) patient with pneumonia is receiving mechanical ventilator support by a Servo adult ventilator on the following settings with corresponding arterial blood gas values:\nMode Assist/control Mandatory rate 10/minVT 700 mLFIO2 0.5 pH 7.48PaCO2 33 mmHgPaO2 98 mmHgHCO3- 24 mEq/LBE 0 mEq/L\nWhich of the following actions is most appropriate?",
		options: {
			A: "decrease mandatory rate",
			B: "decrease tidal volume",
			C: "decrease FIO2",
			D: "increase tidal volume",
		},
		answer: "B",
		answer_explanation:
			"The blood gas in this case shows acute respiratory alkalosis caused by over-ventilation from the ventilator. Decreasing mandatory rate would be appropriate except the CO2 is off target by only 2 mmHg. But, there is a more significant problem. The patient only weighs 65 kg which means the maximum tidal volume size should be 650 mL. The patient's set tidal volume is 700 mL. This is too high and should be adjusted immediately to reduce the chance of barotrauma. This will also decrease and eliminate the alkalosis.",
	},
	{
		question:
			"A patient is undergoing a full cardiopulmonary arrest. The patient is intubated and is being monitored with an infrared capnographic device. PetCO2 data is showing 3%. Which of the following is most appropriate?",
		options: {
			A: "obtain PaCO2 by a Douglas bag",
			B: "clean the infrared device",
			C: "increase alveolar ventilation",
			D: "recalibrate the capnometer",
		},
		answer: "C",
		answer_explanation:
			"An end-tidal CO2 of only 3% is low. This indicates poor ventilation. In looking at the answers the best one is poor alveolar perfusion. A clean infrared device does not relate and the calibration of the capnograph is not pertinent.",
	},
	{
		question:
			"Which of the following can be examined to initially determine the approximate position of the oral endotracheal tube?",
		options: {
			A: "lateral neck radiograph",
			B: "diaphragmatic excursion",
			C: "ET tube markings at the lips",
			D: "chest radiograph",
		},
		answer: "C",
		answer_explanation:
			"When initially examining for proper positioning of the endotracheal tube, the first option should be to perform the quickest examination as possible. In this case the best answer would be to visualize the ET tube markings at the lips. Obtaining an x-ray of any sort would be too time-consuming. Examining diaphragmatic excursion would not be helpful at all.",
	},
	{
		question:
			"Which of the follow data, if observed, would indicate proper positioning of an oral endotracheal tube?",
		options: {
			A: "end of ET tube 2 cm below the aortic knob",
			B: "radiologist reports the ET tube is 1 inch above the carina",
			C: "end of ET tube is 6 cm above the carina",
			D: "poor left chest symmetry",
		},
		answer: "B",
		answer_explanation:
			"A properly placed endotracheal tube will cause even chest rise and symmetry during ventilation. ET tube markings will be in the low 20s, if an oral intubation. A chest x-ray will show the end of the tube 2 to 5 cm above the carina or level with the aortic arch. Thus, all options indicate inappropriate positioning of the endotracheal tube.",
	},
	{
		question:
			"A child has been extubated and is demonstrating mild stridor. Which of the following agents would be most helpful to administer by aerosol?",
		options: {
			A: "Aminophylline",
			B: "racemic epinephrine",
			C: "Albuterol",
			D: "Atropine",
		},
		answer: "B",
		answer_explanation:
			"A child who has mild stridor can be treated by one of two ways - administration of racemic epinephrine or administration of a cool aerosol. Moderate stridor requires the use of racemic epinephrine and severe or marked stridor would require intubation.",
	},
	{
		question:
			"A respiratory therapist is asked to assist a physician for a diagnostic bronchoscopy on a mechanically ventilated patient. What special equipment should be brought to the room?",
		options: {
			A: "ventilator circuit bronchoscopy adapter",
			B: "laryngoscope and blade",
			C: "ventilator circuit endotracheal tube wedge",
			D: "Wrights respirometer",
		},
		answer: "A",
		answer_explanation:
			"A bronchoscopy can be done on an intubated patient with the use of an adapter that permits the entrance of the bronchoscope while maintaining assisted ventilation around the scope.",
	},
	{
		question:
			"Which of the following data is needed to calculate cardiac output?",
		options: {A: "QS/QT", B: "stroke volume", C: "A-aDO2", D: "VO2"},
		answer: "B",
		answer_explanation:
			"Cardiac output may be calculated using stroke volume and multiplying it by the heart rate. Of the options listed, only these two would be helpful.",
	},
	{
		question:
			"Which of the following volumes is being observed when a patient is using a volume-type incentive spirometer?",
		options: {A: "ERV", B: "IC", C: "TLC", D: "IRV", F: ""},
		answer: "B",
		answer_explanation:
			"A volume type incentive spirometer measures inspiratory capacity or IC.",
	},
	{
		question:
			"For which of the following conditions is chest wall oscillation therapy most beneficial?",
		options: {
			A: "drug overdose",
			B: "Guillain-Barre syndrome",
			C: "cystic fibrosis",
			D: "ARDS",
		},
		answer: "C",
		answer_explanation:
			"The purpose of chest wall oscillation is to help clear secretions. Of these options, only cystic fibrosis is the disease where the clearing of secretions is a major concern.",
	},
	{
		question: "Which of the following is needed to determine C(a-v)O2?",
		options: {A: "VD/VT", B: "PvO2", C: "hemoglobin", D: "PaO2"},
		answer: "C",
		answer_explanation:
			"For this question you must memorize the components that make up CaO2. They are: hemoglobin, PaO2, and SaO2. Additionally, once you know the CaO2, simply subtract the CvO2 to get C(a-v)O2.",
	},
	{
		question:
			"Arterial blood gases on a patient in the cardiac intensive care unit are as follows:\npH 7.10 PaCO2 52 mmHgPaO2 65 mmHgHCO3- 15 mEq/LBE -9 mEq/L\nWhich of the following represents an accurate interpretation of these results?",
		options: {
			A: "respiratory acidosis",
			B: "metabolic acidosis",
			C: "combined metabolic and respiratory acidosis",
			D: "metabolic compensated respiratory acidosis",
		},
		answer: "C",
		answer_explanation:
			"This kind of question can be difficult because you have to know exactly how much the pH will move given a certain amount of CO2. The answer to that question is that pH will decrease by 0.1 for every 10 mmHg of CO2. In this case, the CO2 is approximately 10 mmHg above normal. Therefore the pH should be roughly 0.1 below its normal, or 7.30. However, the pH in this blood gas is 7.10. This means that the respiratory system plays only a part in the acidodic pH but there must be metabolic involvement because the pH is lower than what would be predicted for the CO2.",
	},
	{
		question:
			"In spite of repeated attempts, a respiratory therapist is unable to obtain successful quality control values on a blood gas analyzer. The therapist should",
		options: {
			A: "inform the medical director",
			B: "place the machine in service but monitor closely",
			C: "continue running quality control samples",
			D: "report the problem to the supervisor",
		},
		answer: "D",
		answer_explanation:
			"This question is really about chain of command. If the therapist has a problem of any sort that cannot be resolved, whether that is with the machine or a patient, the next immediate person the therapist should talk to is the supervisor. After the supervisor, the medical director may be appropriate. In this case reporting the problem to the supervisor is the next logical step.",
	},
	{
		question:
			"A therapist is unable to obtain a reading with a galvanic-type oxygen analyzer when attempting to measure oxygen percentage inside an isolette while the red warning flag is active. The therapist should?",
		options: {
			A: "replace the batteries",
			B: "change the electrode",
			C: "discontinue the red-flag warning system",
			D: "replace the electrolyte solution",
		},
		answer: "B",
		answer_explanation:
			"When a galvanic-type oxygen analyzer fails to produce a reading, it is likely a problem with the power source. These type of analyzers do not have batteries. The electrode is in essence a battery. So, the solution is to change the electrode. The electrode is also called the fuel cell.",
	},
	{
		question:
			"Four hours after a quadruple coronary artery bypass graft, a patient's blood pressure is 90/50 mmHg and the patient is ashen in color. The following data is also available:\nPAP 10 mmHg PCWP 5 mmHgCVP 1 mmHg\nThe patient could benefit most from which of the following?",
		options: {
			A: "Lasix (furosemide)",
			B: "administer normal saline, IV",
			C: "an echocardiogram",
			D: "administer 2 units of blood",
		},
		answer: "D",
		answer_explanation:
			"In this problem blood pressure is reduced as well as all other hemodynamic values. When hemodynamic values are all low, especially CVP, the patient is dehydrated and requires fluids. Additionally, it is noted that the patient has had recent surgery and because the blood pressure is low it is more likely the patient is hemorrhaging. The most likely solution, therefore, is the administration of blood. Although not mentioned, it would also be appropriate to send this patient back to surgery to be examined for a leaky vessel.",
	},
	{
		question:
			"A patient is receiving non-invasive positive pressure ventilation by mask with an IPAP of 16 cmH2O and an EPAP of 8 cmH2O. Corresponding blood gas data is as follows:\npH 7.29 PaCO2 51 mmHgPaO2 108 mmHgHCO3- 24 mEq/LBE -0 mEq/L\nWhich adjustment is most appropriate?",
		options: {
			A: "decrease EPAP and IPAP",
			B: "increase IPAP and EPAP",
			C: "decrease EPAP only",
			D: "increase IPAP only",
		},
		answer: "C",
		answer_explanation:
			"In this case there are two problems: poor ventilation, as manifested by high CO2, and over oxygenation, as manifested by a high PaO2. Both problems may be fixed with one change which is to lower the EPAP setting. Lowering the EPAP will decrease oxygenation but will also increase ventilation by increasing the distance between the EPAP and IPAP settings.",
	},
	{
		question:
			"A patient has the following input/output history and other clinical information:\nYesterday Today IN 1900 cc1600 ccOUT 2200 cc1900 ccThese data would result in which of the following?",
		options: {
			A: "decreasing pulmonary vascular resistance",
			B: "increase in left end-diastolic pressure",
			C: "increase in CVP",
			D: "decrease in V/Q mismatching",
		},
		answer: "A",
		answer_explanation:
			"This data shows that the patient is putting out more fluid than he or she is taking in. This means that the patient is becoming dehydrated and dehydration results in lower cardiac output. To answer this question one must be familiar with the formula to determine pulmonary vascular resistance. PVR is determined by subtracting the PCWP from the PAP and dividing by cardiac output. If you divide this number by a lower cardiac output the result is a higher number.",
	},
	{
		question:
			"A patient with fulminating pulmonary edema has the following data obtained from a Swan-Ganz pulmonary artery catheter:\nCVP 10 mmHg PAP 25 mmHgPCWP 15 mmHgThe patient would benefit most from which of the following?",
		options: {
			A: "loop diuretics",
			B: "administration of whole blood",
			C: "Penicillin-class antibiotics",
			D: "blood expanding agents",
		},
		answer: "A",
		answer_explanation:
			"Hemodynamic values are all increased. This is most closely associated with over hydration of the patient, or hypervolemia. The solution to this is to administer a diuretic medication. The most appropriate medication is Lasix, which is a loop diuretic.",
	},
	{
		question:
			"An adult patient in the emergency room is wheezing bilaterally after multiple metered dose inhaler treatments with Albuterol at home. The patient may best benefit from which of the following?",
		options: {
			A: "aerosolized Pulmicort (Budesonide)",
			B: "aerosolized Albuterol and Atrovent",
			C: "continuous bronchodilator therapy with Albuterol at 3 mg/hr",
			D: "aerosolized Atropine",
		},
		answer: "B",
		answer_explanation:
			"For this patient further bronchodilator therapy is most appropriate. Continuous bronchodilator therapy would also be appropriate but the option offers only 3 mg per hour, which is subtherareutic.",
	},
	{
		question: "L/min/m2 is the unit of measure for",
		options: {
			A: "stroke volume",
			B: "cardiac output",
			C: "cardiac index",
			D: "systemic vascular resistance",
		},
		answer: "C",
		answer_explanation:
			"Cardiac index is cardiac output divided by body surface area. Or if BSA is unknown, the cardiac index is estimated by dividing cardiac output by two. The unit of measure is L/min per square meter.",
	},
	{
		question:
			"pH 7.38 PaCO2 42 mmHgPaO2 76 mmHgHCO3- 24 mEq/LBE 0 mEq/L\nWhich of the following supplemental oxygen levels is most appropriate?",
		options: {
			A: "2 L/min nasal cannula",
			B: "5 L/min nasal cannula",
			C: "non-rebreathing mask",
			D: "Venturi mask at 30%",
		},
		answer: "B",
		answer_explanation:
			"A patient who is showing signs of hypoxemia should receive supplemental oxygen. If the patient is not a COPD patient and the situation is not an emergency, then the proper supplemental oxygen is an adult therapeutic dose, which is 40% to 55%. Of the options available only 5 L/min nasal cannula will approach this. Other options are either insufficient or too much.",
	},
	{
		question: "Which of the following is considered objective information?",
		options: {
			A: "chest pain",
			B: "spontaneous tidal volume",
			C: "dysphagia",
			D: "dyspnea",
		},
		answer: "B",
		answer_explanation:
			"Subjective information are those data that must be reported by the patient. This kind of data is also known as symptoms. Data that can be observed independent of the patient's input is known as objective information, otherwise called signs. Of the options offered, only spontaneous tidal volume can be measured directly by the practitioner. Chest pain, dyspnea, and dysphagia are all examples of subjective information because they must be reported by the patient.",
	},
	{
		question: "What is the primary purpose for a helium dilution test?",
		options: {
			A: "directly measure TLC",
			B: "determine FRC",
			C: "quantify alveolar deadspace",
			D: "determine alveolar diffusion capacity",
			F: "On the NBRC exam the primary purpose of the helium dilution (and nitrogen washout) test is to determine FR",
			G: "",
		},
		answer: "B",
		answer_explanation:
			"The purpose of the helium dilution test is to determine lung volumes such as TLC, RV, and FRC. On the NBRC exam the primary purpose of the helium dilution (and nitrogen washout) test is to determine FRC.",
	},
	{
		question:
			"A patient with myasthenia gravis receiving volume-controlled ventilation is able to exhale a vital capacity of 2.4 L, has a spontaneous VT of 450 mL and is able to achieve -38 cmH2O on the MIP manometer. As the patient becomes alert, the respiratory therapist should recommend",
		options: {
			A: "sedating the patient, continuing to monitor",
			B: "discontinue ventilatory support",
			C: "administer a maintenance dose of Tensilon",
			D: "checking VC q4 hours",
		},
		answer: "B",
		answer_explanation:
			"Because a patient with myasthenia gravis has no pervasive pulmonary problems, they may be weaned or removed from mechanical ventilatory support quickly, once their paralysis has dissipated. Further, ventilatory parameters show that the patient is ready to wean or be removed from the ventilator.",
	},
	{
		question:
			"Which of the following patients or conditions would benefit most from pressure control ventilation?",
		options: {A: "myasthenia gravis", B: "ARDS", C: "pneumonia", D: "COPD"},
		answer: "B",
		answer_explanation:
			"Pressure control ventilation is primarily helpful for patients with adult respiratory distress syndrome. They require significant pressures to deliver volumes. When pressures get over 50 cmH2O, switching to pressure control ventilation will help to reduce barotrauma and increase alveolar ventilation.",
	},
	{
		question:
			"A 74-year old male has ventricular tachycardia. The patient is not alert and will not respond to verbal commands. A pulse is not palpable. The respiratory therapist will respond by",
		options: {
			A: "administering sodium bicarbonate",
			B: "cardioverting the patient at 100 joules",
			C: "performing defibrillation at 150 joules biphasic",
			D: "administering aminophylline, IV",
		},
		answer: "C",
		answer_explanation:
			"Ventricular tachycardia without a pulse is treated by defibrillation that 300-360 Joules monophasic and about 150 Joules biphasic If the patient has a pulse with ventricular tachycardia, cardioversion at 50-100 J would be appropriate. Another note: defibrillation occurs with synchronization off while cardioversion requires that the synchronization be set to active.",
	},
	{
		question:
			"A patient in the cardiac intensive care unit has a Swan-Ganz pulmonary artery catheter in place. The following data is available:\nCVP 6 torr mPAP 18 torrPCWP 8 torrWhich of the following most likely represents the patient's condition?",
		options: {
			A: "dehydration",
			B: "cor pulmonale",
			C: "left heart failure",
			D: "pulmonary hypertension",
		},
		answer: "D",
		answer_explanation:
			"CVP is slightly high and mPAP is also high, indicating there is no problem with the right heart. mPAP is high but PCWP is normal, indicating improper blood flow through the pulmonary vasculature. This means there is a problem in the lungs. The answer most closely related is pulmonary hypertension. Cor Pulmonale is a problem with the right heart and left heart failure is obviously a problem in the left heart.",
	},
	{
		question:
			"Hypovolemia would first be manifested in which of the following values?",
		options: {A: "PVR", B: "CVP", C: "PAP", D: "PCWP"},
		answer: "B",
		answer_explanation:
			"Hypovolemia is shown hemodynamically by a reduction in all hemodynamic values including CVP, PAP, PCWP, and cardiac output. Among these values CVP is the first and most significant indicator when fluid levels in the body are high or low. Remember, CVP may be known by other names such as, right atrial pressure, right side preload, right ventricular filling pressure, and right ventricular end-diastolic pressure.",
	},
	{
		question:
			"Left heart failure would be manifested in which of the following values?",
		options: {
			A: "cardiac output and wedge pressure",
			B: "MAP and SVR",
			C: "mPAP and wedge pressure",
			D: "CVP and mPAP",
		},
		answer: "A",
		answer_explanation:
			"The function of the left heart, specifically the left ventricle, is best assessed hemodynamically by looking at those values that precede and come after the left heart. In this case pulmonary capillary wedge pressure and cardiac output (or cardiac index) are the values found before and after the left heart.",
	},
	{
		question:
			"Which of the following hemodynamic values is associated with the function of the left heart?",
		options: {
			A: "systemic vascular resistance",
			B: "central venous pressure",
			C: "mean pulmonary artery pressure",
			D: "pulmonary capillary wedge pressure",
		},
		answer: "D",
		answer_explanation:
			"Of the four hemodynamic pressures, pulmonary capillary wedge pressure is most related to the function of the left heart. Central venous pressure is most related to the right heart and the general fluid status of the patient.",
	},
	{
		question:
			"A patient is on 60%/40% heliox therapy by nonrebreathing mask. If flowing through an oxygen flow meter, what is the actual flow of the mixture if the flow meter indicates 10 L/min?",
		options: {A: "14 L/min", B: "10 L/min", C: "16 L/min", D: "18 L/min"},
		answer: "A",
		answer_explanation:
			"When helium-oxygen mixtures are run through flow meters that are intended for oxygen only, the indicated flow on the flow meter is inaccurate. This is because the helium-oxygen mixture is less viscous and does not push the indicator ball up as much as does oxygen. In this case, a correction factor must be used depending upon the mixture percentages. For an 80/20% mixture a correction factor of 1.8 must be used. A 70/30% mixture has a correction factor of 1.6 and a 60/40% mixture has a correction factor of 1.4. In this problem the 60/40% mixture factor of 1.4 must be multiplied by the indicated flow on the oxygen flow meter to calculate actual total gas flow. When we do this we get a total gas flow of 14 L/min.",
	},
	{
		question:
			"A post-operative patient was able to achieve an inspiratory capacity of 2000 mL prior to surgery. After repeated attempts, the patient is only able to achieve 400 mL. Which of the following represents an appropriate patient goal?",
		options: {A: "1600 mL", B: "400 mL", C: "500 mL", D: "1000 mL"},
		answer: "C",
		answer_explanation:
			"The proper goal for incentive spirometry postoperatively is one half of what was achieved preoperatively. However, if the patient is unable to come close to that number, modification of the goal is appropriate. Since the incentive spirometer is supposed to incentivize or encourage its continued use, the most appropriate goal would be a number just slightly higher than the number the patient is able to achieve.",
	},
	{
		question:
			"A patient receiving oxygen by non-rebreathing mask is breathing rapidly and deeply. The reservoir bag collapses completely with each inspiration. The therapist should",
		options: {
			A: "increase flow",
			B: "check for adequate mask seal",
			C: "continue current therapy",
		},
		answer: "[][][]",
		answer_explanation: "[][][]",
	},
	{
		question:
			"A patient will be receiving short-term mechanical ventilatory support after surgery. Which of the following methods of humidification is appropriate?",
		options: {
			A: "centrifugal nebulizer",
			B: "cool, passover humidification",
			C: "large volume nebulization",
			D: "HME",
		},
		answer: "D",
		answer_explanation:
			"When providing humidity to the patient on a ventilator, because the natural humidification processes of the body are bypassed, 100% humidity must be provided through the ventilator. Only heated humidification can accomplish this. Non-heated passover humidification is inadequate. An HME is meant for short-term use only (a few hours). A centrifugal and large volume nebulizers are not devices used with the mechanical ventilation.",
	},
	{
		question:
			"A 100-kg (220-lb), 6-ft, 2-in (188-cm) adult male is orally intubated with a 7.0-mm endotracheal tube. The therapist reports difficulty removing secretions with the suction pressure set to 120 mmHg. The respiratory therapist will FIRST",
		options: {
			A: "switch to a 9.0-mm ET tube",
			B: "lubricate the suction catheter",
			C: "decrease suction pressure to 100 mmHg",
			D: "increase suction pressure to 130 mmHg",
		},
		answer: "A",
		answer_explanation:
			"The problem we should recognize first, in this case, is it the patient's ideal body weight is significant. The ET tube used is likely too small. 100 kg male should have an ET tube size of about 9 mm to 10 mm. Use of a larger tube will allow the use of a larger suction catheter, which will drastically improve suctioning efficiency.",
	},
	{
		question:
			"Which pressure should not be exceeded when adding air to an oral endotracheal tube cuff?",
		options: {A: "20 mmHg", B: "30 mmHg", C: "15 mmHg", D: "25 mmHg"},
		answer: "A",
		answer_explanation:
			"When inflating an oral endotracheal tube cuff the pressure not to be exceeded is 25 cmH2O. More commonly, the exam uses the units of mmHg or torr. In those units, the pressure should not exceed 20 mmHg or torr. The reason for this limitation is that the capillary bed in the trachea has a mean pressure of about 20 mmHg. If the cuff pressure exceeds that, there is a risk of restricting blood flow and causing damage to the tissues of the trachea.",
	},
	{
		question:
			"A 4-year-old patient in the emergency room (E.R.) shows significant signs of respiratory distress including inspiratory stridor and tachypnea. The patient is drooling. The physician feels the patient has acute epiglottitis and orders intubation. Which of the following methods of intubation would be most appropriate?",
		options: {
			A: "intubate with a bronchoscope",
			B: "nasal intubation with magill forceps",
			C: "perform oral intubation with a stylet",
			D: "visualize the oropharynx with a tonsil suction device",
		},
		answer: "A",
		answer_explanation:
			"Acute epiglottitis is characterized by significant inflammation in the upper airway. If intubation is opted, the respiratory care practitioner must use extreme caution and be careful not to increase the inflammation by probing or touching the tissues in the upper airway. This is considered to be a complicated intubation. Thus, the patient must either receive a tracheostomy or be intubated with direct visualization through a bronchoscope.",
	},
	{
		question:
			"While performing minimum occluding volume technique on an 80-kg (176-lb) male with an 8.0-mm tube, the therapist auscultates a high-pitched sound over the neck at the top of each mechanical breath. The therapist should",
		options: {
			A: "remove air from the cuff",
			B: "obtain a new ET tube",
			C: "record results and monitor the patient",
			D: "add air to the cuff",
		},
		answer: "D",
		answer_explanation:
			"When performing minimum seal or minimum occluding volume technique to inflate and ET tube cuff, the therapist should not be able to auscultate any sound over the trachea at the top of each mechanical breath. If the sound is audible, more air is needed in the ET tube cuff. This ensures only a minimal amount of pressure is placed on the trachea wall. If a minimum leak is permitted, then the technique is called a minimum leak technique and has the same purpose.",
	},
	{
		question:
			"A patient on the medical floor is receiving supplemental oxygen at 4 L/min by nasal cannula. A pulse oximeter is showing an SPO2 of 74% with a heart rate of 68 bpm. The respiratory therapist determines the pulse by palpation is 98 bpm. The therapist should",
		options: {
			A: "replace the electrode with a new one",
			B: "switch the patient to 50% Venturi mask",
			C: "increase flow rate to 5 L/min",
			D: "try a different location with the pulse ox probe",
		},
		answer: "D",
		answer_explanation:
			"When a pulse oximeter is reading a low oxygen saturation but has a different heart rate compared to that which can be palpated, the oxygen saturation reading is in error and should not be reported. The cause for this is likely poor peripheral perfusion caused by a number of factors. But, the solution is to first try a different location with the pulse ox probe.",
	},
	{
		question:
			"A patient receiving volume-controlled ventilation has an infrared CO2 detector attached at the end of the ET tube. The capnograph shows a PetCO2 of 47 torr. The respiratory therapist should",
		options: {
			A: "increase expiratory time",
			B: "continue current therapy",
			C: "increase inspiratory flow rate",
			D: "increase minute ventilation",
		},
		answer: "D",
		answer_explanation:
			"An end-tidal CO2 of 47 mmHg is consistent hypoventilation.",
	},
	{
		question:
			"Which of the following would be a sufficient reason to discontinue a spontaneous breathing trials",
		options: {
			A: "blood pressure increases from 110/80 to 118/88 mmHg",
			B: "respiratory rate increases from 18 to 26",
			C: "heart rate increases from 78 to 92 bpm",
			D: "development of confusion or disorientation",
		},
		answer: "D",
		answer_explanation:
			"In addition to monitoring rate, blood pressure, oxygen saturation, and heart rate, the patient's mental status should also be monitored when doing T-piece trials or performing any kind of ventilator weaning. In this case, the patient has developed confusion and has become disoriented to time, person, or place. Any confusion or disorientation noted during any weaning process is an indication the weaning has failed and should be halted.",
	},
	{
		question:
			"Which of the following is needed to calculate alveolar oxygen tension?",
		options: {
			A: "VD/VT, PAO2",
			B: "PetCO2 and PaO2",
			C: "BP and FIO2",
			D: "QS/QT, deadspace",
		},
		answer: "C",
		answer_explanation:
			"To answer this question one must know the formula for the alveolar air equation. Barometric pressure, FIO2, and PaO2 are all included in the formula.",
	},
	{
		question:
			"A patient with COPD is receiving volume-controlled ventilation with an I:E ratio of 1:3. A chest radiograph shows increased air-trapping. The physician orders a change in the I:E ratio to decrease air-trapping. Which of the following will accomplish this?",
		options: {
			A: "decrease expiratory time",
			B: "increase inspiratory time",
			C: "increase inspiratory flow rate",
			D: "decrease inspiratory flow rate",
		},
		answer: "C",
		answer_explanation:
			"A patient with COPD receiving mechanical ventilation benefits most from prolonged expiratory time. This allows exhalation of gases and prevents further air trapping. To increase expiratory time, inspiratory time must be decreased. That is best accomplished by increasing inspiratory flow rate. That will leave more time for the expiratory phase to occur and for the patient to exhale more fully.",
	},
	{
		question:
			"Immediately after inserting a nasal pharyngeal airway, the patient begins to cough uncontrollably. Which of the following is the most likely cause?",
		options: {
			A: "too much water-soluble lubricant was used",
			B: "airway diameter is too large",
			C: "airway is too long",
			D: "patient has significant sputum in the upper airway",
		},
		answer: "C",
		answer_explanation:
			"When inserting a nasopharyngeal airway (trumpet), the proper length is of primary concern. Proper length can be determined by matching the length of the trumpet with the distance between the ear lobe and the nasal septum. When inserted, if the patient begins to cough uncontrollably, this means the nasal trumpet is too long and is entering too far into the sensitive airway. The solution is to remove the trumpet and insert shorter one.",
	},
	{
		question:
			"Which of the following is most indicative of right heart failure?",
		options: {
			A: "increased PAP, decreased cardiac output",
			B: "increased CVP, decreased PAP",
			C: "increased PAP, decreased PCWP",
			D: "decreased CVP, decreased PAP",
		},
		answer: "B",
		answer_explanation:
			"In order to assess the function of the right heart hemodynamically, one must look to those hemodynamic values immediately preceding and following the right heart. In this case, CVP and PAP. If CVP is increased and PAP is decreased or is normal, blood is having difficulty transitioning through the right heart. Right heart failure and core pulmonale are associated with this condition.",
	},
	{
		question:
			"A patient in the emergency department (ED) becomes unconscious and has a cardiac rhythm consistent with asystole. The respiratory therapist should IMMEDIATELY",
		options: {
			A: "confirm asystole in a second lead",
			B: "begin chest compressions",
			C: "administer epinephrine",
			D: "administer Atropine",
		},
		answer: "A",
		answer_explanation:
			"The primary treatment for a cardiac rhythm asystole is chest compressions. However, prior to administration of chest compressions the asystole rhythm must be confirmed. This should be done by ensuring the leads are properly placed and that the rhythm can be seen in the second lead.",
	},
	{
		question:
			"An adult patient with asthma is receiving Xopenex by small volume nebulizer T.I.",
		options: {
			A: "at a dosage of 0.63 mg. The patient complains of dizziness, tingling in his fingers, and anxiety with each treatment. The therapist should",
			B: "decrease dosage to 0.31 mg",
			C: "switch to Atropine sulfate",
			D: "switch to Albute",
		},
		answer: "[][][]",
		answer_explanation: "[][][]",
	},
	{
		question:
			"An 84-kg (185-lb) 6-ft 1-in (185-cm) male is receiving mechanical ventilation by a volume-controlled ventilator in the assist/control mode on the following settings:\nMandatory rate 16 VT 600 mLFIO2 0.5PEEP 10 cmH2O ABGs pH 7.46PaCO2 34 mmHgPO2 100 mmHgHCO3- 24 mEq/LBE 0 mEq/L\nWhich of the following represents the most appropriate action?",
		options: {
			A: "decrease PEEP",
			B: "decrease VT to 500 mL",
			C: "add 50 mL deadspace",
			D: "decrease rate to 10",
		},
		answer: "C",
		answer_explanation:
			"In this problem the CO2 is slightly low. When we need to raise CO2 there are three choices - decreasing tidal volume, decreasing rate, or adding dead space. In this case, decreasing the rate from 16 to 10 to change CO2 by only a few points is too drastic. A tidal volume of 500 mL is less than the patient's range based on their predicted body weight. The best option is to add 50 mL of dead space.",
	},
	{
		question:
			"An 84-kg (185-lb) 6-ft 1-in (185-cm) male is receiving mechanical ventilation by a volume-controlled ventilator in the assist/control mode on the following settings:\nMandatory rate 18/min VT 600 mLFIO2 0.4PEEP 5 cm H2O ABGs pH 7.28PaCO2 56 mm HgPO2 71 mm HgHCO3- 27 mEq/LBE +3 mEq/L\nWhich of the following represents the most appropriate action?",
		options: {
			A: "increase FIO2 to 0.5",
			B: "increase rate to 20",
			C: "increase VT to 650",
			D: "increase PEEP to 8 cmH2O",
		},
		answer: "B",
		answer_explanation:
			"Arterial blood gases show the patient is not ventilating and is under oxygenating. Because ventilation should be corrected first it is appropriate to either increase the tidal volume or increase the rate. In this case the PaCO2 is off by more than 4 mm Hg and therefore should be addressed only with an increase in rate.",
	},
	{
		question:
			"Which of following calculations will determine inspiratory capacity (IC)?",
		options: {
			A: "ERV + VT + IRV",
			B: "TLC - FRC",
			C: "TLC - VT - ERV",
			D: "IRV - TLC - RV",
			F: "",
		},
		answer: "B",
		answer_explanation:
			"These types of questions can be difficult. Memorizing pulmonary function volume chart is a good place to start. To find a solution to this problem you generally have to take each answer one by one, do the calculation, and determine if the correct result can be achieved. In this case, inspiratory capacity can be calculated by subtracting the FRC from the TLC.",
	},
	{
		question:
			"While transporting at patient from the emergency department (ED) to the intensive care unit (ICU), the respiratory therapist suspects the oral endotracheal tube has changed position. The quickest way to assess the ET tube position would be to",
		options: {
			A: "obtain a chest x-ray",
			B: "auscultate breath sounds",
			C: "visualize diaphragmatic excursion",
			D: "analyze end-tidal CO2",
		},
		answer: "B",
		answer_explanation:
			"There are many ways to determine the location or position of the ET tube. The question is asking for the quickest way. Of the options offered, auscultation of breath sounds would provide the most immediate pertinent data. If an option such as examination of equal and bilateral chest rise were offered, that option would be even better because it is visual in nature and therefore quicker.",
	},
	{
		question:
			"A pressure-volume ventilator graphic is observed on a patient receiving mechanical ventilation. The patient's estimated dynamic compliance is",
		options: {
			A: "44 mL/cmH2O",
			B: "20 mL/cmH2O",
			C: "50 mL/cmH2O",
			D: "32 mL/cmH2O",
		},
		answer: "B",
		answer_explanation:
			"Most of the time we are given numbers to calculate the patient's dynamic compliance. In this case, however, we are given a graph. Examination of the graph reveals a peak pressure of 40 cmH2O. When we take the volume, 800 mL, and divide it by 40 cmH2O, we get a dynamic compliance of 20 mL/cmH2O.",
	},
	{
		question:
			"Which of the following represents the most effective method of preventing nosocomial infections in a hospital setting?",
		options: {
			A: "use of N-95 respirators",
			B: "use of alcohol wipes on equipment",
			C: "use of sterile gloves",
			D: "diligent hand washing",
		},
		answer: "D",
		answer_explanation:
			"Nosocomial infections are those that are spread in hospitals among patients. The most common cause of nosocomial infection is poor handwashing among healthcare givers. Thus, the most effective method at preventing nosocomial infections is to encourage diligent and proper handwashing techniques.",
	},
	{
		question:
			"While transporting a patient on a fixed-wing aircraft, the therapist notices the actual respiratory rate of the transport ventilator is less than the set rate and is gradually decreasing. Which of the following is the likely cause?",
		options: {
			A: "effects of pressure associated with the curvature of the earth",
			B: "defective ventilator",
			C: "effects of altitude on the ventilator",
			D: "low gas pressure in the tanks",
		},
		answer: "D",
		answer_explanation:
			"Transport ventilators work fludically. This means they're not powered by electrical means but rather, by the gas pressure in the tanks. As pressure decreases and the tank gets close to empty, the transport ventilator will respond by gradually decreasing in function, including a decrease in both rate and delivered volume.",
	},
	{
		question:
			"Which of the following would be most helpful at identifying optimal PEEP?",
		options: {A: "CVP", B: "Vd/VT", C: "A-aDO2", D: "C(a-v)O2"},
		answer: "D",
		answer_explanation:
			"Among these options, optimal PEEP can best be identified by including data associated with the C(a-v)O2.",
	},
	{
		question:
			"A patient is undergoing a maximal exercise tolerance test. During the exam, as workload is increased, an increase in heart rate from 90 to 120 bpm while blood pressure remained steady at 110/88 mmHg is noted. Which of the following can be correctly stated about the exam results?",
		options: {
			A: "normal cardiac response, abnormal blood pressure response",
			B: "abnormal cardiac response, abnormal blood pressure response",
			C: "abnormal cardiac response, normal blood pressure response",
			D: "normal cardiac response, normal blood pressure response",
		},
		answer: "A",
		answer_explanation:
			'During an exercise tolerance test, also known as a stress test, blood pressure and heart rate should rise as workload is increased. If this does not occur, the patient is said to have an abnormal blood pressure and/or abnormal cardiac response. In this case the patient\'s heart rate did increase but the blood pressure did not. The best interpretation is "normal cardiac response with an abnormal response in blood pressure".',
	},
	{
		question:
			"A respiratory therapist is designing a regimen for a patient with asthma in an attempt to minimize episodes of bronchoconstriction. Which of the following should be included in the regimen",
		options: {
			A: "daily peak flow measurements",
			B: "routine alveolar diffusion testing",
			C: "cromolyn sodium (Intal)",
			D: "IGE blocker",
		},
		answer: "A",
		answer_explanation:
			"Patients with asthma may prevent bronchoconstriction episodes by monitoring peak flow measurements routinely and avoiding triggers to bronchoconstriction. Additionally, cromolyn sodium may be used to coat the mast cell and prevent the release of histamine, which is a source of bronchoconstriction.",
	},
	{
		question:
			"A 60 kg (132 lb) male patient is undergoing weaning from mechanical ventilation. The following clinical and laboratory data is available:\nMode SIMV Mandatory rate 4Total rate 28FIO2 0.40VT (set) 400 mLVT (spont) 280 mLPressure support 5 cm H2O pH7.44 PaCO235 torr PaO282 torr HCO3-24 mEq/L BE+1 mEq/L\nThe respiratory therapist should recommend which of the following changes?",
		options: {
			A: "Discontinue mechanical ventilation",
			B: "Switch to pressure-control ventilation",
			C: "Administer sedative medication",
			D: "Increase pressure support to 10 cm H2O",
		},
		answer: "D",
		answer_explanation:
			"This patient is obviously leaning from mechanical ventilatory support. However, they are demonstrating a high respiratory rate of 28 and a low spontaneous tidal volume of 280 mL. The key issue here is the low tidal volume. This can be best addressed by increasing pressure support. Pressure support will increase spontaneous tidal volumes and lead to a natural decrease in rate, which will lower work of breathing.",
	},
	{
		question:
			"A patient is receiving heliox therapy with a mixture of 70% / 30% by nonrebreathing mask to reduce airway resistance. The therapist also observes the reservoir bag is not collapsing at all with each inspiration. After ensuring the face mask is sealed around the face properly, the therapist should",
		options: {
			A: "Reduce the total flow of gas mixture to the patient",
			B: "Obtain a partial rebreathing mask",
			C: "Discard the valve between the mask and the reservoir",
			D: "Obtain an arterial blood gas",
		},
		answer: "A",
		answer_explanation:
			"When a reservoir bag on and on nonrebreathing mask does not collapse at all with each breath, the cause may be one of two problems: It may be due to an improper seal between the mask and the patient's face. It may also be due to excessive total gas flow going to the reservoir bag.",
	},
	{
		question:
			"A patient with ARDS is showing signs of refractory hypoxemia after 22 days of volume controlled ventilation. Which of the following ventilator controls is most effective at combating refractory hypoxemia?",
		options: {A: "Tidal volume", B: "PEEP", C: "Injector line", D: "Amplitude"},
		answer: "B",
		answer_explanation:
			"Refractory hypoxemia among patients with ARDS is primarily treated with positive end-expiratory pressure (PEEP).",
	},
	{
		question:
			"A patient is being suctioned by the respiratory therapist. The therapist suctions the patient by inserting the catheter for 10-15 seconds and applying intermittent suction while withdrawing the catheter. During the last several attempts, the therapist notices multiple PVCs on the ECG monitor during the procedure. Which of the following can the therapist do to correct the problem?",
		options: {
			A: "apply continuous suctioning when withdrawing the catheter",
			B: "decrease suction pressure",
			C: "switch to a larger catheter",
			D: "suction for less than 10 seconds",
		},
		answer: "D",
		answer_explanation:
			"Decreasing the suction duration is an appropriate method to reduce the cardiac stress and prevent PVCs during the suctioning procedure.",
	},
	{
		question:
			'Immediately after performing a 12-lead ECG, the respiratory therapist notices "flipped" T waves and elevation of S-T segments. The therapist should conclude the patient is experiencing',
		options: {
			A: "hyperkalemia and infarction",
			B: "premature ventricular contractions",
			C: "hypokalemia and ischemia",
			D: "myocardial ischemia and infarction",
		},
		answer: "D",
		answer_explanation:
			"When T waves on an ECG are flipped, or point in the opposite direction compared to P waves, cardiac ischemia is indicated. Furthermore, elevation of the ST segment is related to myocardial infarction. Therefore, myocardial ischemia and infarction appear to be present.",
	},
	{
		question:
			"As part of the instruction of a 5-year-old child who will be using a small volume nebulizer at home, the respiratory therapist should also",
		options: {
			A: "Provide the patient with a telephone number that can be used to ask questions",
			B: "Have the patient record the treatments in a daily journal",
			C: "Ensure the caregiver understands all instructions to perform the therapy",
			D: "Remind the child of the consequences of abusing the medication",
		},
		answer: "C",
		answer_explanation:
			"A 5-year-old patient is not likely able to understand and retain instructions regarding the use of a small volume nebulizer and the management of the associated medication. Therefore, it is most appropriate to ensure the caregiver of the patient understands all instructions. This may be done by having the caregiver repeat back the instructions given or to demonstrate their understanding",
	},
	{
		question:
			"Immediately after oral intubation, the respiratory therapist notes the endotracheal tube marking are at 28 cm at the lips. Additionally, chest movement is asymmetrical. The first recommendation of the therapist should be to",
		options: {
			A: "obtain a chest radiogram",
			B: "advance the endotracheal tube until chest movement is symmetrical",
			C: "withdraw the endotracheal tube by several centimeters",
		},
		answer: "[][][]",
		answer_explanation: "[][][]",
	},
	{
		question:
			"The respiratory therapist working in a clinic receives a call from a patient who has asthma and is only able to achieve 75% of their normal baseline peak flow measurement. The therapist should advise the patient to",
		options: {
			A: "take a rescue medication, check flows in one hour",
			B: "check flows again in one hour, call if less than 50%of expected",
			C: "take a rescue medication every 15 minutes for 2 hours, recheck flows",
		},
		answer: "[][][]",
		answer_explanation: "[][][]",
	},
	{
		question:
			"A 45-year-old 74-kg (163-lb) adult female is receiving mechanical ventilatory support. Settings are as follows:\nMode Assist/control Mandatory rate 12Total rate 16Tidal volume 400 mLFIO2 0.6PEEP 5 cm H2O\nThe patient is appears to be anxious. SpO2 is 86%. The respiratory therapist will recommend which of the following?",
		options: {
			A: "increase FIO2",
			B: "increase tidal volume",
			C: "increase inspiratory flow rate",
			D: "decrease mandatory rate",
		},
		answer: "B",
		answer_explanation:
			"All of the answers in this question are indicating a need to change the ventilator settings. However, there is no blood gas data available to a change in settings. When this happens, we must look closer at the ventilator settings where we will likely find a problem. The patient weighs 74 kg. The minimum tidal volume for this patient is 6 mL per kilogram, or 450 mL. The set tidal volume is 400 mL. This must be corrected immediately.",
	},
	{
		question:
			"68-year-old male patient has the following pulmonary function values:\nFev1/FVC% 79% FVC 62% of predictedFEF25-75 81% of predictedFEF200-1200 84% of predicted\nWhich of the following could represent the patient's diagnosis?",
		options: {
			A: "bronchiectasis",
			B: "chronic bronchitis",
			C: "chronic asthma",
			D: "idiopathic pulmonary fibrosis",
		},
		answer: "D",
		answer_explanation:
			"When looking at pulmonary function data, the primary purpose is to differentiate between an obstructive defect and a restrictive effect. To determine if the patient is obstructive, we must look at flows. To determine if they are restrictive we must look at volumes. In this case the Fev1/FVC% is 79%. Most pulmonary function data requires 80% of predicted or higher to be considered normal. With Fev1/FVC%, 75% is considered normal. This is because it is not a predicted value but the actual value of the ratio. In other words, a person should be able to blow out 75% of their forced vital capacity in one second. This data indicates that the patient is not obstructive. Further examination shows a forced vital capacity of 62% of predicted. This is consistent with a restrictive pulmonary defect. Examining the options reveals three diseases that are obstructive in nature and only one that is restrictive - idiopathic pulmonary fibrosis.",
	},
	{
		question:
			"A left-to-right cardiac shunt, due to a leak in the septum wall of the heart, would be best indicated by an increase",
		options: {
			A: "in arterial to venous oxygen content difference",
			B: "in PCWP",
			C: "in mPAP",
			D: "in mixed venous oxygen saturation",
		},
		answer: "D",
		answer_explanation:
			"A left-to-right cardiac shunt would best be observed by examining the oxygen saturation of mixed venous blood.",
	},
	{
		question:
			"A 38-week gestational age infant is receiving supplemental oxygen by oxyhood. An air/oxygen blender is set at 40% and the heated large volume aerosol is set at 100%. A capillary blood sample reveals the following values:\npH 7.45 PcCO2 35 torrPcO2 47 torrHCO3- 22 mEq/LBE -2 mEq/L\nSpO2 is reading 97% and the patient appears to have good color. The therapist should conclude which of the following?",
		options: {
			A: "the air/oxygen blender should be set to 100%",
			B: "nasal CPAP of 4 cmH2O should be implemented",
			C: "FIO2 should be increased",
			D: "these are normal findings",
		},
		answer: "D",
		answer_explanation:
			'Infants have the same blood gas values as adults except for the PaO2. Close examination of the data provided shows that arterial CO2 and arterial oxygen is not what is being reported. The small "c" noted before the CO2 and O2 level indicate the blood was taken from the capillaries. When this is the case it must be remembered that capillary CO2 and the corresponding pH may be trusted but capillary oxygen levels are not accurate and may not be used. Therefore, this capillary blood gas reveals normal levels in term so ventilation. But the capillary oxygen data must be ignored entirely.',
	},
	{
		question:
			"The following data is available for a patient receiving volume-controlled mechanical ventilation:\n6 am 9 am Ppeak(cm H2O) 20 32Pplat (cm H2O) 13 25Set VT (L) 0.6 0.6PEEP (cm H2O) 5 5\nWhich of the following is most consistent with these data?",
		options: {
			A: "increasing dynamic airway resistance",
			B: "kyphoscoliosis",
			C: "Decreasing pulmonary compliance",
			D: "bronchoconstriction",
		},
		answer: "C",
		answer_explanation:
			"In this problem peak pressures are obviously rising. Plateau pressures, however, are also rising. This indicates decreasing pulmonary compliance - the lungs are becoming stiffer.",
	},
	{
		question:
			"In response to an Asthma action plan, the patient has attempted to contact their physician after determining peak flow measurement is less than 50% of the patient's usual baseline value. The physician is not responding to the call. According to NAEP guidelines, the patient should NEXT",
		options: {
			A: "take a short-term bronchodilator and contact a different physician",
			B: "report to the hospital or call an ambulance",
			C: "take a corticosteroid inhaler and check again in 20 minutes",
			D: "take a short-term bronchodilator, check peak flow in 1 hour",
		},
		answer: "B",
		answer_explanation:
			"According the national asthma guidelines, a self monitored peak flow of 50% of baseline is an indication to contact one's physician. However, if one's physician is not available, the patient should report to the hospital or to the emergency room or call an ambulance.",
	},
	{
		question:
			"A patient with COPD is found with shallow respirations and is disoriented to time and place. The patient is receiving oxygen by Venturi mask set at 45%. SpO2 is 99%. The therapist should first do which of the following?",
		options: {
			A: "switch to a nasal cannula at 5 L/min",
			B: "switch to a nonrebreathing mask set at 12 L/min",
			C: "decrease FIO2 to 0.28",
			D: "institute mechanical ventilation",
		},
		answer: "C",
		answer_explanation:
			"A patient with COPD should not receive more than 28% oxygen, or more than 1-2 liters per minute by nasal cannula. Excessive oxygen delivery can result in suppression of the ventilatory drive, which can lead to disorientation, hypoventilation, and ventilatory failure. Oxygen saturation should be kept at or below 94%.",
	},
	{
		question:
			"A patient has the following arterial blood gas results and ventilatory parameters:\npH 7.12 PaCO2 30 mm HgPaO2 80 mm HgHCO3- 9 mEq/LBE +15 mEq/LRR 34VT (spont) 400 mL\nWhich of the following would provide helpful diagnostic information?",
		options: {
			A: "creatinine",
			B: "venous level of HCO3-",
			C: "BUN",
			D: "blood glucose level",
		},
		answer: "D",
		answer_explanation:
			"The blood glucose level should be evaluated in his case in order to determine the cause of the severe metabolic acidosis, which is likely to be diabetic ketoacidosis.",
	},
	{
		question:
			"Which of the following would be most helpful in determining if a patient regularly smokes tobacco products?",
		options: {
			A: "COHb",
			B: "DLCO",
			C: "end-tidal carbon dioxide",
			D: "pulse oximetery",
		},
		answer: "A",
		answer_explanation:
			"The most reliable data that indicates the degree to which the patient has recently been smoking comes from a COHb analysis.",
	},
	{
		question:
			"A patient in the emergency room expectorates thick, yellow sputum. A CBC shows the following:\nRBC 6.0 mill/cu mm Hb 17 g/dLHCT 64 %WBC 22,000 cu mm\nThe patient could benefit most from which of the following?",
		options: {
			A: "aerosolized Amphotericin B",
			B: "Acetylcysteine",
			C: "sputum culture and sensitivity",
			D: "aerosolized Nystatin",
		},
		answer: "C",
		answer_explanation:
			"The presence of thick, yellow sputum, in conjunction with an elevated white blood cell count, prove that the patient has an infection in the pulmonary system. The most appropriate action is to address the infection by determining a culture and sensitivity. This will help identify the bacteria that is present and the antibiotic that is most suitable for killing that particular bacteria.",
	},
	{
		question:
			"A family is found sleeping in their vehicle on the side of the road during a long trip. The officer who found them reports the family was difficult to arouse. Which of the following would be the most appropriate examination?",
		options: {
			A: "pulse oximetry",
			B: "COHb",
			C: "arterial blood gas analysis",
			D: "drug toxicology screen",
		},
		answer: "B",
		answer_explanation:
			"The circumstances surrounding this family suggest possible exposure to carbon monoxide. The most reliable way to assess carbon monoxide levels is to determine COHb. Pulse oximetry is not capable of measuring carbon monoxide attached to hemoglobin",
	},
	{
		question:
			"A radiology report of a chest x-ray indicates a round-shaped infiltrate measuring 2 cm in diameter in the left lung. Which of the following tests would be helpful in further identifying the nature of this infiltrate?",
		options: {
			A: "series of oblique chest radiographs",
			B: "sputum culture",
			C: "V/Q scan",
			D: "transesophageal echo (TE)",
		},
		answer: "A",
		answer_explanation:
			"A round-shaped infiltrate found on an x-ray is concerning because it may be a cancerous mass. If it is a mass it will have a three-dimensional quality to it and therefore a series of x-rays (radiographs) taken from different angles will show the three dimensional shape of the object. The purpose of chest x-rays taken from nontraditional angles is to focus on an object and get a three-dimensional understanding of its shape.",
	},
	{
		question:
			"Auscultation of a child's breath sounds reveals unilateral wheezing in the right side. Which of the following should the respiratory therapist recommend to be most helpful to the patient?",
		options: {
			A: "Atropine",
			B: "Bronchoscopy",
			C: "Albuterol",
			D: "Salmeterol",
		},
		answer: "B",
		answer_explanation:
			"Bilateral wheezing is associated with bronchoconstriction. When the bronchials constrict, they are not usually capable of constricting on one side of the lung only. Therefore, unilateral wheezing indicates the problem must be something other than bronchoconstriction and is most likely associated with foreign body aspiration. To remove the object a bronchoscopy is most appropriate.",
	},
	{
		question:
			"A patient is being mechanically ventilated VC ventilation. A chest tube drainage system is in place and 1100 mL of fluid has been collected from the left chest. A low volume alarm on the ventilator begins to sound. The respiratory therapist notices vigorous bubbling in the water seal chamber. The following data is available:\npH 7.45 PaCO2 36 torrPaO2 80 torrHCO3- 24 mEq/LBE -1 mEq/LMode Assist/controlVT 500 mLExhaled VT 296 mLMandatory rate 12/minTotal rate 10/minFIO2 0.60\nThe respiratory therapist's first action should be to",
		options: {
			A: "decrease suction pressure to the system",
			B: "look for a leak between the water seal chamber and the patient",
			C: "increase rate to 14",
			D: "discontinue chest tubes",
		},
		answer: "B",
		answer_explanation:
			"Vigorous bubbling in the water seal chamber is abnormal and indicates the presence of a leak in the chest tube drainage system. The leak may exist somewhere between the water seal compartment and the patient. However, the leak may be caused from a perforated lung.",
	},
	{
		question:
			"A 33-year-old female has been rehabilitated from a motor vehicle accident where she suffered a spinal injury. She has been admitted to the emergency department with flu-like symptoms, is febrile, and is expectorating yellow sputum. Arterial blood gas results are:\npH 7.27 PaCO2 52 torrPaO2 67 torrHCO3- 25 mEq/LBE -1 mEq/L\nThe respiratory therapist should recommend",
		options: {
			A: "high frequency chest wall oscillation (HFCWO)",
			B: "non-invasive positive pressure ventilation (NPPV)",
			C: "pressure support ventilation (PSV)",
			D: "intermittent positive pressure ventilation (IPPV)",
		},
		answer: "B",
		answer_explanation:
			"Arterial blood gas reveal hypoventilation and hypoxemia. However, the patient is not quite yet demonstrating acute ventilatory failure. When CO2 rises and pH falls below 7.25, acute ventilatory failure is present and mechanical ventilatory assistance is indicated. In this case, the patient is just shy of acute ventilatory failure and may benefit from non-invasive positive pressure ventilation (NIPPV or BiPAP).",
	},
	{
		question:
			"Which of the following would be an indication to delay weaning a patient from mechanical ventilatory support?",
		options: {
			A: "RSBI of 80",
			B: "VD/VT ratio of 70%",
			C: "WBC of 8,000 cu mm",
			D: "A-aDO2 of 120 mmHg",
		},
		answer: "B",
		answer_explanation:
			"To be a candidate for weaning deadspace-tidal volume ratio must be less than 60%, A-a gradient must be less than 300 mmHg, RSBI must be less than 106, and WBC must be near-normal. In this question, the deadspace-tidal volume ratio is too high and is a reason to delay weaning.",
	},
	{
		question:
			"To determine potential post-operative risk of a patient preparing for surgery, the respiratory therapist should recommend which of the following tests?",
		options: {
			A: "pulmonary diffusion studies",
			B: "cardiac stress test",
			C: "pulmonary stress test",
			D: "basic spirometry",
		},
		answer: "D",
		answer_explanation:
			"Potential postoperative risk may be assessed preoperatively through basic spirometry.",
	},
	{
		question:
			"A patient in a body box performs a maneuver that shows airway resistance (Raw) to be 1.2 cmH2O/L/sec. Which of the following conditions most likely represents the patient's condition?",
		options: {
			A: "myasthenia gravis",
			B: "ARDS",
			C: "history of smoking",
			D: "normal",
		},
		answer: "D",
		answer_explanation:
			"An airway resistance of 1.2 cmH2O/L/sec is considered normal. Elevated airway resistance is associated with asthma.",
	},
	{
		question:
			"A patient has a balloon-tipped, flow-directed catheter in place in the pulmonary artery. Which of the following will be obtained when extracting blood from the distal lumen of the pulmonary artery catheter?",
		options: {
			A: "arterial blood",
			B: "coagulated blood",
			C: "mixed venous-arterial blood",
			D: "venous blood",
		},
		answer: "C",
		answer_explanation:
			"Because the distal lumen of a pulmonary artery catheter is in the pulmonary artery, blood obtained from this lumen is mixed venous blood. This, in fact, is the best place to obtain mixed venous blood.",
	},
	{
		question:
			"The balloon on a balloon-tipped, flow-directed pulmonary artery catheter may be found",
		options: {
			A: "proximal to the tip",
			B: "proximal to the transducer",
			C: "mid-catheter",
			D: "distal to the tip",
		},
		answer: "A",
		answer_explanation:
			'The terms "distal" and "proximal" are often related to "near" and "far", respectively. The term "distal" may also mean "after" and proximal means "before". The best description of the location of the balloon on the pulmonary artery catheter is "before" or "proximal" to the tip.',
	},
	{
		question:
			"Which of the following should be used to determine the gestational age of a neonate?",
		options: {
			A: "Lung compliance",
			B: "APGAR",
			C: "Ballard",
			D: "Request the information from the mother",
		},
		answer: "C",
		answer_explanation:
			"Of the options offered, the new Ballard assessment is the only assessment shown that will assess the gestational age of the infant.",
	},
	{
		question:
			"A patient is receiving volume-controlled ventilation in the assist/control mode. The following data are available:\nPeak pressure Plateau Pressure Exhaled VT 2 PM 35 cm H2O 22 cm H2O 696 mL5 PM 53 cm H2O 24 cm H2O 702 mL7 PM 55 cm H2O 23 cm H2O 700 mL\nThe respiratory therapist would categorize the most significant problem noted from this data as",
		options: {
			A: "increasing dynamic compliance",
			B: "decreasing static compliance",
			C: "increasing static compliance",
			D: "decreasing dynamic compliance",
		},
		answer: "D",
		answer_explanation:
			"This data shows a significant increase in peak airway pressures but plateau pressures are remaining nearly steady. An increase in peak airway pressures with steady plateau pressures is associated with a decrease in dynamic compliance and is caused from such temporary conditions as bronchoconstriction, secretions in the airway, and occlusion of the endotracheal tube, to name a few.",
	},
	{
		question:
			"The following arterial blood gas results are recorded for a patient during cardiopulmonary resuscitation:\npH 7.10 PaCO2 46 torrPaO2 208 torrHCO3- 12 mEq/LFIO2 1.0\nOn the basis of these values and the following ECG waveform, the respiratory therapist should recommend",
		options: {
			A: "increase manual ventilation rate",
			B: "sodium bicarbonate administration",
			C: "administer sodium nitroprusside",
			D: "decrease FIO2",
		},
		answer: "B",
		answer_explanation:
			"This patient shows acidosis, as manifested by the pH, but has a nearly normal CO2. A further examination of the HCO3 shows that the source of the acidosis is metabolic. Administration of sodium bicarb (HCO3-) is appropriate.",
	},
	{
		question:
			"2 PM 5 PM Peak airway pressure 45 cm H2O 56 cm H2OStatic airway pressure 35 cm H2O 46 cm H2OPEEP 5 cm H2O 5 cm H2ODelivered tidal volume 750 mL 750 mLInspiratory flow 55 L/min 55 L/min\n\nThe following data is available for a patient receiving mechanical ventilation:\nWhat is the next action the respiratory therapist should take?",
		options: {
			A: "Obtain a chest radiograph",
			B: "Perform bronchial hygiene",
			C: "Decrease tidal volume",
			D: "Increase inspiratory flow",
		},
		answer: "A",
		answer_explanation:
			"This data shows an increase in static airway pressure which indicates the lungs are becoming stiffer or less compliant. There is no specific, immediate treatment for this but additional data may be gathered to determine the possible cause of the change in compliance. Of the options offered, obtaining a chest radiograph is most appropriate.",
	},
	{
		question:
			"Immediately upon delivery of a 40-week gestational age infant, the respiratory therapist notices a straw color stain about the infant's face. Which of the following actions should the therapist take next?",
		options: {
			A: "obtain a one-minute APGAR score",
			B: "clean the infant's face, then reassess",
			C: "suction the mouth",
			D: "provide ventilation with a bag-valve and mask",
		},
		answer: "C",
		answer_explanation:
			"A straw-colored stain noted about the face indicates the presence of meconium. The appropriate first action is to suction any possible meconium from the patient's mouth and oropharynx to prevent the patient from inhaling the meconium during initial breaths.",
	},
	{
		question:
			"A respiratory therapist is providing instruction to a home-care patient regarding different methods of increasing the effectiveness of airway clearance. The therapist may suggest all of the following techniques EXCEPT",
		options: {
			A: "huff coughing",
			B: "pursed-lip breathing",
			C: "serial coughing",
			D: "autogenic drainage",
			F: "",
		},
		answer: "B",
		answer_explanation:
			"Of the options given, huff coughing, serial coughing, and autogenic drainage are methods associated with mobilization of secretions and airway clearance. Pursed-lip breathing is not specifically designed to clear the airway but is intended for those patients who have chronic air trapping to help exhale gases more effectively and prevent air-trapping. Specifically, it is intended to help COPD patients decrease their FRC.",
	},
	{
		question:
			"Which of the following diagnostic procedures should the respiratory therapist recommend to more clearly identify what looks like a mass in the upper right lung field?",
		options: {
			A: "PA chest radiograph",
			B: "Magnetic resonance imaging (MRI)",
			C: "Transesophagus echocardiogram (TE)",
			D: "AP chest radiograph",
		},
		answer: "B",
		answer_explanation:
			"A mass in the lung field can be further evaluated by examinations that show the three dimensionality of the suspicious area. Because a mass is three-dimensional in nature, magnetic resonance imaging, or MRI, would be the most appropriate exam, of the options given.",
	},
	{
		question:
			"A mountain hiker is air-lifted off a mountain from an altitude of 19,000 ft. The patient was found complaining of shortness of breath. The patient is anxious, cyanotic, and is exhibiting signs of pulmonary edema. The most likely explanation for these signs and symptoms is",
		options: {
			A: "hypercapnia",
			B: "altitude sickness",
			C: "oxygen toxicity",
			D: "decreased PAO2",
		},
		answer: "D",
		answer_explanation:
			"Altitude causes hypoxemia because of the decreased barometric pressure, which results primarily in decreased alveolar oxygen tension or PAO2.",
	},
	{
		question:
			"While performing a biopsy of a tissue extracted from a patient's right mainstem bronchus with a bronchoscope, the physician reports sudden bleeding from the site. Which of the following should the respiratory therapist have ready to instill?",
		options: {
			A: "normal saline",
			B: "racemic epinephrine",
			C: "epinephrine",
			D: "atropine sulfate",
		},
		answer: "C",
		answer_explanation:
			"When encountering a bleed in the bronchial tree during a bronchoscopy, the first step to stop the bleed is to instill epinephrine on the site through the bronchoscope. After doing so, the site should be compressed with the bronchoscope. Ultimately, a Fogarty catheter may be inserted to tamponade any remaining bleeding.",
	},
	{
		question:
			"A respiratory therapist is preparing to obtain a mixed venous sample for the purpose of PvO2 measurement. From which of the following locations should the sample be taken?",
		options: {
			A: "capillary bed",
			B: "proximal end of the PA catheter",
			C: "right atrium",
			D: "distal end of the pulmonary artery catheter",
		},
		answer: "D",
		answer_explanation:
			"Mixed venous blood must be taken from the distal end of pulmonary artery catheter to determine PvO2.",
	},
	{
		question:
			"The following flow volume loop is obtained from a 59-year-old farmer who works in a granary. Which of the following could represent the patient's diagnosis?",
		options: {
			A: "asthma",
			B: "emphysema",
			C: "chronic bronchitis",
			D: "pulmonary fibrosis",
			F: "To find the correct answer, one must pick the disease that is obstructive. In this question in, emphysema is the only obstructive disease offered.",
		},
		answer: "B",
		answer_explanation:
			"The flow volume loop is short and fat indicating diminished flows but normal volumes. This is associated with patients who have obstructive lung defect and is commonly seen in patients with COPD. To find the correct answer, one must pick the disease that is obstructive. In this question in, emphysema is the only obstructive disease offered.",
	},
	{
		question:
			"A 42-year-old female presents in the emergency department (ED) complaining of body aches and general malaise. The patient reports sickness over the last two days with excessive vomiting and diarrhea. Which of the following laboratory tests should the respiratory therapist suggest?",
		options: {
			A: "Blood urea nitrogen (BUN)",
			B: "Arterial blood gas",
			C: "Serum electrolytes",
			D: "Theophylline level",
		},
		answer: "C",
		answer_explanation:
			"Body aches and general malaise is most often a clear indicator of electrolyte imbalance. This suggestion is further indicated by the fact that the patient has been expectorating fluid in various forms and has likely become dehydrated. Loss of fluid often results in electrolyte imbalance.",
	},
	{
		question:
			"A neonate delivered 3 minutes ago has an APGAR score of 5. The therapist should do which of the following?",
		options: {
			A: "obtain umbilical cord blood gas values",
			B: "perform CPR",
			C: "get an arterial blood gas",
			D: "place the infant on supplemental oxygen",
		},
		answer: "D",
		answer_explanation:
			"Apgar scores of 4 to 6 indicate the administration of supplemental oxygen and general stimulation of the infant. Apgar scores higher than six require only routine care of the infant. Apgar scores of 0-3 indicate the need for CPR.",
	},
	{
		question:
			"A radiology report of a chest x-ray indicates the oral endotracheal tube is 1 cm beyond the carina, in the right mainstem bronchus. The respiratory therapist should",
		options: {
			A: "withdraw the ET tube by 1 cm",
			B: "withdraw the ET tube by 4 cm",
			C: "withdraw the ET tube by 2 cm",
			D: "advance the ET tube by 1 cm",
		},
		answer: "B",
		answer_explanation:
			"The endotracheal tube is properly positioned when the end is 2 to 5 cm above the carina. In this case, the tube is only 1 cm above the carina. Withdrawing the by 2 to 4 cm is appropriate.",
	},
	{
		question:
			"A physician is concerned about autoPEEP developing in a patient receiving volume-controlled ventilation on the following settings:\nMode Assist/control VT 600 mLRate 16FIO2 1.0PEEP 10 cm H2OInsp flow 50 L/minI:E 1:2\nWhich of the following adjustments will reduce autoPEEP?",
		options: {
			A: "increase PEEP",
			B: "decrease PEEP",
			C: "increase VT",
			D: "decrease rate and/or increase flow",
		},
		answer: "D",
		answer_explanation:
			"Two ways of decreasing autoPEEP and air-trapping is to increase expiratory time by increasing inspiratory flow or by decreasing mandatory rate.",
	},
	{
		question:
			"The respiratory therapist is caring for a 28-week-old gestational age infant currently receiving mechanical ventilatory support on the following settings:\nPIP 30 cm H2O FIO2 0.70PEEP 5 cm H2OMandatory rate 40\nA chest radiograph shows bilateral haziness. Arterial blood gas analysis shows\npH 7.22 PaCO2 67 torrPaO2 44 torrHCO3- 27 mEq/LBE +1 mEq/L\nThe most appropriate recommendation would be to",
		options: {
			A: "Decrease mandatory rate",
			B: "Increase PIP",
			C: "Increase FIO2",
			D: "Administer Survanta®",
		},
		answer: "D",
		answer_explanation:
			"An infant's chest x-ray that shows bilateral haziness is related to pulmonary immaturity. Fetal lung immaturity is best remedied by the administration of surfactant. Survanta is the only surfactant offered among the answers listed.",
	},
	{
		question:
			"An adult male patient who is receiving volume-controlled ventilation has a chest tube drainage system in place with a chest tube in the right anterior lung. Suction pressure at the wall is set to 120 mmHg. The therapist notices profuse bubbling in the water seal chamber. The low volume alarm is sounding and the digital display on the ventilator indicates a return volume of 220 mL. Which of the following clinical conditions should the respiratory therapist suspect?",
		options: {
			A: "leak in the tubing between the patient and the fluid collection chamber",
			B: "leak in the tubing between the fluid collection and water seal chambers",
			C: "leak in the ventilator circuit",
			D: "perforation in the lung tissue",
		},
		answer: "D",
		answer_explanation:
			"Excessive bubbling in the water seal compartment, in addition to low return volume during mechanical ventilation, is an indication that a leak may be occurring through a perforation in the lung tissue - delivered volumes may be lost through a hole in the lung into the chest tube drainage system.",
	},
	{
		question:
			"The following pulmonary function data is obtained from a 72-year-old male:\nPercent (%) of Predicted Actual value (%) SVC 81 FVC 79 FEV1.0 /FVC % 70FEF25-75 69 FEF200-1200 63 DLCO 16\nThe respiratory therapist should interpret this data as",
		options: {
			A: "severe diffusion impairment",
			B: "pulmonary emphysema",
			C: "asthma",
			D: "sarcoidosis",
		},
		answer: "B",
		answer_explanation:
			"This pulmonary function data shows a slow vital capacity of 81% of predicted. This means the patient is not restrictive. However, the FEV1/FVC% is 70%. This is not a predicted value but rather an actual ratio. In other words, of the patient's vital capacity only 70% is exhaled in one second. A normal person should be able to exhale at least 75% of their vital capacity. This indicates the patient is mildly obstructive. The choices offered consist of two diseases that are obstructive - asthma and pulmonary emphysema. To distinguish between these two, one must look at the DLCO. Of the obstructive diseases, only emphysema has a poor DLCO. In this case, the patient's DLCO is 64% of predicted, proving that the patient has emphysema.",
	},
	{
		question:
			"The following pulmonary function data is obtained from a 32-year-old male with a history of pulmonary fibrosis:\nPercent (%) of Predicted SVC 62FVC 69FEV1.0 80FEF25-75 79FEF200-1200 82DLCO 91\nThe respiratory therapist should interpret this data as",
		options: {
			A: "mild obstructive defect",
			B: "severe restrictive disease",
			C: "poor patient effort",
			D: "moderate diffusion impairment",
			F: "This is not normal. When a patient breathes out slowly they are able to exhale more fully. When the patient exhales forcefully turbulent airflow reduces the exhaled volume. Consequently, a SVC measurement should always be greater than a FVC on a given patient. When this is not the case it indicates poor patient effort and the slow vital capacity should be repeated.",
		},
		answer: "C",
		answer_explanation:
			"A close look at these pulmonary function values reveals something peculiar - SVC is less than the FVC. This is not normal. When a patient breathes out slowly they are able to exhale more fully. When the patient exhales forcefully turbulent airflow reduces the exhaled volume. Consequently, a SVC measurement should always be greater than a FVC on a given patient. When this is not the case it indicates poor patient effort and the slow vital capacity should be repeated.",
	},
	{
		question:
			"A therapist working in the cardiac care unit is asked to determine a patient's cardiac output. Which of the following calculations can best provide an estimate of cardiac output?",
		options: {
			A: "ejection fraction x stroke volume",
			B: "stroke volume x heart rate",
			C: "VO2 x CaO2 x 10",
			D: "C(a-v)O2 / cardiac index",
		},
		answer: "B",
		answer_explanation:
			"Cardiac output may be calculated by any number of methods. In this case the most appropriate method is multiplying the heart rate by the stroke volume.",
	},
	{
		question:
			"A patient with pulmonary fibrosis has the following arterial blood gas results while receiving supplemental oxygen via nasal cannula at 5 L/min:\npH 7.35 PaCO2 45 torrPaO2 42 torrHCO3- 24 mEq/LBE -1 mEq/L\nThe respiratory therapist should recommend changing to which of the following devices?",
		options: {
			A: "nonrebreathing mask",
			B: "simple mask set to 7 L/min",
			C: "Venturi mask",
			D: "partial rebreathing mask",
		},
		answer: "A",
		answer_explanation:
			"This patient has profound hypoxemia on 5 L/min nasal cannula, which is equivalent to 35 to 40% oxygen. This would indicate the patient needs 100% oxygen to resolve hypoxemia. Although not offered in this question, the patient would also benefit from noninvasive positive pressure breathing, or BiPAP.",
	},
	{
		question:
			"A patient with rocky mountain spotted fever is receiving non-invasive positive pressure breathing by mask at the following settings:\nIPAP 18 cm H2O EPAP 6 cm H2O\nCorresponding blood gases are:\npH 7.36 PaCO2 43 mm HgPaO2 72 mm HgHCO3- 24 mEq/LBE 0 mEq/LFIO2 0.60\nThe respiratory therapist should recommend which of the following change(s)?",
		options: {
			A: "increase IPAP to 20, EPAP to 8 cm H2O",
			B: "increase IPAP to 22 cm H2O",
			C: "increase EPAP to 10 cm H2O",
			D: "increase FIO2 to 0.7",
		},
		answer: "A",
		answer_explanation:
			"This patient on bilevel therapy is having a problem with oxygenation. Ventilation appears to be okay. When this happens, the primary control to increase oxygenation is EPAP. However, the amount of ventilation relates to the distance between the inspiratory and expiratory pressure. Consequently, raising EPAP by itself has an indirect effect on ventilation because the distance between the two values is inadvertently diminished. Thus, when EPAP is increased, IPAP must be increased by the same amount to maintain consistent ventilation.",
	},
	{
		question:
			"A respiratory therapist is helping transport a patient from the helicopter to the intensive care unit. During the transport, the therapist notices the endotracheal tube securing devices have become unsecure. The BEST way for the therapist to determine the position of the tube is to",
		options: {
			A: "order a chest radiograph",
			B: "inspect symmetry of chest rise",
			C: "auscultate breath sounds",
			D: "examine tube markings",
		},
		answer: "A",
		answer_explanation:
			"There are multiple ways to determine the proper positioning of an endotracheal tube. While examining markings on the tube, observing chest rise and symmetry, and auscultating breath sounds are quick and helpful, the best way to CONFIRM proper positioning is to do a chest x-ray, also called a chest radiograph.",
	},
	{
		question:
			"During the administration of an IPPB treatment, the patient becomes unresponsive and develops the ECG rhythm as shown below. Which of the following is the best initial action?",
		options: {
			A: "Defibrillate at 50 joules",
			B: "Arterial blood gas analysis",
			C: "Begin CPR",
			D: "Connect a pacemaker",
		},
		answer: "C",
		answer_explanation:
			"The best option in this case is to begin CPR. This is because the ECG rhythm is consistent with the absence of cardiac contraction. Combined with the fact that the patient has suddenly become unresponsive, this is adequate data indicating the need to intervene with cardiopulmonary resuscitation.",
	},
	{
		question:
			"Which of the following should the respiratory therapist use to determine the effectiveness of hyperinflation therapy of a patient who is post operative for a partial lobectomy and who has atelectasis?",
		options: {
			A: "FEF 25-75",
			B: "DLCO measurements",
			C: "FEF 200-1200",
			D: "Chest radiograph",
		},
		answer: "D",
		answer_explanation:
			"The best way to determine the effectiveness of hyperinflation therapy on a patient who has atelectasis is to do a chest radiograph. This will help visualize inflation and the presence of atelectasis in the lungs. Assessing expiratory flows will not be helpful and obtaining a DLCO measurement is not related",
	},
]
