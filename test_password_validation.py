import unittest
from password_validation import validate_password

class TestPasswordValidation(unittest.TestCase):

    def test_valid_passwords(self):
        self.assertTrue(validate_password('Fxmedia12345678@'))  
        self.assertTrue(validate_password('AnotherSecurePwd$567'))  
        self.assertTrue(validate_password('SuperP@ssphrase123'))  

    def test_invalid_passwords(self):
        self.assertFalse(validate_password('ShortPwd1!')) 
        self.assertFalse(validate_password('Password'))  
        self.assertFalse(validate_password('lowercaseonly'))  
        self.assertFalse(validate_password('MISSINGUPPERANDSPECIAL')) 

