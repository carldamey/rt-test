import re

current_question_number = 1
question_list = []

question_50_set = open("questions/question-exports/50-set.txt", "r").read()
question_140_set = open("questions/question-exports/140-set.txt", "r").read()
question_703_set = open("questions/question-exports/703-set.txt", "r").read()

question_703_object = open("questions/question-objects/703-set.js", "w")



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


 ############################################################
# import re

# import re

# def extract_quiz_data(input_text):
#     quiz_data = []
#     questions = input_text.split(')*')
#     for question_text in questions:
#         if question_text.strip():
#             question_data = {}
#             question, answers = question_text.split('!@#')
#             question_data['question'] = question.strip()
#             options = answers.split(')(*')
#             options_dict = {}
#             answer = None
#             for option in options:
#                 if option.startswith('A.'):
#                     options_dict['A'] = option.split('A.')[1].strip()
#                 elif option.startswith('B.'):
#                     options_dict['B'] = option.split('B.')[1].strip()
#                 elif option.startswith('C.'):
#                     options_dict['C'] = option.split('C.')[1].strip()
#                 elif option.startswith('D.'):
#                     options_dict['D'] = option.split('D.')[1].strip()
#                 else:
#                     answer = option.strip()
#             question_data['options'] = options_dict
#             question_data['answer'] = answer[0]
#             question_data['answer_explanation'] = answer[1:]
#             quiz_data.append(question_data)
#     return quiz_data

# print("const quizData = [")
# for question in quiz_data:
#     print("  {")
#     print(f'    "question": "{question["question"]}",')
#     print("    \"options\": {")
#     for option, text in question["options"].items():
#         print(f'      "{option}": "{text}"')
#     print("    },")
#     print(f'    "answer": "{question["answer"]}",')
#     print(f'    "answer_explanation": "{question["answer_explanation"]}"')
#     print("  },")
# print("]")

#         quiz_data.append(question_data)

#     return quiz_data

# quiz_data = extract_quiz_data(question_50_set)


###########################################################

# # Parse the input text
# quiz_data = parse_question_and_answers(question_50_set)

# # Convert the quiz data to a JavaScript object
# javascript_object = "const quizData = " + repr(quiz_data) + ";"

# print(javascript_object)
# question_50_object.write(javascript_object)

##############################################################

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
quiz_data = parse_question_and_answers(question_703_set)

# Convert the quiz data to a JavaScript object
javascript_object = "const quizData = " + repr(quiz_data) + ";"

# print(javascript_object)
question_703_object.write(javascript_object)
