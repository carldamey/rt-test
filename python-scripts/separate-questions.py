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

import re

def extract_quiz_data(input_text):
    quiz_data = []
    questions = input_text.split(')*')
    for question_text in questions:
        if question_text.strip():
            question_data = {}
            question, answers = question_text.split('!@#')
            question_data['question'] = question.strip()
            options = answers.split(')(*')
            options_dict = {}
            answer = None
            for option in options:
                if option.startswith('A.'):
                    options_dict['A'] = option.split('A.')[1].strip()
                elif option.startswith('B.'):
                    options_dict['B'] = option.split('B.')[1].strip()
                elif option.startswith('C.'):
                    options_dict['C'] = option.split('C.')[1].strip()
                elif option.startswith('D.'):
                    options_dict['D'] = option.split('D.')[1].strip()
                else:
                    answer = option.strip()
            question_data['options'] = options_dict
            question_data['answer'] = answer[0]
            question_data['answer_explanation'] = answer[1:]
            quiz_data.append(question_data)
    return quiz_data


# # Parse the input text
# quiz_data = parse_question_and_answers(question_50_set)

# # Convert the quiz data to a JavaScript object
# javascript_object = "const quizData = " + repr(quiz_data) + ";"

# print(javascript_object)
# question_50_object.write(javascript_object)

quiz_data = extract_quiz_data(question_50_set)


print("const quizData = [")
for question in quiz_data:
    print("  {")
    print(f'    "question": "{question["question"]}",')
    print("    \"options\": {")
    for option, text in question["options"].items():
        print(f'      "{option}": "{text}"')
    print("    },")
    print(f'    "answer": "{question["answer"]}",')
    print(f'    "answer_explanation": "{question["answer_explanation"]}"')
    print("  },")
print("]")