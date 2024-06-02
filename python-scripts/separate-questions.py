import re

current_question_number = 1
question_list = []

question_50_set = open("questions/question-exports/50-set.txt", "r").read()
question_140_set = open("questions/question-exports/140-set.txt", "r").read()
question_703_set = open("questions/question-exports/703-set.txt", "r").read()

question_50_object = open("questions/question-objects/50-set.txt", "w")



# print(question_50_set)
# input()
# print(question_140_set)
# input()
# print(question_703_set)

# question_50_set_list = question_50_set.split(")(*")

# print(question_50_set_list)
# input("akjsdhaskjdhk")

# for question in question_50_set_list:
#   question_50_separated.write(
#     '{"question" ":' + str(question) + '"},'
#   )

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
        question = question_text[:answer_separator_idx].strip()
        answer_info = question_text[answer_separator_idx + 4:].strip()

        # Find the answer letter and explanation
        answer_letter_match = re.search(r"\n\s*(\w)\.\s*", answer_info)
        if answer_letter_match:
            answer_letter = answer_letter_match.group(1)
            answer_explanation = answer_info[answer_letter_match.end():].strip()
        else:
            answer_letter = ""
            answer_explanation = answer_info

        # Find the options
        options = re.findall(r"\n\s*(\w)\.\s*(.*?)\n", question_text)

        # Create a dictionary for the question and answers
        question_data = {
            "question": question,
            "options": dict(options),
            "answer": answer_letter,
            "answer_explanation": answer_explanation
        }

        quiz_data.append(question_data)

    return quiz_data

# Parse the input text
quiz_data = parse_question_and_answers(question_50_set)

# Convert the quiz data to a JavaScript object
javascript_object = "const quizData = " + repr(quiz_data) + ";"

print(javascript_object)
question_50_object.write(javascript_object)