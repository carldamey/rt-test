import re

current_question_number = 1
question_list = []

question_50_set = open("questions/question-exports/50-set.txt", "r").read()
question_140_set = open("questions/question-exports/140-set.txt", "r").read()
question_703_set = open("questions/question-exports/703-set.txt", "r").read()

question_140_object = open("questions/question-objects/140-set.js", "w")

import re

def parse_question_and_answers(text):
    # Split the text into individual questions
    questions = text.split(")(*")

    # Initialize an empty list to store the questions and answers
    quiz_data = []

    for question_text in questions:
        # Find the answer separator
        answer_separator_idx = question_text.find("!@#")

        # Extract the question and answer
        question = re.sub(r"\s*[A-D]\.\s*.*?\n", "", question_text[:answer_separator_idx]).strip()
        answer_info = question_text[answer_separator_idx + 3:].strip()

        # Find the answer letter and explanation
        answer_letter_match = re.search(r"\s*([A-D])\.\s*", answer_info)
        if answer_letter_match:
            answer_letter = answer_letter_match.group(1)
            answer_explanation = answer_info[len(answer_letter) + 2:].strip()
        else:
            answer_letter = "[][][]"
            answer_explanation = "[][][]"

        # Find the options
        options = [(chr(ord('A') + i), option.strip()) for i, option in enumerate(re.findall(r"\s*[A-D]\.\s*(.*?)(?=\s*[A-D]\.|$)", question_text))]

        # Create a dictionary for the question and answers
        question_data = {
            "question": question,
            "options": dict(options),
            "answer": answer_letter,
            "answer_explanation": answer_explanation
        }

        # Remove E option if present (yes this is super hacky but I am in a big rush here and do not have time to figure out the underlying issue.)

        if "E" in question_data["options"]:
            del question_data["options"]["E"] 
        
        # Remove !@# delimiter at the end of option d (yes, equally hacky) The if statement is present so that the program still runs if a blank question is generated
        if "D" in question_data["options"]:
            question_data["options"]["D"] = question_data["options"]["D"][:-3]

        # Remove "D" option from question text
        if " D. " in question_data["question"]:
            question_data["question"] = question_data["question"].split(" D. ", 1)[0]

        # Remove "Explanation :" from explanation string
        if "Explanation : " in question_data["answer_explanation"]:
          question_data["answer_explanation"] = question_data["answer_explanation"].replace("Explanation : ", "")


        quiz_data.append(question_data)

    return quiz_data

# Parse the input text
quiz_data = parse_question_and_answers(question_140_set)

# Convert the quiz data to a JavaScript object
javascript_object = "const quizData = " + repr(quiz_data) + ";"

# print(javascript_object)
question_140_object.write(javascript_object)
