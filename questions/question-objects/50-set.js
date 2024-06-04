const quizData = [
	{
		question:
			"The medication prostacyclin is used for which of the following purposes?",
		options: {
			A: "decrease pulmonary hypertension",
			B: "bronchodilate large airways",
			C: "decrease systemic vascular resistance (SVR)",
			D: "improve cardiac contractility",
		},
		answer: "A",
		answer_explanation: "decrease pulmonary hypertension",
	},
	{
		question:
			"The respiratory therapist obtains the following blood gas data on a patient breathing spontaneously on room air:\npH 7.35 PaCO2 45 torr PaO2 50 torr HCO3- 27 mEq/L BE +2 mEq/L\nThe therapist could accurately estimate the patient's SaO2 to be which of the following?",
		options: {A: "75%", B: "80%", C: "85%", D: "90%"},
		answer: "B",
		answer_explanation:
			"80%\n\nA PaO2 of 50 mmHg most closely correlates with an oxygen saturation of about 80% on the oxygen dissociation curve.",
	},
	{
		question:
			"After instructing a patient and demonstrating the proper use of a metered dose inhaler with a valved holding chamber, the patient performs the maneuver by placing the chamber in his mouth, actuating the cannister, and then exhaling prior to performing inhalation. The respiratory therapist should",
		options: {
			A: "document that the education was effective.",
			B: "re-instruct the patient to inhale immediately after actuation of the cannister.",
			C: "instruct the patient to inhale while depressing the cannister.",
			D: "remove the cannister and have the patient reattempt the dose delivery.",
		},
		answer: "B",
		answer_explanation:
			"re-instruct the patient to inhale immediately after actuation of the cannister.\n\nIf the patient exhales through the chamber immediately after actuating the inhaler, the medication may be ejected through the valve and out of the chamber. This would discard the medication. After depressing the cannister, the first action should be to inhale through the chamber.",
	},
	{
		question:
			"In response to an Asthma action plan, the patient has attempted to contact their physician after determining peak flow measurement is less than 50% of the patient's usual baseline value. The physician is not responding to the call. According to NAEP guidelines, the patient should NEXT",
		options: {
			A: "take a short-term bronchodilator, check peak flow in 1 hour",
			B: "take a corticosteroid inhaler and check again in 20 minutes",
			C: "take a short-term bronchodilator and contact a different physician",
			D: "report to the hospital or call an ambulance",
		},
		answer: "D",
		answer_explanation:
			"report to the hospital or call an ambulance\n\nAccording the national asthma guidelines, a self monitored peak flow of 50% of baseline is an indication to contact one's physician. However, if one's physician is not available, the patient should report to the hospital or to the emergency room or call an ambulance.",
	},
	{
		question:
			"A patient is orally intubated with a 7.0-mm ET tube. Immediately following the procedure, the respiratory therapist will FIRST do which of the following to check for proper positioning of the airway?",
		options: {
			A: "observe the color of the CO2 detector",
			B: "obtain a chest radiograph",
			C: "auscultate breath sounds",
			D: "palpate the trachea",
		},
		answer: "A",
		answer_explanation:
			"observe the color of the CO2 detector\n\nWhen asked in a question what to do first in any given situation, the most likely answer is that which is quickest. In this case a patient has just been inutbated and the therapist is asked to determine if the tube is in the proper position. Palpating the trachea will not be helpful but the other three options are all legitimate ways to ensure proper positioning of the ET tube. But, the quickest way is to do something visual. In this case, simply observing the color of the CO2 detector is quickest. The next best option is to auscultate breath sounds. This is also very quick but takes a little longer than a simple visual assessment. Finally, the next best answer is to obtain a chest radiograph. This will provide conclusive evidence, but it is time-consuming and is not the best option when trying to determine the position of the tube quickly.",
	},
	{
		question:
			"Which of the following indicate a patient is ready to wean from mechanical ventilation?",
		options: {
			A: "A-aDO2 of 380 mmHg",
			B: "RSBI 138",
			C: "MIP of -12 cmH2O",
			D: "VT of 6 mL/kg",
		},
		answer: "D",
		answer_explanation:
			"VT of 6 mL/kg\n\nIn order to wean from the ventilator the MIP must be more than -28 cmH2O. Tidal volume must be at least 5 mL per kilogram and RSBI must be less than 106. The alveoli-arterial oxygen difference (A-a gradient) must be less than 300 mmHg. In this case only the tidal volume of 6 mL per kilogram and the RSBI of 90 indicate the patient is ready to wean from mechanical ventilatory support.",
	},
	{
		question:
			"A patient is receiving ventilatory support with CPAP of 5 cm H2O and PS of 10 cm H2O. The following data is observed:\nVt(spont) 180 mL RR 28/min HR 104/min \nMIP -22 cm H2O SpO2 0.95\nWhat should be recommended for this patient?",
		options: {
			A: "increase CPAP to 7 cm H2O",
			B: "obtain ABGs, STAT",
			C: "implement invasive ventilation",
			D: "increase PS to 15 cm H2O",
		},
		answer: "D",
		answer_explanation: "increase PS to 15 cm H2O",
	},
	{
		question:
			"A 12-year-old male patient easily accomplishes the volume on an incentive spirometer that he was able to reach prior to surgery. The respiratory therapist should",
		options: {
			A: "increase the set volume.",
			B: "switch a flow-type spirometer.",
			C: "decrease the frequency of therapy.",
			D: "evaluate the need for continued therapy.",
		},
		answer: "D",
		answer_explanation:
			"evaluate the need for continued therapy.\n\nOf the options given, evaluating the patient for the need to continue the therapy is most appropriate.",
	},
	{
		question:
			"A respiratory therapist is having difficulty effectively removing secretions through endotracheal suctioning of a 7-year-old child with cystic fibrosis. The ET tube size is 6.0-mm. The suction pressures is set at 75 mmHg and the suction catheter size is an 8 Fr. The therapist should do which of the following to increase the efficacy of suctioning?",
		options: {
			A: "increase suction during per pass",
			B: "increase suction pressure to 80 mmHg",
			C: "instill 20 cc of normal saline prior to each suction attempt",
			D: "increase catheter size to 10 Fr",
		},
		answer: "B",
		answer_explanation:
			"increase suction pressure to 80 mmHg\n\nThere are three ways to increase suction efficiency. In order: 1) increase suction catheter size 2) increase suction pressure 3) increase suction time. However, prior to any of these three one must first ensure adequate minimal pressure for the patient's age is being used. This is a pediatric patient and suction pressure range should be between 80 and 100 mmHg. However, the suction pressure is only set at 75 mmHg. So, this should be corrected first before considering any other action to improve suction efficiency.",
	},
	{
		question:
			"The physician has asked the respiratory therapist to help determine oxygen consumption by the tissues. The therapist should suggest evaluation of which of the following?",
		options: {A: "CaO2", B: "CvO2", C: "PaO2", D: "C(a-v)O2"},
		answer: "D",
		answer_explanation:
			"C(a-v)O2\n\nOxygen available at the tissue level is best determined by examining the arterial oxygen content or CaO2. However, to determine how much oxygen the tissue is consuming we must look at both the CaO2 and the CVO2. This allows us to determine how much oxygen existed before the tissues and how much oxygen exists after the tissues. When we subtract one from the other we get the C(a-v)O2. This value is most closely related with oxygen consumption at the tissue level.",
	},
	{
		question:
			"A 40-year-old female presents in the emergency room after being rescued from a building fire where she was found unconscious. Which of the following assessments would be most helpful in the evaluation of the patient?",
		options: {
			A: "measurement of PaO2",
			B: "hemoximetry",
			C: "beside pulmonary function testing",
			D: "single-wavelength pulse oximetery",
		},
		answer: "B",
		answer_explanation:
			"hemoximetry\n\nThe primary concern for a patient who has had significant exposure to smoke is smoke inhalation and carbon monoxide poisoning. Of the options offered, hemoximetry will be most helpful. Pulse oximetry and measurement of PaO2 will only assess oxygenation and pulmonary function testing is not helpful.",
	},
	{
		question:
			"After placing a patient on helium-oxygen therapy (60%/40%) by nonrebreather mask, the respiratory therapist notices a complete collapse of the attached reservoir with each breath initially. After a few moments, the reservoir bag begins to collapse only partially with each breath. The therapist should conclude",
		options: {
			A: "the presence of CO2 overdose.",
			B: "a decrease in minute alveolar ventilation.",
			C: "inadequate ventilatory drive.",
			D: "a decrease in airway resistance.",
		},
		answer: "D",
		answer_explanation: "a decrease in airway resistance.",
	},
	{
		question:
			"A COPD patient is being assess in the hospital for readiness to be discharged home. The respiratory therapist is in charge of establishing the appropriate oxygen flow rate by nasal cannula to be used at home. The patient maintains an SpO2 of 90% on 2 L/min at rest, and 86% during ambulation. Which of the following recommendation would be most appropriate?",
		options: {
			A: "2 L/min at rest, 3 L/min during exertion",
			B: "2 L/min at all times",
			C: "1 L/min at rest, 2 L/min during ambulation",
			D: "1 L/min during sleep, 2 L/min all other times",
		},
		answer: "A",
		answer_explanation:
			"2 L/min at rest, 3 L/min during exertion\n\nFor COPD patients who need supplemental oxygen, 1-2 L/min or 24-28% is appropriate while at rest. However, if the patient is participating in any kind of exercise or pulmonary rehabilitation program that requires activity, additional flow may be provided during the activity only. Increasing flow does not actually increase the FIO2 for the patient, especially if they are on a nasal cannula. When the patient engages in exertion, they typically increase their tidal volume and inspiratory flow rate. In doing so, they entrain more air through their nose and lower their FIO2. Thus, an increase in flow rate during the exercise helps to minimize air entrainment and changes in oxygen percentage. Another way to approach this is to provide an air entrainment mask that delivers high flow. In that case increasing FIO2 is not necessary.",
	},
	{
		question:
			'A respiratory therapist is caring for a patient who has a sign posted outside their hospital room door that indicates, "Respiratory Isolation". The therapist should observe all of the following EXCEPT:',
		options: {
			A: "Do not allow visitors to enter the room",
			B: "Use N95 respirator",
			C: "Universal precautions",
			D: "Patient should use a mask when visitors are present",
		},
		answer: "A",
		answer_explanation:
			"Do not allow visitors to enter the room\n\nRespiratory isolation requires use of an N95 respirator, and universal precautions. The patient's use of a mask when visitors are present is also required. Disallowing visitors in the room is not required.",
	},
	{
		question:
			"Which of the following should be monitored for a ventilator-dependent newborn with IRDS?",
		options: {
			A: "gas distribution (SBN2) in the lungs",
			B: "fluid input and output",
			C: "pH",
			D: "urine specific gravity",
		},
		answer: "B",
		answer_explanation:
			"fluid input and output\n\nAll choices are indicated while monitoring a critically ill neonate receiving mechanical ventilation. I & O fluid monitoring is essential. Managing acid-base balance and the artificial airway are also essential.",
	},
	{
		question:
			"The respiratory therapist is preparing to administer bronchodilation medication by metered dose inhaler (MDI) to a patient with COP",
		options: {
			A: "Prior to administration, the therapist checks the MDI canister to determine if any medication remains. To do this, the therapist should do which of the following?",
			B: "Discharge the canister and visually note the output",
			C: "Ask the patient how many doses have been taken",
			D: "Float the canister in the glass of wa",
		},
		answer: "A",
		answer_explanation:
			"Discharge the canister and visually note the output\n\nThe only suitable method to check a metered dose inhaler for remaining medication is to discharge the canister and visually note the output.",
	},
	{
		question:
			"Inhaled albuterol has which of the following most common side effects?",
		options: {
			A: "increased mPAP",
			B: "nausea",
			C: "systemic hypotension",
			D: "tremors",
		},
		answer: "D",
		answer_explanation:
			"tremors\n\nOne of the most common side effects associated with inhaled albuterol is tremors.",
	},
	{
		question:
			"Which of the following, if present, would suggest ventilatory instability in a patient suspected of opioid overdose?",
		options: {
			A: "MEP of 50 cm H2O",
			B: "MIP of - 38 cm H2O",
			C: "VT of 3.5 mL/kg",
			D: "VC of 12 mL/kg",
		},
		answer: "C",
		answer_explanation:
			"VT of 3.5 mL/kg\n\nAll of the parameters are associated with a stable ability to ventilate except for the VT. Tidal volume should be at least 5 mL/kg of IBW.",
	},
	{
		question:
			"A physician asks the respiratory therapist to evaluate the effectiveness of PEP therapy on a patient with cystic fibrosis. The therapist can conclude the therapy is effective if",
		options: {
			A: "the patient develops rhonchi that clears with coughing",
			B: "increased oxygen saturation during treatment is noted",
			C: "increased inspiratory capacity is observed",
			D: "improved arterial blood gas values are observed",
		},
		answer: "A",
		answer_explanation:
			"the patient develops rhonchi that clears with coughing\n\nOf the options listed the development of rhonchi, which means secretions in the large upper airways, is the best evidence that secretions are being mobilized by the PEP therapy. The other options offered are either too indirect or are not related.",
	},
	{
		question:
			"A patient complains of recent flu-like symptoms and sluggish lower extremities. Which of the following monitoring techniques would be helpful to further assess the patient?",
		options: {A: "MIP", B: "peak flow", C: "inspiratory capacity", D: "FEV1"},
		answer: "A",
		answer_explanation:
			"MIP\n\nThe patient has preliminary sings of Guillain-Barre' Syndrome, which can eventually develop into an ascending paralysis that can ultimately cause the diaphragm to become disabled. Periodic checking of MIP will help to monitor the paralysis and failing ventilatory muscles.",
	},
	{
		question:
			"A conscious patient has an appropriately sized oral pharyngeal airway in place. The patient repeatedly ejects the airway with his tongue and gags when the airway is replaced. Which of the following actions is appropriate?",
		options: {
			A: "administer Pavulon",
			B: "secure the airway with cotton tape",
			C: "administer morphine sulfate",
			D: "discontinue use of the airway",
		},
		answer: "D",
		answer_explanation:
			"discontinue use of the airway\n\nSome patients are too sensitive to have an oral pharyngeal airway. Constant gagging is a sign of that. In such a case the airway is contraindicated.",
	},
	{
		question:
			"A patient diagnosed with bronchiectasis, and who has a tracheostomy, has reported an increase in secretions and secretion thickness. A chest radiograph shows a cavitary disease. The patient is admitted. The respiratory therapist should recommend",
		options: {
			A: "therapy focusing on airway clearance",
			B: "placing the patient in respiratory isolation",
			C: "bronchoscopy to clear secretions",
			D: "routine bronchodilator therapy",
		},
		answer: "A",
		answer_explanation:
			"therapy focusing on airway clearance\n\nA key treatment strategy associated with bronchiectasis is significant, aggressive bronchial hygiene.",
	},
	{
		question:
			"Which of the following results should the respiratory therapist evaluate to determine the adequacy of oxygen transport on a patient who is diagnosed with carbon monoxide poisoning and is being treated with FIO2 of 1.0?",
		options: {
			A: "oxygen consumption at the tissues",
			B: "arterial oxygen content",
			C: "cardiac output",
			D: "arterial-venous oxygen content difference",
		},
		answer: "B",
		answer_explanation:
			"arterial oxygen content\n\nOxygen transport refers to the ability for blood to carry oxygen from the alveoli to the tissues. In a case involving carbon monoxide poisoning, it is transport that is most affected. This is true because hemoglobin becomes occupied with carbon monoxide rather than oxygen. Hemoglobin is 19 times more attracted to carbon monoxide compared to oxygen. Of the options listed, the best method to monitor the adequacy of oxygen transport would be to evaluate the arterial oxygen content. This value takes into account the amount of oxygen tied to the hemoglobin as well as the oxygen dissolved in the plasma of the blood.",
	},
	{
		question:
			"A patient has a balloon-tipped, flow-directed catheter in place in the pulmonary artery. Which pressure can the respiratory therapist expect to obtain from the proximal lumen?",
		options: {A: "CVP", B: "MAP", C: "PAP", D: "PCWP"},
		answer: "A",
		answer_explanation:
			"CVP\n\nThe proximal lumen of a pulmonary artery catheter is situated inside or right before the right atrium. The value measured here is called CVP.",
	},
	{
		question:
			"A patient receiving volume-controlled ventilation weighs 75 kg (165 lb) and is 5 ft, 7 in (170 cm) tall and within ideal body weight. The following clinical data is available:\nMode SIMV Mandatory rate 12 Total rate 32 FIO2 0.40 \nVT 500 mL Exhaled minute volume 9.6 L pH 7.44 \nPaCO2 32 torr PaO2 97 torr HCO3- 22 mEq/L BE +1 mEq/L\nThe respiratory therapist should recommend which of the following changes?",
		options: {
			A: "Reduce mandatory rate to 6",
			B: "Administer sedative medication",
			C: "Institute pressure support of 5 cm H2O",
			D: "Add inspiratory pause",
		},
		answer: "C",
		answer_explanation:
			"Institute pressure support of 5 cm H2O\n\nThis patient has reduced spontaneous tidal volumes. This may be determined by taking minute ventilation and dividing it by rate. This calculation reveals a tidal volume of 300 mL, which is far below the minimum 5 mL/kg tidal volume needed to sustain life. The elevated respiratory rate, in conjunction with a low tidal volume, is an indication that the patient is in need of pressure support. Pressure support will help by increasing the size of spontaneous tidal volumes, which will help naturally lower rate and decrease work of breathing.",
	},
	{
		question:
			"A patient with decreasing pulmonary compliance is receiving volume-controlled ventilation with an I:E ratio of 1:2. A chest radiograph shows increased atelectasis. Blood gases show signs of refractory hypoxemia. Which of the following is an appropriate change for this patient?",
		options: {
			A: "decrease PEEP",
			B: "decrease inspiratory flow rate",
			C: "increase expiratory time",
			D: "increase inspiratory pressure limit",
		},
		answer: "B",
		answer_explanation:
			"decrease inspiratory flow rate\n\nAtelectasis and refractory hypoxemia while, receiving mechanical ventilatory support, is most closely associated with adult respiratory distress syndrome. Patients with this disease benefit most from increased inspiratory time to allow better distribution of gases in the lungs. That is why patients with ARDS are often given an inverse I:E ratio. In order to increase inspiratory time the inspiratory flow rate must be decreased. That is the best option.",
	},
	{
		question:
			"A patient is being paralyzed and intubated in preparation to receive positive pressure ventilation with a volume-cycled ventilator in the control mode. Which of the following alarm settings is most important?",
		options: {
			A: "low return-volume alarm",
			B: "low PEEP alarm",
			C: "low minute ventilation alarm",
			D: "high-pressure alarm",
		},
		answer: "B",
		answer_explanation:
			"low PEEP alarm\n\nThis is a difficult question. When a patient is intubated after being paralyzed, they do not have the ability to signal or perform any kind of physical manifestation should they accidentally become disconnected from the ventilator. Thus, a ventilator alarm is paramount. The most sensitive alarm that would signify an accidental disconnection is the low PEEP alarm. On some ventilators this is called the disconnect alarm. Keep in mind, this alarm is more sensitive than the low pressure or low-volume alarms. In other words, the low PEEP alarm responds faster than any other alarm when a disconnection has occured.",
	},
	{
		question:
			"A patient is receiving volume-controlled ventilation. Which of the following blood gas results is a clear indication for an increase in minute ventilation?",
		options: {
			A: "pH 7.35, PaCO2 60 torr, PaO2 65 torr",
			B: "pH 7.55, PaCO2 26 torr, Pao2 88 torr",
			C: "pH 7.25, PaCO2 55 torr, PaO2 51 torr",
			D: "pH 7.50, PaCO2 30 torr, PaO2 82 torr",
		},
		answer: "C",
		answer_explanation:
			"pH 7.25, PaCO2 55 torr, PaO2 51 torr\n\nThe need to increase minute ventilation can be determined by examining arterial CO2. In this question, two options have an elevated PaCO2, indicating a need to increase ventilation. However one of these options shows a corrected pH, suggesting that the elevated CO2 is normal for that patient. Therefore, the correct answer is the blood gas results that show elevated CO2 with an uncompensated pH. This is called uncompensated respiratory acidosis.",
	},
	{
		question:
			"A patient with COPD is found with shallow respirations and is disoriented to time and place. The patient is receiving oxygen by Venturi mask set at 45%. SpO2 is 99%. The therapist should first do which of the following?",
		options: {
			A: "switch to a nasal cannula at 5 L/min",
			B: "institute mechanical ventilation",
			C: "switch to a nonrebreathing mask set at 12 L/min",
			D: "decrease FIO2 to 0.28",
		},
		answer: "D",
		answer_explanation:
			"decrease FIO2 to 0.28\n\nA patient with COPD should not receive more than 28% oxygen, or more than 1-2 liters per minute by nasal cannula. Excessive oxygen delivery can result in suppression of the ventilatory drive, which can lead to disorientation, hypoventilation, and ventilatory failure. Oxygen saturation should be kept at or below 94%.",
	},
	{
		question:
			"Immediately following arterial blood extraction and the removal of the needle from a patient's radial artery, the respiratory therapist should first",
		options: {
			A: "Label the syringe",
			B: "Place gauze on the site with a pressure bandage",
			C: "Discard the needle in a single entry biohazard device",
			D: "Compress the puncture site",
		},
		answer: "D",
		answer_explanation:
			"Compress the puncture site\n\nThe next action that should be taken, once the syringe is removed from the artery, is compression of the puncture site.",
	},
	{
		question:
			"A respiratory therapist notices the dicrotic notch is missing from the pulmonary artery catheter waveform. After unsuccessfully attempting to resolve the problem by aspiration, the therapist should",
		options: {
			A: "withdraw the catheter",
			B: "advance the catheter",
			C: "rotate the catheter",
			D: "replace the catheter",
		},
		answer: "C",
		answer_explanation:
			"rotate the catheter\n\nThe absence of a dicrotic notch on a pulmonary artery waveform is an indication that the catheter is being occluded in some way. To correct this problem, the therapist should first aspirate the catheter. If this does not remedy pressure dampening, flushing the catheter is the next option. Finally, the catheter should be rotated. The only option given in this question that is appropriate is rotation of the catheter.",
	},
	{
		question:
			"A respiratory therapist has been paged to the neonatal intensive care unit to assess an infant who is 38 weeks of gestation, delivered 3 hours prior. Which of the following would be appropriate to include in the assessment?",
		options: {
			A: "Record of APGAR, at 1 and 5 minutes",
			B: "R/Q value",
			C: "symptoms",
			D: "oxygen index",
		},
		answer: "A",
		answer_explanation:
			'Record of APGAR, at 1 and 5 minutes\n\nAn infant is incapable of communicating problems such as shortness-of-breath and pain. This type of information is considered to be subjective and is also referred to as "symptoms". APGAR scores can be very helpful in directing the further care of the patient. Oxygen index is generally used in complex oxygenation cases and is not really appropriate at this stage in the case.',
	},
	{
		question:
			"The low exhaled volume alarm is sounding on a patient receiving volume controlled ventilation. Which of the following could correct the problem?",
		options: {
			A: "drain excess water in the ventilator circuit",
			B: "suction the patient",
			C: "add air to the ET tube cuff",
			D: "check for a pneumothorax",
		},
		answer: "C",
		answer_explanation:
			"add air to the ET tube cuff\n\nThe solution to this problem is to pick those things that could cause a low volume alarm to sound. In most cases this would be a leak of some sort. When you examine the answers you do not directly see the causes of the alarms but you see the possible solutions. You must examine each solution and determine if the alarm would be a high pressure or a low-pressure alarm or something else. Suctioning the patient would presumably be because of excess secretions and would result in a high-pressure alarm. Adding air to the ET tube cuff, if the cuff was deflated, would result in a low-pressure alarm. So, that option has to be a correct one. Excess water and the ventilator circuit and the possibility of a pneumothorax would both result in a high-pressure alarm, and therefore cannot be the correct answer. Two only is the correct answer.",
	},
	{
		question:
			"A respiratory therapist is called to assist the intubation of a 44-year-old male in acute respiratory failure. Two intubation attempts have been unsuccessful and the patient is still alert and agitated. Which of the following pharmacological agents would best facilitate another intubation attempt?",
		options: {
			A: "norephinephrine (Levophed)",
			B: "Crystodigin (digitalis)",
			C: "Ativan (lorazepam)",
			D: "Isordil",
		},
		answer: "C",
		answer_explanation:
			"Ativan (lorazepam)\n\nWhen a patient is alert and agitated during intubation, muscles of the upper airway may make it more difficult to insert the endotracheal tube. For this cause, a muscle relaxant or sedative is appropriate. Ativan is the only such sedative offered.",
	},
	{
		question:
			"A 12-year-old patient is in the emergency department (ED) with severe bronchoconstriction. The patient has received 4 treatments with albuterol, 2 of them with Atrovent (ipratropium bromide), 13 grams of Solu-Medrol, and is currently receiving continuous albuterol at 8 mg/hr. The patient's peak flow remains less than 50% of predicted. What additional therapy may be helpful to the patient?",
		options: {
			A: "helium-oxygen",
			B: "acetylcysteine",
			C: "dornase alpha (Pulmozyme)",
			D: "Spiriva (tiotropium bromide)",
		},
		answer: "A",
		answer_explanation:
			"helium-oxygen\n\nHelium-oxygen will immediately lower work of breathing by reducing airway resistance. While this action does not solve bronchoconstriction, it allows more time for bronchodilation strategies to become effective.",
	},
	{
		question:
			"A patient does not receive a sufficient bronchodilation response when taking unit dose Albuterol every 4 hours. What can be done to enhance bronchodilation?",
		options: {
			A: "double the dose of Albuterol every 4 hours",
			B: "add 1.0 cc of aqueous epinephrine to every other dose",
			C: "add ipratropium bromide (Atrovent) to every Albuterol treatment",
			D: "add ipratropium bromide (Atrovent) to every other dose",
		},
		answer: "D",
		answer_explanation:
			"add ipratropium bromide (Atrovent) to every other dose\n\nThe addition of Atrovent is likely to enhance the bronchodilation response. However, the recommend frequency for Atrovent is every 6 to 8 hours. Therefore, it cannot be combined with every dose of Albuterol.",
	},
	{
		question:
			"A patient is receiving IPPB therapy by mouthpiece following abdominal surgery and is still somewhat lethargic from the anesthesia. During the treatment, the respiratory therapist notes the IPPB machine frequently fails to cycle into expiration. Which of the following should the therapist do to correct the problem?",
		options: {
			A: "Increase the flow",
			B: "Increase the sensitivity",
			C: "Replace the mouthpiece with an inflatable mask",
			D: "Lower the pressure",
		},
		answer: "C",
		answer_explanation:
			"Replace the mouthpiece with an inflatable mask\n\nA patient who is unable to keep their lips tightly sealed around the mouthpiece, while taking and IPPB therapy treatment, may benefit from the use of a lip-seal device or an inflatable mask.",
	},
	{
		question:
			"A patient in a current myasthenic crisis is being monitored every 2 hours. The most recent evaluation shows: \nMIP -29 cmH2O VC 1.35 L Vt 410 mL RR 24. \nThe respiratory therapist should recommend",
		options: {
			A: "Administer Tensilon",
			B: "Continue to monitor the patient closely",
			C: "Intubate and initiate mechanical ventilatory support",
			D: "Begin incentive spirometry",
		},
		answer: "B",
		answer_explanation:
			"Continue to monitor the patient closely\n\nPatients with myasthenia gravis have a somewhat slow onset of paralysis of ventilatory muscles. The patient should be monitored by examining MIP, VC, and VT. when VC falls below 1 L, the patient should receive mechanical ventilatory support. Prior to that, the patient should be routinely observed and monitored closely.",
	},
	{
		question:
			"Which of the following would be increased in a patient with advanced COPD?",
		options: {A: "FRC", B: "Fev1", C: "Fev1/FVC%", D: "FEF200-1200"},
		answer: "A",
		answer_explanation: "FRC",
	},
	{
		question: "Which of the following is a determinant of Optimal PEEP level?",
		options: {
			A: "consistent cardiac output with increasing plateau pressures",
			B: "decreasing dynamic complianc",
			C: "VD/VT",
			D: "RSBI",
		},
		answer: "A",
		answer_explanation:
			"consistent cardiac output with increasing plateau pressures\n\nOf the options offered, cardiac output relative to plateau pressures is used to determine optimal PEEP.",
	},
	{
		question:
			"A 32-year-old female has a large cancerous mass in the larynx and is having difficulty breathing. A flow-volume loop is rounded in appearance. To prevent ventilatory fatigue, the patient could benefit most from which immediate action?",
		options: {
			A: "heliox therapy",
			B: "tracheostomy",
			C: "BiPAP",
			D: "laryngectomy",
		},
		answer: "A",
		answer_explanation:
			"heliox therapy\n\nA cancerous mass in the upper airway will cause a fixed upper airway obstruction and will lead to increased airway resistance. Because a mass, unlike a temporary condition (like bronchoconstriction), is unable to be immediately resolved, the patient may benefit greatly from Heliox therapy. Helium is less viscous than nitrogen and therefore easier to breathe.",
	},
	{
		question:
			"A patient is receiving 28% aerosol with the oxygen flow meter running at 6 L/min. What is the total flow of gas to the patient?",
		options: {A: "44 L/min", B: "18 L/min", C: "66 L/min", D: "24 L/min"},
		answer: "C",
		answer_explanation:
			"66 L/min\n\nTo determine the answer to this question, one must have memorized the air-oxygen ratios. For 28%, the ratio is 10:1. This means that the Venturi mechanism will incorporate 10 parts air for every 1 part oxygen. One way to solve this problem is to add the ratio numbers together. (10+1= 11). Then, multiply that total by the indicated flow on the oxygen flow meter. In this case, we multiply 6 L per minute by 11. We get a total flow of 66 L/min.",
	},
	{
		question:
			"A patient is receiving volume-controlled ventilation. The ventilator settings and corresponding clinical data are as follows:\nMode Assist/control Mandatory rate 12 Total rate 18 \nFIO2 0.65 Pulse 102/min Blood pressure 135/76 mm Hg(stable) PAP 15 mm HgPaO2 52 torr HCO3- 23 mEq/L BE -1 mEq/L\nThe respiratory therapist should recommend",
		options: {
			A: "decrease mandatory rate to 10/min",
			B: "increase FIO2 0.70",
			C: "begin Bi-level therapy",
			D: "initiate PEEP at 5 cm H2O",
		},
		answer: "D",
		answer_explanation:
			"initiate PEEP at 5 cm H2O\n\nBlood gas results show hypoxemia and hyperventilation. Of these two problems, hypoxemia should be addressed first. To correct hypoxemia, one may either increase FIO2 or PEEP. Because oxygen percentage is already at or above 60% the best option is to initiate PEEP.",
	},
	{
		question:
			"Close observation of a patient's ventilator flow sheet reveals an increase in peak airway pressure of 10 cm H2O over the last 24 hours. Plateau pressure have increased by 5 cm H2O in that same time interval. What condition is present?",
		options: {
			A: "decrease in dynamic compliance only",
			B: "increase in static compliance only",
			C: "decrease in static compliance only",
			D: "decreased dynamic and static compliance",
		},
		answer: "D",
		answer_explanation: "decreased dynamic and static compliance",
	},
	{
		question:
			"The respiratory therapist is asked to estimate the alveolar minute ventilation on a spontaneously breathing 68 kg (150 lb) female who is receiving oxygen therapy by air-entrainment mask at FIO2 0.50. The following data is available\nExhaled VT 450 mL mPAP 15 torr PaCO2 40 torr \nPaO2 70 torr Respiratory rate 12/min\nThe therapist should report an alveolar minute ventilation of:",
		options: {A: "4.6 L/min", B: "12.0 L/min", C: "3.6 L/min", D: "5.4 L/min"},
		answer: "C",
		answer_explanation:
			"3.6 L/min\n\nTo determine alveolar ventilation, dead space should be subtracted from each tidal volume. The amount of dead space per tidal volume is equivalent to 1 mL/lb of ideal body weight. In this case, the patient weighs 200 lbs and therefore has 150 mL of dead space for every inhaled tidal volume. The amount of gas that goes to the alveoli is, therefore, 300 mL per breath or 3.6 L per minute. This is calculated by subtracting 150 mL from 450 mL (the patient's VT) and then multiplying by the respiratory rate.",
	},
	{
		question:
			"Which of the following would be used to lengthen the expiratory time and alter the I:E ratio for a patient receiving PEP therapy?",
		options: {
			A: "injector line",
			B: "tidal volume control",
			C: "pressure control knob",
			D: "expiratory resistance valve",
		},
		answer: "D",
		answer_explanation:
			"expiratory resistance valve\n\nTo answer this question you have to be familiar with a PEP therapy device. To lengthen the expiratory time on this device one should alter the expiratory resistance valve.",
	},
	{
		question:
			"A 75-kg (165 lb), 180-cm (5-ft, 11-in) patient with left-side heart failure is in the intensive care unit (ICU) receiving VC SIMV ventilation on the following settings:\nFIO2 0.65 Rate 14/min VT 550 mL PEEP 5 cm H2O Flow 40 L/min ABGs pH 7.48 PaCO2 33 torr PaO2 155 torr HCO3- 23 mEq/L BE +2 mEq/L HR 98/min SpO2 1.0 SvO2 0.74\nThe respiratory therapist should recommend",
		options: {
			A: "decreasing FIO2 to 0.55.",
			B: "decreasing rate to 10/min.",
			C: "decreasing VT to 450 mL.",
			D: "discontinuing PEEP.",
		},
		answer: "A",
		answer_explanation:
			"decreasing FIO2 to 0.55.\n\nThe patient is hypoventilating and over-oxygenating. Of these two problems, over-oxygenation should be addressed first.",
	},
	{
		question:
			"An infant with refractory hypoxemia is diagnosed with pulmonary hypertension. What would the respiratory therapist expect to provide for this patient?",
		options: {
			A: "oxygen therapy",
			B: "mechanical ventilation",
			C: "heliox therapy",
			D: "nitric oxide",
		},
		answer: "D",
		answer_explanation:
			"nitric oxide\n\nNitric oxide therapy is used to treat pulmonary hypertension. It works by dilating pulmonary vessels, especially when poor perfusion is present. The dosage is expressed in parts per million (ppm).",
	},
	{
		question:
			"The following data is available on a 61-kg (135-lb) male patient receiving VC SIMV ventilation:\nVentilator settings: FIO2 0.45 VT 450 mL PEEP 4 cm H2O Mandatory rate 12/min\nABGs pH 7.41 PaCO2 39 mm Hg PaO2 85 mm Hg \nHCO3- 24 mEq/L BE 0 mEq/L\nIf PAO2 is determined to be 204 mm Hg, which of the following best represents the patient's condition?",
		options: {
			A: "pulmonary hypertension",
			B: "pulmonary embolism",
			C: "V/Q mismatching",
			D: "venous admixture (shunting)",
		},
		answer: "C",
		answer_explanation:
			"V/Q mismatching\n\nThe A-aDO2 (PAO2 - PaO2) is 119 mm Hg. A-aDO2 values greater than 65 mm Hg but less than 300 mm Hg are consistent with V/Q mismatching.",
	},
	{
		question:
			"A respiratory therapist auscultates rhonchi over the left chest of a tracheostomy patient with left-sided pneumonia. Which of the following would be most beneficial for the bronchial hygiene of the patient?",
		options: {
			A: "closed system suction catheter",
			B: "coude suction catheter",
			C: "mechanical precursor",
			D: "Mucomyst",
		},
		answer: "B",
		answer_explanation:
			"coude suction catheter\n\nIn theory, a straight suction catheter would ultimately advance into the right main stem bronchus if the catheter is inserted beyond the Carina. This is because the right lung bifurcates from the trachea at a less acute angle and therefore all objects that enter have a tendency to go into the right lung. To suction the left lung, a Coude suction catheter has a tip that is bent slightly. The purpose of this type suction catheter is to enter the left main stem bronchus and perform bronchial hygiene.",
	},
	{question: "", options: {}, answer: "[][][]", answer_explanation: "[][][]"},
]
