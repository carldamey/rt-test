const quizData = [
	{
		question:
			"Condensation has developed on the fuel cell of a galvanic oxygenation analyzer. Which of the following is true?\n\n A. The fuel cell should be replaced\n B. The analyzer will still function properly\n C. The gold grid in the analyzer should be replaced\n D. The reading will be erroneous",
		options: {
			A: "The fuel cell should be replaced",
			B: "The analyzer will still function properly",
			C: "The gold grid in the analyzer should be replaced",
			D: "The reading will be erroneous",
		},
		answer: "D",
		answer_explanation:
			"The reading will be erroneous\n\nCondensation on the fuel cell of a galvanic-type oxygen analyzer may result in an erroneous reading of oxygen percentage.",
	},
	{
		question:
			"A sputum gram stain report indicates the presence of a gram-positive organism (diplococcus) in the sputum. The following data is available:\n\nWBC 28,000 cu mm \nHb 14.5 g/dL\nRBC 4.6 g/dL\nHCT 42%\n\nWhich of the following medication would be most appropriate?\n A. vancomycin\n B. gentamycin\n C. budesonide\n D. amoxicillin",
		options: {
			A: "vancomycin",
			B: "gentamycin",
			C: "budesonide",
			D: "amoxicillin",
		},
		answer: "D",
		answer_explanation:
			"amoxicillin\n\nGram positive organisms, such as diplococcus, staphylococcus, etc) are treated using penicillin class antimicrobials. These include penicillin, amoxicillin, carbenicillin, and others.",
	},
	{
		question:
			"Which of the following data should be recorded in the patient's medical record after the therapist coaches a post-op patient through sustained maximal inhalation therapy with a volume-oriented incentive spirometer?\n\n A. expiratory reserve volume\n B. inspiratory reserve volume\n C. inspiratory capacity\n D. vital capacity",
		options: {
			A: "expiratory reserve volume",
			B: "inspiratory reserve volume",
			C: "inspiratory capacity",
			D: "vital capacity",
		},
		answer: "C",
		answer_explanation:
			"inspiratory capacity\n\nIf the patient is using a volume oriented incentive spirometer, inspiratory capacity must be included in the documentation in the medical record.",
	},
	{
		question:
			"A 39-week gestational age neonate delivered 1 hour prior requires oxygen by hood. Which of the following devices should be assembled?\n\n1. aerosol heater\n2. O2/air blender\n3. large-bore tubing\n4. oxygen analyzer\n\n A. 2, 3, and 4\n B. 1, 2, 3, and 4\n C. 1, 3, and 4\n D. 1, 2, and 3",
		options: {
			A: "2, 3, and 4",
			B: "1, 2, 3, and 4",
			C: "1, 3, and 4",
			D: "1, 2, and 3",
		},
		answer: "B",
		answer_explanation:
			"1, 2, 3, and 4\n\nBecause maintaining constant body temperature is paramount for an infant, use of an aerosol heater is important. An oxygen-air blender, along with large-bore corrugated tubing will also be needed to deliver supplemental oxygen. Additionally, an oxygen analyzer will be needed to determine, maintain, and adjust FIO2 as needed.",
	},
	{
		question:
			"The respiratory therapist notices a disparity in the heart rate as reported by an SpO2 monitor and a finger probe compared to a palpated heart rate. Which can best explain this?\n\n1. poor peripheral perfusion \n2. excessive ambient light\n3. presence of finger-nail polish\n4. low hemoglobin\n\n A. 1, 2, and 3 only\n B. 1 and 4 only\n C. 2 and 3 only\n D. 2, 3, and 4 only",
		options: {
			A: "1, 2, and 3 only",
			B: "1 and 4 only",
			C: "2 and 3 only",
			D: "2, 3, and 4 only",
		},
		answer: "A",
		answer_explanation: "1, 2, and 3 only",
	},
	{
		question:
			"A 150-lb (68-kg) male is receiving volume-cycled mechanical ventilation on the following settings:\n\nMode SIMV \nRate 16\nVT 450 mL\nFIO2 0.45\nPEEP 12 cm H2O\nPeak Pressure 32 cm H2O\n\nWhich of the following alarm settings is most appropriate?\n\n A. Low VT 350 mL, low pressure 22 cmH2O, high pressure 45 cmH2O\n B. Low VT 350 mL, low pressure 30 cmH2O, high pressure 35 cmH2O\n C. Low VT 400 mL, low pressure 20 cmH2O, high pressure 50 cmH2O\n D. Low VT 300 mL, low pressure 30 cmH2O, high pressure 48 cmH2O",
		options: {
			A: "Low VT 350 mL, low pressure 22 cmH2O, high pressure 45 cmH2O",
			B: "Low VT 350 mL, low pressure 30 cmH2O, high pressure 35 cmH2O",
			C: "Low VT 400 mL, low pressure 20 cmH2O, high pressure 50 cmH2O",
			D: "Low VT 300 mL, low pressure 30 cmH2O, high pressure 48 cmH2O",
		},
		answer: "A",
		answer_explanation:
			"Low VT 350 mL, low pressure 22 cmH2O, high pressure 45 cmH2O\n\nThe low VT alarm should be set at 100 mL below VT, low-pressure should be set at 10 cm H2O below baseline peak pressures, and the high-pressure limit alarms should be set 10-15 cm H2O above the baseline peak pressure.",
	},
	{
		question:
			"A patient is orally intubated and receiving mechanical ventilation. The respiratory therapist notes the PetCO2 monitor is persistently reading 60 mmHg. Which of the following can the therapist conclude?\n\n A. the patient is being hyperventilated\n B. the CO2 detector is covered with condensate\n C. minute ventilation should be increased\n D. the infrared device is not working properly",
		options: {
			A: "the patient is being hyperventilated",
			B: "the CO2 detector is covered with condensate",
			C: "minute ventilation should be increased",
			D: "the infrared device is not working properly",
		},
		answer: "C",
		answer_explanation:
			"minute ventilation should be increased\n\nEnd-tidal CO2 is correlated to arterial CO2. An end-tidal CO2 reading of 60 mmHg correlates with an arterial CO2 of 70 mmHg. This is clearly hypoventilation and should be addressed by increasing minute ventilation.",
	},
	{
		question:
			"Local FEMA representatives have asked a hospital to prepare for intermittent, sweeping power outages in the area due to a nearby passing F4 hurricane. Which of the following would be the most important preparation that a respiratory care supervisor should consider?\n\n A. Call for extra staff to report the hospital.\n B. Instruct nurses on proper techniques for providing manual resuscitation.\n C. Contract an equipment rental company for extra ventilators.\n D. Check the function of back-up power outlets (red plugs) in critical areas.",
		options: {
			A: "Call for extra staff to report the hospital.",
			B: "Instruct nurses on proper techniques for providing manual resuscitation.",
			C: "Contract an equipment rental company for extra ventilators.",
			D: "Check the function of back-up power outlets (red plugs) in critical areas.",
		},
		answer: "D",
		answer_explanation:
			"Check the function of back-up power outlets (red plugs) in critical areas.\n\nOf the options listed, checking for the proper operation of red plugs during a power outage is most helpful. It would also be appropriate to ensure vital equipment (life support machines) are plugged into those red outlets.",
	},
	{
		question:
			"Which is the preferred order to manipulate a mechanical ventilator in order to gradually increase alveolar minute ventilation while limiting MAP?\n\n A. increase VT, increase RR, decrease mechanical deadspace\n B. increase RR, decrease mechanical deadspace, increase VT\n C. increase VT, decrease mechanical deadspace, increase RR\n D. decrease mechanical deadspace, increase VT, increase RR",
		options: {
			A: "increase VT, increase RR, decrease mechanical deadspace",
			B: "increase RR, decrease mechanical deadspace, increase VT",
			C: "increase VT, decrease mechanical deadspace, increase RR",
			D: "decrease mechanical deadspace, increase VT, increase RR",
		},
		answer: "D",
		answer_explanation:
			"decrease mechanical deadspace, increase VT, increase RR\n\nMAP, or mean airway pressure, does not increase as mechanical deadspace is decreased. Increasing the tidal volume will increase the mean airway pressure, but not as much as increasing the respiratory rate will.",
	},
	{
		question:
			"Which of the following cannot be measured or evaluated in a comatose patient?\n\n A. tidal volume\n B. pupillary response\n C. objective information\n D. symptoms",
		options: {
			A: "tidal volume",
			B: "pupillary response",
			C: "objective information",
			D: "symptoms",
		},
		answer: "D",
		answer_explanation:
			"symptoms\n\nIf the patient is comatose, they cannot cooperate with procedures or follow commands. To answer this question one must pick the option that does not require compliance with verbal commands. Symptoms, coming from the root word sympathy, require the patient to tell you something. From the list only a tidal volume can be measured without help from the patient. But, the question is asking which of the following CANNOT be measured in a comatose patient. Therefore symptoms, vital capacity, maximum inspiratory pressure are all appropriate answers.",
	},
	{
		question:
			"Prior to intubation, a physician has ordered succinylcholine chloride (Anectine) for a male patient to facilitate the procedure. Which of the following is true regarding this medication?\n\n A. can be reversed with Atropine\n B. also known as Pavulon\n C. response time is 30 minutes\n D. intubation should begin once muscle twitching is observed about the face and neck",
		options: {
			A: "can be reversed with Atropine",
			B: "also known as Pavulon",
			C: "response time is 30 minutes",
			D: "intubation should begin once muscle twitching is observed about the face and neck",
		},
		answer: "D",
		answer_explanation:
			"intubation should begin once muscle twitching is observed about the face and neck\n\nSuccinylcholine chloride is a fast-acting paralytic. Paralysis is indicated when twitching is seen about the face and neck. It is also known as Anectine, not Pavulon. Atropine will not reverse its effects.",
	},
	{
		question:
			"What pulmonary function maneuver will reveal information required to diagnose COPD?\n\n A. SBN2\n B. FVC\n C. DLCO\n D. SVC",
		options: {A: "SBN2", B: "FVC", C: "DLCO", D: "SVC"},
		answer: "B",
		answer_explanation:
			"FVC\n\nAlthough FVC is a volume, which is not directly helpful in diagnosing COPD, the actual name of the maneuver that is used to establish flow rates such as FEV1, is forced vital capacity (FVC). This can be confusing because the FVC is an actual volume, but when compared to time it also produces flow data, which is used to diagnose obstructive lung disease.",
	},
	{
		question:
			"A patient who is being intubated prior to being placed on mechanical ventilation receives vecuronium (Norcuron). Which of the following ventilator alarms will be the most important when the patient is placed on the ventilator?\n\n A. low pressure\n B. I:E ratio\n C. high inspiratory pressure\n D. low PEEP",
		options: {
			A: "low pressure",
			B: "I:E ratio",
			C: "high inspiratory pressure",
			D: "low PEEP",
		},
		answer: "A",
		answer_explanation:
			'low pressure\n\nA patient who is under the influence of paralytic medication, for the purpose of intubation, should be monitored closely for accidental disconnection of the ventilator. Normally, a patient who is not paralyzed may show physical signs of respiratory difficulty if they inadvertently become disconnected. However, a patient who is paralyzed is unable to show such signs. The low-pressure alarm setting is a useful alarm that will show any inadvertent disconnection from the ventilator. Although not listed here, a better, more sensitive alarm would the the "low-PEEP" alarm, sometimes called a "disconnect alarm"',
	},
	{
		question:
			"A 68-year-old, male patient with COPD is participating in a pulmonary rehabilitation program. During a walking activity, the patient's SpO2 falls to 88% while receiving 1 L/min by nasal cannula. Which of the following would be an appropriate reaction to the decline in oxygenation during exercise?\n\n A. Avoid the walking activity for one month then reassess.\n B. Ask the patient how he feels.\n C. Increase oxygen to 3 L/min during the activity.\n D. Continue the activity, monitor the patient's subjective condition.",
		options: {
			A: "Avoid the walking activity for one month then reassess.",
			B: "Ask the patient how he feels.",
			C: "Increase oxygen to 3 L/min during the activity.",
			D: "Continue the activity, monitor the patient's subjective condition.",
		},
		answer: "C",
		answer_explanation: "Increase oxygen to 3 L/min during the activity.",
	},
	{
		question:
			"Which of the following PaO2 ranges is acceptable for a patient with ARDS according to the ARDSnet protocol?\n\n A. 60 to 100 mm Hg\n B. 70 to 85 mm Hg\n C. 50 to 65 mm Hg\n D. 55 to 80 mm Hg",
		options: {
			A: "60 to 100 mm Hg",
			B: "70 to 85 mm Hg",
			C: "50 to 65 mm Hg",
			D: "55 to 80 mm Hg",
		},
		answer: "D",
		answer_explanation:
			"55 to 80 mm Hg\n\nAccording to the ARDSnet protocol, PaO2 should be kept between 55 and 80 mm Hg during ventilatory support. This is known as permissive hypoxemia.",
	},
	{
		question:
			"After instructing a patient and demonstrating the proper use of a metered dose inhaler with a valved holding chamber, the patient performs the maneuver by placing the chamber in his mouth, actuating the cannister, and then exhaling prior to performing inhalation. The respiratory therapist should\n\n A. remove the cannister and have the patient reattempt the dose delivery.\n B. instruct the patient to inhale while depressing the cannister.\n C. document that the education was effective.\n D. re-instruct the patient to inhale immediately after actuation of the cannister.",
		options: {
			A: "remove the cannister and have the patient reattempt the dose delivery.",
			B: "instruct the patient to inhale while depressing the cannister.",
			C: "document that the education was effective.",
			D: "re-instruct the patient to inhale immediately after actuation of the cannister.",
		},
		answer: "D",
		answer_explanation:
			"re-instruct the patient to inhale immediately after actuation of the cannister.\n\nIf the patient exhales through the chamber immediately after actuating the inhaler, the medication may be ejected through the valve and out of the chamber. This would discard the medication. After depressing the cannister, the first action should be to inhale through the chamber.",
	},
	{
		question:
			"A patient receiving PSV with pressure of 12 cm H2O is demonstrating signs of increased work of breathing. RR 24/min. VT(spont) 180 mL. SpO2 88%. The physician orders an increase in the PS pressure. This will result in an increase in which of the following?\n\n A. PAO2\n B. cardiac index\n C. functional hemoglobin\n D. alveolar ventilation",
		options: {
			A: "PAO2",
			B: "cardiac index",
			C: "functional hemoglobin",
			D: "alveolar ventilation",
		},
		answer: "D",
		answer_explanation: "alveolar ventilation",
	},
	{
		question:
			"Decreasing the duration of applied suction pressure is most appropriate when the patient is experiencing\n\n A. a strong cough with suction attempts.\n B. effective secretion clearance.\n C. bradycardia with suction attempts.\n D. retained secretions.",
		options: {
			A: "a strong cough with suction attempts.",
			B: "effective secretion clearance.",
			C: "bradycardia with suction attempts.",
			D: "retained secretions.",
		},
		answer: "C",
		answer_explanation:
			"bradycardia with suction attempts.\n\nThe respiratory therapist should decrease suction pressure if mucosal trauma or cardiac distresss is noted during the suction procedure.",
	},
	{
		question:
			"A 57-year-old cachectic male patient with known COPD is receiving oxygen by nasal cannula at 5 L/min. The patient is very drowsy with a respiratory rate of 8/min. Oxygen saturation is 100%. The therapist should\n\n A. draw an arterial blood gas.\n B. reduce supplemental oxygen delivery.\n C. place on a NRB mask.\n D. obtain a CT scan.",
		options: {
			A: "draw an arterial blood gas.",
			B: "reduce supplemental oxygen delivery.",
			C: "place on a NRB mask.",
			D: "obtain a CT scan.",
		},
		answer: "B",
		answer_explanation:
			"reduce supplemental oxygen delivery.\n\nA patient with COPD should not receive more than 1 to 2 L/min by nasal cannula or more than 28% oxygen. If excessive oxygen is administered the patient may experience a reduced ventilatory drive. Optimal oxygen saturation for a patient with COPD is between 92 and 94%.",
	},
	{
		question:
			"A patient is receiving noninvasive ventilation with no back-up rate. RR is 34/min. Accessory muscle use is noted. SpO2 is 94%. The therapist should\n\n A. increase IPAP.\n B. increase EPAP.\n C. decrease EPAP.\n D. introduce a ramp time.",
		options: {
			A: "increase IPAP.",
			B: "increase EPAP.",
			C: "decrease EPAP.",
			D: "introduce a ramp time.",
		},
		answer: "A",
		answer_explanation:
			"increase IPAP.\n\nBecause spontaneous respiratory rate is elevated, an increase in ventilation is warranted. Additionally, SpO2 appears adequate. Thus, an increase in IPAP is the best option. This will increase the distance between IPAP and EPAP pressures, which will result in an increase in ventilation.",
	},
	{
		question:
			"What would occur on a time-cycled ventilator with a fixed rate if the inspiratory flow rate were reduced?\n\n A. increase in inspiratory time\n B. increase in tidal volume\n C. decrease in inspiratory time\n D. decrease in tidal volume",
		options: {
			A: "increase in inspiratory time",
			B: "increase in tidal volume",
			C: "decrease in inspiratory time",
			D: "decrease in tidal volume",
		},
		answer: "D",
		answer_explanation:
			"decrease in tidal volume\n\nOn a time cycle ventilator, with a fixed rate and a fixed inspiratory time, if inspiratory flow rate is decreased, the result would be a decrease in tidal volume.",
	},
	{
		question:
			"Which of the following precautions should be taken when performing nasal tracheal suctioning on a patient who has a tendency for mucosal bleeding?\n A. Stop all blood-thinning medication prior to suctioning\n B. Apply intermittent suctioning during withdraw of the catheter\n C. Be gentle\n D. Keep suctioning to no longer than 30 second",
		options: {
			A: "Stop all blood-thinning medication prior to suctioning",
			B: "Apply intermittent suctioning during withdraw of the catheter",
			C: "Be gentle",
			D: "Keep suctioning to no longer than 30 second",
		},
		answer: "C",
		answer_explanation:
			"Be gentle\n\nThe most common hazard of suctioning is mucosal bleeding. The best way to prevent mucosal damage and injury is to use water-soluble lubricant and a gentle technique when suctioning.",
	},
	{
		question:
			"A patient who has a tracheostomy is complaining of dried secretions and difficulty expectorating sputum from the tracheostomy tube. Which of the following will be most helpful to the patient?\n\n A. Ensure inspired gas temperature is 35 deg C and humidified\n B. Chest physiotherapy\n C. PEP therapy\n D. Administer Acetylcysteine (Mucomyst)",
		options: {
			A: "Ensure inspired gas temperature is 35 deg C and humidified",
			B: "Chest physiotherapy",
			C: "PEP therapy",
			D: "Administer Acetylcysteine (Mucomyst)",
		},
		answer: "A",
		answer_explanation:
			"Ensure inspired gas temperature is 35 deg C and humidified\n\nSecretions are best hydrated with heated humidity. This is especially true for patients who are orally or nasally intubated. In order to deliver proper humidification, inspired gases must be at temperatures that are close to normal body temperature (37 deg C).",
	},
	{
		question:
			"A 40-year-old female is brought to the emergency department (ED) after being found down in a burning building. A quick assessment reveals singed nasal hairs and cherry-red arytenoids. She is on a non-rebreathing mask and oxygen SAT is 97%. Which of the following interventions should be given priority?\n\n A. COHb determination from arterial blood\n B. multiple wave-length spectrophotometry\n C. blind oral intubation\n D. intubation with a bronchoscope",
		options: {
			A: "COHb determination from arterial blood",
			B: "multiple wave-length spectrophotometry",
			C: "blind oral intubation",
			D: "intubation with a bronchoscope!@#Patients who have had exposure to extremely heated air masses, such as seen with firefighters, are at risk for swelling of the tissues in the upper airways and ultimate loss of that airway. Priority, therefore, is to ensure an airway through intubation. However, blind intubation is extremely dangerous because probing those tissues with an endotracheal tube may incite additional inflammation and cause complete closure of the airway. Intubating with direct visualization is most appropriate. Usually, this means the use of a bronchosco",
		},
		answer: "[][][]",
		answer_explanation: "[][][]",
	},
	{
		question:
			"To calculate alveolar minute ventilation, the respiratory therapist should\n\n A. measure while the patient is receiving mechanical ventilation.\n B. multiply the RR by the VT.\n C. measure with a metabolic cart study.\n D. subtract anatomical deadspace from the VT, then multiply by the RR.",
		options: {
			A: "measure while the patient is receiving mechanical ventilation.",
			B: "multiply the RR by the VT.",
			C: "measure with a metabolic cart study.",
			D: "subtract anatomical deadspace from the VT, then multiply by the RR.",
		},
		answer: "D",
		answer_explanation:
			"subtract anatomical deadspace from the VT, then multiply by the RR.\n\nAlveolar ventilation is calculated by subtracting the anatomical dead space from the tidal volume then multiplying by the respiratory rate. If the weight is known, the absolute value in pounds can be used to estimate anatomical deadspace. For example a patient weighing 130 pounds would have 130 mL of anatomical dead space. If weight is unknown, anatomical dead space should be estimated at 150 mL.",
	},
	{
		question:
			"An 8-year-old pediatric patient with a 6.0 mm endotracheal tube requiring endotracheal suctioning is experiencing bradycardia during the procedure. Suction pressure is set to -100 mm Hg. A respiratory therapist is suctioning for approximately 15 seconds using a 9 Fr catheter and is able to clear the airway effectively. To remedy the problem, the therapist should\n\n A. decrease suction duration time.\n B. decrease catheter size.\n C. increase the pressure to -110 mm Hg and decrease duration to 5 seconds.\n D. decrease the suction pressure.",
		options: {
			A: "decrease suction duration time.",
			B: "decrease catheter size.",
			C: "increase the pressure to -110 mm Hg and decrease duration to 5 seconds.",
			D: "decrease the suction pressure.",
		},
		answer: "A",
		answer_explanation:
			"decrease suction duration time.\n\nIf suctioning is not adequate, correct the problem in this order:_x000D_ 1. check connections, change collection bottle if full 2. ensure suction pressure is in the right range 3. increase to the maximum size catheter within range 4. increase pressure within range 5. increase suction time",
	},
	{
		question:
			"A patient with myasthenia gravis presents to the clinic with a fever, suspected pneumonia secondary to an infiltrate seen on a chest radiograph, and the following ABG results:\n\npH 7.33 P\naCO2 47 torr\nPaO2 85 torr\nHCO3- 26 mEq/L\nFIO2 0.21\n\nBased upon this information, the patient needs\n A. oxygen at 2 L/min nasal cannula.\n B. pulmonary function testing.\n C. intubation.\n D. antibiotic therapy.",
		options: {
			A: "oxygen at 2 L/min nasal cannula.",
			B: "pulmonary function testing.",
			C: "intubation.",
			D: "antibiotic therapy.",
		},
		answer: "D",
		answer_explanation:
			"antibiotic therapy.\n\nIn this example, we see a problem with ventilation as the PaCO2 is 47 torr. However, there is no option that will resolve ventilation, therefore we must look to the scenario for other problems. There is an underlying problem of infection for which antibiotic therapy is indicated.",
	},
	{
		question:
			"A 50-year-old male presents in the emergency department (ED) complaining of frequent vomiting. Arterial blood gas results on room air show:\n\npH 7.54 \nPaCO2 41 torr\nPaO2 96 torr\nHCO3- 30 mEq/L\nBE +6 mEq/L\n\nWhich of the following would account for this blood gas anomaly?\n A. K+ 3.4 mEq/L\n B. Cl- 110 mEq/L\n C. K+ 4.9 mEq/L\n D. Hyperventilation",
		options: {
			A: "K+ 3.4 mEq/L",
			B: "Cl- 110 mEq/L",
			C: "K+ 4.9 mEq/L",
			D: "Hyperventilation",
		},
		answer: "A",
		answer_explanation:
			"K+ 3.4 mEq/L\n\nCarbon dioxide in this blood gas shows adequate ventilation. However, a pH of 7.54 is an indication of alkalosis. Because the alkalosis cannot be attributed to an elevated CO2, it must be caused metabolically. Observation of the bicarb shows an elevation. Of the options offered the most likely cause of this elevation is the potassium of 3.4 mEq/L.",
	},
	{
		question:
			"Which of the following could be associated with asymmetrical chest rise?\n\n A. COPD\n B. cystic fibrosis\n C. significant atelectasis\n D. pleural effusion",
		options: {
			A: "COPD",
			B: "cystic fibrosis",
			C: "significant atelectasis",
			D: "pleural effusion",
		},
		answer: "C",
		answer_explanation:
			"significant atelectasis\n\nOf the options given, only atelectasis is associated with asymmetrical chest rise.",
	},
	{
		question:
			"A physician asks the respiratory therapist to evaluate the effectiveness of PEP therapy on a patient with cystic fibrosis. The therapist can conclude the therapy is effective if\n\n A. increased inspiratory capacity is observed\n B. improved arterial blood gas values are observed\n C. increased oxygen saturation during treatment is noted\n D. the patient develops rhonchi that clears with coughing",
		options: {
			A: "increased inspiratory capacity is observed",
			B: "improved arterial blood gas values are observed",
			C: "increased oxygen saturation during treatment is noted",
			D: "the patient develops rhonchi that clears with coughing",
		},
		answer: "D",
		answer_explanation:
			"the patient develops rhonchi that clears with coughing\n\nOf the options listed the development of rhonchi, which means secretions in the large upper airways, is the best evidence that secretions are being mobilized by the PEP therapy. The other options offered are either too indirect or are not related.",
	},
	{
		question:
			"The respiratory therapist is paged to the intensive care unit (ICU) to assess a patient who has just self-extubated. Currently, the patient is resting comfortably with an SpO2 of 98% on FIO2 0.40 by air-entrainment mask. Respiratory rate is 14/min and breath sounds are normal, for a mild inspiratory stridor which is audible without the stethoscope. The therapist will recommend:\n\n A. Switch to cool aerosol at FIO2 0.40\n B. Send the patient to surgery for a tracheostomy\n C. Re-intubate the patient\n D. Administer racemic epinephrine - 3 doses 20 minutes apart",
		options: {
			A: "Switch to cool aerosol at FIO2 0.40",
			B: "Send the patient to surgery for a tracheostomy",
			C: "Re-intubate the patient",
			D: "Administer racemic epinephrine - 3 doses 20 minutes apart",
		},
		answer: "A",
		answer_explanation:
			"Switch to cool aerosol at FIO2 0.40\n\nMild inspiratory stridor may be treated with racemic epinephrine and/or cool aerosol. In this case, since the patient is already receiving 40% by air-entrainment device, switching to a cool aerosol is the best option. Multiple doses of racemic epinephrine are not indicated.",
	},
	{
		question:
			"A patient's chest radiograph shows consolidation in the right middle and lower lobes. What additional finding is likely?\n\n A. increased FRC and air-trapping\n B. dull to percussion over the affected areas\n C. radiologic evidence of a pulmonary embolism\n D. significant tracheal deviation to the left",
		options: {
			A: "increased FRC and air-trapping",
			B: "dull to percussion over the affected areas",
			C: "radiologic evidence of a pulmonary embolism",
			D: "significant tracheal deviation to the left",
		},
		answer: "B",
		answer_explanation:
			"dull to percussion over the affected areas\n\nConsolidation indicates pneumonia. With diagnostic chest percussion, a dull sound would be emitted over areas of consolidation. Tracheal deviation could occur, but it would most likely be toward the affected side (the right). Neither an increase in FRC nor a pulmonary embolism is related, given the current data.",
	},
	{
		question:
			"A respiratory therapist notes a newborn has an order for daily administration of caffeine citrate at home when discharged. What home monitoring would be appropriate?\n\n A. continuous SpO2\n B. Holter\n C. APGAR determination daily\n D. apnea monitoring",
		options: {
			A: "continuous SpO2",
			B: "Holter",
			C: "APGAR determination daily",
			D: "apnea monitoring",
		},
		answer: "D",
		answer_explanation:
			"apnea monitoring\n\nCaffeine citrate is a medication used to stimulate a patient's respiratory drive. If a newborn is ordered this medication, it is likely that the physician has concerns regarding the patient's natural respiratory drive and therefore, of the options given, apnea monitoring would be a consistent care technique.",
	},
	{
		question:
			"The on-coming respiratory therapist reads the documentation on a patient receiving non-invasive positive pressure ventilation. The record indicates an increase in static compliance over the last eight hours. What adjustment should the therapist make to maintain the ordered tidal volume?\n\n A. decrease IPAP\n B. reestablish baseline flows\n C. increase the pressure limit\n D. decrease EPAP",
		options: {
			A: "decrease IPAP",
			B: "reestablish baseline flows",
			C: "increase the pressure limit",
			D: "decrease EPAP",
		},
		answer: "A",
		answer_explanation:
			"decrease IPAP\n\nAn increase in static compliance indicates the lungs are more pliable. To maintain a constant tidal volume, inspiratory pressure should be decreased.",
	},
	{
		question:
			"A patient with increased airway resistance from a fixed upper airway obstruction would benefit most from which of the following?\n A. aerosolized atropine\n B. bronchodilator therapy\n C. epinephrine\n D. heliox therapy",
		options: {
			A: "aerosolized atropine",
			B: "bronchodilator therapy",
			C: "epinephrine",
			D: "heliox therapy",
		},
		answer: "D",
		answer_explanation:
			"heliox therapy\n\nA fixed upper airway obstruction means air is having difficulty moving both in and out. It is usually caused by cancer or other non-changeable conditions. In this case the best thing we can do is decrease airway resistance by using helium or Heliox therapy.",
	},
	{
		question:
			"Which of the following is the most significant complication of bronchoscopy?\n A. vagal nerve stimulation\n B. coughing\n C. laryngospasms\n D. hypotension",
		options: {
			A: "vagal nerve stimulation",
			B: "coughing",
			C: "laryngospasms",
			D: "hypotension",
		},
		answer: "C",
		answer_explanation:
			"laryngospasms\n\nThe most significant complication of a bronchoscopy is laryngospasm. This tendency may be reduced by administering aerosolized Lidocaine or any other tissue numbing agent prior to the procedure.",
	},
	{
		question:
			"A patient begins to gag significantly immediately after the placement of an oral pharyngeal airway. The respiratory therapist should\n\n A. remove the airway and try something smaller.\n B. switch to a nasal pharyngeal airway.\n C. provide sedation for the patient.\n D. replace it with an oral endotracheal tube.",
		options: {
			A: "remove the airway and try something smaller.",
			B: "switch to a nasal pharyngeal airway.",
			C: "provide sedation for the patient.",
			D: "replace it with an oral endotracheal tube.",
		},
		answer: "A",
		answer_explanation:
			"remove the airway and try something smaller.\n\nGagging after the placement of an oropharyngeal airway (an OPA) is likely due to an excessively long OPA. A smaller airway may be more appropriate.",
	},
	{
		question:
			"Multiple wavelength spectrophotometry oxygen saturation is 97% on a patient with a respiratory rate of 14/min, heart rate 80/min, and clear breath sounds. Arterial blood gas results are as follows:\npH 7.42 \nPaCO2 37 torr\nPaO2 125 torr\nHCO3- 25 mEq/L\nFIO2 0.21\n\nWhat should the respiratory therapist recommend?\n A. Conduct proficiency testing on the Clark electrode.\n B. Discontinue supplemental oxygen.\n C. Check the most recent quality control values.\n D. Run a two-point calibration on the ABG analyzer, then repeat the sample.",
		options: {
			A: "Conduct proficiency testing on the Clark electrode.",
			B: "Discontinue supplemental oxygen.",
			C: "Check the most recent quality control values.",
			D: "Run a two-point calibration on the ABG analyzer, then repeat the sample.",
		},
		answer: "D",
		answer_explanation:
			"Run a two-point calibration on the ABG analyzer, then repeat the sample.\n\nIn this example, the PaO2 is not possible while breathing on room air, which can be seen more easily after calculating the alveolar air equation. A multiple wavelength spectophotometer (oximeter) is a non-invasive way to measure oxygen saturation, metHb, COHb, etc. The ABG analyzer should be recalibrated and the sample repeated.",
	},
	{
		question:
			"A routine screening blood gas performed on an asymptomatic patient prior to surgery shows the following:\npH 7.38 \nPaCO2 42 mm Hg\nPaO2 80 mm Hg\nHCO3- 26 mEq/L\nSaO2 96%\nCOHb 24%\n\nWhat should the respiratory therapist do?\n A. Place the patient on a NRB mask\n B. Evaluate saturation using a single wave-length spectrophotometer\n C. Report the findings and emphasize that the patient is likely a smoker\n D. Run quality control material and evaluate the accuracy of the Co-oximeter",
		options: {
			A: "Place the patient on a NRB mask",
			B: "Evaluate saturation using a single wave-length spectrophotometer",
			C: "Report the findings and emphasize that the patient is likely a smoker",
			D: "Run quality control material and evaluate the accuracy of the Co-oximeter",
		},
		answer: "D",
		answer_explanation:
			"Run quality control material and evaluate the accuracy of the Co-oximeter\n\nIn this case the patient is presented as asymptomatic. A patient with a carboxyhemoglobin level of 24% would feel dyspnea and present with tachypnea. Therefore, the respiratory therapist should evaluate the accuracy of the laboratory results, specifically the carboxyhemoglobin (COHb). When checking accuracy of lab results, one would use quality control measures.",
	},
	{
		question:
			"Due to an air leak, a respiratory therapist adds air to the cuff of an endotracheal tube inserted five hours prior in the emergency room. Cuff pressure following a minimal-seal technique is 32 mm Hg. The therapist should recommend\n\n A. advancing the tube 2 cm\n B. minimal-leak cuff management\n C. a larger tube\n D. a radiologic view of the tube",
		options: {
			A: "advancing the tube 2 cm",
			B: "minimal-leak cuff management",
			C: "a larger tube",
			D: "a radiologic view of the tube",
		},
		answer: "C",
		answer_explanation:
			"a larger tube\n\nBecause cuff pressure is higher than the limit after minimum-seal technique is used, the endotracheal tube is likely too small.",
	},
	{
		question:
			'The emergency response team is monitoring a patient when the rhythm on the monitor transitions to ventricular tachycardia. The patient has a pulse. Prior to cardioversion, the respiratory therapist should do which of the following before handing the physician the paddles?\n\n A. set defibrillation to 360 joules\n B. administer sodium bicarbonate\n C. ensure synchronization is active\n D. call "Clear"',
		options: {
			A: "set defibrillation to 360 joules",
			B: "administer sodium bicarbonate",
			C: "ensure synchronization is active",
			D: 'call "Clear"',
		},
		answer: "C",
		answer_explanation:
			"ensure synchronization is active\n\nVentricular tachycardia with a pulse must be treated by cardioversion. Cardioversion differs from defibrillation by the number of watts or Jules administered and by how it synchronizes with the heart. Pure defibrillation requires no synchronization with a heart. However, cardioversion requires that the synchronization be set to active prior to delivery of the electrical shock.",
	},
	{
		question:
			"Which of the following is the correct postural position for drainage of the anterior upper segment of the lungs?\n A. trendelenburg\n B. supine\n C. upright leaning slightly forward\n D. semi-Fowlers",
		options: {
			A: "trendelenburg",
			B: "supine",
			C: "upright leaning slightly forward",
			D: "semi-Fowlers",
		},
		answer: "D",
		answer_explanation: "semi-Fowlers",
	},
	{
		question:
			"A 75-kg (165-lb) male is receiving mechanical ventilation by a volume-controlled ventilator in the assist/control mode on the following settings:\n\nMandatory rate 14/min \nVT 800 mL\nFIO2 0.6\nPEEP 5 cmH2O \n\nABGs:\npH 7.31\nPaCO2 49 mmHg\nPO2 88 mmHg\nHCO3- 23 mEq/L\nBE -1 mEq/L\n\nWhich of the following represents the most appropriate action?\n A. remove 200 mL deadspace\n B. increase VT to 950 mL\n C. decrease rate\n D. decrease FIO2 to 0.5",
		options: {
			A: "remove 200 mL deadspace",
			B: "increase VT to 950 mL",
			C: "decrease rate",
			D: "decrease FIO2 to 0.5",
		},
		answer: "A",
		answer_explanation:
			"remove 200 mL deadspace\n\nIn the arterial blood gas results, the CO2 is high indicating the patient is not ventilating well. To correct this CO2 you can either increase rate, increased tidal volume, or remove deadspace. Of those options removing deadspace is most appealing because it causes the least amount of change in mean airway pressure.",
	},
	{
		question:
			"A patient admitted to the hospital for pneumonia is receiving oxygen therapy by transtracheal catheter. Twenty minutes after the completion of a meal, the patient complains of shortness of breath and expresses the device is not working properly. The respiratory therapist should first\n\n A. increase the oxygen flow rate to the catheter\n B. initiate oxygen by air-entrainment mask\n C. remove the catheter\n D. apply suction to the catheter",
		options: {
			A: "increase the oxygen flow rate to the catheter",
			B: "initiate oxygen by air-entrainment mask",
			C: "remove the catheter",
			D: "apply suction to the catheter",
		},
		answer: "B",
		answer_explanation:
			"initiate oxygen by air-entrainment mask\n\nWhen a problem is encountered with one oxygen delivery modality, the first best response is to initiate oxygen therapy with a different modality and then troubleshoot the problem.",
	},
	{
		question:
			"A COPD patient is receiving oxygen at 1 L/min when he was admitted to the hospital for suspected pneumonia. The physician orders a target SpO2 of 90%. The following clinical and laboratory data is obtained:\n\nRR 17 HR \n101BP 142/88 mm Hg\nSpO2 86% \npH 7.35\nPaCO2 68 torr\nPaO2 51 torr\nHCO3- 34 mEq/L\nBE +7 mEq/L\n\n\nThe respiratory therapist should recommend which of the following FIRST?\n A. switch to an air-entrainment mask at 0.55\n B. titrate the oxygen flow rate\n C. place a heated aerosol mask at FIO2 1.0\nD. implement NIPPV",
		options: {
			A: "switch to an air-entrainment mask at 0.55",
			B: "titrate the oxygen flow rate",
			C: "place a heated aerosol mask at FIO2 1.0",
			D: "implement NIPPV",
		},
		answer: "B",
		answer_explanation:
			"titrate the oxygen flow rate\n\nAn SpO2 of 86% does not meet the physician's requirement to maintain oxygen saturation at 90%. Therefore, the titration of oxygen is required. Titration refers to a process of increasing or decreasing FIO2 in response to data to achieve a desired SpO2 or PaO2 value.",
	},
	{
		question:
			"While performing a biopsy of a tissue extracted from a patient's right mainstem bronchus with a bronchoscope, the physician reports sudden bleeding from the site. Which of the following should the respiratory therapist have ready to instill?\n A. epinephrine\n B. racemic epinephrine\n C. normal saline\n D. atropine sulfate",
		options: {
			A: "epinephrine",
			B: "racemic epinephrine",
			C: "normal saline",
			D: "atropine sulfate",
		},
		answer: "A",
		answer_explanation:
			"epinephrine\n\nWhen encountering a bleed in the bronchial tree during a bronchoscopy, the first step to stop the bleed is to instill epinephrine on the site through the bronchoscope. After doing so, the site should be compressed with the bronchoscope. Ultimately, a Fogarty catheter may be inserted to tamponade any remaining bleeding.",
	},
	{
		question:
			"After attempting to pass a catheter down an oral ET tube, the respiratory therapist feels strongly that the endotracheal tube cuff is herniated over the end of the ET tube. The bag-valve remains difficult to squeeze and oxygen saturation is 86% and falling. The therapist should do which of the following?\n\n A. switch to a high pressure demand valve\n B. remove the ET tube and insert a new one\n C. call the physician and report the finding\n D. perform nasal intubation with the oral tube left in place",
		options: {
			A: "switch to a high pressure demand valve",
			B: "remove the ET tube and insert a new one",
			C: "call the physician and report the finding",
			D: "perform nasal intubation with the oral tube left in place",
		},
		answer: "B",
		answer_explanation:
			"remove the ET tube and insert a new one\n\nA herniated endotracheal tube cuff indicates th ET tube is defective and therefore should be replaced.",
	},
	{
		question:
			"A 70-year-old female with chronic lung disease is admitted to the emergency department with a weak cough and fever. She demonstrates difficulty remaining awake and does not follow directions accurately. The following data is available:\n\nHR 101/min \nBP 119/85 mm Hg\nTemp 38.3 deg C (101 deg F)\n\n\n\nFIO2 0.24 by 1 L/min NC \npH 7.31\nPaCO2 66 torr\nPaO2 54 torr\nHCO3- 32 mEq/L\nBE -2 mEq/L\n\nThe respiratory therapist should recommend\n A. intubation and mechanical ventilation\n B. non-invasive ventilation\n C. intravenous antibiotic therapy\n D. oxygen at 2 L/min",
		options: {
			A: "intubation and mechanical ventilation",
			B: "non-invasive ventilation",
			C: "intravenous antibiotic therapy",
			D: "oxygen at 2 L/min",
		},
		answer: "A",
		answer_explanation:
			"intubation and mechanical ventilation\n\nOstensibly, this patient is demonstrating very slight respiratory deficiency which is manifested by an elevated CO2 and a pH that is slightly acidotic. With this clinical data it is evident that the patient would benefit from some amount of ventilatory support, which could be best accomplished through noninvasive ventilation. However, because the patient is DEMONSTRATING INABILITY TO FOLLOW COMMANDS OR STAY AWAKE, the practitioner must have concern about the patient's ability to protect their own airway. When protection of the airway is a central concern, intubation and the use of mechanical ventilatory support is more appropriate.",
	},
	{
		question:
			"A fire fighter is brought to the emergency department after being found down in a room of a burning building. He was found with his protective mask off. Which of the following already documented findings would be helpful to rapidly evaluate the patient?\n\n1. visual examination of the oral and nasal pharynx\n2. nature of breath sounds\n3. co-oximetery values\n4. capnographic data\n\n A. 2 , 3 and 4\n B. visual examination of the oral and nasal pharynx\n C. capnographic data\n D. 2 and 4 only",
		options: {
			A: "2 , 3 and 4",
			B: "visual examination of the oral and nasal pharynx",
			C: "capnographic data",
			D: "2 and 4 only",
		},
		answer: "B",
		answer_explanation:
			"visual examination of the oral and nasal pharynx\n\nFor a firefighter found down in a burning building, visually examining the oral and nasal pharynx for redness and inflammation will help in assessing the degree at which the firefighter was exposed to hot gases. Listening to breath sounds will assess general airway movement and co-oximetry results will help determine if smoke inhalation and CO poisoning is a factor. Determining end-tidal CO2 is not significantly helpful.",
	},
	{
		question:
			"A patient on the general floor becomes a primary mouth-breather while asleep, resulting in a drop in SpO2 from 95% to 87% while on 3 L/min nasal cannula. The best remedy while asleep is to\n\n A. change to a 30% air-entrainment mask.\n B. place the cannula in the patient's mouth.\n C. apply CPAP with oxygen bleed-in.\n D. apply a chin strap.",
		options: {
			A: "change to a 30% air-entrainment mask.",
			B: "place the cannula in the patient's mouth.",
			C: "apply CPAP with oxygen bleed-in.",
			D: "apply a chin strap.",
		},
		answer: "A",
		answer_explanation:
			"change to a 30% air-entrainment mask.\n\nThe FIO2 of a nasal cannula is approximated to be 3 to 4% per liter. Therefore, a 30% Venturi mask most closely approximates the FIO2 of a nasal cannula running at 3 L/min.",
	},
	{
		question:
			"Which of the following modalities is appropriate for a patient with chronic obstructive pulmonary disease (COPD) who has hypoxemia at rest?\n\n A. nonrebreathing mask\n B. partial rebreathing mask\n C. air-entrainment mask\n D. aerosol mask",
		options: {
			A: "nonrebreathing mask",
			B: "partial rebreathing mask",
			C: "air-entrainment mask",
			D: "aerosol mask",
		},
		answer: "C",
		answer_explanation:
			"air-entrainment mask\n\nOf the options listed, an air-entrainment mask delivering no more than 28% oxygen is most appropriate for a patient with COPD. More commonly used is a nasal cannula running a flow of 1 to 2 L/min. However, that option is not offered here.",
	},
	{
		question:
			"An orally intubated COPD patient has been on mechanical ventilation for 2 weeks. Repeated spontaneous breathing trails have been unprogressive. The following data is obtained:\n\nVT 320 mL \nVC 0.8 L\nMIP -20 cm H2O\n\nWhich of the following approaches would be most helpful in progressing the patient?\n\n A. daily monitoring of RSBI\n B. extubation to non-invasive ventilation\n C. IV corticosteroid therapy\n D. alveolar recruitment maneuvers",
		options: {
			A: "daily monitoring of RSBI",
			B: "extubation to non-invasive ventilation",
			C: "IV corticosteroid therapy",
			D: "alveolar recruitment maneuvers",
		},
		answer: "B",
		answer_explanation: "extubation to non-invasive ventilation",
	},
	{
		question:
			"A patient underdoing a cardiopulmonary stress test has the following data:\n\nBaseline:\nHr 98\nBP 124 mmHg\nspo2 98%\n\nIncreased work\nHR 122\nBP 122/85 mmHg\nspo2 95%\n\n\nWhich interpretation is most accurate?\n A. appropriate cardiac and blood responses\n B. inappropriate cardiac response, appropriate blood pressure response\n C. appropriate cardiac response, inappropriate blood pressure response\n D. inappropriate cardiac and blood pressure responses",
		options: {
			A: "appropriate cardiac and blood responses",
			B: "inappropriate cardiac response, appropriate blood pressure response",
			C: "appropriate cardiac response, inappropriate blood pressure response",
			D: "inappropriate cardiac and blood pressure responses",
		},
		answer: "C",
		answer_explanation:
			"appropriate cardiac response, inappropriate blood pressure response\n\nDuring a cardiopulmonary stress test, when workload is increased, both heart rate and blood pressure should also naturally increase. This is known as normal cardiac and blood pressure responses, respectively. In this case, data shows that only the HR increased (normal cardiac response). The blood pressure, however, failed to increase and is therefore considered to be an abnormal (inappropriate) blood pressure response.",
	},
	{
		question:
			"C(a-v)O2 values have been increasing over the last eight hours on a patient who is post-operative for coronary artery bypass. Which of the following is most likely increasing?\n A. cardiac output\n B. SpO2\n C. oxygen consumption\n D. cardiac index",
		options: {
			A: "cardiac output",
			B: "SpO2",
			C: "oxygen consumption",
			D: "cardiac index",
		},
		answer: "C",
		answer_explanation:
			"oxygen consumption\n\nAs the gap between CaO2 and CvO2 increase, oxygen consumption by the tissues increases.",
	},
	{
		question:
			"A 42-year-old, male patient is brought to the emergency room (ER) unconscious and obtunded. Spontaneous tidal volume is 5.3 mL/kg and RR is 12/min. Arterial blood gas analysis reveals:\n\nFIO2 0.40 \npH 7.35\nPaCO2 45 torr\nPaO2 80 torr\nHCO3- 24 mEq/L\nBE -1 mEq/L\n\n\nWhich of the following should be recommended?\n A. placement of an oral pharyngeal airway\n B. non-invasive ventilation\n C. increase FIO2 to 0.50\n D. oral intubation",
		options: {
			A: "placement of an oral pharyngeal airway",
			B: "non-invasive ventilation",
			C: "increase FIO2 to 0.50",
			D: "oral intubation",
		},
		answer: "D",
		answer_explanation:
			"oral intubation\n\nExplanation : ABG data shows that ventilation is adequate. However, the UNCONSCIOUS and obtunded status of the patient suggests that the patient may not be able to protect his airway. Intubation is appropriate.",
	},
	{
		question:
			"A 75-kg (165-lb) male is receiving mechanical ventilation by a volume-controlled ventilator in the assist/control mode on the following settings:\n\nMandatory rate 14/min \nVT 450 mL\nFIO2 0.5\nPEEP 5 cmH2O \n\nABG results: \npH 7.32Pa\nCO2 48 mmHg\nPO2 76 mmHg\nHCO3- 23 mEq/L\nBE -1 mEq/L\n\nWhich of the following represents the most appropriate action?\n\n A. increase VT to 550 mL\n B. increase rate to 18\n C. increase PEEP to 8 cm H2O\n D. increase FIO2 0.6",
		options: {
			A: "increase VT to 550 mL",
			B: "increase rate to 18",
			C: "increase PEEP to 8 cm H2O",
			D: "increase FIO2 0.6",
		},
		answer: "A",
		answer_explanation:
			"increase VT to 550 mL\n\nThe CO2 is slightly high. There are three ways that we can lower CO2 - increase rate, increased tidal volume, or remove dead space. In this problem increasing tidal volume by 100 mL is the best option because it will reduce CO2 by smaller increments than would an increase in rate. Increasing the rate from 12 to 16 or even from 12 to 14 would cause a significant change in CO2 which is not what we want. The other two options relate to oxygenation, which is indeed a problem, but we should be addressing ventilation first.",
	},
	{
		question:
			"The respiratory therapist responds to an adult patient on a ventilator whose low pressure alarm is sounding. The therapist determines the 6.0 mm ET tube is in proper position according to the markings. Gas escaping around the ET tube is audible. The therapist should\n A. add air to the cuff\n B. switch to a cuffless ET tube\n C. switch to a larger ET tube\n D. schedule the patient for a tracheotomy",
		options: {
			A: "add air to the cuff",
			B: "switch to a cuffless ET tube",
			C: "switch to a larger ET tube",
			D: "schedule the patient for a tracheotomy",
		},
		answer: "C",
		answer_explanation:
			"switch to a larger ET tube\n\nThe first, most obvious problem in this question is that an adult patient has a 6.0 mm ET tube. For a normal sized adult, this endotracheal tube size is likely too small. Further evidence indicates gas escaping around ET tube. This is also likely due to a small endotracheal tube.",
	},
	{
		question:
			"A 35-year old that is receiving VC, SIMV ventilation has the following parameters:\n\nf 6/min \nTotal rate 28/min\nVT (set) 450 mL\nVT (spont) 160 mL\nFIO2 0.45\nPS 5 cm H2O\n\n\nWhich of the following would be an appropriate change?\n A. increase PS to 10 cm H2O\n B. increase rate to 10/min\n C. decrease set VT to 400 mL\n D. increase set VT to 500 mL",
		options: {
			A: "increase PS to 10 cm H2O",
			B: "increase rate to 10/min",
			C: "decrease set VT to 400 mL",
			D: "increase set VT to 500 mL",
		},
		answer: "A",
		answer_explanation:
			"increase PS to 10 cm H2O\n \nThe presence of a low spontaneous VT (likely well below 5 mL/kg) suggests that the patient requires additional pressure support. This will help to lower total rate and generally decrease the work of breathing.",
	},
	{
		question:
			"A 55-year old male is receiving VC, SIMV ventilation. The following parameters are observed:\n\nf 4/min \nTotal rate 32/min\nVT (set) 500 mL\nVT (spont) 180 mL\nFIO2 0.45\n\n\nWhich of the following would be an appropriate change?\n\nA. administer Narcan (naloxone)\n B. increase rate to 12/min\n C. add pressure support\n D. begin a spontaneous breathing trial (SBT)",
		options: {
			A: "administer Narcan (naloxone)",
			B: "increase rate to 12/min",
			C: "add pressure support",
			D: "begin a spontaneous breathing trial (SBT)",
		},
		answer: "C",
		answer_explanation: "add pressure support",
	},
	{
		question:
			"A patient complains of recent flu-like symptoms and an ensuing paralysis developing from the lower extremities upward. Which of the following monitoring techniques would be most helpful in diagnosing the patient?\n\n A. edrophonium (Tensilon test)\n B. myelogram\n C. monitoring MIP and VC\n D. spinal fluid analysis",
		options: {
			A: "edrophonium (Tensilon test)",
			B: "myelogram",
			C: "monitoring MIP and VC",
			D: "spinal fluid analysis",
		},
		answer: "D",
		answer_explanation: "spinal fluid analysis",
	},
	{
		question:
			"A therapist is making several changes to the mechanical ventilator on a patient receiving volume-controlled ventilation in the SIMV mode. If the therapist decreases peak inspiratory flow but makes no changes in tidal volume or rate, which of the following could the therapist expect to occur?\n\nA. Increased peak inspiratory pressures\n B. Decreased inspiratory time\n C. Increased I:E ratio\n D. Increased expiratory time",
		options: {
			A: "Increased peak inspiratory pressures",
			B: "Decreased inspiratory time",
			C: "Increased I:E ratio",
			D: "Increased expiratory time",
		},
		answer: "C",
		answer_explanation:
			"Increased I:E ratio\n\nA decrease in inspiratory flow rates low will cause an increase in inspiratory time. This changes the I:E ratio.",
	},
	{
		question:
			"A patient receiving 1 L/min oxygen by TTO complains of air hunger. The therapist should FIRST\n\n A. place the patient on an air-entrainment mask at 28%\n B. place the patient on 1 L/min nasal cannula\n C. flush the trans-tracheal catheter\n D. connect suction pressure directly to the catheter",
		options: {
			A: "place the patient on an air-entrainment mask at 28%",
			B: "place the patient on 1 L/min nasal cannula",
			C: "flush the trans-tracheal catheter",
			D: "connect suction pressure directly to the catheter",
		},
		answer: "A",
		answer_explanation:
			"place the patient on an air-entrainment mask at 28%\n\nWhen the patient is receiving oxygen by trans-tracheal oxygen catheter and a chang in modality is required, the flow rate and oxygen percentage required is double that which was administered by the transtracheal device. For instance, in this case the patient was receiving 1 L per minute by transtracheal catheter. This means that by nasal cannula the patient should receive 2 L a minute, twice that which was delivered by the transtracheal oxygen catheter. However, 2 L/min is not offered in these options. The most appropriate oxygen percentageoffered would be 28%, which is equivalent to 2 L/min nasal cannula.",
	},
	{
		question:
			"The patient has a PetCO2 that has been decreasing over the last several hours while PaCO2 roughly remains unchanged. Vd/Vt has been climbing and is currently at 38%. Which of the following can be concluded?\n\n A. Physiological dead space is increasing.\n B. Anatomical dead space is increasing.\n C. Anatomical dead space is decreasing.\n D. A pleural effusion is likely present.",
		options: {
			A: "Physiological dead space is increasing.",
			B: "Anatomical dead space is increasing.",
			C: "Anatomical dead space is decreasing.",
			D: "A pleural effusion is likely present.",
		},
		answer: "A",
		answer_explanation:
			"Physiological dead space is increasing.\n\nDead space is increasing as shown by an increasing Vd/Vt ratio. Normal Vd/Vt is less than 10-15 percent and most of that is anatomical. When dead space increases, the most likely cause is physiological. Anatomical dead space refers to the non-gas exchanging areas of the pulmonary tree (such as the trachea) and cannot be altered significantly. Thus, increases in dead space is most often due to malfunctioning alveoli.",
	},
	{
		question:
			"A therapist has just decreased the peak flow on a patient receiving volume-controlled ventilation in the assist/control mode. Assuming no changes in controls that would affect minute ventilation, which of the following should the therapist also expect to occur?\n\n A. Increased I:E ratio\n B. Improved gas distribution\n C. Decreased peak inspiratory pressures\n D. Increase in expiratory time",
		options: {
			A: "Increased I:E ratio",
			B: "Improved gas distribution",
			C: "Decreased peak inspiratory pressures",
			D: "Increase in expiratory time",
		},
		answer: "B",
		answer_explanation:
			"Improved gas distribution\n\nA decrease in peak flow will cause inspiratory time to increase. When gases enter the lung over a slower, longer period of time, gases penetrate the extremities of the lung space better. Therefore, better gas exchange is noted.",
	},
	{
		question:
			"A patient receiving mechanical ventilation is experiencing an increase in autoPEEP. Which of the following should the respiratory therapist increase to lower autoPEEP?\n\n A. flow rate\n B. mandatory rate\n C. pressure support\n D. PEEP",
		options: {
			A: "flow rate",
			B: "mandatory rate",
			C: "pressure support",
			D: "PEEP",
		},
		answer: "A",
		answer_explanation:
			"flow rate\n\nAutoPEEP is caused when a mechanical ventilator delivers the next breath before the patient has exhaled completely. This air-trapping causes over distention of the alveoli and results in intrinsic PEEP. To minimize this, greater time for expiration must be allowed. This can be done by increasing flow rate, which will decrease inspiratory time and prolonged expiratory time.",
	},
	{
		question:
			"A 183-cm (6-ft), 87-kg (192-lb) male with ketoacidosis is receiving 60% oxygen by air-entrainment mask with the flow meter set at 15. SpO2 is fluctuating widely from minute to minute in spite of a good waveform and heart rate correlation. The most likely cause of this is\n\n A. a shift in the oxygen dissociation curve\n B. unstable blood glucose levels\n C. poor patient position\n D. inadequate total gas flow",
		options: {
			A: "a shift in the oxygen dissociation curve",
			B: "unstable blood glucose levels",
			C: "poor patient position",
			D: "inadequate total gas flow",
		},
		answer: "D",
		answer_explanation:
			"inadequate total gas flow\n\nAlthough this patient is receiving supplemental oxygen through an air-entrainment device, SpO2 is fluctuating widely from minute to minute. This is likely due to the inability to meet the patient's inspiratory demand based upon their minute ventilation. A patient who is in a state of ketoacidosis will also be breathing at an elevated rate and increased tidal volume. This suggests a remarkably large inspiratory demand. At 60%, with the flow meter at 15 L/min, an air-entrainment mask would provide a total flow of 30 L per minute. It is likely that this does not meet the inspiratory demand of the patient. Therefore, the source of the fluctuating SpO2 is likely due to inadequate total gas flow. Although the question does not ask for a resolution, an appropriate way to deal with this would be to provide a tandem aerosol device, which would also deliver 30 L per minute. Together, 60 L per minute would likely exceed the patient's inspiratory demand and prevent wide variation in oxygen saturation.",
	},
	{
		question:
			"Approximately how many hours will an H cylinder of oxygen at 1800 PSI last for a patient who is receiving oxygen by nasal cannula flowing at 3 L/min?\n\n A. 31 hrs\n B. 42 hrs\n C. 18 hrs\n D. 3 hrs",
		options: {A: "31 hrs", B: "42 hrs", C: "18 hrs", D: "3 hrs"},
		answer: "A",
		answer_explanation: "31 hrs\n\nH cylinder = 3.14",
	},
	{
		question:
			"A patient receiving heliox therapy at 70%/30% mixture by non-rebreathing mask has the following arterial blood gas results:\npH 7.35 \nPaCO2 45 mmHg\nPaO2 110 mmHg\nHCO3- 24 mEq/L\nBE 0 mEq/L\n\nWhich of the following actions is appropriate?\n\n A. discontinue heliox therapy\n B. switch to a partial rebreathing mask\n C. change to an 80%20% heliox mixture\n D. change to a heliox mixture of 60%/40%",
		options: {
			A: "discontinue heliox therapy",
			B: "switch to a partial rebreathing mask",
			C: "change to an 80%20% heliox mixture",
			D: "change to a heliox mixture of 60%/40%",
		},
		answer: "C",
		answer_explanation:
			"change to an 80%20% heliox mixture\n\nThis patient is receiving 30% oxygen though a Heliox mixture. One look at the blood gas shows a PaO2 of 110 mmHg. This over oxygenation state indicates a need to lower supplemental oxygen. Changing to an 80-20% Heliox mixture is most appropriate",
	},
	{
		question:
			"A patient is orally intubated and receiving mechanical ventilation. The respiratory therapist notes the PetCO2 monitor is persistently reading 60 mmHg. Which of the following can the therapist conclude?\n\n A. the patient is being hyperventilated\n B. minute ventilation should be increased\n C. the CO2 detector is covered with condensate\n D. the infrared device is not working properly",
		options: {
			A: "the patient is being hyperventilated",
			B: "minute ventilation should be increased",
			C: "the CO2 detector is covered with condensate",
			D: "the infrared device is not working properly",
		},
		answer: "B",
		answer_explanation:
			"minute ventilation should be increased\n\nEnd-tidal CO2 is correlated to arterial CO2. An end-tidal CO2 reading of 60 mmHg correlates with an arterial CO2 of 70 mmHg. This is clearly hypoventilation and should be addressed by increasing minute ventilation.",
	},
	{
		question:
			"A report of a chest radiograph procedure indicates bilateral radiolucency and an elevated hemi-diaphragm. These findings are most consistent with\n\n A. COPD\n B. pneumothorax\n C. pulmonary fibrosis\n D. normal lungs",
		options: {
			A: "COPD",
			B: "pneumothorax",
			C: "pulmonary fibrosis",
			D: "normal lungs",
		},
		answer: "D",
		answer_explanation: "normal lungs",
	},
	{
		question:
			"A blood gas analyzer fails again to produce acceptable results on the pH value when running quality control material for the second time. The respiratory therapist should\n\n A. remove the machine from service\n B. perform proficiency testing\n C. perform a one-point calibration\n D. monitor future results",
		options: {
			A: "remove the machine from service",
			B: "perform proficiency testing",
			C: "perform a one-point calibration",
			D: "monitor future results",
		},
		answer: "A",
		answer_explanation:
			"remove the machine from service\n\nWhen a blood gas machine fails to produce accurate results on one of its analytes, the respiratory therapist may respond by: removing the machine from service, notifying the supervisor, or rerunning the control. In this case, removing the machine from service is the only suitable answer offered.",
	},
	{
		question:
			"Which of the following is an important component of a teaching plan for an adolescent asthmatic?\n\n A. when to call the physician\n B. how to sterilize a peak flowmeter\n C. proper dosage titration of a bronchodilator\n D. the cause of an elevated eosinophil count",
		options: {
			A: "when to call the physician",
			B: "how to sterilize a peak flowmeter",
			C: "proper dosage titration of a bronchodilator",
			D: "the cause of an elevated eosinophil count",
		},
		answer: "A",
		answer_explanation:
			"when to call the physician\n\nProper use of the peak flow meter along with an understanding of the red, yellow, and green zones, which help a patient understand when to call the physician, are both important aspects of the teaching plan. Understanding eosinophil counts is too complex for the average patient and unimportant. It is not necessary to sterilize a peak-flow meter.",
	},
	{
		question:
			"While providing manual ventilation during a transport of a patient with a standard tracheostomy tube, the therapist notices it is difficult to squeeze the resuscitator bag. The therapist should NEXT\n\n A. deflate the cuff and reattempt manual ventilation.\n B. provide manual ventilation with a bag and mask.\n C. add air to the airway cuff.\n D. palpate the neck and clavicle for subcutaneous emphysema.",
		options: {
			A: "deflate the cuff and reattempt manual ventilation.",
			B: "provide manual ventilation with a bag and mask.",
			C: "add air to the airway cuff.",
			D: "palpate the neck and clavicle for subcutaneous emphysema.",
		},
		answer: "A",
		answer_explanation:
			"deflate the cuff and reattempt manual ventilation.\n\nWhen it is difficult to provide manual resuscitation through a tracheostomy tube, the first action should be to check the patency of the tube by inserting a suction catheter. The next step would be to deflate the cuff to ensure that it has not herniated over the end of the tracheostomy tube",
	},
	{
		question:
			"After making the universal sign of choking, a person collapses. The observer should FIRST\n\n A. call for help\n B. administer 2 rescue breaths\n C. check for a pulse\n D. perform abdominal thrusts",
		options: {
			A: "call for help",
			B: "administer 2 rescue breaths",
			C: "check for a pulse",
			D: "perform abdominal thrusts",
		},
		answer: "D",
		answer_explanation:
			"perform abdominal thrusts\n\nWhen a person indicates the universal sign of choking, they are unable to verbalize because there is likely something caught in their airway. The person responding must first focus on removing the obstruction, which is done by performing abdominal thrusts. Administering rescue breaths would not be appropriate because the airway is obstructed. Calling for help is tempting but is only related to two-man CPR. The patient is not yet at that point. Performing abdominal thrusts is a one-man maneuver and therefore obtaining additional help is not the first concern.",
	},
	{
		question:
			"A patient involved in a bus accident has sustained multiple injuries, including a tibia/fibia fracture and a significant strike to the right thoracic cage, indicated by a bruised area over the right lung, which measures 8 inches by 6 inches. Six hours after the accident, the patient is beginning to demonstrate ventilatory distress and is complaining of sharp pleuritic pain on the right. Which of the following is most likely?\n\n A. right-side pneumothorax (greater than 60%)\n B. diffuse alveolar hemorrhage\n C. pleural effusion\n D. pulmonary embolus",
		options: {
			A: "right-side pneumothorax (greater than 60%)",
			B: "diffuse alveolar hemorrhage",
			C: "pleural effusion",
			D: "pulmonary embolus",
		},
		answer: "C",
		answer_explanation: "pleural effusion",
	},
	{
		question:
			"A patient is to be intubated in the emergency room (ER) due to a markedly diminished respiratory drive following a motor vehicle accident from which the patient sustained a head injury. Prior to intubation, it is determined the patient has a Mallampati classification score of 4. Which of the following represents the most appropriate method of intubation?\n\n A. direct laryngoscopy\n B. tracheostomy\n C. oral intubation with a video assist device (VAD)\n D. blind nasal intubation",
		options: {
			A: "direct laryngoscopy",
			B: "tracheostomy",
			C: "oral intubation with a video assist device (VAD)",
			D: "blind nasal intubation",
		},
		answer: "C",
		answer_explanation: "oral intubation with a video assist device (VAD)",
	},
	{
		question:
			"The following arterial blood gas results are recorded for a patient during cardiopulmonary resuscitation:\n\npH 7.14 \nPaCO2 47 torr\nPaO2 180 torr\nHCO3- 14 mEq/L\nBE -10 mEq/L\nFIO2 1.0\n\nThe respiratory therapist should recommend\n A. decrease manual ventilation rate\n B. administer Verapamil\n C. sodium bicarbonate administration\n D. increase manual ventilation rate",
		options: {
			A: "decrease manual ventilation rate",
			B: "administer Verapamil",
			C: "sodium bicarbonate administration",
			D: "increase manual ventilation rate",
		},
		answer: "C",
		answer_explanation:
			"sodium bicarbonate administration\n\nThis patient shows acidosis as manifested by the pH but has a nearly normal CO2. A further examination of the HCO3 shows that the source of the acidosis is metabolic. Administration of sodium bicarbonate (HCO3-) is appropriate.",
	},
	{
		question:
			"An 84-kg (185-lb) 6-ft 1-in (185-cm) male is receiving mechanical ventilation by a volume-controlled ventilator in the assist/control mode on the following settings:\nMandatory rate 18/min \nVT 600 mL\nFIO2 0.4\nPEEP 5 cm H2O \n\nABGs \npH 7.28\nPaCO2 56 mm Hg\nPO2 71 mm Hg\nHCO3- 27 mEq/L\nBE +3 mEq/L\n\nWhich of the following represents the most appropriate action?\n\n A. increase VT to 650\n B. increase FIO2 to 0.5\n C. increase PEEP to 8 cmH2O\n D. increase rate to 20",
		options: {
			A: "increase VT to 650",
			B: "increase FIO2 to 0.5",
			C: "increase PEEP to 8 cmH2O",
			D: "increase rate to 20",
		},
		answer: "D",
		answer_explanation:
			"increase rate to 20\n\nArterial blood gases show the patient is not ventilating and is under oxygenating. Because ventilation should be corrected first it is appropriate to either increase the tidal volume or increase the rate. In this case the PaCO2 is off by more than 4 mm Hg and therefore should be addressed only with an increase in rate.",
	},
	{
		question:
			"A 31-week-gestional age infant has a respiratory rate of 30/min and a heart rate of 70/min while breathing room air. Five minutes after birth, the infant is acrocyanotic and has a weak cry. Following suctioning of the oropharynx the respiratory therapist should\n\n A. provide manual ventilation with the bag-valve\n B. place the infant in an oxyhood at FIO2 0.40\n C. begin chest compressions\n D. administer Atropine sulfate",
		options: {
			A: "provide manual ventilation with the bag-valve",
			B: "place the infant in an oxyhood at FIO2 0.40",
			C: "begin chest compressions",
			D: "administer Atropine sulfate",
		},
		answer: "A",
		answer_explanation:
			"provide manual ventilation with the bag-valve\n\nFive minutes after birth this infant is still showing signs of significant respiratory distress. Supporting ventilation with a bag-valve is appropriate.",
	},
	{
		question:
			"Which of the following data should be recorded in the patient's medical record after the therapist coaches a post-op patient through sustained maximal inhalation therapy with a volume-oriented incentive spirometer?\n\n A. vital capacity\n B. expiratory reserve volume\n C. inspiratory reserve volume\n D. inspiratory capacity",
		options: {
			A: "vital capacity",
			B: "expiratory reserve volume",
			C: "inspiratory reserve volume",
			D: "inspiratory capacity",
		},
		answer: "D",
		answer_explanation:
			"inspiratory capacity\n\nIf the patient is using a volume oriented incentive spirometer, inspiratory capacity must be included in the documentation in the medical record.",
	},
	{
		question:
			"Which of the following would be most helpful in diagnosing vocal cord paralysis in an adult?\n\n A. Neck radiograph\n B. Flow volume loop\n C. Thoracic gas volume measurement\n D. FVC maneuver",
		options: {
			A: "Neck radiograph",
			B: "Flow volume loop",
			C: "Thoracic gas volume measurement",
			D: "FVC maneuver",
		},
		answer: "B",
		answer_explanation:
			"Flow volume loop\n\nVocal cord paralysis will cause both obstruction and restriction as airway resistance is increased in both the inspiratory and expiratory phases of breathing. This can be best observed through a pulmonary function maneuver called the flow volume loop. The loop will appear round in shape.",
	},
	{
		question:
			"A patient's chest radiograph indicates scattered patchy infiltrates. The following parameters are observed while the patient receives VC A/C ventilation:\n\nHeight 168 cm (5 ft 6 in) \nTemperature 38.1 deg C (100.5 deg F)\nPressure (peak) 52 cm H2O\nPressure (plat) 38 cm H2O\nVT (set) 500 mL\nMandatory rate 16\nFIO2 1.0\nPEEP 10 cm H2O\n\nWhich of the following changes in mechanical ventilation should the respiratory therapist recommend?\n\n A. increase inspiratory flow\n B. decrease mandatory rate\n C. increase PEEP\n D. decrease set VT",
		options: {
			A: "increase inspiratory flow",
			B: "decrease mandatory rate",
			C: "increase PEEP",
			D: "decrease set VT",
		},
		answer: "D",
		answer_explanation:
			"decrease set VT\n\nThe presence of scattered patchy infiltrates, in conjunction with excessive plateau and peak pressures suggest the patient has a significant pulmonary compliance problem (low compliance). Particularly because plateau pressure is high, it is evident that the lungs are becoming stiffer. This data suggests the patient may have ARDS. Given the suspicion, it may be appropriate to utilize the ARDSnet protocol, which among various parameters, indicates the use of low tidal volumes ranging from 4-6 mL/kg.",
	},
	{
		question:
			"Which of the following best describes the function of digitalis?\n\n A. increases blood pressure\n B. increases strength of cardiac contractility\n C. increases heart rate\n D. lowers blood pressure",
		options: {
			A: "increases blood pressure",
			B: "increases strength of cardiac contractility",
			C: "increases heart rate",
			D: "lowers blood pressure",
		},
		answer: "B",
		answer_explanation:
			"increases strength of cardiac contractility\n\nDigitalis is a drug that is used to treat left heart failure or conditions related to a decreased ejection fraction of the left ventricle. Digitalis works by increasing the strength of the contraction of the left ventricle.",
	},
	{
		question:
			"The physician orders mechanical ventilator settings:\nMode A/C \nVT 600 mL\nMandatory rate 12/min\nI:E 1:4FIO2 0.60\nPEEP 5 cm H2O\n\nWhich of the following minimum flow setting should the respiratory therapist select to meet the inspiratory demand of the patient?\n\n A. 80 L/min\n B. 60 L/min\n C. 28 L/min\n D. 36 L/min",
		options: {A: "80 L/min", B: "60 L/min", C: "28 L/min", D: "36 L/min"},
		answer: "D",
		answer_explanation:
			"36 L/min\n\nThere are several methods to determine the minimum flow needed to accomplish specific settings on a mechanical ventilator. One shortcut method is to add the I:E ratio numbers together and multiply it by the minute ventilation. In this case, 1+4 = 5. Minute ventilation = .6L x rate of 12 = 7.2 L. 7.2 L x 5 = 36 L/min.",
	},
	{
		question:
			"A patient has thick secretions after being mechanically ventilated for 3 days with a heated moisture exchanger in the circuit and no other source of hydration. The patient is intubated with a 7.0 mm ET tube. When performing suctioning with a 10 Fr closed system suction catheter, the patient experiences PVCs. The respiratory therapist should recommend which of the following?\n\n A. Oral consumption of water\n B. Switch to a 12 Fr suction catheter\n C. Administration of aerosolized acetylcisteine (mucomyst)\n D. Administration of Lasix (furosemide)",
		options: {
			A: "Oral consumption of water",
			B: "Switch to a 12 Fr suction catheter",
			C: "Administration of aerosolized acetylcisteine (mucomyst)",
			D: "Administration of Lasix (furosemide)",
		},
		answer: "C",
		answer_explanation:
			"Administration of aerosolized acetylcisteine (mucomyst)\n\nOf the options given, the use of acetylcysteine will be most effective at thinning secretions which will help in their mobilization and removal. Switching to a 12 French suction catheter would also be effective but is not appropriate because it is too large for the 7.0 endotracheal tube.",
	},
	{
		question:
			"Which of the following is the most significant indicator of hypovolemia?\n\n A. hypokalemia\n B. decreased left atrial filling pressure\n C. hypernatremia\n D. decreased urine output",
		options: {
			A: "hypokalemia",
			B: "decreased left atrial filling pressure",
			C: "hypernatremia",
			D: "decreased urine output",
		},
		answer: "A",
		answer_explanation:
			"hypokalemia\n\nThe body's most significant response to dehydration (hypovolemia) is hypokalemia. When the body loses fluid potassium that is lost.",
	},
	{
		question:
			"A patient diagnosed with congestive heart failure requires 4 pillows to rest comfortably and breathe better. This is most consistent with\n A. orthopnea\n B. ketoacidosis\n C. dehydration\n D. apneustic ventilation",
		options: {
			A: "orthopnea",
			B: "ketoacidosis",
			C: "dehydration",
			D: "apneustic ventilation",
		},
		answer: "A",
		answer_explanation:
			"orthopnea\n\nThe requirement for pillows to sleep properly or breathe better during sleeping is a condition usually related to congestive heart failure and is termed orthopnea.",
	},
	{
		question:
			"A ventilator is sounding two alarms - low temperature and low volume. This could be caused by which of the following?\n\n A. ruptured ET tube cuff\n B. disconnect in the patient-ventilator interface\n C. disconnected temperature probe in the ventilator circuit\n D. depleted humidification reservoir",
		options: {
			A: "ruptured ET tube cuff",
			B: "disconnect in the patient-ventilator interface",
			C: "disconnected temperature probe in the ventilator circuit",
			D: "depleted humidification reservoir",
		},
		answer: "C",
		answer_explanation:
			"disconnected temperature probe in the ventilator circuit\n\nThe combination of low temperature and low volume alarms is commonly caused by a problem related to the temperature probe. As the temperature probe is inserted inside the inspiratory limb of the ventilator circuit, it can sometimes become dislodged creating a leak in the circuit. If the probe becomes dislodged, it is no longer exposed to the heated gases and can therefore, trigger a low-temperature alarm. A low volume alarm will result from the leak through the port where the probe is normally nestled.",
	},
	{
		question:
			"For a patient receiving mechanical ventilation, with which of the following is plateau pressure most closely associated?\n\n A. pulmonary static compliance\n B. air trapping\n C. dynamic compliance\n D. airway resistance",
		options: {
			A: "pulmonary static compliance",
			B: "air trapping",
			C: "dynamic compliance",
			D: "airway resistance",
		},
		answer: "A",
		answer_explanation:
			"pulmonary static compliance\n\nPlateau pressures are most telling of pulmonary static compliance.",
	},
	{
		question:
			"A patient is undergoing a maximal exercise tolerance test. During the exam, as workload is increased, an increase in heart rate from 90 to 120 bpm while blood pressure remained steady at 110/88 mmHg is noted. Which of the following can be correctly stated about the exam results?\n\n A. abnormal cardiac response, abnormal blood pressure response\n B. normal cardiac response, abnormal blood pressure response\n C. abnormal cardiac response, normal blood pressure response\n D. normal cardiac response, normal blood pressure response",
		options: {
			A: "abnormal cardiac response, abnormal blood pressure response",
			B: "normal cardiac response, abnormal blood pressure response",
			C: "abnormal cardiac response, normal blood pressure response",
			D: "normal cardiac response, normal blood pressure response",
		},
		answer: "B",
		answer_explanation:
			'normal cardiac response, abnormal blood pressure response\n\nDuring an exercise tolerance test, also known as a stress test, blood pressure and heart rate should rise as workload is increased. If this does not occur, the patient is said to have an abnormal blood pressure and/or abnormal cardiac response. In this case the patient\'s heart rate did increase but the blood pressure did not. The best interpretation is "normal cardiac response with an abnormal response in blood pressure".',
	},
	{
		question:
			"A patient receiving volume-controlled ventilation has a balloon-tipped pulmonary artery catheter in place. The respiratory therapist notices the PA waveform is ascending and descending with inflection points at 25 and 2 mmHg. Based on this information, the therapist should recommend\n\n A. deflating the catheter balloon\n B. monitoring the patient closely\n C. rotating the catheter\n D. advancing the catheter",
		options: {
			A: "deflating the catheter balloon",
			B: "monitoring the patient closely",
			C: "rotating the catheter",
			D: "advancing the catheter",
		},
		answer: "D",
		answer_explanation:
			"advancing the catheter\n\nThe pulmonary artery catheter waveform that has a high inflection point of 25 and a low inflection point of 0-2 mmHg is an indication that the tip of the catheter is in the right ventricle of the heart. The proper placement of this catheter is in the pulmonary artery. Therefore, advancing the catheter is indicated. This is done by inflating the balloon and allowing the catheter to sail into a proper position in the pulmonary artery.",
	},
	{
		question:
			"A 12-year-old patient is in the clinic with difficulty breathing. Audible wheezing without a stethoscope is present. Which of the following would be helpful in further assessing the patient's current ventilatory status?\n\n A. DLCO determination\n B. bedside peak flow measurement\n C. SBN2 assessment\n D. ventilatory response to CO2",
		options: {
			A: "DLCO determination",
			B: "bedside peak flow measurement",
			C: "SBN2 assessment",
			D: "ventilatory response to CO2",
		},
		answer: "B",
		answer_explanation:
			"bedside peak flow measurement\n\nThe patient has evidence of bronchoconstriction (and possibly asthma). A peak flow measurement will help assess the current degree of bronchoconstriction, which likely relates to the patient's current state of ventilatory distress.",
	},
	{
		question:
			"While observing a volume-pressure ventilator graphic on a patient receiving volume-controlled ventilation, the therapist notices a significant negative pressure deflection before the inspiratory phase begins. What should be done in response to this observation?\n\n A. sedate the patient\n B. continue current therapy\n C. increase sensitivity\n D. obtain an arterial blood gas",
		options: {
			A: "sedate the patient",
			B: "continue current therapy",
			C: "increase sensitivity",
			D: "obtain an arterial blood gas",
		},
		answer: "C",
		answer_explanation:
			"increase sensitivity\n\nWhen a patient takes a breath on a ventilator, there should be some slight negative deflection of the needle or graph before the machine is triggered to deliver a breath. If there is a significant deflection, it means the patient is being required to produce too much negative pressure to trigger the machine to respond with a breath. This would cause an increased work of breathing over time. One way to resolve this is to turn the machine to a more sensitive state, in other words to increase sensitivity. Although it is not offered here another option would be to use flow triggering.",
	},
	{
		question:
			"What is the minute alveolar ventilation for a 200-lb (91-kg) patient with the following parameters?\n\nVT(spont) 600 mL \nRespiratory rate 10\nPetCO2 30 mm Hg\n\n A. 4.0 L\n B. 3.2 L\n C. 5.7 L\n D. 6.0 L",
		options: {A: "4.0 L", B: "3.2 L", C: "5.7 L", D: "6.0 L"},
		answer: "A",
		answer_explanation:
			"4.0 L\n\nTo get minute alveolar ventilation the first thing you must calculate is the amount of the tidal volume that goes to the alveoli. To determine this, you must first take note of the weight of the patient in pounds. Determine dead space by calculating one milliliter of deadspace per 1 pound of patient weight. In this case the patient weighs 200 pounds, so the dead space is 200 mL. The tidal volume is 600 mL and if you subtract the 200 mL the adjusted alveolar tidal volume is 400 mL. Finally, you can determine alveolar ventilation by taking the new tidal volume (400 mL) and multiplying it by the rate which is 10. That should give you a minute alveolar ventilation of 4.0 L.",
	},
	{
		question:
			"The following data is observed on a patient who is 20 minutes post coronary artery bypass graft (CABG):\n\n@ 10:05 - SVO2: 69 - SpO2: 98\n@ 10:10 - SVO2: 67 - SpO2: 97\n@10:15 - SVO2: 97 - SpO2: 97\n\n\nWhich of the following can the respiratory therapist conclude?\n A. C(a-v)O2 is narrowing\n B. cardiac output is decreasing\n C. pulmonary shunting is decreasing\n D. tissue oxygen consumption is decreasing",
		options: {
			A: "C(a-v)O2 is narrowing",
			B: "cardiac output is decreasing",
			C: "pulmonary shunting is decreasing",
			D: "tissue oxygen consumption is decreasing",
		},
		answer: "B",
		answer_explanation:
			"cardiac output is decreasing\n\nThis data shows a steady SpO2 with a decreasing venous oxygen saturation. From this information, it can be concluded that oxygen tissue consumption is increasing because there is less oxygen remaining after the blood passes over the tissues. An increase in the gap between arterial saturation and venous saturation is most commonly caused by a decrease in cardiac output.",
	},
	{
		question:
			"The respiratory therapist working in a clinic receives a call from a patient who has asthma and is only able to achieve 75% of their normal baseline peak flow measurement. The therapist should advise the patient to\n\n A. call their doctor immediately\n B. take a rescue medication, check flows in one hour\n C. take a rescue medication every 15 minutes for 2 hours, recheck flows\n D. check flows again in one hour, call if less than 50%of expected",
		options: {
			A: "call their doctor immediately",
			B: "take a rescue medication, check flows in one hour",
			C: "take a rescue medication every 15 minutes for 2 hours, recheck flows",
			D: "check flows again in one hour, call if less than 50%of expected",
		},
		answer: "B",
		answer_explanation:
			"take a rescue medication, check flows in one hour\n\nAccording to national asthma guidelines, a peak flow of 75% of baseline peak flow measurement is an indication to administer further rescue medication.",
	},
	{
		question:
			"For which of the following conditions is PEP therapy most beneficial?\n\n A. Postoperative recovery\n B. ARDS\n C. pneumonia\n D. myasthenia gravis",
		options: {
			A: "Postoperative recovery",
			B: "ARDS",
			C: "pneumonia",
			D: "myasthenia gravis",
		},
		answer: "C",
		answer_explanation:
			"pneumonia\n\nPEP therapy is beneficial at removing secretions. Of the options given, only pneumonia is a disease where secretions are a primary concern.",
	},
	{
		question:
			"Which of the following can affect the accuracy of readings with a galvanic-type oxygen analyzer?\n A. strength of the electrolyte solution\n B. altitude\n C. age of the batteries\n D. probe membrane thickness",
		options: {
			A: "strength of the electrolyte solution",
			B: "altitude",
			C: "age of the batteries",
			D: "probe membrane thickness",
		},
		answer: "B",
		answer_explanation:
			"altitude\n\nGalvanic type oxygen analyzers can be affected by barometric pressure (altitude) and moisture on the electrode. These type of analyzers do not have batteries or an electrolyte solution.",
	},
	{
		question:
			"Predicted:\nTLC 4.50\nFRC 2.45\nSVC 3.20\nFEV1 2.15\nFEF50 4.0\n\nObserved:\nTLC 3.10\nFRC 1.70\nSVC 2.00\nFEV1 1.98\nFEF50 3.85\n\n A. cystic fibrosis\n B. sarcoidosis\n C. emphysema\n D. normal spirometry",
		options: {
			A: "cystic fibrosis",
			B: "sarcoidosis",
			C: "emphysema",
			D: "normal spirometry",
		},
		answer: "B",
		answer_explanation:
			"sarcoidosis\n\nPulmonary function data indicates the patient has reduced volumes, as shown in the SVC, which is less than 80% of predicted. Low volumes are associated with restrictive pulmonary defect. Flows, however, appear to be nearly normal as shown by the FEV1. This indicates the patient has no obstructive defect. The correct answer must be a restrictive disease. The only restrictive disease offered his sarcoidosis.",
	},
	{
		question:
			"A patient is receiving volume-controlled ventilation in the assist/control mode. The respiratory therapist discovers that autoPEEP is increasing and that the patient is not completing exhalation before the inspiratory phase starts. Which of the following adjustments to the ventilator is most appropriate?\n\n A. Add expiratory retard\n B. Decrease mechanical deadspace\n C. Increase flow\n D. Decrease the mandatory rate",
		options: {
			A: "Add expiratory retard",
			B: "Decrease mechanical deadspace",
			C: "Increase flow",
			D: "Decrease the mandatory rate",
		},
		answer: "C",
		answer_explanation:
			"Increase flow\n\nAutoPEEP occurs when the patient fails to exhale all gases before the next mechanical breath begins. This promotes air-trapping and will expand the alveoli and result in many other negative effects that are associated with positive pressure ventilation. AutoPEEP can be corrected by allowing more time for exhalation. This can be accomplished by increasing inspiratory flow and decreasing inspiratory time. Additionally, AutoPEEP may be decreased by decreasing mandatory rate, but this is not a appropriate as increasing the flow because it will result in a shift in minute ventilation and may adjust PaCO2 negatively.",
	},
	{
		question:
			"After a gastric bypass surgery, which of the following positions should the patient be placed in to facilitate effective ventilation?\n\n A. prone\n B. 1/4 turn to either side\n C. supine\n D. semi-Fowler's position",
		options: {
			A: "prone",
			B: "1/4 turn to either side",
			C: "supine",
			D: "semi-Fowler's position",
		},
		answer: "D",
		answer_explanation:
			"semi-Fowler's position\n\nThe lungs are most effectively ventilated when patients are in semi-Fowler's position. This, of course, only applies to patients who are in bed. Standing always provides the best gas distribution and ventilation of the lungs.",
	},
	{
		question:
			"A patient in an extended care unit is being NT suctioned every 4 hours. Secretions are thick, tenacious, and copious. With of the following would be most helpful?\n\n A. administer cool aerosol treatments, q4 hours for 20 minutes\n B. implement positive pressure breathing treatments\n C. reduce suction interval\n D. perform suctioning more frequently",
		options: {
			A: "administer cool aerosol treatments, q4 hours for 20 minutes",
			B: "implement positive pressure breathing treatments",
			C: "reduce suction interval",
			D: "perform suctioning more frequently",
		},
		answer: "D",
		answer_explanation:
			"perform suctioning more frequently\n\nIn the presence of thick secretions, an increase in suction frequency is indicated, especially because every 4 hours is likely too infrequent.",
	},
	{
		question:
			"During surgery, a patient is placed on an infrared absorption device. Capnographic waveforms are normal. The difference between measured PaCO2 by arterial blood gas analysis and expired gas measurement by capnography is within expectations. PaCO2 is 40 mm Hg. What is the patient's estimated VD/VT?\n\n A. 40%\n B. 60%\n C. 25%\n D. 50%",
		options: {A: "40%", B: "60%", C: "25%", D: "50%"},
		answer: "C",
		answer_explanation:
			"25%\n\nVD/VT = (PaCO2 - PetCO2)/PaCO2. End tidal CO2 varies from PaCO2 by about 10 mm Hg. (reading lower) Therefore, (40-30)/40 = 0.25 or 25%.",
	},
	{
		question:
			"An 80-kg (176-lb) male patient is receiving mechanical ventilation. After increasing PEEP, the following data is available: Arterial blood gases reveal\npH 7.35 \nPaCO2 46 mm Hg\nPaO2 64 mm Hg\nHCO3- 26 mEq/L\nBE +2 mEq/L\nPCWP 12 mm Hg\nC.I. 1.8 L/min /m2\nPAP 15 mm Hg\nCVP 6 mm Hg\n\nThe respiratory therapist should FIRST\n A. increase FIO2\n B. decrease FIO2\n C. increase mandatory rate\n D. decrease PEEP",
		options: {
			A: "increase FIO2",
			B: "decrease FIO2",
			C: "increase mandatory rate",
			D: "decrease PEEP",
		},
		answer: "D",
		answer_explanation:
			"decrease PEEP\n\nThe arterial blood gas shows that the patient is hypoxic. A logical correction of this problem would be to increase the PEEP. However, a recent increase in PEEP has produced a cardiac index of 1.8. This is equivalent to a 3.6 L cardiac output. Normal cardiac output is 4 to 8 L. A cardiac output of 3.6 L proves that the patient is having a negative cardiac response to PEEP. So, the best answer is to decrease PEEP, even though it will result in more profound hypoxemia. But, it will improve cardiac output which is ultimately more important.",
	},
	{
		question:
			"A patient has received three aerosolized bronchodilator treatments over the past 2 hours with no relief noted. Which of the following may benefit the patient?\n\n A. administer Atropine sulfate (SCH 1000)\n B. administer Atrovent (Ipratropium bromide) with Albuterol\n C. administer continuous Albuterol at 1 mg/hr\n D. administer cromolyn sodium (Intal)",
		options: {
			A: "administer Atropine sulfate (SCH 1000)",
			B: "administer Atrovent (Ipratropium bromide) with Albuterol",
			C: "administer continuous Albuterol at 1 mg/hr",
			D: "administer cromolyn sodium (Intal)",
		},
		answer: "B",
		answer_explanation:
			"administer Atrovent (Ipratropium bromide) with Albuterol\n\nA patient who continues to wheeze after a few bronchodilator treatments is in need of further bronchodilator medication. Of the options offered, Atrovent with albuterol is the best option. Continuous bronchodilator therapy would be appropriate but the dose offered is subtherapeutic. For a pediatric patient at least 7 mg per hour is appropriate and 10 mg per hour is required for an adult.",
	},
	{
		question:
			"A patient with a history of asthma has been receiving Aminophylline by IV over the last 24 hours in an attempt to promote bronchodilation. Which of the following data would be helpful in assessing the effectiveness of therapy?\n\n A. Perform a bronchoscopy to assess the degree of bronchocontstriction\n B. Evaluate Theophylline level\n C. Recommend a V/Q scan\n D. Determine the PD50",
		options: {
			A: "Perform a bronchoscopy to assess the degree of bronchocontstriction",
			B: "Evaluate Theophylline level",
			C: "Recommend a V/Q scan",
			D: "Determine the PD50",
		},
		answer: "B",
		answer_explanation:
			"Evaluate Theophylline level\n\nA patient taking xanthine medication, such as Aminophylline, should be monitored through a blood test called a theophylline level. The appropriate theophylline level should be between 10-20 micrograms. A level less than that is considered sub-therapeutic and is an indication that the amount of medication should be increased. A level higher than that range is associated with seizures and other adverse reactions that can be deadly. If this is found, the medication should not be merely reduced, but should be stopped until the level falls back into the acceptable range.",
	},
	{
		question:
			"Which of the following would be increased in a patient diagnosed with COPD?\n\n\n TLC FRC RV VT \n1. YES NO YES NO\n2. YES YES YES NO\n3. NO YES NO YES\n4. NO NO NO YES\n\n A. 1\n B. 2\n C. 3\n D. 4",
		options: {A: "1", B: "2", C: "3", D: "4"},
		answer: "B",
		answer_explanation:
			"2\n\nWith COPD, air-trapping causes an increase in RV, FRC, and TLC. Tidal volume does not increase as a result of the obstructive defect.",
	},
	{
		question:
			"Which of the following techniques would be most helpful in quickly evaluating the metHb level in the blood of a patient?\n\n A. multiple wavelength spectrophotometry\n B. pulse oximetry\n C. myelography\n D. CO-Oximetry",
		options: {
			A: "multiple wavelength spectrophotometry",
			B: "pulse oximetry",
			C: "myelography",
			D: "CO-Oximetry",
		},
		answer: "A",
		answer_explanation:
			"multiple wavelength spectrophotometry\n\nA multiple-wavelength spectrophotometer works much like a pulse oximeter and is therefore is a quick way to quantify the presence of other gases in the blood, beside oxygen. A pulse oximeter, in contrast, is a single-wavelength spectrophotometer that can only detect one gas - oxygen. A multiple wavelength spectrophotometer can detect other things such as MetHb, COHb, and others.",
	},
	{
		question:
			"A respiratory therapist is providing chest physiotherapy and postural drainage on a cystic fibrosis patient with pneumonia in the right lateral segment. The patient was in high fowlers prior to therapy. The patient experiences arrhythmias and dyspnea after 5 minutes of therapy. What should the therapist recommend?\n\n A. stop therapy, place the patint in semi-fowlers, monitor\n B. stop therapy, return to high-fowlers, provide oxygen, call the physician\n C. place bed flat, continue therapy, monitor\n D. stop percussion, provide 100% oxygen",
		options: {
			A: "stop therapy, place the patint in semi-fowlers, monitor",
			B: "stop therapy, return to high-fowlers, provide oxygen, call the physician",
			C: "place bed flat, continue therapy, monitor",
			D: "stop percussion, provide 100% oxygen",
		},
		answer: "B",
		answer_explanation:
			"stop therapy, return to high-fowlers, provide oxygen, call the physician\n\nSigns or symptoms such as arrhythmias or dyspnea associated with chest physiotherapy or postural drainage should result in the complete cessation of therapy, documentation in the medical record, and notification of the physician. Providing oxygen in this case is appropriate due to the arrhythmias.",
	},
	{
		question:
			"While performing endotracheal suctioning of a patient, the respiratory therapist observes PVCs on the monitor. How might the therapist modify this therapy to prevent PVCs from occurring during future suctioning?\n\n A. Change the suction pressure\n B. Decrease suction duration\n C. Instill lidocaine, IV\n D. apply intermittent suctioning technique",
		options: {
			A: "Change the suction pressure",
			B: "Decrease suction duration",
			C: "Instill lidocaine, IV",
			D: "apply intermittent suctioning technique",
		},
		answer: "B",
		answer_explanation:
			"Decrease suction duration\n\nTo prevent the development of PVCs during endotracheal suctioning, the respiratory therapist should decrease suction duration, which is a primary cause of PVCs, and hyper oxygenate the patient prior to suctioning. Both of these actions will prevent the onset of acute hypoxemia that sometimes occurs with prolonged suctioning.",
	},
	{
		question:
			"A 38-year-old male patient presents to the emergency room with difficulty swallowing and double vision. He reports a history of Myasthenia Gravis at a prior time, but was never ventilator-dependent. He now has the following clinical data:\n\nVital Capacity: 0.9 L\nTidal volume: 350 mL\nMIP: -22 cmH2O\n\nWhat should the respiratory therapist recommend?\n A. NRB mask\n B. Atropine\n C. Tensilon challenge\n D. manual ventilation",
		options: {
			A: "NRB mask",
			B: "Atropine",
			C: "Tensilon challenge",
			D: "manual ventilation",
		},
		answer: "C",
		answer_explanation:
			"Tensilon challenge\n\nA Tensilon challenge will help diagnose this patient. If positive, intubation and mechanical ventilation is indicated immediately because VC is already below 1.0 L.",
	},
	{
		question:
			"A physician suspects an emergency room patient has restrictive lung disease, though there is no record of such an impairment in the patient's medical history. Which of the following would help to evaluate the patient for this suspicion?\n\n A. peak flow rate determination\n B. single-breath nitrogen elimination test\n C. bedside flow-volume loop\n D. incentive spirometry",
		options: {
			A: "peak flow rate determination",
			B: "single-breath nitrogen elimination test",
			C: "bedside flow-volume loop",
			D: "incentive spirometry",
		},
		answer: "C",
		answer_explanation:
			"bedside flow-volume loop\n\nA flow-volume loop can be evaluated by bedside pulmonary function testing. The shape of the loop can indicate the presence of an obstructive and/or a restrictive lung defect.",
	},
	{
		question:
			"Metabolic alkalosis is the correct interpretation for which of the following blood gas values?\n\n A. pH 7.50, PaCO2 24 mmHg, HCO3- 23 mEq/L, BE -1 mEq/L\n B. pH 7.50, PaCO2 44 mmHg, HCO3- 32 mEq/L, BE +9 mEq/L\n C. pH 7.50, PaCO2 34 mmHg, HCO3- 25 mEq/L, BE +2 mEq/L\n D. pH 7.50, PaCO2 35 mmHg, HCO3- 19 mEq/L, BE -6 mEq/L",
		options: {
			A: "pH 7.50, PaCO2 24 mmHg, HCO3- 23 mEq/L, BE -1 mEq/L",
			B: "pH 7.50, PaCO2 44 mmHg, HCO3- 32 mEq/L, BE +9 mEq/L",
			C: "pH 7.50, PaCO2 34 mmHg, HCO3- 25 mEq/L, BE +2 mEq/L",
			D: "pH 7.50, PaCO2 35 mmHg, HCO3- 19 mEq/L, BE -6 mEq/L",
		},
		answer: "B",
		answer_explanation:
			"pH 7.50, PaCO2 44 mmHg, HCO3- 32 mEq/L, BE +9 mEq/L\n\nMetabolic alkalosis is indicated when the pH is high, the CO2 is normal or low, and HCO3- level is elevated.",
	},
	{
		question:
			"A patient is receiving 60%/40% helium-oxygen mixture by nonrebreather mask through a compensated oxygen flow meter. The indicated flow on the meter is 10 L/min. What is the estimated total gas flow to the patient?\n\n A. 10 L/min\n B. 14 L/min\n C. 18 L/min\n D. 8 L/min",
		options: {A: "10 L/min", B: "14 L/min", C: "18 L/min", D: "8 L/min"},
		answer: "B",
		answer_explanation: "14 L/min",
	},
	{
		question:
			"A patient has exhaled to FRC followed by a maximal inhalation while a value is recorded. The respiratory therapist is observing which of the following?\n\n A. IC\n B. ERV\n C. TLC\n D. VC",
		options: {A: "IC", B: "ERV", C: "TLC", D: "VC"},
		answer: "A",
		answer_explanation:
			"IC\n\nThis type of question can be confusing. Exhaling to FRC suggests that the patient has exhaled his or her tidal volume but has not yet exhaled beyond (ERV). When a patient exhales tidal volume passively and then takes a maximal inhalation, then tidal volume (VT) and inspiratory reserve volume (IRV) is being inspired. This is called inspiratory capacity (IC). IC = VT+IRV.",
	},
	{
		question:
			"A patient receiving mechanical ventilation has the following arterial blood gases:\npH 7.29 \nPaCO2 55 torr\nPaO2 60 torr\nHCO3- 26 mEq/L\nBE 1.2 mEq/L\n\nAfter increasing minute ventilation, what new ABG would most likely be seen?\n\n A. pH 7.25, PaCO2: 59 torr, PaO2 65 torr\n B. pH 7.34, PaCO2: 45 torr, PaO2 60 torr\n C. pH 7.32, PaCO2: 48 torr, PaO2 68 torr\n D. ph 7.30, PaCO2: 45 torr, PaO2 60 torr",
		options: {
			A: "pH 7.25, PaCO2: 59 torr, PaO2 65 torr",
			B: "pH 7.34, PaCO2: 45 torr, PaO2 60 torr",
			C: "pH 7.32, PaCO2: 48 torr, PaO2 68 torr",
			D: "ph 7.30, PaCO2: 45 torr, PaO2 60 torr",
		},
		answer: "C",
		answer_explanation:
			"pH 7.32, PaCO2: 48 torr, PaO2 68 torr\n\nIncreasing minute ventilation should reduce PaCO2, and increase pH. Because CO2 is an acid, the higher the level of the CO2 in the blood, the lower the pH. You will notice also that the PaO2 has increased. It is important to solve the problem of insufficient ventilation prior to insufficient oxygenation because as ventilation improves, oxygenation should also improve to some degree.",
	},
	{
		question:
			"A respiratory therapist would expect what change to occur to the deadspace to tidal volume ratio when a patient is intubated and placed on a mechanical ventilator?\n\n A. increase at first, then gradually decrease\n B. no change\n C. decrease\n D. increase",
		options: {
			A: "increase at first, then gradually decrease",
			B: "no change",
			C: "decrease",
			D: "increase",
		},
		answer: "D",
		answer_explanation:
			"increase\n\nThe initial value would be a low end-tidal CO2, followed by a steady and slow rise.",
	},
	{
		question:
			"A patient with a history of hyper-reactive airway disease is having difficulty expectorating because the sputum is thick and tenacious. Which of the following medications should the respiratory therapist recommend?\n\n A. Solu-Mederol\n B. Acetylcysteine (mucomyst)\n C. Spiriva (tiotropium bromide)\n D. Beclamethasone (Beclovent)",
		options: {
			A: "Solu-Mederol",
			B: "Acetylcysteine (mucomyst)",
			C: "Spiriva (tiotropium bromide)",
			D: "Beclamethasone (Beclovent)",
		},
		answer: "B",
		answer_explanation:
			"Acetylcysteine (mucomyst)\n\nHyperactive airway disease is associated with diseases such as asthma and consist of bronchoconstriction and inflammation. This patient appears to have difficulty with bronchoconstriction and thick secretions. Therefore, a mucolytic, such as acetylcysteine, and Solu-Medrol are appropriate.",
	},
	{
		question:
			"A respiratory therapist has provided Albuterol treatments via SVN to a patient in the emergency room for shortness of breath. The patient now has bleeding gums and epistaxis. What should the physician check?\n\n A. sinus X-ray\n B. arterial blood gas\n C. prothrombin time\n D. allergic response to Albuterol",
		options: {
			A: "sinus X-ray",
			B: "arterial blood gas",
			C: "prothrombin time",
			D: "allergic response to Albuterol",
			F: "ejection fraction",
			G: "Fick",
			H: "A-aDO2",
		},
		answer: "D",
		answer_explanation:
			"allergic response to Albuterol\n\nWhich of the following equations would help determine cardiac output?\n A. oxygen consumption\n B. ejection fraction\n C. Fick\n D. A-aDO2",
	},
	{
		question:
			"Which of the following equations would help determine cardiac output?\n\n A. oxygen consumption\n B. ejection fraction\n C. Fick\n D. A-aDO2",
		options: {
			A: "oxygen consumption",
			B: "ejection fraction",
			C: "Fick",
			D: "A-aDO2",
		},
		answer: "C",
		answer_explanation:
			"Fick\n\nThere are many ways to determine cardiac output. One way is called the Fick equation.",
	},
	{
		question:
			"The legal guardian of a patient with asthma calls into the clinic and reports that her child is in the red zone on the asthma action plan and asks for direction. The respiratory therapist should instruct the guardian to\n\n A. call 911 for an ambulance.\n B. contact their doctor immediately.\n C. administer a double dose of Albuterol.\n D. check the peak flow and call back.",
		options: {
			A: "call 911 for an ambulance.",
			B: "contact their doctor immediately.",
			C: "administer a double dose of Albuterol.",
			D: "check the peak flow and call back.",
		},
		answer: "A",
		answer_explanation:
			"call 911 for an ambulance.\n\nAccording to the National Asthma Education and Prevention Program (NAEPP), when a patient is in the 'red zone' on an asthma action plan, the recommendation is to immediately report to the emergency room or active emergency responders by calling 911 for an ambulance.",
	},
	{
		question:
			"Immediately following insertion of a tracheostomy tube for the provision of positive pressure mechanical ventilation, enough air should be added to the tracheostomy tube cuff to?\n\n A. pressurize the cuff to 20 cm H2O\n B. prevent air passage around the cuff at peak inspiration\n C. make the pilot balloon taught\n D. disable vocal speech",
		options: {
			A: "pressurize the cuff to 20 cm H2O",
			B: "prevent air passage around the cuff at peak inspiration",
			C: "make the pilot balloon taught",
			D: "disable vocal speech",
		},
		answer: "A",
		answer_explanation:
			"pressurize the cuff to 20 cm H2O\n\nImmediately after intubation with an ET tube or a tracheostomy tube that is equipped with an inflatable cuff, the cuff should be inflated to a pressure of 20-26 cm H2O. Or, if expressed in torr, cuff pressure should not exceed 20.",
	},
	{
		question:
			"What is the most important characteristic in a transport ventilator that will be used during a transport within a hospital?\n\n A. disconnect alarm\n B. return tidal volume reporting\n C. operates on batteries for at least 1 hour\n D. pressure support mode",
		options: {
			A: "disconnect alarm",
			B: "return tidal volume reporting",
			C: "operates on batteries for at least 1 hour",
			D: "pressure support mode",
		},
		answer: "A",
		answer_explanation:
			"disconnect alarm\n\nDuring the transport of the patient on a ventilator, movement from place to place and bed to bed presents the most obvious risk of accidental disconnection. Thus, the disconnect alarm is most important during the transport.",
	},
	{
		question:
			"Equipment is delivered from the central supply department to the respiratory therapy department and the packaging indicator shows that it is not sterile. What should the respiratory therapist recommend?\n\n A. replace the indicator and re-evaluate\n B. soak in Cidex for 10 hours\n C. avoid using the equipment\n D. place in clean equipment bin",
		options: {
			A: "replace the indicator and re-evaluate",
			B: "soak in Cidex for 10 hours",
			C: "avoid using the equipment",
			D: "place in clean equipment bin",
		},
		answer: "C",
		answer_explanation:
			"avoid using the equipment\n\nIf the packaging indicator shows that the central supply procedure was ineffective, the simple solution is to return the device or equipment to the central supply department for a repeat sterilization procedure.",
	},
	{
		question:
			"Which of the following conditions would benefit most from polysomnography?\n\n A. obesity with increased day-time sleepiness\n B. suspected increased airway resistance\n C. COPD\n D. congestive heart failure",
		options: {
			A: "obesity with increased day-time sleepiness",
			B: "suspected increased airway resistance",
			C: "COPD",
			D: "congestive heart failure",
		},
		answer: "A",
		answer_explanation:
			"obesity with increased day-time sleepiness\n\nPolysomnography is another word for sleep study. An obese patient who has daytime sleepiness would benefit most from polysomnography. Keep in mind that Polysomnography is the study of the problem - not the solution. But it must be done for diagnostic purposes and in order to find the adequate CPAP setting.",
	},
	{
		question:
			"A newborn with IRDS is being mechanically ventilated in the time-cycled, pressure-limited SIMV mode. The physician would like to increase minute ventilation. In order to accomplish this request, the respiratory therapist would make what modification?\n\n A. Change to a volume-cycled mode\n B. Increase I-time\n C. Decrease flowrate\n D. Increase tidal volume",
		options: {
			A: "Change to a volume-cycled mode",
			B: "Increase I-time",
			C: "Decrease flowrate",
			D: "Increase tidal volume",
		},
		answer: "B",
		answer_explanation:
			"Increase I-time\n\nUnlike volume ventilation, time-cycled pressure-limited mechanical ventilation will deliver more volume per breath when inspiratory time is increased. Because the breath will be delivered for a longer period of time at a constant flow rate, ventilation will increase. It is not appropriate to change to a volume-cycled mode on a newborn. Tidal volume is not a direct control in this mode and therefore is an incorrect answer. Decreasing the flow rate would result in a reduction in ventilation.",
	},
	{
		question:
			"While administering an aerosolized small volume nebulizer treatment, the respiratory therapist observes the patient taking a deep breath, exhaling passively, and relaxing between breaths. The therapist should include which of the following instructions?\n\n A. breathe more quickly\n B. exhale forcefully\n C. pause at the top of each breath\n D. exhale actively",
		options: {
			A: "breathe more quickly",
			B: "exhale forcefully",
			C: "pause at the top of each breath",
			D: "exhale actively",
		},
		answer: "C",
		answer_explanation:
			'pause at the top of each breath\n\nThis question is really a question about the normal breathing pattern that should be used during any kind of breathing treatment. It consists of inhaling deeply, pausing at the top of each breath, exhaling passively, and relaxing between breaths. In this question the patient is skipping the step, "pause at the top of each breath".',
	},
	{
		question:
			"The correct pediatric dosage for Xopenex is?\n\n A. 0.63 mg Q3 hours for children between age 6 and 11 years\n B. 0.31 mg TID for children between age 6 and 11 years\n C. 0.31 mg TID for children under age six\n D. 1.25 mg TID for all ages",
		options: {
			A: "0.63 mg Q3 hours for children between age 6 and 11 years",
			B: "0.31 mg TID for children between age 6 and 11 years",
			C: "0.31 mg TID for children under age six",
			D: "1.25 mg TID for all ages",
		},
		answer: "B",
		answer_explanation:
			"0.31 mg TID for children between age 6 and 11 years\n\nXopenex should not be given prior to age 6. 0.31 mg is the appropriate dosage for a patient between age 6 and 11 years. Q3 hours is too frequent for this medication. TID is the appropriate starting frequency for Xopenex.",
	},
	{
		question:
			"A respiratory therapist is able to palpate crackling sensations surrounding the area of a tracheostomy tube that was placed just 8 hours prior. This is most likely caused by (a)\n\n A. faulty cuff.\n B. pulmonary emphysema.\n C. vocal fremitus.\n D. mal-positioned tracheotomy tube.",
		options: {
			A: "faulty cuff.",
			B: "pulmonary emphysema.",
			C: "vocal fremitus.",
			D: "mal-positioned tracheotomy tube.",
		},
		answer: "D",
		answer_explanation:
			"mal-positioned tracheotomy tube.\n\nThe palpation of crackling or popping sensations around a recently-placed tracheostomy tube is most likely a condition called subcutaneous emphysema. Of the options listed, a mal-positioned ET tube is most likely. When the tube is not placed properly, air can enter into the dermal spaces.",
	},
	{
		question:
			"A 65-year-old female patient with COPD is transferred to the intensive care unit for close monitoring. She is receiving supplemental oxygen by cannula at 2 lpm. While transferring her from the gurney to the bed, she becomes increasingly short of breath. SpO2 falls from 92% to 87%. The respiratory therapist should\n\n A. place on non-invasive ventilation.\n B. administer a mild sedative.\n C. increase the oxygen to 4 lpm.\n D. verbally calm the patient.",
		options: {
			A: "place on non-invasive ventilation.",
			B: "administer a mild sedative.",
			C: "increase the oxygen to 4 lpm.",
			D: "verbally calm the patient.",
		},
		answer: "C",
		answer_explanation: "increase the oxygen to 4 lpm.",
	},
	{
		question:
			"A pulmonary rehabilitation patient is being monitored for compliance to a smoking cessation program. Which of the following values would be most helpful to evaluate?\n\n A. COHb\n B. SPO2\n C. metHb\n D. PaO2",
		options: {A: "COHb", B: "SPO2", C: "metHb", D: "PaO2"},
		answer: "A",
		answer_explanation:
			"COHb\n\nA patient on a smoking cessation program may be monitored for compliance by periodically assessing the COHb. If COHb remains elevated or increases, the patient is likely not compliant with the program.",
	},
	{
		question:
			"A 114-kg (250-lb), 133-cm (5-ft, 4-in) female patient is receiving PC, SIMV ventilation on the following settings:\n\nFIO2 0.45 \nMandatory rate 16/min\nExhaled VT 620 mL\nIP 33 cm H2O\nPEEP 5 cm H2O\nI:E ratio 1:2\n\nABGs are as follows:\npH 7.51 \nPaCO2 29 torr\nPaO2 109 torr\nHCO3- 23 mEq/L\n\nThe respiratory therapist should recommend\n\nA. discontinuing PEEP.\n B. decreasing FIO2.\n C. decreasing mandatory rate.\n D. lowering inspiratory pressure.",
		options: {
			A: "discontinuing PEEP.",
			B: "decreasing FIO2.",
			C: "decreasing mandatory rate.",
			D: "lowering inspiratory pressure.",
		},
		answer: "D",
		answer_explanation: "lowering inspiratory pressure.",
	},
	{
		question:
			"A patient is brought to the emergency department (ED) with respiratory distress. The patient has a single-bore tracheostomy tube in place, which was replaced three weeks prior. The patient reports recently coughing up tan, thick secretions through the tube. The medical record from the transferring facility indicates the patient breathes ambient air without supplemental oxygen. Currently, the patient is receiving oxygen by trach collar and a high-flow air entrainment device set at 40%. The respiratory therapist should recommend\n\n A. replacement of the tracheostomy tube.\n B. installation of a Jackson tracheostomy tube.\n C. heated humidity.\n D. Instillation of 4% Mucomyst and suctioning through the ET tube.",
		options: {
			A: "replacement of the tracheostomy tube.",
			B: "installation of a Jackson tracheostomy tube.",
			C: "heated humidity.",
			D: "Instillation of 4% Mucomyst and suctioning through the ET tube.",
		},
		answer: "C",
		answer_explanation:
			"heated humidity.\n\nThe presence of secretions (any amount) is an indication for heated humidity. Instillation of Mucomyst is not quite appropriate and tracheostomy tube replacement would not be helpful.",
	},
	{
		question:
			"A therapist palpates a popping sensation in the upper chest and neck. Which of the following is the most likely cause?\n\n A. subcutaneous emphysema\n B. alveolar distension\n C. discontinuous rhonchi in the upper airways\n D. crepitus rales",
		options: {
			A: "subcutaneous emphysema",
			B: "alveolar distension",
			C: "discontinuous rhonchi in the upper airways",
			D: "crepitus rales",
		},
		answer: "A",
		answer_explanation:
			"subcutaneous emphysema\n\nPopping sensations, also referred to as crackling sensations, during palpation of the tissues of the upper chest and neck are related to subcutaneous emphysema, which is a condition of air entering the dermal and subdermal spaces. It is usually caused by a mal-positioned tracheostomy tube.",
	},
	{
		question:
			"A patient with pneumococcal pneumonia is having difficulty expectorating sputum that is thick and tenacious. Which of the following would most effectively help thin secretions?\n\n A. aerosolized acetylcysteine, once daily\n B. aerosolized albuterol treatments\n C. instillation of saline into the airway\n D. IV fluids",
		options: {
			A: "aerosolized acetylcysteine, once daily",
			B: "aerosolized albuterol treatments",
			C: "instillation of saline into the airway",
			D: "IV fluids",
		},
		answer: "D",
		answer_explanation:
			"IV fluids\n\nThe most effective way to thin secretions is by increasing the overall fluid status of the patient. This is most effectively done through IV fluid administration and by oral consumption of water (and other fluids).",
	},
	{
		question:
			"A patient in the intensive care unit has an arterial catheter in place. The respiratory therapist notices the blood pressure from the arterial line is 95/70 mmHg. Blood pressure taken by a sphygmomanometer reads 110/78 mmHg. The patient is asymptomatic. The therapist should\n\n A. discard the blood pressure cuff\n B. record the arterial line blood pressure\n C. calibrate the blood pressure cuff\n D. record the sphygmomanometer blood pressure",
		options: {
			A: "discard the blood pressure cuff",
			B: "record the arterial line blood pressure",
			C: "calibrate the blood pressure cuff",
			D: "record the sphygmomanometer blood pressure",
		},
		answer: "D",
		answer_explanation:
			"record the sphygmomanometer blood pressure\n\nWhen blood pressure by sphygmomanometer (cuff) differs from the blood pressure obtained from an indwelling arterial line, the blood pressure taken by cuff is considered more accurate and reliable. Problems that may occur in the yard line include a clots in the line or bubbles in the transducer dome.",
	},
	{
		question:
			"A patient on long-term supplemental oxygen via a transtracheal oxygen catheter is hospitalized on a general observation floor. The patient complains of shortness of breath and indicates the device is not functioning properly. The respiratory therapist should\n\n A. administer aerosolized Ipratropium Bromide (Atrovent) by mask\n B. remove the transtracheal catheter, begin mechanical ventilation\n C. suction the catheter, recheck oxygen saturation\n D. begin supplemental oxygen delivery by nasal cannula",
		options: {
			A: "administer aerosolized Ipratropium Bromide (Atrovent) by mask",
			B: "remove the transtracheal catheter, begin mechanical ventilation",
			C: "suction the catheter, recheck oxygen saturation",
			D: "begin supplemental oxygen delivery by nasal cannula",
		},
		answer: "D",
		answer_explanation:
			"begin supplemental oxygen delivery by nasal cannula\n\nWhen a patient complains of shortness of breath or complains that the oxygen delivery equipment is not working properly, the best first option is to ensure oxygenation by changing to another device and then troubleshooting the problem.",
	},
	{
		question:
			"Immediately after the insertion of a nasopharyngeal airway (nasal trumpet), the patient begins to cough uncontrollably. The therapist should consider\n\n A. reinserting the airway with a viscous lidocaine lubricant\n B. withdrawing the airway by 1 cm\n C. replacing the airway with one that is shorter\n D. spaying the oropharynx with benzocaine",
		options: {
			A: "reinserting the airway with a viscous lidocaine lubricant",
			B: "withdrawing the airway by 1 cm",
			C: "replacing the airway with one that is shorter",
			D: "spaying the oropharynx with benzocaine",
		},
		answer: "C",
		answer_explanation:
			"replacing the airway with one that is shorter\n\nThe patient's response to cough vigorously immediately after insertion of the nasal trumpet indicates the airway is likely too long. It should be replaced with a shorter one.",
	},
	{
		question:
			"A respiratory therapist is assisting the anesthesiologist in the placement of an 8.0-mm tracheostomy tube on a patient who has ARDS and is receiving mechanical ventilation in the PC mode. During a troublesome insertion, the therapist observes the development of tachycardia, a marked reduction in the return volume, and absent breath sounds over the right lung field. The therapist should suspect\n\n A. massive bilateral atelectasis\n B. a pleural effusion is developing on the right\n C. right-sided pneumothorax\n D. the tracheostomy tube is too large",
		options: {
			A: "massive bilateral atelectasis",
			B: "a pleural effusion is developing on the right",
			C: "right-sided pneumothorax",
			D: "the tracheostomy tube is too large",
		},
		answer: "C",
		answer_explanation:
			"right-sided pneumothorax\n\nOne of the possible negative outcomes that can occur with the insertion of a tracheostomy tube is a pneumothorax. Data indicating absent breath sounds over the right lung field as well as a reduction in return volume suggests that a pneumothorax may have occurred on the right. A chest radiograph would be required to confirm this.",
	},
	{
		question:
			"A mechanically ventilated patient with a PEEP of 10 cm H2O has a pressure/volume loop with a flat spot on the bottom of the graph. This means the\n\n A. PEEP is too low.\n B. PEEP is too high.\n C. flowrate is adjusted properly.\n D. PEEP is appropriately set.",
		options: {
			A: "PEEP is too low.",
			B: "PEEP is too high.",
			C: "flowrate is adjusted properly.",
			D: "PEEP is appropriately set.",
		},
		answer: "A",
		answer_explanation:
			'PEEP is too low.\n\nOptimal PEEP can be determined by airway graphics using the pressure/volume loop graphic. On the graphic display, a flat spot on the bottom of the "football" is undesirable. The appropriate response is to increase PEEP until the flat spot is virtually gone.',
	},
	{
		question:
			"A patient who has a 20-year history of smoking cigarettes reports smoking 1.5 packs a day on average over the course of 10 years and 1 pack a day for the remaining ten years. The respiratory therapist should estimate the pack years of the patient to be\n\n A. 40 pack years\n B. 25 pack years\n C. 30 pack years\n D. 45 pack years",
		options: {
			A: "40 pack years",
			B: "25 pack years",
			C: "30 pack years",
			D: "45 pack years",
		},
		answer: "B",
		answer_explanation:
			"25 pack years\n\nWhen determining a patient's smoking history pack years are calculated by multiplying the number of years the patient smoked by the average number of packs per day. In this case, the patient has smoked 1.5 packs per day over the course of 10 years. When multiplied together, the smoking history is 15 pack-years. Additionally, the patient smoked one pack a day for an additional 10 years which would add an additional 10 pack years for a total of 25 pack years.",
	},
	{
		question:
			"A 75-kg (165- lb) male who underwent a partial lobectomy of the right lung was extubated 2 hours ago. A respiratory therapist performs Sustained Maximal Inspiration exercises with the patient and records an inspiratory capacity of 700 mL. Which of the following should the respiratory therapist set as a goal for future SMI therapy.\n A. 800 mL\n B. 500 mL\n C. 2000 mL\n D. set goal equal to the patient's predicted vital capacity",
		options: {
			A: "800 mL",
			B: "500 mL",
			C: "2000 mL",
			D: "set goal equal to the patient's predicted vital capacity",
		},
		answer: "A",
		answer_explanation:
			"800 mL\n\nThe incentive spirometry goal should be set a little higher than the patient's current achievement.",
	},
	{
		question:
			"While turning a patient for a V/Q scan, the therapist suspects the endotracheal tube changed position. Currently the ET tube markings are 19 at the lip line. The therapist should FIRST do which of the following to assess tube position?\n\n A. obtain a chest radiograph\n B. observe chest rise\n C. withdraw the ET tube by 5 cm\n D. advance the ET tube by 2 cm",
		options: {
			A: "obtain a chest radiograph",
			B: "observe chest rise",
			C: "withdraw the ET tube by 5 cm",
			D: "advance the ET tube by 2 cm",
		},
		answer: "B",
		answer_explanation:
			"observe chest rise\n\nWhen trying to quickly determine the location of the endotracheal tube the action that must be taken first is that which is the quickest. Of the options offered, observing chest rise is the quickest.",
	},
	{
		question:
			"The laboratory results of a sputum culture and sensitivity have returned for a patient who has bilateral bacterial pneumonia. The culture reveals streptococcus, a gram-positive bacteria. The medical records indicates the patient is allergic to penicillin. Which of the following should the respiratory therapist recommend?\n\n A. Amoxicillin\n B. Methacillin\n C. Nafcillin\n D. Cephalexine (Keflex)",
		options: {
			A: "Amoxicillin",
			B: "Methacillin",
			C: "Nafcillin",
			D: "Cephalexine (Keflex)",
		},
		answer: "D",
		answer_explanation:
			"Cephalexine (Keflex)\n\nNormally gram-positive bacteria may be killed by penicillin-type antibiotics. But, because the patient is allergic to penicillin, a suitable drug is cephalexine. Nafcillin and methacillin are suitable antibiotics when a patient is penicillin-resistant but not when they are allergic.",
	},
	{
		question:
			"A patient is being monitored hemodynamically with a balloon-tipped, flow directed pulmonary artery catheter. The following hemodynamic data is available:\nPAP 22 mm Hg \nCVP 8 mm Hg\nPCWP 16 mm Hg\nC.O. 3.2 L\n\nWhich of the following mostly likely represents the patient's condition?\n\n A. dehydration\n B. cor pulmonale\n C. mitral valve stenosis\n D. pulmonary hypertension",
		options: {
			A: "dehydration",
			B: "cor pulmonale",
			C: "mitral valve stenosis",
			D: "pulmonary hypertension",
		},
		answer: "C",
		answer_explanation:
			"mitral valve stenosis\n\nCVP is high. PAP is also high. This indicates no problem in the right heart. PAP as high and pulmonary capillary wedge pressure is also high. This suggests no problem in the lungs. PCWP is high but cardiac output is low. This suggests there is a problem in the left heart. The only option that is associated with a left heart condition is mitral valve stenosis.",
	},
	{
		question:
			"Which of the following test results would be helpful in determining whether a patient should receive Bi-level therapy with supplemental oxygen?\n\n A. PetCO2\n B. SBN2\n C. DLCO\n D. MVV",
		options: {A: "PetCO2", B: "SBN2", C: "DLCO", D: "MVV"},
		answer: "A",
		answer_explanation:
			"PetCO2\n\nArterial PetCO2 is an indirect indicator of ventilation.",
	},
	{
		question:
			"An orally intubated patient is breathing spontaneously through an 8.0 mm ET tube. In the ambient air, humidity indicates only 22 mg per liter of air. Based on this, what humidity deficit will the respiratory therapist have to make up to completely meet the humidity needs of the patient?\n\n A. 12 mg/L of gas\n B. 100 mg/L of gas\n C. 22 mg/L of gas\n D. 44 mg/L of gas",
		options: {
			A: "12 mg/L of gas",
			B: "100 mg/L of gas",
			C: "22 mg/L of gas",
			D: "44 mg/L of gas",
		},
		answer: "C",
		answer_explanation:
			"22 mg/L of gas\n\nWhen relative humidity is 100%, the ambient air is holding 44 mg/H2O/L of gas. If the ambient air is only holding 22 mg/H2O/L, there is another 22 mg/H2O/L that is missing. This is known as the humidity deficit. Humidity deficit is always expressed in milligrams whereas relative humidity is expressed as a percentage.",
	},
	{
		question:
			"A respiratory therapist is participating on a Medical Emergency Response Team with a patient who is exhibiting severe hypoxemia. The patient has a DNI advanced directive. To maximize arterial oxygenation, the therapist should\n\n A. begin non-invasive positive pressure ventilation by mask\n B. utilize a nonrebreather mask with the flow on flush\n C. provide manual ventilation with a bag-valve-mask\n D. place the patient on an air-entrainment mask set at FIO2 0.5",
		options: {
			A: "begin non-invasive positive pressure ventilation by mask",
			B: "utilize a nonrebreather mask with the flow on flush",
			C: "provide manual ventilation with a bag-valve-mask",
			D: "place the patient on an air-entrainment mask set at FIO2 0.5",
		},
		answer: "B",
		answer_explanation:
			"utilize a nonrebreather mask with the flow on flush\n\nOf the options given, the use of a non-rebreather mask is most helpful at maximizing arterial oxygenation and minimizing hypoxemia.",
	},
	{
		question:
			"Which of the following is most accurately descriptive of VC ventilation?\n\n A. the inspiratory phase terminates after delivery of a preset volume\n B. inspiration ends when a preset pressure setting is reached\n C. pressure is constant for a specified period of inspiratory time\n D. flow is constant until a preset volume is delivered",
		options: {
			A: "the inspiratory phase terminates after delivery of a preset volume",
			B: "inspiration ends when a preset pressure setting is reached",
			C: "pressure is constant for a specified period of inspiratory time",
			D: "flow is constant until a preset volume is delivered",
		},
		answer: "A",
		answer_explanation:
			"the inspiratory phase terminates after delivery of a preset volume\n\nVC ventilation, also called volume-controlled ventilation, is a mode of ventilation that is characterize by the ending of inspiration through delivery of a predetermined tidal volume.",
	},
	{
		question:
			"What is the formula for finding a patient's mean arterial pressure?\n\n A. double the diastolic value, add the systolic, divide the sum by 2\n B. double the diastolic value, add the systolic value, divide the sum by 3\n C. double the systolic value, add the diastolic, divide the sum by 3\n D. calculate the sum of all positive pressure during mechanical ventilation",
		options: {
			A: "double the diastolic value, add the systolic, divide the sum by 2",
			B: "double the diastolic value, add the systolic value, divide the sum by 3",
			C: "double the systolic value, add the diastolic, divide the sum by 3",
			D: "calculate the sum of all positive pressure during mechanical ventilation",
		},
		answer: "B",
		answer_explanation:
			"double the diastolic value, add the systolic value, divide the sum by 3\n\nMAP can be calcuated by (1 x systolic) + (2 x diastolic) then dividing the entire sum by 3.",
	},
	{
		question:
			"What is the minute alveolar ventilation for a 150-lb (68-kg) patient with the following parameters?\n\nVE 8.4 L \nRespiratory rate 14/min\nPetCO2 30 mmHg\n\n A. 6.3 L\n B. 3.2 L\n C. 5.3 L\n D. 4.4 L",
		options: {A: "6.3 L", B: "3.2 L", C: "5.3 L", D: "4.4 L"},
		answer: "A",
		answer_explanation:
			"6.3 L\n\nMinute alveolar ventilation is determined by first taking the tidal volume and subtracting the dead space. In this case the tidal volume is not given, but the minute ventilation is. This will give a tidal volume of 600 mL. Because the patient weighs 150 lbs, the deadspace for each breath is 150 mL. Therefore that part of the tidal volume that is going to the alveoli is 450 mL. You then take the 450 mL and multiply it times the rate. You get 6.3 L. This is the alveolar minute ventilation.",
	},
	{
		question:
			"A patient is receiving volume-cycled mechanical ventilation with the high peak- pressure alarm continually sounding. The returned tidal volume is 300 mL less than the set volume. The respiratory therapist should\n\n A. evaluate the static compliance.\n B. increase the high-pressure alarm.\n C. deflate the cuff of the endotracheal tube.\n D. suction the patient.",
		options: {
			A: "evaluate the static compliance.",
			B: "increase the high-pressure alarm.",
			C: "deflate the cuff of the endotracheal tube.",
			D: "suction the patient.",
		},
		answer: "D",
		answer_explanation:
			"suction the patient.\n\nWhen the high-pressure alarm sounds, the delivered tidal volume is terminated. For a patient who is experiencing excessive secretions that trigger the high-pressure alarm, suctioning should stop the alarm and permit the delivered tidal volume to reach its full amount.",
	},
	{
		question:
			"A respiratory therapist is recommending the use of Vancomycin for the treatment of a blood-borne infection. The physician, however, feels penicillin would be most appropriate. Which of the following data could be used to corroborate the use of penicillin rather than vancomycin?\n\n A. blood cultures\n B. white blood cell count\n C. sputum gram stain\n D. theophylline level",
		options: {
			A: "blood cultures",
			B: "white blood cell count",
			C: "sputum gram stain",
			D: "theophylline level",
		},
		answer: "A",
		answer_explanation:
			"blood cultures\n\nThe blood should be cultured which will reveal whether the organism is gram-negative or gram-positive. If gram positive, a penicillin class antibiotic should be used, while a gram-negative organism would require a vancomycin-type antimicrobial.",
	},
	{
		question:
			"A 65-kg (143-lb) patient with cor pulmonale is in the cardiac intensive care unit (CICU) receiving VC A/C ventilation on the following settings:\n\nFIO2 0.55 \nRate 16/min\nVT 450 mL\nPEEP 8 cm H2O\nFlow 42 L/min\n\nABGs\npH 7.35\nPaCO2 46 torr\nPaO2 119 torr\nHCO3- 24 mEq/L \nHR 94/min\nSpO2 0.99\n\nThe respiratory therapist should recommend\n\n A. decreasing rate to 14/min.\n B. decreasing FIO2 to 0.45.\n C. increasing VT to 500 mL.\n D. decreasing PEEP to 5 cm H2O.",
		options: {
			A: "decreasing rate to 14/min.",
			B: "decreasing FIO2 to 0.45.",
			C: "increasing VT to 500 mL.",
			D: "decreasing PEEP to 5 cm H2O.",
		},
		answer: "D",
		answer_explanation:
			"decreasing PEEP to 5 cm H2O.\n\nAlthough CO2 is climbing slightly, pH remains within range. The patient, however, is over-oxygenating. This should be corrected first. Because current FIO2 is already below 0.60, PEEP should be the target for PaO2 reduction.",
	},
	{
		question:
			"While assisting a physician with a bronchoscopy, the respiratory therapist notices the bronchoscope is not applying suction even though the physician is depressing the suction button on the bronchoscope. The therapist should\n\n A. increase suction pressure at the wall.\n B. flush the suction channel on the bronchoscope.\n C. change the suction tubing between the vacuum source and the suction canister.\n D. recommend a change to a new bronchoscope.",
		options: {
			A: "increase suction pressure at the wall.",
			B: "flush the suction channel on the bronchoscope.",
			C: "change the suction tubing between the vacuum source and the suction canister.",
			D: "recommend a change to a new bronchoscope.",
		},
		answer: "B",
		answer_explanation:
			"flush the suction channel on the bronchoscope.\n\nThe suction channel on a bronchoscope can easily become clogged. Flushing the channel would be an appropriate first step in resolving the problem.",
	},
	{
		question:
			"A COPD patient is participating in a pulmonary rehabilitation program. During a visit to the clinic, the patient complains of shortness of breath when shaving his own face. About which of the following should the respiratory therapist instruct the patient that could help minimize shortness of breath during activity?\n\n A. have a family member perform facial shaving and basic hygiene for the patient\n B. avoid all activities that cause shortness of breath\n C. pursed-lip breathing\n D. quad coughing",
		options: {
			A: "have a family member perform facial shaving and basic hygiene for the patient",
			B: "avoid all activities that cause shortness of breath",
			C: "pursed-lip breathing",
			D: "quad coughing",
		},
		answer: "C",
		answer_explanation:
			"pursed-lip breathing\n\nPursed-lip breathing is a primary method of minimizing air-trapping during exhalation. This can lessen the degree of shortness of breath from physical activity and during performance of activities of daily living. The patient should not be instructed to omit normal basic activities of daily living, such as personal hygiene, toileting, cooking, etc. While a family member could perform the basic requirements for hygiene, this can result in a decrease in the patient's quality of life. When possible, the patient should be given methods that allow them to cope with the activity rather than remove it.",
	},
	{
		question:
			"A patient is receiving mechanical ventilatory support by VC ventilation in the A/C mode following a bariatric surgery. Current ventilatory parameters show:\n\nMIP -32 cm H2O \nVT(spont) 7 mL/kg\nVC 12 mL/kg\nRSBI 86\nQs/Qt 10%\nA-aDO2 110 mm Hg \n\nABGs \npH 7.35\nPaCO2 44 torr\nPaO2 87 torr\n\n\n\nThe patient follows most commands but has confusion regarding person, time, and place. The respiratory therapist should\n A. extubate the patient.\n B. begin ventilator weaning efforts.\n C. continue mechanical ventilatory support.\n D. administer naloxone (Narcan).",
		options: {
			A: "extubate the patient.",
			B: "begin ventilator weaning efforts.",
			C: "continue mechanical ventilatory support.",
			D: "administer naloxone (Narcan).",
		},
		answer: "C",
		answer_explanation:
			"continue mechanical ventilatory support.\n\nThough all ventilatory parameters are suitable for extubation, the mental disposition of the patient is an indication to avoid all ventilator liberation efforts until further evaluation of the patient's mental status can be performed.",
	},
	{
		question:
			"The respiratory therapist notices that the blood pressure reading from an indwelling arterial line differs from that of the cuff and sphygmomanometer. The therapist should\n\n A. document the arterial line blood pressure.\n B. replace the transducer on the arterial line.\n C. have the patient change arm positions and obtain another reading from the arterial line.\n D. document BP ascertained by the cuff.",
		options: {
			A: "document the arterial line blood pressure.",
			B: "replace the transducer on the arterial line.",
			C: "have the patient change arm positions and obtain another reading from the arterial line.",
			D: "document BP ascertained by the cuff.",
		},
		answer: "D",
		answer_explanation:
			"document BP ascertained by the cuff.\n\nThe cuff pressure should be most trusted. If there is a difference in the two sources, the arterial line is most likely the problem. This can be solved by 'zeroing' the arterial line. Replacing the transducer or having the patient arbitrarily change arm position is not helpful.",
	},
	{
		question:
			"A parent of a patient with asthma is following an Asthma action plan for their child. For more than 24 hours, the patient has taken nebulized Albuterol every 4 hours as prescribed, requiring several PRN treatments in between normal treatment times. After a night of bronchodilator treatments taken an average of every 2-3 hours, the parent should be counseled to\n\n A. contact the child's healthcare provider.\n B. report to the emergency room immediately.\n C. monitor and treat the patient for 24 more hours.\n D. call 911, activate the emergency response system.",
		options: {
			A: "contact the child's healthcare provider.",
			B: "report to the emergency room immediately.",
			C: "monitor and treat the patient for 24 more hours.",
			D: "call 911, activate the emergency response system.",
		},
		answer: "A",
		answer_explanation:
			"contact the child's healthcare provider.\n\nAccording to asthma action plan guidelines, as set forth by the National Asthma Education and Prevention Program (NAEPP), this level of distress suggests contacting the patient's healthcare provider. Calling 911 or reporting to the ER is premature.",
	},
	{
		question:
			"After insertion of the chest tube for treatment of a hemothorax, a chest radiograph is ordered. When observing the radiograph results, the respiratory therapist would expect to see the tip of the chest tube positioned\n\n A. in the pleural space.\n B. in the apical region.\n C. over the hilar area.\n D. over the lower left lung field.",
		options: {
			A: "in the pleural space.",
			B: "in the apical region.",
			C: "over the hilar area.",
			D: "over the lower left lung field.",
		},
		answer: "A",
		answer_explanation: "in the pleural space.",
	},
	{
		question:
			"If the graphic shows a 'bump' during a rise in the flow rate which of the following should be adjusted, given the following ventilator graphic on a patient receiving VC A/C ventilation?\n\nA. VT\n B. PEEP\n C. frequency\n D. flow",
		options: {A: "VT", B: "PEEP", C: "frequency", D: "flow"},
		answer: "D",
		answer_explanation:
			"flow\n\nThe small deflection shows the patient's inspiratory demand is greater than the flow rate. Flow should be increased so that the graphic shows a smooth rise to the peak flow setting.",
	},
	{
		question:
			"A 55-year-old, 95-kg (209-lb), 178 cm (5 ft 10 in) male is in a current state of ventilatory failure and requires mechanical ventilatory support. Which of the following settings are most appropriate?\n\n A. VC, SIMV, mandatory rate 12/min, VT 800 mL, PEEP 5 cm H2O\n B. PSV 15 cm H2O, PEEP 5 cm H2O\n C. VC, A/C, mandatory rate 18/min, VT 600 mL, PEEP 4 cm H2O\n D. PC, SIMV, PIP 45 cm H2O, mandatory rate 16/min, PEEP 6 cm H2O",
		options: {
			A: "VC, SIMV, mandatory rate 12/min, VT 800 mL, PEEP 5 cm H2O",
			B: "PSV 15 cm H2O, PEEP 5 cm H2O",
			C: "VC, A/C, mandatory rate 18/min, VT 600 mL, PEEP 4 cm H2O",
			D: "PC, SIMV, PIP 45 cm H2O, mandatory rate 16/min, PEEP 6 cm H2O",
		},
		answer: "C",
		answer_explanation:
			"VC, A/C, mandatory rate 18/min, VT 600 mL, PEEP 4 cm H2O\n\nThe patient is obese. Thus, predicted body weight should be determined. Based on height, PBW is about 73 kg. Tidal volume range at PBW would be 438 - 730 mL. Rate should be 10 - 20/min and PEEP 4 - 6 cm H2O.",
	},
	{
		question:
			"A patient with COPD is receiving ventilatory support by non-invasive ventilation with an of IPAP of 15 cm H2O and EPAP of 4 cm H2O. The following blood gases are available:\n\npH 7.21 \nPaCO2 69 torr\nPaO2 51 torr\nHCO3- 35 mEq/L\n\n\nThe respiratory therapist should recommend\n A. raising both IPAP and EPAP by 5 cm H2O.\n B. increasing IPAP to 20 cm H2O.\n C. discontinuing PEEP (EPAP of 0 cm H20).\n D. invasive ventilation.",
		options: {
			A: "raising both IPAP and EPAP by 5 cm H2O.",
			B: "increasing IPAP to 20 cm H2O.",
			C: "discontinuing PEEP (EPAP of 0 cm H20).",
			D: "invasive ventilation.",
		},
		answer: "D",
		answer_explanation:
			"invasive ventilation.\n\nEven though the patient is COPD and is likely normalized to elevated levels of PaCO2, the pH clearly indicates ventilatory failure. This suggests that non-invasive ventilation is inadequate and that full, invasive ventilatory support is needed.",
	},
	{
		question:
			"A respiratory therapist is providing education to a patient regarding the use of a metered dose inhaler prior to discharge from the hospital. After explaining the procedure to the patient and asking for a return demonstration, the patient does not execute the request and seems confused. How can the therapist best educate the patient on the use of MDI?\n\n A. have the patient complete a written comprehension quiz\n B. ask the patient if there is a language barrier\n C. demonstrate MDI use to the patient\n D. provide written instructions",
		options: {
			A: "have the patient complete a written comprehension quiz",
			B: "ask the patient if there is a language barrier",
			C: "demonstrate MDI use to the patient",
			D: "provide written instructions",
		},
		answer: "C",
		answer_explanation:
			"demonstrate MDI use to the patient\n\nThe most effective method of instruction regarding the physical performance of a procedure is for the practitioner to perform the action in front of the patient and then ask the patient to return the demonstration. This method is also most effective in overcoming language and other communication barriers.",
	},
	{
		question:
			"A patient has a history of congestive heart failure, cardiomegaly, and general left heart dysfunction. PCWP is elevated while cardiac index is decreased. Assuming no dysfunction in the pulmonary vasculature, what additional finding is likely?\n\n A. prolonged INR (international normalized ratio)\n B. polycythemia\n C. dehydration\n D. increased mPAP",
		options: {
			A: "prolonged INR (international normalized ratio)",
			B: "polycythemia",
			C: "dehydration",
			D: "increased mPAP",
		},
		answer: "D",
		answer_explanation:
			"increased mPAP\n\nWhen the left heart is failing to pump blood sufficiently, pressures are likely to back up, causing both PCWP and mPAP to be elevated. Dehydration is not likely, though fluid overload may be present. Elevated hemoglobin (polycythemia) and prolonged blood clotting time (INR) are not relevant factors.",
	},
	{
		question:
			"A 24-year-old Caucasian male has significant respiratory distress. Tracheal palpation reveals a tracheal shift to the left. A chest radiograph shows vascular markings on the left but none on the right. The respiratory therapist should prepare for treatment of a\n\n A. left-sided hemothorax.\n B. severe pleural effusion.\n C. right-sided pneumothorax.\n D. left-side pneumothorax.",
		options: {
			A: "left-sided hemothorax.",
			B: "severe pleural effusion.",
			C: "right-sided pneumothorax.",
			D: "left-side pneumothorax.",
		},
		answer: "C",
		answer_explanation:
			"right-sided pneumothorax.\n\nTracheal deviation to the left and the absence of vascular markings on the right are consistent with a right-sided pneumothorax.",
	},
	{
		question:
			"A patient is intubated with a 7.0-mm ET tube while receiving positive pressure ventilatory support. The respiratory therapist notices that air is escaping around the tube during the top of each mechanical inhalation. Cuff pressure is checked and found to be 31 mm Hg. Which of the following should the therapist consider?\n\n A. adding additional air to the ET tube cuff\n B. removing the ET tube and establishing a tracheostomy\n C. sealing the cuff with a minimum seal technique\n D. switching the ET tube to a larger size",
		options: {
			A: "adding additional air to the ET tube cuff",
			B: "removing the ET tube and establishing a tracheostomy",
			C: "sealing the cuff with a minimum seal technique",
			D: "switching the ET tube to a larger size",
		},
		answer: "D",
		answer_explanation:
			"switching the ET tube to a larger size\n\nThe key issue here is that the cuff pressure is excessively high while positive pressure air continues to escape around the cuff. These conditions suggest that the cuff, despite being full, is not quite reaching the limits of the trachea walls. In other words, the ET tube is likely too small.",
	},
	{
		question:
			"A 72-year-old male patient with COPD is being instructed on the use of Pulmicort by metered dose inhaler. During the instruction, the respiratory therapist notices that the patient has difficulty actuating the MDI in coordination with inhalation. The patient would most likely benefit from\n A. switching to a dry powder inhaler.\n B. a holding chamber.\n C. an aqueous bronchodilator solution.\n D. having a family member actuate the inhaler.",
		options: {
			A: "switching to a dry powder inhaler.",
			B: "a holding chamber.",
			C: "an aqueous bronchodilator solution.",
			D: "having a family member actuate the inhaler.",
		},
		answer: "B",
		answer_explanation:
			"a holding chamber.\n\nUse of a holding chamber, in conjunction with the MDI device, would help the patient by minimizing the need to coordinate actuation perfectly with inhalation",
	},
	{
		question:
			"A 32-year old patient has had kyphoscoliosis since childhood. Which of the following is most likely?\n\n A. increased total lung capacity\n B. reduced cardiac ejection fraction\n C. reduced SVC values\n D. FEV1 less than 80% of predicted",
		options: {
			A: "increased total lung capacity",
			B: "reduced cardiac ejection fraction",
			C: "reduced SVC values",
			D: "FEV1 less than 80% of predicted",
		},
		answer: "C",
		answer_explanation:
			"reduced SVC values\n\nKyphoscoliosis results in a restrictive pulmonary disorder, which would be manifested in reduced slow vital capacity (SVC).",
	},
	{
		question:
			"Which of the following are associated with lower risks for ventilator associated pneumonia (VAP)?\n\n1. proper oral care\n2. appropriate bed positioning\n3. periodic discontinuance of sedation\n4. continuous evacuation of secretions above the ET tube cuff\n\n A. 1, 2, 3 and 4\n B. 1 and 2 only\n C. 2 and 3 only\n D. 1 and 4 only",
		options: {
			A: "1, 2, 3 and 4",
			B: "1 and 2 only",
			C: "2 and 3 only",
			D: "1 and 4 only",
		},
		answer: "A",
		answer_explanation:
			"1, 2, 3 and 4\n\nAll listed items help prevent ventilator associated pneumonia (VAP).",
	},
	{
		question:
			"Which of the follow pressures is most helpful for determining lung compliance?\n A. plateau\n B. peak\n C. median\n D. mean",
		options: {A: "plateau", B: "peak", C: "median", D: "mean"},
		answer: "A",
		answer_explanation:
			"plateau\n\nPlateau pressure, when combined with delivered tidal volume, can be used to calculate static pulmonary compliance (general lung compliance).",
	},
	{
		question:
			"Which of the following airway clearance techniques should be used on a female patient who is 163 cm (5 ft 4 in) tall and weighs 105 kg (230 lbs) who as aspirated a large food particle and cannot breathe?\n\n A. chest thrusts\n B. huff coughing\n C. abdominal thrusts\n D. serial coughing",
		options: {
			A: "chest thrusts",
			B: "huff coughing",
			C: "abdominal thrusts",
			D: "serial coughing",
		},
		answer: "A",
		answer_explanation:
			"chest thrusts\n\nExplanation : The patient is obese. The healthcare practitioner helping to alleviate airway obstruction should employ chest thrusts rather than abdominal thrusts.",
	},
	{
		question:
			"A patient in the intensive care unit (ICU) has been experiencing a decrease in static pulmonary compliance over the last few days following the inhalation of some noxious cleaning chemicals. The patient is currently receiving VC mechanical ventilation on the following settings:\n\nFIO2 0.60 \nPEEP 12 cm H2O\nVT 450 mL\nf 18/min\nI:E 1:1.5\n\nOn these settings, the following laboratory data is available:\n\nABG pH 7.33\nPaCO2 47 torr\nPaO2 62 torr\nHCO3- 22 mEq/L\nBE -4 mEq/L \nOxygen index 32\nP/F ratio 185\n\n\n\nThe respiratory therapist should consider implementing (the)\n A. ARDSnet protocol.\n B. bronchoplasty.\n C. cardiac intra-aortic balloon pump assistance.\n D. ECMO.",
		options: {
			A: "ARDSnet protocol.",
			B: "bronchoplasty.",
			C: "cardiac intra-aortic balloon pump assistance.",
			D: "ECMO.",
		},
		answer: "A",
		answer_explanation:
			"ARDSnet protocol.\n\nAn oxygen index above 30 and a P/F ratio of less than 200 both indicate the presence of ARDS. The ARDSnet protocol should be employed.",
	},
	{
		question:
			"A patient with mucoviscidosis (CF) undergoes a bronchogram. A concentration of secretions is discovered in the left lower lobes. For proper chest physiotherapy, which of the following patient positions should be employed?\n\n A. semi-fowler's\n B. prone\n C. supine\n D. head-of-bed down",
		options: {
			A: "semi-fowler's",
			B: "prone",
			C: "supine",
			D: "head-of-bed down",
		},
		answer: "D",
		answer_explanation:
			"head-of-bed down\n\nTo drain the lowest lobes, the head-of-bed must be lowered below the feet.",
	},
	{
		question:
			"Parents of a newborn are concerned for their new baby. Their previous child was lost by Sudden Infant Death Syndrome (SIDS). What should the respiratory therapist recommend in preparation for patient discharge?\n\n A. nightly caffeine administration\n B. home apnea monitoring\n C. instruct the parents to sleep close to the baby\n D. keep the baby sleeping on his/her back",
		options: {
			A: "nightly caffeine administration",
			B: "home apnea monitoring",
			C: "instruct the parents to sleep close to the baby",
			D: "keep the baby sleeping on his/her back",
		},
		answer: "B",
		answer_explanation:
			"home apnea monitoring\n\nWhen the possibility of SIDS is present (usually determined by history), the infant should be monitored for apnea during the night and during sleeping hours. An apnea monitor can be set to alarm if the observed period of apnea is greater than 20 seconds.",
	},
	{
		question:
			"During a full cardiopulmonary arrest, a rapid response team is unable to establish IV access for the administration of epinephrine. The respiratory therapist should recommend\n\n A. switching to racemic epinephrine, deliver by aerosol.\n B. doubling the dose and instilling the medication down the ET tube.\n C. administering the medication by the intramuscular route.\n D. installing an arterial catheter, administer the medication by art line.",
		options: {
			A: "switching to racemic epinephrine, deliver by aerosol.",
			B: "doubling the dose and instilling the medication down the ET tube.",
			C: "administering the medication by the intramuscular route.",
			D: "installing an arterial catheter, administer the medication by art line.",
		},
		answer: "B",
		answer_explanation:
			"doubling the dose and instilling the medication down the ET tube.\n\nThe ET tube route may be used when IV access is not possible. To do so, dosages should be doubled and instilled, followed by installation of normal saline and provision of manual ventilation.",
	},
	{
		question:
			"Prior to performing pulmonary function testing on several patients, a respiratory therapist is performing quality control on the pneumotachometer. After injecting a 3.0 L syringe through the pneumotachometer, the therapist notes a measurement of 2.81 L. Based on this result the therapist should\n\n A. proceed with patient testing.\n B. avoid patient testing.\n C. replace the pneumotachometer.\n D. calibrate and the 3.0 L syringe and reevaluate.",
		options: {
			A: "proceed with patient testing.",
			B: "avoid patient testing.",
			C: "replace the pneumotachometer.",
			D: "calibrate and the 3.0 L syringe and reevaluate.",
		},
		answer: "B",
		answer_explanation:
			"avoid patient testing.\n\nThe results of 2.81 L is not within the acceptable range of 2.85 - 3.15, which is +/- 5% of 3.0 L. Thus, the PFT equipment must be deemed as inaccurate and not used for patient testing until the machine is repaired and/or calibrated. It is too drastic to change the pneumotachometer since the source of the problem is yet unknown. The 3.0 L syringe is not the source of the problem as this device is a highly calibrated and certified tool that should be used as a standard.",
	},
	{
		question:
			"The following data is available on a 58-year-old, 80-kg (175-lb) 168 cm (5 ft 6 in) male who is receiving PC, A/C ventilation.\n\nFIO2 0.55 \nPEEP 7 cm H2O\nRate 16/min\nPIP 32 cm H2O\n\nVT (delivered) 720 mL \nPressure (peak) 39 cm H2O\nPressure (plat) 22 cm H2O\nI:E ratio 1:2.3\n\nABG \npH 7.50\nPaCO2 29 torr\nPaO2 80 torr\nHCO3- 23 mEq/L\n\nWhich of the following changes would be most appropriate?\n A. increase PEEP\n B. increase I:E ratio\n C. decrease rate\n D. decrease PIP",
		options: {
			A: "increase PEEP",
			B: "increase I:E ratio",
			C: "decrease rate",
			D: "decrease PIP",
		},
		answer: "D",
		answer_explanation:
			"decrease PIP\n\nA delivered tidal volume of 720 mL is excessive and is likely causing the respiratory alkalosis. Based on the patient's height and weight, the appropriate tidal volume range is about 384 mL to 640 mL. To reduce delivered tidal volume, PIP should be decreased.",
	},
	{
		question:
			"A 24-year-old adult Caucasian male reports to the emergency department with suspected spontaneous pneumothorax of the right lung. The physician orders insertion of a chest tube for the extraction of excess air in the chest cavity and the reinflation of the lung tissues. Which chest tube placement would be most appropriate?\n\n A. 2nd interspace, mid-axillary line\n B. 2nd interspace, mid-clavicular line\n C. 4th interspace, mid-clavicular line\n D. 5th interspace, mid-axillary line",
		options: {
			A: "2nd interspace, mid-axillary line",
			B: "2nd interspace, mid-clavicular line",
			C: "4th interspace, mid-clavicular line",
			D: "5th interspace, mid-axillary line",
		},
		answer: "B",
		answer_explanation:
			"2nd interspace, mid-clavicular line\n\nPatients who experience a spontaneous pneumothorax typically have only air in the pleural spaces, unlike other forms of pneumothoracies that may involve serosanguinous fluids that require evacuation. If only air needs to be extracted, placement of a chest tube in 2nd interspace, mid clavicular line is most appropriate.",
	},
	{
		question:
			"Two days following open-heart surgery, a patient is unable to demonstrate an inspiratory capacity greater than 1.0 L by incentive spirometry. Rhonchi is audible with each breath. Despite coaching, the patient is unable to expectorate secretions from the upper airway. Which of the following should be done?\n\n A. oropharyngeal suctioning\n B. NT suctioning\n C. tracheal suctioning by bronchoscopy\n D. placement of an oropharyngeal airway (OPA)",
		options: {
			A: "oropharyngeal suctioning",
			B: "NT suctioning",
			C: "tracheal suctioning by bronchoscopy",
			D: "placement of an oropharyngeal airway (OPA)",
		},
		answer: "B",
		answer_explanation:
			"NT suctioning\n\nNasal-tracheal suctioning is appropriate on a non-intubated patient who is unable to produce a forceful cough and alleviate secretions from the upper airways.",
	},
	{
		question:
			"A patient in the emergency department (ED) is breathing spontaneously after a near drowning accident. The following laboratory and clinical data is available:\n\nABG pH 7.24\nPaCO2 54 torr\nPaO2 72 torr\nHCO3- 25 mEq/L \nHR 118/min\nSpO2 92%\n\n\nThe patient responds lethargically to commands. The patient\n A. has a significant pulmonary shunt.\n B. is in ventilatory failure.\n C. is likely hypothermic.\n D. has metabolic ketoacidosis.",
		options: {
			A: "has a significant pulmonary shunt.",
			B: "is in ventilatory failure.",
			C: "is likely hypothermic.",
			D: "has metabolic ketoacidosis.",
		},
		answer: "B",
		answer_explanation:
			"is in ventilatory failure.\n\nBlood gases reveal respiratory acidosis and ventilatory failure. Because pH is less than 7.25, ventilatory failure is present.",
	},
	{
		question:
			"A patient who is intubated with a 7.5-mm ET tube is receiving VC A/C ventilation with a mandatory rate of 16/min. The high-pressure alarm alerts the respiratory therapist. Starting an assessment at the patient, the respiratory therapist becomes concerned about airway patency. Which should be done to help further evaluate for this concern?\n\n A. Instill NS down the ET tube.\n B. Insert a suction catheter down the ET tube.\n C. Auscultate breath sounds bilaterally.\n D. Check the cuff pressure.",
		options: {
			A: "Instill NS down the ET tube.",
			B: "Insert a suction catheter down the ET tube.",
			C: "Auscultate breath sounds bilaterally.",
			D: "Check the cuff pressure.",
		},
		answer: "B",
		answer_explanation:
			"Insert a suction catheter down the ET tube.\n\nRegarding airway patency, the practitioner should assess airway patency by firsts attempting to pass a suction catheter through the tube. Auscultation of BS does not assess the source of the problem.",
	},
	{
		question:
			"A respiratory therapist is utilizing a point-of-care blood gas analyzer on a critically ill patient in the cardiac intensive care unit (CICU). Which of the following is the most important consideration prior to use of the analyzer?\n\n A. Calibration should be done on the analyzer.\n B. The blood sample must be agitated for 2 minutes prior to analysis.\n C. Results are not as accurate as a desktop blood gas analyzer.\n D. The results should only be used for screening purposes.",
		options: {
			A: "Calibration should be done on the analyzer.",
			B: "The blood sample must be agitated for 2 minutes prior to analysis.",
			C: "Results are not as accurate as a desktop blood gas analyzer.",
			D: "The results should only be used for screening purposes.",
		},
		answer: "A",
		answer_explanation:
			"Calibration should be done on the analyzer.\n\nPoint-of-care devices require frequent calibration and should always be calibrated prior to patient use.",
	},
	{
		question:
			"A patient is receiving mechanical ventilatory support with volume-controlled ventilation in the A/C mode. Over the last several days plateau pressures have been increasing and are currently hovering around 30 cm H2O with peak pressures reaching 51 cm H2O. A P/F ratio is determined to be 280. Which of the following should be anticipated by the respiratory therapist?\n\n A. a changed to pressure-controlled ventilation\n B. eventual use of high-frequency jet ventilation.\n C. a switch to APRV mode\n D. a ventilation/perfusion study",
		options: {
			A: "a changed to pressure-controlled ventilation",
			B: "eventual use of high-frequency jet ventilation.",
			C: "a switch to APRV mode",
			D: "a ventilation/perfusion study",
		},
		answer: "A",
		answer_explanation:
			"a changed to pressure-controlled ventilation\n\nA plateau pressure of 30 cm H2O is excessive and indicates significant decrease in pulmonary compliance. A PF ratio less than 300 suggests acute lung injury. This could easily advance to a state consistent with ARDS. Use of pressure-controlled ventilation is indicated.",
	},
	{
		question:
			"An arterial blood gas is drawn during full cardiopulmonary resuscitation of an adult male patient who was found down with asystole. The pH of the blood gas is 7.61. Which of the following recommendation should the respiratory therapist make?\n\n A. Obtain a confirming blood gas sample.\n B. Administer a bolus sodium bicarbonate, IV.\n C. Start an IV epinephrine drip.\n D. Slow the rate of manual resuscitation.",
		options: {
			A: "Obtain a confirming blood gas sample.",
			B: "Administer a bolus sodium bicarbonate, IV.",
			C: "Start an IV epinephrine drip.",
			D: "Slow the rate of manual resuscitation.",
		},
		answer: "A",
		answer_explanation:
			"Obtain a confirming blood gas sample.\n\nA pH of 7.61 is associated with extreme alkalosis, most likely caused by overventilation. This can be very dangerous for the patient as a pH above 7.50 can promote reduce oxygen delivery to the cardiac tissues, which can undermine the goal of promoting independent cardiac contractions.",
	},
	{
		question:
			"A patient is receiving VC A/C ventilation at a rate of 18/min, VT 600 mL, FIO2 0.6, PEEP 5 cm H2O, I:E ratio of 1:1.8. A flow-time ventilator graphic shows the exhalation phase fails to return to baseline prior to the initiation of the inspiratory phase, possibly promoting air-trapping. What additional data would be helpful in further assessing this problem?\n\n A. P/F ratio\n B. mPAP and CO comparison\n C. OI (oxygen index)\n D. AutoPEEP determination",
		options: {
			A: "P/F ratio",
			B: "mPAP and CO comparison",
			C: "OI (oxygen index)",
			D: "AutoPEEP determination",
		},
		answer: "D",
		answer_explanation:
			"AutoPEEP determination\n\nWhen air-trapping is suspected, AutoPEEP may develop. Therefore, AutoPEEP determination is helpful. The procedure involves utilizing the ventilator's computer to determine the amount of 'PEEP' above the set PEEP level to which the patient is exposed.",
	},
	{
		question:
			"A trauma patient in the emergency department (ED) is experiencing a moderate level of ventilatory distress. A physical examination reveals paradoxical chest movement on the right and a tracheal shift to the left. Which of the following is an appropriate next step?\n\n A. ordering a chest radiograph and preparing for chest tube insertion\n B. implementing non-invasive ventilation of IPAP 15 cm H2O, EPAP 5 cm H2O\n C. beginning hyperinflation therapy to resolve atelectasis\n D. applying oxygen by face mask at FIO2 0.50",
		options: {
			A: "ordering a chest radiograph and preparing for chest tube insertion",
			B: "implementing non-invasive ventilation of IPAP 15 cm H2O, EPAP 5 cm H2O",
			C: "beginning hyperinflation therapy to resolve atelectasis",
			D: "applying oxygen by face mask at FIO2 0.50",
		},
		answer: "A",
		answer_explanation:
			"ordering a chest radiograph and preparing for chest tube insertion\n\nParadoxical chest movement, in conjunction with tracheal displacement to the left and the presence of ventilatory distress, is evidence of a potential pneumothorax. A chest radiograph should be ordered to confirm the position. Chest tube placement should be anticipated.",
	},
	{
		question:
			"Which of the following represents the dominant value that is most influential on PAO2 value?\n\n A. FIO2\n B. barometric pressure\n C. respiratory quotient\n D. water vapor pressure",
		options: {
			A: "FIO2",
			B: "barometric pressure",
			C: "respiratory quotient",
			D: "water vapor pressure",
		},
		answer: "B",
		answer_explanation:
			"barometric pressure\n\nPAO2 is mostly driven by the barometric pressure (PB).",
	},
	{
		question:
			"A patient with a chest tube drainage system in place is receiving mechanical ventilation in the A/C mode. The respiratory therapist notices excessive bubbling in the water-seal chamber. This is most likely due to (a)\n\n A. insufficient water in the chamber.\n B. normally functioning drainage system.\n C. full collection chamber.\n D. leak in the system.",
		options: {
			A: "insufficient water in the chamber.",
			B: "normally functioning drainage system.",
			C: "full collection chamber.",
			D: "leak in the system.",
		},
		answer: "D",
		answer_explanation:
			"leak in the system.\n\nExcessive bubbling in the water-seal chamber is most likely related to a leak in the system. The leak could be in the tubing or occurring inside the patient.",
	},
	{
		question:
			"Three hours after the replacement of a tracheostomy tube, a patient receiving mechanical ventilation is experiencing respiratory distress. The respiratory therapist palpates pockets of air around the neck and over the upper region of the left breast tissue. The therapist should immediately\n\n A. obtain a lateral neck radiograph.\n B. obtain an arterial blood gas.\n C. extubate the patient.\n D. add air to the airway cuff.",
		options: {
			A: "obtain a lateral neck radiograph.",
			B: "obtain an arterial blood gas.",
			C: "extubate the patient.",
			D: "add air to the airway cuff.",
		},
		answer: "C",
		answer_explanation:
			"extubate the patient.\n\nPockets of air surrounding the neck area are most likely related to subcutaneous emphysema caused by a mal positioned tracheostomy tube. The first action should be to immediately remove the tube. Immediate replacement will also be necessary.",
	},
	{
		question:
			"A 24-year-old male is brought to the emergency department (ED) as a victim of a stabbing from a gang confrontation. As the patient arrives in the ED, the first responders report that the patient has had a sudden onset of tachypnea. The respiratory therapist notices absent breath sounds on the left side. What additional evaluation should the therapist immediately perform?\n\n A. transillumination\n B. tracheal palpation\n C. chest X-ray\n D. diagnostic chest percussion",
		options: {
			A: "transillumination",
			B: "tracheal palpation",
			C: "chest X-ray",
			D: "diagnostic chest percussion",
		},
		answer: "B",
		answer_explanation:
			'tracheal palpation\n\nThe patient has signs of a pneumothorax. Tracheal palpation will help to assess for that possibility and can be done quickly. Although a chest x-ray would provide confirming evidence, it is not considered a quick assessment and therefore is not a good "immediate evaluation".',
	},
	{
		question:
			"A patient who is post-surgical for an appendectomy has orders for ambulation and incentive spirometry. Prior to surgery, the patient achieved an inspiratory capacity of 1400 mL. The therapist should set the patient's initial post-surgical goal to\n A. 700 mL\n B. 2000 mL\n C. 1000 mL\n D. 1400 mL",
		options: {A: "700 mL", B: "2000 mL", C: "1000 mL", D: "1400 mL"},
		answer: "A",
		answer_explanation:
			"700 mL\n\nA good initial post-surgical goal would be 1/2 of the pre-operative volume. Thus, 700 mL is an appropriate starting goal.",
	},
	{
		question:
			"A 2-year-old female is brought to the emergency room (ER) with a fever and significant respiratory distress. A softened stridor can be heard with each breath and the patient is drooling. After a protective airway is placed, what additional information should be gathered to further assess the underlying problem?\n\n A. ABG\n B. sweat chloride test\n C. eosinophil count\n D. CBC",
		options: {
			A: "ABG",
			B: "sweat chloride test",
			C: "eosinophil count",
			D: "CBC",
		},
		answer: "D",
		answer_explanation:
			"CBC\n\nThe patient has signs of acute epiglottitis. After stabilizing the patient's condition (especially the airway), further information should be gathered to confirm the problem. A lateral neck X-ray will show sub-glottic swelling and a CBC will show an elevated white blood cell count, which will confirm a bacterial infection.",
	},
	{
		question:
			"Immediately following the administration of Anectine (succinylcholine chloride) to facilitate a safe oral intubation, the respiratory therapist should monitor the patient for which of the following before ET tube insertion by the direct laryngoscopy method?\n\n A. pupillary dilation\n B. facial muscle relaxation\n C. complete cessation of ventilation\n D. muscle twitching about the face and neck",
		options: {
			A: "pupillary dilation",
			B: "facial muscle relaxation",
			C: "complete cessation of ventilation",
			D: "muscle twitching about the face and neck",
		},
		answer: "D",
		answer_explanation:
			"muscle twitching about the face and neck\n\nThe cardinal sign that Anectine has taken effect is micro muscle twitching that can be visually observed on the face and more especially the upper neck region.",
	},
	{
		question:
			"A patient has the following data while receiving supplemental oxygen. PAO2 is 380 mm Hg. ABGs show:\n\npH 7.38 \nPaCO2 42 mm Hg\nPaO2 67 mm Hg\nHCO3- 24 mEq/L\nBE 0 mEq/L\n\nThe patient has (a)\n A. pulmonary embolus\n B. venous admixture\n C. V/Q mismatch\n D. refractory hypoxemia",
		options: {
			A: "pulmonary embolus",
			B: "venous admixture",
			C: "V/Q mismatch",
			D: "refractory hypoxemia",
		},
		answer: "B",
		answer_explanation:
			"venous admixture\n\nAn A-aDO2 greater than 300 mm Hg is indicative of significant pulmonary shunting (greater than 20%). This is also referred to as venous admixture.",
	},
	{
		question:
			"Hemodynamic data suggest the presence of left-heart failure. The physician desires additional information to help assess left cardiac function, including ejection fraction and stroke volume. Which of the following evaluation techniques will most likely be employed?\n\n A. echocardiography\n B. thermal dilution studies\n C. cardiac enzyme analysis\n D. 12-lead ECG",
		options: {
			A: "echocardiography",
			B: "thermal dilution studies",
			C: "cardiac enzyme analysis",
			D: "12-lead ECG",
		},
		answer: "A",
		answer_explanation:
			"echocardiography\n\nEchocardiography is a type of ultrasound tool that can accurately assess and quantify stroke volume and ejection fraction of the left heart.",
	},
	{
		question:
			"While transporting an orally intubated, mechanically ventilated patient to the cardiac catheterization lab, the respiratory therapist notices the security device on the ET tube has become disconnected. To quickly evaluate for proper positioning of the ET tube, the therapist should\n\n A. auscultate breath sounds.\n B. request a bedside ultrasound.\n C. order a chest radiograph.\n D. measure the thyromental distance.",
		options: {
			A: "auscultate breath sounds.",
			B: "request a bedside ultrasound.",
			C: "order a chest radiograph.",
			D: "measure the thyromental distance.",
		},
		answer: "A",
		answer_explanation:
			"auscultate breath sounds.\n\nAlthough a chest radiograph will show ET tube location definitively, the question is asking for a 'quick' method of assessment. In this case, auscultating breath sounds is most appropriate.",
	},
	{
		question:
			"A respiratory therapist is reviewing the digital data record of a home CPAP from the data card housed inside the CPAP unit. The therapist notices that the pressure graphs show that the CPAP machine failed to maintain pressure for long periods (in excess of 30 minutes each) during the night. The patient's morning log indicates that he did not remove the full-face mask during the night. What is the most likely problem?\n\n A. excessive leaking through the CO2 exhaust port.\n B. the patient slept with an open mouth.\n C. inadequate seal between the mask and patient's face.\n D. the digital data card is faulty.",
		options: {
			A: "excessive leaking through the CO2 exhaust port.",
			B: "the patient slept with an open mouth.",
			C: "inadequate seal between the mask and patient's face.",
			D: "the digital data card is faulty.",
		},
		answer: "C",
		answer_explanation:
			"inadequate seal between the mask and patient's face.\n\nThe most common reason for lack of pressure during the night is an inadequate patient-mask interface (a poor seal). Because the patient is using a full-face mask, sleeping with an open mouth would not have a negative outcome on pressure.",
	},
	{
		question:
			"The use of inhaled nitric oxide is primarily intended to treat (a)\n\n A. acute respiratory distress syndrome.\n B. transposition of the great vessels.\n C. severe pulmonary hypertension.\n D. prominent pulmonary embolism.",
		options: {
			A: "acute respiratory distress syndrome.",
			B: "transposition of the great vessels.",
			C: "severe pulmonary hypertension.",
			D: "prominent pulmonary embolism.",
		},
		answer: "C",
		answer_explanation:
			"severe pulmonary hypertension.\n\nInhaled nitric oxide (iNO) is used to directly lower pulmonary hypertension.",
	},
	{
		question:
			"A patient indicates he has been smoking an average of 1.5 packs per day for 30 years. Which of the following accurately summarizes the patient's history of smoking?\n\n A. 45 pack-years\n B. 60 pack-years\n C. 30 pack-years\n D. 10 pack-years",
		options: {
			A: "45 pack-years",
			B: "60 pack-years",
			C: "30 pack-years",
			D: "10 pack-years",
		},
		answer: "A",
		answer_explanation:
			"45 pack-years\n\nPack-years are calculated by: Average packs per day X number of years.",
	},
	{
		question:
			"A patient is undergoing a cardiac workup and tolerance assessment while riding a stationary bicycle. After a few minutes of observing the patient, the respiratory therapist increases the tension to the cycle and observes the following change in blood pressure, SpO2, and heart rate:\n\nBefore\nHR: 98\nBP: 122/85\nSpO2: .97\n\nAfter\nHR: 119\nBP: 149/98\nSpO2: .95\n\n\nBased on this information, the therapist should\n A. reduce the cycle tension to the previous level.\n B. administer Dobutrex (dobutamine).\n C. continue the evaluation.\n D. discontinue the assessment and document.",
		options: {
			A: "reduce the cycle tension to the previous level.",
			B: "administer Dobutrex (dobutamine).",
			C: "continue the evaluation.",
			D: "discontinue the assessment and document.",
		},
		answer: "C",
		answer_explanation:
			"continue the evaluation.\n\nWhen tension is increased (an increase in workload is imposed on the patient), HR and BP should rise. If both rise because of increased workload, then the response is considered normal. The purpose of the evaluation is to determine the patient's maximum exercise ability. Thus, the evaluation should continue until there is no observable cardiac or BP response or until there is a negative response in either of these two parameters.",
	},
	{
		question:
			"While auscultating the chest of a 2-year-old, the respiratory therapist auscultates a monophonic wheeze on the right and normal sounds on the left. SpO2 is 98% and the patient demonstrates only mild respiratory distress. The therapist should suspect\n\n A. focal bronchoconstriction.\n B. asthma.\n C. bronchiectasis.\n D. foreign body aspiration.",
		options: {
			A: "focal bronchoconstriction.",
			B: "asthma.",
			C: "bronchiectasis.",
			D: "foreign body aspiration.",
		},
		answer: "D",
		answer_explanation:
			"foreign body aspiration.\n\nWhen wheezing occurs over only one area or only over one lung, bronchoconstriction is not likely. More likely, the child has aspirated a small toy or object.",
	},
	{
		question:
			"In which of the following conditions should the respiratory therapist avoid the use of vibratory PEP for the purpose of bronchial hygiene?\n\n A. patient with recent dental implants\n B. cystic fibrosis patient\n C. patient with a fractured ear drum\n D. patient with a history of gastric reflux",
		options: {
			A: "patient with recent dental implants",
			B: "cystic fibrosis patient",
			C: "patient with a fractured ear drum",
			D: "patient with a history of gastric reflux",
		},
		answer: "C",
		answer_explanation:
			"patient with a fractured ear drum\n\nA broken or fractured ear drum is a contraindication for vibratory PEP therapy.",
	},
	{
		question:
			"Which of the following is most likely true for a patient whose hemodynamic values (mPAP, CVP, PCWP, and C.O.) are all low?\n\n A. The patient is in need of diuresis.\n B. The patient is in need of fluids.\n C. Pulmonary hypertension is present.\n D. Congestive heart failure is present.",
		options: {
			A: "O.) are all low?",
			B: "The patient is in need of diuresis.",
			C: "The patient is in need of fluids.",
			D: "Pulmonary hypertension is prese",
			F: "The patient is in need of fluids.",
		},
		answer: "B",
		answer_explanation: "The patient is in need of fluids.",
	},
	{
		question:
			"A respiratory therapist is preparing for the day's patients who are scheduled for pulmonary function testing. Prior to using the pulmonary function testing equipment, the therapist should\n\n A. warm up the PFT equipment for at least one hour.\n B. calibrate the PFT pneumotachometer.\n C. wipe down the PFT equipment with isopropyl alcohol.\n D. perform quality assurance on the PFT equipment.",
		options: {
			A: "warm up the PFT equipment for at least one hour.",
			B: "calibrate the PFT pneumotachometer.",
			C: "wipe down the PFT equipment with isopropyl alcohol.",
			D: "perform quality assurance on the PFT equipment.",
		},
		answer: "D",
		answer_explanation:
			"perform quality assurance on the PFT equipment.\n\nQuality assurance should be done on pulmonary function equipment at least daily, prior to patient testing to ensure the equipment is functioning properly and within accuracy standards. Although calibration may be required in some cases, PFT equipment does not always require calibration. This is the purpose of quality assurance maneuvers prior to patient testing.",
	},
	{
		question:
			"A patient with COPD is being instructed on the use of a metered dose inhaler (MDI). During instruction, the respiratory therapist notes that the patient is unable to coordinate the actuation of the inhaler with inhalation, despite repeated attempts at instruction. The therapist should recommend\n\n A. switching to a dry powder inhaler.\n B. switching to IPPB.\n C. instruction to the family member on proper administration\n D. use of a chamber.",
		options: {
			A: "switching to a dry powder inhaler.",
			B: "switching to IPP",
			C: "",
			D: "instruction to the family member on proper administrat",
		},
		answer: "D",
		answer_explanation:
			"use of a chamber.\n\nUse of a holding chamber will accommodate poor coordination by the patient when actuating the inhaler. It works by holding the medication in suspension inside the chamber while the patient can take an inhalation moments later. Additionally, the patient may inhale several times from the chamber to maximize medication particle delivery.",
	},
	{
		question:
			"When performing a 12-lead ECG on a patient with suspected cardia arrhythmias, what location on the chest should the respiratory therapist place chest leads V4, V5, and V6?\n\n A. 5th interspace\n B. 8th interspace\n C. 4th interspace\n D. 2nd interspace",
		options: {
			A: "5th interspace",
			B: "8th interspace",
			C: "4th interspace",
			D: "2nd interspace",
		},
		answer: "A",
		answer_explanation:
			"5th interspace\n\nChest leads V1 and V2 are placed on the 4th interspace while chest leads V4, V5, and V6 are placed along the 5th interspace. V3 is simply placed between the 4th and 5th interspaces.",
	},
	{
		question:
			"The following data is observed on a patient being mechanically ventilated by volume-control.\n\nPECO2 30 cm \nH2O RR 16/min\nSpO2 98% \n\nABG \npH 7.30\nPaCO2 50 mm Hg\nPaO2 82 mm Hg\n\n\nWhat is the estimated Vd/VT ratio?\n A. 0.60\n B. 0.40\n C. 0.25\n D. 0.15",
		options: {A: "0.60", B: "0.40", C: "0.25", D: "0.15"},
		answer: "B",
		answer_explanation:
			"0.40\n\nVd/VT = (PaCO2 - PECO2) / PaCO2 Vd/VT = (50 - 30) / 50 Vd/VT = 20/50 or 0.40 (also 40%)",
	},
	{
		question:
			"A patient with a pulmonary artery catheter in place is being continuously monitored for excessive pulmonary artery pressure. The patient requires transfer to the cardiac catheterization lab for a procedure. Which of the following should be monitored in route to ensure the pulmonary artery catheter remains in proper position?\n\n A. central venous pressure (CVP)\n B. SpO2\n C. PA waveform\n D. PetCO2",
		options: {
			A: "central venous pressure (CVP)",
			B: "SpO2",
			C: "PA waveform",
			D: "PetCO2",
		},
		answer: "C",
		answer_explanation:
			"PA waveform\n\nThe most effective way to monitor the position of a pulmonary artery catheter is to observe the PA waveform during the transport. Normal PA pressures rise and fall from about 25 mm Hg to 8 mm Hg. If the catheter were to be inadvertently moved (withdrawn accidentally), the waveform would show pressures of around 25/2 mm Hg. Or, if withdrawn further, pressures of approximately 7/0 mm Hg may be observed.",
	},
	{
		question:
			"An adult patient with pneumonia is receiving oxygen by 5 L/min nasal cannula for the treatment of hypoxemia and cyanosis. RR is 20/min. ABGs reveal the following:\n\npH 7.36 \nPaCO2 42 torr\nPaO2 70 torr\nHCO3- 24 mEq/L\nBE -1 mEq/L\n\n\nWhich of the following is appropriate?\n A. increase flow to 7 L/min\n B. switch to a high-flow, air-entrainment device at 50%\n C. decrease flow to 2 L/min\n D. begin non-invasive ventilation",
		options: {
			A: "increase flow to 7 L/min",
			B: "switch to a high-flow, air-entrainment device at 50%",
			C: "decrease flow to 2 L/min",
			D: "begin non-invasive ventilation",
		},
		answer: "B",
		answer_explanation:
			"switch to a high-flow, air-entrainment device at 50%\n\nThe patient is hypoxic. An increase in supplemental oxygen is appropriate. Increasing flow to 7 L/min exceeds the manufacturers flow recommendations for that device. Non-invasive ventilation is not indicated because the patient's ventilation status is acceptable.",
	},
	{
		question:
			"A lateral decubitus chest radiograph reveals a concave superior interface. This should be interpreted as\n\n A. interstitial emphysema.\n B. pneumothorax.\n C. pleural effusion.\n D. hemothorax.",
		options: {
			A: "interstitial emphysema.",
			B: "pneumothorax.",
			C: "pleural effusion.",
			D: "hemothorax.",
		},
		answer: "C",
		answer_explanation:
			"pleural effusion.\n\nA concave superior interface or border observed in a lateral decubitus chest radiograph is consistent with a pleural effusion.",
	},
	{
		question:
			"A patient has had 12-lead ECG testing once per week for three weeks. The last ECG shows the following tracing. What can be identified in this tracing?\n\nA. bradycardia\n B. cardiac ischemia\n C. bi-Gemini\n D. premature ventricular contraction (PVC)",
		options: {
			A: "bradycardia",
			B: "cardiac ischemia",
			C: "bi-Gemini",
			D: "premature ventricular contraction (PVC)",
		},
		answer: "D",
		answer_explanation:
			"premature ventricular contraction (PVC)\n\nhe ECG demonstrates a PVC.",
	},
	{
		question:
			"A patient admitted with confirmed myasthenia gravis has a spontaneous VT of 350 mL and a VC of 1.9 L. Which of the following should be recommended?\n\n A. administration of neostigmine\n B. continued monitoring of VC, VT, and MIP\n C. non-invasive ventilation by mask\n D. intubation and mechanical ventilation",
		options: {
			A: "administration of neostigmine",
			B: "continued monitoring of VC, VT, and MIP",
			C: "non-invasive ventilation by mask",
			D: "intubation and mechanical ventilation",
		},
		answer: "B",
		answer_explanation:
			"continued monitoring of VC, VT, and MIP\n\nWhile the VC, VT and MIP of a patient with myasthenia gravis may gradually deteriorate, ventilatory support (invasive or otherwise) is not indicated until VC falls below 1.0 L.",
	},
	{
		question:
			"A newborn, delivered 24 hours prior, is observed for periods of apnea. I the last 24 hours, 3 episodes of breathing cessation have been observed as follows:\n\nTime - Duration\n6:18am - 9 sec\n10:45 - 11 sec\n15:28 - 8 sec\n\n\nThe respiratory therapist should interpret these results as:\n A. moderate apnea\n B. mild apnea\n C. marked apnea\n D. no true apnea present",
		options: {
			A: "moderate apnea",
			B: "mild apnea",
			C: "marked apnea",
			D: "no true apnea present",
		},
		answer: "D",
		answer_explanation:
			"no true apnea present\n\nCessation of breathing in a newborn is somewhat normal in the first few days of life. This is because of the normal lack of neurological development at this stage of life. Consequently, periods less than 20 seconds are not considered true apnea. In this case, true apnea is not present.",
	},
	{
		question: "After how many minutes can an ARDS patient by extubated?",
		options: {},
		answer: "[][][]",
		answer_explanation: "[][][]",
	},
	{
		question:
			"Which of the following analyzers have a fuel cell that must be replaced when depleted?\n\n A. point-of-care ABG analyzer\n B. galvanic oxygen analyzer\n C. capnometer\n D. hemoximeter",
		options: {
			A: "point-of-care ABG analyzer",
			B: "galvanic oxygen analyzer",
			C: "capnometer",
			D: "hemoximeter",
		},
		answer: "B",
		answer_explanation:
			"galvanic oxygen analyzer\n\nA galvanic-type oxygen analyzer has a probe that is constructed like a battery. Once one or both of the chemicals contained in the analyzer is depleted, the entire fuel cell must be replaced.",
	},
	{
		question:
			"A patient with COPD is placed on mechanical ventilatory support after being intubated orally. Proceedings from the multi-disciplinary care council identifies elevated risk for ventilatory associated pneumonia. Which of the following would help to minimize this risk?\n\n A. changing the ventilator circuit every 14 days\n B. replacing the ET tube every 7 days\n C. keeping the patient adequately sedated\n D. use of a subglottic suction device",
		options: {
			A: "changing the ventilator circuit every 14 days",
			B: "replacing the ET tube every 7 days",
			C: "keeping the patient adequately sedated",
			D: "use of a subglottic suction device",
		},
		answer: "D",
		answer_explanation:
			"use of a subglottic suction device\n\nOf the options listed, the most effective method for minimizing the risk for ventilator-associated pneumonia (VAP) is the use of a subglottic suction device. Often referred to as a 'Hi Lo\", the device provides very low-pressure suction to the area just above the ET tube cuff. Keeping this area evacuated of non-sterile secretions is helpful as it decreases the chance for bacteria to seep beyond the cuff and enter the bronchial tree",
	},
	{
		question:
			"Which of the following patients would benefit most by inspiratory muscle training (IMT)?\n\n A. ARDS\n B. Quadriplegia\n C. extrinsic asthma\n D. COPD",
		options: {A: "ARDS", B: "Quadriplegia", C: "extrinsic asthma", D: "COPD"},
		answer: "D",
		answer_explanation:
			"COPD\n\nIMT is most helpful for COPD patients. By increasing respiratory strength and coordination, COPD patients may achieve ventilation with less oxygen consumption.",
	},
	{
		question:
			"If barometric pressure decreased suddenly, what affect could this have on a patient?\n\n A. SVR would decrease\n B. CaO2 would increase\n C. P/F ratio would increase\n D. PAO2 would decease",
		options: {
			A: "SVR would decrease",
			B: "CaO2 would increase",
			C: "P/F ratio would increase",
			D: "PAO2 would decease",
		},
		answer: "D",
		answer_explanation:
			"PAO2 would decease\n\nA reduction in barometric pressure would result in a decrease in alveolar oxygen tension (PAO2). PAO2 is predominately a function of barometric pressure and FIO2. A decrease in either would promote a decrease in PAO2.",
	},
	{
		question:
			"Which of the following laboratory values would help to determine the presence of a blood-borne infection?\n\n A. leukocyte count\n B. eosinophil count\n C. red-blood cell count\n D. MetHb level",
		options: {
			A: "leukocyte count",
			B: "eosinophil count",
			C: "red-blood cell count",
			D: "MetHb level",
		},
		answer: "A",
		answer_explanation:
			"leukocyte count\n\nA leukocyte count, also called a white blood cell count (WBC), is definitive for the presence of an infection.",
	},
	{
		question:
			"The following data is observed on a patient receiving PC ventilation:\n\nVT(return) 450 mL \nPx (peak) 35 cm H2O\nPx (plat) 17 cm H2O\nPEEP 5 cm H2O\n\n\nWhat is the calculated dynamic compliance?\n A. 24 mL/cm H2O\n B. 30 mL/cm H2O\n C. 13 mL/cm H2O\n D. 15 mL/cm H2O",
		options: {
			A: "24 mL/cm H2O",
			B: "30 mL/cm H2O",
			C: "13 mL/cm H2O",
			D: "15 mL/cm H2O",
		},
		answer: "D",
		answer_explanation:
			"15 mL/cm H2O\n\nDynamic compliance = VT / (Peak px - PEEP) Dynamic compliance = 450 / 30 Dynamic compliance = 15 mL/cm H2O",
	},
	{
		question:
			"A patient in the intensive care unit is receiving mechanical ventilatory support and has a pulmonary artery catheter in place for the monitoring of significant hypertension in the pulmonary artery. The following data is available:\n\nCVP 10 mm Hg \nmPAP 21 mm Hg\nPCWP 9 mm Hg\nC.O. 7 L/min\n\n\nThe patient is not responding to IV medications. Which of the following medications could best help the patient?\n\n A. Fentanyl\n B. Sidenafil citrate\n C. Ketamine\n D. inhaled NO",
		options: {
			A: "Fentanyl",
			B: "Sidenafil citrate",
			C: "Ketamine",
			D: "inhaled NO",
		},
		answer: "D",
		answer_explanation:
			"inhaled NO\n\nInhaled nitric oxide can help to alleviate pulmonary artery hypertension and is often used when all other traditional medications are found to be ineffective.",
	},
	{
		question:
			"Although a patient has been receiving sufficient nicotine replacement therapy by dermal patch as a part of smoking cession program, the patient continues smoking at a consistent level. Which of the following should be addressed?\n\n A. neurological dopamine levels\n B. physiological needs\n C. blood nicotine level\n D. psychological aspect of the addition",
		options: {
			A: "neurological dopamine levels",
			B: "physiological needs",
			C: "blood nicotine level",
			D: "psychological aspect of the addition",
		},
		answer: "D",
		answer_explanation:
			"psychological aspect of the addition\n\nThe nicotine replacement approach is a method that addresses the physiological need (the body's chemical addiction). Most likely, the patient continues the behavior due to a psychological addiction. This should always be addressed in conjunction with the physiological aspect of the addiction.",
	},
	{
		question:
			"A patient receiving VC A/C ventilation has an autoPEEP measurement of 12 cm H2O:\n\nFIO2 0.50 \nMandatory rate 18/min\nVT 600 mL\nPEEP 5 cm H2O\nI:E 1:1.7\n\nWhich of the following is most likely insufficient (too low)?\n A. peak flow rate\n B. PEEP\n C. inspiratory time\n D. mandatory rate",
		options: {
			A: "peak flow rate",
			B: "PEEP",
			C: "inspiratory time",
			D: "mandatory rate",
		},
		answer: "A",
		answer_explanation:
			"peak flow rate\n\nThe development of autoPEEP is due to insufficient expiratory time. In this case, peak flow rate is likely insufficient, causing a increased inspiratory time and insufficient expiratory time.",
	},
	{
		question:
			"A respiratory therapist is recommending the use of Vancomycin for the treatment of a blood-borne infection. The physician, however, feels penicillin would be most appropriate. Which of the following data could be used to corroborate the use of penicillin rather than vancomycin?\n\n A. white blood cell count\n B. blood cultures\n C. sputum gram stain\n D. theophylline level",
		options: {
			A: "white blood cell count",
			B: "blood cultures",
			C: "sputum gram stain",
			D: "theophylline level",
		},
		answer: "B",
		answer_explanation:
			"blood cultures\n\nThe blood should be cultured which will reveal whether the organism is gram-negative or gram-positive. If gram positive, a penicillin class antibiotic should be used, while a gram-negative organism would require a vancomycin-type antimicrobial.",
	},
	{
		question:
			"Which of the following is the most appropriate delivery modality for a patient receiving 80%/20% helium-oxygen gas mixture?\n\n A. partial rebreather mask\n B. high-flow, high-humidity nasal cannula\n C. non-rebreather mask\n D. high-flow air-entrainment mask",
		options: {
			A: "partial rebreather mask",
			B: "high-flow, high-humidity nasal cannula",
			C: "non-rebreather mask",
			D: "high-flow air-entrainment mask",
		},
		answer: "C",
		answer_explanation:
			"non-rebreather mask\n\nBecause the Helium-oxygen is already mixed, a non-rebreather should be used for delivery to avoid air-entrainment as much as possible.",
	},
	{
		question:
			"A patient is brought to the emergency room (ER) after being found unconscious in a closed garage with a car running. A note was found at the scene. Currently the patient is receiving oxygen by non-rebreather mask. An ABG shows a PaO2 of 180 mm Hg. The respiratory therapist should recommend\n A. CO-Oximetry.\n B. hyperbaric therapy.\n C. switching to a high-flow oxygen mask FIO2 0.50.\n D. psychological counseling.",
		options: {
			A: "CO-Oximetry.",
			B: "hyperbaric therapy.",
			C: "switching to a high-flow oxygen mask FIO2 0.50.",
			D: "psychological counseling.",
		},
		answer: "A",
		answer_explanation:
			"CO-Oximetry.\n\nThe patient's history suggests exposure to carbon monoxide (attempted suicide). It is very possible that the patient has dangerous levels of CO in the blood. Although hyperbaric therapy may help reduce this, it is most appropriate to first check and confirm a carbon monoxide level. CO-oximetry is most appropriate.",
	},
	{
		question:
			"A respiratory therapist is documenting the results of a six-minute walk test (6MWT). Which of the following is the primary criterion to be documented?\n\n A. number of steps\n B. distance\n C. SpO2\n D. RR",
		options: {A: "number of steps", B: "distance", C: "SpO2", D: "RR"},
		answer: "B",
		answer_explanation:
			"distance\n\nThe final metric associated with a 6MWT is distance. The exam is intended to evaluate the cardiac stamina of the patient with the activity of walking. Distance walked in 6 minutes is documented and compared to previous sessions and to normal estimations of people with normal cardiac function.",
	},
	{
		question:
			"A patient must be transported to a hospital that is 300 miles away for higher level diagnostic services not available in the local community. Which of the following is the most appropriate method of transport?\n\n A. helicopter\n B. personal vehicle\n C. ambulance\n D. fixed-wing aircraft",
		options: {
			A: "helicopter",
			B: "personal vehicle",
			C: "ambulance",
			D: "fixed-wing aircraft",
		},
		answer: "D",
		answer_explanation:
			"fixed-wing aircraft\n\nWhen needing to transport patient more than 150 miles, the most appropriate method of transport is a fixed-wing aircraft (an airplane).",
	},
	{
		question:
			"What is the name of a waveform missing dicrotic notch \n\nWhat causes pressure dampening",
		options: {},
		answer: "[][][]",
		answer_explanation: "[][][]",
	},
	{
		question:
			"The respiratory therapist has determined that a patient is developing autoPEEP. Which of the following settings, if increased, would reduce autoPEEP?\n A. expiratory time\n B. peak flow rate\n C. PEEP\n D. rate",
		options: {A: "expiratory time", B: "peak flow rate", C: "PEEP", D: "rate"},
		answer: "B",
		answer_explanation:
			"peak flow rate\n\nAutoPEEP develops when there is insufficient expiratory time relative to the rate and tidal volume being delivered. This is best remedied by increasing expiratory time. Of the options listed, only an increase in peak flow rate will accomplish this. Increasing flow rate will reduce inspiratory time, thus leaving more time for expiration.",
	},
	{
		question:
			"Which of the following techniques would best monitor for the presence of viable spores after the sterilization of a laryngoscope blade?\n A. biological indicator tape\n B. chemical indicator tape\n C. evaluating the integrity of the sealed packaging\n D. examination of the blade under a microscope",
		options: {
			A: "biological indicator tape",
			B: "chemical indicator tape",
			C: "evaluating the integrity of the sealed packaging",
			D: "examination of the blade under a microscope",
		},
		answer: "A",
		answer_explanation:
			"biological indicator tape\n\nBiological indicator tape is a material that is enclosed in the sealed sterile packaging with the equipment that has been sterilized. If viable spores are present, the biological indicator will have a visual cue. A chemical indicator tape is used only to prove that the sterilization procedure occurred - not sufficient to actually prove the equipment is free of living or viable organisms.",
	},
	{
		question:
			"A patient is suspected of having a pulmonary infarction. Which of the following findings would be supportive of this suspicion?\n\n A. diminished breath sounds\n B. audible stridor\n C. presence of a pleural friction rub\n D. auscultation of crepitus",
		options: {
			A: "diminished breath sounds",
			B: "audible stridor",
			C: "presence of a pleural friction rub",
			D: "auscultation of crepitus",
		},
		answer: "C",
		answer_explanation:
			"presence of a pleural friction rub\n\nTB, pulmonary infarction, and pleurisy are all conditions capable of producing what is called a pleural friction rub upon auscultation. This can also be described as a 'grating sound'.",
	},
	{
		question:
			"A patient with the signs and symptoms of myasthenia gravis receives a dose of edrophonium for diagnostic purposes. Moments after administration, the patient's HR falls to 42/min and blood pressure falls to 88/60 mm Hg. The respiratory therapist should immediately\n\n A. administer IV fluids with lactated ringers.\n B. discontinue Edrophonium and administer atropine.\n C. begin full cardiopulmonary resuscitation.\n D. discontinue Edrophonium and document a myasthenic crisis.",
		options: {
			A: "administer IV fluids with lactated ringers.",
			B: "discontinue Edrophonium and administer atropine.",
			C: "begin full cardiopulmonary resuscitation.",
			D: "discontinue Edrophonium and document a myasthenic crisis.",
		},
		answer: "B",
		answer_explanation:
			"discontinue Edrophonium and administer atropine.\n\nAt times, while attempting to diagnose myasthenia gravis, the use of Edrophonium can cause what is called a cholinergic crisis, which is life-threatening. The proper response is to immediately discontinue the medication and administer the counteracting agent, atropine.",
	},
	{
		question:
			"A 32-year old, 73-kg (161-lb), 178-cm (5 ft, 10 in) male patient is receiving VC ventilatory support on the following settings with the following ABG results:\n\nMode: \nSIMV \nVT 400 mL(f) 12/min\nPEEP 5 cm H2O\nFIO2 0.45\n\nABGs \npH 7.29\nPaCO2 50 mm Hg\nPaO2 81 torr\nHCO3- 24 mEq/L\nBE -5 mEq/L\n\n\nThe respiratory therapist should make which of the following observations about the patient's condition?\n A. refractory hypoxemia is present.\n B. hypoxemia secondary to hypoventilation is present.\n C. minute ventilation is too low.\n D. The patient has developed ARDS.",
		options: {
			A: "refractory hypoxemia is present.",
			B: "hypoxemia secondary to hypoventilation is present.",
			C: "minute ventilation is too low.",
			D: "The patient has developed ARDS.",
		},
		answer: "C",
		answer_explanation:
			"minute ventilation is too low.\n\nThe patient is obviously hypo-ventilating as shown by an elevated PaCO2 level. The source of the problem is that the tidal volume is set too low. It should be at least 6 mL/kg IBW. In this case, the patient weighs 73 kg. As such, the minimum tidal volume should be 438 mL. Although the rate is fine, the less-than-minimum VT is exposing the patient to a minute ventilation that is too low.",
	},
	{
		question:
			"A patient undergoing pulmonary function testing shows the following results:\n\nSVC (L) 4.1 \nFVC (L) 4.3\nFEV1 (L) 2.8 L\nDLCO (CO/min/mm Hg) 22\n\n\n\nThe respiratory therapist should interpret these results as (a)(n)\n A. pulmonary emphysema\n B. restrictive pulmonary defect\n C. obstructive pulmonary defect\n D. inconclusive",
		options: {
			A: "pulmonary emphysema",
			B: "restrictive pulmonary defect",
			C: "obstructive pulmonary defect",
			D: "inconclusive",
		},
		answer: "D",
		answer_explanation:
			"inconclusive\n\nSVC (slow vital capacity) should always be higher than FVC (forced vital capacity). This is because exhaled volumes are always greater when exhaled slowly, without turbulent airflow and the natural air-trapping that occurs. Thus, a slow vital capacity measurement should always produce a result higher than that of a forced vital capacity. In this case, FVC is greater than SVC, indicating that the patient did not produce sufficient effort on the SVC. Consequently, no diagnosis should be given at this point. SVC should be repeated to obtain more conclusive test results.",
	},
	{
		question:
			"During intubation by direct laryngoscopy, the laryngoscope blade is inserted past the vallecula before upward pressure is applied. Which of the following laryngoscope blade types is in use?\n\n A. Bougie\n B. fiberoptic\n C. Mcintosh\n D. Miller",
		options: {A: "Bougie", B: "fiberoptic", C: "Mcintosh", D: "Miller"},
		answer: "D",
		answer_explanation:
			"Miller\n\nA Miller blade (also referred to as a straight blade) is inserted past the vallecula while a McIntosh blade is shorter and is normally inserted into the vallecula prior to applying upward pressure.",
	},
	{
		question:
			"A chest radiograph on a patient with a history of CHF shows a butterfly pattern with fluffy infiltrates. The respiratory therapist should monitor the patient closely for\n\n A. internal hemorrhaging.\n B. pneumothorax.\n C. cardiac arrhythmias.\n D. formation of pink, frothy secretions in the pulmonary tree.",
		options: {
			A: "internal hemorrhaging.",
			B: "pneumothorax.",
			C: "cardiac arrhythmias.",
			D: "formation of pink, frothy secretions in the pulmonary tree.",
		},
		answer: "D",
		answer_explanation:
			"formation of pink, frothy secretions in the pulmonary tree.\n\nThe formation of pink frothy secretions in the pulmonary tree can develop from blood seeping across the alveolar capillary membrane and forming a foam-like consistency which can easily fill the entire pulmonary tree and interrupt ventilation.",
	},
	{
		question:
			"A patient with COPD, who is receiving mechanical ventilation, is determined to have an increasing level of autoPEEP. Which of the following would help to alleviate this situation?\n\n A. decrease in inspiratory flow\n B. increase in PEEP\n C. increase in inspiratory time\n D. decrease in I:E ratio",
		options: {
			A: "decrease in inspiratory flow",
			B: "increase in PEEP",
			C: "increase in inspiratory time",
			D: "decrease in I:E ratio",
		},
		answer: "D",
		answer_explanation:
			"decrease in I:E ratio\n\nAutoPEEP is caused by an insufficient expiratory time. Thus, of the options given, a decrease in I:E ratio would result in a lengthened expiratory time. All other options would shorten I-time, which would worsen the autoPEEP condition.",
	},
	{
		question:
			"Asymmetrical chest movement noted in an adult could be indicative of (a)\n\n A. pneumothorax.\n B. congestive heart failure.\n C. pulmonary hypertension.\n D. pulmonary embolism.",
		options: {
			A: "pneumothorax.",
			B: "congestive heart failure.",
			C: "pulmonary hypertension.",
			D: "pulmonary embolism.",
		},
		answer: "A",
		answer_explanation:
			"pneumothorax.\n\nA pneumothorax will cause asymmetrical chest movement.",
	},
	{
		question:
			"A pressure-volume ventilator graphic on a patient receiving VC ventilation is observed to be gradually moving toward the X axis (pressure axis), indicating a possible change in compliance. After confirming no recent changes in graph scaling, the respiratory therapist should closely monitor which of the following?\n\n A. autoPEEP values\n B. airway resistance\n C. plateau pressures\n D. dynamic compliance",
		options: {
			A: "autoPEEP values",
			B: "airway resistance",
			C: "plateau pressures",
			D: "dynamic compliance",
		},
		answer: "C",
		answer_explanation:
			"plateau pressures\n\nAs the pressure-volume graphic increasingly becomes parallel to the X axis, there is an indication that the patient has decreasing pulmonary compliance. The best way to monitor this further is to observe the trend in plateau pressures. As plateau pressures increase, the patient may eventually require alternative methods of ventilatory support.",
	},
	{
		question:
			"A patient is brought to the emergency department by emergency responders. The report indicates the patient was in ventilatory distress when admitted. Currently, the patient is on non-invasive ventilation, IPAP 20 cm H2O, EPAP 8 cm H2O with the following corresponding ABGs:\n\npH 7.45 \nPaCO2 35 torr\nPaO2 108 torr\nHCO3- 24 mEq/L\nBE 0 mEq/L\nFIO2 0.50\n\nWhich of the following changes is most appropriate?\n\n A. decrease EPAP to 6 cm H2O and IPAP to 18 cm H2O\n B. increase IPAP to 22 cm H2O and EPAP to 10 cm H2O\n C. switch to full, invasive ventilatory support, SIMV mode with pressure support\n D. increase IPAP to 24 cm H2O",
		options: {
			A: "decrease EPAP to 6 cm H2O and IPAP to 18 cm H2O",
			B: "increase IPAP to 22 cm H2O and EPAP to 10 cm H2O",
			C: "switch to full, invasive ventilatory support, SIMV mode with pressure support",
			D: "increase IPAP to 24 cm H2O",
		},
		answer: "A",
		answer_explanation:
			"decrease EPAP to 6 cm H2O and IPAP to 18 cm H2O\n\nBecause ventilation appears adequate in the blood gas, a decrease in EPAP would be most appropriate as it would both increase ventilation (increase the delta P) and lower oxygenation by decreasing positive end expiratory pressures.",
	},
	{
		question:
			"The following data is observed on a patient receiving PC ventilation:\n\nVT(return) 540 mL \nPx (peak) 37 cm H2O\nPx (plat) 15 cm H2O\nPEEP 7 cm H2O\n\nWhat is the calculated dynamic compliance?\n\n A. 36 mL/cm H2O\n B. 18 mL/cm H2O\n C. 68 mL/cm H2O\n D. 15 mL/cm H2O",
		options: {
			A: "36 mL/cm H2O",
			B: "18 mL/cm H2O",
			C: "68 mL/cm H2O",
			D: "15 mL/cm H2O",
		},
		answer: "B",
		answer_explanation:
			"18 mL/cm H2O\n\nDynamic compliance = VT / (Peak px - PEEP) Dynamic compliance = 540 / 30 Dynamic compliance = 18 mL/cm H2O",
	},
	{
		question:
			"To prevent build-up of CO2, a simple mask must\n\n A. have an internal one-way valve.\n B. be loosely applied to the patient.\n C. not be used on patients with tachypnea.\n D. have a flow of at least 6-7 L/min.",
		options: {
			A: "have an internal one-way valve.",
			B: "be loosely applied to the patient.",
			C: "not be used on patients with tachypnea.",
			D: "have a flow of at least 6-7 L/min.",
		},
		answer: "D",
		answer_explanation:
			"have a flow of at least 6-7 L/min.\n\nThe central concern, when using a simple mask, is adequate flushing of CO2. Exhaled CO2 can easily build up in the mask. This requires a sufficient oxygen flow rate to the mask of at least 6-7 L/min.",
	},
	{
		question:
			"Two hours after surgery a patient is unable to achieve visual results while using a flow-oriented incentive spirometer. Which of the following should be considered?\n\n A. switching to a volume-oriented device\n B. administering Romazicon\n C. reattempting the therapy in 2 hrs\n D. administering Narcan (Naloxone)",
		options: {
			A: "switching to a volume-oriented device",
			B: "administering Romazicon",
			C: "reattempting the therapy in 2 hrs",
			D: "administering Narcan (Naloxone)",
		},
		answer: "A",
		answer_explanation:
			"switching to a volume-oriented device\n\nFlow-type incentive spirometer devices are more difficult to use and provide less feedback that do volume-oriented devices. Flow-type devices consist of weighted balls that float at specific inspiratory flow rates. If a patient is unable to get the first ball to rise, the incentive to use the device is not present. However, a volume-oriented device is very sensitive and will more likely show progress (volume) which is much more incentivizing to the patient.",
	},
	{
		question:
			"For which of the following would conscious sedation mostly like be employed?\n\n A. coronary artery bypass graft\n B. surgical placement of a tracheostomy tube\n C. placement of an arterial catheter (art line)\n D. cardioversion for atrial tachycardia",
		options: {
			A: "coronary artery bypass graft",
			B: "surgical placement of a tracheostomy tube",
			C: "placement of an arterial catheter (art line)",
			D: "cardioversion for atrial tachycardia",
		},
		answer: "D",
		answer_explanation:
			"cardioversion for atrial tachycardia\n\nCardioversion is a procedure where very light sedation is administered. Surgery would require heavy sedation as would a CABG. Placement of an arterial line may require local anesthesia, but sedation is not required.",
	},
	{
		question:
			"A patient with general malaise and other signs and symptoms of influenza, as well as a low-grade fever, is likely to have which of the following?\n\n A. pneumonia\n B. increased eosinophil count\n C. a pleural effusion\n D. an electrolyte imbalance",
		options: {
			A: "pneumonia",
			B: "increased eosinophil count",
			C: "a pleural effusion",
			D: "an electrolyte imbalance",
		},
		answer: "D",
		answer_explanation:
			"an electrolyte imbalance\n\nGeneral malaise is most closely associated with an electrolyte imbalance.",
	},
	{
		question:
			"While providing manual ventilation to a patient through an ET tube, the respiratory therapist notices no resistance when delivering each breath. The ET tube cuff is checked and found to be inflated properly. The patient's SpO2 is 88% and falling. Which of the following is most likely?\n\n A. excessively small ET tube\n B. herniated ET tube cuff\n C. malfunctioning air-inlet valve\n D. faulty exhalation valve in the bag",
		options: {
			A: "excessively small ET tube",
			B: "herniated ET tube cuff",
			C: "malfunctioning air-inlet valve",
			D: "faulty exhalation valve in the bag",
		},
		answer: "C",
		answer_explanation:
			"malfunctioning air-inlet valve\n\nBecause the ET tube cuff was inflated properly, the most likely cause is a malfunctioning air inlet valve. It should allow gas to free flow in, but seal upon exhalation. If this fails to happen, squeezing the bag will result in air escaping back out the air-inlet valve. This would also deprive the patient of needed ventilation and oxygenation.",
	},
	{
		question:
			"Which of the following, if present, would suggest ventilatory instability in a patient suspected of opioid overdose?\n\n A. VT of 3.5 mL/kg\n B. MEP of 50 cm H2O\n C. MIP of - 38 cm H2O\n D. VC of 12 mL/kg",
		options: {
			A: "VT of 3.5 mL/kg",
			B: "MEP of 50 cm H2O",
			C: "MIP of - 38 cm H2O",
			D: "VC of 12 mL/kg",
		},
		answer: "A",
		answer_explanation:
			"VT of 3.5 mL/kg\n\nAll of the parameters are associated with a stable ability to ventilate except for the VT. Tidal volume should be at least 5 mL/kg of IBW.",
	},
	{
		question:
			"A patient has an MIP of -10 cm H2O. This finding is evidence that the patient is\n\n A. ready to be removed from ventilatory support.\n B. likely unable to maintain independent ventilation.\n C. needing respiratory stimulating medication.\n D. in need of sedation.",
		options: {
			A: "ready to be removed from ventilatory support.",
			B: "likely unable to maintain independent ventilation.",
			C: "needing respiratory stimulating medication.",
			D: "in need of sedation.",
		},
		answer: "B",
		answer_explanation:
			"likely unable to maintain independent ventilation.\n\nA maximum inspiratory pressure (MIP) of -10 cm H2O suggest that the patient does not likely have the muscular stamina to maintain ventilation independently.",
	},
	{
		question:
			"A 63-year-old 157-cm (5-ft, 2-in), 90-kg (198-lb) female cardiac failure patient is in the cardiac intensive care unit following a quadruple coronary artery bypass graft. Complications have led to a need for continuous mechanical ventilatory support. The following laboratory and physiological data is most recently observed:\n\nABG \npH 7.33\nPaCO2 48 torr\nPaO2 68 torr\nHCO3- 23 mEq/L\nBE -1 mEq/L\n\nVentilator settings: \nMode VC, SIMV\nf 18/min\nVT 400 mL\nFIO2 0.60\nPEEP 18 cm H2O\n\nThe respiratory therapist should\n\n A. increase tidal volume to 550 mL.\n B. increase FIO2 to 1.0.\n C. recommend ECMO.\n D. increase PEEP to 20 cm H2O.",
		options: {
			A: "increase tidal volume to 550 mL.",
			B: "increase FIO2 to 1.0.",
			C: "recommend ECMO.",
			D: "increase PEEP to 20 cm H2O.",
		},
		answer: "B",
		answer_explanation:
			"increase FIO2 to 1.0.\n\nAt first glance, there is a small problem with ventilation. Normally this should be addressed first. However, the only option that addresses ventilation is an increase in VT to 550 mL. Based on the patient's predicted body weight, the patient should weigh only about 50 kg. This would make a VT of 550 mL out of range (300 mL to 500 mL) and thus is inappropriate. The next most important problem in the question is under-oxygenation. Since the patient's FIO2 is already at 0.60, it may be tempting to raise PEEP further. However, closer observation reveals a cardiac index that is too low. This suggests that the patient is unable to withstand further increases in PEEP due to negative hemodynamics outcomes. Thus, the only suitable option is to address oxygenation by raising FIO2 to 1.0.",
	},
	{
		question:
			"While waiting for admission to the emergency room (ER), the valve on a patient's liquid oxygen system malfunctions which results in a spillage of liquid oxygen onto the floor. The respiratory therapist should do which of the following to manage the spill?\n\n A. call in the facility's hazmat team\n B. utilize a mop and water to absorb excess liquid oxygen\n C. wait for the liquid oxygen to evaporate\n D. evacuate the waiting room",
		options: {
			A: "call in the facility's hazmat team",
			B: "utilize a mop and water to absorb excess liquid oxygen",
			C: "wait for the liquid oxygen to evaporate",
			D: "evacuate the waiting room",
		},
		answer: "C",
		answer_explanation:
			"wait for the liquid oxygen to evaporate\n\nLiquid oxygen cannot stay in liquid form once at ambient pressures. Thus, no special clean-up is needed. The liquid will immediately evaporate into oxygen gas, which poses no threat to those in the proximity.",
	},
	{
		question:
			"Which chest lead on a 12- lead ECG records activity most related to the left heart ventricle?\n\n A. leads V3 and V4\n B. lead V5\n C. lead V2\n D.",
		options: {A: "leads V3 and V4", B: "lead V5", C: "lead V2", D: ""},
		answer: "B",
		answer_explanation:
			"lead V5\n\nThe electrical tracing from chest lead V5 is most revealing of the left ventricle and the left heart in general.",
	},
	{
		question:
			"According to the ARDSnet protocol, a central objective in treatment is to minimize further alveolar damage. This is accomplished by\n\n A. repairing damaged alveoli through the drop and stretch method.\n B. promoting increased plateau pressures.\n C. keeping tidal volumes low.\n D. keeping PaO2 values above 80 mmHg.",
		options: {
			A: "repairing damaged alveoli through the drop and stretch method.",
			B: "promoting increased plateau pressures.",
			C: "keeping tidal volumes low.",
			D: "keeping PaO2 values above 80 mmHg.",
		},
		answer: "C",
		answer_explanation:
			"keeping tidal volumes low.\n\nThe ARDSnet protocol includes keeping tidal volumes low to minimize alveolar wall stretch and the consequent potential injury.",
	},
	{
		question: "how to fix auto peep",
		options: {},
		answer: "[][][]",
		answer_explanation: "[][][]",
	},
	{
		question:
			"A patient involved in a smoking cessation program has been receiving psychological counseling to help overcome the addiction. After several weeks of the program, the patient's COHb is 15%. Which of the following should the respiratory therapist recommend?\n\n A. continue current addiction recovery methods\n B. increased frequency of counseling\n C. chastise the patient for not following the program\n D. use of nicotine dermal patches",
		options: {
			A: "continue current addiction recovery methods",
			B: "increased frequency of counseling",
			C: "chastise the patient for not following the program",
			D: "use of nicotine dermal patches",
		},
		answer: "D",
		answer_explanation:
			"use of nicotine dermal patches\n\nA COHb of 15% indicates a high level of continued smoking, suggesting that counseling to help the patient to overcome the psychological aspects of the addiction is insufficient. The program should include a method to help overcome the physiological aspects of the addition as well. The use of supplemental nicotine by dermal patch would help with that objective.",
	},
	{
		question:
			"The SVO2 of a patient who has undergone open-heart surgery is being monitored by reflexive oximetry. To monitor the trend in cardiac output of the patient, what additional data would be helpful?\n\n A. P/F ratio\n B. transcutaneous CO2\n C. PetCO2\n D. SAO2",
		options: {A: "P/F ratio", B: "transcutaneous CO2", C: "PetCO2", D: "SAO2"},
		answer: "D",
		answer_explanation:
			"SAO2\n\nThe trend in cardiac output can be monitored by examining the gap between SpO2 and SVO2 (SAO2 - SVO2). As the gap increases, cardiac output can be assumed to be decreasing and vice versa.",
	},
	{
		question:
			"A sputum culture reveals the presence of a streptococcal infection. Which of the following pharmacological agents would be most appropriate?\n\n A. carbenicillin\n B. gentamycin\n C. tobramycin\n D. proteolytic",
		options: {
			A: "carbenicillin",
			B: "gentamycin",
			C: "tobramycin",
			D: "proteolytic",
		},
		answer: "A",
		answer_explanation:
			"carbenicillin\n\nStreptococcus is a gram-positive organism and should be treated with Penicillin-type antimicrobial therapy. In this case, carbenicillin is most appropriate. Gentamycin is used to treat gram-negative organisms, as is also tobramycin. A proteolytic is used to thin secretions and is not an antimicrobial agent.",
	},
	{
		question:
			"A blood gas analyzer commits an error and reports a PCO2 value outside the reportable range of the analyzer. The respiratory therapist should\n\n A. perform a two-point calibration.\n B. do a one-point calibration.\n C. replace the Clark electrode.\n D. obtain another blood sample and reattempt analysis.",
		options: {
			A: "perform a two-point calibration.",
			B: "do a one-point calibration.",
			C: "replace the Clark electrode.",
			D: "obtain another blood sample and reattempt analysis.",
		},
		answer: "A",
		answer_explanation:
			"perform a two-point calibration.\n\nThe first step in addressing a value reported outside the reportable range for the machine is to perform a two-point calibration. Issues involving the reportable range require a two-point calibration while an inaccurate value within the range can be addressed by doing a one-point calibration. Changing the CO2 (Sanz) electrode is too drastic.",
	},
	{
		question:
			"Which type of chest radiograph is optimal for diagnosis of pneumonia?\n A. lateral decubitus radiograph\n B. series of lateral radiographs\n C. PA radiograph\n D. AP radiograph",
		options: {
			A: "lateral decubitus radiograph",
			B: "series of lateral radiographs",
			C: "PA radiograph",
			D: "AP radiograph",
		},
		answer: "C",
		answer_explanation:
			"PA radiograph\n\nBoth PA (posterior-anterior) and AP (anterior-posterior) radiographs can be used to diagnose pneumonia. However, if the patient is ambulatory, a PA x-ray is preferable.",
	},
	{
		question:
			"A patient is transferred from an ICU step-down unit to the general floor for follow-up care. During an assessment of the patient, the respiratory therapist notes that the patient has an 8.0-mm fenestrated tracheostomy tube in place while breathing spontaneously. Cuff pressure is checked and found to be 18 mm Hg. Which of the following should the therapist do?\n\n A. removal all air from the cuff\n B. add air to the cuff\n C. perform the minimal leak technique\n D. perform the minimum seal technique",
		options: {
			A: "removal all air from the cuff",
			B: "add air to the cuff",
			C: "perform the minimal leak technique",
			D: "perform the minimum seal technique",
		},
		answer: "A",
		answer_explanation:
			"removal all air from the cuff\n\nFor patients who have a tracheostomy and that do not require aspiration protection and/or positive pressure ventilation, the cuff should not be inflated. Because they patient is breathing spontaneously, cuff pressure is unnecessary and could promote damage to the mucosa. Therefore, all air should be removed from the cuff.",
	},
	{
		question:
			"A 58-year-old, 137-cm (5-ft, 4-in), 60-kg (132-lb) male patient is receiving VC ventilation in the A/C mode after slow emergence from sedation following open-heart surgery. The following data is available:\n\nHR 98/min \nBP 128/88 mm Hg\nT 37.1 deg C (98.8 deg F)\n\nVent settings \nFIO2 0.45\nVT 550 mL\nMandatory rate 16/min\nPEEP 5 cm H2O\n\nABGs \npH 7.31 \nPaCO2 49 torr\nPaO2 78 torr\nHCO3- 22 mEq/L\nBE -3 mEq/L\n\nThe respiratory therapist should suggest which of the following changes?\n\n A. increase FIO2 to 0.50\n B. increase PEEP to 7 cm H2O\n C. increase tidal volume to 650 mL\n D. increase mandatory rate to 18/min",
		options: {
			A: "increase FIO2 to 0.50",
			B: "increase PEEP to 7 cm H2O",
			C: "increase tidal volume to 650 mL",
			D: "increase mandatory rate to 18/min",
		},
		answer: "D",
		answer_explanation:
			"increase mandatory rate to 18/min\n\nIn this case, the patient is slightly under-ventilating. Because the PaCO2 is off by only a few points, an increase in tidal volume would be an optimal choice. Although such an answer is included (increase VT to 650 mL), it is inappropriate because it would take the patient's tidal volume outside the suggested range of 6-10 mL/kg (or 360 mL to 600 mL). Consequently, the only other suitable option is to increase mandatory rate. It may be tempting to address oxygenation first, but ventilation should be addressed first because doing so could solve the oxygenation problem.",
	},
	{
		question:
			"A 68-year-old near drowning victim is triggering a high-pressure alarm on a VC ventilator. The following ventilatory data is available:\n\n8pm\npeak 28\nplat 18\n\n8am\npeak 33\nplat 23\n\n8pm\npeak 37\nplat 27\n\n8am\npeak 42\nplat 32\n\n\n\nFor which of the following reasons has the high-pressure alarm most likely been triggered?\n A. increased pulmonary compliance\n B. decreased dynamic compliance\n C. increased functional residual capacity\n D. decreased static compliance",
		options: {
			A: "increased pulmonary compliance",
			B: "decreased dynamic compliance",
			C: "increased functional residual capacity",
			D: "decreased static compliance",
		},
		answer: "D",
		answer_explanation:
			"decreased static compliance\n\nPlateau pressures are increasing. Peak pressures are also increasing but the increase is driven by the elevation in plateau pressures. Thus, the central issue is decreasing pulmonary (static) compliance.",
	},
	{
		question:
			"The following input/output record is observed by a respiratory therapist for a patient with a history of congestive heart failure:\n\nLast 24 hours\nIV fluids 1.4 L Oral fluids 0.4 LUrine output 2.1 Linsensible water loss 0.1 L\n\nWhich of the following can be accurately stated?\n A. Pitting edema is likely present.\n B. The patient is retaining excess fluid.\n C. Hemodynamic instability is present.\n D. The patient is diuresing.",
		options: {
			A: "Pitting edema is likely present.",
			B: "The patient is retaining excess fluid.",
			C: "Hemodynamic instability is present.",
			D: "The patient is diuresing.",
		},
		answer: "D",
		answer_explanation:
			"The patient is diuresing.\n\nThe output (urine output) is 2.1 L, which is greater than the fluid intake (1.8 L). Therefore, the patient is losing fluid (diuresing).",
	},
	{
		question:
			"In preparation for a cardioversion procedure for the treatment of atrial tachycardia, the respiratory therapist should\n\n A. turn synchronization off.\n B. set power to 300 Joules.\n C. administer a neuromuscular blocking agent.\n D. set power to 50 Joules.",
		options: {
			A: "turn synchronization off.",
			B: "set power to 300 Joules.",
			C: "administer a neuromuscular blocking agent.",
			D: "set power to 50 Joules.",
		},
		answer: "D",
		answer_explanation:
			"set power to 50 Joules.\n\nCardioversion should be done with synchronization on and an initial power setting of 50 to 100 Joules.",
	},
	{
		question:
			"The respiratory therapist notices excessive bubbling in the water-seal chamber of a disposable chest tube drainage system. Simultaneously, the low volume alarm on the ventilator is sounding. After clamping the chest tube proximal to the patient, the bubbling ceases. Which of the following should be of primary concern?\n\n A. faulty chest tube drainage system\n B. leaky tube connections in the system\n C. potential for lung tissue perforation\n D. depleted suction control chamber",
		options: {
			A: "faulty chest tube drainage system",
			B: "leaky tube connections in the system",
			C: "potential for lung tissue perforation",
			D: "depleted suction control chamber",
		},
		answer: "C",
		answer_explanation:
			"potential for lung tissue perforation\n\nExcessive bubbling in the water-seal chamber suggests a leak somewhere in the system. Because the bubbling ceases when the tubing is clamped as it exits the patient, the most likely location of the leak is within the chest cavity. A continuous low-volume alarm further corroborates this. The most worrisome potential at this point is a perforation (hole) in the lung tissue itself.",
	},
	{
		question:
			"While instructing a patient on the use of a metered dose inhaler with a chamber, the respiratory therapist hears a whistling sound when the patient inhales. The whistling sound is most likely an indication of\n\n A. a normally functioning chamber.\n B. a defective chamber.\n C. evidence that the patient is exhaling when he should be inhaling.\n D. excessive inspiratory flow rate by the patient.",
		options: {
			A: "a normally functioning chamber.",
			B: "a defective chamber.",
			C: "evidence that the patient is exhaling when he should be inhaling.",
			D: "excessive inspiratory flow rate by the patient.",
		},
		answer: "D",
		answer_explanation:
			"excessive inspiratory flow rate by the patient.\n\nChambers are often used in conjunction with MDIs to maximize medication particle delivery and deposition. Many such devices have a built-in audible alarm that emits a whistling sound if the patient inhales too quickly. Inhaling too quickly could promote improper deposition of medication particles in the oropharynx. When the sound is heard, the patient should be coached to slow his or her inspiratory flow rate (to inhale more slowly).",
	},
	{
		question:
			"The analog needle on the galvanic fuel cell oxygen analyzer fails to move when exposed to oxygen levels greater than 21%. The respiratory therapist should\n\n A. replace the unit's batteries.\n B. perform a one-point calibration on the analyzer.\n C. replace the fuel cell.\n D. perform a two-point calibration on the device.",
		options: {
			A: "replace the unit's batteries.",
			B: "perform a one-point calibration on the analyzer.",
			C: "replace the fuel cell.",
			D: "perform a two-point calibration on the device.",
		},
		answer: "C",
		answer_explanation:
			"replace the fuel cell.\n\nOn a galvanic fuel-cell type oxygen analyzer, the probe (sensor) provides the electrical source needed to move an analog indicator needle. This works though a chemical reaction in the probe which responds more vigorously to oxygen. When the analyzer fails to respond, the most likely problem is that the chemicals in the fuel-cell have been depleted. In such a case, the entire cell (probe) should be replaced.",
	},
	{
		question:
			"Which of the following can reverse the effects of benzodiazepines?\n\n A. Dalmane\n B. Romazicon\n C. Halcion\n D. Narcan",
		options: {A: "Dalmane", B: "Romazicon", C: "Halcion", D: "Narcan"},
		answer: "B",
		answer_explanation:
			"Romazicon\n\nRomazicon is intended to reverse the effects of benzodiazepines such as Ativan, Xanex, Dalmane, Versed, and others",
	},
	{
		question:
			"While facilitating extubation, the patient should be instructed to do which of the following while removing the ET tube?\n\n A. perform a breath-hold maneuver during removal\n B. attempt to perform a cough during tube extraction\n C. exhale during tube removal\n D. inhale as the tube is being removed",
		options: {
			A: "perform a breath-hold maneuver during removal",
			B: "attempt to perform a cough during tube extraction",
			C: "exhale during tube removal",
			D: "inhale as the tube is being removed",
		},
		answer: "D",
		answer_explanation:
			"inhale as the tube is being removed\n\nThe act of inhaling promotes contraction of the glottic and other surrounding tissues, which allows for tube removal while minimizing potentially damaging contact with tissues.",
	},
	{
		question:
			"Under which condition should FeNO exhaled gas analysis be recommended?\n A. to assess the source of halitosis\n B. to quantify the adequacy of ventilation\n C. to evaluate adherence with a smoking cessation program\n D. to determine compliance with corticosteroid administration",
		options: {
			A: "to assess the source of halitosis",
			B: "to quantify the adequacy of ventilation",
			C: "to evaluate adherence with a smoking cessation program",
			D: "to determine compliance with corticosteroid administration",
		},
		answer: "D",
		answer_explanation:
			"to determine compliance with corticosteroid administration\n\nExhaled FeNO gas analysis is used to determine the level of inflammatory processes in the airway and is, therefore, helpful in assessing a patient's compliance with anti-inflammatory (corticosteroid) medication orders.",
	},
	{
		question:
			"Which one of the following spontaneous tidal volume values is minimally required for ventilator liberation to spontaneous breathing?\n\n A. > 3 mL/kg\n B. > 15 mL/kg\n C. > 10 mL/kg\n D. > 5 mL/kg",
		options: {A: "> 3 mL/kg", B: "> 15 mL/kg", C: "> 10 mL/kg", D: "> 5 mL/kg"},
		answer: "D",
		answer_explanation:
			"> 5 mL/kg\n\nSpontaneous tidal volumes must be at least 5 mL/kg for a patient to be considered for ventilator liberation (removal of mechanical ventilation).",
	},
	{
		question:
			"The following arterial blood gas result is observed on patient who is admitted to the trauma unit after being involved in a motor vehicle accident:\n\nHb 8 gm/dL \nHCT 25% \npH 7.35\nPaCO2 44 torr\nPaO2 110 torr\nHCO3- 22 mEq/\nLBE -1 mEq/L\nFIO2 0.50\n\nBased on this data, the patient is\n A. oxygenating appropriately.\n B. hypoxic.\n C. experiencing a significant VQ mismatch.\n D. experiencing increased oxygen consumption.",
		options: {
			A: "oxygenating appropriately.",
			B: "hypoxic.",
			C: "experiencing a significant VQ mismatch.",
			D: "experiencing increased oxygen consumption.",
		},
		answer: "B",
		answer_explanation:
			"hypoxic.\n\nAlthough the PaO2 of the patient looks acceptable, the patient is in fact hypoxic due to the low level of hemoglobin. This is likely related to external or internal hemorrhaging caused by the recent traumatic events.",
	},
	{
		question:
			"A patient with COPD is weaning from the ventilator. Current settings are:\n\nSIMV \nMandatory rate 4/min\nTotal rate 14/min\nVT 450 mL (7 mL/kg PBW)\nFIO2 0.45\nPEEP 4 cm H2O\nPS 5 cm H2O\n\nABGs \npH 7.35\nPaCO2 63 torr\nPaO2 85 torr\n\n\nThe respiratory therapist should recommend\n A. reducing rate to 2/min.\n B. placing the patient on non-invasive ventilation.\n C. decreasing FIO2 to 0.35.\n D. returning the patient to full ventilatory support, rate of 8/min.",
		options: {
			A: "reducing rate to 2/min.",
			B: "placing the patient on non-invasive ventilation.",
			C: "decreasing FIO2 to 0.35.",
			D: "returning the patient to full ventilatory support, rate of 8/min.",
		},
		answer: "C",
		answer_explanation:
			"decreasing FIO2 to 0.35.\n\nBecause the patient is over-oxygenating for a COPD patient, FIO2 should be lowered to achieve a PaO2 of 55-65 torr.",
	},
	{
		question:
			"A patient with a hemothorax has a chest tube inserted in the 5th interspace, left side, mid-axillary line. The tube is attached to a disposable, three-chamber collection unit. While recording the amount of fluid collected, the respiratory therapist notices the fluid collection chamber is nearly full. What should the therapist anticipate?\n\n A. disconnecting and emptying the fluid collection chamber.\n B. discontinuing chest tube use.\n C. replacing the entire chest drainage unit.\n D. removing accumulated fluid by suction.",
		options: {
			A: "disconnecting and emptying the fluid collection chamber.",
			B: "discontinuing chest tube use.",
			C: "replacing the entire chest drainage unit.",
			D: "removing accumulated fluid by suction.",
		},
		answer: "C",
		answer_explanation:
			"replacing the entire chest drainage unit.\n\nBecause the three-chamber chest tube drainage system is disposable, when the fluid collection chamber is full, the entire three-chamber system should be replaced.",
	},
	{
		question:
			"Immediately after insertion of a nasal pharyngeal airway, the respiratory therapist observes significant, uncontrollable, persistent coughing by the patient. Which of the following is the most likely reason?\n\n A. The diameter of the airway is too large.\n B. The airway is too long.\n C. Use of a numbing jelly was insufficient.\n D. The patient has a latex allergy.",
		options: {
			A: "The diameter of the airway is too large.",
			B: "The airway is too long.",
			C: "Use of a numbing jelly was insufficient.",
			D: "The patient has a latex allergy.",
		},
		answer: "B",
		answer_explanation:
			"The airway is too long.\n\nThe most likely reason for coughing is that the airway (also called a nasal trumpet) is too long. When excessively long, the airway can contact sensitive tissues that may illicit a cough response.",
	},
	{
		question:
			"Which of the following tracheostomy tubes would be most appropriate for a patient who frequently experiences mucus plugs in the airway.\n\n A. single-bore\n B. Kamen-Wilkinson\n C. fenestrated\n D. silver metal",
		options: {
			A: "single-bore",
			B: "Kamen-Wilkinson",
			C: "fenestrated",
			D: "silver metal",
		},
		answer: "C",
		answer_explanation:
			"fenestrated\n\nA fenestrated tracheostomy tube includes a removable (and disposable) inner cannula. This is especially helpful for patients who have a propensity for mucus plugging. If a plug develops in the airway, the inner cannula can be removed immediately. The inner cannula can be cleaned or replaced with a new one.",
	},
	{
		question:
			"Which of the following can be used to treat severe pulmonary hypertension?\n\n A. epinephrine\n B. fluid administration\n C. inhaled proteolytics\n D. inhaled nitric oxide",
		options: {
			A: "epinephrine",
			B: "fluid administration",
			C: "inhaled proteolytics",
			D: "inhaled nitric oxide",
		},
		answer: "D",
		answer_explanation:
			"inhaled nitric oxide\n\niNO therapy (inhaled nitric oxide) is used to decrease pulmonary hypertension.",
	},
	{
		question:
			"A 4-year-old patient is in the emergency department (ED) with a loud brassy cough and a low-grade fever. Which of the following would be most helpful at providing further diagnostic information?\n\n A. modified barium swallow\n B. CBC\n C. lateral neck radiograph\n D. PA radiograph",
		options: {
			A: "modified barium swallow",
			B: "CBC",
			C: "lateral neck radiograph",
			D: "PA radiograph",
		},
		answer: "C",
		answer_explanation:
			"lateral neck radiograph\n\nClinical signs suggest the presence of croup (laryngotracheobronchitis). The suspicion can best be diagnosed with a lateral neck x-ray, which would show sub-glottic swelling if the patient is positive for croup.",
	},
	{
		question:
			"Upon discovering a patient in the step-down intensive care unit who appears to have lost all ventilatory drive and is therefore experiencing a complete cardiopulmonary arrest, the respiratory therapist intubates the patient and places an infrared end-tidal CO2 detector on the ET tube before providing manual ventilation with a resuscitator bag and beginning chest compressions. What initial end-tidal CO2 trend will the therapist expect to observe?\n\n A. fluctuating CO2 as resuscitation efforts continue\n B. no CO2 reading until within range of the infrared device\n C. high CO2 followed by a steady decrease\n D. low CO2 followed by a steady rise",
		options: {
			A: "fluctuating CO2 as resuscitation efforts continue",
			B: "no CO2 reading until within range of the infrared device",
			C: "high CO2 followed by a steady decrease",
			D: "low CO2 followed by a steady rise",
		},
		answer: "D",
		answer_explanation:
			"low CO2 followed by a steady rise\n\nFor a patient who has not been ventilating or circulating (no pulse), initial end-tidal CO2 values will be low (if not zero) but will then steadily rise as circulatory efforts expose CO2-filled blood to the alveoli. When a patient is neither circulating nor ventilating, there is no appreciable CO2 in the alveoli initially, and thus the value is low (close to zero) at first but climbs with resuscitative efforts.",
	},
	{
		question:
			"Which method of sterilization is most appropriate for used disposable needles?\n\n A. soak in acid glutaraldehyde (Sonacide)\n B. incineration\n C. Ethylene oxide gas (ETO)\n D. soak in alkaline glutaraldehyde (Cidex)",
		options: {
			A: "soak in acid glutaraldehyde (Sonacide)",
			B: "incineration",
			C: "Ethylene oxide gas (ETO)",
			D: "soak in alkaline glutaraldehyde (Cidex)",
		},
		answer: "B",
		answer_explanation:
			"incineration\n\nBecause the needles are disposable, incineration is the most suitable method of sterilization, even though the process will destroy the needles.",
	},
	{
		question:
			"A patient with a chest tube drainage system in place, with the chest tube inserted into the 5th interspace, mid-axillary line, has had no significant accumulation of drainage for 24 hrs. A chest radiograph shows vascular markings on the right. The physician is considering discontinuing and removing the drainage tube. Which of the following should the respiratory therapist suggest?\n\n A. Massage the chest tube proximal to the patient.\n B. Clamp the chest tube proximal to the patient.\n C. Replace the chest tube.\n D. Examine the system for a leak.",
		options: {
			A: "Massage the chest tube proximal to the patient.",
			B: "Clamp the chest tube proximal to the patient.",
			C: "Replace the chest tube.",
			D: "Examine the system for a leak.",
		},
		answer: "B",
		answer_explanation:
			"Clamp the chest tube proximal to the patient.\n\nThe presence of vascular markings indicates that the lung tissue is expanded. Once drainage appears to have virtually stopped, the next step is to clamp the chest tube and monitor the patient for ventilatory difficulty. If no difficulty is observed, chest tubes can probably be discontinued and removed.",
	},
	{
		question:
			"A patient in the post-surgical recovery unit has an indwelling arterial line in place for frequent monitoring of blood gases and continuous reporting of blood pressure. The respiratory therapist notices that the blood pressure from the arterial line is significantly less than the blood pressure from the arm cuff. To correct this problem, the therapist should\n\n A. discontinue use of the arm cuff.\n B. rotate the arterial line catheter and resample.\n C. zero the transducer on the arterial line.\n D. remove and replace the indwelling catheter.",
		options: {
			A: "discontinue use of the arm cuff.",
			B: "rotate the arterial line catheter and resample.",
			C: "zero the transducer on the arterial line.",
			D: "remove and replace the indwelling catheter.",
		},
		answer: "C",
		answer_explanation:
			"zero the transducer on the arterial line.\n\nWhen blood pressure from an arterial line differs from that of an arm cuff, the problem is in the transducer for the arterial line. The transducer's position is critical. Ideally, it should be kept level with the heart. When this is not possible (because of arm movement), the problem can be alleviated by zeroing the arterial line periodically.",
	},
	{
		question:
			"C(a-v)O2 values have been increasing over the last eight hours on a patient who is post-operative for coronary artery bypass. Which of the following is most likely increasing?\n\n A. cardiac output\n B. oxygen consumption\n C. cardiac index\n D. SpO2",
		options: {
			A: "cardiac output",
			B: "oxygen consumption",
			C: "cardiac index",
			D: "SpO2",
		},
		answer: "B",
		answer_explanation:
			"oxygen consumption\n\nAs the gap between CaO2 and CvO2 increase, oxygen consumption by the tissues increases.",
	},
	{
		question:
			"A patient is scheduled for tonsillectomy in one hour. The anesthesiologist is requesting an evaluation of the patient to identify the anticipated level of intubation difficulty. On observation, the respiratory therapist notices that the tonsils, uvula, and soft palate are visible. The therapist should report a Mallampati classification score of\n\n A. 2.\n B. 4.\n C. 3.\n D. 1.",
		options: {A: "2.", B: "4.", C: "3.", D: "1."},
		answer: "D",
		answer_explanation:
			"1.\n\nThe ability to visualize the tonsils, the uvula, and the soft palate is consistent with an 'open' airway and low difficulty for intubation. This would correlate with a Mallampati classification of 1 out of 4 (4 being extremely difficult).",
	},
	{
		question:
			"To assess the likelihood of a restrictive pulmonary impairment on a patient who has had exposure to asbestos, the respiratory therapist should suggest which of the following evaluations?\n\n A. peak flow\n B. flow-volume loop\n C. FEV1.0\n D. FEV1.0/FVC%",
		options: {
			A: "peak flow",
			B: "flow-volume loop",
			C: "FEV1.0",
			D: "FEV1.0/FVC%",
		},
		answer: "B",
		answer_explanation:
			"flow-volume loop\n\nThe shape of a flow-volume loop can be used to determine if the patient is normal, restrictive, or obstructive. A tall, narrow loop is associated with a restrictive impairment while a short, wide loop is associated with an obstructive pulmonary impairment.",
	},
	{
		question:
			"While adjusting the cuff pressure of an oral endotracheal tube on a patient who has a Mallampati classification of 4, the respiratory therapist discovers that the cuff is perforated and unable to maintain pressure. Because the patient is receiving mechanical ventilatory support, tube replacement is scheduled. The therapist should recommend\n\n A. use of a Combitube?\n B. use of an airway exchange catheter (AEC)\n C. placement of a tracheostomy tube.\n D. use of a laryngeal mask airway (LMA).",
		options: {
			A: "use of a Combitube?",
			B: "use of an airway exchange catheter (AEC)",
			C: "placement of a tracheostomy tube.",
			D: "use of a laryngeal mask airway (LMA).",
		},
		answer: "B",
		answer_explanation:
			"use of an airway exchange catheter (AEC)\n\nA Mallampati classification of 4 suggests that the patient is a difficult intubation. As such, reintubation could be difficult. This should be considered when planning for re-intubation. Use of an AEC will help ensure proper, quick replacement of the ET tube.",
	},
	{
		question:
			"Which of the following would result in a decrease in mean airway pressure for a patient receiving PC A/C ventilation?\n\n1. decrease in peak flow rate\n2. reduction in tidal volume\n3. reduction in mandatory rate\n4. removal of inspiratory hold time\n\n A. 2 and 3 only\n B. 1, 3, and 4 only\n C. 1 and 4 only\n D. 2, 3, and 4 only",
		options: {
			A: "2 and 3 only",
			B: "1, 3, and 4 only",
			C: "1 and 4 only",
			D: "2, 3, and 4 only",
		},
		answer: "D",
		answer_explanation:
			"2, 3, and 4 only\n\nOnly decreasing VT, rate, and inspiratory hold time would absolutely result in a decrease in mean airway pressure.",
	},
	{
		question:
			"A ventilator is sounding two alarms - low temperature and low volume. This could be caused by which of the following?\n\n A. depleted humidification reservoir\n B. ruptured ET tube cuff\n C. disconnected temperature probe in the ventilator circuit\n D. disconnect in the patient-ventilator interface",
		options: {
			A: "depleted humidification reservoir",
			B: "ruptured ET tube cuff",
			C: "disconnected temperature probe in the ventilator circuit",
			D: "disconnect in the patient-ventilator interface",
		},
		answer: "C",
		answer_explanation:
			"disconnected temperature probe in the ventilator circuit\n\nThe combination of low temperature and low volume alarms is commonly caused by a problem related to the temperature probe. As the temperature probe is inserted inside the inspiratory limb of the ventilator circuit, it can sometimes become dislodged creating a leak in the circuit. If the probe becomes dislodged, it is no longer exposed to the heated gases and can therefore, trigger a low-temperature alarm. A low volume alarm will result from the leak through the port where the probe is normally nestled.",
	},
	{
		question:
			"If the respiratory therapist notices the reservoir bag on a nonrebreather mask is failing to partially collapse with each breath, the therapist should\n\n A. tighten the elastic straps on the mask\n B. obtain a new nonrebreather mask\n C. increase oxygen flow to the reservoir\n D. remove the one-way valve disk",
		options: {
			A: "tighten the elastic straps on the mask",
			B: "obtain a new nonrebreather mask",
			C: "increase oxygen flow to the reservoir",
			D: "remove the one-way valve disk",
		},
		answer: "A",
		answer_explanation:
			"tighten the elastic straps on the mask\n\nFor a patient who is breathing oxygen through a non-rebreather mask, failing to cause a partial collapse of the reservoir with each breath is an indication that either the mask is not tight enough or that the flow to the mask is excessive. It is most likely that the mask requires tightening, which can be done by pulling on the elastic straps.",
	},
	{
		question:
			"A patient is found to have a rhythm on the ECG monitor consistent with asystole. Which of the following is the best initial action of the respiratory therapist?\n\n A. Defibrillate at 360 joules, unsynchronized\n B. Confirm in a second lead\n C. Begin chest compressions\n D. Defibrillate at 50 joules, synchronized",
		options: {
			A: "Defibrillate at 360 joules, unsynchronized",
			B: "Confirm in a second lead",
			C: "Begin chest compressions",
			D: "Defibrillate at 50 joules, synchronized",
		},
		answer: "B",
		answer_explanation:
			"Confirm in a second lead\n\nThis rhythm is called asystole. When observed, prior to starting chest compressions, the rhythm should be confirmed in his second lead.",
	},
	{
		question:
			"Within 5 minutes of oral extubation, the patient demonstrates mild inspiratory and expiratory stridor, some accessory muscle use, and an SpO2 of 92% on 40% air-entrainment mask. The therapist should recommend\n\n A. benzocaine spray to the oropharynx\n B. aerosolized racemic epinephrine\n C. heated bland aerosol\n D. reintubation",
		options: {
			A: "benzocaine spray to the oropharynx",
			B: "aerosolized racemic epinephrine",
			C: "heated bland aerosol",
			D: "reintubation",
		},
		answer: "B",
		answer_explanation:
			"aerosolized racemic epinephrine\n\nThe presence of inspiratory and expiratory stridor can be addressed by the therapist through the administration of racemic epinephrine. This medication is an alpha-1 type drug that constricts tissue. However, this can only be used when the level of stridor is considered mild or moderate. In the presence of severe or marked stridor, immediate establishment of an airway is preferred.",
	},
	{
		question:
			"A respiratory therapist is alerted by a ventilator alarm of a 62-year-old patient with COPD who was intubated for bacterial pneumonia. Upon arrival, the therapist notes the activation of the low PEEP alarm. For which of the following should the therapist investigate to determine the source of the alarm?\n\n A. pinched inspiratory limb of the circuit\n B. occlusion of the ET tube\n C. reduced ET tube cuff pressure\n D. lung tissue perforation",
		options: {
			A: "pinched inspiratory limb of the circuit",
			B: "occlusion of the ET tube",
			C: "reduced ET tube cuff pressure",
			D: "lung tissue perforation",
		},
		answer: "C",
		answer_explanation:
			"reduced ET tube cuff pressure\n\nA low PEEP alarm occurs when there is a continuous leak in the system, disallowing PEEP pressure to accumulate and hold steady. Of the options given, a reduction in ET tube cuff pressure could be the only likely cause. A pinched circuit or an occlusion of the ET tube would trigger a high-pressure alarm. A perforation in the lung tissue could indeed cause a low pressure, low volume, or low PEEP alarm but it is very unlikely.",
	},
	{
		question:
			"A patient is engaged in a smoking cessation program. During a routine visit to the counseling clinic, the patient describes shortness of breath (dyspnea) after every meal. Which of the following instruction should the therapist provide?\n\n A. drink 10-16 8oz glasses of water daily, even when not thirsty\n B. eat small meals more frequently, avoid too many carbohydrates\n C. consume only low-fat meats and pure grains\n D. increase complex carbohydrate consumption between meals",
		options: {
			A: "drink 10-16 8oz glasses of water daily, even when not thirsty",
			B: "eat small meals more frequently, avoid too many carbohydrates",
			C: "consume only low-fat meats and pure grains",
			D: "increase complex carbohydrate consumption between meals",
		},
		answer: "B",
		answer_explanation:
			"eat small meals more frequently, avoid too many carbohydrates\n\nThe general nutritional advice for a patient with chronic obstructive pulmonary disease is to eat smaller meals more frequently and to avoid excessive consumption of carbohydrates, which produce carbon dioxide and place a greater ventilatory load on the patient.",
	},
	{
		question:
			"The best way to determine the accuracy of a vane respirometer is a\n\n A. Geizler tube ionizer\n B. Douglas bag\n C. galvanic analyzer\n D. 1.5-liter calibrated syringe",
		options: {
			A: "Geizler tube ionizer",
			B: "Douglas bag",
			C: "galvanic analyzer",
			D: "1.5-liter calibrated syringe",
		},
		answer: "D",
		answer_explanation:
			"1.5-liter calibrated syringe\n\nA vane respirometer is a device that measures volume and must be calibrated from time to time. This can be done with a three-liter super syringe or a syringe that comes in 1.5 L. This syringe is certified and calibrated for accuracy and should be trusted above all other instruments in the pulmonary function laboratory.",
	},
	{
		question:
			"The respiratory therapist should recommend which of the following to confirm the placement of an 8.0 mm oral endotracheal tube?\n\n A. Chest radiograph\n B. Auscultation of the chest\n C. Observation of chest rise and symmetry\n D. Notation of the ET tube markings at the teeth",
		options: {
			A: "Chest radiograph",
			B: "Auscultation of the chest",
			C: "Observation of chest rise and symmetry",
			D: "Notation of the ET tube markings at the teeth",
		},
		answer: "A",
		answer_explanation:
			"Chest radiograph\n\nThere are several methods in which one may determine the proper position of an endotracheal tube. Those methods include such observations as symmetry of chest rise, breath sounds, and radiographic assessment. However, of these options only a radiographic assessment is confirming in nature and will show the absolute position of the endotracheal tube.",
	},
	{
		question:
			"Immediately after placing a sterile tracheostomy tube in a patient who has maintained a stoma for 4 years, the patient coughs vigorously and expectorates the tube out onto the sterile napkin resting on the chest of the patient. The therapist should\n\n A. immediately insert an obdurator into the stoma\n B. obtain a larger tracheostomy tube\n C. re-insert the expectorated trach tube\n D. obtain a new, sterile trach tube",
		options: {
			A: "immediately insert an obdurator into the stoma",
			B: "obtain a larger tracheostomy tube",
			C: "re-insert the expectorated trach tube",
			D: "obtain a new, sterile trach tube",
		},
		answer: "B",
		answer_explanation:
			"obtain a larger tracheostomy tube\n\nFor a patient who has maintained an open stoma for several years and easily expectorates a new tracheostomy tube, the patient is most likely in need of a larger airway.",
	},
	{
		question:
			"A physician is concerned about escalating pulmonary artery pressures in a patient with ARDS and is considering use of nitric oxide therapy. Which of the following would help to further assess pulmonary artery pressure?\n\n A. 64-slice computed tomography (CT scan)\n B. echocardiography with M-mode\n C. placement of a quadruple-lumen pulmonary artery catheter\n D. V/Q scan with contrast",
		options: {
			A: "64-slice computed tomography (CT scan)",
			B: "echocardiography with M-mode",
			C: "placement of a quadruple-lumen pulmonary artery catheter",
			D: "V/Q scan with contrast",
		},
		answer: "C",
		answer_explanation:
			"placement of a quadruple-lumen pulmonary artery catheter\n\nPulmonary artery pressures must be measured invasively with a pulmonary artery catheter. None of the other options here will suffice.",
	},
	{
		question:
			"A patient with a 10-year history of chronic lung disease and cor pulmonale is the intensive care unit receiving volume-controlled ventilation in the A/C mode. The following data shows:\n\nmPAP 21 torr \nPWP 8 torr\nright atrial preload 10 torr\nC.I. 2.2 L/min/m2\n\nWhich of the following would be most helpful in reducing pulmonary vasculature pressures?\n A. NO therapy\n B. Heliox\n C. Inhaled Lidocaine\n D. Inhaled NO2",
		options: {
			A: "NO therapy",
			B: "Heliox",
			C: "Inhaled Lidocaine",
			D: "Inhaled NO2",
		},
		answer: "A",
		answer_explanation:
			"NO therapy\n\nNitric oxide therapy is useful in treating pulmonary hypertension. In this case, the patient has an increased mean pulmonary artery pressure with a normal pulmonary capillary wedge pressure. These two hemodynamic values, when observed together, suggest a build-up of pulmonary artery pressure due to the blood's inability to transition the vasculature of the lungs.",
	},
	{
		question:
			"What is the minute alveolar ventilation (L/min) of a 68-kg (150-lb) IBW patient who has a tidal volume of 500 mL and a respiratory rate of 14?\n\n A. 2.1\n B. 6.0\n C. 7.0\n D. 4.9",
		options: {A: "2.1", B: "6.0", C: "7.0", D: "4.9"},
		answer: "D",
		answer_explanation:
			"4.9\n\nTo determine the minute ventilation of the patient, one should multiply the tidal volume by the rate. \nMinute ventilation should be expressed as L/min, \ntidal volume must be translated to liters. \nTo subtract deadspace from the tidal volume, one must estimate deadspace by looking at the ideal body weight in lbs. \nIn this case, 150 lbs is about 150 mL of deadspace. Thus alveolar tidal volume (the amount of volume that reaches the alveoli) is 350 mL, or 0.35 L. This number should then be multiplied by the RR (14) to get the minute alveolar ventilation. (0.35 x 14 = 4.9)",
	},
	{
		question:
			"A patient with a history of cor pulmonale is receiving oxygen at 2 L/min by nasal cannula. The physician orders a target SpO2 of 90%. The following clinical and laboratory data is obtained:\n\nRR 18 \nHR 110\nBP 145/92 mm Hg\nSpO2 88% \n\npH 7.35\nPaCO2 72 torr\nPaO2 55 torr\nHCO3- 33 mEq/L\nBE +2 mEq/L\n\n\nThe respiratory therapist should recommend which of the following FIRST?\n A. increase oxygen flow to 4 L/min\n B. place on NIV\n C. switch to an air-entrainment mask at 28%\n D. administer oxygen by nonrebreather mask",
		options: {
			A: "increase oxygen flow to 4 L/min",
			B: "place on NIV",
			C: "switch to an air-entrainment mask at 28%",
			D: "administer oxygen by nonrebreather mask",
		},
		answer: "C",
		answer_explanation:
			"switch to an air-entrainment mask at 28%\n\nAn air-entrainment device is superior at delivering a consistent FIO2, which could help this patient achieve an SpO2 of 90%.",
	},
	{
		question:
			"A volume-pressure ventilator graphic is observed on a patient who is receiving VC A/C ventilation on the following settings:\n\nFIO2 0.4 \nMandatory rate 16/min\nTotal rate 20/min\nVT 450 mL\nFlow 50 L/min\nPEEP 5 cm H2O\n\n(FISH TAIL GRAPH)\n\nThe patient seems anxious and SpO2 is fluctuating between 89-94%. The therapist should suggest\n\nA. utilizing flow triggering\n B. increasing VT\n C. increasing inspiratory flow rate\n D. decreasing sensitivity",
		options: {
			A: "utilizing flow triggering",
			B: "increasing VT",
			C: "increasing inspiratory flow rate",
			D: "decreasing sensitivity",
		},
		answer: "A",
		answer_explanation:
			"utilizing flow triggering\n\nThis pressure-volume loop demonstrates that the patient is required to inhale significantly before the ventilator is triggered, thereby producing significant negative pressures to actuate a ventilator breath. This increase in work of breathing can cause the patient to deteriorate. One way of dealing with this is to increase the sensitivity so that the ventilator actuates more quickly with a negative deflection in pressure. However, this is not an option in the question. Flow triggering is another more sensitive way to detect patient effort and actuate a ventilator breath.",
	},
	{
		question:
			"An infrared PetCO2 detector is attached to the end of an ET tube on a patient who was just intubated after being discovered apneic for at least several minutes. What initial end-tidal CO2 reading would the respiratory therapist expect to observe once manual resuscitation begins?\n\n A. normal PetCO2 followed by a slight reduction\n B. high PetCO2 followed by a gradual decrease\n C. low PetCO2 followed by a gradual rise\n D. plateau PetCO2 followed by a steady decrease",
		options: {
			A: "normal PetCO2 followed by a slight reduction",
			B: "high PetCO2 followed by a gradual decrease",
			C: "low PetCO2 followed by a gradual rise",
			D: "plateau PetCO2 followed by a steady decrease",
		},
		answer: "C",
		answer_explanation:
			"low PetCO2 followed by a gradual rise\n\nFor a patient who was apneic, initial end-tidal CO2 readings will likely be low at first because CO2 has not been perfused across the alveolar capillary membrane into the alveoli. Therefore, initial readings will be low but will then slowly rise as the patient is ventilated. Eventually, exhaled CO2 will demonstrate a plateau and then gradually decrease.",
	},
	{
		question:
			"Massive diaphoresis would most likely be associated with which of the following conditions?\n\n A. CHF\n B. tuberculosis\n C. ARDS\n D. pulmonary hypotension",
		options: {
			A: "CHF",
			B: "tuberculosis",
			C: "ARDS",
			D: "pulmonary hypotension",
		},
		answer: "A",
		answer_explanation:
			"CHF\n\nMassive diaphoresis, of the options given, is most closely associated with congestive heart failure.",
	},
	{
		question:
			"Which of the following clinical outcomes is a possible side effect of aerosolized racemic epinephrine?\n\n A. blood anticoagulation\n B. bronchoconstriction\n C. tachycardia\n D. rebound effect",
		options: {
			A: "blood anticoagulation",
			B: "bronchoconstriction",
			C: "tachycardia",
			D: "rebound effect",
		},
		answer: "D",
		answer_explanation:
			"rebound effect\n\nOne potential problem with the use of aerosolized racemic epinephrine is something called the rebound effect. This means that after inhaling the substance and receiving relief, some patients, especially children, may experience a profound resurgence of the initial inflammation. That inflammation may exceed the initial presentation and therefore should be monitored closely. Commonly, children who are given racemic epinephrine in the emergency room, are held over for 24-hour monitoring.",
	},
	{
		question:
			"A respiratory therapist is assisting the physician in the performance of cardioversion for the treatment of an atrial arrhythmia. The therapist observes the following settings on the defibrillator:\n\nControl:\nsynch - off\npower - 100 J\nmode - monophasic\nenvironment - external\n\n\nWhich setting should the therapist change?\n A. Synch\n B. Power\n C. Environment\n D. Mode",
		options: {A: "Synch", B: "Power", C: "Environment", D: "Mode"},
		answer: "A",
		answer_explanation:
			"Synch\n\nCardioversion is a procedure done with a cardiac defibrillator and is generally used to treat or address atrial arrhythmias. While it is done with a defibrillator, there is an important distinction between true defibrillation and cardioversion. Cardioversion is completed with much lower energy settings and the shock itself is synchronized to the patient's heart. Specifically, when the defibrillator is activated the shock will be delivered exactly on the R wave of the patient's ECG waveform. The settings shown here indicate that synchronization is off and therefore, should be activated prior to administering defibrillation.",
	},
	{
		question:
			"A 70-year-old patient has the following pulmonary function results:\n\nPredicted:\nFVC - 5.80\nFEV1/FVC% - 70\nFEV1 - 4.21\nTLC - 6.90\nSVC - 6.00\n\nObserved:\nFVC - 3.20\nFEV1/FVC% - 72\nFEV1 - 3.44\nTLC - 4.69\nSVC - 6.00\n\nThe respiratory therapist should anticipate a treatment plan for\n\n A. moderate obstructive lung disease process\n B. mild obstructive pulmonary defect\n C. mild restrictive lung disease\n D. mixed restrictive and obstructive pulmonary defect",
		options: {
			A: "moderate obstructive lung disease process",
			B: "mild obstructive pulmonary defect",
			C: "mild restrictive lung disease",
			D: "mixed restrictive and obstructive pulmonary defect",
		},
		answer: "C",
		answer_explanation:
			"mild restrictive lung disease\n\nPulmonary function results show that the flow is above 70% which is considered normal. Therefore, the patient is not considered obstructive. However, SVC, which is the key indicator of restrictiveness, is less than 80% of predicted and indicates the patient is restrictive. To determine what 80% of predicted is for this patient, the SVC predicted volume of 6.0 L can be multiplied by eight to determine the 80% mark. 6x8 is 48. Putting the decimal back in place reveals an 80% mark of 4.8 L. Since this patient has an SVC of 3.84 L, the patient is considered to be restrictive.\n\nSVC is 6.0. To get 80% of that value, multiple 6.0 x 8 = 48. Move a decimal over (cause %) to get 4.8 L.\n\nSince SVC of 3.84 is less than the calculated, 4.8, this means SVC is below 80% therefore is restrictive",
	},
	{
		question:
			"A 48-year-old female completes the several FVL maneuvers. Both the expiratory and inspiratory side of the loops demonstrate a similar inverse pattern that is round in appearance. Which of the following could the respiratory therapist potentially conclude about this pattern?\n\n A. a restrictive pulmonary defect is likely present\n B. a fixed upper airway obstruction is present\n C. an obstructive pulmonary defect is likely present\n D. the shape of the loop demonstrates normal pulmonary function",
		options: {
			A: "a restrictive pulmonary defect is likely present",
			B: "a fixed upper airway obstruction is present",
			C: "an obstructive pulmonary defect is likely present",
			D: "the shape of the loop demonstrates normal pulmonary function",
		},
		answer: "B",
		answer_explanation:
			"a fixed upper airway obstruction is present\n\nIn a normal flow volume loop, the inspiratory side of the loop (the topside), is vastly different than the bottom side of the loop. However, when upper loop resembles the bottom part of the loop in shape (this is often called a round loop) it indicates that the patient is having difficulty getting air in AND out. This is most commonly associated with a fixed upper airway obstruction or vocal cord paralysis or cancer.",
	},
	{
		question:
			"A patient with ARDS has a ruptured oral ET tube cuff, necessitating tube replacement. Which of the following techniques will facilitate the transition to a new ET tube with minimal patient stress?\n\n A. use of an AEC\n B. use of a gum elastic device\n C. intubation video assist device\n D. intubation with a bronchoscope",
		options: {
			A: "use of an AEC",
			B: "use of a gum elastic device",
			C: "intubation video assist device",
			D: "intubation with a bronchoscope",
		},
		answer: "A",
		answer_explanation:
			"use of an AEC\n\nProvision of mechanical ventilatory support without interruption is critical on a patient with ARDS. Therefore, a requirement to replace the endotracheal tube should be met with great caution. Of the options given, use of an AEC (airway exchange catheter) will provide the least stressful, fastest way to exchange the tube.",
	},
	{
		question:
			'While instructing a post-bariatric surgery patient on the technique regarding the use of an incentive spirometer, the therapist will include which of the following instructions?\n\n A. "this exercise will help the doctor to know your inspiratory capacity as you recover"\n B. "this practice will increase your FRC and decrease your chance of pneumonia"\n C. "this therapy will help improve gas-exchanging surface area in the alveoli"\n D. "the purpose of the therapy is to keep all parts of the lungs expanded"',
		options: {
			A: '"this exercise will help the doctor to know your inspiratory capacity as you recover"',
			B: '"this practice will increase your FRC and decrease your chance of pneumonia"',
			C: '"this therapy will help improve gas-exchanging surface area in the alveoli"',
			D: '"the purpose of the therapy is to keep all parts of the lungs expanded"',
		},
		answer: "D",
		answer_explanation:
			'"the purpose of the therapy is to keep all parts of the lungs expanded"\n\nThe purpose of a volume-oriented incentive spirometer is to keep all aspects of the lungs inflated and to prevent the collapsing of alveoli.',
	},
	{
		question:
			"A 31-year-old female exhibits a stuffed-up nose, a periodic cough, and bouts of dyspnea. She indicates the symptoms return every spring. Which of the following drug classifications should the respiratory therapist recommend to help control the patient's symptoms?\n\n A. IgE immunoglobulin agonist\n B. Mucolytic\n C. beta I agonist\n D. leukotriene inhibitor",
		options: {
			A: "IgE immunoglobulin agonist",
			B: "Mucolytic",
			C: "beta I agonist",
			D: "leukotriene inhibitor",
		},
		answer: "D",
		answer_explanation:
			"leukotriene inhibitor\n\nLeukotriene medication is helpful in long-term control of inflammatory processes in the upper and lower airways.",
	},
	{
		question:
			"Which of the following would provide continuous pressure in the oropharynx to help minimize soft tissue occlusion?\n\n A. IPPB\n B. CPAP\n C. PRVC\n D. APRV",
		options: {A: "IPPB", B: "CPAP", C: "PRVC", D: "APRV"},
		answer: "B",
		answer_explanation:
			"CPAP\n\nCPAP is used, especially in cases of obstructive sleep apnea, to put pressure on oral soft tissues and keep them from relaxing and collapsing over the airway, causing obstruction.",
	},
	{
		question:
			"A premature neonate with respiratory distress receives a dose of exogenous surfactant. Three hours following the administration, distress returns. FIO2 has required titration from 0.40 to 0.70. The respiratory therapist should recommend which of the following FIRST?\n\n A. ECMO\n B. chest radiography\n C. mechanical ventilation with NAVA\n D. repeat surfactant administration",
		options: {
			A: "ECMO",
			B: "chest radiography",
			C: "mechanical ventilation with NAVA",
			D: "repeat surfactant administration",
		},
		answer: "B",
		answer_explanation:
			"chest radiography\n\nBecause improvement from exogenous surfactant does not persist, the infant may have a more significant pulmonary problem. This should be investigated with chest radiography.",
	},
	{
		question:
			"Fine crackles are auscultated at the bases of both lung fields. This is most consistent with the presence of\n A. atelectasis\n B. pleural friction rub\n C. tuberculosis\n D. pulmonary secretions",
		options: {
			A: "atelectasis",
			B: "pleural friction rub",
			C: "tuberculosis",
			D: "pulmonary secretions",
		},
		answer: "A",
		answer_explanation:
			"atelectasis\n\nFine crackles heard about the bases of the pulmonary tree are most closely associated with atelectasis.",
	},
	{
		question:
			"An adult male patient receiving mechanical ventilatory support has the following pressure-volume graphics pre and post lung recruitment procedure. The respiratory therapist should conclude\n\n10 AM: (FISH TAIL AND BEAK)\n1 PM: (FISH TAIL)\n\nA. tidal volume has inadvertently been increased\n B. lung recruitment has been successful\n C. further lung recruitment procedures should be placed on hold\n D. autoPEEP level has decreased",
		options: {
			A: "tidal volume has inadvertently been increased",
			B: "lung recruitment has been successful",
			C: "further lung recruitment procedures should be placed on hold",
			D: "autoPEEP level has decreased",
		},
		answer: "B",
		answer_explanation:
			"lung recruitment has been successful\n\nThe pressure-volume loops shown in this set of ventilator graphics shows that the patient was initially over distended. However, without intervention, the over distention spontaneously dissipates. This would suggest that the lungs have essentially increased in their capacity, or in other words, alveoli have been recruited.",
	},
	{
		question:
			"A 24-year-old firefighter is brought to the emergency department after being trapped for 10 minutes in a collapsed, burning building. The respiratory therapist notes marked inflammation around the face and oropharynx. Nasal hairs appear to be singed. The following arterial blood gas data is noted while the patient is breathing air:\n\npH 7.52 \nPaCO2 25 torr\nPaO2 102 torr\nHCO3- 23 mEq/L\nBE 0 mEq/L\n\n\nThe therapist should FIRST recommend which of the following?\n A. oral intubation\n B. hyperbaric oxygen therapy\n C. initiate aerosolized racemic epinephrine\n D. check COHb",
		options: {
			A: "oral intubation",
			B: "hyperbaric oxygen therapy",
			C: "initiate aerosolized racemic epinephrine",
			D: "check COHb",
		},
		answer: "A",
		answer_explanation:
			"oral intubation\n\nA key concern for a patient who has had exposure to heated gases, such as might be seen in firefighters, is inflammation of the upper airway and potential complete obstruction. In this case, the presence of singed nasal hairs and inflammation visualize about the face and oropharynx is enough to suspect significant mucosal exposure to heated gases. Therefore, protection of the airway is appropriate through oral intubation.",
	},
	{
		question:
			"A patient with asthma shows a small improvement in peak expiratory flow rates from 45% to 49% of predicted after 1 hour of continuous bronchodilator therapy with 10 mg/hr albuterol. Which of the following should the therapist consider NEXT?\n A. ECMO\n B. hyperbaric therapy\n C. 1.25 mg Xopenex q 20 min X 3 doses\n D. heliox therapy",
		options: {
			A: "ECMO",
			B: "hyperbaric therapy",
			C: "1.25 mg Xopenex q 20 min X 3 doses",
			D: "heliox therapy",
		},
		answer: "D",
		answer_explanation:
			"heliox therapy\n\nAfter several attempts have been made to bronchodilate a patient with asthma, the use of Heliox can help to immediately lower airway resistance while the source of the bronchoconstriction can be addressed by other means.",
	},
	{
		question:
			"The following information is available on the ventilator flow sheet of a 55-year old patient who is 3 days post appendectomy. Following the procedure, the patient sustained a pneumothorax and has been recovering in the intensive care unit.\n\n8:00 AM:\nPeak pressure- 25\nplateau pressure- 18\nPEEP- 5\nVT- 500\n10:00 AM:\nPeak pressure- 35\nplateau pressure- 23\nPEEP- 10\nVT- 500\n12:00 PM:\nPeak pressure- 36\nplateau pressure- 22\nPEEP- 10\nVT- 500\n\n\nThe therapist can conclude which of the following is present?\n A. decreasing pulmonary compliance, increasing airway resistance\n B. pulmonary stiffening, decreasing dynamic compliance\n C. increased pulmonary elastance\n D. increasing airway resistance, no change in pulmonary compliance",
		options: {
			A: "decreasing pulmonary compliance, increasing airway resistance",
			B: "pulmonary stiffening, decreasing dynamic compliance",
			C: "increased pulmonary elastance",
			D: "increasing airway resistance, no change in pulmonary compliance",
		},
		answer: "D",
		answer_explanation:
			"increasing airway resistance, no change in pulmonary compliance\n\nIn this data, increased airway resistance is manifested by an increase in peak pressure. It is tempting to assume decreased pulmonary compliance because plateau pressure is also rising. However when one looks closely, it is noted that PEEP has undergone a change during the study, which accounts for the change in plateau pressure. This will also accordingly change the peak inspiratory pressure but this data shows an increase greater than the amount of increase in the PEEP and therefore airway resistance is increasing.",
	},
	{
		question:
			"A respiratory therapist is assisting a physician with a bronchoscopy procedure for the purpose of pulmonary tissue extraction and analysis for cancerous cells. The patient is alert and breathing spontaneously. Which of the following complication should the therapist prepare for prior to the procedure?\n A. hypotension\n B. significant stimulation of the cough reflex\n C. increased risk for nosocomial infection\n D. decreased pulmonary compliance during the procedure",
		options: {
			A: "hypotension",
			B: "significant stimulation of the cough reflex",
			C: "increased risk for nosocomial infection",
			D: "decreased pulmonary compliance during the procedure",
		},
		answer: "B",
		answer_explanation:
			"significant stimulation of the cough reflex\n\nUsing a bronchoscope on an alert patient would most likely elicit a significant cough reflex. This would be the primary side effect of the treatment and could cause a profound state of hypoxemia. To minimize the cough reflex, aerosolized lidocaine is often administered prior to the procedure.",
	},
	{
		question:
			"A patient is receiving PC ventilation with the following data:\n\n11:00 PM:\nPeak pressure- 25\nplateau pressure- 32\nVT- 500\nPEEP- 5\n10:00 AM:\nPeak pressure- 34\nplateau pressure- 41\nVT- 500\nPEEP- 5\n\nThis data indicates a\n A. likely mucus plug\n B. decrease in dynamic compliance\n C. change in airway resistance\n D. decrease in pulmonary compliance",
		options: {
			A: "likely mucus plug",
			B: "decrease in dynamic compliance",
			C: "change in airway resistance",
			D: "decrease in pulmonary compliance",
		},
		answer: "D",
		answer_explanation:
			"decrease in pulmonary compliance\n\nThis data shows increasing peak pressures as well as increasing plateau pressures. The plateau pressure appears to be rising at the same rate of the peak pressures, suggesting there is a decrease in pulmonary compliance.",
	},
	{
		question:
			"A newborn has a one-minute APGAR score of 6. The respiratory therapist should\n A. obtain an arterial blood gas\n B. begin cardiopulmonary resuscitation\n C. administer supplemental oxygen\n D. monitor the infant, reassess in 4 minutes",
		options: {
			A: "obtain an arterial blood gas",
			B: "begin cardiopulmonary resuscitation",
			C: "administer supplemental oxygen",
			D: "monitor the infant, reassess in 4 minutes",
		},
		answer: "C",
		answer_explanation:
			"administer supplemental oxygen\n\nAn Apgar score can be used to determine the appropriate intervention of an infant without knowing the details of the score. A score from 0-3 indicates a need for cardiopulmonary resuscitation. A score from 4-6 indicates the infant requires supplemental oxygen, warming, and general stimulation. A score of 7-10 is normal in indicates routine care, which includes drying the infant and placing on a radiant warmer.",
	},
	{
		question:
			"Which of the following types of indicators is used to show that a piece of nondisposable equipment did not go through a proper sterilization process?\n A. biological spores indicator\n B. misshapen equipment\n C. torn package\n D. chemical tape indicator",
		options: {
			A: "biological spores indicator",
			B: "misshapen equipment",
			C: "torn package",
			D: "chemical tape indicator",
		},
		answer: "D",
		answer_explanation:
			"chemical tape indicator\n\nA chemical tape indicator found inside an enclosed package of nondisposable equipment can be used to determine if the equipment was processed through the sterilization procedure correctly. From this method, practitioners can peer into the package and determine the likelihood of a sterile condition. Keep in mind that the tape may only indicate if the process was followed but does not indicate the presence or absence of viable spores (living organisms).",
	},
	{
		question:
			"Which of the following medications is classified as a decongestant?\n\n A. ipratropium bromide\n B. Tiotropium (Spiriva)\n C. cromolyn sodium (Intal)\n D. racemic epinephrine",
		options: {
			A: "ipratropium bromide",
			B: "Tiotropium (Spiriva)",
			C: "cromolyn sodium (Intal)",
			D: "racemic epinephrine",
		},
		answer: "D",
		answer_explanation:
			"racemic epinephrine\n\nAlthough not well known, racemic epinephrine is classified as a decongestant.",
	},
	{
		question:
			"While administering a breathing treatment with 1.25 mg Xopenex, the respiratory therapist observes an increase in HR from 90 to 122/min. The patient complains of nervousness and nausea. The therapist should\n A. decrease the dosage of Xopenex\n B. discontinue all Xopenex treatments for now, notify the medical director\n C. switch to Azmacort, 2 puffs, q4 hrs\n D. Switch to 2.0 mg albuterol",
		options: {
			A: "decrease the dosage of Xopenex",
			B: "discontinue all Xopenex treatments for now, notify the medical director",
			C: "switch to Azmacort, 2 puffs, q4 hrs",
			D: "Switch to 2.0 mg albuterol",
		},
		answer: "A",
		answer_explanation:
			"decrease the dosage of Xopenex\n\nThis patient is exhibiting an adverse reaction from the drug Xopenex. Because the adult therapeutic dose range is from 0.63 mg to 1.25 mg, there is room for the dosage to be decreased. This is the best option.",
	},
	{
		question:
			"A patient with asthma is receiving a second dose of albuterol, 1.25 mg. During the treatment, the patient's HR increases from 90 to 119. The respiratory therapist should\n A. decrease the dosage of albuterol\n B. switch to tiotropium bromide (Spiriva)\n C. switch to Xopenex 0.63 mg\n D. administer budesonide",
		options: {
			A: "decrease the dosage of albuterol",
			B: "switch to tiotropium bromide (Spiriva)",
			C: "switch to Xopenex 0.63 mg",
			D: "administer budesonide",
		},
		answer: "C",
		answer_explanation:
			"switch to Xopenex 0.63 mg\n\nAs this patient's heart rate changes with the albuterol treatment from 90 to 119, it must be assumed that the patient is experiencing an adverse reaction to the albuterol. Normally, reducing the dose would be appropriate. However, this patient is already on the lowest therapeutic dose as listed in the PDR. Therefore, of the options given, a change in bronchodilator medication is most appropriate. Xopenex offers the most appealing change as it is a similar class and type of bronchodilator.",
	},
	{
		question:
			"Immediately after the insertion of a nasopharyngeal airway (nasal trumpet), the patient begins to cough uncontrollably. The therapist should consider\n\n A. withdrawing the airway by 1 cm\n B. reinserting the airway with a viscous lidocaine lubricant\n C. spaying the oropharynx with benzocaine\n D. replacing the airway with one that is shorter",
		options: {
			A: "withdrawing the airway by 1 cm",
			B: "reinserting the airway with a viscous lidocaine lubricant",
			C: "spaying the oropharynx with benzocaine",
			D: "replacing the airway with one that is shorter",
		},
		answer: "D",
		answer_explanation:
			"replacing the airway with one that is shorter\n\nThe patient's response to cough vigorously immediately after insertion of the nasal trumpet indicates the airway is likely too long. It should be replaced with a shorter one.",
	},
	{
		question:
			"A respiratory therapist notes a blunted costophrenic angle in the lower right lung periphery when viewing a patient's PA chest radiograph. The patient is demonstrating ventilatory distress after being involved in a bicycle accident at high speed. What should the therapist recommend to further investigate the problem in the lower right lung periphery?\n A. BAL (bronchoalveolar lavage)\n B. ventilation/perfusion scan\n C. lateral decubitus chest radiograph\n D. AP chest radiograph",
		options: {
			A: "BAL (bronchoalveolar lavage)",
			B: "ventilation/perfusion scan",
			C: "lateral decubitus chest radiograph",
			D: "AP chest radiograph",
		},
		answer: "C",
		answer_explanation:
			"lateral decubitus chest radiograph\n\nWhen suspecting a pleural effusion, the key radiographic tests is a lateral decubitus chest radiograph. A bronchoalveolar lavage is used to clean out the lungs and a ventilation perfusion scan will help determine blood flow adequacy and gas flow adequacy in the pulmonary vasculature and alveoli, respectively, and is not relevant in this case. Merely changing to an AP x-ray will not help diagnose a pleural effusion.",
	},
	{
		question:
			"The parents of a 9-year-old patient with a history of asthma have been unable to identify triggers to their child's asthmatic episodes, in spite of actions such a removing their pet, replacing the child's pillow, and cleaning carpeted areas in the home. What might the respiratory therapist recommend?\n A. use of inhaled cromolyn sodium (Intal)\n B. methalcholine challenge\n C. allergen testing\n D. bronchoalveolar lavage (BAL)",
		options: {
			A: "use of inhaled cromolyn sodium (Intal)",
			B: "methalcholine challenge",
			C: "allergen testing",
			D: "bronchoalveolar lavage (BAL)",
		},
		answer: "C",
		answer_explanation:
			"allergen testing\n\nIn many cases, patients who have extrinsic asthma can identify environmental triggers surrounding them and can remove them as needed. These triggers are most often things such as cigarette smoke, pet dander, and dust mites. When the triggers to asthmatic episodes are difficult to discover, more extensive testing may be done to determine the kind of allergens to which the patient is sensitive. This is done by making a series of injections on the arm and labeling the injection sites to look for inflammation and induration.",
	},
	{
		question:
			"The following ECG tracing is recorded for a 60-year-old female who is being monitored in the emergency department with a chief complaint of chest pain. Based on this rhythm, the respiratory therapist will note which of the following in the medical record?\n\nA. the patient has sinus tachycardia\n B. the patient is currently having a mild heart attack\n C. infarcted cardiac tissue is present\n D. cardiac ischemia is present",
		options: {
			A: "the patient has sinus tachycardia",
			B: "the patient is currently having a mild heart attack",
			C: "infarcted cardiac tissue is present",
			D: "cardiac ischemia is present",
		},
		answer: "D",
		answer_explanation:
			"cardiac ischemia is present\n\nChest pain, as well as an ECG that demonstrates inverted T waves, is suggestive of myocardial ischemia.",
	},
	{
		question:
			"While following orders to reduce the length of an ET tube, the therapist accidently cuts the ballard suction catheter that was inadvertently inserted into the ET tube by a few centimeters. The therapist is unable to locate the catheter fragment. The therapist should immediately\n\n A. perform an emergent tracheotomy\n B. send the patient to MRI\n C. extubate the patient\n D. recommend a bronchoscopy",
		options: {
			A: "perform an emergent tracheotomy",
			B: "send the patient to MRI",
			C: "extubate the patient",
			D: "recommend a bronchoscopy",
		},
		answer: "D",
		answer_explanation:
			"recommend a bronchoscopy\n\nThis situation suggests that during the severing of the endotracheal tube, the suction catheter was also inadvertently cut. Although the respiratory therapist cannot locate the severed portion visually, it can be assumed that the fragment has entered in through the endotracheal tube and is possibly in the patient's lungs. Although, a chest radiograph could identify the radio-opaque line on the suction catheter and confirm its location, a bronchoscopy could provide both visual evidence and therapeutic response, which would allow immediate removal of the fragment.",
	},
	{
		question:
			"Which of the following is most likely in a patient who is complaining of a non-productive cough that started 2 months ago?\n A. bronchial cancer\n B. bronchitis\n C. foreign body aspiration\n D. emphysema",
		options: {
			A: "bronchial cancer",
			B: "bronchitis",
			C: "foreign body aspiration",
			D: "emphysema",
		},
		answer: "A",
		answer_explanation:
			"bronchial cancer\n\nA long-term, non-productive cough that that persists for periods ranging from three weeks to several months is usually associated with a growth or mass in the bronchial tree. The mass may be benign or cancerous but will irritate the bronchial tree and cause a nonproductive cough as it grows.",
	},
	{
		question:
			"Which of the following ventilator controls will be primarily used when employing an alveolar recruitment strategy?\n\n A. high pressure limit\n B. I:E ratio\n C. inspiratory flow\n D. PEEP",
		options: {
			A: "high pressure limit",
			B: "I:E ratio",
			C: "inspiratory flow",
			D: "PEEP",
		},
		answer: "D",
		answer_explanation:
			"PEEP\n\nMost alveolar recruitment strategies include use of elevated PEEP levels for small periods of time. PEEP provides a baseline pressure that may be used to prevent alveolar collapse and recruit already collapsed alveoli.",
	},
	{
		question:
			"A patient's tissue oxygen consumption has increased and cardiac output has decreased. Which of the following is also likely true?\n A. A-aDO2 has decreased\n B. cardiac index has increased\n C. SaO2-SVO2 has decreased\n D. C(a-v)O2 has increased",
		options: {
			A: "A-aDO2 has decreased",
			B: "cardiac index has increased",
			C: "SaO2-SVO2 has decreased",
			D: "C(a-v)O2 has increased",
		},
		answer: "D",
		answer_explanation:
			"C(a-v)O2 has increased\n\nWhen cardiac output decreases, the speed of blood flow across the tissue bed is also decreased. As blood flows slower over tissues, the tissues have less ability and time to absorb oxygen molecules and therefore will demonstrate increased oxygen consumption. As oxygen consumption increases, the difference in arterial oxygenation and venous oxygenation also increases. Thus, an increase in C(a-v)O2 is observed.",
	},
	{
		question:
			"After completing three flow-volume loops on a bedside pulmonary function screening device, the therapist notices that there are FVC maneuvers that are higher than some of the SVC maneuvers. The therapist should have the patient\n A. repeat the FVC maneuvers\n B. repeat the SVC maneuvers\n C. accept the results as normal.\n D. repeat the entire flow-volume loop maneuver",
		options: {
			A: "repeat the FVC maneuvers",
			B: "repeat the SVC maneuvers",
			C: "accept the results as normal.",
			D: "repeat the entire flow-volume loop maneuver",
		},
		answer: "B",
		answer_explanation:
			"repeat the SVC maneuvers\n\nIn pulmonary function testing, a patient should reliably be able to produce a higher slow vital capacity compared to a forced vital capacity. This is due to the difference in laminar and turbulent air flow that occurs in the patient's airways upon exhalation. When exhalation is forceful, turbulent airflow is present and less gas may be exhaled. Therefore, in this case, because the patient has produced FVC maneuvers that are higher in volume than their SVC maneuvers, it must indicate that their original slow vital capacity maneuvers were not at the patient's full effort or capability. Thus, the SVC maneuvers must be repeated.",
	},
	{
		question:
			"Which of the following may be used to determine a patient's ability to cough forcefully?\n A. MEP\n B. minute ventilation\n C. RSBI\n D. VT",
		options: {A: "MEP", B: "minute ventilation", C: "RSBI", D: "VT"},
		answer: "A",
		answer_explanation:
			"MEP\n\nOf the options offered, a maximum expiratory pressure value can be used to assess a patient's ability to generate a forceful cough. Minute ventilation, tidal volume, and rapid shallow breathing index will not be helpful in assessing the effectiveness of a patient's cough.",
	},
	{
		question:
			"A 48-year-old patient in the hospital for pneumonia is found to be lethargic and uncommunicative. Chest rise is diminished. Vomitus is observed on the patient's chest. SpO2 is 84% on a 50% air-entrainment mask. Pulse is present with a variable rhythm. Blood pressure is 90/45 mm Hg. The respiratory therapist should\n A. begin manual ventilation with a bag/valve mask\n B. activate the rapid response team\n C. obtain an ABG, STAT\n D. perform NT suction",
		options: {
			A: "begin manual ventilation with a bag/valve mask",
			B: "activate the rapid response team",
			C: "obtain an ABG, STAT",
			D: "perform NT suction",
		},
		answer: "B",
		answer_explanation:
			"activate the rapid response team\n\nIn a hospital, when a patient is found to be marginal, the therapists need not rely solely on his or her own discretion with regard to reaction to the patient's condition. In such cases, many hospitals have what is called a medical emergency team or MET, also called a rapid response team. This team is especially important when the clinical evidence suggests that life-saving intervention MAY be necessary.",
	},
	{
		question:
			"A patient with suspected laryngotracheobronchitis is demonstrating moderate stridor with a barking cough. Which of the following should the respiratory therapist consider?\n\n A. nebulized epinephrine\n B. heated bland aerosol by mask\n C. aerosolized Lidocaine by mask\n D. administration of an aerosolized decongestant",
		options: {
			A: "nebulized epinephrine",
			B: "heated bland aerosol by mask",
			C: "aerosolized Lidocaine by mask",
			D: "administration of an aerosolized decongestant",
		},
		answer: "D",
		answer_explanation:
			"administration of an aerosolized decongestant\n\nModerate stridor may be treated with racemic epinephrine. This drug is classified as a decongestant. This alpha-1 medication can constrict vessels and tissues and reduce inflammation. If stridor is considered to be severe or marked, racemic epi not the best choice. An airway should be established immediately. This action is preferred over racemic epinephrine because of the time it takes for the medication to have effect. Therefore, racemic epinephrine should be used in cases involving mild and moderate stridor.",
	},
	{
		question:
			"A patient is receiving oxygen by air-entrainment heated aerosol set at FIO2 0.60. The flow meter shows a flow of 12 L/min. What is the approximate total flow of gas to the patient?\n A. 24 L/min\n B. 60 L/min\n C. 12 L/min\n D. 36 L/min",
		options: {A: "24 L/min", B: "60 L/min", C: "12 L/min", D: "36 L/min"},
		answer: "A",
		answer_explanation:
			"24 L/min\n\nEach air-entrainment device, depending on the FIO2 chosen, has a specific ratio of oxygen to air. For 60% the air-oxygen ratio is 1:1. To determine total flow one must add each element of the ratio (in this case one plus one), and multiply is by the indicated flow on the oxygen flow meter, which in this case is 12 L/min. Therefore, the total flow is 2x12 L/min which equals 24 L/min.",
	},
	{
		question:
			"Immediately after delivering a small volume nebulizer treatment with albuterol to a patient with an acute asthmatic episode, the respiratory therapist observes breath sounds that were diminished before the treatment and now indicate wheezing. The patient's heart rate has changed from 110/min pre treatment to 102/min after the treatment. The therapist should recommend which of the following?\n A. administer another treatment with albuterol\n B. administer intravenous methylprednisolone\n C. switch to aerosolized Xopenex\n D. change the medication to Spiriva",
		options: {
			A: "administer another treatment with albuterol",
			B: "administer intravenous methylprednisolone",
			C: "switch to aerosolized Xopenex",
			D: "change the medication to Spiriva",
		},
		answer: "A",
		answer_explanation:
			"administer another treatment with albuterol\n\nThe evolution of breath sounds from diminished to wheezing suggests that the patient's airways are opening up. Wheezing can only occur when air passes through airways. As constriction resolves, more air passes through airways which can cause a period of increased wheezing. This is a good indication that the medication is effective and should be continued.",
	},
	{
		question:
			"Which of the following would most likely increase the possibility for nosocomial infection?\n A. having an HME inline for 96 hours\n B. use of multi dose bronchodilator medication\n C. infrequent changing of the ventilator circuit\n D. use of closed in-line suction catheters",
		options: {
			A: "having an HME inline for 96 hours",
			B: "use of multi dose bronchodilator medication",
			C: "infrequent changing of the ventilator circuit",
			D: "use of closed in-line suction catheters",
		},
		answer: "B",
		answer_explanation:
			"use of multi dose bronchodilator medication\n\nOf the options given, use of a multi-dose bronchodilator medication would be most likely to increase the possibility or rate of nosocomial infection. This practice has faded in recent years but respiratory therapist commonly carried large bottles of medications with droppers in them to deliver to an individual patient. Because the dropper, which is sterile, could enter the field of the patient's small volume nebulizer, pathogenic organisms could be transmitted. Since this discovery, the field has moved towards unit dose medications in disposable containers. Having an HME in-line for 96 hours is not advisable but would not result in an increase of nosocomial infections, which is an infection received from another patient.",
	},
	{
		question:
			"What is the dynamic compliance in cm/H2O based on the following pressure-volume ventilator graphic?\n\n(NO FISH TAIL)\n\nA. 24\n B. 20\n C. 15\n D. 17",
		options: {A: "24", B: "20", C: "15", D: "17"},
		answer: "A",
		answer_explanation:
			"24\n\nTo determine dynamic compliance, tidal volume is divided by plateau pressure after subtracting any PEEP. In this case, the specific numbers are not provided directly. They must be extracted from the ventilator graphic itself. To determine volume, locate the highest level of the pressure-volume loop and then examine that level on the vertical volume axis. In this case, it shows to be 600 mL. To determine peak pressure, once again locate the top of the loop and proceed down toward the X axis to determine the peak pressure. This graph shows a peak pressure of 35 cm H2O. Finally, PEEP must be subtracted before the calculation can be done. To determine the level of PEEP, locate the farthest bottom or corner of the loop and examine the X axis. This graphic shows a PEEP of 5 cm/H2O. Therefore, 600 / (35-5) = 20 mL/cm H2O",
	},
	{
		question:
			"The parents of a 10-day old infant are reporting they feel their baby stops breathing sometimes when sleeping. The couple have lost a previous child to sudden infant death syndrome. Which of the following should the respiratory therapist recommend?\n A. telling the parents that some apnea is normal for a 10-day-old infant\n B. a home apnea monitor\n C. non-invasive ventilatory support at night\n D. caffeine injections daily for 20 days, then reassess the situation",
		options: {
			A: "telling the parents that some apnea is normal for a 10-day-old infant",
			B: "a home apnea monitor",
			C: "non-invasive ventilatory support at night",
			D: "caffeine injections daily for 20 days, then reassess the situation",
		},
		answer: "B",
		answer_explanation:
			"a home apnea monitor\n\nBased on the complaints of the parents, indicating the patient may be experiencing apnea, in conjunction with the history of a previous child lost to SIDS, placing a home apnea monitor in infants room may be helpful. An apnea monitor will both provide information to healthcare workers for analysis and create alarms for parents who may need to intervene to save their child's life in the case of significant apnea.",
	},
	{
		question:
			"A firefighter who was intubated after inhalation of heated gases is receiving VC A/C ventilation and is being monitored by a quadruple-lumen pulmonary artery catheter. The following recent information is recorded on the patient's medical record:\n\nCVP 15 cm H2O \nmPAP 21 mm Hg\nPCWP 8 mm Hg\nC.I. 2.5 L/min/m2\n\nThe therapist should be most concerned about\nA. fluid overload\n B. reduced cardiac output\n C. right heart failure\n D. pulmonary hypertension",
		options: {
			A: "fluid overload",
			B: "reduced cardiac output",
			C: "right heart failure",
			D: "pulmonary hypertension",
		},
		answer: "D",
		answer_explanation:
			"pulmonary hypertension\n\nThe hemodynamic data here shows an elevated CVP, an elevated mean pulmonary artery pressure value, and normal PCWP and cardiac index values. This is consistent with pulmonary hypertension which should be of primary concern in this case.",
	},
	{
		question:
			"For which of the following reasons would a respiratory care department create and maintain patient care protocols?\n A. better patient outcomes\n B. improved work efficiency\n C. increase respiratory care field scope\n D. decrease healthcare costs",
		options: {
			A: "better patient outcomes",
			B: "improved work efficiency",
			C: "increase respiratory care field scope",
			D: "decrease healthcare costs",
		},
		answer: "A",
		answer_explanation:
			"better patient outcomes\n\nThe key advantage to patient-care protocols is standardized care and better patient outcomes.",
	},
	{
		question:
			"Which APGAR score necessitates the delivery of basic and/or advanced cardiac life support for a newborn?\n A. 5\n B. 7\n C. 10\n D. 2",
		options: {A: "5", B: "7", C: "10", D: "2"},
		answer: "D",
		answer_explanation:
			"2\n\nAn APGAR score is a 10-point scoring system that helps to know what kind of intervention for a newborn is appropriate. An APGAR score between 0-3 indicates immediate cardiopulmonary resuscitation. A score between 4-6 suggests that supplemental oxygen and general stimulation of the infant is required. A score between 7-10 indicates a normal, healthy infant, which means routine care is appropriate.",
	},
	{
		question:
			"A patient vomits and aspirates during postural drainage and percussion while in the appropriate position to drain the left lower lobe. The respiratory therapist's immediate reaction should be to\n A. place the patient in the upper right lobe drainage position\n B. implement incentive spirometry\n C. place the patient in the right lower lobe drainage position\n D. suction the patient's oropharynx",
		options: {
			A: "place the patient in the upper right lobe drainage position",
			B: "implement incentive spirometry",
			C: "place the patient in the right lower lobe drainage position",
			D: "suction the patient's oropharynx",
		},
		answer: "C",
		answer_explanation:
			"place the patient in the right lower lobe drainage position\n\nWhen somebody vomits during postural drainage and percussion, when draining a specific side, the immediate response should be to drain the opposite side.",
	},
	{
		question:
			"According to the ARDSnet protocol, tidal volume on a mechanically ventilated patient should be kept between\n A. 6-8 mL/kg\n B. 2-4 mL/kg\n C. 8-10 mL/kg\n D. 4-6 mL/kg",
		options: {A: "6-8 mL/kg", B: "2-4 mL/kg", C: "8-10 mL/kg", D: "4-6 mL/kg"},
		answer: "D",
		answer_explanation:
			"4-6 mL/kg\n\nAccording to the ARDSnet protocol, appropriate tidal volume is between 4-6 mL/kg.",
	},
	{
		question:
			"A patient who was intubated for pneumonia and is receiving VC SIMV ventilation is ordered for bronchial hygiene assistance through high-frequency chest wall oscillation. Which of the following may also help the patient clear secretions?\n A. serial coughing\n B. endotracheal suctioning\n C. teaching huff cough technique\n D. quad coughing",
		options: {
			A: "serial coughing",
			B: "endotracheal suctioning",
			C: "teaching huff cough technique",
			D: "quad coughing",
		},
		answer: "B",
		answer_explanation:
			"endotracheal suctioning\n\nBecause the patient is intubated, endotracheal suctioning must be employed to remove secretions once other methods have helped mobilize secretions from the lower distal areas up to the mainstem bronchus and trachea. Huff coughing, serial coughing, and Quad coughing are best done in non-intubated patients.",
	},
	{
		question:
			"A 15-year-old patient with muscular dystrophy and pneumonia continue having difficulty expectorating secretions. Which of the following would provide most assistance with bronchial hygiene?\n A. vibratory PEP therapy\n B. huff coughing\n C. IPPV\n D. postural drainage and percussion",
		options: {
			A: "vibratory PEP therapy",
			B: "huff coughing",
			C: "IPPV",
			D: "postural drainage and percussion",
		},
		answer: "C",
		answer_explanation:
			"IPPV\n\nThe problem with muscular dystrophy is that the patient may have significant difficulty inspiring enough tidal volume to then generate a forceful exhalation and an effective cough. This can be assisted with IPPV, which will help increase inspired volume and increase the effectiveness of a cough.",
	},
	{
		question:
			"A patient with status asthmaticus is receiving 70%/30% helium-oxygen by nonrebreather mask after repeated attempts at traditional bronchodilation, including aerosolized albuterol at 10 mg/hr and intravenous solumedrol administration. The heliox mixture is being provided through an oxygen flow meter with an indicated flow of 10 L/min. The patient's lips and ears are demonstrating cyanosis. The therapist should\n A. switch to a 60/40% heliox mixture\n B. discontinue heliox therapy, apply 100% oxygen\n C. administer 80/20% heliox\n D. increase the indicated flow to 15 L/min",
		options: {
			A: "switch to a 60/40% heliox mixture",
			B: "discontinue heliox therapy, apply 100% oxygen",
			C: "administer 80/20% heliox",
			D: "increase the indicated flow to 15 L/min",
		},
		answer: "A",
		answer_explanation:
			"switch to a 60/40% heliox mixture\n\nHelium-oxygen mixtures come in three different concentrations -- 80/20%, 70/30%, 60/40%. The latter number represents the amount of oxygen. Therefore, 70/30% represents 70% helium and 30% oxygen. As the patient is persistently demonstrating evidence of hypoxemia, the percent of oxygen delivered should be increased. Thus, a 60/40% heliox mixture is most appropriate.",
	},
	{
		question:
			"The addition of a 2.0 second inspiratory plateau facilitates the determination of which of the following physiological parameters?\n A. static compliance\n B. airway resistance\n C. laminar and turbulent airflow properties\n D. pulmonary secretions",
		options: {
			A: "static compliance",
			B: "airway resistance",
			C: "laminar and turbulent airflow properties",
			D: "pulmonary secretions",
		},
		answer: "A",
		answer_explanation:
			"static compliance\n\nThe addition of an inspiratory hold or plateau helps to determine what is called the plateau pressure, which is used primarily to calculate and evaluate static compliance.",
	},
	{
		question:
			"A point-of-care blood gas analyzer produces results well outside the machines physiological reportable range. The respiratory therapist should\n\n A. examine the patient for consistent clinical signs\n B. perform a 2-point calibration\n C. replace the sample cartridge\n D. suspect a venous blood sample",
		options: {
			A: "examine the patient for consistent clinical signs",
			B: "perform a 2-point calibration",
			C: "replace the sample cartridge",
			D: "suspect a venous blood sample",
		},
		answer: "B",
		answer_explanation:
			"perform a 2-point calibration\n\nWhen any blood gas analyzer produces erroneous results that are outside the reportable physiological range, the device requires calibration. These types of devices offer one-point, and two-point calibrations. In this case, a two-point calibration would be more appropriate so that the machine is calibrated to both the high and low aspect of the range.",
	},
	{
		question:
			"Close monitoring of VC is indicated in which of the following situations?\n A. after the administration of a neuromuscular blockade\n B. neuromuscular disorder\n C. post abdominal surgery\n D. within 24 hours after cardiopulmonary resuscitation",
		options: {
			A: "after the administration of a neuromuscular blockade",
			B: "neuromuscular disorder",
			C: "post abdominal surgery",
			D: "within 24 hours after cardiopulmonary resuscitation",
		},
		answer: "B",
		answer_explanation:
			"neuromuscular disorder\n\nPatients with suspected neuromuscular disorders, like Guillain-Barré and myasthenia gravis, should be monitored for basic ventilation parameters, including vital capacity.",
	},
	{
		question:
			"In which of the following situations would a point-of-care arterial blood gas analysis be most appropriate?\n A. at home for a COPD patient\n B. in surgery\n C. at college for a cystic fibrosis patient\n D. at a health fair for the public",
		options: {
			A: "at home for a COPD patient",
			B: "in surgery",
			C: "at college for a cystic fibrosis patient",
			D: "at a health fair for the public",
		},
		answer: "B",
		answer_explanation:
			"in surgery\n\nPoint-of-care analytical devices are most appropriate in temporary situations or in places where quick information is required. Surgery is an example of this type of requirement. If a physician in surgery requires arterial blood gas data, it would perhaps take too long for the sample to leave the sterile area to be analyzed. Consequently an analyzer within the sterile area would provide data more quickly and allow for better care of the patient.",
	},
	{
		question:
			"I spite of repeated attempts, the respiratory therapist has been unable to retrieve a non-contaminated sputum sample through deep suctioning and normal expectoration. Which of the following could be recommended to obtain a better sputum specimen for laboratory analysis?\n A. Percutaneous extraction\n B. Coude-tipped catheter\n C. Tonsil suction device\n D. BAL",
		options: {
			A: "Percutaneous extraction",
			B: "Coude-tipped catheter",
			C: "Tonsil suction device",
			D: "BAL",
		},
		answer: "D",
		answer_explanation:
			"BAL\n\nA BAL, or bronchoalveolar lavage, is helpful in retrieving material from deep within the lungs for sputum analysis and culture when normal methods suctioning and expectoration are insufficient or produce contaminated results. The procedure itself is a complicated one and can be harmful or stressful to the patient. Thus, it should be done only when other standard methods are insufficient.",
	},
	{
		question:
			"The following pressure-volume ventilator graphic is observed on a patient receiving VC A/C ventilation. The therapist should recommend\n\n(BIRD BEAK)\n\nA. decrease the pressure limit\n B. decrease in rate\n C. decrease the tidal volume\n D. decrease the minute ventilation",
		options: {
			A: "decrease the pressure limit",
			B: "decrease in rate",
			C: "decrease the tidal volume",
			D: "decrease the minute ventilation",
		},
		answer: "C",
		answer_explanation:
			"decrease the tidal volume\n\nThe image shown here is a ventilator graphic that shows the relationship between the volume and the pressure. The presence of the small bird beak indicates that there is some level of pulmonary overdistension. This can be remedied by decreasing the tidal volume.",
	},
	{
		question:
			"The following is observed on a newborn 1 minute after delivery:\n\nColor: pink extremities, blue trunk \nReflex irritability: grimace\nMuscle tone: weak flexion\nHeart rate: 98/min\nRespiratory effort: weak cry\n\n\nWhat is the one-minute APGAR score\n A. 5\n B. 3\n C. 4\n D. 6",
		options: {A: "5", B: "3", C: "4", D: "6"},
		answer: "A",
		answer_explanation: "5",
	},
	{
		question:
			"The following flow-time ventilator graphic data is observed. The therapist should suggest\n A. increasing I:E ratio\n B. pressure control ventilation\n C. increasing inspiratory flow rate\n D. inverse I:E ratio ventilation",
		options: {
			A: "increasing I:E ratio",
			B: "pressure control ventilation",
			C: "increasing inspiratory flow rate",
			D: "inverse I:E ratio ventilation",
		},
		answer: "C",
		answer_explanation:
			"increasing inspiratory flow rate\n\nThe development of autoPEEP, which is shown in this graphic, is treated by allowing more time for expiration. This is most commonly is done by increasing the flow, thereby decreasing inspiratory time and lengthening expiratory time. Although not offered here, a decrease in mandatory rate is another method for decreasing autoPEEP.",
	},
	{
		question:
			"A 65-year old male with COPD is brought to the emergency room (ER) from a local nursing facility in response to fever and apparent pulmonary congestion. The patient is receiving oxygen at 3 L/min NC and is not appropriately responsive to questioning. He continues to fall asleep. Arterial blood gases reveal\n\npH 7.30 \nPaCO2 66 torr\nPaO2 68 torrH\nCO3- 31 mEq/L\nBE -3 mEq/L\n\n\nThe respiratory therapist should recommend\n A. non-invasive ventilation (NIV)\n B. placing the patient on a nonrebreather mask\n C. decreasing oxygen flow to 2 L/min\n D. invasive mechanical ventilation",
		options: {
			A: "non-invasive ventilation (NIV)",
			B: "placing the patient on a nonrebreather mask",
			C: "decreasing oxygen flow to 2 L/min",
			D: "invasive mechanical ventilation",
		},
		answer: "D",
		answer_explanation:
			"invasive mechanical ventilation\n\nAlthough the blood gas does not indicate complete ventilatory failure, the patient's inability to respond to questions and stay awake suggests that the patient may have an inability to protect his own airway. Therefore, the best answer here is to provide continuous mechanical ventilation by invasive means, or with an endotracheal tube.",
	},
	{
		question:
			"A patient is found to have uncompensated respiratory acidosis. This would correlate with what kind of change in the oxygen dissociation curve?\n A. compressed waveform\n B. shift to the left\n C. expanded waveform\n D. shift to the right",
		options: {
			A: "compressed waveform",
			B: "shift to the left",
			C: "expanded waveform",
			D: "shift to the right",
		},
		answer: "D",
		answer_explanation:
			"shift to the right\n\nThe oxygen dissociation curve is a graphical depiction of the relationship between arterial PO2 and SpO2. It is based upon a fixed pH. When the pH changes, or the patient becomes alkaline or acidotic, the oxygen dissociation curve can shift to the right or left. In this case, acidosis will cause the curve to shift to the right, which will change the numerical relationship between PaO2 and SpO2. A shift to the right also indicates a decreased affinity between hemoglobin and oxygen molecules.",
	},
	{
		question:
			"The following data is observed on a patient who is 10 minutes post coronary artery bypass graft (CABG):\n\n5 mins after:\nPaO2: 92\nPvO2: 65\n15 mins after:\nPaO2: 90\nPvO2: 60\n25 mins after:\nPaO2: 93\nPvO2: 52\n\n\nWhich of the following can the respiratory therapist conclude?\n A. cardiac index is decreasing\n B. CvO2 is increasing\n C. tissues are becoming oxygen deprived\n D. A-aDO2 is decreasing",
		options: {
			A: "cardiac index is decreasing",
			B: "CvO2 is increasing",
			C: "tissues are becoming oxygen deprived",
			D: "A-aDO2 is decreasing",
		},
		answer: "A",
		answer_explanation:
			"cardiac index is decreasing\n\nThis data shows a steady arterial oxygenation level with a decreasing venous oxygenation level. When the gap between arterial and venous oxygen levels start to increase, this is consistent with an increase in tissue oxygen consumption and an increase in the C(a-v)O2. This is related to a decrease in cardiac output. Of the options given, a decrease in cardiac index is another way of indicating a decrease in cardiac output.",
	},
	{
		question:
			"A patient undergoes a change in PEEP from 15 to 20 cm H2O. Which of the following would indicate an adverse reaction to the change in PEEP?\n A. elevated systolic BP, decreased diastolic BP\n B. elevated PCWP, decreased C.I.\n C. decrease in C(a-v)O2\n D. elevated CVP, decreased PAP, normal C.O.",
		options: {
			A: "elevated systolic BP, decreased diastolic BP",
			B: "elevated PCWP, decreased",
			C: "I.",
			D: "decrease in C(a-v",
			F: "O.!@#",
			G: "elevated PCWP, decreased",
		},
		answer: "B",
		answer_explanation:
			"elevated PCWP, decreased C.I.\n\nAs PEEP is increased, the patient is likely to experience decreased venous return and degradation in hemodynamic pressures. Of the options listed, an elevated PCWP in conjunction with a decreased cardiac index (which is another way of looking at cardiac output), is the most likely outcome. Additionally, an elevated pulmonary capillary wedge pressure in the presence of decreased cardiac output is indicative of our left heart problem. Although the actual source of the problem may not be the left cardiac muscle, excessive PEEP takes on this appearance.",
	},
	{
		question:
			"A respiratory therapist has been ordered to alter the I:E ratio on a COPD patient. The current ratio is 1:2. The ordered ratio is 1:5. In completing this order, the therapist will have\n A. increased inspiratory time\n B. decreased inspiratory flow\n C. Altered the mandatory rate\n D. decreased the I:E ratio",
		options: {
			A: "increased inspiratory time",
			B: "decreased inspiratory flow",
			C: "Altered the mandatory rate",
			D: "decreased the I:E ratio",
		},
		answer: "D",
		answer_explanation:
			"decreased the I:E ratio\n\nWhen I:E ratio is changed from 1:2 to 1:5, the I:E ratio is being decreased. This can be confusing because the number in the ratio appears to be increasing. But, in fact, inspiratory time is being decreased, allowing more time for expiration.",
	},
	{
		question:
			'Following a series of lung recruitment maneuvers on a patient who is receiving VC A/C ventilation, the respiratory therapist observes a pressure-volume waveform that shows a less pronounced "beak" after the maneuvers. The therapist should conclude\n A. recruitment maneuvers have been successful\n B. the patient is at higher risk for development of autoPEEP\n C. attempts to recruit alveoli have been unsuccessful\n D. SIMV ventilation is more appropriate',
		options: {
			A: "recruitment maneuvers have been successful",
			B: "the patient is at higher risk for development of autoPEEP",
			C: "attempts to recruit alveoli have been unsuccessful",
			D: "SIMV ventilation is more appropriate",
		},
		answer: "A",
		answer_explanation:
			"recruitment maneuvers have been successful\n\nA less pronounced beak on a flow volume graphic on the ventilator is either caused by a decrease in set tidal volume or an increase in lung space. Of the options given, the most likely possibility is that the patient has responded to lung recruitment maneuvers and has increased alveolar ventilation space.",
	},
	{
		question:
			"The respiratory therapist notes an order in a patient's record for 3 mg of a drug. The normal stock concentration of the drug is 0.15%. How many mL will be required to meet the ordered dosage?\n A. 2.0\n B. 1.6\n C. 4.5\n D. 20.0",
		options: {A: "2.0", B: "1.6", C: "4.5", D: "20.0"},
		answer: "A",
		answer_explanation:
			"2.0\n\nTo determine the number of mL needed, one must first determine how many mg per mL exists in that drug at a specific concentration. This can be done by taking the concentration (strength) and multiplying it by 10. ie, 0.15% x 10 = 1.5 mg/mL. In this case, 3 mg is needed. Thus 3 mg/1.5 mg/mL = 2.0 mL.",
	},
	{
		question:
			"A patent who has just undergone surgery for the repair of a hernia is in the post-surgical recovery unit and is receiving VC SIMV ventilation. The therapist observes an HME inline, mandatory rate of 10/min with a total rate of 12/min. Spontaneous tidal volume is 6 mL/kg. While reading the medical record, the patient coughs and produces a large amount of secretions. The therapist should\n\n A. implement heated humidification\n B. extubate the patient, place on an air-entrainment mask\n C. remove the HME device\n D. increase the set VT to 8 mL/kg",
		options: {
			A: "implement heated humidification",
			B: "extubate the patient, place on an air-entrainment mask",
			C: "remove the HME device",
			D: "increase the set VT to 8 mL/kg",
		},
		answer: "A",
		answer_explanation:
			"implement heated humidification\n\nThe use of an HME, or heat moisture exchanger, is not appropriate for patients who have any type of pulmonary secretions. In such a case, heated humidification is important. An HME may be used in short-term situations, where the patient will not be intubated for long. Examples of this would be after surgery, during transport, and others.",
	},
	{
		question:
			"What is the standard dosing frequency of inhaled Atrovent (Ipratroprium bromide)?\n A. q 2-4 hrs\n B. q 6-8 hrs\n C. q 8-12 hrs\n D. q 4-6 hrs",
		options: {A: "q 2-4 hrs", B: "q 6-8 hrs", C: "q 8-12 hrs", D: "q 4-6 hrs"},
		answer: "B",
		answer_explanation:
			"q 6-8 hrs\n\nThe proper dosing frequency for inhaled Atrovent is every 6 to 8 hours.",
	},
	{
		question:
			"While observing the PetCO2 value on a patient who is receiving mechanical ventilation, the tracing shows a sharp rise in the CO2 on the capnograph. This rise represents\n A. massive atelectasis\n B. a soiled infrared CO2 sensor\n C. the flushing out of dead space\n D. pulmonary embolism",
		options: {
			A: "massive atelectasis",
			B: "a soiled infrared CO2 sensor",
			C: "the flushing out of dead space",
			D: "pulmonary embolism",
		},
		answer: "C",
		answer_explanation:
			"the flushing out of dead space\n\nInitial end-tidal CO2 readings are often low but demonstrate a sharp rise as carbon dioxide builds up in the dead space is exhaled past the infrared CO2 detector.",
	},
	{
		question:
			"Which of the following should be monitored in a patient receiving aminophylline for long-term bronchodilation?\n A. ABGs\n B. CBC\n C. serum electrolytes\n D. blood theophylline level",
		options: {
			A: "ABGs",
			B: "CBC",
			C: "serum electrolytes",
			D: "blood theophylline level",
		},
		answer: "D",
		answer_explanation:
			"blood theophylline level\n\nAminophylline is a xanthine medication used to establish long-term bronchodilation in patients who have asthma and other types of airway constriction diseases. When a patient is receiving this type of medication, the proper blood level must be maintained. This blood test is called a theophylline level. It should be maintained between 10 and 20 µg. A level that is too high can cause seizures and death. A level that is too low would be sub therapeutic and not helpful.",
	},
	{
		question:
			"During direct laryngoscopy, a respiratory therapist notes a patient has a Mallampati score of 4. The therapist should recommend\n A. surgical tracheostomy\n B. use of a bougie device\n C. use of a video assist device\n D. use of an airway exchange catheter",
		options: {
			A: "surgical tracheostomy",
			B: "use of a bougie device",
			C: "use of a video assist device",
			D: "use of an airway exchange catheter",
		},
		answer: "C",
		answer_explanation:
			"use of a video assist device\n\nThere are many methods to facilitate intubation when the intubation procedure appears that aspect of it may be difficult. A Mallampati scoring system is a method to rate the intubation difficulty of the patient. It is based upon the ability to visualize key anatomical landmarks in the oropharynx. Specifically, the system looks at the ability to visualize the uvula, the hard palate, the soft palate, and other landmarks. The Mallampati scoring system is a four-point system with a '1' being a non-complicated intubation and a '4' exhibiting maximum complexity. In this case the Mallampati score of '4' indicates that the patient may be a complex intubation. In such a case the use of a video assist device is appropriate. Other options include bronchoscopy, use of a bougie device, and other direct visualization devices. Direct laryngoscopy should be avoided.",
	},
	{
		question:
			"A COPD patient is being assess in the hospital for readiness to be discharged home. The respiratory therapist is in charge of establishing the appropriate oxygen flow rate by nasal cannula to be used at home. The patient maintains an SpO2 of 90% on 2 L/min at rest, and 86% during ambulation. Which of the following recommendation would be most appropriate?\n\n A. 1 L/min during sleep, 2 L/min all other times\n B. 1 L/min at rest, 2 L/min during ambulation\n C. 2 L/min at all times\n D. 2 L/min at rest, 3 L/min during exertion",
		options: {
			A: "1 L/min during sleep, 2 L/min all other times",
			B: "1 L/min at rest, 2 L/min during ambulation",
			C: "2 L/min at all times",
			D: "2 L/min at rest, 3 L/min during exertion",
		},
		answer: "D",
		answer_explanation:
			"2 L/min at rest, 3 L/min during exertion\n\nFor COPD patients who need supplemental oxygen, 1-2 L/min or 24-28% is appropriate while at rest. However, if the patient is participating in any kind of exercise or pulmonary rehabilitation program that requires activity, additional flow may be provided during the activity only. Increasing flow does not actually increase the FIO2 for the patient, especially if they are on a nasal cannula. When the patient engages in exertion, they typically increase their tidal volume and inspiratory flow rate. In doing so, they entrain more air through their nose and lower their FIO2. Thus, an increase in flow rate during the exercise helps to minimize air entrainment and changes in oxygen percentage. Another way to approach this is to provide an air entrainment mask that delivers high flow. In that case increasing FIO2 is not necessary.",
	},
	{
		question:
			"A patient is suspected for carbon monoxide poisoning after being found lethargic in an enclosed space with a running motor vehicle. Which of the following would be helpful in further assessing the patient for this suspicion?\n A. multiple wave-length spectrophotometry\n B. PetCO2 monitoring\n C. oxygen analysis with a Clark electrode\n D. Polargraphic oxygen analysis",
		options: {
			A: "multiple wave-length spectrophotometry",
			B: "PetCO2 monitoring",
			C: "oxygen analysis with a Clark electrode",
			D: "Polargraphic oxygen analysis",
		},
		answer: "A",
		answer_explanation:
			"multiple wave-length \n\nA pulse oximetry cannot be used to measure true oxygen saturation as it can be erroneous in the presence of carbon monoxide poisoning. This is true because pulse oximetry provides single wavelength spectrophotometry. However, there are relatively new devices using multiple wavelength spectrophotometry that can detect carbon monoxide in the blood much the same way a pulse oximeter can detect oxygen. Because this method is quick and inexpensive it would be preferred over hemoximetry.",
	},
	{
		question:
			"The following data is observed on a patient who is 20 minutes post coronary artery bypass graft (CABG):\n\n10:05 \nSVO2: 69\nSPO2: 98\n\n10:10 \nSVO2: 67\nSPO2: 97\n\n10:15 \nSVO2: 52\nSPO2: 97\n\n\nWhich of the following can the respiratory therapist conclude?\nA. pulmonary shunting is decreasing\n B. cardiac output is decreasing\n C. C(a-v)O2 is narrowing\n D. tissue oxygen consumption is decreasing",
		options: {
			A: "pulmonary shunting is decreasing",
			B: "cardiac output is decreasing",
			C: "C(a-v)O2 is narrowing",
			D: "tissue oxygen consumption is decreasing",
		},
		answer: "B",
		answer_explanation:
			"cardiac output is decreasing\n\nThis data shows a steady SpO2 with a decreasing venous oxygen saturation. From this information, it can be concluded that oxygen tissue consumption is increasing because there is less oxygen remaining after the blood passes over the tissues. An increase in the gap between arterial saturation and venous saturation is most commonly caused by a decrease in cardiac output.",
	},
	{
		question:
			"A 52-year-old patient is receiving VC SIMV ventilation due to myasthenia gravis. The patient has no history of pulmonary disease and is alert and oriented. The following data is observed:\n\nMode SIMV \nSet Rate 6\nTotal rate 12\nVT(spont) 425 mL\nPEEP 5 cm H2O\nFIO2 0.40 \n\npH 7.42Pa\nCO2 38 torr\nPaO2 122 torr\nHCO3- 24 mEq/L\nBE 0 mEq/L \nMIP -42 cm H2O\n\n\nThe respiratory therapist should recommend\nA. extubation\n B. CPAP 5 cm H2O, PS 15 cm H2O\n C. daily SBT for several days, then reevaluate\n D. decreasing the set rate to 2/min, ABGs in 20 minutes",
		options: {
			A: "extubation",
			B: "CPAP 5 cm H2O, PS 15 cm H2O",
			C: "daily SBT for several days, then reevaluate",
			D: "decreasing the set rate to 2/min, ABGs in 20 minutes",
		},
		answer: "A",
		answer_explanation:
			"extubation\n\nThe clinical and laboratory data for this patient indicates that the patient is able to ventilate independently and should continue the ventilator liberation effort. Since the patient has no history of pulmonary disease, extubating the patient from a rate of six is perfectly appropriate.",
	},
	{
		question:
			"A chest radiograph reveals the location of a pulmonary artery pressure catheter within moments after its insertion. The tip of the catheter appears over the lower right lung field. Based on this observation, the catheter\n\n A. has perforated the right ventricular septal wall.\n B. should be advanced.\n C. is properly placed.\n D. should be withdrawn.",
		options: {
			A: "has perforated the right ventricular septal wall.",
			B: "should be advanced.",
			C: "is properly placed.",
			D: "should be withdrawn.",
		},
		answer: "C",
		answer_explanation:
			"is properly placed.\n\nWhen a pulmonary artery catheter is positioned correctly, the tip will appear over the right lower lung field.",
	},
	{
		question:
			"A patient is brought to the emergency room after being found cold and coughing uncontrollably in a stairwell of an abandoned building. First responders indicate the patient was coughing up frank blood. The following chest radiograph is produced. The respiratory therapist should recommend which of the following further testing?\n\n(X-RAY)\n\nA. HIV\n B. Test for VRE\n C. TB skin test (mantoux)\n D. Urine culture",
		options: {
			A: "HIV",
			B: "Test for VRE",
			C: "TB skin test (mantoux)",
			D: "Urine culture",
		},
		answer: "C",
		answer_explanation:
			"TB skin test (mantoux)\n\nCoughing up frank blood is an indication of a significant pulmonary problem. In addition to the circumstantial data indicating that the patient was cold and coughing uncontrollably, suggests the possibility of tuberculosis. A TB skin test is appropriate.",
	},
	{
		question:
			"A respiratory therapist would like to review the physician's recent thoughts regarding the prognosis and anticipated care plan for the patient. In which section of the medical record should the therapist plan on reviewing?\n A. progress notes\n B. physician orders\n C. nursing notes\n D. discharge plans",
		options: {
			A: "progress notes",
			B: "physician orders",
			C: "nursing notes",
			D: "discharge plans",
		},
		answer: "A",
		answer_explanation:
			"progress notes\n\nTechnically, documentation in the progress notes does not constitute an official change in care. Notes in this section represent thoughts of healthcare workers regarding the potential problems, diagnoses, and treatment plans of the patient. To be made official, orders must be written in the chart as physician orders.",
	},
	{
		question:
			"Which of the following is an important instruction given to the family who will be caring for a 7-year-old patient with cystic fibrosis at home?\n\n A. how to perform an emergency tracheotomy\n B. advanced cardiac life support techniques\n C. titration of oxygen therapy according to the needs of the patient\n D. recognizing signs of infection",
		options: {
			A: "how to perform an emergency tracheotomy",
			B: "advanced cardiac life support techniques",
			C: "titration of oxygen therapy according to the needs of the patient",
			D: "recognizing signs of infection",
		},
		answer: "D",
		answer_explanation:
			"recognizing signs of infection\n\nOne of the most important aspects to teach a family who is administering home care to a chronic child is that of recognizing signs of infection. If the onset of infection can be recognized early enough, it can be prevented or decreased before significant pulmonary compromise and/or hospitalization is required.",
	},
	{
		question:
			"A 45-year-old female with leukemia is receiving 10 cm H2O CPAP with an FIO2 0.50. Arterial blood gas results are below:\n\npH 7.38 \nPCO2 42 torr\nPO2 109 torr\nHCO3- 28 mEq/L\nBE 0 mEq/L\n\nWBC 2,000 cu mm \nHb 8.0 g/dL\nRBC 2.0 g/dL\n\n\nThe respiratory therapist should conclude that the patient has\n A. a bacterial infection\n B. hypoxemia\n C. methemoglobinemia\n D. compensated respiratory acidosis",
		options: {
			A: "a bacterial infection",
			B: "hypoxemia",
			C: "methemoglobinemia",
			D: "compensated respiratory acidosis",
		},
		answer: "B",
		answer_explanation:
			"hypoxemia\n\nExamination of this blood gas PO2 reveals that the patient is over oxygenating. However, a closer examination reveals anemia as shown by a hemoglobin level well below normal limits. When a patient is anemic they are considered to be hypoxic, regardless of the PaO2.",
	},
	{
		question:
			"A 19-year old patient with mucoviscidosis will be travelling alone to various foreign countries for two months. The patient normally receives daily assistance with bronchial hygiene by chest percussion from family members. Which of the following can the respiratory therapist recommend to facilitate bronchial hygiene during travel?\n A. VEST therapy\n B. vibratory PEP therapy\n C. IPPV\n D. quad coughing",
		options: {
			A: "VEST therapy",
			B: "vibratory PEP therapy",
			C: "IPPV",
			D: "quad coughing",
		},
		answer: "B",
		answer_explanation:
			"vibratory PEP therapy\n\nMucoviscidosis is another name for cystic fibrosis, which is a condition known for excessive sputum production. For this patient who would be traveling to foreign countries for an extended period of time, bronchial hygiene that can be performed easily by oneself and does not require complex equipment or another person's help, is imperative. VEST therapy can be complex, expensive, and may require specific electrical connection that may not be available in other countries. Quad coughing requires the help of another and is therefore inappropriate.",
	},
	{
		question:
			"Which of the following medications is most suitable to provide sedation and analgesia for a patient who is post-operative for CABG and is receiving VC ventilation?\n A. propofol (Diprivan)\n B. Lorazepam (Ativan)\n C. Romazicon (flumazenil)\n D. Valium (diazepam)",
		options: {
			A: "propofol (Diprivan)",
			B: "Lorazepam (Ativan)",
			C: "Romazicon (flumazenil)",
			D: "Valium (diazepam)",
		},
		answer: "A",
		answer_explanation:
			"propofol (Diprivan)\n\nPropofol, also called Diprivan, is a great medication used to provide immediate sedation and analgesia. This drug is especially helpful because of its immediate mode of action as well as its short half-life when discontinued.",
	},
	{
		question:
			"A patient with ARDS has been receiving PC ventilation with an inspiratory pressure of 35 cm H2O and a PEEP of 20 cm H2O. A recent V/Q scan has confirmed a bronchopleural fistula in the right lung. The patient is schedule for surgery. Until surgery can occur, the respiratory therapist should recommend which of the following protective strategies?\n\n A. decreasing inspiratory pressure to 25 cm H2O\n B. insertion of a double lumen endotracheal tube\n C. removal all PEEP\n D. increasing inspiratory pressure to 40 cm H2O",
		options: {
			A: "decreasing inspiratory pressure to 25 cm H2O",
			B: "insertion of a double lumen endotracheal tube",
			C: "removal all PEEP",
			D: "increasing inspiratory pressure to 40 cm H2O",
		},
		answer: "B",
		answer_explanation:
			"insertion of a double lumen endotracheal tube\n\nA bronchopleural fistula indicates that there is a hole in the lung, allowing some of the inspired gases to leak into the pleural space. This condition should be resolved surgically. In the meantime, however, all efforts should be centered on keeping mean airway pressure low. There are several ways to accomplish this but one common way is to provide independent lung ventilation. This means that two ventilators will be used, each to ventilate one lung. To facilitate this, insertion of a double lumen endotracheal tube is required.",
	},
	{
		question:
			"Which of the following is most accurately descriptive of PS ventilation?\n A. provides more sensitivity for a ventilator actuated breath\n B. the size of spontaneous breaths are augmented\n C. promotes better deflation of the lungs and decreases air-trapping\n D. PSV is a companion to A/C ventilation",
		options: {
			A: "provides more sensitivity for a ventilator actuated breath",
			B: "the size of spontaneous breaths are augmented",
			C: "promotes better deflation of the lungs and decreases air-trapping",
			D: "PSV is a companion to A/C ventilation",
		},
		answer: "B",
		answer_explanation:
			"the size of spontaneous breaths are augmented\n\nPressure support ventilation, also called PS ventilation, is somewhat of a misnomer in that it really does not provide ventilation at all. Pressure support is a way of overcoming both mechanical and anatomical airway resistance, making it easier for a person to inhale. Thus, it decreases the work of breathing and is suitable in patients who are attempting to liberate from mechanical ventilatory support and who are needing extra help in weaning from the ventilator. Essentially, the use of pressure support increases spontaneous tidal volumes. But, it does not trigger or deliver a breath if the patient does not initiate the breath themselves.",
	},
	{
		question:
			"Just prior to providing a patient with manual ventilation, following oral intubation, the respiratory therapist assesses the function of a self-inflating resuscitator bag. The therapist notices the bag is easy to squeeze when attached to the patient. It is also evident that there is no chest rise with each squeeze. Which of the following could be the cause of the problem?\n A. faulty inlet valve\n B. bag is too small\n C. detached reservoir\n D. insufficient flow",
		options: {
			A: "faulty inlet valve",
			B: "bag is too small",
			C: "detached reservoir",
			D: "insufficient flow",
		},
		answer: "A",
		answer_explanation:
			"faulty inlet valve\n\nOn a self-inflating resuscitator bag, there is most likely a faulty inlet valve if the bag is easy to squeeze once it is connected to the patient. In normal circumstances, when the bag is connected to the patient, pulmonary resistance should be felt through the resuscitator device. If no resistance is felt, it is likely that the gas is being ejected through a one-way valve that is responsible for allowing gases to enter the bag. This would suggest a faulty inlet valve that is allowing gases to move both directions.",
	},
	{
		question:
			"A 28-year old male reports to the emergency department with dizziness, nausea, and some degree of vertigo. The patient's record indicates the patient is on a skiing vacation but normally lives on the coast. The physician orders sildenafil. For which of the following is the patient mostly likely being treated?\n A. avian flu\n B. decompression sickness\n C. altitude sickness\n D. nitrogen narcosis",
		options: {
			A: "avian flu",
			B: "decompression sickness",
			C: "altitude sickness",
			D: "nitrogen narcosis",
		},
		answer: "C",
		answer_explanation:
			"altitude sickness\n\nThe medication sildenafil, also known as Viagra, can be used to treat altitude sickness.",
	},
	{
		question:
			"A COPD patient is receiving oxygen at 2 L/min by a pulse-dose oxygen delivery device. The patient complains of shortness of breath and feels she is not getting enough oxygen. The home care respiratory therapist should\n\n A. increase the flow rate\n B. switch to a Venturi mask at 40%\n C. encourage the patient to relax\n D. switch the pulse-dose device to continuous mode",
		options: {
			A: "increase the flow rate",
			B: "switch to a Venturi mask at 40%",
			C: "encourage the patient to relax",
			D: "switch the pulse-dose device to continuous mode",
		},
		answer: "D",
		answer_explanation:
			"switch the pulse-dose device to continuous mode\n\nAny time a patient is having difficulty or complains that they are not receiving enough oxygen through their oxygen delivery device, the first step is to ensure that they are receiving enough oxygen by changing or replacing the device immediately. In this case, the patient is using a pulse dose oxygen delivery device. On these devices there is an option to switch to continuous flow. That is the best option until the problem can be determined and solve. Another good option would be to have the patient use a standard oxygen cylinder while the respiratory therapist troubleshoots and resolves the problem.",
	},
	{
		question:
			"During endotracheal suctioning, a patient becomes agitated, markedly hypertensive, and demonstrates PVCs (drop below baseline) on the cardiac monitor. The therapist should prepare to\n\n A. provide maximum supplemental oxygen\n B. discontinue suctioning, report to the physician\n C. administer a bolus of intravenous fluids\n D. administer aerosolized lidocaine 4%",
		options: {
			A: "provide maximum supplemental oxygen",
			B: "discontinue suctioning, report to the physician",
			C: "administer a bolus of intravenous fluids",
			D: "administer aerosolized lidocaine 4%",
		},
		answer: "A",
		answer_explanation:
			"provide maximum supplemental oxygen\n\nThe presence of PVCs during any procedure, especially suctioning, would suggest that the patient has become hypoxic during the procedure and could benefit from maximum supplemental oxygen. This should be provided both before, during, and after the procedure to ensure arterial oxygenation and avoid hypoxemia.",
	},
	{
		question:
			"A respiratory therapist is assisting a patient who has an SpO2 of 85% while receiving oxygen by nonrebreather mask at 12 L/min flow. Laboratory results show a WBC of 10,000 cu mm and an Hb of 8.1 g/dL. The patient has a DNI order and an advanced directive that indicates no blood administration. Which of the following can be done to maximize arterial oxygenation?\n A. installation of a tracheostomy\n B. one unit of packed RBCs\n C. turn the flow to the nonrebreather to flush\n D. NIPPV",
		options: {
			A: "installation of a tracheostomy",
			B: "one unit of packed RBCs",
			C: "turn the flow to the nonrebreather to flush",
			D: "NIPPV",
		},
		answer: "D",
		answer_explanation:
			"NIPPV\n\nOn this patient who has orders indicating 'DO NOT INTUBATE' and an advanced directive that includes no blood administration, the best and most effective way to increase arterial oxygenation is through the use of positive airway pressure. In this case NIPPV (noninvasive positive pressure ventilation). Installation of a tracheostomy is considered a form of intubation and would violate the patient's wishes. Administration of RBCs is a type of blood product and would go against the patient's advanced directives.",
	},
	{
		question:
			"While providing advanced cardiac life support to a victim of a motor vehicle accident, a patient suddenly becomes hypotensive. Pulse is 140/min, RR 30/min. Diagnostic percussion reveals hyperresonance on the left and breath sounds are present on the right and absent on the left. The therapist should FIRST recommend\n\n A. provide manual ventilation with larger volumes per squeeze\n B. insert a chest tube in the left chest\n C. obtain a chest radiograph\n D. inserting a needle in between ribs in the left chest",
		options: {
			A: "provide manual ventilation with larger volumes per squeeze",
			B: "insert a chest tube in the left chest",
			C: "obtain a chest radiograph",
			D: "inserting a needle in between ribs in the left chest",
		},
		answer: "D",
		answer_explanation:
			"inserting a needle in between ribs in the left chest\n\nClinical data suggests the presence of a tension pneumothorax. If this condition worsens the patient could become emergent and unstable and experience significant hemodynamic degradation. Therefore, the pressure must be relieved immediately by inserting a needle (usually 14-gauge) into the left chest. This will immediately vent any building pressures and will help stabilize the patient until further, long-term treatment can be provided.",
	},
	{
		question:
			"A patient is receiving Anectine (succinylcholine chloride) to facilitate oral intubation. Two minutes after administering the medication, the respiratory therapist notices involuntary minor muscle twitching about the neck and upper thorax region. The therapist should\n\n A. proceed with the intubation\n B. allow time for the muscle twitching to cease\n C. administer rocuronium (Zemuron)\n D. administer antagonist medication immediately",
		options: {
			A: "proceed with the intubation",
			B: "allow time for the muscle twitching to cease",
			C: "administer rocuronium (Zemuron)",
			D: "administer antagonist medication immediately",
		},
		answer: "A",
		answer_explanation:
			"proceed with the intubation\n\nUpon administration of the drug Anectine, muscle twitching about the face, neck, and upper thorax is an indication that the drug has had sufficient time to impose paralysis. Therefore, it is a sign to proceed with the intubation procedure.",
	},
	{
		question:
			"During endotracheal suctioning, blue-tinted secretions are suctioned. The respiratory therapist should FIRST recommend\n\n A. monitoring the patient for fever\n B. performing a bronchoscopy\n C. discontinuance of tube feeding, assess ET tube cuff pressure\n D. instilling ethylene blue down the ET tube and manually ventilate",
		options: {
			A: "monitoring the patient for fever",
			B: "performing a bronchoscopy",
			C: "discontinuance of tube feeding, assess ET tube cuff pressure",
			D: "instilling ethylene blue down the ET tube and manually ventilate",
		},
		answer: "C",
		answer_explanation:
			"discontinuance of tube feeding, assess ET tube cuff pressure\n\nThe presence of secretions that are tinted in non-normal colors, such as blue or pink, is suggestive of potential aspiration of feeding solution into the lungs. Tube feeding is often purposefully died a specific color so that it may be discovered if accidentally aspirated into the lungs. When this is found, tube feeding should be discontinued immediately and the patient should be checked for possible aspiration.",
	},
	{
		question:
			"A 183-cm (6-ft), 87-kg (192-lb) male is receiving PC, A/C ventilation on the following settings:\n\nPEEP 8 cm H2O \nSet inspiratory pressure 18 cm H2O\nMandatory rate 18\nTotal rate 18\nFIO2 0.60\nI:E 1:2\nVT (exhaled) 350 mL\nFlow 50 L/min\n\nABG are as follows:\n\npH 7.28 \nPaCO2 52 torr\nPaO2 119 torr\nHCO3- 20 mEq/L\nBE +1 mEq/L\n\n\nA respiratory therapist should recommend an increase in which of the following?\n A. inspiratory pressure\n B. FIO2\n C. deadspace ventilation\n D. inspiratory flow rate",
		options: {
			A: "inspiratory pressure",
			B: "FIO2",
			C: "deadspace ventilation",
			D: "inspiratory flow rate",
		},
		answer: "A",
		answer_explanation:
			"inspiratory pressure\n\nExamination of this blood gas reveals acidosis secondary to hypoventilation. Because the patient is receiving pressure control ventilation, the primary method for controlling arterial carbon dioxide is through adjustments of the inspiratory pressure. In this case, inspiratory pressure should be increased to blow off CO2.",
	},
	{
		question:
			"The following data were obtained while an adult patient was receiving VC A/C ventilation with an FIO2 0.50.\n\n8:00\nHr 88\nBP 132/85\nSpO2 82\nStatic compliance 22\nPEEP 5\n\n8:15\nHr 98\nBP 125/83\nSpO2 90\nStatic compliance 38\nPEEP 12\n\n8:30\nHr 103\nBP 115/80\nSpO2 94\nStatic compliance 52\nPEEP 17\n\n8:45\nHr 110\nBP 102/72\nSpO2 96\nStatic compliance 43\nPEEP 20\n\nWhich of the following PEEP levels should the respiratory therapist recommend?\n\n A. 12 cm H2O\n B. 17 cm H2O\n C. 20 cm H2O\nD. 5 cm H2O",
		options: {A: "12 cm H2O", B: "17 cm H2O", C: "20 cm H2O", D: "5 cm H2O"},
		answer: "B",
		answer_explanation:
			"17 cm H2O\n\nThis group of data shows that with increasing PEEP the patient exhibits improved oxygen saturation. However, as PEEP is increased, there is an ultimate degradation in hemodynamics that may result. According to this data, the patient's hemodynamic status deteriorates significantly at a PEEP level of 20 cmH2O. This is manifested by a sudden decrease in pulmonary compliance from 52 to 43 mL/cmH2O. A Sharp decrease in blood pressure is also an indicator. Thus, the previous PEEP level of 15 is most appropriate.",
	},
	{
		question:
			"A morbidly obese 47-year-old male is admitted to the emergency department complaining of shortness of breath. Brief clinical and laboratory exams reveal the following:\n\nHR 98/min \nBP 135/90 mm Hg\nTemp 38.3 deg C (101 deg F)\n\n2 PM\nFIO2 .21\npH 7.29\nPaCO2 68\nPaO2 48\nHCO3 34\nBE +5\n\n3 PM\nFIO2 .50\npH 7.23\nPaCO2 73\nPaO2 55\nHCO3 35\nBE +5\n\nThe patient remains stable, awake, and oriented to time, person, and place. He has a productive cough. The respiratory therapist should do which of the following NEXT?\n\n A. Continue current therapy\n B. Begin flutter valve therapy\n C. Switch to nasal cannula at 3 L/min\n D. Initiate non-invasive ventilation",
		options: {
			A: "Continue current therapy",
			B: "Begin flutter valve therapy",
			C: "Switch to nasal cannula at 3 L/min",
			D: "Initiate non-invasive ventilation",
		},
		answer: "D",
		answer_explanation:
			"Initiate non-invasive ventilation\n\nIn this situation, a morbidly obese patient has blood gases that demonstrate increasing ventilatory distress. In truth, the blood gas demonstrates complete ventilatory failure. However, when you look at the options there is no answer to assume ventilation completely. Therefore, the best answer here is to initiate noninvasive ventilation.",
	},
	{
		question:
			"Which of the following chest PA radiograph results would suggest the patient was rotated improperly?\n A. there is a mediastinal shift\n B. the apecies are different sizes\n C. tops of the lungs are not level\n D. heart shadow exceeds 1/2 the chest cavity laterally",
		options: {
			A: "there is a mediastinal shift",
			B: "the apecies are different sizes",
			C: "tops of the lungs are not level",
			D: "heart shadow exceeds 1/2 the chest cavity laterally",
		},
		answer: "B",
		answer_explanation:
			"the apecies are different sizes\n\nThe apexes (apecies) of the lungs are the very top triangular, cone-shaped aspects of each lung. When one apex is larger than the other on a radiograph, this is likely due to inappropriate patient rotation. This happens because one lung ends up closer to the film than the other and therefore appears smaller. If this is observed, the radiograph should be redone.",
	},
	{
		question:
			"A patient who has an indwelling arterial catheter is being monitored for wide fluctuations in blood pressure. The ART line is zeroed while the pressure transducer is level with the lower abdomen. Ten minutes later, a blood pressure alarm sounds and the therapist discovers the patient has raised his arm above his head, causing the transducer to now be level with the head. Which of following would the therapist expect to observe?\n A. no reported blood pressure due to an error\n B. high indicated blood pressure\n C. low indicated blood pressure\n D. accurate reported blood pressure",
		options: {
			A: "no reported blood pressure due to an error",
			B: "high indicated blood pressure",
			C: "low indicated blood pressure",
			D: "accurate reported blood pressure",
		},
		answer: "C",
		answer_explanation:
			"low indicated blood pressure\n\nWhen the transducer of an ART line is raised above the level at which it was zeroed and calibrated, the blood that pumps against the transducer will exert less pressure as it attempts to climb up to the transducer. This, therefore, will cause the indicated blood pressure to appear lower than actual. The opposite is also true. If the transducer is placed below the point at which it was zeroed, gravity will cause the blood to exert additional pressure against the transducer diaphragm, which will produce an indicated blood pressure that is higher than actual.",
	},
	{
		question:
			"While performing pulmonary function testing, the respiratory therapist asks the patient to inhale and exhale maximally at a maximum rate for 12 seconds. Which of the following is being measured?\n\n A. minute alveolar ventilation\n B. FVC\n C. FEV1\n D. MVV",
		options: {A: "minute alveolar ventilation", B: "FVC", C: "FEV1", D: "MVV"},
		answer: "D",
		answer_explanation:
			"MVV\n\nThe pulmonary function maneuver expressed, when the patient is asked to exhale maximally at a maximum rate for 12 seconds, is called maximum voluntary ventilation or MVV. Since the patient is most likely unable to breathe in and out maximally for a whole minute, the patient may be asked to do so for 12 seconds and then the result is multiplied by 5. 15 seconds is also another interval that may be used and it would be multiplied by 4 to calculate the MVV.",
	},
	{
		question:
			"To rule out patent ductus arteriosis on an newborn, arterial blood is extracted from the right brachial artery. The PO2 from this sample should be compared to which of the following?\n\n A. PO2 from blood taken from the umbilical artery\n B. mixed venous blood PO2\n C. PCO2 from umbilical venous blood\n D. PvO2 in the blood taken from the same site",
		options: {
			A: "PO2 from blood taken from the umbilical artery",
			B: "mixed venous blood PO2",
			C: "PCO2 from umbilical venous blood",
			D: "PvO2 in the blood taken from the same site",
		},
		answer: "A",
		answer_explanation:
			"PO2 from blood taken from the umbilical artery\n\nPatent ductus arteriosus can be diagnosed by comparing the PO2 values between normal arterial PO2 (usually taken from the brachial or radial arteries) and umbilical artery PO2. If these two values are greater than 15 mmHg apart, patent ductus arteriosus (PDA) is considered present.",
	},
	{
		question:
			"A patient admitted for acute asthma is being discharged to home. The respiratory therapist notices an order for oral theophylline. Which of the following additional orders might the therapist expect?\n A. point-of-care blood glucose monitoring\n B. periodic theophylline blood level check\n C. Dilantin for treatment of seizure activity\n D. monthly measurement of DLco",
		options: {
			A: "point-of-care blood glucose monitoring",
			B: "periodic theophylline blood level check",
			C: "Dilantin for treatment of seizure activity",
			D: "monthly measurement of DLco",
		},
		answer: "B",
		answer_explanation:
			"periodic theophylline blood level check\n\nFor a patient who is taking oral theophylline, which is a xanthine medication, blood levels must be monitored to ensure adequate bronchodilation. Theophylline levels should be maintained between 10 and 20 µg. A theophylline level higher than that range can produce such negative clinical outcomes as seizures and death. A theophylline level lower than the range is simply said to be sub-therapeutic and does not provide long-term bronchodilation control.",
	},
	{
		question:
			"A 75-kg (165-lb), 32-year-old patient is in the emergency department (ED) complaining of shortness of breath. The respiratory therapist measures basic ventilatory parameters and records the following:\n\nVT 295 mL \nVC 1.1 L\nMIP -24 cm H2O\nRR 16/min\n\n\nThese results conclusively indicate the patient has\n A. increased PVR\n B. a neuromuscular disorder\n C. decreased alveolar ventilation\n D. decreased QS/QT",
		options: {
			A: "increased PVR",
			B: "a neuromuscular disorder",
			C: "decreased alveolar ventilation",
			D: "decreased QS/QT",
		},
		answer: "C",
		answer_explanation:
			"decreased alveolar ventilation\n\nOf the data listed here, the most alarming is the low tidal volume. With the patient who is 75 kg, the minimum tidal volume should be 375 mL. In this case, the patient is slightly less than that. The problem with the low tidal volume is that most of the volume occupies dead space and therefore presents less alveolar ventilation.",
	},
	{
		question:
			"A respiratory therapist observes the following data on a post bariatric surgery patient who has been receiving VC SIMV ventilation for 8 hours with the following settings and clinical and laboratory parameters:\n\nSpontaneous VT 400 mL \nMIP -35 cm H2O\nRR (spont) 16/min\nSpO2 98% \nFIO2 0.40\nMandatory rate 8/min\nVT (set) 500 mL\nPEEP 5 cm H2O \nWBC 18,000 cu mm\nK+ 4.1 mEq/L\nCl- 101 mEq/L\nNa+ 135 mEq/L \nRSBI 94\n\n\nThe patient is alert and appropriately responsive to questions. Which of the following should the therapist recommend?\n A. avoid ventilator liberation at this time\n B. spontaneous breathing trials\n C. SIMV, rate 6, reduce rate by 2 every 4 hours until at 4/min\n D. PS ventilation at 5 cm H2O with CPAP of 5 cm H2O",
		options: {
			A: "avoid ventilator liberation at this time",
			B: "spontaneous breathing trials",
			C: "SIMV, rate 6, reduce rate by 2 every 4 hours until at 4/min",
			D: "PS ventilation at 5 cm H2O with CPAP of 5 cm H2O",
		},
		answer: "A",
		answer_explanation:
			"avoid ventilator liberation at this time\n\nAlthough most all of the data listed here is consistent with readiness to wean from the mechanical ventilator, the presence of an elevated white blood cell count suggests the possibility of a bacterial infection. In such a case, ventilator liberation should be avoided until the underlying infection can be resolved.",
	},
	{
		question:
			"Which of the following should the respiratory therapist suspect if a neonate's transcutaneous oxygen reading shows a sudden rise in PO2?\n A. monitor is out of calibration\n B. capillary vessel temperature is insufficient\n C. probe membrane requires replacement\n D. disconnected probe",
		options: {
			A: "monitor is out of calibration",
			B: "capillary vessel temperature is insufficient",
			C: "probe membrane requires replacement",
			D: "disconnected probe",
		},
		answer: "D",
		answer_explanation:
			"disconnected probe\n\nA transcutaneous oxygen probe reads oxygen levels through minute profusion of gases through the skin. If the probe becomes detached, the likely result is an apparent increase in oxygenation because the probe is reading oxygen more plentifully in the ambient air.",
	},
	{
		question:
			"A parent of a 7-year-old child with asthma reports having difficulty controlling the asthmatic episodes. The patient has an albuterol inhaler and is taking beclovent by MDI twice daily. The mother indicates that episodes have been increasing and she is confused regarding when to continue treatment and when to call the doctor. The respiratory therapist should\n\n A. recommend switching from albuterol to Xopenex\n B. replace Beclovent with Azmacort\n C. set an appointment for allergen testing\n D. create an asthma action plan with the parent and patient",
		options: {
			A: "recommend switching from albuterol to Xopenex",
			B: "replace Beclovent with Azmacort",
			C: "set an appointment for allergen testing",
			D: "create an asthma action plan with the parent and patient",
		},
		answer: "D",
		answer_explanation:
			"create an asthma action plan with the parent and patient\n\nThe use of an asthma action plan can help the patient and/or caregiver manage the asthma, especially during episodic attacks. The plan helps direct when and how to treat oneself, as well as when to seek medical attention. The plan consists of personal monitored data translated to a green yellow red light status.",
	},
	{
		question:
			"Which of the following should be used to assess the degree of pain in an alert 5-year-old patient?\n A. Rate on a scale of 1-10\n B. New Ballard score\n C. Wong Baker faces\n D. Glasgow scale",
		options: {
			A: "Rate on a scale of 1-10",
			B: "New Ballard score",
			C: "Wong Baker faces",
			D: "Glasgow scale",
		},
		answer: "C",
		answer_explanation:
			"Wong Baker faces\n\nBecause the patient is so young, he or she is not likely able to quantify pain numerically. To overcome this, Wong-Baker faces may be used. These pictograms illustrate 10 faces with varying degrees of sadness to happiness. Children are usually very able to point to the picture that represents their level of pain or distress.",
	},
	{
		question:
			"A chest radiograph of an orally intubated patient shows the end of the radio-opaque line on the 8.0-mm ET tube to be 1 inch above he carina. Breaths sounds are clear and diminished bilaterally. The respiratory therapists should\n A. withdraw the tube by 2 inches\n B. advance the tube by 1 cm\n C. maintain tube position\n D. replace the tube with a 7.0-mm size ET tube",
		options: {
			A: "withdraw the tube by 2 inches",
			B: "advance the tube by 1 cm",
			C: "maintain tube position",
			D: "replace the tube with a 7.0-mm size ET tube",
		},
		answer: "C",
		answer_explanation:
			"maintain tube position\n\nNormally, the end of an endotracheal tube should be positioned approximately 2 cm above the Carina. However, in some cases, that distance may be expressed as approximate inches. 1 inch is approximately 2.54 cm and therefore one-inch is considered acceptable, and tube position should be maintained.",
	},
	{
		question:
			"A respiratory therapist is preparing a patient for chest tube removal. What instruction will the therapist provide to facilitate extraction of the tube(s)?\n\n A. pause at the top of a maximal inhalation prior to removal\n B. perform a Valsalva maneuver during withdraw\n C. exhale completely just prior to withdraw\n D. cough vigorously during removal",
		options: {
			A: "pause at the top of a maximal inhalation prior to removal",
			B: "perform a Valsalva maneuver during withdraw",
			C: "exhale completely just prior to withdraw",
			D: "cough vigorously during removal",
		},
		answer: "B",
		answer_explanation:
			"perform a Valsalva maneuver during withdraw\n\nA Valsalva maneuver consists of a patient attempting to exhale against a closed glottis. People commonly perform this maneuver when they wish to equalize their ears after a change in altitude. The maneuver allows the lungs to stay inflated during the actual removal of the chest tube from the pleural space.",
	},
	{
		question:
			"When creating a home-care plan for a 67-year-old male patient who is being discharged from the hospital after episodic acute-on-chronic hypercapnia, the respiratory therapist should investigate which of the following about the patient and/or his environment?\n\n A. history of hospitalization in the last 4 years\n B. current COHb level\n C. current activities of daily living\n D. record of immunization shots received in the last 3 years",
		options: {
			A: "history of hospitalization in the last 4 years",
			B: "current COHb level",
			C: "current activities of daily living",
			D: "record of immunization shots received in the last 3 years",
		},
		answer: "C",
		answer_explanation:
			"current activities of daily living\n\nOf the options listed the assessment of a patient's current activities of daily living, which include such activities as bathing, cooking, toileting, and others, should be assessed. Every effort should be made to help the patient accomplish ADLs in a way that does not tax the patient's ventilatory abilities too much. Assessment of ADLs is a key preparation for a homecare patient who will be discharged. If they are unable to accomplish those ADLs, they may need some professional assistance which should be planned for during the discharge process.",
	},
	{
		question:
			"A patient being monitored by a balloon-tipped pulmonary artery catheter (Swan-Ganz) requires transfer to the radiology department for a V/Q scan. Which of the following should be monitored to ensure proper placement of the Swan-Ganz catheter during transport?\n A. pulmonary artery\n B. pulmonary capillary wedge pressure\n C. SpO2 waveform\n D. central venous pressure",
		options: {
			A: "pulmonary artery",
			B: "pulmonary capillary wedge pressure",
			C: "SpO2 waveform",
			D: "central venous pressure",
		},
		answer: "A",
		answer_explanation:
			"pulmonary artery\n\nWhile transporting a patient with a pulmonary artery catheter, the most important consideration is the position of the catheter during movement. Since transports involve transfers from beds, it is sometimes easy to inadvertently change the catheter's position. Therefore, the most important monitoring technique includes watching the pulmonary artery pressure closely. If the pressure or the waveform changes significantly, an inadvertent change in pulmonary artery catheter position must be suspected.",
	},
	{
		question:
			"What pulmonary function maneuver will reveal information required to diagnose COPD?\n\n A. FVC\n B. SBN2\n C. DLCO\n D. SVC",
		options: {A: "FVC", B: "SBN2", C: "DLCO", D: "SVC"},
		answer: "A",
		answer_explanation:
			"FVC\n\nAlthough FVC is a volume, which is not directly helpful in diagnosing COPD, the actual name of the maneuver that is used to establish flow rates such as FEV1, is forced vital capacity (FVC). This can be confusing because the FVC is an actual volume, but when compared to time it also produces flow data, which is used to diagnose obstructive lung disease.",
	},
	{
		question:
			"A patient with suspected vocal cord dysfunction and paralysis is undergoing pulmonary function testing to further investigate the problem. Which of the following PFT exams will yield most information about the issue?\n A. FVL - Flow volume loop\n B. SBN2\n C. nitrogen washout\n D. DLCO",
		options: {
			A: "FVL - Flow volume loop",
			B: "SBN2",
			C: "nitrogen washout",
			D: "DLCO",
		},
		answer: "A",
		answer_explanation:
			"FVL\n\nA pulmonary function exam can reveal the presence of vocal cord dysfunction and/or paralysis by a flow volume loop (FVL). The condition will manifest itself by showing what is called a round loop, or a loop whose inspiratory phase looks similar to the expiratory phase. Normally, these two phases should look drastically different.",
	},
	{
		question:
			"Which of the following would best augment spontaneous tidal volumes for a patient undergoing ventilator liberation attempts?\n A. PS\n B. APRV\n C. SBT\n D. PRVC",
		options: {A: "PS", B: "APRV", C: "SBT", D: "PRVC"},
		answer: "A",
		answer_explanation:
			"PS\n\nOf the choices given, the use of PS, or pressure support, helps to increase or augment the size of spontaneous tidal volumes. This is especially helpful during any ventilator liberation strategy where the patient is in need of extra support.",
	},
	{
		question:
			"Examination of a 12-lead ECG reveals normal P-R interval with the P wave pointing up and the T wave pointing down. Based on this information the respiratory therapist should recommend\n A. diuresing the patient with Lasix (furosemide)\n B. increasing FIO2\n C. administering normal saline by IV\n D. administering a bolus of KCL",
		options: {
			A: "diuresing the patient with Lasix (furosemide)",
			B: "increasing FIO2",
			C: "administering normal saline by IV",
			D: "administering a bolus of KCL",
		},
		answer: "B",
		answer_explanation:
			"increasing FIO2\n\nA T wave on an ECG waveform that is pointing in a direction that is opposite from the direction of the P-wave, suggests the presence of cardiac ischemia and should be addressed by increasing supplemental oxygen administration to the patient",
	},
	{
		question:
			"A 62-year old male is admitted to the emergency department with increased somnolence and fever. The patient is stable, alert, and oriented, but quickly falls asleep with loud snoring when left alone. The following data is observed:\n\nHR 95/min \nBP 155/95 mm Hg\nTemp 38.3 deg C (101 deg F)\n\nFIO2 0.21 \npH 7.28\nPaCO2 67 torr\nPaO2 56 torr\nHCO3- 29 mEq/L\nBE -5 mEq/L\n\n\nThe respiratory therapist should recommend\n A. Orally intubate and being volume ventilation\n B. Initiate non-invasive ventilation\n C. Administer oxygen by nasal cannula at 2 L/min\n D. Begin oxygen by air-entrainment mask at 50%",
		options: {
			A: "Orally intubate and being volume ventilation",
			B: "Initiate non-invasive ventilation",
			C: "Administer oxygen by nasal cannula at 2 L/min",
			D: "Begin oxygen by air-entrainment mask at 50%",
		},
		answer: "B",
		answer_explanation:
			"Initiate non-invasive ventilation\n\nIn this situation, the patient has decreased ventilatory ability as demonstrated by a pH of 7.28. While this pH does not demonstrate complete ventilatory failure, it does show an impending problem. Therefore, it may be suitable to provide some level of ventilatory support through noninvasive ventilation. As a side note, it is concerning that the patient is demonstrating increased somnolence. In such a situation, the therapist should investigate the patient's ability to protect their own airway. Unfortunately, the question does not provide information that indicates the lack of ability to protect their airway and the best answer in this situation would be noninvasive ventilation. However, if there were evidence that the patient could not cough, could not follow instruction, or was not able to demonstrate orientation to time, person, and place, it would be appropriate to protect the patient's airway and provide invasive (intubated) mechanical ventilatory support.",
	},
	{
		question:
			"What is the total flow of gas in L/min for a patient who is receiving 60/40% heliox through an oxygen flow meter that is indicating a flow of 12 L/min?\n A. 21.6\n B. 19.2\n C. 12.0\n D. 16.8",
		options: {A: "21.6", B: "19.2", C: "12.0", D: "16.8"},
		answer: "D",
		answer_explanation:
			"16.8\n\nUse of an oxygen flow meter to administer various mixtures of Heliox will produce an erroneous result in terms of the indicated flow on the oxygen flow meter. Therefore, each Heliox gas mixture has a specific factor to convert the oxygen flow meter reading to the total gas flow. These conversion factors are: 1.8 for 80/20% mixture; 1.6 for 70/30% mixture; and 1.4 for 60/40% mixture. In this case, the factor of 1.4 should be used. Simply multiply that factor by the indicated flow on the oxygen flow meter, which is 12 L/min. 1.4 x 12 = 16.8 L/min.",
	},
	{
		question:
			"A 183-cm (6-ft), 87-kg (192-lb) male with ketoacidosis is receiving 60% oxygen by air-entrainment mask with the flow meter set at 15. SpO2 is fluctuating widely from minute to minute in spite of a good waveform and heart rate correlation. The most likely cause of this is\n A. a shift in the oxygen dissociation curve\n B. inadequate total gas flow\n C. unstable blood glucose levels\n D. poor patient position",
		options: {
			A: "a shift in the oxygen dissociation curve",
			B: "inadequate total gas flow",
			C: "unstable blood glucose levels",
			D: "poor patient position",
		},
		answer: "B",
		answer_explanation:
			"inadequate total gas flow\n\nAlthough this patient is receiving supplemental oxygen through an air-entrainment device, SpO2 is fluctuating widely from minute to minute. This is likely due to the inability to meet the patient's inspiratory demand based upon their minute ventilation. A patient who is in a state of ketoacidosis will also be breathing at an elevated rate and increased tidal volume. This suggests a remarkably large inspiratory demand. At 60%, with the flow meter at 15 L/min, an air-entrainment mask would provide a total flow of 30 L per minute. It is likely that this does not meet the inspiratory demand of the patient. Therefore, the source of the fluctuating SpO2 is likely due to inadequate total gas flow. Although the question does not ask for a resolution, an appropriate way to deal with this would be to provide a tandem aerosol device, which would also deliver 30 L per minute. Together, 60 L per minute would likely exceed the patient's inspiratory demand and prevent wide variation in oxygen saturation.",
	},
	{
		question:
			"Prior to beginning patient pulmonary function testing, a respiratory therapist uses a 3-L calibrated and certified syringe to confirm proper function of the pulmonary function testing equipment. The measurements are: 2.85 L, 2.99 L, 3.14 L. Which of the following should the therapist conclude?\n\n A. The syringe requires recalibration or recertification\n B. The equipment is acceptable for patient testing.\n C. Room temperature should be lowered before retesting\n D. The PFT equipment requires calibration or maintenance",
		options: {
			A: "The syringe requires recalibration or recertification",
			B: "The equipment is acceptable for patient testing.",
			C: "Room temperature should be lowered before retesting",
			D: "The PFT equipment requires calibration or maintenance",
		},
		answer: "B",
		answer_explanation:
			"The equipment is acceptable for patient testing.\n\nThe three-liter calibrated syringe should be trusted above the pulmonary function equipment. Therefore, after injecting air into the pulmonary function machine and finding these values, it can be concluded that the machine is inaccurate and requires maintenance or calibration. Although the syringe used to calibrate is 3 L, some deviation is allowed. That deviation is 2.85 to 3.15 or plus +/- 5%. In this case, all values obtained are within the margin of error and are acceptable enough to proceed with patient testing.",
	},
	{
		question:
			"A respiratory therapist suspects a 4-year-old child has aspirated a small plastic toy into the right lung. Which of the following would be most helpful in determining the nature of the object aspirated?\n A. chest radiograph\n B. bronchoscope\n C. echocardiogram\n D. transillumination",
		options: {
			A: "chest radiograph",
			B: "bronchoscope",
			C: "echocardiogram",
			D: "transillumination",
		},
		answer: "B",
		answer_explanation:
			"bronchoscope\n\nThe preferred method for inspection and removal of any aspirated object would be bronchoscopy. A bronchoscope is both diagnostic and therapeutic. In other words, it can be used to diagnose the patient but it can also be used to remove the object if found. A chest x-ray would be insufficient because the gamma rays would penetrate the plastic material and possibly not expose the item on the x-ray.",
	},
	{
		question:
			"Which of the following would be most helpful at quantifying exposure to pulmonary irritants?\n A. pack-years history of smoking\n B. tine test\n C. occupation\n D. single breath nitrogen elimination test",
		options: {
			A: "pack-years history of smoking",
			B: "tine test",
			C: "occupation",
			D: "single breath nitrogen elimination test",
		},
		answer: "A",
		answer_explanation:
			"pack-years history of smoking\n\nOf the options given, the assessment of pack-years history of smoking would provide significant information regarding the patient's exposure to pulmonary irritants.",
	},
	{
		question:
			"Thin, watery secretions are aspirated through the suction catheter on a patient during nasotracheal suctioning. Prior to repeating the procedure, the respiratory therapist should\n A. place an oropharyngeal airway\n B. ensure the patient is in sniffing position\n C. place a rolled-up blanket under the patient's shoulder\n D. decrease suction pressure",
		options: {
			A: "place an oropharyngeal airway",
			B: "ensure the patient is in sniffing position",
			C: "place a rolled-up blanket under the patient's shoulder",
			D: "decrease suction pressure",
		},
		answer: "B",
		answer_explanation:
			"ensure the patient is in sniffing position\n\nNasotracheal suctioning is facilitated by placing the patient with their head in sniffing position. Any other position could cause the suction catheter to enter the esophagus or prevent advancement.",
	},
	{
		question:
			'A chest radiograph on a patient shows a "wedge" pattern. This is most suggestive of\n A. pleural effusion\n B. pulmonary shunting\n C. pulmonary contusion\n D. pulmonary embolism',
		options: {
			A: "pleural effusion",
			B: "pulmonary shunting",
			C: "pulmonary contusion",
			D: "pulmonary embolism",
		},
		answer: "D",
		answer_explanation:
			"pulmonary embolism\n\nA wedge-shaped pattern on a chest radiograph is associated with a pulmonary embolism. When a clot forms in the pulmonary vasculature all vessels beyond do not receive blood. Since the pulmonary vasculature is somewhat like a tree the clotting of one vessel leads to a wedge-shape developing on the chest radiograph.",
	},
	{
		question:
			"A therapist is adjusting the cuff pressure for an orally intubated patient who has a 7.5-mm ET tube in place and is receiving VC ventilation. The therapist auscultates the neck region while inserting air into the cuff until the sound of air passage cannot be heard. The therapist is most likely utilizing which of the following techniques?\n A. Sledinger approach\n B. minimal leak technique\n C. Rashkind\n D. minimum seal technique",
		options: {
			A: "Sledinger approach",
			B: "minimal leak technique",
			C: "Rashkind",
			D: "minimum seal technique",
		},
		answer: "D",
		answer_explanation:
			"minimum seal technique\n\nAuscultation of the neck while adjusting gas pressure in the endotracheal tube cuff is associated with either the minimum seal technique or the minimal leak technique. Because the question describes the insertion of air until air passage around the cuff cannot be heard, this practitioner is using a minimum seal technique. This technique simply involves adding air to the cuff until no air passage around the cuff can be heard at the top of a ventilator breath. In contrast, a minimal leak technique consists of removing air from a sealed cuff until a very slight amount of air passage can be auscultated at the top of a mechanical inspiratory breath.",
	},
	{
		question:
			"A respiratory therapist is asked to quickly assess an intubated, mechanically ventilated patient for a possible pulmonary embolism. Which of the following would be most helpful?\n\n A. multiple wave-length spectrophotometer\n B. EZ-cap CO2 detector\n C. pulse oximeter\n D. capnometer",
		options: {
			A: "multiple wave-length spectrophotometer",
			B: "EZ-cap CO2 detector",
			C: "pulse oximeter",
			D: "capnometer",
		},
		answer: "D",
		answer_explanation:
			"capnometer\n\nA quick way to assess for the possibility of a pulmonary embolism is to compare exhaled CO2 with arterial CO2. If these two values are very far apart, a pulmonary embolism is highly suspected. Though, it is not diagnostic, it is a quick method of assessment. An example of this would be an arterial CO2 that is 45 with an exhaled CO2 a 16. This suggests that carbon dioxide is having difficulty leaving the blood and entering the alveoli. A clot in the pulmonary vasculature, which would prevent blood flow around a large portion of alveoli, could cause this clinical outcome.",
	},
	{
		question:
			"The following laboratory data is observed in a patient who has been experiencing massive vomiting for 12 hours:\n\nBUN 18 mg/dL \nK+ 2.8 mEq/L\nCl- 82 mEq/L\nNa+ 101 mEq/L\nRBC 6.0 g/dL\nHb 12 g/dL\n\n\nWhich of the following may also be observed?\n A. elevated pulmonary artery pressure\n B. flattened T waves on ECG\n C. loose bowel\n D. involuntary muscle contraction in the extremities",
		options: {
			A: "elevated pulmonary artery pressure",
			B: "flattened T waves on ECG",
			C: "loose bowel",
			D: "involuntary muscle contraction in the extremities",
		},
		answer: "B",
		answer_explanation:
			"flattened T waves on ECG\n\nClose examination of this data reveals that the patient has hypokalemia, as shown by a potassium level that is well below normal. Normal potassium is about 4.0 mEq/L. Low potassium will cause the ECG tracing to demonstrate what is called flattened or dull T waves.",
	},
	{
		question:
			"Physicians at the hospital have been increasingly ordering improper mixtures and combinations of similar class bronchodilators, causing significant delays in patient treatment. Which of the following would be MOST helpful at improving patient care with regard to bronchodilator therapy?\n\n A. establish a bronchodilator protocol\n B. administer medications as ordered, but notify the medical director\n C. place educational posters in various areas in the hospital\n D. communicate with each physician personally on proper ordering",
		options: {
			A: "establish a bronchodilator protocol",
			B: "administer medications as ordered, but notify the medical director",
			C: "place educational posters in various areas in the hospital",
			D: "communicate with each physician personally on proper ordering",
		},
		answer: "A",
		answer_explanation:
			"establish a bronchodilator protocol\n\nIn this question, there is an obvious indication that there is a broad problem among physicians to incorrectly order bronchodilator therapy. Although physicians could be spoken to individually, a more efficient method is to create a bronchodilator protocol. This is a documented set of instructions that allows a physician to order bronchodilator therapy, without having to provide the specifics of how the therapy is given or what drug or dosage is used. This approach helps to standardize care and avoid problems with physician orders.",
	},
	{
		question:
			"A patient's chest radiograph indicates scattered patchy infiltrates. The following parameters are observed while the patient receives VC A/C ventilation:\n\nHeight 168 cm (5 ft 6 in) \nTemperature 38.1 deg C (100.5 deg F)\nPressure (peak) 52 cm H2O\nPressure (plat) 38 cm H2O\nVT (set) 500 mL\nMandatory rate 16\nFIO2 1.0\nPEEP 10 cm H2O\n\n\nWhich of the following changes in mechanical ventilation should the respiratory therapist recommend?\n A. increase inspiratory flow\n B. increase PEEP\n C. decrease set VT\n D. decrease mandatory rate",
		options: {
			A: "increase inspiratory flow",
			B: "increase PEEP",
			C: "decrease set VT",
			D: "decrease mandatory rate",
		},
		answer: "C",
		answer_explanation:
			"decrease set VT\n\nThe presence of scattered patchy infiltrates, in conjunction with excessive plateau and peak pressures suggest the patient has a significant pulmonary compliance problem (low compliance). Particularly because plateau pressure is high, it is evident that the lungs are becoming stiffer. This data suggests the patient may have ARDS. Given the suspicion, it may be appropriate to utilize the ARDSnet protocol, which among various parameters, indicates the use of low tidal volumes ranging from 4-6 mL/kg",
	},
	{
		question:
			"Which of the following is consistent with acute-on-chronic hypercapnia?\n\n A. pH 7.27, PaCO2 70 torr, PaO2 60 torr\n B. pH 7.52, PaCO2 42 torr, PaO2 55 torr\n C. pH 7.30, PaCO2 50 torr, PaO2 65 torr\n D. pH 7.35, PaCO2 52 torr, PaO2 56 torr",
		options: {
			A: "pH 7.27, PaCO2 70 torr, PaO2 60 torr",
			B: "pH 7.52, PaCO2 42 torr, PaO2 55 torr",
			C: "pH 7.30, PaCO2 50 torr, PaO2 65 torr",
			D: "pH 7.35, PaCO2 52 torr, PaO2 56 torr",
		},
		answer: "A",
		answer_explanation:
			"pH 7.27, PaCO2 70 torr, PaO2 60 torr\n\nAn acute-on-chronic hypercapnia condition is indicated when the pH of a patient with COPD is below compensated values (7.35) and CO2 is higher than the normal baseline for that patient. In this case, a pH of 7.27 is considered uncompensated respiratory acidosis and the CO2 is well above the patient's normal predicted baseline.",
	},
	{
		question:
			"A patient is being evaluated for idiopathic dyspnea that occurs unpredictably at rest and during exertion. The following pulmonary function test reveals:\n\nPre-bronchodilator \nFEV1: 2.6 L\nFVC: 3.2 L\nPost-bronchodilator \nFEV1: 2.6 L\nFVC: 3.1 L\n\nChest radiograph and ECG are normal. Which of the following should the therapist recommend NEXT?\n\n A. cardiopulmonary stress testing\n B. V/Q scan\n C. analysis of CSF\n D. pulmonary angiography",
		options: {
			A: "cardiopulmonary stress testing",
			B: "V/Q scan",
			C: "analysis of CSF",
			D: "pulmonary angiography",
		},
		answer: "A",
		answer_explanation:
			"cardiopulmonary stress testing\n\nA patient who complains of periodic dyspnea may benefit from pulmonary function testing. However, these pulmonary function results do not provide helpful information or show a possible reason for the dyspnea. Therefore, a greater examination is indicated. Cardiopulmonary stress testing can determine if the heart is the source of the problem. Analysis of cerebral spinal fluid, a VQ scan, and pulmonary angiography are specific tests that confirm diagnoses in other areas and are premature in this case.",
	},
	{
		question:
			"A patient has just been diagnosed with obstructive sleep apnea and obesity hypoventilation syndrome. In addition to nasal nocturnal CPAP, on what else might the therapist educate the patient with regard to treatment options?\n\n A. neutrally adjusted ventilatory assist devices\n B. respiratory stimulating medication such as Dopram (doxapram)\n C. smoking alternatives\n D. weight loss surgery",
		options: {
			A: "neutrally adjusted ventilatory assist devices",
			B: "respiratory stimulating medication such as Dopram (doxapram)",
			C: "smoking alternatives",
			D: "weight loss surgery",
		},
		answer: "D",
		answer_explanation:
			"weight loss surgery\n\nFor a patient with obstructive sleep apnea, likely due to obesity, there are several options that can help treat the issue. One is weight loss, which can be done surgically through bariatric surgery. Another surgical procedure, though not offered here, consists of resection of various soft tissue structures in the oropharynx.",
	},
	{
		question:
			"Which of the following can cause inverted T waves on a 12-lead ECG?\n\n A. second degree heart block\n B. hypokalemia\n C. digitalis toxicity\n D. hyperkalemia",
		options: {
			A: "second degree heart block",
			B: "hypokalemia",
			C: "digitalis toxicity",
			D: "hyperkalemia",
		},
		answer: "C",
		answer_explanation:
			"digitalis toxicity\n\nThere are two causes of inverted T waves: cardiac ischemia and digitalis toxicity.",
	},
	{
		question:
			"How many portable oxygen E cylinders will be required for a 12-hour car trip with a flow rate of 2 L/min?\n\n A. 5\n B. 2\n C. 3\n D. 4",
		options: {A: "5", B: "2", C: "3", D: "4"},
		answer: "C",
		answer_explanation:
			"3\n\nTo answer this question you must know that the tank factor for an E cylinder is 0.28. A full E cylinder is 2200 PSI. Therefore 2200x0.28 is equal to 616 L. 616 divided by two is equal to 308 min. A 12 hour car trip is 720 min. Therefore the patient will need three E cylinders of oxygen to go on a 12 hour trip.",
	},
	{
		question:
			"An oral pharyngeal airway is measured from the patient's jaw angle to the tip of the chin. After placement, the semi-conscious patient repeatedly pushes the airway out with his tongue. The therapist should\n\n A. insert a larger airway.\n B. replace with a nasal endotracheal tube\n C. reinsert the oral airway.\n D. secure the airway with tape.",
		options: {
			A: "insert a larger airway.",
			B: "replace with a nasal endotracheal tube",
			C: "reinsert the oral airway.",
			D: "secure the airway with tape.",
		},
		answer: "C",
		answer_explanation:
			"reinsert the oral airway.\n\nIt is normal for a patient to reject an oral airway with their tongue. Reinserting the airway is most appropriate.",
	},
	{
		question:
			"A respiratory therapist changes from a normal adult ventilator circuit to a heated-wire circuit. Arterial blood gases are as follows:\n\npH 7.31 PaCO2 48 torr\nPaO2 81 torr\nHCO3- 24 mEq/L\nBE 0 mEq/L\n\nWhich of the following changes is most indicated?\n\n A. increase inspiratory flow rate\n B. revert to the normal non-heated wire circuit\n C. remove 50-100 mL of deadspace between the wye and patient\n D. add 100 mL of deadspace at the patient-ventilator interface",
		options: {
			A: "increase inspiratory flow rate",
			B: "revert to the normal non-heated wire circuit",
			C: "remove 50-100 mL of deadspace between the wye and patient",
			D: "add 100 mL of deadspace at the patient-ventilator interface",
		},
		answer: "C",
		answer_explanation:
			"remove 50-100 mL of deadspace between the wye and patient\n\nRemoving deadspace is the best option and is the only option that will reduce carbon dioxide. What also makes this appropriate is the fact that CO2 is off target by a very small amount, making a change in deadspace appropriate.",
	},
	{
		question:
			"A patient in the emergency room, who is breathing rapidly and deeply, is receiving heated aerosol by mask and large-volume nebulizer with FIO2 set at 1.0 and the flow set at 15 L/min. The therapist notices the aerosol disappears completely with each breath. Pulse oximetry shows an oxygen saturation of 88%. The therapist should recommend\n\n A. switch to a non-rebreathing mask at the same flow\n B. increase flow to 20 L/min\n C. decrease FIO2 to 0.6\n D. a tandem aerosol device",
		options: {
			A: "switch to a non-rebreathing mask at the same flow",
			B: "increase flow to 20 L/min",
			C: "decrease FIO2 to 0.6",
			D: "a tandem aerosol device",
		},
		answer: "D",
		answer_explanation:
			"a tandem aerosol device\n\nA large volume nebulizer set at 60% with a flow of 15 L/min is producing a total gas flow of 15 L/min. Because this patient is breathing rapidly and deeply and is hypoxic, it is likely that the total flow is not meeting the inspiratory demands of the patient. Because the flow of the large-volume nebulizer may not be increased significantly due to back pressure the solution for this case is to add another tandem large-volume nebulizer device, producing a total gas flow of 30 L/min.",
	},
	{
		question:
			"A respiratory therapist is assisting in a cardiopulmonary stress testing of a patient. After several increases in workload by increasing the incline on the treadmill, heart rate is 120/min, blood pressure is 130/95 mmHg and O2 Sat is 97%. Increasing the treadmill further shows no further increase in these values, but the patient appears pale in color. The therapist should recommend\n\n A. after two minutes, increase workload\n B. discontinue the test, document findings\n C. monitor the patient closely\n D. decrease workload",
		options: {
			A: "after two minutes, increase workload",
			B: "discontinue the test, document findings",
			C: "monitor the patient closely",
			D: "decrease workload",
		},
		answer: "B",
		answer_explanation: "discontinue the test, document findings",
	},
	{
		question:
			"The laboratory results of a sputum culture and sensitivity have returned for a patient who has bilateral bacterial pneumonia. The culture reveals streptococcus, a gram-positive bacteria. The medical records indicates the patient is allergic to penicillin. Which of the following should the respiratory therapist recommend?\n\n A. Amoxicillin\n B. Cephalexine (Keflex)\n C. Methacillin\n D. Nafcillin",
		options: {
			A: "Amoxicillin",
			B: "Cephalexine (Keflex)",
			C: "Methacillin",
			D: "Nafcillin",
		},
		answer: "B",
		answer_explanation:
			"Cephalexine (Keflex)\n\nNormally gram-positive bacteria may be killed by penicillin-type antibiotics. But, because the patient is allergic to penicillin, a suitable drug is cephalexine. Nafcillin and methacillin are suitable antibiotics when a patient is penicillin-resistant but not when they are allergic.",
	},
	{
		question:
			"A patient with cystic fibrosis develops rhonchi after 5 minutes of PEP therapy at 20 cm H2O. The respiratory therapist should\n\n A. switching to flutter therapy\n B. discontinue treatment, report to findings to the physician\n C. begin cool bland aerosol therapy\n D. continue the therapy",
		options: {
			A: "switching to flutter therapy",
			B: "discontinue treatment, report to findings to the physician",
			C: "begin cool bland aerosol therapy",
			D: "continue the therapy",
		},
		answer: "D",
		answer_explanation:
			"continue the therapy\n\nThe development of rhonchi in response to PEP therapy is considered to be a good outcome for the therapy. The purpose of the therapy is to mobilize and promote expectoration of secretions. The development of rhonchi is an indication that secretions are moving from small and middle-sized airways to the larger size airways where they may be naturally expectorated or suctioned. The therapy should be continued because it is effective.",
	},
	{
		question:
			"Excessive bubbling is noted in the water seal chamber of a chest tube drainage system. Which of the following could be the cause?\n\n A. water seal fluid level is too high\n B. water seal fluid level is too low\n C. wall pressure is too low\n D. leak in the drainage tubing coming from the patient",
		options: {
			A: "water seal fluid level is too high",
			B: "water seal fluid level is too low",
			C: "wall pressure is too low",
			D: "leak in the drainage tubing coming from the patient",
		},
		answer: "D",
		answer_explanation:
			"leak in the drainage tubing coming from the patient\n\nA leak in the drainage tubing coming from a patient's chest will cause the entrainment of additional air into the system which will show up as excessive bubbling in the water-seal compartment. Normally gentle bubbling should be observed. When excessive bubbling is present, a leak most likely exists somewhere between the waterseal compartment and the patient's lung tissue and may be caused from a perforation or hole in the lung tissue.",
	},
	{
		question:
			"Which of the following would result in an increase in anatomical airway resistance?\n A. an undersized endotracheal tube\n B. autoPEEP\n C. pulmonary secretions\n D. water build up in the ventilator circuit",
		options: {
			A: "an undersized endotracheal tube",
			B: "autoPEEP",
			C: "pulmonary secretions",
			D: "water build up in the ventilator circuit",
		},
		answer: "C",
		answer_explanation:
			"pulmonary secretions\n\nAirway resistance is increased in the presence of pulmonary secretions and bronchoconstriction. The other examples listed are not anatomically related.",
	},
	{
		question:
			"A patient presents in the emergency department (ED) with shallow, irregular respirations. Which of the following diagnostic procedures would best help rule out a pleural effusion?\n\n A. PA chest radiograph\n B. series of oblique chest radiographs\n C. pulmonary angiogram\n D. ventilation/perfusion (V/Q scan)",
		options: {
			A: "PA chest radiograph",
			B: "series of oblique chest radiographs",
			C: "pulmonary angiogram",
			D: "ventilation/perfusion (V/Q scan)",
		},
		answer: "B",
		answer_explanation:
			"series of oblique chest radiographs\n\nPleural effusions may be diagnosed through obtaining a lateral decubitus x-ray or by obtaining a series of x-rays from oblique angles and different positions.",
	},
	{
		question:
			"The pulmonary function data shows decreased flows but normal volumes with decreased DLCO\n\n A. asthma\n B. emphysema\n C. chronic bronchitis\n D. pulmonary fibrosis",
		options: {
			A: "asthma",
			B: "emphysema",
			C: "chronic bronchitis",
			D: "pulmonary fibrosis",
		},
		answer: "B",
		answer_explanation: "emphysema\n\nonly obstructive disease with a low DLCO",
	},
	{
		question:
			"A patient with ARDS receiving volume-controlled ventilation has the following arterial blood results on the settings below:\nMode Assist/control Mandatory rate 22\nVT 350 mL\nFIO2 0.70\nPEEP 22 cm H2O\nC.I. 2.2 L/min/m2\nHeart rate 102\npH 7.35\nPaCO2 45 torr\nPaO2 58 torr\nHCO3- 25 mEq/L\nBE +1 mEq/L\n\nWhich of the following changes is most appropriate?\n A. increase FIO2 to 0.8\n B. decrease PEEP to 20 cm H2O\n C. increase PEEP to 25 cm H2O\n D. decrease FIO2 to 0.6",
		options: {
			A: "increase FIO2 to 0.8",
			B: "decrease PEEP to 20 cm H2O",
			C: "increase PEEP to 25 cm H2O",
			D: "decrease FIO2 to 0.6",
		},
		answer: "C",
		answer_explanation:
			"increase PEEP to 25 cm H2O\n\nThis patient is hypoxic. To correct this problem either PEEP or FIO2 must be increased. Because the patient is already on 70% the next logical step is to increase PEEP. Hemodynamic data, namely a normal cardiac output, supports this change.",
	},
	{
		question:
			"A patient complaining of shortness of breath presents with severe hyperglycemia, marked hyperpnea, and normal oxygen levels. What should the respiratory therapist expect when analyzing an ABG?\n\n A. anemic hypoxemia\n B. metabolic acidosis\n C. compensated respiratory alkalosis\n D. respiratory failure",
		options: {
			A: "anemic hypoxemia",
			B: "metabolic acidosis",
			C: "compensated respiratory alkalosis",
			D: "respiratory failure",
		},
		answer: "B",
		answer_explanation:
			"metabolic acidosis\n\nMetabolic acidosis results in a significantly low pH, which causes an increased respiratory drive in order to attempt to normalize the pH. High glucose levels are often seen with metabolic acidosis. Oxygenation remains normal.",
	},
	{
		question:
			"A patient admitted to the emergency room for chest pain is diaphoretic with cold extremities. These data are most consistent with which of the following\n\n A. pulmonary tuberculosis\n B. myocardial infarction\n C. pneumothroax\n D. pulmonary embolism",
		options: {
			A: "pulmonary tuberculosis",
			B: "myocardial infarction",
			C: "pneumothroax",
			D: "pulmonary embolism",
		},
		answer: "B",
		answer_explanation:
			"myocardial infarction\n\nChest pain, diaphoresis, and cold extremities is associated with myocardial infarction. Other terminology that would describe this includes cold, wet, clammy skin. The next most appropriate action, although not asked in this question, would be to administer oxygen and to obtain an ECG.",
	},
	{
		question:
			"A patient is receiving bi-level therapy at the following settings:\nIPAP 15 cm H2O \nEPAP 5 cm H2O\nFIO2 0.5\n\nRecent arterial blood gas results reveal hypoxemia. To compensate, the respiratory therapist increases the EPAP setting to 8 cm H2O. What other change should be made to ensure a consistent level of ventilatory support is maintained during spontaneous breaths?\n\n A. Switch to full ventilatory support with a mandatory rate and a PEEP of 8 cm H2O\n B. Add a back-up rate\n C. Decrease IPAP to 10 cm H2O\n D. Increase IPAP to 18 cm H2O",
		options: {
			A: "Switch to full ventilatory support with a mandatory rate and a PEEP of 8 cm H2O",
			B: "Add a back-up rate",
			C: "Decrease IPAP to 10 cm H2O",
			D: "Increase IPAP to 18 cm H2O",
		},
		answer: "D",
		answer_explanation:
			"Increase IPAP to 18 cm H2O\n\nWhen correcting hypoxemia with noninvasive positive pressure ventilation, EPAP should be increased. However, so as not to decrease ventilation inadvertently, the IPAP setting should be increased by the same amount in order to keep the distance between EPAP an IPAP unchanged.",
	},
	{
		question:
			"Which of the following benefits from continuous low-flow supplemental oxygen should be expressed to a patient with COPD who is participating in a pulmonary rehabilitation program?\n\n A. establish normal pulmonary function volumes\n B. reverse lung disease\n C. return to normal life\n D. increase ability to perform ADLs",
		options: {
			A: "establish normal pulmonary function volumes",
			B: "reverse lung disease",
			C: "return to normal life",
			D: "increase ability to perform ADLs",
		},
		answer: "D",
		answer_explanation: "increase ability to perform ADLs",
	},
	{
		question:
			"A patient scheduled for abdominal surgery can be assessed for potential post-operative risk for complications by assessing which of the following?\n\n A. C(a-vDO2)\n B. alveolar oxygen tension on room air (FIO2 0.21)\n C. incentive spirometry with flow-type spirometer\n D. basic spirometry",
		options: {
			A: "C(a-vDO2)",
			B: "alveolar oxygen tension on room air (FIO2 0.21)",
			C: "incentive spirometry with flow-type spirometer",
			D: "basic spirometry",
		},
		answer: "D",
		answer_explanation: "basic spirometry",
	},
	{
		question:
			"While turning a patient for a V/Q scan, the therapist suspects the endotracheal tube changed position. Currently the ET tube markings are 19 at the lip line. The therapist should FIRST do which of the following to assess tube position?\n\n A. observe chest rise\n B. withdraw the ET tube by 5 cm\n C. advance the ET tube by 2 cm\n D. obtain a chest radiograph",
		options: {
			A: "observe chest rise",
			B: "withdraw the ET tube by 5 cm",
			C: "advance the ET tube by 2 cm",
			D: "obtain a chest radiograph",
		},
		answer: "A",
		answer_explanation:
			"observe chest rise\n\nWhen trying to quickly determine the location of the endotracheal tube the action that must be taken first is that which is the quickest. Of the options offered, observing chest rise is the quickest.",
	},
	{
		question:
			"Which of the following pulmonary function volume calculations may be used to determine functional residual capacity (FRC)?\n\n A. ERV-RV\n B. VT + ERV + RV\n C. TLC - IC\n D. VC - ERV",
		options: {A: "ERV-RV", B: "VT + ERV + RV", C: "TLC - IC", D: "VC - ERV"},
		answer: "C",
		answer_explanation:
			"TLC - IC\n\nFRC may be calculated in a variety of ways by adding and subtracting specific lung volumes. To answer this question, one must take each option and do the calculation to determine if the desired volume can be achieved. In this case, FRC may be calculated by subtracting inspiratory capacity (IC) from total lung capacity (TLC).",
	},
	{
		question:
			"A radiographic image shows an upper lobe cavitation. Which of the following conditions is most closely associated with this finding?\n\n A. Tuberculosis\n B. Pneumonia\n C. Bronchiectasis\n D. Asbestosis",
		options: {
			A: "Tuberculosis",
			B: "Pneumonia",
			C: "Bronchiectasis",
			D: "Asbestosis",
		},
		answer: "A",
		answer_explanation:
			"Tuberculosis\n\nCavitations in the upper lobes are generally associated with tuberculosis. Bronchiectasis is a condition affecting the bronchioles or airways and is seen throughout the lung. Pneumonia is not a cavitation and can also be seen throughout the lung on X-ray. Asbestosis is seen throughout the lung with reduced lucency.",
	},
	{
		question:
			"A patient has a fenestrated tracheostomy tube configured to allow speech. In preparation for a positive pressure breathing treatment, the respiratory therapist should do which of the following?\n\n A. remove the cap, inflate the cuff, insert the inner cannula\n B. remove the inner cannula, deflate the cuff, place the cap\n C. inflate the cuff, insert the inner cannula, remove the cap\n D. remove the cap, deflate the cuff and replace the inner cannula",
		options: {
			A: "remove the cap, inflate the cuff, insert the inner cannula",
			B: "remove the inner cannula, deflate the cuff, place the cap",
			C: "inflate the cuff, insert the inner cannula, remove the cap",
			D: "remove the cap, deflate the cuff and replace the inner cannula",
		},
		answer: "A",
		answer_explanation:
			"remove the cap, inflate the cuff, insert the inner cannula",
	},
	{
		question:
			"A 7-year-old patient is receiving mechanical ventilation with a PB 840 volume ventilator with an adult circuit. The end-tidal CO2 monitor is indicating a PetCO2 of 56 mmHg. Which of the following is most appropriate?\n\n A. remove 50 mL of deadspace\n B. add 50 mL of deadspace\n C. increase mandatory rate\n D. switch to a pediatric circuit",
		options: {
			A: "remove 50 mL of deadspace",
			B: "add 50 mL of deadspace",
			C: "increase mandatory rate",
			D: "switch to a pediatric circuit",
		},
		answer: "C",
		answer_explanation:
			"increase mandatory rate\n\nThis may be done by increasing tidal volume or increasing rate. Adding dead space would increase end-tidal and arterial CO2 even further. Removing dead space, while a step in the right direction, isn't a sufficient response. Changing to a pediatric circuit is not helpful.",
	},
	{
		question:
			"A patient undergoing pulmonary function testing in a body box has an airway resistance (Raw) of 2.7 cm H2O/L/sec. The respiratory therapist should provide which of the following interpretations?\n\n A. asthma\n B. Guillain-Barre Syndrome\n C. normal results\n D. restrictive pulmonary disease",
		options: {
			A: "asthma",
			B: "Guillain-Barre Syndrome",
			C: "normal results",
			D: "restrictive pulmonary disease",
		},
		answer: "A",
		answer_explanation:
			"asthma\n\nAn airway resistance of 2.7 cmH2O/L/sec is considered high. Elevated airway resistance is associated with asthma.",
	},
	{
		question:
			"A written teaching plan for asthma patients using peak flow meters should include\n\n A. the importance of trending over baseline results.\n B. avoidance of placing one's teeth around the mouthpiece.\n C. the meaning of red, yellow and green zone results.\n D. the unit of measure for the flow meter.",
		options: {
			A: "the importance of trending over baseline results.",
			B: "avoidance of placing one's teeth around the mouthpiece.",
			C: "the meaning of red, yellow and green zone results.",
			D: "the unit of measure for the flow meter.",
		},
		answer: "C",
		answer_explanation: "the meaning of red, yellow and green zone results.",
	},
	{
		question:
			"A patient is experiencing reduced tidal volumes on a volume-cycled ventilator. There is a gurgling sound coming from his mouth with each breath and the endotracheal tube marking is 19 cm at the lips. The respiratory therapist should\n\n A. advance the endotracheal tube 5 cm.\n B. extubate the patient and provide manual ventilation.\n C. add air to the pilot balloon while auscultating over the neck.\n D. replace the endotracheal tube.",
		options: {
			A: "advance the endotracheal tube 5 cm.",
			B: "extubate the patient and provide manual ventilation.",
			C: "add air to the pilot balloon while auscultating over the neck.",
			D: "replace the endotracheal tube.",
		},
		answer: "C",
		answer_explanation:
			"add air to the pilot balloon while auscultating over the neck.",
	},
	{
		question:
			"A patient is brought to the emergency room after ascending too quickly while scuba diving in the ocean. The patient is complaining of abdominal pain. The respiratory therapist should recommend\n\n A. hyperbaric chamber\n B. Bi-level therapy\n C. heliox therapy\n D. oxygen by non-rebreathing mask",
		options: {
			A: "hyperbaric chamber",
			B: "Bi-level therapy",
			C: "heliox therapy",
			D: "oxygen by non-rebreathing mask",
		},
		answer: "A",
		answer_explanation:
			'hyperbaric chamber\n\nFor a patient with "the bends", the best treatment is to artificially increase the pressure of their environment. This is done with a hyperbaric chamber. Once the patient is at a deeper simulated pressure, the environmental pressure may be reduced slowly.',
	},
	{
		question:
			"Which of the following test results would NOT be helpful in determining whether a patient should receive Bi-level therapy with supplemental oxygen?\n\n A. MIP -22 cm H2O\n B. VE 9.0 L/min\n C. MVV 50 L in 12 seconds\n D. pH 7.29",
		options: {
			A: "MIP -22 cm H2O",
			B: "VE 9.0 L/min",
			C: "MVV 50 L in 12 seconds",
			D: "pH 7.29",
		},
		answer: "C",
		answer_explanation:
			"MVV 50 L in 12 seconds\n\nMVV, or maximum voluntary ventilation is a test completed during a complete pulmonary function evaluation. It is not a part of weaning parameters assessed on mechanically ventilated patients. It is also a test that should be completed on patients who are otherwise very healthy and in their best condition, not a critically ill patient receiving mechanical ventilation. The other tests are appropriate to assess when deciding to terminate mechanical ventilation.",
	},
	{
		question:
			"The following ECG waveform is noted on the monitor while performing endotracheal suctioning using a 12 Fr catheter at a wall suction pressure of 110 mmHg. Which of the following is the mostly likely cause?\n\nA. hypokalemia\n B. arterial hypoxemia\n C. oxygen toxicity\n D. vagal nerve stimulation",
		options: {
			A: "hypokalemia",
			B: "arterial hypoxemia",
			C: "oxygen toxicity",
			D: "vagal nerve stimulation",
		},
		answer: "B",
		answer_explanation:
			"arterial hypoxemia\n\nPremature ventricular contractions (PVCs) can be caused by suctioning. Suctioning causes alveolar oxygen tensions to fall thus causing arterial hypoxemia. Vagal nerve stimulation also occurs but this is not associated with PVCs.",
	},
	{
		question:
			"Which of the following can be done to increase the effectiveness of endotracheal suctioning?\n\n A. increase suction catheter size\n B. use a coude-tipped catheter\n C. apply intermittent suction during removal of the catheter\n D. decrease suction catheter length",
		options: {
			A: "increase suction catheter size",
			B: "use a coude-tipped catheter",
			C: "apply intermittent suction during removal of the catheter",
			D: "decrease suction catheter length",
		},
		answer: "A",
		answer_explanation:
			"increase suction catheter size\n\nSuctioning effectiveness may be increased by increasing suction catheter size or diameter, by increasing suction pressure, or by increasing suction duration. Of the options given, increasing catheter size and increasing suction pressure are appropriate.",
	},
	{
		question:
			"A 62-year old male presents in the emergency department with the following arterial blood gas results while receiving supplemental oxygen by nasal cannula at 5 L/min.\n\npH 7.53 \nPaCO2 28 torr\nPaO2 48 torr\nHCO3 - 22 mEq/L\nBE -2 mEq/L\n\nThe respiratory therapist should conclude which of the following regarding the patient's condition?\n\n A. right-side heart failure is present\n B. metabolic alkalosis is present\n C. increase in systemic vascular resistance\n D. intrapulmonary shunting is occurring",
		options: {
			A: "right-side heart failure is present",
			B: "metabolic alkalosis is present",
			C: "increase in systemic vascular resistance",
			D: "intrapulmonary shunting is occurring",
		},
		answer: "D",
		answer_explanation:
			"intrapulmonary shunting is occurring\n\nFor a question like this, each option must be considered separately to determine if true or false. Only one of these options would be considered true. Examination of the pH and PCO2 shows a respiratory cause of the alkalosis. There is not enough data to indicate right heart failure or any changes in systemic vascular resistance. This leaves the option of intrapulmonary shunting. To determine if a patient is shunting, the FIO2 and PaO2 should be observed and compared. In this case, the patient is receiving 5 L/min by nasal cannula. On this setting PaO2 should be in excess of 100 mmHg. But, this patient is suffering from moderate hypoxemia. Even though the specific A-a gradient is unknown, it can still be assumed that pulmonary shunting is occurring.",
	},
	{
		question:
			"A respiratory therapist notices the dicrotic notch is missing from the pulmonary artery catheter waveform. After unsuccessfully attempting to resolve the problem by aspiration, the therapist should\n\n A. withdraw the catheter\n B. replace the catheter\n C. rotate the catheter\n D. advance the catheter",
		options: {
			A: "withdraw the catheter",
			B: "replace the catheter",
			C: "rotate the catheter",
			D: "advance the catheter",
		},
		answer: "C",
		answer_explanation:
			"rotate the catheter\n\nThe absence of a dicrotic notch on a pulmonary artery waveform is an indication that the catheter is being occluded in some way. To correct this problem, the therapist should first aspirate the catheter. If this does not remedy pressure dampening, flushing the catheter is the next option. Finally, the catheter should be rotated. The only option given in this question that is appropriate is rotation of the catheter.",
	},
	{
		question:
			"A patient is receiving non-invasive positive pressure ventilation with an IPAP of 16 and an EPAP of 8 cmH2O. The following blood gas data on these settings is available:\n\npH 7.30 \nPaCO2 52 mm Hg\nPaO2 80 mm Hg\nHCO3- 24 mEq/L\nBE 0 mEq/L\n\nWhich of the following change is most appropriate?\n A. increase IPAP and EPAP\n B. decrease EPAP\n C. decrease IPAP\n D. increase IPAP",
		options: {
			A: "increase IPAP and EPAP",
			B: "decrease EPAP",
			C: "decrease IPAP",
			D: "increase IPAP",
		},
		answer: "D",
		answer_explanation:
			"increase IPAP\n\nThis patient is under ventilating but has adequate oxygenation. CO2 may be decreased by increasing the distance between the IPAP and EPAP pressures. This can be done by simply increasing IPAP.",
	},
	{
		question:
			"Prior to performing an arterial puncture, a modified Allen's test is performed on the patient's right radial artery. When the ulnar artery occlusion is released, a pink color returns in 3 seconds. Based on this result the respiratory therapist should\n\n A. perform a femoral artery puncture\n B. perform an Allen's test on the left radial artery\n C. proceed with the puncture of the right radial artery\n D. perform a right brachial artery puncture",
		options: {
			A: "perform a femoral artery puncture",
			B: "perform an Allen's test on the left radial artery",
			C: "proceed with the puncture of the right radial artery",
			D: "perform a right brachial artery puncture",
		},
		answer: "C",
		answer_explanation: "proceed with the puncture of the right radial artery",
	},
	{
		question:
			"A patient with asthma monitors their peak flow in the morning and documents that peak flow is 60% of his usual baseline. Based on the NAEP and the patient's asthma action plan, the patient should\n\n A. take a short-acting beta 2-agonist, continue to monitor peak flow\n B. check peak flow again in 2 hours\n C. contact their physician\n D. report to the hospital",
		options: {
			A: "take a short-acting beta 2-agonist, continue to monitor peak flow",
			B: "check peak flow again in 2 hours",
			C: "contact their physician",
			D: "report to the hospital",
		},
		answer: "A",
		answer_explanation:
			"take a short-acting beta 2-agonist, continue to monitor peak flow\n\nAccording to the national asthma guidelines, a patient who is self-monitoring peak flow and is only able to achieve 60% of baseline should first take a short-term bronchodilator (a short acting beta-II agonist), and continued to monitor peak flows.",
	},
	{
		question:
			"A patient is experiencing shortness of breath. The radiological AP view of the chest shows a blunt costophrenic angle in the left lower lobe. This would indicate\n\n A. pulmonary embolus.\n B. atelectasis.\n C. pneumonia.\n D. pleural effusion.",
		options: {
			A: "pulmonary embolus.",
			B: "atelectasis.",
			C: "pneumonia.",
			D: "pleural effusion.",
		},
		answer: "D",
		answer_explanation:
			'pleural effusion.\n\nA chest X-ray reveals a pleural effusion if we see descriptors such as "blunt or obliterated costophrenic angles", or "concave superior interface".',
	},
	{
		question:
			"A therapist is unable to obtain a reading with a galvanic-type oxygen analyzer when attempting to measure oxygen percentage inside an infant oxygen hood while heated humidity is also applied. The therapist should?\n\n A. change the electrode\n B. change the batteries\n C. change the electrolyte solution\n D. discontinue heated humidity",
		options: {
			A: "change the electrode",
			B: "change the batteries",
			C: "change the electrolyte solution",
			D: "discontinue heated humidity",
		},
		answer: "A",
		answer_explanation:
			"change the electrode\n\nWhen a galvanic-type oxygen analyzer fails to produce a reading, it is likely a problem with the power source. These type of analyzers do not have batteries. The electrode is in essence a battery. So, the solution is to change the electrode. The electrode is also called the fuel cell.",
	},
	{
		question:
			"A post-operative patient is receiving positive-pressure ventilation with an IPPB while recovering from anesthesia. The mandatory rate is 10/min. Inspiratory pressure is set to 18 cm H2O. Gradually the rate increases to 16/min while the monometer needle is showing a significant negative deflection before inhalation begins. The pressure monometer no longer rises smoothly during inhalation. What should the respiratory therapist do?\n\n A. increase sensitivity\n B. sedate the patient\n C. decrease inspiratory flow rate\n D. wean the patient",
		options: {
			A: "increase sensitivity",
			B: "sedate the patient",
			C: "decrease inspiratory flow rate",
			D: "wean the patient",
		},
		answer: "A",
		answer_explanation:
			"increase sensitivity\n\nThe gradual increase in respiratory rate indicates that the patient is waking up from anesthesia, as expected. The negative deflection before inhalation indicates that the machine sensitivity is too low-requiring the patient to work too hard to trigger inspiration. The manometer not rising smoothly indicates the flow rate is also too low. It is not appropriate to sedate the patient but rather allow him to wake up with more applicable settings.",
	},
	{
		question:
			"What radiographic finding would be most likely associated with a patient who is experiencing active tuberculosis?\n\n A. Atelectasis in the upper lobes\n B. Cavitation in a lower lobe\n C. Mass in the left middle lobe\n D. Pleural cavitation in the upper lobes",
		options: {
			A: "Atelectasis in the upper lobes",
			B: "Cavitation in a lower lobe",
			C: "Mass in the left middle lobe",
			D: "Pleural cavitation in the upper lobes",
		},
		answer: "D",
		answer_explanation:
			"Pleural cavitation in the upper lobes\n\nCavitations in the upper lobes are generally associated with tuberculosis, and an X-ray with this finding should assure the respiratory therapist of the diagnosis. Plate-like or patchy infiltrates on X-ray are seen with atelectasis. A mass, which is solid, (opposite of a cavitation) is often associated with cancer.",
	},
	{
		question:
			"A patient in the emergency room has the following arterial blood gas results:\npH 7.18 \nPaCO2 30 mmHg\nPaO2 80 mmHg\nHCO3- 18 mEq/L\nBE -7 mEq/LS\nAT 94%\n\nThis data is most typical of which of the following patient diagnoses?\n A. ARDS\n B. Flail chest\n C. COPD\n D. diabetic ketoacidosis",
		options: {
			A: "ARDS",
			B: "Flail chest",
			C: "COPD",
			D: "diabetic ketoacidosis",
		},
		answer: "D",
		answer_explanation:
			"diabetic ketoacidosis\n\nThis patient has a profound state acidosis as manifested by a low pH of 7.18. CO2 is low, which is associated with alkalosis. In this case the alkalosis is being caused by a profound decrease in HCO3-. This combination is associated with diabetic ketoacidosis.",
	},
	{
		question:
			"With the addition of a spacer, the patient self-administering MDIs\n\n A. does not have to closely correlate actuation and inhalation.\n B. should take a slower, deeper breath.\n C. may take a smaller dose than ordered.\n D. does not have to hold their breath after each maneuver.",
		options: {
			A: "does not have to closely correlate actuation and inhalation.",
			B: "should take a slower, deeper breath.",
			C: "may take a smaller dose than ordered.",
			D: "does not have to hold their breath after each maneuver.",
		},
		answer: "A",
		answer_explanation:
			"does not have to closely correlate actuation and inhalation.",
	},
	{
		question:
			"A patient complaining of shortness of breath with exercise has the following pre/post bronchodilator results. Which is the most meaningful indicator that a bronchodilator is effective?\n\n A. 10% improvement in FEV1/FVC%.\n B. Patient reports the maneuver is easier after the bronchodilator\n C. 15% improvement in FEV1\n D. 9% improvement in FVC",
		options: {
			A: "10% improvement in FEV1/FVC%.",
			B: "Patient reports the maneuver is easier after the bronchodilator",
			C: "15% improvement in FEV1",
			D: "9% improvement in FVC",
		},
		answer: "C",
		answer_explanation:
			"15% improvement in FEV1\n\nImprovement with bronchodilator therapy is considered significant if flows increase by 12% or more, or if FEV1 increases by at least 200 mL. In this example we see a 15% improvement in FEV1, well beyond the 12% threshold.",
	},
	{
		question:
			"An 8-year-old pediatric patient with a 6.0 mm endotracheal tube requiring endotracheal suctioning is experiencing bradycardia during the procedure. Suction pressure is set to -100 mm Hg. A respiratory therapist is suctioning for approximately 15 seconds using a 9 Fr catheter and is able to clear the airway effectively. To remedy the problem, the therapist should\n\n A. increase the pressure to -110 mm Hg and decrease duration to 5 seconds.\n B. decrease catheter size.\n C. decrease suction duration time.\n D. decrease the suction pressure.",
		options: {
			A: "increase the pressure to -110 mm Hg and decrease duration to 5 seconds.",
			B: "decrease catheter size.",
			C: "decrease suction duration time.",
			D: "decrease the suction pressure.",
		},
		answer: "C",
		answer_explanation:
			"decrease suction duration time.\n\nIf suctioning is not adequate, correct the problem in this order:\n1. check connections, change collection bottle if full 2. ensure suction pressure is in the right range 3. increase to the maximum size catheter within range 4. increase pressure within range 5. increase suction time",
	},
	{
		question:
			"A patient is receiving oxygen by non-rebreathing mask at a flow of 10 L/min. Spontaneous tidal volume is 500 mL and spontaneous respiratory rate is 20 /min. What change should the therapist recommend?\n\n A. Increase flow until reservoir bag collapses completely with each breath\n B. Ensure an adequate mask seal on the patient's face\n C. Increase flow to 14 L/min\n D. Order arterial blood gas analysis",
		options: {
			A: "Increase flow until reservoir bag collapses completely with each breath",
			B: "Ensure an adequate mask seal on the patient's face",
			C: "Increase flow to 14 L/min",
			D: "Order arterial blood gas analysis",
		},
		answer: "C",
		answer_explanation:
			"Increase flow to 14 L/min\n\nA patient who is breathing a tidal volume of 600 mL at a rate of 20/min has a minute ventilation of 12 L. If the non-rebreathing mask is set at only 10 L/min, the total flow to the patient is insufficient. The flowrate should meet or exceed the inspiratory demand of the patient. Therefore, increasing to 14 L/min is most appropriate.",
	},
	{
		question:
			"A 72-kg (158-lb) patient is receiving volume-cycled mechanical ventilation on the following settings:\nMode SIMV \nRate 12\nVT 550 ml\nFIO2 0.40\nPEEP 10 cm H2O\n\nWhich of the following alarm settings is most appropriate?\n\n A. low VT alarm of 450 mL\n B. low PEEP alarm of 2 cm H2O\n C. high VT alarm of 700 mL\n D. low VT alarm of 325 mL",
		options: {
			A: "low VT alarm of 450 mL",
			B: "low PEEP alarm of 2 cm H2O",
			C: "high VT alarm of 700 mL",
			D: "low VT alarm of 325 mL",
		},
		answer: "A",
		answer_explanation:
			"low VT alarm of 450 mL\n\nThe low tidal volume alarm should be set at about 100 mL below the preset/returned tidal volume. Be prepared to lower the low VT alarm when the patient's lung compliance increases.",
	},
	{
		question:
			"Following a cardiac arrest and emergency intubation, breath sounds are bilaterally equal with manual ventilation on a male patient in the emergency room. Capnography shows an end-tidal CO2 of 5 mm Hg. What would the respiratory therapist expect to happen to the ETCO2 over the next few minutes with adequate ventilation provided?\n\n A. gradually increase\n B. a sudden rise to normal\n C. gradual decrease\n D. remain low",
		options: {
			A: "gradually increase",
			B: "a sudden rise to normal",
			C: "gradual decrease",
			D: "remain low",
		},
		answer: "A",
		answer_explanation:
			"gradually increase\n\nAfter cardiac arrest, which includes ventilatory arrest, end-tidal CO2 will be very low because niether ventilation nor perfusion have been occurring, and there will be very little CO2 in the alveoli. As circulation and ventilation increase with manual ventilation, the CO2 should start to enter the lung, causing a gradual increase in exhaled CO2.",
	},
	{
		question:
			"A chest radiograph indicates the presence of plate-like infiltrates. This finding is most closely associated with which of the following?\n\n A. mesothelioma\n B. mycoplasma pneumonia\n C. CHF\n D. atelectasis",
		options: {
			A: "mesothelioma",
			B: "mycoplasma pneumonia",
			C: "CHF",
			D: "atelectasis",
		},
		answer: "D",
		answer_explanation: "atelectasis",
	},
	{
		question:
			"A respiratory therapist has provided Albuterol treatments via SVN to a patient in the emergency room for shortness of breath. The patient now has bleeding gums and epistaxis. What should the physician check?\n\n A. prothrombin time\n B. arterial blood gas\n C. sinus X-ray\n D. allergic response to Albuterol",
		options: {
			A: "prothrombin time",
			B: "arterial blood gas",
			C: "sinus X-ray",
			D: "allergic response to Albuterol",
		},
		answer: "D",
		answer_explanation:
			"allergic response to Albuterol\n\nBleeding from the mouth, nose, or gums is a rare but serious symptom of an allergic response to albuterol.",
	},
	{
		question:
			"The following arterial blood gas values are reported for a patient who is weaning from mechanical ventilation. There is no notable change in the patient's condition.\n0800 hrs:\npH 7.42\nPaCO2 37 torr\nPaO2 80 torr\nHCO3- 26 mEq/L\nFIO2 0.40\n\n1000 hrs :\npH7.38\nPaCO2 32 torr\nPaO2 41 torr\nHCO3- 26 mEq/L\nFIO2 0.40\n\n A. repeat the arterial draw.\n B. increase the FIO2 to 0.50.\n C. extubate the patient.\n D. increase the FIO2 to 1.0.",
		options: {
			A: "repeat the arterial draw.",
			B: "increase the FIO2 to 0.50.",
			C: "extubate the patient.",
			D: "increase the FIO2 to 1.0.",
		},
		answer: "A",
		answer_explanation:
			"repeat the arterial draw.\n\nThe respiratory therapist should question all laboratory results to assure that they match the clinical scenario prior to reporting them. In this example, the patient's condition has not changed with the PaO2 of 41 torr. The sample might be a venous sample, and therefore should be redrawn.",
	},
	{
		question:
			"A physician in the emergency department has asked that a patient be evaluated for pulmonary obstruction while in the emergency room. Which of the following tests should the therapist plan on performing?\n\n A. pulmonary assessment by body box\n B. maximum inspiratory pressure\n C. beside pulmonary function testing\n D. chest radiographic film at full expiration",
		options: {
			A: "pulmonary assessment by body box",
			B: "maximum inspiratory pressure",
			C: "beside pulmonary function testing",
			D: "chest radiographic film at full expiration",
		},
		answer: "C",
		answer_explanation:
			"beside pulmonary function testing\n\nA patient in emergency room will be unable to perform complex pulmonary function testing. However, to determine if the patient is obstructive or restrictive, a bedside pulmonary function test is adequate. Pulmonary function testing such as DLCO, nitrogen washout, helium dilution, and airway resistance determined by body box would not be appropriate at bedside in the emergency room.",
	},
	{
		question:
			"A 50-year-old male presents in the emergency department (ED) complaining of frequent vomiting. Arterial blood gas results on room air show:\npH 7.54 \nPaCO2 41 torr\nPaO2 96 torr\nHCO3- 30 mEq/L\nBE +6 mEq/L\nWhich of the following would account for this blood gas anomaly?\n\n A. K+ 4.9 mEq/L\n B. K+ 3.4 mEq/L\n C. Hyperventilation\n D. Cl- 110 mEq/L",
		options: {
			A: "K+ 4.9 mEq/L",
			B: "K+ 3.4 mEq/L",
			C: "Hyperventilation",
			D: "Cl- 110 mEq/L",
		},
		answer: "B",
		answer_explanation:
			"K+ 3.4 mEq/L\n\nCarbon dioxide in this blood gas shows adequate ventilation. However, a pH of 7.54 is an indication of alkalosis. Because the alkalosis cannot be attributed to an elevated CO2, it must be caused metabolically. Observation of the bicarb shows an elevation. Of the options offered the most likely cause of this elevation is the potassium of 3.4 mEq/L",
	},
	{
		question:
			"The physician requests a recommendation for the delivery of surfactant therapy for a 32-week gestational neonate weighing 1800 grams with IRDS. The respiratory therapist should recommend which of the following?\n\n A. Intubate with a size 3.0mm endotracheal tube for the delivery of surfactant\n B. Provide one dose of Exosurf, turning the patient from side to side\n C. Review the APGAR scores prior to therapy\n D. Provide 2 doses of Survanta using 2.5 mL/kg",
		options: {
			A: "Intubate with a size 3.0mm endotracheal tube for the delivery of surfactant",
			B: "Provide one dose of Exosurf, turning the patient from side to side",
			C: "Review the APGAR scores prior to therapy",
			D: "Provide 2 doses of Survanta using 2.5 mL/kg",
		},
		answer: "A",
		answer_explanation:
			"Intubate with a size 3.0mm endotracheal tube for the delivery of surfactant\n\nAPGAR scores would not be helpful for a premature neonate who needs surfactant. The options, which include Exosurf and Survanta, do not contain appropriate dosages or recommended delivery methods. Therefore, the only appropriate answer is to intubate with a properly sized endotracheal tube for an 1800 gram infant.",
	},
	{
		question:
			"Which of the following sounds assessed by a respiratory therapist is potentially the most serious if heard on a pediatric patient in the emergency room?\n\n A. high-pitched continuous during inhalation over the larynx\n B. rhonchi clearing with cough\n C. high-pitched continuous on exhalation over the larynx\n D. barking cough, otherwise clear",
		options: {
			A: "high-pitched continuous during inhalation over the larynx",
			B: "rhonchi clearing with cough",
			C: "high-pitched continuous on exhalation over the larynx",
			D: "barking cough, otherwise clear",
		},
		answer: "A",
		answer_explanation:
			"high-pitched continuous during inhalation over the larynx\n\nStridor!!!",
	},
	{
		question:
			"A patient receiving mechanical ventilatory support via volume-controlled ventilation is experiencing a decrease in pulmonary compliance. Peak airway pressure has risen to 42 cm H2O in the previous week. Which of the following can the respiratory therapist do to improve gas exchange?\n\n A. Decrease inspiratory flow rate\n B. Add PEEP\n C. Increase mandatory rate\n D. Increase inspiratory flow rate",
		options: {
			A: "Decrease inspiratory flow rate",
			B: "Add PEEP",
			C: "Increase mandatory rate",
			D: "Increase inspiratory flow rate",
		},
		answer: "A",
		answer_explanation:
			"Decrease inspiratory flow rate\n\nTo improve gas exchange, a patient benefits most from a slow and prolonged inspiratory phase. Providing volume slowly has a tendency to result in greater gas distribution throughout the lungs and results in improved gas exchange.",
	},
	{
		question:
			"Which of the following is a significant indicator of negative effects from positive pressure ventilation?\n\n A. increased alveolar distention\n B. decrease urine output\n C. increase in physiological deadspace\n D. drying of pulmonary secretions",
		options: {
			A: "increased alveolar distention",
			B: "decrease urine output",
			C: "increase in physiological deadspace",
			D: "drying of pulmonary secretions",
		},
		answer: "B",
		answer_explanation:
			"decrease urine output\n\nExcessive pressures from positive pressure ventilation will first and foremost cause decreased venous return. Of the options offered the next most significant response is decreased urine output.",
	},
	{
		question:
			"While transferring a ventilator-dependent patient from bed to gurney, the respiratory therapist notices sudden resistance when manually ventilating a patient through a standard tracheostomy tube. The therapist is unable to pass a suction catheter. The therapist should NEXT\n\n A. call for help.\n B. provide ventilation by bag and mask.\n C. ensure adequate cuff inflation.\n D. replace the tracheostomy tube.",
		options: {
			A: "call for help.",
			B: "provide ventilation by bag and mask.",
			C: "ensure adequate cuff inflation.",
			D: "replace the tracheostomy tube.",
		},
		answer: "D",
		answer_explanation:
			"replace the tracheostomy tube.\n\nWhen a standard tracheostomy tube becomes clogged, the tracheostomy tube must be removed and replaced to ensure ventilation.",
	},
	{
		question:
			"The following clinical information is documented after you assess a home oxygen patient's SpO2 in the following situations. What is the appropriate oxygen treatment plan for home care for this patient?\n\nSpO2 #1: room air, resting: 91%\nSpO2 #2: moderate walk for 150 -ft on room air: 88%\nSpO2 #3: 1 L/min nasal cannula at rest: 96%\nSpO2 #4: moderate walk for 150 -ft on 1 L/min nasal cannula: 93%\nSpO2 #5: 2 L/min Nasal Cannula at rest: 97%\nSpO2 #6: fast walking for 250 -ft on 2 L/min nasal cannula: 94%\n\n A. 1 L/min continuously\n B. 1 L/min while walking or exercising\n C. 2 L/min continuously\n D. discontinue supplemental oxygen",
		options: {
			A: "1 L/min continuously",
			B: "1 L/min while walking or exercising",
			C: "2 L/min continuously",
			D: "discontinue supplemental oxygen",
		},
		answer: "B",
		answer_explanation:
			"1 L/min while walking or exercising\n\nIn order to provide sufficient oxygen for this patient to complete activities of daily living (ADLs), 1 L/min is required. A moderate walk is the highest reasonable activity. It is not necessary to oxygenate the patient at 2 L/min for a fast walk.",
	},
	{
		question:
			"A bronchoscopy is used to diagnose\n\n A. malignant processes.\n B. idiopathic chronic bronchitis\n C. emphysema\n D. atelectasis.",
		options: {
			A: "malignant processes.",
			B: "idiopathic chronic bronchitis",
			C: "emphysema",
			D: "atelectasis.",
		},
		answer: "A",
		answer_explanation:
			"malignant processes.\n\nBronchoscopy is used to diagnose foreign body obstructions, active bleeding causes, pathogenic involvement (to identify organisms) and cancerous or malignant processes or areas. It may help decrease atelectasis if immobilized mucous plugs are blocking a portion of the lung from expanding, but it does not serve in the diagnosis of atelectasis.",
	},
	{
		question:
			"Which of the following is used to evaluate a patient for fluid imbalance?\n\n A. cerebral perfusion pressure\n B. P50\n C. pitting edema\n D. minute ventilation",
		options: {
			A: "cerebral perfusion pressure",
			B: "P50",
			C: "pitting edema",
			D: "minute ventilation",
		},
		answer: "C",
		answer_explanation:
			"pitting edema\n\nFluid imbalance may result in pitting edema, changes in sensorium, and altered capillary refill time. Minute ventilation, P50, and CPP is not helpful.",
	},
	{
		question:
			"Immediately after oral intubation of an apneic patient, the respiratory therapist begins manual ventilation with a bag-valve assembly. The patient is simultaneously connected to an end-tidal carbon dioxide monitor. Which of the following should the respiratory therapist expect to observe when looking at the capnographic waveform?\n\n A. fall in CO2 followed by a subtle rise\n B. steady CO2 reading\n C. stair-step shifts in the CO2 tracing\n D. first a rise, then a fall in CO2",
		options: {
			A: "fall in CO2 followed by a subtle rise",
			B: "steady CO2 reading",
			C: "stair-step shifts in the CO2 tracing",
			D: "first a rise, then a fall in CO2",
		},
		answer: "D",
		answer_explanation:
			"first a rise, then a fall in CO2\n\nInitial ventilation attempts after a patient has been apneic will show reduced end-tidal CO2 followed by a steady rise as ventilation is provided. Ultimately, as ventilation continues the end-tidal CO2 will begin to decrease.",
	},
	{
		question:
			"A patient is receiving SIMV volume-cycled mechanical ventilation. A respiratory therapist is using slow, incremental reductions in the set respiratory rate for weaning. Which low alarm should the respiratory therapist place the most emphasis on?\n\n A. minute ventilation\n B. tidal volume\n C. pressure\n D. PEEP",
		options: {
			A: "minute ventilation",
			B: "tidal volume",
			C: "pressure",
			D: "PEEP",
		},
		answer: "A",
		answer_explanation:
			"minute ventilation\n\nIn this example we are tested about our knowledge to withdraw mechanical ventilation. While one may believe that low tidal volume could be the best answer, it is not as significant as the sum of several tidal volumes in a minute, or minute ventilation. While weaning, a patient may vary in VT, while maintaining an acceptable ventilatory drive. Pressures such as PEEP or low-pressure are not as critical for monitoring while weaning with slow incremental reductions of the mechanical rate.",
	},
	{
		question:
			"A patient is receiving volume-controlled ventilation in the emergency department (ED). The following data is available:\n\nPetCO2 30 torr \npH 7.39\nPaCO2 40 torr\nPaO2 100 torr\nHCO3- 25 mEq/LBE +1 mEq/L",
		options: {},
		answer: "D",
		answer_explanation:
			"25%\n\nVD/VT ratio calculation is (PaCO2-PetCO2)/PaCO2. In this case 40 -30 = 10. 10/40 = 25%",
	},
	{
		question:
			"End-tidal CO2 of 40 mmHg with an arterial Co2 of about 40 is considered\n\nA. hyperventilation\n B. normal ventilation\n C. poor alveolar recruitment\n D. hypoventilation",
		options: {
			A: "hyperventilation",
			B: "normal ventilation",
			C: "poor alveolar recruitment",
			D: "hypoventilation",
		},
		answer: "B",
		answer_explanation: "normal ventilation",
	},
	{
		question:
			"Blood pressure obtained by a sphygmomanometer reads higher than the indicated blood pressure from an arterial line on the same patient. To correct problem, the respiratory therapist should FIRST\n\n A. check for air bubbles in the transducer dome\n B. discontinue use of the sphygmomanometer\n C. advance the arterial line catheter\n D. flush the art line with sodium heparin",
		options: {
			A: "check for air bubbles in the transducer dome",
			B: "discontinue use of the sphygmomanometer",
			C: "advance the arterial line catheter",
			D: "flush the art line with sodium heparin",
		},
		answer: "A",
		answer_explanation:
			"check for air bubbles in the transducer dome\n\nWhen blood pressure by sphygmomanometer (cuff) differs from the blood pressure obtained from an indwelling arterial line, the blood pressure taken by cuff is considered more accurate and reliable. Problems that may occur in the ART line include clots in the line and bubbles in the transducer dome.",
	},
	{
		question:
			"A homecare patient indicates that she is not getting enough air from her transtracheal oxygen catheter. The therapist should instruct the patient to\n\n A. use a nasal cannula.\n B. increase the flow of oxygen to the catheter.\n C. remove the catheter.\n D. flush the catheter with saline.",
		options: {
			A: "use a nasal cannula.",
			B: "increase the flow of oxygen to the catheter.",
			C: "remove the catheter.",
			D: "flush the catheter with saline.",
		},
		answer: "A",
		answer_explanation:
			"use a nasal cannula.\n\nWhen a patient reports difficulty getting air or oxygen through one oxygen delivery device, before troubleshooting, the most appropriate first action is to ensure adequate ventilation by changing to a different, reliable device. In this case, switching to a nasal cannula is most appropriate.",
	},
	{
		question:
			"A respiratory therapist discontinues a small volume nebulizer started with mucomyst after 5 minutes due to a patient's poor tolerance of the therapy. SpO2 dropped from 95% to 86%, heart rate increased from 88 to 128 bpm. The patient returns to a normal condition shortly after the treatment is stopped. The next action would be to\n\n A. administer after adding a unit dose of Proventil.\n B. document in the medical record and notify the physician.\n C. administer with 100% oxygen.\n D. administer with a lower dose of mucomyst.",
		options: {
			A: "administer after adding a unit dose of Proventil.",
			B: "document in the medical record and notify the physician.",
			C: "administer with 100% oxygen.",
			D: "administer with a lower dose of mucomyst.",
		},
		answer: "B",
		answer_explanation:
			"document in the medical record and notify the physician.\n\nIn this example, the patient did not tolerate the therapy. Therefore, the respiratory therapist should discontinue therapy & notify the ordering physician. A note about the patient's tolerance should also be made in the medical record.",
	},
	{
		question:
			"Prior to a pulmonary function test, a respiratory therapist conducts spirometry calibration with a 3.0 Liter super-syringe obtaining the following results:\nTrail 1 (L) 2.74\nTrial 2 (L) 2.68\nTrial 3 (L) 2.72\n\nThe spirometer is\n A. precise.\n B. inaccurate.\n C. imprecise.\n D. accurate.",
		options: {A: "precise.", B: "inaccurate.", C: "imprecise.", D: "accurate."},
		answer: "B",
		answer_explanation:
			"inaccurate.\n\nThe spirometer is considered accurate if the results are no more than 3% above or 3% below the 3 L calibration syringe. This means the accuracy range is 2.85 L -3.15 L. In this case all values are outside this range and therefore the spirometer is considered to be inaccurate.",
	},
	{
		question:
			"A respiratory therapist reviews the medical record of a patient and notes the HbCO is 10%. This data was collected 1 hour prior and the patient is asymptomatic. From these results, the respiratory therapist can conclude the patient most likely\n\n A. is a heavy smoker\n B. attempted to commit suicide\n C. has pulmonary fibrosis\n D. has an exhaust leak into the cabin of the vehicle",
		options: {
			A: "is a heavy smoker",
			B: "attempted to commit suicide",
			C: "has pulmonary fibrosis",
			D: "has an exhaust leak into the cabin of the vehicle",
		},
		answer: "A",
		answer_explanation:
			"is a heavy smoker\n\nAnd HbCO of 10% is much higher than normal and indicates the patient likely smokes tobacco.",
	},
	{
		question:
			"To calculate alveolar minute ventilation, the respiratory therapist should\n\n A. subtract anatomical deadspace from the VT, then multiply by the RR.\n B. multiply the RR by the VT.\n C. measure with a metabolic cart study.\n D. measure while the patient is receiving mechanical ventilation.",
		options: {
			A: "subtract anatomical deadspace from the VT, then multiply by the RR.",
			B: "multiply the RR by the VT.",
			C: "measure with a metabolic cart study.",
			D: "measure while the patient is receiving mechanical ventilation.",
		},
		answer: "A",
		answer_explanation:
			"subtract anatomical deadspace from the VT, then multiply by the RR.\n\nAlveolar ventilation is calculated by subtracting the anatomical dead space from the tidal volume then multiplying by the respiratory rate. If the weight is known, the absolute value in pounds can be used to estimate anatomical deadspace. For example a patient weighing 130 pounds would have 130 mL of anatomical dead space. If weight is unknown, anatomical dead space should be estimated at 150 mL.",
	},
	{
		question:
			"While suctioning a patient through the inner cannula of a 7.0-mm fenestrated tracheostomy tube, the therapist observes the collected secretions show layers. With which of the following is this most consistent?\n\n A. COPD\n B. mycoplasma pneumonia\n C. bronchiectasis\n D. use of the antibiotic tetracycline",
		options: {
			A: "COPD",
			B: "mycoplasma pneumonia",
			C: "bronchiectasis",
			D: "use of the antibiotic tetracycline",
		},
		answer: "C",
		answer_explanation:
			"bronchiectasis\n\nSecretions that demonstrate differing layers of sputum is associated with bronchiectasis.",
	},
	{
		question:
			"The following data is obtained from the patient's ventilator flow sheet:\n3 am: \nPeak 20\nPlateau 14\nVt .5\nPEEP 5\n\n9am:\npeak 21\nplateau 14\nvt 0.5\npeep 5\n\n3pm\npeak 25\nplateau 20\nvt 0.5\npeep 10\n\nWhich of the following can be accurately stated?",
		options: {},
		answer: "B",
		answer_explanation:
			"dynamic compliance is steady\n\nStatic compliance is monitored by examining the plateau pressures over time. Observation of these data appear to suggest an increase in plateau pressures, which is associated with a decrease in pulmonary compliance. However, closer observation reveals that PEEP was increased by 5 cm H2O. Therefore, the increase in plateau pressures at 3 PM are caused by an increase in the PEEP setting and are not a result of changing static compliance. This data indicates static compliance is remaining steady.",
	},
	{
		question:
			"A morbidly obese patient who is trached with a fenestrated tracheostomy tube is experiencing frequent dislodging with minor movement or cough. What should the respiratory therapist suggest?\n\n A. Increase the length of the tracheostomy tube.\n B. Inflate the cuff.\n C. Tie or suture the trach into place more securely.\n D. Replace with a Bivona-type tracheostomy tube with a foam cuff.",
		options: {
			A: "Increase the length of the tracheostomy tube.",
			B: "Inflate the cuff.",
			C: "Tie or suture the trach into place more securely.",
			D: "Replace with a Bivona-type tracheostomy tube with a foam cuff.",
		},
		answer: "A",
		answer_explanation:
			"Increase the length of the tracheostomy tube.\n\nDue to the increased neck circumference of a morbidly obese patient, special tracheostomy tubes that have long proximal extensions allow for the increased distance from the interior tracheal wall to the opening of the stoma at the skin.",
	},
	{
		question:
			"An oxygen-dependent patient will be traveling for 24 hours. How many E- cylinder oxygen tanks will the patient require for the trip if the flow is 2 L/min?\n\n A. 5\n B. 3\n C. 8\n D. 2",
		options: {A: "5", B: "3", C: "8", D: "2"},
		answer: "A",
		answer_explanation:
			"5\n\nEach tank duration = 2200 x 0.28 = 616 L. 616 L / 2 L/min = 308 minutes. 308 min / 60 = 5.1 hours. Each E cylinder will last about 5 hours. For a 24 hour trip, at least 5 tanks will be required.",
	},
	{
		question:
			"A home care patient with a tracheostomy tube uses an electrically-powered ventilator during sleeping hours. Recent nocturnal oximetry results reveal moderate hypoxemia while asleep on the ventilator. What should the respiratory therapist recommend?\n\n A. Increase the set respiratory rate by 2/min.\n B. Perform complete polysomnography.\n C. Provide oxygen bleed-in by molecular sieve device.\n D. Provide a tracheostomy collar with FIO2 0.40 heated aerosol.",
		options: {
			A: "Increase the set respiratory rate by 2/min.",
			B: "Perform complete polysomnography.",
			C: "Provide oxygen bleed-in by molecular sieve device.",
			D: "Provide a tracheostomy collar with FIO2 0.40 heated aerosol.",
		},
		answer: "C",
		answer_explanation:
			"Provide oxygen bleed-in by molecular sieve device.\n\nThe best device for home oxygen therapy is a molecular sieve device, commonly known as an oxygen concentrator. This device is powered with electricity, which makes it appropriate for home use.",
	},
	{
		question:
			"An end-expiratory chest radiograph is best used to assess for which of the following?\n\n A. diaphragmatic hernia\n B. small pneumothorax\n C. overall pulmonary aeration\n D. pulmonary vascular disease",
		options: {
			A: "diaphragmatic hernia",
			B: "small pneumothorax",
			C: "overall pulmonary aeration",
			D: "pulmonary vascular disease",
		},
		answer: "B",
		answer_explanation:
			"small pneumothorax\n\nNormally, we prefer to observe a chest x-ray at full inhalation. However, an end-expiratory chest radiograph is helpful at identifying a small pneumothorax.",
	},
	{
		question:
			"The therapist is observing the quality control results in order to determine the accuracy and precision of the blood gas analyzer. According to the documentation that came with the quality control material, pH is supposed to analyze at 7.40 with 0.5% upper and lower standard deviation. The PCO2 analyzer is supposed to measure 30 mmHg with 5% upper and lower standard deviation tolerance. Which of the following runs are consistent with an analyzer that is out-of-control?\npH PCO2 (mm Hg) \nRun 1 7 .37 25\nRun 2 7.41 31\nRun 3 7.34 29\n \nA. 3 only\n B. 1 only\n C. 2 only\n D. 1 and 3",
		options: {A: "3 only", B: "1 only", C: "2 only", D: "1 and 3"},
		answer: "D",
		answer_explanation:
			"1 and 3\n\nRuns one and three, when calculated, exceed the pH or PCO2 limit and therefore are consistent with a blood gas analyzer that is out of control.",
	},
	{
		question:
			"On a time-cycled, pressure-limited ventilator, modifications to the ventilator settings occurred that resulted in an I:E of 1:6 becoming an I:E of 1:4. Which of the following is a possible setting change that could have produced this new I:E?\n\n A. Decrease in the flowrate\n B. development of autoPEEP\n C. an increase in I-Time\n D. Increase in PEEP",
		options: {
			A: "Decrease in the flowrate",
			B: "development of autoPEEP",
			C: "an increase in I-Time",
			D: "Increase in PEEP",
		},
		answer: "C",
		answer_explanation:
			"an increase in I-Time\n\nUnlike volume-cycled mechanical ventilation, flow rate does not affect the I:E ratio in time-cycled mechanical ventilation. Only direct changes to the inspiratory time (I-Time) or to the total respiratory rate will affect the I:E ratio.",
	},
	{
		question:
			"A volume-cycled mechanically ventilated male patient intubated with a 6.5 mm endotracheal tube is on the following settings:\nMode Assist/control \nSet rate 10\nTidal volume 600 mL\n\nPeak pressures are consistently exceeding 35 cm H20, with static compliance in the normal range. In order to correct the high peak pressures, the respiratory therapist would FIRST consider which of the following?\n\n A. Increase the flowrate.\n B. Change to PCV.\n C. Replace the endotracheal tube with a larger size.\n D. Suction the patient every 30 minutes.",
		options: {
			A: "Increase the flowrate.",
			B: "Change to PCV.",
			C: "Replace the endotracheal tube with a larger size.",
			D: "Suction the patient every 30 minutes.",
		},
		answer: "C",
		answer_explanation:
			"Replace the endotracheal tube with a larger size.\n\nIn this example the endotracheal tube at 6.5 mm is likely too small, creating increased airway resistance. This is resulting in high peak pressures. A larger diameter endotracheal tube should result in reduced peak pressures, making the ventilator more manageable.",
	},
	{
		question:
			"A patient is found unconscious by a respiratory therapist. Pulse is palpated and found to be 38/min. An agonal breathing pattern is also noted. The therapist should immediately\n\n A. begin CPR\n B. place the patient on a non-rebreathing mask at 15 L/min.\n C. administer epinephrine.\n D. perform oral endotracheal intubation.",
		options: {
			A: "begin CPR",
			B: "place the patient on a non-rebreathing mask at 15 L/min.",
			C: "administer epinephrine.",
			D: "perform oral endotracheal intubation.",
		},
		answer: "A",
		answer_explanation:
			"begin CPR\n\nA pulse of less than 40 per minute is an indication to begin cardiopulmonary resuscitation or BLS.",
	},
	{
		question:
			"A female patient weighing 150 lbs is receiving mechanical ventilation in the SIMV, volume-cycled mode. Set tidal volume is 500 mL. Returned volumes for mechanical breaths are 490 mL. The respiratory therapist should\n\n A. continue current therapy.\n B. check the circuit for leaks.\n C. add air to the cuff.\n D. increase the set VT to 510 mL",
		options: {
			A: "continue current therapy.",
			B: "check the circuit for leaks.",
			C: "add air to the cuff.",
			D: "increase the set VT to 510 mL",
		},
		answer: "A",
		answer_explanation:
			"continue current therapy.\n\nThe returned tidal volume will not always match the set tidal volume. In this example the loss of 10 mL per breath is not significant.",
	},
	{
		question:
			"Following extubation after shoulder surgery a 15-year-old male patient is experiencing 30-second periods of apnea. The respiratory therapist should\n\n A. ventilate with a manual resuscitator\n B. provide SVN with normal saline 0.3%\n C. intubate the patient\n D. place on 100% NRB mask",
		options: {
			A: "ventilate with a manual resuscitator",
			B: "provide SVN with normal saline 0.3%",
			C: "intubate the patient",
			D: "place on 100% NRB mask",
		},
		answer: "A",
		answer_explanation:
			"ventilate with a manual resuscitator\n\n30-second periods of apnea indicate the need for immediate assistance with ventilation. Of the choices offered, only ventilation with a manual resuscitator meets this requirement. One may be tempted to choose to intubate the patient, but intubation does not automatically imply that mechanical ventilation will be provided. Intubation is for airway protection.",
	},
	{
		question:
			"Which of the following would NOT be needed in preparation for a bronchoscopy?\n\n A. 10 cc syringe\n B. normal saline\n C. Magill forceps\n D. anesthetic",
		options: {
			A: "10 cc syringe",
			B: "normal saline",
			C: "Magill forceps",
			D: "anesthetic",
		},
		answer: "C",
		answer_explanation: "Magill forceps",
	},
	{
		question:
			"The following arterial blood gas results are obtained on a patient who has been on mechanical ventilation for 3 days.\npH 7.55 \nPaCO2 40 torr\nPaO2 310 torr\nHCO3- 28 mEq/L\nBE -8 mEq/L\nFIO2 0.55\nSaO2 98%\n\nVentilator settings are:\nMode Assist/control Mandatory rate 12\nVT 550 mL\nFIO2 0.40\n\nThe respiratory therapist should evaluate the function of which of the following in the blood gas analyzer?",
		options: {},
		answer: "B",
		answer_explanation:
			"Clark electrode\n\nThis blood gas reveals a problem. The PaO2 of 310 torr would be impossible with an FIO2 of only 40%. We know this from estimating the alveolar oxygen tension or doing the alveolar air equation. At 40% the maximum oxygen tension in the alveoli is about 230 torr. It is impossible for the arterial oxygen tension to be greater than the alveolar oxygen tension. Therefore, there is likely an error in the measurement of the PaO2. Of the options given, the Clark electrode is another name for the PO2 electrode.",
	},
	{
		question:
			"A COPD patient who receives 2 lpm continuous oxygen therapy by nasal cannula is exercising in conjunction with a monitored pulmonary rehabilitation program. The patient has begun breathing quickly and deeply. To ensure consistent arterial oxygenation, the respiratory therapist should\n\n A. decrease oxygen flow to 1 L/min\n B. use a partial rebreathing mask\n C. increase oxygen flow rate\n D. use a nonrebreathing mask",
		options: {
			A: "decrease oxygen flow to 1 L/min",
			B: "use a partial rebreathing mask",
			C: "increase oxygen flow rate",
			D: "use a nonrebreathing mask",
		},
		answer: "C",
		answer_explanation:
			"increase oxygen flow rate\n\nAlthough COPD patients should rarely have more than 2 L/min. continuous oxygen, when they exercise and breathe more deeply, they inadvertently lower their FIO2, especially when on a nasal cannula. In such a case, it is appropriate to increase the flow rate temporarily for the duration of the exercise.",
	},
	{
		question:
			"The respiratory therapist obtains the following blood gas data on a patient breathing spontaneously on room air:\npH 7.35 \nPaCO2 45 torr\nPaO2 50 torr\nHCO3- 27 mEq/L\nBE +2 mEq/L\n\nThe therapist could accurately estimate the patient's SaO2 to be which of the following?\n\n A. 80%\n B. 85%\n C. 75%\n D. 90%",
		options: {A: "80%", B: "85%", C: "75%", D: "90%"},
		answer: "A",
		answer_explanation:
			"80%\n\nA PaO2 of 50 mmHg most closely correlates with an oxygen saturation of about 80% on the oxygen dissociation curve.",
	},
	{
		question:
			"What is the typical frequency for Flovent MDI?\n A. PRN\n B. BID\n C. Q6 hours\n D. TID",
		options: {A: "PRN", B: "BID", C: "Q6 hours", D: "TID"},
		answer: "B",
		answer_explanation:
			"BID\n\nFlovent (fluticasone) is a corticosteroid used generally to prevent and relieve inflammation of airway walls. Inflammation is one of the components of asthma so corticosteroids are key in treatment. The frequency is twice per day or b.i.d.",
	},
	{
		question:
			"A patient is ordered to be placed on a high frequency jet ventilator in response to a bronchopleural fistula. Which of the following ventilator parameters can the respiratory therapist expect to manipulate in place of the tidal volume control, which can be found on a volume-controlled ventilator?\n\n A. % expiratory time\n B. Rate\n C. Drive pressure\n D. Injector line",
		options: {
			A: "% expiratory time",
			B: "Rate",
			C: "Drive pressure",
			D: "Injector line",
		},
		answer: "C",
		answer_explanation:
			"Drive pressure\n\nHigh-frequency jet ventilators do not have a control to set tidal volume directly. Delivered volume is set indirectly through a control called drive pressure, sometimes called oscillatory amplitude.",
	},
	{
		question:
			"A patient in the emergency room has the following arterial blood gas results:\npH 7.55 \nPaCO2 35 mm Hg\nPaO2 84 mm Hg\nHCO3- 35 mEq/L\nBE +11 mEq/L\nSAT 95%\nWhich of the following represents an accurate interpretation of the data?'\n\n A. respiratory alkalosis\n B. mixed-respiratory and metabolic acidosis\n C. metabolic acidosis\n D. metabolic alkalosis",
		options: {
			A: "respiratory alkalosis",
			B: "mixed-respiratory and metabolic acidosis",
			C: "metabolic acidosis",
			D: "metabolic alkalosis",
		},
		answer: "D",
		answer_explanation:
			"metabolic alkalosis\n\nThis patient is in a state of alkalosis as manifested by a high pH of 7.55. Changes in pH are either caused by changes in CO2 or changes in HCO3-. In this case the patient's CO2 is in the normal range and therefore cannot be a cause of the alkalosis. This would mean that respiratory alkalosis is not present but metabolic alkalosis is evident.",
	},
	{
		question:
			"TLC: 4.50\nFRC 2.45\nSVC 3.30\nFEV1 2.15\nFEF50 4.0\n\nWhich of the following represents the most appropriate interpretation of the preceding spirometry results?\n\n A. pulmonary fibrosis\n B. tracheomalacia\n C. scoliosis\n D. cystic fibrosis",
		options: {
			A: "pulmonary fibrosis",
			B: "tracheomalacia",
			C: "scoliosis",
			D: "cystic fibrosis",
		},
		answer: "D",
		answer_explanation: "cystic fibrosis",
	},
	{
		question:
			"An adult female patient has severe airway resistance for which she is being treated with an 80/20 mixture of heliox via a NRM. The problem is improving but not yet resolved. ABGs are:\npH 7.36 \nPaCO2 45 torr\nPaO2 67 torr\nHCO3- 6.2 mEq/L\n\nWhat should the respiratory therapist recommend?\n\n A. Replace heliox with nasal cannula at 5 L/min.\n B. Replace heliox with CPAP, FIO2 0.40.\n C. Change to 70/30 heliox mixture.\n D. Change to 60/40 heliox mixture.",
		options: {
			A: "Replace heliox with nasal cannula at 5 L/min.",
			B: "Replace heliox with CPAP, FIO2 0.40.",
			C: "Change to 70/30 heliox mixture.",
			D: "Change to 60/40 heliox mixture.",
		},
		answer: "C",
		answer_explanation:
			"Change to 70/30 heliox mixture.\n\nThis is an oxygenation problem as seen by the PaO2 of 67 torr. Therefore more oxygen is required. A 70/30 heliox mixture would provide approximately 10% higher FI02.",
	},
	{
		question:
			"A 38-week gestational age infant delivered 4 hours prior shows signs of hypoxemia. In preparation for oxygen administration at 30% by oxygen hood, the therapist should utilize which of the following devices?\n\n A. blender\n B. bubble humidifier\n C. high-flow hydrator\n D. heat-moisture exchanger",
		options: {
			A: "blender",
			B: "bubble humidifier",
			C: "high-flow hydrator",
			D: "heat-moisture exchanger",
		},
		answer: "A",
		answer_explanation:
			"blender\n\nWhen using an oxygen hood, it is appropriate to premix gases by use of an oxygen-air blender. Use of a large-volume nebulizer at low FIO2 could cause excessive noise transmitted to an oxygen hood which could promote hearing damage and restlessness of the infant. For this reason use of blender is more appropriate.",
	},
	{
		question:
			"The following data is available for a patient receiving volume-controlled mechanical ventilation:\nMode Assist/control \nVT 500 mL\nMandatory rate 16\nFIO2 0.5\nPEEP 5 cm H2O\nPIP 28 cm H2O\nPetCO2 28 torr\n\npH 7.42 \nPaCO2 38 torr\nPaO2 98 torr\nPvO2 76 torr\nHCO3- 22 mEq/L\nBE -2 mEq/L\nSaO2 98%\nSvO2 78%\nHb 15 g/dL\n\nThe respiratory therapist should record which of the following values as an accurate CaO2?\n A. 25.1 vol%\n B. 5.0 vol%\n C. 19.4 vol%\n D. 15.2 vol%",
		options: {A: "25.1 vol%", B: "5.0 vol%", C: "19.4 vol%", D: "15.2 vol%"},
		answer: "C",
		answer_explanation: "19.4 vol%\n\nCalculate CaO2: \n(Hb/3) x 4",
	},
	{
		question:
			"A respiratory therapist is instructing a patient with chronic obstructive pulmonary disease on the proper method of taking a bronchodilator treatment with a small-volume jet nebulizer. Which of the following should be included in the instructions?\n\n A. take deep breaths, hold for 10 seconds, blow out quickly\n B. breathe in slowly, pause at the top of each breath, blow out passively and relax\n C. breathe in quickly, blow out passively and relax between breaths\n D. take a slow deep breath in, pause, blow out with moderate forcefulness",
		options: {
			A: "take deep breaths, hold for 10 seconds, blow out quickly",
			B: "breathe in slowly, pause at the top of each breath, blow out passively and relax",
			C: "breathe in quickly, blow out passively and relax between breaths",
			D: "take a slow deep breath in, pause, blow out with moderate forcefulness",
		},
		answer: "B",
		answer_explanation:
			"breathe in slowly, pause at the top of each breath, blow out passively and relax",
	},
	{
		question:
			"An intubated patient has a size 7.5 mm endotracheal tube in place. Diffuse rhonchi are auscultated. A respiratory therapist is using a 12 Fr suction catheter set to a pressure of -100 cm H2O, attempting to suction for 15 seconds. Only scant secretions are suctioned, and breath sounds do not improve after the procedure. The respiratory therapist should increase the\n\n A. suction pressure.\n B. suction duration.\n C. catheter size to a 14 Fr.\n D. catheter size to an 18 Fr.",
		options: {
			A: "suction pressure.",
			B: "suction duration.",
			C: "catheter size to a 14 Fr.",
			D: "catheter size to an 18 Fr.",
		},
		answer: "A",
		answer_explanation: "suction pressure.",
	},
	{
		question:
			"A patient in the emergency room complains of frequent vomiting over the last 24 hours. A 12-lead ECG shows a normal P-R interval and flattened T waves. Which of the following is the most likely explanation for the ECG waveform?\n\n A. first degree heart block\n B. congestive heart failure\n C. cardiac ischemia\n D. hypokalemia",
		options: {
			A: "first degree heart block",
			B: "congestive heart failure",
			C: "cardiac ischemia",
			D: "hypokalemia",
		},
		answer: "D",
		answer_explanation:
			"hypokalemia\n\nFluid loss from a patient will likely change electrolyte status. An ECG that shows flattened T waves is associated with hypokalemia. This is the expected change that occurs to those patients who have fluid loss or whose electrolyte levels are not normal.",
	},
	{
		question:
			"A home care respiratory therapist is providing instruction on proper cleaning technique of a hand-held nebulizer. Which of the following should be included in the instruction?\n A. soak in alcohol, air dry\n B. soak in Cidex, rinse with acetic acid, air dry\n C. wash with acetic acid, dry with lint free towel\n D. wash with warm, mild soapy water, air dry",
		options: {
			A: "soak in alcohol, air dry",
			B: "soak in Cidex, rinse with acetic acid, air dry",
			C: "wash with acetic acid, dry with lint free towel",
			D: "wash with warm, mild soapy water, air dry",
		},
		answer: "D",
		answer_explanation: "wash with warm, mild soapy water, air dry",
	},
	{
		question:
			"A patient is receiving non-invasive positive pressure ventilation with an IPAP of 28 and an EPAP of 12 cmH2O. The following blood gas data on these settings is available:\npH 7.37 \nPaCO2 42 mm Hg\nPaO2 72 mm Hg\nHCO3- 24 mEq/L\nBE 0 mEq/L\n\nWhich of the following change is most appropriate?\n A. decrease EPAP\n B. decrease IPAP and EPAP\n C. increase IPAP and EPAP\n D. increase IPAP",
		options: {
			A: "decrease EPAP",
			B: "decrease IPAP and EPAP",
			C: "increase IPAP and EPAP",
			D: "increase IPAP",
		},
		answer: "C",
		answer_explanation:
			"increase IPAP and EPAP\n\nThis patient shows adequate ventilation but mild hypoxemia. To correct hypoxemia, expiratory pressure should be increased. However, increasing expiratory pressure alone will decrease the distance between the inspiratory and expiratory pressures and will inadvertently decrease ventilation. This is not desirable because CO2 is already appropriate. To prevent a change in ventilation IPAP must be increased by the same degree that EPAP is increased.",
	},
	{
		question:
			"A patient with the following blood gas results has an end-tidal CO2 of 30 mm Hg.\npH 7.38 PaCO2 40 mm HgPaO2 80 mm HgHCO3- 25 mEq/L\nWhat is the VD/VT?\n\n A. 62%\n B. 30%\n C. 25%\n D. 50%",
		options: {A: "62%", B: "30%", C: "25%", D: "50%"},
		answer: "C",
		answer_explanation:
			"25%\n\nVD/VT = (PaCO2 - PetCO2) / PaCO2. In this case, VD/VT = (40-30)/40 = 10/40 or 25%.",
	},
	{
		question:
			"An adult is receiving NT suctioning and experiences a decrease in SpO2 from 98% to 80% during the procedure. The respiratory should\n\n A. provide 100% oxygen.\n B. stop the suction procedure.\n C. check for breathing.\n D. manually ventilate with bag/mask.",
		options: {
			A: "provide 100% oxygen.",
			B: "stop the suction procedure.",
			C: "check for breathing.",
			D: "manually ventilate with bag/mask.",
		},
		answer: "B",
		answer_explanation:
			"stop the suction procedure.\n\nThe respiratory therapist should immediately stop suctioning if any signs of distress are present cardiac, desaturation, or otherwise).",
	},
	{
		question:
			"A respiratory therapist auscultates a 3-year-old child in respiratory distress in the emergency department (ED). Auscultation reveals unilateral wheezing on the right and vesicular breath sounds on the left. The therapist should prepare which of the following to help the patient?\n\n A. aerosolized racemic epinephrine\n B. a bronchoscope\n C. a small volume treatment with Albuterol\n D. aerosolized Ipratropium Bromide (Atrovent)",
		options: {
			A: "aerosolized racemic epinephrine",
			B: "a bronchoscope",
			C: "a small volume treatment with Albuterol",
			D: "aerosolized Ipratropium Bromide (Atrovent)",
		},
		answer: "B",
		answer_explanation: "a bronchoscope",
	},
	{
		question:
			"A patient receiving volume-controlled mechanical ventilation has the following values obtained from a pulmonary-artery catheter:\nPAP 24 mm Hg \nCVP 6 mm Hg\nPCWP 6 mm Hg\nC.I. 2.5 L/min/m2\nWhich of the following would be administered?\n\n A. 40% venturi mask\n B. balloon pump\n C. nitric oxide\n D. heliox",
		options: {
			A: "40% venturi mask",
			B: "balloon pump",
			C: "nitric oxide",
			D: "heliox",
		},
		answer: "C",
		answer_explanation:
			"nitric oxide\n\nNitric oxide is used to treat pulmonary hypertension. By evaluating the hemodynamic values, particularly noting a high PAP and normal PCWP, it is evident that there is a problem in the lungs and likely hypertension. Nitric oxide therapy will help to lower pulmonary hypertension.",
	},
	{
		question:
			"Evaluation of maximum expiratory pressure (MEP) is most useful in evaluating which of the following?\n\n A. fixed upper airway obstruction\n B. forcefulness of cough\n C. presence of restrictive defect\n D. inspiratory muscle strength",
		options: {
			A: "fixed upper airway obstruction",
			B: "forcefulness of cough",
			C: "presence of restrictive defect",
			D: "inspiratory muscle strength",
		},
		answer: "B",
		answer_explanation:
			"forcefulness of cough\n\nMaxim expiratory pressure is an important measurement when determining how forcefully a patient can cough, though it can also be used to determine if the patient is able to sustain ventilation. However, MIP is more relevant when considering a patient's ability to sustain ventilation on his own.",
	},
	{
		question:
			"After removing 5 inches of mechanical deadspace on a ventilator circuit, what change would the respiratory therapist expect to see?\n\n A. Unchanged MAP with slight increase in PaCO2 and PaO2\n B. Increase in pH with a reduction in MAP\n C. Small reduction in PaCO2 with slight increase in MAP\n D. Small reduction in PaCO2 with no increase in MAP",
		options: {
			A: "Unchanged MAP with slight increase in PaCO2 and PaO2",
			B: "Increase in pH with a reduction in MAP",
			C: "Small reduction in PaCO2 with slight increase in MAP",
			D: "Small reduction in PaCO2 with no increase in MAP",
		},
		answer: "D",
		answer_explanation:
			"Small reduction in PaCO2 with no increase in MAP\n\nMechanical deadspace is the tubing on the patient side of the wye on a ventilator circuit. This includes the endotracheal tube. The deadspace reduces the efficiency of ventilation, which affects the PaCO2. Therefore, removing deadspace will reduce PaCO2. Increasing deadspace will increase PaCO2. Changes to mechanical deadspace do not affect the mean airway pressure in the chest.",
	},
	{
		question:
			"A patient is receiving bronchodilator therapy with the following results:\nPre-treatment:\nResp 14\nheart rate 90\n\nmid-treatment\nresp 15\nheart rate 120\n\nThe therapist should do which of the following?\n\n A. instruct the patient to take smaller breaths\n B. terminate the treatment and notify the physician\n C. continue treatment, notify the physician\n D. continue treatment and monitor closely",
		options: {
			A: "instruct the patient to take smaller breaths",
			B: "terminate the treatment and notify the physician",
			C: "continue treatment, notify the physician",
			D: "continue treatment and monitor closely",
		},
		answer: "B",
		answer_explanation:
			"terminate the treatment and notify the physician\n\nThis patient demonstrates an excessive change in heart rate during the bronchodilator therapy. Any change greater than 20 above baseline is considered a significant reaction to the bronchodilator medication. This is a direct indication to stop the therapy and to modify it by either decreasing dosage, switching to a different medication, or changing the modality altogether.",
	},
	{
		question:
			"The following pulmonary function test results are reported for a 60-year-old male patient who weighs 65-kg (143-lb) and is 5-ft, 6-in (168 cm) tall.\n\nFVC 82\nSVC 91\nFev1/FVC% 58 (acutila)\nFev1 62\nFEF200-1200\nFEF 25-75\nDLCO 88\n\nBased on this information the patient has\n\n A. mixed obstructive and restrictive defect\n B. moderate restrictive defect\n C. pulmonary emphysema\n D. mild obstructive defect",
		options: {
			A: "mixed obstructive and restrictive defect",
			B: "moderate restrictive defect",
			C: "pulmonary emphysema",
			D: "mild obstructive defect",
		},
		answer: "D",
		answer_explanation:
			"mild obstructive defect\n\nA mild obstructive defect is suggested by a Fev1/FVC% of 58% and a Fev1 of 62% of predicted.",
	},
	{
		question:
			"A 60-year-old female receiving oxygen therapy by a nonrebreathing mask has the follow arterial blood gas results:\npH 7.47 \nPaCO2 32 torr\nPaO2 50 torr\nHCO3- 24 mEq/L\nBE 1 mEq/L\n\nThe respiratory therapist should document which of the following conditions in the patient's medical record?\n\n A. idiopathic ventilatory failure\n B. intrapulmonary shunt secondary to hyperventilation\n C. refractory hypoxemia with mild hypocapnia\n D. compensated respiratory alkalosis",
		options: {
			A: "idiopathic ventilatory failure",
			B: "intrapulmonary shunt secondary to hyperventilation",
			C: "refractory hypoxemia with mild hypocapnia",
			D: "compensated respiratory alkalosis",
		},
		answer: "C",
		answer_explanation:
			"refractory hypoxemia with mild hypocapnia\n\nThis patient has profound hypoxemia in spite of maximum FIO2. This is known as refractory hypoxemia. Additionally, hypocapnia (reduced CO2) is present.",
	},
	{
		question:
			"A radiographic image shows a right upper lobe cavitation. Which of the following conditions may be associated with this finding?\n\n A. Foreign body aspiration\n B. Lung Mass\n C. Cancer\n D. Tuberculosis",
		options: {
			A: "Foreign body aspiration",
			B: "Lung Mass",
			C: "Cancer",
			D: "Tuberculosis",
		},
		answer: "D",
		answer_explanation:
			"Tuberculosis\n\nSingle cavitations in the upper lobes are associated with tuberculosis. A foreign body aspiration would be associated with an object, not a cavitation. Cancer or lung masses would also fill a space on X-ray instead of creating a cavitation.",
	},
	{
		question:
			"Under which of the following circumstances should a respiratory therapist consider stopping a PEP therapy treatment of a child?\n\n A. Bronchitis\n B. Cold\n C. Middle ear infection\n D. Lingular lobe pneumonia",
		options: {
			A: "Bronchitis",
			B: "Cold",
			C: "Middle ear infection",
			D: "Lingular lobe pneumonia",
		},
		answer: "C",
		answer_explanation:
			"Middle ear infection\n\nPEP therapy is contraindicated by sinusitis, epistaxis, and a middle ear infection.",
	},
	{
		question:
			"A patient who weighs 65-kg (143-lb) is receiving mechanical ventilator support on the following settings with the following corresponding blood gases show:\npH 7.29 \nPaCO2 52 mm Hg\nPaO2 78 mm Hg\nHCO3- 26 mEq/L\nBE +2 mEq/L\n\nThe respiratory therapist should recommend:\n\n A. increase rate to 18\n B. increase tidal volume to 500\n C. increase PEEP to 10 cmH2O\n D. add pressure support of 5 cmH2O",
		options: {
			A: "increase rate to 18",
			B: "increase tidal volume to 500",
			C: "increase PEEP to 10 cmH2O",
			D: "add pressure support of 5 cmH2O",
		},
		answer: "A",
		answer_explanation:
			"increase rate to 18\n\nThis patient has arterial blood gases that show hypoventilation. Mild hypoxemia is also present. When there is a problem with both ventilation and oxygenation at the same time, ventilation should be corrected first. This is because the hypoxemia may be caused by hypoventilation. The proper way to increase ventilation is to either increase rate, or increase tidal volume. Any time the CO2 is off by more than 4 mmHg a change in tidal volume is insufficient. An increase in rate is required.",
	},
	{
		question:
			"The respiratory therapist observes an ECG wave form on a patient that is consistent with atrial tachycardia. The patient is complaining of chest pain, dizziness, and nausea. The respiratory therapist should recommend\n\n A. sychronized defibrillation\n B. Atropine sulfate\n C. unsynchronized defibrillation\n D. epinephrine",
		options: {
			A: "sychronized defibrillation",
			B: "Atropine sulfate",
			C: "unsynchronized defibrillation",
			D: "epinephrine",
		},
		answer: "A",
		answer_explanation:
			'sychronized defibrillation\n\nNon-deadly arrhythmias, such as this one, may be addressed through cardioversion, also called synchronized defibrillation. Cardioversion is a form of defibrillation with low wattage and with the synchronization set to "active". This allows the shock to be sychronized to the R wave.',
	},
	{
		question:
			"An adult male has had a unilateral wheeze, when auscultating the chest, for several months. Which of the following is the most likely cause?\n\n A. bronchoconstriction\n B. a cancerous mass in the pulmonary tree\n C. idiopathic pulmonary fibrosis\n D. ARDS",
		options: {
			A: "bronchoconstriction",
			B: "a cancerous mass in the pulmonary tree",
			C: "idiopathic pulmonary fibrosis",
			D: "ARDS",
		},
		answer: "B",
		answer_explanation:
			"a cancerous mass in the pulmonary tree\n\nThe presence of a unilateral wheeze that has persisted for several months is not likely related to bronchoconstriction. When bronchoconstriction is present, wheezing is usually noted bilaterally. The unilateral wheeze, in conjunction with its persistence for several months, is most likely caused by a mass in the pulmonary tree. This mass may be cancerous or benign.",
	},
	{
		question:
			"Immediately following oral intubation, which of the following devices would be most helpful in determining if the ET tube is correctly positioned in the trachea?\n\n A. transcutaneous CO2 monitor\n B. pulse oximetery\n C. SvO2 monitor\n D. infrared CO2 detection device",
		options: {
			A: "transcutaneous CO2 monitor",
			B: "pulse oximetery",
			C: "SvO2 monitor",
			D: "infrared CO2 detection device",
		},
		answer: "D",
		answer_explanation:
			"infrared CO2 detection device\n\nOf the devices listed, an infrared CO2 detection device may be used to determine if adequate CO2 is being exhaled from the ET tube during ventilation. If the endotracheal tube is inadvertently placed inside the esophagus end-tidal CO2 will read nearly 0, indicating a need to remove and reposition the endotracheal tube.",
	},
	{
		question:
			"Pulmonary function is done on a 68-year old male with a 20-pack-year history of smoking. The following pulmonary function data is recorded:\n\nFVC 83\nSVC 85\nFev1/FVC% 62\nFEF200-1200 78\nFEF 25-75 60\nDLCO 22\n\nWhich of the following most likely represents the patient's condition?\n A. sarcoidosis\n B. emphysema\n C. chronic bronchitis\n D. asbestosis",
		options: {
			A: "sarcoidosis",
			B: "emphysema",
			C: "chronic bronchitis",
			D: "asbestosis",
		},
		answer: "C",
		answer_explanation:
			"chronic bronchitis\n\nPulmonary function test data indicates the patient has an obstructed defect. This is manifest by a reduced FEV1/FVC%. Anything less than 75% is considered abnormal. The SVC is normal and therefore indicates the patient has no restrictive defect. So, we must pick an answer that is an obstructive disease. When we look at the answers we see there are two options - emphysema and chronic bronchitis. To know which one it is we must look back at the pulmonary function testing data and observe the DLCO. Only emphysema shows a poor DLCO. In this case the DLCO is greater than 20 CO/min/mmHg and is therefore normal. This means that emphysema can not be the correct option leaving only chronic bronchitis as the only possible correct choice.",
	},
	{
		question:
			"A patient who weighs 68 kg (150 lb) has a minute ventilation requirement of 14 L/min to maintain a PaCO2 of 38 torr. Which of the following can explain the ventilatory requirements?\n\n A. CNS depression\n B. excessive caloric intake\n C. obstructive apnea\n D. increased dead space ventilation",
		options: {
			A: "CNS depression",
			B: "excessive caloric intake",
			C: "obstructive apnea",
			D: "increased dead space ventilation",
		},
		answer: "D",
		answer_explanation:
			"increased dead space ventilation\n\nThis patient is requiring a very high minute ventilation to achieve a normal PaCO2. The most likely cause of this is increased dead space ventilation. Dead space ventilation is likely due to collapsed alveoli which results in lower lung space. This would cause the patient to breathe quickly and deeply in order to move significant amounts of air to achieve adequate ventilation.",
	},
	{
		question:
			"A patient in the emergency room has been diagnosed with status asthmaticus. She has received IV steroids, MDI steroids, bronchodilators and antibiotics. Which medication should be discontinued first once the patient becomes stable?\n\n A. antibiotics\n B. IV steroids\n C. MDI steroids\n D. bronchodilators",
		options: {
			A: "antibiotics",
			B: "IV steroids",
			C: "MDI steroids",
			D: "bronchodilators",
		},
		answer: "B",
		answer_explanation:
			"IV steroids\n\nA patient with status asthmaticus would benefit from IV steroids such as methylprednisolone. Of the medications given IV steroids should be discontinued first.",
	},
	{
		question:
			"A patient with a fenestrated tracheostomy tube is in full cardiopulmonary arrest with a blood pressure of 40/10 mmHg, a respiratory rate of 2, and a pulse of 20/min. To provide manual ventilation the respiratory therapist should FIRST\n\n A. inflate the cuff\n B. remove the fenestrated tube and reintubate with a regular tracheostomy tube\n C. remove the tracheostomy cap\n D. suction the patient",
		options: {
			A: "inflate the cuff",
			B: "remove the fenestrated tube and reintubate with a regular tracheostomy tube",
			C: "remove the tracheostomy cap",
			D: "suction the patient",
		},
		answer: "C",
		answer_explanation:
			"remove the tracheostomy cap\n\nWhen a fenestrated tracheostomy is in a speaking configuration but requires positive pressure ventilation with a resuscitation bag or ventilator, the first step is to remove the tracheostomy. When transitioning from one configuration to the other, one must remember to always do the steps in a order that allows the patient to breathe freely during the change.",
	},
	{
		question:
			"A patient is receiving volume-controlled ventilation. Which of the following blood gas results is a clear indication for an increase in minute ventilation?\n\n A. pH 7.50, PaCO2 30 torr, PaO2 82 torr\n B. pH 7.25, PaCO2 55 torr, PaO2 51 torr\n C. pH 7.55, PaCO2 26 torr, Pao2 88 torr\n D. pH 7.35, PaCO2 60 torr, PaO2 65 torr",
		options: {
			A: "pH 7.50, PaCO2 30 torr, PaO2 82 torr",
			B: "pH 7.25, PaCO2 55 torr, PaO2 51 torr",
			C: "pH 7.55, PaCO2 26 torr, Pao2 88 torr",
			D: "pH 7.35, PaCO2 60 torr, PaO2 65 torr",
		},
		answer: "B",
		answer_explanation:
			"pH 7.25, PaCO2 55 torr, PaO2 51 torr\n\nThe need to increase minute ventilation can be determined by examining arterial CO2. In this question, two options have an elevated PaCO2, indicating a need to increase ventilation. However one of these options shows a corrected pH, suggesting that the elevated CO2 is normal for that patient. Therefore, the correct answer is the blood gas results that show elevated CO2 with an uncompensated pH. This is called uncompensated respiratory acidosis.",
	},
	{
		question:
			"Results obtained from a multiple wave-length spectrophotometer are consistent with the results obtained from a Co-oximeter, but not with the blood gas analyzer. The respiratory therapist determines that the blood gas analyzer is inaccurate. How should this problem be corrected?\n\n A. Run a two-point calibration on the Co-oximeter, followed by QC\n B. Run QC only on the Co-oximeter\n C. Accept the results that seem most consistent with the clinical scenario\n D. Run a two-point calibration on the blood gas analyzer, followed by QC",
		options: {
			A: "Run a two-point calibration on the Co-oximeter, followed by QC",
			B: "Run QC only on the Co-oximeter",
			C: "Accept the results that seem most consistent with the clinical scenario",
			D: "Run a two-point calibration on the blood gas analyzer, followed by QC",
		},
		answer: "D",
		answer_explanation:
			"Run a two-point calibration on the blood gas analyzer, followed by QC\n\nOnce a respiratory therapist determines that an instrument is inaccurate, the machine should be either removed from service or calibrated. After calibration, quality control material should be utilized to confirm that the calibration efforts were successful and that the machine is now reading accurately.",
	},
	{
		question:
			"A respiratory therapist is called STAT to the general floor where a patient with a tracheal button in place is unable to breathe. The respiratory therapist should\n A. remove the button and put a tracheostomy tube in through the stoma.\n B. remove the inner cannula and deflate the cuff.\n C. remove the cap and insert the inner cannula.\n D. attempt to manually ventilate.",
		options: {
			A: "remove the button and put a tracheostomy tube in through the stoma.",
			B: "remove the inner cannula and deflate the cuff.",
			C: "remove the cap and insert the inner cannula.",
			D: "attempt to manually ventilate.",
		},
		answer: "D",
		answer_explanation:
			"attempt to manually ventilate.\n\nThe respiratory therapist should not confuse a tracheal button with a cap, which would be utilized with a fenestrated tracheostomy tube. A button is inserted into the stoma as a placeholder. Therefore, this patient should be treated as any other patient who cannot breathe by attempting to manually ventilate after opening the airway.",
	},
	{
		question:
			"Using the formula for calculation of cardiac index, how would a morbidly obese patient's C.I. compare to that of a person at ideal body weight?\n\n A. cardiac index would be lower\n B. cardiac index would remained unchanged\n C. cardiac index would be higher\n D. cardiac index would be unpredictable",
		options: {
			A: "I. compare to that of a person at ideal body weight?",
			B: "cardiac index would be lower",
			C: "cardiac index would remained unchanged",
			D: "cardiac index would be hig",
		},
		answer: "A",
		answer_explanation:
			"cardiac index would be lower\n\nCardiac index is determined by dividing cardiac output by body surface area. As body surface area is increased (from obesity) the cardiac index calculation will be less than a patient at ideal body weight.",
	},
	{
		question:
			"Which device is most appropriate to send to the central processing department for sterilization after use on an infectious patient?\n\n A. Stylet\n B. Battery-powered laryngoscope handle\n C. Fiber optic laryngoscope blade\n D. Infant ventilator",
		options: {
			A: "Stylet",
			B: "Battery-powered laryngoscope handle",
			C: "Fiber optic laryngoscope blade",
			D: "Infant ventilator",
		},
		answer: "B",
		answer_explanation:
			"Battery-powered laryngoscope handle\n\nIn this example the laryngoscope handle is an electronic device and may be damaged with customary soaking in glutaraldehyde. A fiber-optic laryngoscope blade and a reusable stylet can both be soaked in a glutaraldehyde solution. An infant ventilator cannot be soaked or sent for sterilization. A ventilator is wiped down. The use of filters prevents contamination of the inner parts.",
	},
	{
		question:
			"A patient is being sent home on a mechanical ventilator requiring oxygen bleed-in with the device. Which of the following should be recommended?\n A. E-Cylinders\n B. pulse-dose oxygen delivery\n C. liquid oxygen\n D. oxygen concentrator",
		options: {
			A: "E-Cylinders",
			B: "pulse-dose oxygen delivery",
			C: "liquid oxygen",
			D: "oxygen concentrator",
		},
		answer: "D",
		answer_explanation:
			"oxygen concentrator\n\nThe best device for home oxygen therapy is a molecular sieve device, commonly known as an oxygen concentrator. This device is powered with electricity, which makes it appropriate for home use.",
	},
	{
		question:
			"A 9-year-old girl is receiving mechanical ventilation with an adult circuit with the following arterial blood gases values:\npH 7.30 \nPaCO2 53 mm Hg\nPaO2 78 mm Hg\nHCO3- 25 mEq/L\nBE +1 mEq/L\n\nBased on these values, the respiratory therapist should\n\n A. decrease the rate.\n B. change the circuit.\n C. reduce 50 ml mechanical deadspace.\n D. increase the rate.",
		options: {
			A: "decrease the rate.",
			B: "change the circuit.",
			C: "reduce 50 ml mechanical deadspace.",
			D: "increase the rate.",
		},
		answer: "D",
		answer_explanation:
			"increase the rate.\n\nThis patient is under ventilating and under oxygenating. Of these two problems ventilation should be addressed first. This is best done by increasing the rate.",
	},
	{
		question:
			"A patient with myasthenia gravis presents to the clinic with a fever, suspected pneumonia secondary to an infiltrate seen on a chest radiograph, and the following ABG results:\npH 7.33 \nPaCO2 47 torr\nPaO2 85 torr\nHCO3- 26 mEq/L\nFIO2 0.21\nBased upon this information, the patient needs\n\n A. intubation.\n B. oxygen at 2 L/min nasal cannula.\n C. antibiotic therapy.\n D. pulmonary function testing.",
		options: {
			A: "intubation.",
			B: "oxygen at 2 L/min nasal cannula.",
			C: "antibiotic therapy.",
			D: "pulmonary function testing.",
		},
		answer: "C",
		answer_explanation:
			"antibiotic therapy.\n\nIn this example, we see a problem with ventilation as the PaCO2 is 47 torr. However, there is no option that will resolve ventilation, therefore we must look to the scenario for other problems. There is an underlying problem of infection for which antibiotic therapy is indicated.",
	},
	{
		question:
			"A 57-year-old cachectic male patient with known COPD is receiving oxygen by nasal cannula at 5 L/min. The patient is very drowsy with a respiratory rate of 8/min. Oxygen saturation is 100%. The therapist should\n\n A. draw an arterial blood gas.\n B. obtain a CT scan.\n C. place on a NRB mask.\n D. reduce supplemental oxygen delivery.",
		options: {
			A: "draw an arterial blood gas.",
			B: "obtain a CT scan.",
			C: "place on a NRB mask.",
			D: "reduce supplemental oxygen delivery.",
		},
		answer: "D",
		answer_explanation:
			"reduce supplemental oxygen delivery.\n\nA patient with COPD should not receive more than 1 to 2 L/min by nasal cannula or more than 28% oxygen. If excessive oxygen is administered the patient may experience a reduced ventilatory drive. Optimal oxygen saturation for a patient with COPD is between 92 and 94%.",
	},
	{
		question:
			"You are asked to instruct a patient being discharged home to use inhalers instead of small volume nebulizers. The patient is 8-years-old and was generally non-compliant with aerosol therapy during the hospitalization. Which of the following should NOT be included in the teaching plan?\n\n A. MDI self-administration without a spacer\n B. order and timing of ordered medications\n C. MDI self-administration with a spacer\n D. instructions for the parents/legal guardians",
		options: {
			A: "MDI self-administration without a spacer",
			B: "order and timing of ordered medications",
			C: "MDI self-administration with a spacer",
			D: "instructions for the parents/legal guardians",
		},
		answer: "A",
		answer_explanation:
			"MDI self-administration without a spacer\n\nA spacer is indicated for a patient this age in order to reduce the need to rely upon coordination with an MDI, along with improving medication particle delivery. Including the family and taking multiple medications in their proper order are necessary points for teaching.",
	},
	{
		question:
			"A male patient who weighs 72-kg (170-lb) and is 5-ft, 4-in tall is receiving mechanical ventilator support on the following settings with the following corresponding blood gas values:\nMode SIMV \nMandatory rate 14\nVT 400 mL\nFIO2 0.50\nPEEP 5 cmH2O\n\npH 7.32 \nPaCO2 47 mm Hg\nPaO2 70 mm Hg\nHCO3- 25 mEq/L\nBE +1 mEq/L\n\nThe respiratory therapist should recommend:\n A. increase rate to 16\n B. increase FIO2 to 0.6\n C. increase PEEP to 8 cmH2O\n D. increase tidal volume to 500 mL",
		options: {
			A: "increase rate to 16",
			B: "increase FIO2 to 0.6",
			C: "increase PEEP to 8 cmH2O",
			D: "increase tidal volume to 500 mL",
		},
		answer: "D",
		answer_explanation:
			"increase tidal volume to 500 mL\n\nArterial blood gases show mild hypoventilation and hypoxemia. Although increasing rate would correct ventilation, increasing tidal volume is most appropriate. Additionally, the CO2 is only off by a very small amount and a change in tidal volume is the better choice when making small changes in CO2 because it results in a smaller increase in mean airway pressure.",
	},
	{
		question:
			"A patient is suspected to have a kidney disease process that causes fluid shifting. Which of the following would help evaluate this process?\n\n A. creatinine\n B. COHb\n C. hemoglobin\n D. Theophylline level",
		options: {
			A: "creatinine",
			B: "COHb",
			C: "hemoglobin",
			D: "Theophylline level",
		},
		answer: "A",
		answer_explanation:
			"creatinine\n\nKidney disease often results in fluid shifting. When fluid shifting is present, as manifested through pitting edema or other clinical signs, the situation may be further evaluated by obtaining a creatinine level. Blood urea nitrogen (BUN) is another test that would be useful in further evaluating this condition, although not as accurate as creatinine.",
	},
	{
		question:
			"A family is found sleeping in their vehicle on the side of the road during a long trip. The officer who found them reports the family was difficult to arouse. Which of the following would be the most appropriate examination?\n\n A. drug toxicology screen\n B. arterial blood gas analysis\n C. COHb\n D. pulse oximetry",
		options: {
			A: "drug toxicology screen",
			B: "arterial blood gas analysis",
			C: "COHb",
			D: "pulse oximetry",
		},
		answer: "C",
		answer_explanation:
			"COHb\n\nThe circumstances surrounding this family suggest possible exposure to carbon monoxide. The most reliable way to assess carbon monoxide levels is to determine COHb. Pulse oximetry is not capable of measuring carbon monoxide attached to hemoglobin.",
	},
	{
		question:
			"During a routine check of a patient on mechanical ventilation, the respiratory therapist palpates less chest rise on the left compared to the right during inspiration. The therapist should first do which of the following?\n\n A. Prepare for needle decompression in the left chest\n B. Auscultate breath sounds bilaterally for equal air movement\n C. Check the integrity of the ET tube cuff\n D. Advance the endotracheal tube and recheck chest rise",
		options: {
			A: "Prepare for needle decompression in the left chest",
			B: "Auscultate breath sounds bilaterally for equal air movement",
			C: "Check the integrity of the ET tube cuff",
			D: "Advance the endotracheal tube and recheck chest rise",
		},
		answer: "B",
		answer_explanation:
			"Auscultate breath sounds bilaterally for equal air movement\n\nAsymmetrical chest movement, or chest rise during mechanical ventilation, is an indication that the endotracheal tube may be improperly placed. The first, more immediate action that should be taken is to further assess the problem by auscultating the chest. If breath sounds are absent on one side, it is appropriate to withdraw the endotracheal tube until breath sounds can be heard bilaterally. After doing so, a chest x-ray should be ordered to confirm proper placement of the endotracheal tube.",
	},
	{
		question:
			"A patient is receiving volume-controlled ventilation in the assist/control mode. The following data are available:\n8am:\npeak 35\nplateau 22\nexhaled vt 600\n10am:\npeak 53\nplateau 24\nexhaled vt 600\n\nThe respiratory therapist should next perform which of the following?\n A. endotracheal suctioning\n B. obtain a chest radiograph\n C. observe pressure/volume airway graphic\n D. decrease set tidal volume",
		options: {
			A: "endotracheal suctioning",
			B: "obtain a chest radiograph",
			C: "observe pressure/volume airway graphic",
			D: "decrease set tidal volume",
		},
		answer: "A",
		answer_explanation:
			"endotracheal suctioning\n\nThis data shows a significant increase in peak airway pressures while plateau pressures remains nearly constant. This is consistent with a decrease in dynamic compliance but shows steady static compliance. A decrease in dynamic compliance is caused from temporary conditions such as secretions in the airway, bronchoconstriction, kinked endotracheal tubes, and water in the ventilator circuit, to name a few. Of the options offered, only endotracheal suctioning addresses the decrease in dynamic compliance.",
	},
	{
		question:
			"A 38-year old male is receiving ventilatory support by a high frequency jet ventilator (HFJV). Heart rate is 120/min and blood pressure is within normal limits. Arterial blood gas results on high frequency ventilation are as follows:\npH 7.26 \nPaCO2 64 torr\nPaO2 82 torr\nHCO3- 26 mEq/L\nBE 0 mEq/L\nThe respiratory therapist should recommend\n\n A. increasing frequency\n B. increasing amplitude\n C. switching to volume-controlled ventilation\n D. switching to pressure control ventilation",
		options: {
			A: "increasing frequency",
			B: "increasing amplitude",
			C: "switching to volume-controlled ventilation",
			D: "switching to pressure control ventilation",
		},
		answer: "A",
		answer_explanation:
			"increasing frequency\n\nThis patient, who is on a high-frequency ventilator, shows evidence of hypoventilation as manifested by high PaCO2. Oxygenation appears adequate. To correct the hyperventilation, the most appropriate action is to increase frequency. This is equivalent to increasing the mandatory rate.",
	},
	{
		question:
			"The respiratory therapist measures the functional residual capacity with a body box and determines the related value is 4.3 L. The FRC value is 3.4 L when determining via helium dilution method. Which of the following can explain the difference?\n\n A. inconsistent patient effort\n B. significant amount of non-ventilated alveoli\n C. hyperventilation secondary to panic in the body box\n D. depleted helium analyzer",
		options: {
			A: "inconsistent patient effort",
			B: "significant amount of non-ventilated alveoli",
			C: "hyperventilation secondary to panic in the body box",
			D: "depleted helium analyzer",
		},
		answer: "B",
		answer_explanation:
			"significant amount of non-ventilated alveoli\n\nA patient with COPD has significant non-ventilated lung space. The measurement of total lung capacity, FRC, and RV done by helium dilution and nitrogen washout will likely be less accurate and show a smaller FRC compared to pulmonary function testing done by a body box. A body box can indirectly measure non-ventilated alveolar space.",
	},
	{
		question:
			"A patient with ARDS receiving volume-controlled ventilation has the following arterial blood results on the settings below:\nMode Assist/control:\nMandatory rate 14\nVT 400 mL\nFIO2 0.70\nPEEP 20 cm H2O\npH 7.29\nPaCO2 50 torr\nPaO2 69 torr\nHCO3- 23 mEq/L\nBE -1 mEq/L\nWhich of the following changes is most appropriate?\n\n A. add 100 mL deadspace\n B. increase rate to 16\n C. increase FIO2 to 0.8\n D. increase PEEP to 22 cmH2O",
		options: {
			A: "add 100 mL deadspace",
			B: "increase rate to 16",
			C: "increase FIO2 to 0.8",
			D: "increase PEEP to 22 cmH2O",
		},
		answer: "B",
		answer_explanation:
			"increase rate to 16\n\nThis ARDS patient is both under ventilating and under oxygenating. Of these problems under ventilation should be addressed first. The most appropriate method of reducing CO2 that is offered among these options is an increase in rate. Adjusting PEEP or FIO2 will address oxygenation. Adding deadspace will cause a change in CO2 in the wrong direction (increase).",
	},
	{
		question:
			"A respiratory therapist is performing a routine patient/ventilator check on a mechanically ventilated patient. Returned tidal volume is 150 mL less than delivered. A high-pitched audible leak is auscultated through the neck. What is the appropriate response?\n\n A. add air to the cuff\n B. reposition the patient\n C. increase delivered tidal volume\n D. advance the endotracheal tube 1 cm",
		options: {
			A: "add air to the cuff",
			B: "reposition the patient",
			C: "increase delivered tidal volume",
			D: "advance the endotracheal tube 1 cm",
		},
		answer: "A",
		answer_explanation:
			"add air to the cuff\n\nThe high-pitched audible leak auscultating over the neck in conjunction with a low returned tidal volume is most likely an indication of insufficient pressure in the endotracheal tube cuff. Adding air to the cuff is most appropriate.",
	},
	{
		question:
			"A patient receiving mechanical ventilation has received Halcion in the last twenty minutes. The physician orders the institution of spontaeneous breathing trials to commence immediately. Which of the following medications would be most helpful to the patient?\n\n A. Morphine sulfate\n B. Valium\n C. Meperidine\n D. Romazicon (Flumazenil)",
		options: {
			A: "Morphine sulfate",
			B: "Valium",
			C: "Meperidine",
			D: "Romazicon (Flumazenil)",
		},
		answer: "D",
		answer_explanation:
			"Romazicon (Flumazenil)\n\nExplanation : \nIn this question the patient is taking a drug called Halcion. The doctor would like T-piece trials, which means the patient has to breathe on his or her own. Since that medication would inhibit breathing, the effect of that medication must be reversed. Romazicon is the drug that will reverse Halcion.",
	},
	{
		question:
			"A patient with a history of myasthenia gravis receives Edrophonium for the purpose of diagnosis of a suspected myasthenic crisis. Moments after administration, the patient's ventilatory drive becomes markedly diminished. What medication would be most helpful to the patient at this time?\n\n A. Atropine sulfate\n B. Propranolol\n C. Neostigmine\n D. Halcion (Triazolam)",
		options: {
			A: "Atropine sulfate",
			B: "Propranolol",
			C: "Neostigmine",
			D: "Halcion (Triazolam)",
		},
		answer: "A",
		answer_explanation:
			"Atropine sulfate\n\nExplanation : \nWhen patients have a history of myasthenia gravis and as a result of receiving Tensilon, the respiratory therapist must be on guard for an adverse reaction from the Tensilon. The medication that can reverse the effects of Tensilon is atropine sulfate.",
	},
	{
		question:
			"After several moments of cardiac compressions with a patient suffering from a complete cardiopulmonary collapse, the patient's cardiac rhythm is consistent with asystole when compressions are momentarily halted. Which of the following medications would be most helpful to the patient:\n\n A. Lidocaine\n B. epinephrine\n C. Quinidine\n D. Romazicon",
		options: {A: "Lidocaine", B: "epinephrine", C: "Quinidine", D: "Romazicon"},
		answer: "B",
		answer_explanation:
			"epinephrine\n\nExplanation : \nEpinephrine is the drug of choice to treat asystole. The other medications are not used in the situation.",
	},
	{
		question:
			"A patient who suffers from head trauma has an ICP of 25 mm Hg and is receiving mechanical ventilatory support in control mode. The patient is sedated and paralyzed. To best manage intracranial pressure, which of the following medications would be most helpful?\n\n A. Exosurf\n B. Neostigmine\n C. Lasix (furosemide)\n D. Diamox (Acetazolamide)",
		options: {
			A: "Exosurf",
			B: "Neostigmine",
			C: "Lasix (furosemide)",
			D: "Diamox (Acetazolamide)",
		},
		answer: "D",
		answer_explanation:
			"Diamox (Acetazolamide)\n\nExplanation : \nThe medication Diamox is a cerebral diuretic. This will lower the ICP. The other medications on this list do not relate. Be sure to research them and know how they're used.",
	},
	{
		question:
			"The respiratory therapist should evaluate which of the following to develop a teaching plan for a patient who will be using a small volume nebulizer at home?\n\n A. english speaking proficiency\n B. spousal support\n C. manual dexterity\n D. highest grade level achieved in school",
		options: {
			A: "english speaking proficiency",
			B: "spousal support",
			C: "manual dexterity",
			D: "highest grade level achieved in school",
		},
		answer: "C",
		answer_explanation:
			"manual dexterity\n\nExplanation : \nA patient that is taking nebulizer treatments needs to be able to demonstrate manual dexterity, and the ability to hold and manipulate the nebulizer. During the instruction, appropriate language skills are also important but English proficiency is not required. What is NOT important is the patient's spousal support. This will have no effect on their ability to self administer nebulizer treatments.",
	},
	{
		question:
			"The respiratory therapist should evaluate which of the following to develop a teaching plan for a patient who will be using a metered dose inhaler (MDI) at home?\n\n A. disease history and current diagnosis\n B. visual acuity and color blindedness\n C. highest achieved grade level and GPA\n D. manual dexterity and language skills",
		options: {
			A: "disease history and current diagnosis",
			B: "visual acuity and color blindedness",
			C: "highest achieved grade level and GPA",
			D: "manual dexterity and language skills",
		},
		answer: "D",
		answer_explanation:
			"manual dexterity and language skills\n\nExplanation : \nA patient taking nebulizer treatments should be able to demonstrate manual dexterity, or the ability to hold and manipulate the nebulizer device. It is also important that they demonstrate appropriate language skills so they may understand the instruction provided them regarding the use of the device. Their ability to see, or visual acuity, and disease history is not important or critical in learning how to use a nebulizer device.",
	},
	{
		question:
			"Which of the following should be excluded in an evaluation of a patient's ability to learn to self-administer medication by metered dose inhaler (MDI)?\n\n A. level of dementia\n B. manual dexterity\n C. language skill\n D. disease history",
		options: {
			A: "level of dementia",
			B: "manual dexterity",
			C: "language skill",
			D: "disease history",
		},
		answer: "D",
		answer_explanation:
			"disease history\n\nExplanation : \nA patient that is taking nebulizer treatments needs to be able to demonstrate manual dexterity, and the ability to hold and manipulate the nebulizer. During the instruction, appropriate language skills and mental capabilities are also important. The patient should also have the mental ability to learn. What is NOT important is the patient's disease history. This will have no effect on their ability to self administer nebulizer treatments.",
	},
	{
		question:
			"A 33-year-old female with a history of asthma presents to the emergency room (ER) with inspiratory and expiratory wheezing. She takes aminophylline routinely and has self-administered 8 puffs of albuterol via MDI over the past two hours. What should the respiratory therapist recommend?\n\n A. Ipratroprium Bromide 0.5 mg and a Theophylline level check\n B. Spiriva and Xopenex\n C. Heliox and Solumedrol\n D. intubation and volume ventilation",
		options: {
			A: "Ipratroprium Bromide 0.5 mg and a Theophylline level check",
			B: "Spiriva and Xopenex",
			C: "Heliox and Solumedrol",
			D: "intubation and volume ventilation",
		},
		answer: "A",
		answer_explanation:
			"Ipratroprium Bromide 0.5 mg and a Theophylline level check\n\nExplanation : \nIt is appropriate to evaluate the patient's theophylline level (side-door bronchodilator) because she is taking it routinely and it is necessary to be sure that her level is within the therapeutic range of 10 to 20 ug/mL. The proper dose of Atrovent is also appropriate because we are combining a back-door bronchodilator with albuterol, a front-door bronchodilator.",
	},
	{
		question:
			"Which of the following can safely be combined with inhaled albuterol?\n\n A. Ipratropium Bromide\n B. Xopenx\n C. Phosphodiesterase inhibitor\n D. Pirbuterol",
		options: {
			A: "Ipratropium Bromide",
			B: "Xopenx",
			C: "Phosphodiesterase inhibitor",
			D: "Pirbuterol",
		},
		answer: "A",
		answer_explanation:
			"Ipratropium Bromide\n\nExplanation : \nXopenex should not be combined with albuterol because both are front-door bronchodilators. It is not appropriate to combine multiple front-door bronchodilators.",
	},
	{
		question:
			"A patient in the emergency department (ED) with asthma has been on a continuous Albuterol treatment for one hour at 10mg/hr. Aeration has improved slightly upon auscultation. Peak flow is currently less than 50% of normal baseline. The respiratory therapist is asked to recommend additional bronchodilator therapy to be combined with Albuterol. Which of the following should the therapist recommend?\n\n A. Atrovent MDI 2 Puffs\n B. Serevent MDI 2 Puffs\n C. Pributerol MDI 2 Puffs\n D. Flovent MDI 2 Puffs",
		options: {
			A: "Atrovent MDI 2 Puffs",
			B: "Serevent MDI 2 Puffs",
			C: "Pributerol MDI 2 Puffs",
			D: "Flovent MDI 2 Puffs",
		},
		answer: "A",
		answer_explanation:
			"Atrovent MDI 2 Puffs\n\nExplanation : \nAtrovent is an appropriate choice because it is a back-door bronchodilator and can safely be combined with albuterol. Serevent and Pributerol are not appropriate because they are also front-door bronchodilators and should not be combined with albuterol. Flovent is a maintenance drug that is not helpful in this acute situation.",
	},
	{
		question:
			"A respiratory therapist is called to the emergency room to assess a 40-year-old female complaining of shortness of breath secondary to asthma. PEFR is 50% of baseline. Breath sounds are diminished with inspiratory wheezing. SpO2 is 87% on room air. WBC count is 18,000. The patient has a productive cough with yellow, thick sputum. Which of the following should the respiratory therapist suggest?\n1. Proventil SVN\n2. Supplemental oxygen\n3. Complete PFT\n4. Sputum C&S and gram stain\n\n A. 1, 2 and 4\n B. 1, 2 and 3\n C. 1, 2, 3 and 4\n D. 1 and 2 only",
		options: {
			A: "1, 2 and 4",
			B: "1, 2 and 3",
			C: "1, 2, 3 and 4",
			D: "1 and 2 only",
		},
		answer: "A",
		answer_explanation:
			"1, 2 and 4\n\nExplanation : \nProventil is appropriate as it will help with the bronchoconstriction. Oxygen is also needed due to the low SpO2. The sputum evaluation is correct due to the high white blood cell count and yellow color indicating an infection exists. A complete PFT is not indicated during an acute asthma episode.",
	},
	{
		question:
			"Which of the following would be most beneficial in resolving microatelectasis?\n\n A. Chest tubes\n B. Bronchoscopy\n C. Thoracentesis\n D. Percutaneous ventilation",
		options: {
			A: "Chest tubes",
			B: "Bronchoscopy",
			C: "Thoracentesis",
			D: "Percutaneous ventilation",
		},
		answer: "B",
		answer_explanation:
			"Bronchoscopy\n\nExplanation : \nA bronchoscopy would be most beneficial because it can ventilate and recruit alveoli in the lung. The other options will not decrease atelectasis.",
	},
	{
		question:
			"A patient postoperative for a laryngectomy has thick secretions that are increasingly difficult to suction or aspirate. The patient is currently receiving 40% oxygen with a large-volume cool aerosol. The respiratory therapist should recommend\n\n A. increase suction pressure to 140 mmHg\n B. lavage with 3.0 cc of normal saline prior to suctioning\n C. increase FIO2 to 50%\n D. switch to a heated aerosol",
		options: {
			A: "increase suction pressure to 140 mmHg",
			B: "lavage with 3.0 cc of normal saline prior to suctioning",
			C: "increase FIO2 to 50%",
			D: "switch to a heated aerosol",
		},
		answer: "D",
		answer_explanation:
			"switch to a heated aerosol\n\nExplanation : \nBecause the patient has had a laryngectomy, the patient is not breathing through his mouth. Therefore, the natural humidification mechanisms are being bypassed. So, the patient should receive heated aerosol to make up for that humidification loss.",
	},
	{
		question:
			"A 45 year-old patient is recovering in the intensive care unit after undergoing a surgical procedure to repair a hernia. The patient remains unconscious. To prevent soft tissue obstruction, the respiratory therapist should recommend a(n)\n\n A. bite block\n B. double-lumen endobronchial tube\n C. nasopharyngeal airway\n D. oropharyngeal airway",
		options: {
			A: "bite block",
			B: "double-lumen endobronchial tube",
			C: "nasopharyngeal airway",
			D: "oropharyngeal airway",
		},
		answer: "D",
		answer_explanation:
			"oropharyngeal airway\n\nExplanation : \nAn oral pharyngeal airway is the primary mechanism used to prevent the time from falling back and obstructing the airway. Although a double lumen endobronchial tube would also do this, it is far too invasive and not necessary.",
	},
	{
		question:
			"A patient with a history of chronic bronchitis is post-operative for an exploratory laparotomy. Review of the medical record suggests the physician has concern about difficulty clearing secretions after the procedure. To assist the patient with mobilization and removal of secretions, the respiratory therapist should recommend\n\n A. administer tetracycline\n B. administer cromolyn sodium\n C. MDI therapy with an anti-inflammatory corticosteroid\n D. instruction on deep breathing and coughing techniques",
		options: {
			A: "administer tetracycline",
			B: "administer cromolyn sodium",
			C: "MDI therapy with an anti-inflammatory corticosteroid",
			D: "instruction on deep breathing and coughing techniques",
		},
		answer: "D",
		answer_explanation:
			"instruction on deep breathing and coughing techniques\n\nExplanation : \nAfter surgery a primary concern is secretion removal. The easiest way to increase secretion removal is to teach people how to breathe deeply and cough. An MDI may be tempting but it will not remove secretions. The other options are not related.",
	},
	{
		question:
			"Which of the following conditions would be a contraindication for IPPB?\n\n A. pulmonary edema\n B. untreated pneumothorax\n C. a patient requiring bronchodilation AND lung expansion\n D. fractured ribs",
		options: {
			A: "pulmonary edema",
			B: "untreated pneumothorax",
			C: "a patient requiring bronchodilation AND lung expansion",
			D: "fractured ribs",
		},
		answer: "B",
		answer_explanation:
			"untreated pneumothorax\n\nExplanation : \nPneumothorax is a contraindication for IPPB due to positive pressure which will exacerbate barotrauma of the lung.",
	},
	{
		question:
			"A 75-kg (165-lbs) male is in acute ventilatory failure. In preparation for mechanical ventilatory support, the patient is to be orally intubated. Which of the following artificial airways would be most appropriate for this patient?\n\n A. Size 8.0 mm ET tube with a small volume, high pressure cuff\n B. Size 7.0 mm ET tube with a large volume, low pressure cuff\n C. Jackson tracheostomy tube\n D. Size 7.5 mm fenestrated tracheostomy tube",
		options: {
			A: "Size 8.0 mm ET tube with a small volume, high pressure cuff",
			B: "Size 7.0 mm ET tube with a large volume, low pressure cuff",
			C: "Jackson tracheostomy tube",
			D: "Size 7.5 mm fenestrated tracheostomy tube",
		},
		answer: "B",
		answer_explanation:
			"Size 7.0 mm ET tube with a large volume, low pressure cuff\n\nExplanation : \nThe best way to determine the appropriate size of an endotracheal tube is to take the first digit of the patient's ideal body weight in kilograms. In this case, the patient weighs 75 kg. An endotracheal tube size of 7 or 7.5 is appropriate. The fenestrated tracheostomy tube is intended for long-term mechanical ventilation and is not appropriate in this case. The preferred ET tube is high-volume and low-pressure.",
	},
	{
		question:
			"A disadvantages of using a self-inflating resuscitator on an infant is that:\n\n A. it is difficult to assess the seal between the mask and face.\n B. use more commonly results in gastric insufflation.\n C. pressure-release valves make over-inflation of the lungs less likely.\n D. maximum FIO2 of 1.0 is difficult to maintain.",
		options: {
			A: "it is difficult to assess the seal between the mask and face.",
			B: "use more commonly results in gastric insufflation.",
			C: "pressure-release valves make over-inflation of the lungs less likely.",
			D: "maximum FIO2 of 1.0 is difficult to maintain.",
		},
		answer: "A",
		answer_explanation:
			"it is difficult to assess the seal between the mask and face.\n\nExplanation : \nIt is customary to use flow-inflating resuscitator bags on infants. There are advantages and disadvantages to both types of resuscitators. According to NRP guidelines, assessment of the seal and delivery of oxygen are more difficult with a self-inflating resuscitator. A required gas source and a pressure-release valve are part of a flow-inflating device.",
	},
	{
		question:
			"During CPR, a self-inflating manual resuscitator fails to re-inflate properly between breaths. The patient has no spontaneous breaths, but has a pulse. In order to provide rescue breaths and resolve the problem, the respiratory therapist should\n\n A. replace the PEEP valve.\n B. replace the resuscitator bag.\n C. increase the flowrate.\n D. slow down the rate of manual breaths.",
		options: {
			A: "replace the PEEP valve.",
			B: "replace the resuscitator bag.",
			C: "increase the flowrate.",
			D: "slow down the rate of manual breaths.",
		},
		answer: "B",
		answer_explanation:
			"replace the resuscitator bag.\n\nExplanation : \nIt is best to replace malfunctioning equipment, especially during an emergency. A respiratory therapist should avoid making repairs or applying work-arounds with equipment when the patient needs immediate care.",
	},
	{
		question:
			"The sudden sounding of a high-pressure ventilator alarm is noted on a patient receiving volume controlled mechanical ventilation. The respiratory therapist notes the endotracheal tube is at 27 cm at the teeth and that breath sounds are absent when auscultating the left hemithorax. The therapist should immediately\n\n A. check the air pressure of the tube cuff\n B. advance the endotracheal tube until breath sounds can be auscultated over the left chest\n C. prepare for insertion of chest tubes in the left thorax\n D. withdraw the endotracheal tube until breath sounds are bilateral",
		options: {
			A: "check the air pressure of the tube cuff",
			B: "advance the endotracheal tube until breath sounds can be auscultated over the left chest",
			C: "prepare for insertion of chest tubes in the left thorax",
			D: "withdraw the endotracheal tube until breath sounds are bilateral",
		},
		answer: "D",
		answer_explanation:
			"withdraw the endotracheal tube until breath sounds are bilateral\n\nExplanation : \nThe proper placement of an oral endotracheal tube is when the teeth or lip line matches with markings on the tube somewhere in the low 20s. This endotracheal tube is 27 cm at the teeth, indicating the tube is advanced too far. In this case, it is likely the tube has advanced into the right mainstem bronchus, which would cause a high-pressure alarm to occur. The appropriate action is to withdraw the endotracheal tube until breath sounds are bilateral.",
	},
	{
		question:
			"A patient is receiving manual ventilatory support with a bag-valve connected to a size 8.0 mm ET tube. While transporting the patient from CT scan back to the intensive care unit, the respiratory therapist notices oxygen saturation has dropped to 88% and that the bag-valve is easier to squeeze than normal. Suspecting mal-positioning of the ET tube, the respiratory therapist should first\n\n A. examine chest rise and auscultate breath sounds\n B. call for a chest radiograph\n C. perform diagnostic chest percussion\n D. obtain an arterial blood gas",
		options: {
			A: "examine chest rise and auscultate breath sounds",
			B: "call for a chest radiograph",
			C: "perform diagnostic chest percussion",
			D: "obtain an arterial blood gas",
		},
		answer: "A",
		answer_explanation:
			"examine chest rise and auscultate breath sounds\n\nExplanation : \nThere are several options when assessing the proper location of an endotracheal tube. These options range from quick to thorough. The quickest way is to assess the tube location visually. This may be done by observing symmetry of chest rise or marking on the tube relative to the lip line. The next quickest way is to auscultate breath sounds. To CONFIRM location of the endotracheal tube, a chest x-ray is required but is time-consuming and should not be the first action taken to assess the endotracheal tube position.",
	},
	{
		question:
			"A 48-year-old patient has just been orally intubated prior to being placed on volume-controlled ventilation. The respiratory therapist should do which of the following to best confirm proper placement of the endotracheal tube?\n\n A. obtain a chest radiograph\n B. examine tube markings near the lips\n C. assess chest rise symmetry\n D. auscultate breath sounds",
		options: {
			A: "obtain a chest radiograph",
			B: "examine tube markings near the lips",
			C: "assess chest rise symmetry",
			D: "auscultate breath sounds",
		},
		answer: "A",
		answer_explanation:
			"obtain a chest radiograph\n\nExplanation : \nAlthough there are many ways to determine the location of an endotracheal tube inside the patient's airway, there is only one way to confirm its location - a chest x-ray or radiograph. Other methods include auscultation of breath sounds and observation of chest rise and symmetry. While these methods are quick and helpful they do not provide CONFIRMING evidence of the ET tube's location.",
	},
	{
		question:
			"A patient with an ideal body weight of 80-kg (176-lb) is being evaluated for cessation of mechanical ventilation. The following weaning parameters and clinical data are available:\n \nVital Capacity 1.2 L \nRSBI 50\nSpont VT 400 mL\nResp Rate 20/min\nWhich of the parameters is the most reliable indicator that the patient is ready for cold cessation of mechanical ventilation?\n\n A. RR\n B. RSBI\n C. Spont VT\n D. VC",
		options: {A: "RR", B: "RSBI", C: "Spont VT", D: "VC"},
		answer: "B",
		answer_explanation:
			"RSBI\n\nExplanation : \nThe rapid shallow breathing index is the best indicator that the aptient is ready for weaning in this scenario. RSBI = RR/VT. A result less than 106 is acceptable. 50 is well below and suggests the patient should be able to successfully wean off mechanical ventilation.",
	},
	{
		question:
			"A 70-kg (154-lb) COPD patient who was started on mechanical ventilation due to a severe pulmonary infection has the following weaning parameters & clinical data three days after initiation of mechanical ventilation:\n \nMIP -25 cmH20 \nSpont VT 360 mL\nRR 27\nWBC 8,000 per cu mm\nHb 16 gm/dL\nBased on the calculated RSBI, the respiratory therapist should recommend\n\n A. discontinuing mechanical ventilation.\n B. changing to Pressure/control.\n C. returning to full mechanical ventilation.\n D. extubating and providing Bi-level ventilation via mask.",
		options: {
			A: "discontinuing mechanical ventilation.",
			B: "changing to Pressure/control.",
			C: "returning to full mechanical ventilation.",
			D: "extubating and providing Bi-level ventilation via mask.",
		},
		answer: "A",
		answer_explanation:
			"discontinuing mechanical ventilation.\n\nExplanation : \nThe underlying problem of pulmonary infection seems to be resolved as the WBC is 8,000 per cu mm. The rapid shallow breathing index, RR/VT (L) is 75, well below the threshold of 106. Therefore, the best option is to discontinue mechanical ventilation.",
	},
	{
		question:
			"After 20 minutes into a spontaneous breathing trial (SBT) a mechanically ventilated female patient becomes anxious. Her baseline heart rate has increased by 20 /min. What should the respiratory therapist do?\n\n A. Increase the FIO2 and continue to monitor\n B. Return to full mechanical ventilation\n C. Calculate the RSBI\n D. Measure MIP",
		options: {
			A: "Increase the FIO2 and continue to monitor",
			B: "Return to full mechanical ventilation",
			C: "Calculate the RSBI",
			D: "Measure MIP",
		},
		answer: "B",
		answer_explanation:
			"Return to full mechanical ventilation\n\nExplanation : \nAn increasing heart rate by at least 20 bpm defines the failure of a weaning trial. Further calculations or measurements are not appropriate as the patient needs mechanical ventilation prior to further deterioration.",
	},
	{
		question:
			"A respiratory therapist has achieved the following weaning parameters on a post-operative patient who experienced a total knee replacement. The SpO2 is 97% on 35% oxygen.\n \nSpont VT 480 mL \nVC 1600 mL\nVE 7.0 L\nMIP -4 cm H2O\nThe next best action would be to\n\n A. return to full mechanical ventilation\n B. check the pressure manometer for leaks\n C. evaluate the MEF\n D. reduce FIO2 to 0.30",
		options: {
			A: "return to full mechanical ventilation",
			B: "check the pressure manometer for leaks",
			C: "evaluate the MEF",
			D: "reduce FIO2 to 0.30",
		},
		answer: "B",
		answer_explanation:
			"check the pressure manometer for leaks\n\nExplanation : \nMost of the weaning parameters listed are very good and suggest that the patient is strong enough for weaning. The respiratory therapist should not believe the NIF result of -4 cm H2O because it is not consistent with the remainder of the results. A leak is likely present in the manometer set up.",
	},
	{
		question:
			"A patient has been on mechanical ventilator support for 5 days. The physician would like to consider weaning the patient. The following clinical data is available:\n \nMIP -34 cmH2O \nVT (spont) 450 mL\nA-aDO2 220 mmHg\nVD/VT 0.70\nVC 1.6 L\nRR 18/min\nBased on this data, the therapist should recommend\n\n A. perform pulmonary function testing\n B. obtain arterial blood gas analysis\n C. begin weaning with pressure support\n D. avoid weaning at this time",
		options: {
			A: "perform pulmonary function testing",
			B: "obtain arterial blood gas analysis",
			C: "begin weaning with pressure support",
			D: "avoid weaning at this time",
		},
		answer: "D",
		answer_explanation:
			"avoid weaning at this time\n\nExplanation : \nAll data suggests that the patient is ready to wean except for one piece of data. That is the VD/VT ratio which is above 60%. It must be below 60% for weaning to be considered.",
	},
	{
		question:
			"In preparation for a smoking cessation class, the therapist should include information on which of the following agents?\n\n A. Pronestyl\n B. Sub-lingual Lidocaine spray\n C. Aminophylline\n D. nicotine patch",
		options: {
			A: "Pronestyl",
			B: "Sub-lingual Lidocaine spray",
			C: "Aminophylline",
			D: "nicotine patch",
		},
		answer: "D",
		answer_explanation:
			"nicotine patch\n\nExplanation : \nOf the options offered, only the nicotine patch will be helpful for a patient who is trying to stop smoking. Other medications listed here relate to the heart or long-term bronchodilation.",
	},
	{
		question:
			"A respiratory therapist is preparing a smoking cessation program to be used in conjunction with pulmonary rehabilitation. The therapist should include which of the following methods of support in the plan?\n\n A. electronic vapor cigarrettes\n B. Counseling for associated emotional challenges\n C. Daily telephone reminders not to smoke\n D. Acetylzolamide (Diamox)",
		options: {
			A: "electronic vapor cigarrettes",
			B: "Counseling for associated emotional challenges",
			C: "Daily telephone reminders not to smoke",
			D: "Acetylzolamide (Diamox)",
		},
		answer: "B",
		answer_explanation:
			"Counseling for associated emotional challenges\n\nExplanation : \nA person trying to stop smoking must conquer both physiological and psychological barriers. Appropriate methods of support include emotional counseling and nicotine replacement therapy.",
	},
	{
		question:
			"A respiratory therapy supervisor is responsible for making suggestions in the initial development of a smoking cessation program. Which of the following would be part of an effective smoking cessation program?\n\n A. Nicotine replacement therapy\n B. removing pulmonary irritants from the house\n C. daily COHb analysis\n D. daily completion of an asthma action plan",
		options: {
			A: "Nicotine replacement therapy",
			B: "removing pulmonary irritants from the house",
			C: "daily COHb analysis",
			D: "daily completion of an asthma action plan",
		},
		answer: "A",
		answer_explanation:
			"Nicotine replacement therapy\n\nExplanation : \nTo stop smoking, both physiological and emotional barriers must be addressed. The patient may be helped best through nicotine replacement therapy and emotional support. Routine monitoring of the patient's progress is also helpful. Removing irritants from the house will not help the patient stop smoking.",
	},
	{
		question:
			"In which of the following situations should an HME be replaced with heated humidity?\n\n A. patient has asthma\n B. afebrile conditions\n C. presence of thick secretions\n D. patient is hyperthermic",
		options: {
			A: "patient has asthma",
			B: "afebrile conditions",
			C: "presence of thick secretions",
			D: "patient is hyperthermic",
		},
		answer: "C",
		answer_explanation:
			"presence of thick secretions\n\nExplanation : \nAn HME should be changed if the patient has thick secretions or is hypothermic. If the patient is hypothermic he or she cannot breathe out enough heat into the exchanger to capture and rebreathe. In that case the device should not be used.",
	},
	{
		question:
			"Heated humidification would be most important for a patient using\n\n A. an endotracheal tube\n B. a 6 L/min nasal cannula\n C. a face tent with an air entrainment device set at 50%\n D. a Venturi mask set at FIO2 0.5",
		options: {
			A: "an endotracheal tube",
			B: "a 6 L/min nasal cannula",
			C: "a face tent with an air entrainment device set at 50%",
			D: "a Venturi mask set at FIO2 0.5",
		},
		answer: "A",
		answer_explanation:
			"an endotracheal tube\n\nExplanation : \nHeated humidification is most helpful to patients who cannot receive humidification by natural means. This occurs when an artificial airway is in place and the natural humidification processes of the body are bypassed. An endotracheal tube is an example of such an airway.",
	},
	{
		question:
			"A 5-year old patient with acute epiglottitis has just received a tracheotomy and is returned to the emergency department for monitoring. The patient is now breathing through a tracheostomy tube. Which of the following is most important at this time?\n\n A. mechanical ventilatory support\n B. provide heated humidity\n C. provide cool aerosol therapy\n D. keep the tracheostomy tube cuff inflated",
		options: {
			A: "mechanical ventilatory support",
			B: "provide heated humidity",
			C: "provide cool aerosol therapy",
			D: "keep the tracheostomy tube cuff inflated",
		},
		answer: "B",
		answer_explanation:
			"provide heated humidity\n\nExplanation : \nA patient who has a tracheostomy tube in place is unable to naturally humidify inspired gases because the natural humidification processes of the body, including the nasal passages and oropharynx, are bypassed. In this case, providing heated humidity, which can make up the entire humidity deficit, is paramount.",
	},
	{
		question:
			"The preferred method of delivery for humidification for a pediatric patient during a transport lasting twelve hours is a (an)\n\n A. bubble humidifier\n B. cascade humidifier\n C. heated humidifier\n D. HME",
		options: {
			A: "bubble humidifier",
			B: "cascade humidifier",
			C: "heated humidifier",
			D: "HME",
		},
		answer: "D",
		answer_explanation:
			"HME\n\nExplanation : \nA heat moisture exchanger (HME), is inexpensive, convenient, and practical for a relatively short duration transport. The other options would be difficult or impossible to manage for a patient transport.",
	},
	{
		question:
			"A patient receiving mechanical ventilation requires a small volume nebulizer treatment with Albuterol. The patient has an HME between the wye and the endotracheal tube. In order to deliver the medication, a respiratory therapist should\n\n A. leave the HME in place to avoid breaking the circuit.\n B. replace the HME with a heated humidification system.\n C. place the HME in the inspiratory limb of the circuit.\n D. remove the HME during the treatment.",
		options: {
			A: "leave the HME in place to avoid breaking the circuit.",
			B: "replace the HME with a heated humidification system.",
			C: "place the HME in the inspiratory limb of the circuit.",
			D: "remove the HME during the treatment.",
		},
		answer: "D",
		answer_explanation:
			"remove the HME during the treatment.\n\nExplanation : \nRemoval of the heat moisture exchanger (HME) is necessary prior to a medicated nebulizer treatment because the device will filter out the medication and prevent it from entering the lung.",
	},
	{
		question:
			"A ventilator-dependent patient is scheduled for an MRI, which will require a transport of 90 minutes. The patient is receiving humidification with a heated- humidification system. A transport ventilator is available. How should a respiratory therapist assure that humidification will be provided to the patient during the MRI procedure?\n\n A. Provide an HME\n B. Provide ventilation with a manual resuscitator\n C. Provide a pass-over humidifier\n D. Use the same humidification system in use on the primary ventilator",
		options: {
			A: "Provide an HME",
			B: "Provide ventilation with a manual resuscitator",
			C: "Provide a pass-over humidifier",
			D: "Use the same humidification system in use on the primary ventilator",
		},
		answer: "A",
		answer_explanation:
			"Provide an HME\n\nExplanation : \nA heat moisture exchanger (HME) is appropriate for a transport of only 90 min. Furthermore, the scenario does not suggest that the patient has thick, retained secretions, therefore an HME may be applied.",
	},
	{
		question:
			"Which of the following conditions would benefit most from a thoracentesis?\n\n A. complete opacification of the right lung\n B. small pneumothorax\n C. pericardial contusion\n D. atelectasis",
		options: {
			A: "complete opacification of the right lung",
			B: "small pneumothorax",
			C: "pericardial contusion",
			D: "atelectasis",
		},
		answer: "B",
		answer_explanation:
			"small pneumothorax\n\nExplanation : \nA thoracentesis is a procedure that removes air or fluid from the pleural space. This would be appropriate with a small pneumothorax. A large pneumothorax, however, would require chest tubes.",
	},
	{
		question:
			"A patient with ARDS and asthma could benefit from which of the following medications?\n\n A. Tobramycin and albuterol\n B. Spiriva and decadron\n C. exogenous surfactant\n D. cromolyn sodium",
		options: {
			A: "Tobramycin and albuterol",
			B: "Spiriva and decadron",
			C: "exogenous surfactant",
			D: "cromolyn sodium",
		},
		answer: "C",
		answer_explanation:
			"exogenous surfactant\n\nExplanation : \nA patient with adult respiratory distress syndrome could benefit from surfactant therapy to decrease the surface tension of the alveoli.",
	},
	{
		question:
			"A respiratory therapist is teaching a 6-year-old patient and her family how to use a small-volume nebulizer at home. The orders are Xopenex 1.25 mg every 3 hours. The patient has not taken Xopenex before. What should the respiratory therapist do?\n\n A. Recommend a reduction to the dosage and frequency of the medication.\n B. Change to Albuterol unit dose every 4 hours.\n C. Increase the dosage to 2.25 mg.\n D. Change frequency to PRN only.",
		options: {
			A: "Recommend a reduction to the dosage and frequency of the medication.",
			B: "Change to Albuterol unit dose every 4 hours.",
			C: "Increase the dosage to 2.25 mg.",
			D: "Change frequency to PRN only.",
		},
		answer: "A",
		answer_explanation:
			"Recommend a reduction to the \n\nExplanation : \nThe proper starting dosage of Xopenex is 0.31 mg for a pediatric patient. It is appropriate to recommend the proper dosage and frequency of administering this medication.",
	},
	{
		question:
			"The correct pediatric dosage for Xopenex is\n\n A. 0.63 mg Q3 hours for children between age 6 and 11 years\n B. 0.31 mg TID for children between age 6 and 11 years\n C. 0.31 mg TID for children under age six\n D. 1.25 mg TID for all ages",
		options: {
			A: "0.63 mg Q3 hours for children between age 6 and 11 years",
			B: "0.31 mg TID for children between age 6 and 11 years",
			C: "0.31 mg TID for children under age six",
			D: "1.25 mg TID for all ages",
		},
		answer: "B",
		answer_explanation:
			"0.31 mg TID for children between age 6 and 11 years\n\nExplanation : \nXopenex should not be given prior to age 6. 0.31 mg is the appropriate dosage for a patient between age 6 and 11 years. Q3 hours is too frequent for this medication. TID is the appropriate starting frequency for Xopenex.",
	},
	{
		question:
			"A physician has ordered Xopenex 0.31 mg TID for an 8-year-old patient being discharged home with asthma. A respiratory therapist must instruct the patient and family about the medication including the proper self-administration technique. Regarding the medication dosage and frequency, the respiratory therapist should\n\n A. suggest a higher starting dose\n B. suggest a unit dose of 1.25 mg Q3 hours\n C. instruct the patient to follow the physician orders\n D. suggest a higher frequency",
		options: {
			A: "suggest a higher starting dose",
			B: "suggest a unit dose of 1.25 mg Q3 hours",
			C: "instruct the patient to follow the physician orders",
			D: "suggest a higher frequency",
		},
		answer: "C",
		answer_explanation:
			"instruct the patient to follow the physician orders\n\nExplanation : \nThe starting dosage and frequency for Xopenex for a pediatric patient age 6 to 11 years is 0.31 mg TID.",
	},
	{
		question:
			"A 9-year-old asthmatic patient has previously responded well to Xopenex via small-volume nebulizer. The patient is intubated and has been placed on mechanical ventilation for acute respiratory failure. The physician orders Xopenex to be delivered via SVN through the ventilator circuit. Which of the following is an important consideration for effective medication delivery?\n\n A. Placement of the nebulizer can result in variation of medication delivery\n B. tachycardia is more likely\n C. particle deposition will be increased\n D. an alpha I response is increased",
		options: {
			A: "Placement of the nebulizer can result in variation of medication delivery",
			B: "tachycardia is more likely",
			C: "particle deposition will be increased",
			D: "an alpha I response is increased",
		},
		answer: "A",
		answer_explanation:
			"Placement of the nebulizer can result \n\nExplanation : \nAdministering aerosolized bronchodilators through a mechanical ventilator circuit requires careful judgment by the respiratory therapist. Several factors including all listed in this scenario limit the therapist's ability to properly deliver medication. These factors must be taken into consideration for all mechanically ventilated patients, including pediatric patients.",
	},
	{
		question:
			"A CHF patient with decreased left ventricular filling pressure would benefit from which of the following medications?\n\n A. Anectine\n B. Pronestyl\n C. Lasix\n D. Osmitrol",
		options: {A: "Anectine", B: "Pronestyl", C: "Lasix", D: "Osmitrol"},
		answer: "C",
		answer_explanation:
			"Lasix\n\nExplanation : \nA patient with CHF can benefit from two things - diuresis and an increase in the cardiac contraction strength. Lasix will diurese the patient while digitalis increase the stength of contraction of the left ventricle.",
	},
	{
		question:
			"Two hours after birth, an infant is showing signs of respiratory distress with grunting and nasal flaring. A chest radiograph reveals a reticulogranular pattern. Which of the following would be most helpful to the patient?\n\n A. Survanta\n B. Pavulon (Pancuronium Bromide)\n C. Aminophylline\n D. Romazicon",
		options: {
			A: "Survanta",
			B: "Pavulon (Pancuronium Bromide)",
			C: "Aminophylline",
			D: "Romazicon",
		},
		answer: "A",
		answer_explanation:
			"Survanta\n\nExplanation : \nThe x-ray shows a reticulogranular pattern. This is indicative of infant respiratory distress syndrome, or lung immaturity. Lung immaturity is best resolved by the administration of surfactant.",
	},
	{
		question:
			"A patient's PSG shows an AHI of 50/hr. Tracings during the study indicate no nasal airflow and no inductive chest movement. Which of the following would most benefit the patient?\n\n A. Doxapram (Dopram)\n B. Acetazolamide\n C. Sublimaze (fentanyl citrate)\n D. Aminophylline",
		options: {
			A: "Doxapram (Dopram)",
			B: "Acetazolamide",
			C: "Sublimaze (fentanyl citrate)",
			D: "Aminophylline",
		},
		answer: "A",
		answer_explanation:
			"Doxapram (Dopram)\n\nExplanation : \nA PSG is an acronym for polysomnography. AHI stands for apnea hypopnea index. An AHI of 5 is considered normal but an AHI of 30 or more is considered severe sleep apnea. Because there is no nasal airflow AND no chest movement, the type of sleep apnea is more likely to be central (the patient is not attempting to ventilate). This can be assisted by administering a respiratory stimulant, doxapram.",
	},
	{
		question:
			"Which of the following patient conditions would CONTRAINDICATE the use of Trendelenburg's position?\n\n A. Increased intracranial pressures\n B. Independent lung ventilation\n C. Massive blood loss\n D. Lobectomy",
		options: {
			A: "Increased intracranial pressures",
			B: "Independent lung ventilation",
			C: "Massive blood loss",
			D: "Lobectomy",
		},
		answer: "A",
		answer_explanation:
			"Increased intracranial pressures\n\nExplanation : \nPlacing the patient's head-of-bed down would be harmful to the patient, who has increased intracranial pressures. This could cause further increase which could result in herniation of the brainstem and permanent neurological damage.",
	},
	{
		question:
			"Which of the following patient conditions would CONTRAINDICATE the use of postural drainage and percussion?\n\n A. Untreated pulmonary tuberculosis\n B. Kyphoscoliosis\n C. Sarcoidosis\n D. Cystic fibrosis",
		options: {
			A: "Untreated pulmonary tuberculosis",
			B: "Kyphoscoliosis",
			C: "Sarcoidosis",
			D: "Cystic fibrosis",
		},
		answer: "A",
		answer_explanation:
			"Untreated pulmonary tuberculosis\n\nExplanation : \nA patient with untreated pulmonary tuberculosis experiences degradation in the lung tissue. Postural drainage and percussion, specifically percussion, is harmful to the patient because it could accidentally dislodge tissues of the lung and the patient may ultimately expectorate that tissue.",
	},
	{
		question:
			"A bronchogram reveals increased pulmonary infiltrates and some consolidation in the lateral and posterior basal segments. The respiratory therapist should place the patient in which of the following positions to concentrate on the areas with increased infiltrates?\n\n A. Prone position with a pillow under the hips\n B. Supine position\n C. Trendelenburg with head-of-bed down 30 degrees\n D. Reverse Trendelenburg",
		options: {
			A: "Prone position with a pillow under the hips",
			B: "Supine position",
			C: "Trendelenburg with head-of-bed down 30 degrees",
			D: "Reverse Trendelenburg",
		},
		answer: "C",
		answer_explanation:
			"Trendelenburg with head-of-bed down 30 degrees\n\nExplanation : \nTo drain the lateral and posterior basal segments, or any of the basal segments, the appropriate position is Trendelenburg, or the head-of-bed down 30°.",
	},
	{
		question:
			"While transporting a PEEP-dependent mechanically-ventilated patient with a manual resuscitator to the lab for a CAT scan, the respiratory therapist notices that the resuscitator's spring-loaded threshold resistor is set to 5 cm H2O. The patient is ordered for PEEP of 10 cm H20. What should the respiratory therapist do?\n\n A. Create an expiratory retard while bagging the patient\n B. Increase the source gas flow to the patient\n C. Evaluate the patient's tolerance to PEEP 5 cm H2O\n D. Adjust the threshold resistor to 10 cm H2O",
		options: {
			A: "Create an expiratory retard while bagging the patient",
			B: "Increase the source gas flow to the patient",
			C: "Evaluate the patient's tolerance to PEEP 5 cm H2O",
			D: "Adjust the threshold resistor to 10 cm H2O",
		},
		answer: "D",
		answer_explanation:
			"Adjust the threshold resistor to 10 cm H2O\n\nExplanation : \nA spring-loaded threshold resistor is simply a PEEP valve attached to a resuscitator bag that is easily adjusted by turning one direction or the other. Adjusting the resistor is the appropriate response. The other three options are either ineffective or inappropriate for safe patient care.",
	},
	{
		question:
			"A patient with increased airway resistance from a fixed upper airway obstruction would benefit most from which of the following?\n\n A. bronchodilator therapy\n B. heliox therapy\n C. epinephrine\n D. aerosolized atropine",
		options: {
			A: "bronchodilator therapy",
			B: "heliox therapy",
			C: "epinephrine",
			D: "aerosolized atropine",
		},
		answer: "B",
		answer_explanation:
			"heliox therapy\n\nExplanation : \nA fixed upper airway obstruction means air is having difficulty moving both in and out. It is usually caused by cancer or other non-changeable conditions. In this case the best thing we can do is decrease airway resistance by using helium or Heliox therapy.",
	},
	{
		question:
			"IPPB therapy is CONTRAINDICTED in wich of the following conditions?\n\n A. asthma\n B. alveolar hypoventilation\n C. myoplasma pneumonia\n D. Untreated pneumothorax",
		options: {
			A: "asthma",
			B: "alveolar hypoventilation",
			C: "myoplasma pneumonia",
			D: "Untreated pneumothorax",
		},
		answer: "D",
		answer_explanation:
			"Untreated pneumothorax\n\nExplanation : \nIPPB therapy is contraindicated when an untreated pneumothorax is present. Active tuberculosis and current bleeding of the pulmonary tree (pulmonary hemorrhaging) are also reasons to avoid IPPB therapy.",
	},
	{
		question:
			"A respiratory therapist is asked to assist in the development of a teaching plan for a 7-year-old asthmatic patient at home. The plan should avoid instructions regarding\n\n A. the proper technique for the use of MDIs\n B. improving the patient and family's understanding of infection control\n C. the water-float technique to determine MDI canister content\n D. daily monitoring of peak-expiratory flow rates",
		options: {
			A: "the proper technique for the use of MDIs",
			B: "improving the patient and family's understanding of infection control",
			C: "the water-float technique to determine MDI canister content",
			D: "daily monitoring of peak-expiratory flow rates",
		},
		answer: "C",
		answer_explanation:
			"the water-float technique to determine MDI canister content\n\nExplanation : \nProper MDI technique, peak-flow monitoring, and improving the understanding of infection control are all appropriate aspects of a teaching plan for a pediatric patient. Determining MDI canister content by floating the canister in water is never appropriate. The proper way to assess content is by actuating the MDI and observing the output.",
	},
	{
		question:
			"A written teaching plan for a pediatric patient with chronic asthma should include\n\n A. titration of oxygen\n B. determination of oxygen saturation\n C. PEFR monitoring and proper MDI use\n D. proper titration of bronchodilator dosage",
		options: {
			A: "titration of oxygen",
			B: "determination of oxygen saturation",
			C: "PEFR monitoring and proper MDI use",
			D: "proper titration of bronchodilator dosage",
		},
		answer: "C",
		answer_explanation:
			"PEFR monitoring and proper MDI use\n\nExplanation : \nMonitoring one's peak flow, using a metered-dose inhaler correctly, and learning to detect early symptoms of oncoming bronchoconstriction are all important aspects of a teaching plan for a pediatric asthma patient. A patient should never be encouraged or instructed to adjust their prescribed frequency for any type of therapy by the respiratory therapist.",
	},
	{
		question:
			"A written teaching plan for asthma patients using peak flow meters should include\n\n A. the unit of measure for the flow meter.\n B. the meaning of red, yellow and green zone results.\n C. avoidance of placing one's teeth around the mouthpiece.\n D. the importance of trending over baseline results.",
		options: {
			A: "the unit of measure for the flow meter.",
			B: "the meaning of red, yellow and green zone results.",
			C: "avoidance of placing one's teeth around the mouthpiece.",
			D: "the importance of trending over baseline results.",
		},
		answer: "B",
		answer_explanation:
			"the meaning of red, yellow and green zone results.\n\nExplanation : \nThe respiratory therapist may determine that there is value in the three options that are incorrect in this scenario, but it is important to consider the best answer, which, in this case, is a thorough understanding of the color zones. Understanding the zones will help an asthma patient effectively manage their condition over time.",
	},
	{
		question:
			"Which of the following is an important component of a teaching plan for an adolescent asthmatic?\n\n A. when to call the physician\n B. how to sterilize a peak flowmeter\n C. proper dosage titration of a bronchodilator\n D. the cause of an elevated eosinophil count",
		options: {
			A: "when to call the physician",
			B: "how to sterilize a peak flowmeter",
			C: "proper dosage titration of a bronchodilator",
			D: "the cause of an elevated eosinophil count",
		},
		answer: "A",
		answer_explanation:
			"when to call the physician\n\nExplanation : \nProper use of the peak flow meter along with an understanding of the red, yellow, and green zones, which help a patient understand when to call the physician, are both important aspects of the teaching plan. Understanding eosinophil counts is too complex for the average patient and unimportant. It is not necessary to sterilize a peak-flow meter.",
	},
	{
		question:
			"A patient with left-sided heart failure has decreased pulmonary venous drainage pressure. The patient would benefit from which of the following medications?\n\n A. Anectine\n B. Spiriva\n C. Digitalis (digoxin)\n D. Pavulon",
		options: {
			A: "Anectine",
			B: "Spiriva",
			C: "Digitalis (digoxin)",
			D: "Pavulon",
		},
		answer: "C",
		answer_explanation:
			"Digitalis (digoxin)\n\nExplanation : \nThis question is about understanding the classification of medications. The patient has left-sided heart failure and therefore needs to have a medication that increases the contraction of the left heart. The only medication offered that will accomplish this is digitalis. Be sure to study the other medications to know how they are used.",
	},
	{
		question:
			"A ventilator-dependent male patient with a size 8.0 mm tracheostomy tube requires general instructions including infection control procedures prior to being discharged home. Which of the following would not be an appropriate part of the teaching plan?\n\n A. use of acetic acid for cleaning equipment\n B. method for performing suctioning of self\n C. proper handwashing before and after airway clearance procedures\n D. patient should not be encouraged to clear airway by direct cough",
		options: {
			A: "use of acetic acid for cleaning equipment",
			B: "method for performing suctioning of self",
			C: "proper handwashing before and after airway clearance procedures",
			D: "patient should not be encouraged to clear airway by direct cough",
		},
		answer: "D",
		answer_explanation:
			"patient should not be encouraged to clear airway by direct cough\n\nExplanation : \nA patient should be encouraged to clear their airway by direct cough. This is the most effective airway clearance technique and maintains the patient's strength. Handwashing, cleaning with vinegar (acetic acid), and suctioning oneself as needed are also appropriate aspects of a teaching plan for a homebound tracheostomy patient._x000D_ _x000D_",
	},
	{
		question:
			"A patient receiving humidity by HME while receiving VC A/C mechanical ventilation is having difficulty clearing thick secretions. From which of the following would the patient benefit most?\n\n A. normal saline, IV\n B. remove deadspace\n C. heated humidifier\n D. PEEP",
		options: {
			A: "normal saline, IV",
			B: "remove deadspace",
			C: "heated humidifier",
			D: "PEEP",
		},
		answer: "C",
		answer_explanation:
			"heated humidifier\n\nExplanation : \nWhen a patient is receiving humidification through a heat moisture exchanger, the humidification is inadequate most of the time. If the patient has any secretions, especially if they are expressed as thick secretions, the HME device should be changed to heated humidification.",
	},
	{
		question:
			"A patient has thick and tenacious secretions. Which of the following may aide in suctioning?\n\n A. aerosolized lidocaine\n B. increase suction catheter diameter\n C. use of an HME\n D. inhaled Tobramycin",
		options: {
			A: "aerosolized lidocaine",
			B: "increase suction catheter diameter",
			C: "use of an HME",
			D: "inhaled Tobramycin",
		},
		answer: "B",
		answer_explanation:
			"increase suction catheter diameter\n\nExplanation : \nThere are three things (in order) that increase the effectiveness of suctioning - suction catheter size or diameter, suction pressure, and suction time. Use of an HME would increase the thickness of secretions and make secretions more difficult to remove.",
	},
	{
		question:
			"An adult patient is receiving mechanical ventilatory support and is being suctioned through the endotracheal tube at a pressure of -90 mmHg. Secretions have been difficult to remove. What can be done FIRST to increase suctioning efficiency?\n\n A. increase suction catheter size\n B. increase suction time\n C. increase suction pressure to 100 mmHg\n D. decrease suction pressure to 80 mmHg",
		options: {
			A: "increase suction catheter size",
			B: "increase suction time",
			C: "increase suction pressure to 100 mmHg",
			D: "decrease suction pressure to 80 mmHg",
		},
		answer: "C",
		answer_explanation:
			"increase suction pressure to 100 mmHg\n\nExplanation : \nAn increase in suctioning effectiveness is done through three different ways - increasing suction catheter diameter, increasing suction pressure, and increasing suction time. However, before increasing suction catheter size, the first thing that should be done is to ensure the appropriate range of suction pressure is being used. In this case, the appropriate suction pressure for an adult is 100-120 mmHg. A pressure of 90 mmHg is being used. This is insufficient suction pressure. This should be corrected before doing anything else to increase suction effectiveness.",
	},
	{
		question:
			"A 90-kg male is receiving mechanical ventilation through a 7.5 ET tube. Bronchial hygiene has been difficult due to thick secretions. The patient is being suctioned with a 10 Fr. catheter at a pressure of 110 mmHg. Which of the following can be done to increase the effectiveness of suctioning:\n\n A. increase suction pressure to 130 mmHg\n B. change to an 8.5 ET tube and 12 Fr. catheter\n C. administer sodium bicarbonate\n D. change to a 12 Fr. catheter",
		options: {
			A: "increase suction pressure to 130 mmHg",
			B: "change to an 8.5 ET tube and 12 Fr. catheter",
			C: "administer sodium bicarbonate",
			D: "change to a 12 Fr. catheter",
		},
		answer: "B",
		answer_explanation:
			"change to an 8.5 ET tube and 12 Fr. catheter\n\nExplanation : \nWhen having difficulty with bronchial hygiene, there are three things that one should check. In this order - appropriate suction catheter size, adequate suction pressure, and appropriate suction time. The correct suction catheter size is determined by taking the ET tube size and dividing it by 2. You then take that number and multiply it by three to get the catheter size in French units. In this case the best option is to increase the ET tube size so that you may use a larger suction catheter. Generally speaking a 10 French catheter size is too small for an adult.",
	},
	{
		question:
			"A patient receiving volume-controlled ventilation in SIMV mode has a total respiratory rate of 26/min and is showing signs of increased labor of breathing. The mandatory rate is 14/min. Which of the following would most likely help the patient?\n\n A. Use of pressure support\n B. Increase PEEP\n C. Increase the machine flow rate\n D. Switch to pressure control ventilation",
		options: {
			A: "Use of pressure support",
			B: "Increase PEEP",
			C: "Increase the machine flow rate",
			D: "Switch to pressure control ventilation",
		},
		answer: "A",
		answer_explanation:
			"Use of pressure support\n\nExplanation : \nDuring ventilator weaning, a patient must maintain a moderately low respiratory rate, an adequate sized tidal volume, and low work of breathing. In this case, the patient is experiencing increased labor of breathing and an increase in respiratory rate. This is likely due to a reduced spontaneous tidal volume. Although this data is not shown, this condition can be assumed. The solution for a low spontaneous tidal volume and increased work of breathing during weaning is to provide pressure support.",
	},
	{
		question:
			"A patient is weaning from mechanical ventilation on the following ventilator settings:\n \nMode SIMV \nMandatory rate 6/min\nTotal rate 30/min\nVT (set) 500 mL\nVT (exhaled) 220 mL\nFIO2 0.40\nPEEP 5 cmH2O\nPressure support 6 cmH2O\n\nArterial blood gas results show:\n \npH 7.34 \nPaCO2 46 torr\nPaO2 80 torr\nHCO3- 24 mEq/L\nBE -2 mEq/L\n\nThe respiratory therapist should recommend\n\n A. Increasing PEEP to 10 cm H2O\n B. Switching to assist/control mode of ventilation\n C. Increasing pressure support\n D. Increasing the set tidal volume",
		options: {
			A: "Increasing PEEP to 10 cm H2O",
			B: "Switching to assist/control mode of ventilation",
			C: "Increasing pressure support",
			D: "Increasing the set tidal volume",
		},
		answer: "C",
		answer_explanation:
			"Increasing pressure support\n\nExplanation : \nThis patient is obviously weaning from the ventilator, as manifested by the SIMV mode and a mandatory rate of 6. However, an excessive total rate of ventilation, 30 per minute, and markedly reduced spontaneous tidal volumes are indications that the patient is experiencing an increase in labor of breathing. The best solution is to assist the patient in taking larger tidal volumes. This can best be done by administering or increasing pressure support. Pressure support will increase spontaneous tidal volume size, decrease total respiratory rate, and decrease the overall work of breathing.",
	},
	{
		question:
			"Which of the following methods would be most helpful to a patient weaning from mechanical ventilation who has a documented restrictive pulmonary defect and has been having difficulty in recent weaning attempts?\n\n A. pressure support\n B. pressure control ventilation\n C. permissive hypercapnia\n D. T-piece trials of 24 hour periods several times a week",
		options: {
			A: "pressure support",
			B: "pressure control ventilation",
			C: "permissive hypercapnia",
			D: "T-piece trials of 24 hour periods several times a week",
		},
		answer: "A",
		answer_explanation:
			"pressure support\n\nExplanation : \nA person with a restrictive pulmonary defect has increased pulmonary resistance due to low pulmonary compliance. To overcome the increased resistance and work required to breathe, pressure support is most helpful.",
	},
	{
		question:
			"The resulting flow-volume loop of a patient with pulmonary obstruction following a bronchodilator shows an inflection point on the positive side of the graph that is 25% taller than the loop seen prior to the bronchodilator trial. This would indicate that\n\n A. study should be repeated\n B. patient may have taken a bronchodilator prior to the test\n C. patient would benefit from bronchodilators\n D. vital capacity increased by 25% with a bronchodilator",
		options: {
			A: "study should be repeated",
			B: "patient may have taken a bronchodilator prior to the test",
			C: "patient would benefit from bronchodilators",
			D: "vital capacity increased by 25% with a bronchodilator",
		},
		answer: "C",
		answer_explanation:
			'patient would benefit from bronchodilators\n\n Explanation : \nAn inflection point is a significant change in direction seen in various types of graphic depictions. In this case the inflection point represents the top or "peak" of the flow volume loop. This point is peak flow. An increase in peak flow by 25% is well above the 12% threshold that is considered significant, indicating bronchodilator therapy.',
	},
	{
		question:
			"Prior to a cardioversion procedure for the treatment of atrial fibrillation, the respiratory therapist should synchronize the defibrillator to which of the following waves on the ECG?\n\n A. S\n B. R\n C. T\n D. P",
		options: {A: "S", B: "R", C: "T", D: "P"},
		answer: "B",
		answer_explanation:
			"R\n\nExplanation : \nFor cardioversion, the defibrillator machine must be synchronized with the heart rhythm. Another way to say this is that the defibrillator must be set to ACTIVE synchronization. The machine will synchronize automatically to the R wave.",
	},
	{
		question:
			"Which of the following defibrillator settings is appropriate for treating a patient with ventricular tachycardia?\n\n A. synchronization set to OFF\n B. synchronize to the T wave\n C. synchronize to the P wave\n D. synchronize to the R wave",
		options: {
			A: "synchronization set to OFF",
			B: "synchronize to the T wave",
			C: "synchronize to the P wave",
			D: "synchronize to the R wave",
		},
		answer: "A",
		answer_explanation:
			"synchronization set to OFF\n\nExplanation : \nWhen using a defibrillator, one setting that must be adjusted is the synchronization. When defibrillating a patient who has ventricular tachycardia, the synchronization must be set to OFF. Only when cardioversion is being done should the synchronization be set to OFF or INACTIVE.",
	},
	{
		question:
			"A patient recovering from congestive heart failure is intubated and receiving mechanical ventilation via a PB 840 ventilator in the spontaneous mode. Pressure support is set at 12 cm H2O and CPAP is set at 5 cm H2O. Which of the following alarms is the respiratory therapist's highest priority for monitoring effective ventilation?\n\n A. Low minute ventilation\n B. High respiratory rate\n C. Low PEEP\n D. Low peak pressure",
		options: {
			A: "Low minute ventilation",
			B: "High respiratory rate",
			C: "Low PEEP",
			D: "Low peak pressure",
		},
		answer: "A",
		answer_explanation:
			"Low minute ventilation\n\nExplanation : \nIn the spontaneous mode all breaths are determined by the patient's respiratory drive. Therefore, it is necessary to set alarms so that the respiratory therapist is alerted if the patient stops breathing or reduces ventilation to an unsafe level.",
	},
	{
		question:
			"A patient intubated with a 7.0 mm endotracheal tube requires suctioning. Which of the following suction catheters would be most effective?\n\n A. 16 Fr coude-tipped catheter\n B. 10 Fr catheter\n C. 14 Fr catheter\n D. 18 Fr catheter",
		options: {
			A: "16 Fr coude-tipped catheter",
			B: "10 Fr catheter",
			C: "14 Fr catheter",
			D: "18 Fr catheter",
		},
		answer: "B",
		answer_explanation:
			"10 Fr catheter\n\nExplanation : \nA patient with a 7.0 mm endotracheal tube must not be suctioned with a catheter that has an outer diameter greater than 3.5 mm, or one half of the endotracheal tube size. Suction catheters, however, come in French units. To convert from millimeters to French units simply multiply by three. 3.5 mm X 3 = 10.5 Fr. suction catheters come in sizes 8, 10, 12, 14 French. Thus, the most appropriate size in this case is 10 French.",
	},
	{
		question:
			"A respiratory therapist is performing endotracheal suctioning of a patient with thick, tenacious secretions. Suctioning has been difficult and somewhat ineffective. Which of the following would be most helpful at increasing the effectiveness of suctioning?\n\n A. increasing suction duration\n B. increasing suction pressure\n C. increasing suction catheter length\n D. increasing suction catheter size",
		options: {
			A: "increasing suction duration",
			B: "increasing suction pressure",
			C: "increasing suction catheter length",
			D: "increasing suction catheter size",
		},
		answer: "D",
		answer_explanation:
			"increasing suction catheter size\n\nExplanation : \nTo increase the effectiveness of suctioning, increasing suction catheter size, increasing suction pressure, and increasing duration are three methods that may be used. The most effective method is to increase the suction catheter size. However, caution must be used. The suction catheter size may not exceed half the diameter of the endotracheal tube. If the patient is already using a maximum suction catheter size than an increase in suction pressure is the next choice.",
	},
	{
		question:
			"A long-term care patient who experienced a stroke has left-sided paralysis about the face and mouth. The patient is unable to produce a seal with her lips while performing IPPB treatments. How would a respiratory therapist expect the IPPB machine to respond in this situation?\n\n A. Deliver a higher FIO2\n B. Fail to cycle into inhalation\n C. Deliver a higher FIO2\n D. Fail to cycle into exhalation",
		options: {
			A: "Deliver a higher FIO2",
			B: "Fail to cycle into inhalation",
			C: "Deliver a higher FIO2",
			D: "Fail to cycle into exhalation",
		},
		answer: "C",
		answer_explanation:
			"Deliver a higher FIO2\n\nExplanation : \nThe scenario suggests that a leak will occur when administering IPPB. Circuit leaks result in a failure to reach a preset pressure, which then results in failure to cycle into exhalation.",
	},
	{
		question:
			"A post-operative patient is receiving positive-pressure ventilation with an IPPB while recovering from anesthesia. The mandatory rate is 10/min. Inspiratory pressure is set to 18 cm H2O. Gradually the rate increases to 16/min while the monometer needle is showing a significant negative deflection before inhalation begins. The pressure monometer no longer rises smoothly during inhalation. What should the respiratory therapist do?\n\n A. decrease inspiratory flow rate\n B. sedate the patient\n C. wean the patient\n D. increase sensitivity",
		options: {
			A: "decrease inspiratory flow rate",
			B: "sedate the patient",
			C: "wean the patient",
			D: "increase sensitivity",
		},
		answer: "D",
		answer_explanation:
			"increase sensitivity\n\n\nExplanation : \nThe gradual increase in respiratory rate indicates that the patient is waking up from anesthesia, as expected. The negative deflection before inhalation indicates that the machine sensitivity is too low-requiring the patient to work too hard to trigger inspiration. The manometer not rising smoothly indicates the flow rate is also too low. It is not appropriate to sedate the patient but rather allow him to wake up with more applicable settings.",
	},
	{
		question:
			"Quality control material has published values for pH of 7.30, PO2 of 85 mm Hg. Documentation indicates the range of pH is 0.5% and is 3% for PO2. Machine results are as follows:\n \n pH PO2 (mmHg) \nRun 1 7.33 83\nRun 2 7.25 86\nRun 3 7.29 80\n \nWhich quality control runs indicate the machine is out of control?\n\n A. 1 and 2\n B. 2 and 3\n C. 1, 2, and 3\n D. 1 and 3",
		options: {A: "1 and 2", B: "2 and 3", C: "1, 2, and 3", D: "1 and 3"},
		answer: "B",
		answer_explanation:
			"2 and 3\n\nExplanation : \nThis question is just a matter of math. It takes a few minutes to figure this one out. You must take each result and add and subtract 0.5% and 3% to the pH and PO2, respectively. You're looking for the Runs that are out of control. Runs two and three are the only ones out-of-control.",
	},
	{
		question:
			"Quality control material has published values for pH of 7.50, PO2 of 110 mmHg. Documentation indicates the range of pH is 0.5% and is 3% for PO2. Machine results are as follows:\n \n \n pH PO2 (mmHg) \nRun 1 7.39 101\nRun 2 7.48 107\nRun 3 7.52 112\nWhich quality control run(s) indicate the machine is out of control?\n\n A. Run 1\n B. Run 3\n C. Run 2\n D. Runs 2 and 3",
		options: {A: "Run 1", B: "Run 3", C: "Run 2", D: "Runs 2 and 3"},
		answer: "A",
		answer_explanation:
			"Run 1\n\nExplanation : \nThis question is just a matter of math. You must check each pH and add and subtract 0.5% and do the same for the PO2 except add and subtract 3%. The question is which Runs for which data are out of control. Analysis shows that only Run one is out of control. Be on guard for this question. This question is a time consumer, so practice doing this kind of math before the test.",
	},
	{
		question:
			"Quality control material has published values for pH of 7.20, PO2 of 65 mmHg. Documentation indicates the range of pH is 0.5% and is 3% for PO2. Machine results are as follows:\n \n pH PO2 (mmHg) \nRun 1 7.19 64\nRun 2 7.10 69\nRun 3 7.21 65\nWhich quality control run(s) indicate the machine is out of control?\n\n A. Run 2 and 3\n B. Run 2 only\n C. Run 1 and 2\n D. Run 3 only",
		options: {
			A: "Run 2 and 3",
			B: "Run 2 only",
			C: "Run 1 and 2",
			D: "Run 3 only",
		},
		answer: "B",
		answer_explanation:
			"Run 2 only\n\nExplanation : \nThis question involves doing some math. You must look at each pH and add and subtract 0.5%. You must do the same for the PO2, using 3%. From there you can look at the results and determine which Run is out of control. In this case only Run two is out of control.",
	},
	{
		question:
			"Quality control data for an arterial blood gas analyzer is plotted on a graph that has a range of 4 standard deviations (2 SD up and 2 SD down). Points on the graph show a gradual rise from below the mean to above the mean. All points are within 2 SD of the mean. The respiratory supervisor should\n\n A. replace the electrodes\n B. remove this machine from service\n C. call the medical director for direction\n D. monitor this machine closely",
		options: {
			A: "replace the electrodes",
			B: "remove this machine from service",
			C: "call the medical director for direction",
			D: "monitor this machine closely",
		},
		answer: "D",
		answer_explanation:
			"monitor this machine closely\n\nExplanation : \nBecause all points on the blood gas graphs are within two standard deviations of the mean, the blood gas machine is technically in control. But the use of the word gradual rise means that there is a trend upward. Whenever there's a trend you need to monitor that machine because the trend may ultimately rise above the two standard deviations. You do not need to remove the machine from service or perform any kind of maintenance when a trend is observed - only monitor.",
	},
	{
		question:
			"The respiratory therapist has an order to cap a patient with a fenestrated tracheostomy tube in preparation for speech therapy. Prior to applying the cap on the end of the tube, the therapist should also ensure\n\n A. the inner cannula is in place and the cuff deflated\n B. the inner cannula is in place and the cuff inflated.\n C. the inner cannula is removed and the cuff inflated\n D. the inner cannula is removed and the cuff deflated",
		options: {
			A: "the inner cannula is in place and the cuff deflated",
			B: "the inner cannula is in place and the cuff inflated.",
			C: "the inner cannula is removed and the cuff inflated",
			D: "the inner cannula is removed and the cuff deflated",
		},
		answer: "D",
		answer_explanation:
			"the inner cannula is removed and the cuff deflated\n\nExplanation : \nTo configure a fenestrated tracheostomy to for speaking, the button must be removed, the inner cannula must also be removed, and the cuff should be deflated. This allows air to be deviated through a hole in the fenestrated tube and pass the vocal folds, allowing speech.",
	},
	{
		question:
			"In preparing to cap a fenestrated tracheostomy tube on a patient who is scheduled for speech therapy, the respiratory therapist should remember to\n\n A. evacuate the foam cuff\n B. deflate the cuff and remove the inner cannula\n C. switch to a liquid diet 8 hours prior to speech therapy\n D. inflate the cuff",
		options: {
			A: "evacuate the foam cuff",
			B: "deflate the cuff and remove the inner cannula",
			C: "switch to a liquid diet 8 hours prior to speech therapy",
			D: "inflate the cuff",
		},
		answer: "B",
		answer_explanation:
			"deflate the cuff and remove the inner cannula\n\nExplanation : \nIn order to configure a fenestrated tracheostomy tube for speech, the button or cap must be placed on the tube after the inner cannula is removed and the cuff is deflated.",
	},
	{
		question:
			"While performing manual ventilation with a self-inflating resuscitator bag through a properly placed endotracheal tube, a respiratory therapist observes no chest rise. To troubleshoot the problem, the therapist should\n\n A. assure the large bore reservoir tubing is connected.\n B. adjust the PEEP valve\n C. check for proper function of the air inlet valve.\n D. increase the flowrate.",
		options: {
			A: "assure the large bore reservoir tubing is connected.",
			B: "adjust the PEEP valve",
			C: "check for proper function of the air inlet valve.",
			D: "increase the flowrate.",
		},
		answer: "C",
		answer_explanation:
			"check for proper function of the air inlet valve.\n\nExplanation : \nThe scenario suggests that the ET tube is properly placed, therefore the problem must be in the resuscitator. When the therapist squeezes the device, the air is not being delivered to the patient, which is why there is no chest rise.",
	},
	{
		question:
			"Which of the following equipment is required to determine VD/VT ratio on a patient receiving mechanical ventilation?\n\n A. Fleisch pneumotachometer\n B. EZ® cap CO2 detector\n C. pressure differential pneumotachometer\n D. capnograph",
		options: {
			A: "Fleisch pneumotachometer",
			B: "EZ® cap CO2 detector",
			C: "pressure differential pneumotachometer",
			D: "capnograph",
		},
		answer: "D",
		answer_explanation:
			"capnograph\n\nExplanation : \nThis question is largely about memorization. You must know what it takes to calculate of the VD/VT ratio. Of the equipment listed only a capnograph would be helpful because it relates end tidal CO2.",
	},
	{
		question:
			"Which of the following ventilator circuit change frequencies is important to minimize nosocomial infections among patients receiving mechanical ventilation?\n\n A. monthly\n B. every 7 days\n C. when soiled\n D. daily",
		options: {A: "monthly", B: "every 7 days", C: "when soiled", D: "daily"},
		answer: "B",
		answer_explanation:
			"every 7 days\n\nExplanation : \nThis question is about infection control and requires you to memorize that ventilator circuits must be changed every seven days. It may occur differently in your hospital, but you must memorize seven days for the exam.",
	},
	{
		question:
			"A patient with tuberculosis had a bronchoscopy procedure. To properly clean the bronchoscope, the equipment must be soaked in Cidex (Alkaline Gluteraldehyde) for a minimum of how many minutes?\n\n A. 1 hour\n B. 20 minutes\n C. 10 minutes\n D. 12 hours",
		options: {A: "1 hour", B: "20 minutes", C: "10 minutes", D: "12 hours"},
		answer: "B",
		answer_explanation:
			"20 minutes\n\nExplanation : \nThis is an infection control problem and is really a memorization of how long it takes to kill the tubercle bacilli. Minimum time is 20 min.",
	},
	{
		question:
			"A chemical indicator tape found inside the sealed, packaged disposable mask helps determine which of the following?\n\n A. if the equipment is sterile\n B. if the package has remained closed\n C. if the equipment has been properly sterilized\n D. if microorganisms remain viable on the equipment",
		options: {
			A: "if the equipment is sterile",
			B: "if the package has remained closed",
			C: "if the equipment has been properly sterilized",
			D: "if microorganisms remain viable on the equipment",
		},
		answer: "C",
		answer_explanation:
			"if the equipment has been properly sterilized\n\nExplanation : \nA chemical indicator tape inside a sterialized package does not actually indicate the presence or absence of viable spores. It does, however, indicate if the equipment has been through the sterilization process.",
	},
	{
		question:
			"A respiratory therapist is preparing to intubate and place a patient on a mechanical ventilator. The patient will require humidity therapy in conjunction with ventilatory support. Which of the following should the therapist prepare in order to accomplish this?\n\n A. ultrasonic nebulizer\n B. spinning-disc humidifier\n C. Cascade or Wick-type humidifier\n D. bubble humidifier",
		options: {
			A: "ultrasonic nebulizer",
			B: "spinning-disc humidifier",
			C: "Cascade or Wick-type humidifier",
			D: "bubble humidifier",
		},
		answer: "C",
		answer_explanation:
			"Cascade or Wick-type humidifier\n\nExplanation : \nA patient who is receiving mechanical ventilatory support through an endotracheal tube is unable to naturally provide humidification to inspired gases because the natural humidification processes of the body are bypassed. In this case, a device that is capable of making up the entire humidity deficit is required. Of the devices listed only a Cascade or Wick-type humidifier can accomplish this",
	},
	{
		question:
			"Which of the following are potential complications associated with the use of heated humidification systems with mechanical ventilators?\n\n A. thermal injury to the airway\n B. increase of heat and water vapor content of inspired gas\n C. atelectasis\n D. pulmonary dehydration",
		options: {
			A: "thermal injury to the airway",
			B: "increase of heat and water vapor content of inspired gas",
			C: "atelectasis",
			D: "pulmonary dehydration",
		},
		answer: "A",
		answer_explanation:
			"thermal injury to the airway\n\nExplanation : \nOverheating of the airway may occur with the use of an electrically powered heater if not properly maintained. Because the device is electrically powered, it also may be associated with electric shock of the patient. These complications are not common, but possible.",
	},
	{
		question:
			"How many hours will an H tank last with 1800 psi at a flow rate of 10 L/min?\n\n A. 9.4 hrs\n B. under 1 hour\n C. 14.5 hrs\n D. 20 hrs",
		options: {A: "9.4 hrs", B: "under 1 hour", C: "14.5 hrs", D: "20 hrs"},
		answer: "A",
		answer_explanation:
			"9.4 hrs\n\nExplanation : \nTo answer this question you must remember that the ratio or factor for an H tank is 3.14. You must then take that factor and multiply it by the pressure in the tank. That will give you the total liters in the tank. Finally, you must divide the total liters by the liter flow. If the answer is in hours you must further divide the final number by 60 in order to convert it to hours rather than minutes. For example, (1800 x 3.14) = 5,652 liters. 5652/10 L/min = 565.2 minutes. 565/60 min = 9.42 hrs. The closest answer is 9.4 hours.",
	},
	{
		question:
			"How many portable oxygen E cylinders will be required for a 12-hour car trip with a flow rate of 2 L/min?\n\n A. 4\n B. 5\n C. 3\n D. 2",
		options: {A: "4", B: "5", C: "3", D: "2"},
		answer: "C",
		answer_explanation:
			"3\n\nExplanation : \nTo answer this question you must know that the tank factor for an E cylinder is 0.28. A full E cylinder is 2200 PSI. Therefore 2200x0.28 is equal to 616 L. 616 divided by two is equal to 308 min. A 12 hour car trip is 720 min. Therefore the patient will need three E cylinders of oxygen to go on a 12 hour trip",
	},
	{
		question:
			"How many minutes will a full E cylinder oxygen tank last when running at 5 L/min?\n\n A. 123 minutes\n B. 90 minutes\n C. 1320 minutes\n D. 616 minutes",
		options: {
			A: "123 minutes",
			B: "90 minutes",
			C: "1320 minutes",
			D: "616 minutes",
		},
		answer: "A",
		answer_explanation:
			"123 minutes\n\n Explanation : \nThe E cylinder tank factor is 0.28. A full E cylinder is 2200 PSI. 2200x0.28 is equal to 616 L. 616 divided by 5 (the liter flow to the patient) is equal to approximately 123 min. That is how long the tank will last in minutes. To get hours, you must further divide by 60 minutes.",
	},
	{
		question:
			"A 40-week gestational age infant is to receive oxygen therapy via a blender set at 35% and humidification through a jet nebulizer. The respiratory therapist should properly set the nebulizer by setting it to\n\n A. anything over 35%\n B. the same FIO2 as the blender\n C. 100%\n D. 21%",
		options: {
			A: "anything over 35%",
			B: "the same FIO2 as the blender",
			C: "100%",
			D: "21%",
		},
		answer: "C",
		answer_explanation:
			"100%\n\nExplanation : \nWhen using an air-oxygen blender, oxygen percentage is predetermined prior to entering the large volume nebulizer device. When this happens, the large volume nebulizer should be set at 100% in order to avoid entraining additional room air and lowering FIO2.",
	},
	{
		question:
			"A 38-week gestational age infant is to receive oxygen therapy by a blender set at 100% with a heated large-volume nebulizer. To ensure the delivery of the ordered FIO2, the respiratory therapist should properly set the nebulizer FIO2 to\n\n A. 50%\n B. 0%\n C. 21%\n D. 100%",
		options: {A: "50%", B: "0%", C: "21%", D: "100%"},
		answer: "D",
		answer_explanation:
			"100%\n\nExplanation : \nWhen using an air-oxygen blender, oxygen percentage is predetermined prior to entering the large volume nebulizer device. When this happens, the large volume nebulizer should be set at 100% in order to avoid entraining additional room air and lowering FIO2.",
	},
	{
		question:
			"While performing oxygen rounds, the respiratory therapist visits a patient who is ordered to receive 5 L/min by nasal cannula with a bubble humidifier. The therapist finds the oxygen flow meter is reading 0 L/min, even though the knob is not in the off position, and there is no flow to the patient. Which of the following may cause this?\n\n A. low water level in the humidifier\n B. loose humidifier bottle\n C. clogged down-tube\n D. large hole in the cannula",
		options: {
			A: "low water level in the humidifier",
			B: "loose humidifier bottle",
			C: "clogged down-tube",
			D: "large hole in the cannula",
		},
		answer: "C",
		answer_explanation:
			"clogged down-tube\n\nExplanation : \nThe most likely cause of the flow meter reading zero is a clogged down-tube. A low water level or loose humidifier bottle would not cause the flow meter to read zero.",
	},
	{
		question:
			"Which of the following resistors is not associated with pressurizing the circuit for a patient receiving CPAP therapy?\n\n A. water-column\n B. weighted\n C. fixed orifice\n D. spring-loaded",
		options: {
			A: "water-column",
			B: "weighted",
			C: "fixed orifice",
			D: "spring-loaded",
		},
		answer: "C",
		answer_explanation:
			"fixed orifice\n\nExplanation : \nPositive end expiratory pressure or continuous positive airway pressure is achieved in various ways with varying types of resistors. The respiratory therapist should have a working knowledge of how these various resistors function in order to best troubleshoot when errors occur. The fixed orifice-type resistor is not utilized with CPAP.",
	},
	{
		question:
			"While receiving nasal CPAP delivered by an infant ventilator, the patient is retracting and creating a fluctuating baseline pressure on the monometer. What should the respiratory therapist do?\n\n A. Increase the flowrate\n B. Increase the size of the fixed orifice resistor\n C. Suction the patient\n D. Adjust the threshold resistor",
		options: {
			A: "Increase the flowrate",
			B: "Increase the size of the fixed orifice resistor",
			C: "Suction the patient",
			D: "Adjust the threshold resistor",
		},
		answer: "A",
		answer_explanation:
			"Increase the flowrate\n\nExplanation : \nThe patient is demonstrating signs of air hunger and is not in sync with the ventilator. Most likely the patient requires more flow to satisfy inspiratory demand.",
	},
	{
		question:
			"A patient is receiving NPPV on the general floor to mobilize secretions by portable CPAP connected to medical wall gas. The threshold resistor is not maintaining consistent positive airway pressure when the patient attempts to sigh. What should the respiratory therapist do?\n\n A. Instruct the patient to avoid sighing\n B. Increase the flowrate\n C. Replace the CPAP unit\n D. Increase CPAP level",
		options: {
			A: "Instruct the patient to avoid sighing",
			B: "Increase the flowrate",
			C: "Replace the CPAP unit",
			D: "Increase CPAP level",
		},
		answer: "C",
		answer_explanation:
			"Replace the CPAP unit\n\nExplanation : \nIn this example we have improperly functioning equipment. If given an option to replace such equipment, the respiratory therapist should always choose to do so. One might be tempted to increase the flow rate in this scenario, however, it will not make a difference with this type of resistor.",
	},
	{
		question:
			"How many hours will an H cylinder with 1400 psi last for a patient receiving oxygen at 7 lpm?\n\n A. less than 1 hour\n B. 4 hours\n C. 6 hours\n D. 10 hours",
		options: {A: "less than 1 hour", B: "4 hours", C: "6 hours"},
		answer: "[][][]",
		answer_explanation: "[][][]",
	},
	{
		question:
			"An air-entrainment jet nebulizer is set at 50%. The respiratory therapist analyzes the oxygen coming from the end of the tubing and finds it is 60%. Which of the following most likely explains this finding?\n\n A. excess water in the tubing\n B. low flow through the jet orifice\n C. poorly calibrated analyzer\n D. leak in the tubing",
		options: {
			A: "excess water in the tubing",
			B: "low flow through the jet orifice",
			C: "poorly calibrated analyzer",
			D: "leak in the tubing",
		},
		answer: "A",
		answer_explanation:
			"excess water in the tubing\n\nExplanation : \nWhen administering oxygen by any device that has a venturi mechanism, back pressure on the venturi will slow the speed of gas, decrease room air entrainment, and result in an increase in FIO2. Of the options offered, only excess water in the tubing would cause this type of back pressure.",
	},
	{
		question:
			"The respiratory therapist analyzes the oxygen percentage coming from the end of the aerosol tubing on a large-volume, nebulizer. The analysis shows a higher oxygen percentage than the set FIO2 on the air-entrainment device. Which of the following could be the reason for this disparity?\n\n A. kinked aerosol tubing\n B. clogged down tube in the nebulizer\n C. leak in the aerosol tubing\n D. depleted reservoir",
		options: {
			A: "kinked aerosol tubing",
			B: "clogged down tube in the nebulizer",
			C: "leak in the aerosol tubing",
			D: "depleted reservoir",
		},
		answer: "A",
		answer_explanation:
			"kinked aerosol tubing\n\nExplanation : \nWhen administering oxygen by any device that has a venturi mechanism, back-pressure on the venturi will slow the speed of gas, decrease room air entrainment, and result in an increase in FIO2. Of the options offered, only excess water in the tubing and a kink in the aerosol tubing would cause this type of back pressure.",
	},
	{
		question:
			"A patient with a tracheostomy is receiving supplemental oxygen via tracheostomy collar connected to a large volume nebulizer set at 40%. The respiratory therapist analyzes the FIO2 at the tracheostomy collar with a galvanic fuel cell analyzer. The analysis shows the FIO2 to be 55%. Which of the following could be the cause of the increase in FIO2?\n\n A. too much water in the circuit\n B. the aerosol tubing is too short\n C. calibration error in the galvanic fuel cell\n D. clogged jet orifice in the nebulizer",
		options: {
			A: "too much water in the circuit",
			B: "the aerosol tubing is too short",
			C: "calibration error in the galvanic fuel cell",
			D: "clogged jet orifice in the nebulizer",
		},
		answer: "A",
		answer_explanation:
			"too much water in the circuit\n\nExplanation : \nWhen administering oxygen by any device that has a venturi mechanism, back pressure on the venturi will slow the speed of gas, decrease room air entrainment, and result in an increase in FIO2. Of the options offered, only excess water in the tubing would cause this type of back pressure.",
	},
	{
		question:
			"Which of the following are acceptable for home-care use for the cleaning of non-electric respiratory therapy equipment?\n\n A. Cidex\n B. Bleach\n C. Acetic acid\n D. Sonacide",
		options: {A: "Cidex", B: "Bleach", C: "Acetic acid", D: "Sonacide"},
		answer: "C",
		answer_explanation:
			"Acetic acid\n\nExplanation : \nAcetic acid is another name for common household vinegar. Vinegar is a safe and effective cleaning agent for home use. Cidex is not a product that would be appropriate for use in the home. It is not safe to use bleach on respiratory therapy equipment in the home. The use of sonacide is not intended for home use.",
	},
	{
		question:
			"A respiratory-compromised patient who is being discharged from a long-term care facility requires frequent oropharyngeal suctioning with a tonsil-tip suction device. Which of the following infection control cleaning procedures are recommended?\n\n A. wipe with alcohol swabs\n B. soak in Cidex daily\n C. submerge the device in boiling water, reuse until integrity is lost\n D. soak in sterile water",
		options: {
			A: "wipe with alcohol swabs",
			B: "soak in Cidex daily",
			C: "submerge the device in boiling water, reuse until integrity is lost",
			D: "soak in sterile water",
		},
		answer: "C",
		answer_explanation:
			"submerge the device in boiling water, reuse until integrity is lost\n\nExplanation : \nWhile perhaps not so appropriate in a hospital setting, guidelines for infection control procedures in the home do include the use of distilled water, boiling, and cleaning with vinegar (acetic acid). Oralpharyngeal suctioning with a tonsil tip device is not considered a sterile procedure.",
	},
	{
		question:
			"In order to properly disinfect a home-use nebulizer, the respiratory therapist should recommend\n\n A. acetic acid\n B. hydrochloric acid\n C. disposing of the nebulizers after 48 hours\n D. rinsing with tap water after each use followed by air dry",
		options: {
			A: "acetic acid",
			B: "hydrochloric acid",
			C: "disposing of the nebulizers after 48 hours",
			D: "rinsing with tap water after each use followed by air dry",
		},
		answer: "A",
		answer_explanation:
			"acetic acid\n\nExplanation : \nAcetic acid, or common household vinegar, is a very effective and appropriate cleaning agent for home use. Hydrochloric acid would be unsafe. Disposing of nebulizers every 48 hours would be costly for the patient. Simple tapwater will increase the likelihood of infection for the patient.",
	},
	{
		question:
			"During a preoperational test of the ventilator with a test lung, the respiratory therapist notes a return tidal volume of 600 cc. Ventilator settings are:\n \nMode Assist/control \nFIO2 0.50\nMandatory rate 10\nVT 750 mL\nWhat action should the therapist take?\n\n A. Examine the ventilator circuit for proper connections\n B. Increase the set tidal volume to 900 mL\n C. Obtain a larger test lung\n D. Obtain a smaller test lung",
		options: {
			A: "Examine the ventilator circuit for proper connections",
			B: "Increase the set tidal volume to 900 mL",
			C: "Obtain a larger test lung",
			D: "Obtain a smaller test lung",
		},
		answer: "A",
		answer_explanation:
			"Examine the ventilator circuit for proper connections\n\nExplanation : \nThe purpose of a preoperational test on a ventilator is to ensure proper connections and assembly of those necessary parts. The reduced return tidal volume observed would most logically be caused by a failure to make a good connection between the ventilator circuit in the ventilator.",
	},
	{
		question:
			"The respiratory therapist is performing a preoperational test of a ventilator. The therapist notices the return volume is 200 mL less than the set tidal volume. The therapist should\n\n A. notify the medical director and seek advice\n B. tag the ventilator as non-functional and isolate it from functional equipment\n C. check for a leak in the circuit or the circuit's connections\n D. accept the results and place the ventilator into service",
		options: {
			A: "notify the medical director and seek advice",
			B: "tag the ventilator as non-functional and isolate it from functional equipment",
			C: "check for a leak in the circuit or the circuit's connections",
			D: "accept the results and place the ventilator into service",
		},
		answer: "C",
		answer_explanation:
			"check for a leak in the circuit or the circuit's connections\n\nExplanation : \nThe purpose of a preoperational test on a ventilator is to ensure proper connections and assembly of those necessary parts. The reduced return tidal volume observed would most logically be caused by a failure to make a good connection between the ventilator circuit in the ventilator.",
	},
	{
		question:
			"During the preoperational test of the ventilator, the respiratory therapist notices the galvanic analyzer on the ventilator is reading erroneously low. Which of the following can the respiratory therapist do to correct the problem?\n\n A. change the fuel cell\n B. replace the analyzer batteries\n C. tag the ventilator as non-functional and avoid placing it in service\n D. replace the electrolyte solution in the analyzer",
		options: {
			A: "change the fuel cell",
			B: "replace the analyzer batteries",
			C: "tag the ventilator as non-functional and avoid placing it in service",
			D: "replace the electrolyte solution in the analyzer",
		},
		answer: "A",
		answer_explanation:
			"change the fuel cell\n\nExplanation : \nA galvanic oxygen analyzer will read erroneously under two conditions: the probe or the fuel cell is depleted or the analyzer requires calibration. In this case the probe, which provides the energy for the analyzer, is the most likely culprit and should be changed.",
	},
	{
		question:
			"Which of the following will attribute most to an increase in nosocomial infection?\n\n A. use of an HME\n B. frequent disconnection of a ventilator circuit\n C. frequent suctioning with an inline suction catheter\n D. changing a small volume nebulizer every 24 hours",
		options: {
			A: "use of an HME",
			B: "frequent disconnection of a ventilator circuit",
			C: "frequent suctioning with an inline suction catheter",
			D: "changing a small volume nebulizer every 24 hours",
		},
		answer: "B",
		answer_explanation:
			"frequent disconnection of a ventilator circuit\n\nExplanation : \nA nosocomial infection is an infection that spread from patient to patient in a hospital setting. For a patient on a ventilator, a significant cause of nosocomial infection comes from disconnection of the ventilator circuit. Although this must be done from time to time, it should be minimized. Use of an HME does not increase the incidence of infection.",
	},
	{
		question:
			"Which of the following is most likely to increase nosocomial infection in a hospital?\n\n A. poor hand washing among staff\n B. frequent disconnection in the ventilator circuit\n C. use of an HME for 48 hours\n D. use of alcohol-based hand cleaners",
		options: {
			A: "poor hand washing among staff",
			B: "frequent disconnection in the ventilator circuit",
			C: "use of an HME for 48 hours",
			D: "use of alcohol-based hand cleaners",
		},
		answer: "A",
		answer_explanation:
			"poor hand washing among staff\n\nExplanation : \nThe most common nosocomial infection source is from poor hand washing. Although frequent disconnection of a ventilator circuit will also increase incidence of infection, poor hand washing is by far more common.",
	},
	{
		question:
			"Which of the following is most effective at preventing nosocomial infections in hospitals?\n\n A. sterilize all equipment prior to use\n B. use a spacer with MDI treatments\n C. use unit dose medication when available\n D. diligent hand washing among health care providers",
		options: {
			A: "sterilize all equipment prior to use",
			B: "use a spacer with MDI treatments",
			C: "use unit dose medication when available",
			D: "diligent hand washing among health care providers",
		},
		answer: "D",
		answer_explanation:
			"diligent hand washing among health care providers\n\nExplanation : \nDiligent handwashing is the most effective way to prevent nosocomial infections in hospitals. Use of unit dose medication and sterilization of all equipment is also helpful but not as effective as hand washing.",
	},
	{
		question:
			"Which of the following is LEAST likely to promote the spread of nosocomial infection in a hospital?\n\n A. use of unit dose medication\n B. frequent disconnection of a ventilator circuit\n C. poor hand washing among staff\n D. changing small volume nebulizer equipment every 48 hours",
		options: {
			A: "use of unit dose medication",
			B: "frequent disconnection of a ventilator circuit",
			C: "poor hand washing among staff",
			D: "changing small volume nebulizer equipment every 48 hours",
		},
		answer: "A",
		answer_explanation:
			"use of unit dose medication\n\nExplanation : \nThe best option is to use unit dose medication. The use of multiple-dose bottles of medication used to be more prelavent. When doing so the dropper stem of the medication bottle could touch the internal surface of the nebulizer, possibly picking up and depositing pathogenic organisms. Changing the nebulizer every 48 hours may also be helpful but not as effective at preventing nosocomial infections. The other options in this question are likely to increase nosocomial infection rates in hospitals.",
	},
	{
		question:
			"A 68-kg (150-lb) post-operative female patient is receiving mechanical ventilation in the SIMV mode with a set mechanical rate of 6/min and an actual rate of 10/min. Her set tidal volume is 500 mL with a spontaneous tidal volume of 400 mL. She is comfortable with stable vital signs. What should the respiratory therapist do?\n\n A. Start pressure support at 15 cm H2O.\n B. Set the low VE alarm to 4.0 L/Min.\n C. Increase the mechanical rate to 16/min.\n D. Increase the set tidal volume to 650 mL.",
		options: {
			A: "Start pressure support at 15 cm H2O.",
			B: "Set the low VE alarm to 4.0 L/Min.",
			C: "Increase the mechanical rate to 16/min.",
			D: "Increase the set tidal volume to 650 mL.",
		},
		answer: "B",
		answer_explanation:
			"Set the low VE alarm to 4.0 L/Min.\n\nExplanation : \nIn this case the patient is comfortable with stable vital signs during weaning. There is no indication that any increase in ventilation is necessary. A respiratory therapist may seek a response that is more aggressive in weaning, but no such choice is offered. Therefore, the best response is to set the alarms and monitor the patient closely to assure that she will continue her spontaneous breaths.",
	},
	{
		question:
			"Which alarm is most critical for a post-operative mechanically ventilated patient who has a machine rate of 4/min?\n\n A. high respiratory rate\n B. low minute volume\n C. high pressure\n D. low pressure",
		options: {
			A: "high respiratory rate",
			B: "low minute volume",
			C: "high pressure",
			D: "low pressure",
		},
		answer: "B",
		answer_explanation:
			"low minute volume\n\nExplanation : \nBecause a machine set rate of 4/min is insufficient to maintain a patient's ventilation, it is necessary to set the alarms to assure sufficient ventilation is occurring with spontaneous breathing. Should the patient become sedated or lose their spontaneous respiratory drive, the alarm will notify the therapist to intervene.",
	},
	{
		question:
			"A respiratory therapist notes the word cachectic used in the medical documentation to describe a patient. This is most consistent with:\n\n A. a wasted appearance\n B. obtunded\n C. non-attentiveness\n D. obesity",
		options: {
			A: "a wasted appearance",
			B: "obtunded",
			C: "non-attentiveness",
			D: "obesity",
		},
		answer: "A",
		answer_explanation:
			'a wasted appearance\n\nExplanation : \nThe word "cachectic" refers to a wasted appearance, skinny, and poor skin turgor. A person with AIDS or pulmonary tuberculosis may demonstrate this.',
	},
	{
		question:
			"Which of the following would most closely describe the physical attribute of being wasted in appearance:\n\n A. Barrel-chested\n B. Sclerotic\n C. Cachexia\n D. Diaphoretic",
		options: {
			A: "Barrel-chested",
			B: "Sclerotic",
			C: "Cachexia",
			D: "Diaphoretic",
		},
		answer: "C",
		answer_explanation:
			'Cachexia\n\nExplanation : \nThe word "cachexia" refers to a wasted appearance, skinny, and poor skin turgor. A person with AIDS or pulmonary tuberculosis may demonstrate this.',
	},
	{
		question:
			"The respiratory therapist evaluates a patient in the emergency department (ED). Physical assessment reveals an ashen or pallor appearance. This is most consistent with which clinical condition?\n\n A. abuse of barbiturates\n B. infection or inflammation\n C. anemia or shock\n D. excessive bilirubin",
		options: {
			A: "abuse of barbiturates",
			B: "infection or inflammation",
			C: "anemia or shock",
			D: "excessive bilirubin",
		},
		answer: "C",
		answer_explanation:
			'anemia or shock\n\nExplanation : \nThe terms "ashen" and "pallor" are related to anemia or shock.',
	},
	{
		question:
			"How is exhaled volume determined with IPPB?\n\n A. Pre-set using the tidal volume control knob\n B. Calculation using Dalton's law of partial pressures\n C. Peak- inspiratory pressure divided by flowrate\n D. Directly measured at the exhalation valve outlet",
		options: {
			A: "Pre-set using the tidal volume control knob",
			B: "Calculation using Dalton's law of partial pressures",
			C: "Peak- inspiratory pressure divided by flowrate",
			D: "Directly measured at the exhalation valve outlet",
		},
		answer: "D",
		answer_explanation:
			"Directly measured at the exhalation valve outlet\n\nExplanation : \nIPPB machines are pressure ventilators without volume measuring devices. Tidal volume must be measured externally at the exhalation port.",
	},
	{
		question:
			"You are called to the emergency room to provide ventilation with a manual resuscitator for a patient receiving CPR. The patient is intubated and the endotracheal tube position has been confirmed. It is difficult to squeeze the bag. A possible causes is\n\n A. insufficient oxygen flow to the bag\n B. a deflated ET tube cuff\n C. low pulmonary compliance.\n D. right maintstem bronchus",
		options: {
			A: "insufficient oxygen flow to the bag",
			B: "a deflated ET tube cuff",
			C: "low pulmonary compliance.",
			D: "right maintstem bronchus",
		},
		answer: "C",
		answer_explanation:
			"low pulmonary compliance.\n\nExplanation : \nA trained respiratory therapist is able to assess the appropriate effort required to manually ventilate a patient by squeezing a resuscitator bag. There are numerous causes of increased difficulty in squeezing the bag, including low pulmonary compliance.",
	},
	{
		question:
			"In preparation for ventilator weaning the physician requests a VD/VT ratio assessment. Which of the following is needed to determine the deadspace-tidal volume ratio?\n\n A. single breath nitrogen elimination and capnographic data\n B. helium dilution study and single breath nitrogen elimination\n C. arterial blood gases and capnographic data\n D. helium dilution study and an arterial blood gas",
		options: {
			A: "single breath nitrogen elimination and capnographic data",
			B: "helium dilution study and single breath nitrogen elimination",
			C: "arterial blood gases and capnographic data",
			D: "helium dilution study and an arterial blood gas",
		},
		answer: "C",
		answer_explanation:
			"arterial blood gases and capnographic data\n\nExplanation : \nThis question is just about knowing what it takes to calculate a VD/VT ratio. You really only need two things - PO2 and end tidal CO2. End tidal CO2 comes from a device called a capnograph.",
	},
	{
		question:
			"Which of the following devices is needed to determine a patient's airway resistance?\n\n A. Wheatstone bridge helium analyzer\n B. Geissler tube nitrogen analyzer\n C. turbine pneumotachometer\n D. Body box",
		options: {
			A: "Wheatstone bridge helium analyzer",
			B: "Geissler tube nitrogen analyzer",
			C: "turbine pneumotachometer",
			D: "Body box",
		},
		answer: "D",
		answer_explanation:
			"Body box\n\nExplanation : \nThere is a procedure involving panting where airway resistance can be determined. In order to do that procedure all conditions must be standardized, including temperature, pressure, and even humidity to some degree. Only a body box can provide this controlled environment.",
	},
	{
		question:
			"Which of the following equipment is most helpful at measuring FRC in a patient who has significant non-ventilated lung spaces?\n\n A. plethysmograph\n B. helium analyzer for a helium dilution test\n C. peak flow meter\n D. nitrogen analyzer for a nitrogen washout test",
		options: {
			A: "plethysmograph",
			B: "helium analyzer for a helium dilution test",
			C: "peak flow meter",
			D: "nitrogen analyzer for a nitrogen washout test",
		},
		answer: "A",
		answer_explanation:
			"plethysmograph\n\nExplanation : \nYou can determine FRC in three different ways - body box, nitrogen washout, or helium dilution. If someone has non-ventilated lung space, nitrogen washout and helium dilution are not helpful and may be inaccurate. FRC determined by body box will be higher because it can access non-ventilated lung space and therefore is more accurate.",
	},
	{
		question:
			"A respiratory therapist is determining a VD/VT ratio. Which of the following is needed to complete this analysis?\n\n A. FIO2 and PaO2\n B. PECO2 and PaO2\n C. VT and VA\n D. PetCO2 and PaCO2",
		options: {
			A: "FIO2 and PaO2",
			B: "PECO2 and PaO2",
			C: "VT and VA",
			D: "PetCO2 and PaCO2",
		},
		answer: "D",
		answer_explanation:
			"PetCO2 and PaCO2\n\nExplanation : \nThere are two things required to determine a VD/VT ratio - end tidal CO2 and PaCO2.",
	},
	{
		question:
			"A respiratory therapist is considering a patient's readiness to wean from mechanical ventilation. To determine the A-aDO2, the therapist will need which of the following?\n\n A. CaO2 and PAO2\n B. VD/VT and ABG\n C. ABG and alveolar oxygen tension\n D. VD/VT and PAO2",
		options: {
			A: "CaO2 and PAO2",
			B: "VD/VT and ABG",
			C: "ABG and alveolar oxygen tension",
			D: "VD/VT and PAO2",
		},
		answer: "C",
		answer_explanation:
			"ABG and alveolar oxygen tension\n\nExplanation : \nThis question requires you to remember what is needed to calculate A-a gradient. You only need two things - the alveolar oxygen tension (PAO2), and the arterial oxygen tension, determined from an arterial blood gas.",
	},
	{
		question:
			"What is needed to determine arterial oxygen content?\n\n A. P/F ratio\n B. Oxygen index\n C. PvO2\n D. Hemoglobin level",
		options: {
			A: "P/F ratio",
			B: "Oxygen index",
			C: "PvO2",
			D: "Hemoglobin level",
		},
		answer: "D",
		answer_explanation:
			"Hemoglobin level\n\nExplanation : \nYou must know what is required to calculate arterial oxygen content. If you look at the formula you'll realize you need to know arterial saturation, hemoglobin level, and PaO2 only. Venous saturation is not relevant, but would be relevant if we were calculating venous oxygen content.",
	},
	{
		question:
			"A patient is admitted to the ICU with swollen ankles. A pulmonary artery catheter is inserted. The respiratory therapist should expect to see\n\n A. elevated PCWP with a low cardiac Index\n B. evidence of hypovolemia\n C. elevated CVP with a normal PAP\n D. elevated PVR",
		options: {
			A: "elevated PCWP with a low cardiac Index",
			B: "evidence of hypovolemia",
			C: "elevated CVP with a normal PAP",
			D: "elevated PVR",
		},
		answer: "C",
		answer_explanation:
			"elevated CVP with a normal PAP\n\nExplanation : \nSwelling in the ankles is one of the clinical signs of right heart failure. Hemodynamic monitoring would show an elevated central venous pressure with a diminished pulmonary artery pressure.",
	},
	{
		question:
			"A patient presents to the emergency room with fulminating pulmonary edema. Which of the following would be experienced with this emergency?\n\n A. a good response to supplemental O2\n B. elevated left ventricular filling pressure with low QT\n C. hypovolemia\n D. CVP 10 torr and PAP 10 torr",
		options: {
			A: "a good response to supplemental O2",
			B: "elevated left ventricular filling pressure with low QT",
			C: "hypovolemia",
			D: "CVP 10 torr and PAP 10 torr",
		},
		answer: "B",
		answer_explanation:
			"elevated left ventricular filling pressure with low QT\n\nExplanation : \nFulminating pulmonary edema is a serious condition often resulting from left-sided heart failure. Left ventricular filling pressure, a.k.a. pulmonary capillary wedge pressure (PCWP), would likely be elevated while cardiac output (QT) would drop. The back pressure or congestion would become relieved in the lungs, creating severe pulmonary congestion.",
	},
	{
		question:
			"The respiratory therapist is making a home visit to evaluate an oxygen-dependent patient. The patient has 3+ pitting peripheral edema and has not followed the physician's orders to limit fluid intake. You would expect which of the following hemodynamic values?\n\n A. elevated right sided preload with a normal to low right ventricular after load\n B. low mean arterial pressure\n C. reduced cardiac index\n D. elevated PCWP with a low cardiac output",
		options: {
			A: "elevated right sided preload with a normal to low right ventricular after load",
			B: "low mean arterial pressure",
			C: "reduced cardiac index",
			D: "elevated PCWP with a low cardiac output",
		},
		answer: "A",
		answer_explanation:
			"elevated right sided preload with a normal to low right ventricular after load\n\nExplanation : \nRight-sided preload is another name for CVP (central venous pressure). Peripheral edema is one of the signs associated with right heart failure, which results in an elevated CVP with a normal or low pulmonary artery pressure (PAP), a.k.a. right ventricular afterload.",
	},
	{
		question:
			"For a patient with severe mitral-valve stenosis, a balloon-tipped flow-directed pulmonary artery catheter would be associated with which of the following clinical data?\n\n A. PCWP 14 mm Hg and C.O. 4 L/M\n B. CVP 9 mm Hg and PAP 9 mmHg\n C. PAP 19 mm Hg and PCWP 7 mmHg\n D. PAP 25/8 mmHg",
		options: {
			A: "PCWP 14 mm Hg and",
			B: "O. 4 L/M",
			C: "CVP 9 mm Hg and PAP 9 mmHg",
			D: "PAP 19 mm Hg and PCWP 7 m",
			F: "PCWP 14 mm Hg and",
		},
		answer: "A",
		answer_explanation:
			"PCWP 14 mm Hg and C.O. 4 L/M\n\nExplanation : \nMitral valve stenosis is a problem resulting from left heart failure. Problems in the left heart are manifested hemodynamically with high pulmonary capillary wedge pressure (PCWP) and low or normal cardiac output.",
	},
	{
		question:
			"Which of the following conditions would benefit most from bronchoscopy?\n\n A. foreign body aspiration\n B. emphysema\n C. chronic bronchitis\n D. ARDS",
		options: {
			A: "foreign body aspiration",
			B: "emphysema",
			C: "chronic bronchitis",
			D: "ARDS",
		},
		answer: "A",
		answer_explanation:
			"foreign body aspiration\n\nExplanation : \nA bronchoscopy will not help to resolve emphysema, chronic bronchitis, or adult respiratory distress syndrome. It is, however, helpful in removing a foreign body from the trachea or lungs.",
	},
	{
		question:
			"Which of the following conditions would benefit most from polysomnography?\n\n A. congestive heart failure\n B. obesity with increased day-time sleepiness\n C. COPD\n D. suspected increased airway resistance",
		options: {
			A: "congestive heart failure",
			B: "obesity with increased day-time sleepiness",
			C: "COPD",
			D: "suspected increased airway resistance",
		},
		answer: "B",
		answer_explanation:
			"obesity with increased day-time sleepiness\n\nExplanation : \nPolysomnography is another word for sleep study. An obese patient who has daytime sleepiness would benefit most from polysomnography. Keep in mind that Polysomnography is the study of the problem - not the solution. But it must be done for diagnostic purposes and in order to find the adequate CPAP setting.",
	},
	{
		question:
			"Which of the following conditions would benefit most from cardioversion?\n\n A. asystole\n B. frequent PVCs\n C. ventricular tachycardia with a pulse\n D. ventricular fibrillation",
		options: {
			A: "asystole",
			B: "frequent PVCs",
			C: "ventricular tachycardia with a pulse",
			D: "ventricular fibrillation",
		},
		answer: "C",
		answer_explanation:
			"ventricular tachycardia with a pulse\n\nExplanation : \nCardioversion is appropriate for patients with ventricular tachycardia who have a pulse. If the patient has no pulse then defibrillation should be used. Cardioversion is with the machine in synchronized mode, or the synchronization is set to Active. Defibrillation is done with the machine's synchronization deactivated.",
	},
	{
		question:
			"Which of the following is the best indicator of the adequacy of alveolar ventilation?\n\n A. tidal volume\n B. respiratory rate\n C. color\n D. PaCO2 from an arterial blood gas analysis",
		options: {
			A: "tidal volume",
			B: "respiratory rate",
			C: "color",
			D: "PaCO2 from an arterial blood gas analysis",
		},
		answer: "D",
		answer_explanation:
			"PaCO2 from an arterial blood gas analysis\n\nExplanation : \nAdequate alveolar ventilation is best manifest by the exhalation of CO2 observed on an arterial blood gas. Tidal volume, respiratory rate, or color are not good indicators of the adequacy of alveolar ventilation.",
	},
	{
		question:
			"The respiratory therapist is asked to estimate the alveolar minute ventilation on a spontaneously breathing 91 kg (200 lb) male who is receiving oxygen therapy by air-entrainment mask at FIO2 0.50. The following data is available\n \nExhaled VT 500 mL \nSpO2 92%\nPetCO2 30 torr\nPaO2 70 torr\nMinute ventilation 10 L/min\n\nThe therapist should report an alveolar minute ventilation of:\n\n A. 12.0 L/min\n B. 8.2 L/min\n C. 6.0 L/min\n D. 4.0 L/min",
		options: {A: "12.0 L/min", B: "8.2 L/min", C: "6.0 L/min", D: "4.0 L/min"},
		answer: "C",
		answer_explanation:
			"6.0 L/min\n\nExplanation : \nTo determine alveolar ventilation, dead space should be subtracted from each tidal volume. The amount of dead space per tidal volume is equivalent to 1 mL/lb of ideal body weight. In this case, the patient weighs 200 lbs and therefore has 200 mL of dead space for every inhaled tidal volume. The amount of gas that goes to the alveoli is, therefore, 300 mL per breath or 6.0 L per minute. This is calculated by subtracting 200 mL from 500 mL (the patient's VT) and then multiplying the result by the respiratory rate. The respiratory rate is not givin here but can be determined by dividing the minute ventilation by the exhaled tidal volume.",
	},
	{
		question:
			"The respiratory therapist is asked to estimate the alveolar minute ventilation on a spontaneously breathing 68 kg (150 lb) female who is receiving oxygen therapy by air-entrainment mask at FIO2 0.50. The following data is available\n \nExhaled VT 450 mL \nmPAP 15 torr\nPaCO2 40 torr\nPaO2 70 torr\nRespiratory rate 12/min\n\nThe therapist should report an alveolar minute ventilation of:\n\n A. 5.4 L/min\n B. 3.6 L/min\n C. 12.0 L/min\n D. 4.6 L/min",
		options: {A: "5.4 L/min", B: "3.6 L/min", C: "12.0 L/min", D: "4.6 L/min"},
		answer: "B",
		answer_explanation:
			"3.6 L/min\n\nExplanation : \nTo determine alveolar ventilation, dead space should be subtracted from each tidal volume. The amount of dead space per tidal volume is equivalent to 1 mL/lb of ideal body weight. In this case, the patient weighs 200 lbs and therefore has 150 mL of dead space for every inhaled tidal volume. The amount of gas that goes to the alveoli is, therefore, 300 mL per breath or 3.6 L per minute. This is calculated by subtracting 150 mL from 450 mL (the patient's VT) and then multiplying by the respiratory rate.",
	},
	{
		question:
			"A neonate born 48 hours ago is receiving time-cycled, pressure-limited mechanical ventilation in the NICU. How should the patient's fluid output be measured?\n\n A. Insert a urinary catheter\n B. Press and assess duration for blanched skin to return to normal\n C. Weigh the diaper\n D. Periodically weigh the neonate",
		options: {
			A: "Insert a urinary catheter",
			B: "Press and assess duration for blanched skin to return to normal",
			C: "Weigh the diaper",
			D: "Periodically weigh the neonate",
		},
		answer: "C",
		answer_explanation:
			"Weigh the diaper\n\nExplanation : \nFluid control is vital in managing the care of a neonate. It may not seem very scientific to weigh the diaper, but it is the most reliable and practical of the choices offered.",
	},
	{
		question:
			"A 32-gestational week newborn is receiving mechanical ventilation via a 3.0 mm endotracheal tube. Which of the following are associated with ongoing assessment of renal function?\n\n A. PCWP\n B. humidification is maintained at a non-invasive temperature\n C. mPAP\n D. diaper weight and blood draw volumes are recorded",
		options: {
			A: "PCWP",
			B: "humidification is maintained at a non-invasive temperature",
			C: "mPAP",
			D: "diaper weight and blood draw volumes are recorded",
		},
		answer: "D",
		answer_explanation:
			"diaper weight and blood draw \n\nExplanation : \nNPO (nothing by mouth) indicates that a newborn is not feeding in the usual manner. Intravenous fluids are vital and must be recorded for an intubated patient. Fluid output is measured by diaper weight and carefully recorded blood draws. Humidification of gas through the endotracheal tube must be maintained at an invasive temperature rather than a noninvasive because the nasal passages are bypassed.",
	},
	{
		question:
			"Periodic weighing of a newborn's diaper is associated with\n\n A. measuring fluid output\n B. documenting weight loss\n C. IRDS in a premature neonate\n D. assessing response to breast feeding",
		options: {
			A: "measuring fluid output",
			B: "documenting weight loss",
			C: "IRDS in a premature neonate",
			D: "assessing response to breast feeding",
		},
		answer: "A",
		answer_explanation:
			"measuring fluid output\n\nExplanation : \nIt is not practical to insert a urinary catheter while caring for the neonate. Weighing the diaper is the standard of care for measuring fluid output.",
	},
	{
		question:
			"Which of the following should be monitored for a ventilator-dependent newborn with IRDS?\n\n A. urine specific gravity\n B. fluid input and output\n C. gas distribution (SBN2) in the lungs\n D. pH",
		options: {
			A: "urine specific gravity",
			B: "fluid input and output",
			C: "gas distribution (SBN2) in the lungs",
			D: "pH",
		},
		answer: "B",
		answer_explanation:
			"fluid input and output\n\nExplanation : \nAll choices are indicated while monitoring a critically ill neonate receiving mechanical ventilation. I & O fluid monitoring is essential. Managing acid-base balance and the artificial airway are also essential.",
	},
	{
		question:
			"Which of the following can accurately be stated about a widening alveolar-arterial oxygen gradient?\n\n A. decreased venous admixture\n B. improving V/Q mismatch\n C. increased intrapulmonary shunting\n D. onset of oxygen toxicity",
		options: {
			A: "decreased venous admixture",
			B: "improving V/Q mismatch",
			C: "increased intrapulmonary shunting",
			D: "onset of oxygen toxicity",
		},
		answer: "C",
		answer_explanation:
			"increased intrapulmonary shunting\n\nExplanation : \nA normal alveolar arterial oxygen gradient is below 65 mmHg. When that gradient rises to 200, 300, 400, or more, then you have what is called shunting. If the A-a gradient is less than 300 it's technically called a ventilation perfusion (VQ) mismatch. But generally speaking, as the gradient widens it can properly be said that there is an increase in pulmonary shunting.",
	},
	{
		question:
			"Which of the following can accurately be stated about a widening C(a-v)O2?\n\n A. pulmonary hypertension\n B. decreased oxygen consumption\n C. increased intrapulmonary shunting\n D. decreased cardiac output",
		options: {
			A: "pulmonary hypertension",
			B: "decreased oxygen consumption",
			C: "increased intrapulmonary shunting",
			D: "decreased cardiac output",
		},
		answer: "D",
		answer_explanation:
			"decreased cardiac output\n\nExplanation : \nWhen the oxygen content between the alveoli and the venous system becomes increased we know that cardiac output must be decreasing. Cardiac output has an inverse relationship with C(a-v)O2. If one is going up, the other is going down. The opposite is also true.",
	},
	{
		question:
			"Which of the following would indicate an increasing cardiac output?\n\n A. decreasing QS/QT\n B. decreasing alveolar deadspace\n C. decreasing C(a-v)O2\n D. increasing A-aDO2",
		options: {
			A: "decreasing QS/QT",
			B: "decreasing alveolar deadspace",
			C: "decreasing C(a-v)O2",
			D: "increasing A-aDO2",
		},
		answer: "C",
		answer_explanation:
			"decreasing C(a-v)O2\n\nExplanation : \nOf the options listed, the gradient between the arterial content and venous content - C(a-v)O2 - is most pertinent. There is an inverse relationship between cardiac output and the C(a-v)O2. The larger the gradient, the lower the cardiac output. The lower the gradient, the more likely cardiac output is increasing.",
	},
	{
		question:
			"The respiratory therapist should look to which of the following clinical data to determine the effectiveness of incentive spirometry?\n\n A. Inspiratory capacity predicted volume\n B. Arterial blood gas analysis pre and post treatment\n C. Maximum voluntary ventilation done periodically\n D. Breath sounds before and after every treatment",
		options: {
			A: "Inspiratory capacity predicted volume",
			B: "Arterial blood gas analysis pre and post treatment",
			C: "Maximum voluntary ventilation done periodically",
			D: "Breath sounds before and after every treatment",
		},
		answer: "D",
		answer_explanation:
			"Breath sounds before and after every treatment\n\nExplanation : \nThe effectiveness of incentive spirometry can best be determined by auscultating breath sounds before and after the treatment and noting changes in air movement. While achieving inspiratory capacity is the goal, the real goal is to increase lung volume, improve alveolar recruitment, and prevent consolidation of sputum in the lungs.",
	},
	{
		question:
			"A patient has been receiving IPPB therapy after surgery to reduce pulmonary complications. The respiratory therapist should use which method to determine the effectiveness of the therapy?\n\n A. Arterial blood gas analysis\n B. Periodic chest radiograph\n C. SBN2\n D. Airway resistance",
		options: {
			A: "Arterial blood gas analysis",
			B: "Periodic chest radiograph",
			C: "SBN2",
			D: "Airway resistance",
		},
		answer: "B",
		answer_explanation:
			"Periodic chest radiograph\n\nExplanation : \nOf the options offered, the purpose of an IPPB treatment is to prevent post-operative complications, including consolidation of sputum in the alveoli. Monitoring pre and post breath sounds and obtaining a periodic chest x-ray is most helpful in assessing the effectiveness of the IPPB therapy.",
	},
	{question: "", options: {}, answer: "[][][]", answer_explanation: "[][][]"},
]
