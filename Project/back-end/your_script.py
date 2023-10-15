import sys

if len(sys.argv) < 2:
    print("Usage: python your_script.py <file_path>")
    sys.exit(1)

file_path = sys.argv[1]

# Now you can use 'file_path' in your Python script
import aspose.words as aw
from docxtpl import DocxTemplate
from docx import Document

from bs4 import BeautifulSoup
import chardet



input_file = file_path
# input_file = "uploads\sample_level_1.html"
input_file_name = input_file[8:-5]
output_file = "./WordDocs/"+input_file_name+".docx"
print(input_file)

doc_aw = aw.Document(input_file)
print(type(doc_aw))



doc_aw.save(output_file)



with open(input_file, 'r') as file:
    html_content = file.read()




soup_obj = BeautifulSoup(html_content, 'html.parser')

watermark_data = soup_obj.find('div', id = 'watermark')


doc_x  = Document(output_file)


# to remove the headers and footers
for section in doc_x.sections:
    header = section.header
    # section.different_first_page_header_footer = False
    print(header)
    header.is_linked_to_previous = True
    section.footer.is_linked_to_previous = True

doc_x.save(output_file)

print("Received file path:", file_path)