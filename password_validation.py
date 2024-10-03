import re

def validate_password(password):
    length_criteria = len(password) >= 15
    has_uppercase = bool(re.search(r'[A-Z]', password))
    has_lowercase = bool(re.search(r'[a-z]', password))
    has_digit = bool(re.search(r'\d', password))
    has_special = bool(re.search(r'[!$#%&*]', password))

    categories = sum([has_uppercase, has_lowercase, has_digit, has_special])
    category_criteria = categories >= 2

    return length_criteria and category_criteria
