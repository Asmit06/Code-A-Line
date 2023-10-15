import sys

if len(sys.argv) < 2:
    print("Usage: python your_script.py <file_path>")
    sys.exit(1)

file_path = sys.argv[1]

# Now you can use 'file_path' in your Python script
import aspose.words as aw
from docxtpl import DocxTemplate
from docx import Document
# import requests
from bs4 import BeautifulSoup
import chardet


input_file = file_path
output_file = "./WordDocs/test.docx"

# import subprocess
# subprocess.run(['pandoc', input_file, "-o", output_file])


doc_aw = aw.Document(input_file)
print(type(doc_aw))



doc_aw.save(output_file)



with open(input_file, 'r') as file:
    html_content = file.read()




soup_obj = BeautifulSoup(html_content, 'html.parser')
# print(soup_obj)
watermark_data = soup_obj.find('div', id = 'watermark')
# print(type(watermark_data.text))



# options = aw.TextWatermarkOptions()
# options.font_family = "Calibri"
# options.font_size = 42
# options.layout = aw.WatermarkLayout.DIAGONAL
# options.is_semitrasparent = True

# doc_aw.watermark.set_text(watermark_data.text, options)
# doc_aw.save(output_file)


doc_x  = Document(output_file)


# to remove the headers and footers
for section in doc_x.sections:
    header = section.header
    # section.different_first_page_header_footer = False
    print(header)
    header.is_linked_to_previous = True
    section.footer.is_linked_to_previous = True


doc_x.save(output_file)

# doc_tpl = DocxTemplate(output_file)

# context = {
#     "Evaluation" : "gdsd"
# }


# doc_tpl.render(context)
# doc_tpl.save(output_file)

# # # print(tyoe(doc))




# # To know the encoding 




# from spire.doc import *

# from spire.doc.common import *
# doc_spire = Document()

# water = TextWatermark()
# water.text = ""

# doc_spire.LoadFromFile(output_file)
print("Received file path:", file_path)