current_question_number = 1
question_list = []

question_50_set = open("questions/question-exports/50-set.txt", "r").read()
question_140_set = open("questions/question-exports/140-set.txt", "r").read()
question_703_set = open("questions/question-exports/703-set.txt", "r").read()

question_50_separated = open("questions/separated-questions/50-set.txt")



print(question_50_set)
input()
print(question_140_set)
input()
print(question_703_set)

question_50_set_list = question_50_set.split(")(*")

for question in question_50_set_list:
  print(question)
  input("next")