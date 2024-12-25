from flask import Flask, render_template
from data.questions import questions

app = Flask(__name__)

@app.template_filter('chr')
def chr_filter(number, base=0):
    return chr(number + base)

@app.route('/')
def index():
    return render_template('index.html', questions=questions)

if __name__ == '__main__':
    app.run(debug=True)