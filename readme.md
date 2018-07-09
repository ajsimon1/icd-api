# ICD API Application

ICD-10 is a coding system for the healthcare industry that classifies diagnoses
as well as 'reasons for visit'.  ICDs are used by various arms of the healthcare
industry to manage billing, quality of care, etc.

The ICD *code* has 2 parts:
- an actual code: **A15.0**
- a corresponding textual representation: **Tuberculosis of lung**

This application allows users to ping a ICD-10 API with either the code or text
 and return the complimentary component.  Documentation for the API is
 [here](https://clinicaltables.nlm.nih.gov/apidoc/icd10cm/v3/doc.html).  The API
 allows for partial matching and will return all results, said results are
 displayed in the table. 
