import re

question_140_set = open("questions/question-backups/140-set.txt", "r").read()

question_140_string = str(question_140_set)

write_to_file = open("questions/question-exports/140-set.txt", "w")

question_140_no_your_answer = re.sub("Your answer was : .\nThe correct answer is : ", "", question_140_string)

question_140_no_explanation = re.sub("Explanation :", "", question_140_no_your_answer) 

answer_pattern = r"!@#([A-D])"
questions_140_to_export = re.sub(r"!@#([A-D])", r"!@#\1.", question_140_no_explanation)

write_to_file.write(questions_140_to_export)


# print(re.sub("Your answer was : .\nThe correct answer is : ", "", question_140_string))

# print(question_140_set)