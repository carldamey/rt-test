import re


questions = str(open('questions/question-exports/140-set.txt', 'r'))
   
questions_list = re.split(r'\(\*\*\)', questions.strip())

for question_text in questions_list:
    if question_text.strip():
        # Extract the question and options
        question_parts = re.split(r'\!@\#', question_text)
        question = question_parts[0].strip()
        options = {}
        for option in re.findall(r'[A-Z]\.\s*(\w.*?)\n', question):
            options[option[0]] = option[2:].strip()
        
        # Extract the answer and explanation
        answer = question_parts[1].split(':')[1].strip()
        explanation = '\n\n'.join(question_parts[1:]).split('Explanation :')[1].strip()
        
        print(f"""
{{
\t\tquestion:
\t\t\t"{question}",
\t\toptions: {{
{', '.join(f'"{key}": "{value}"' for key, value in options.items())}
\t\t}},
\t\tanswer: "{answer}",
\t\tanswer_explanation: "{explanation}",
}},
""")