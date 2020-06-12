from flask import Flask, render_template, request, jsonify
import random
import time

app = Flask(__name__, static_folder='../static/dist',
            template_folder='../static')


def get_phrase():
    phrase_list = ['Hello', 'How are you?', 'I am doing well. Thank you! And you?',
                   'How may I help you?', 'Let me see...']
    return random.choice(phrase_list)


@app.route('/')
def index():
    return render_template('index.html')


@app.route("/response", methods=["POST"])
def response():
    userMsg = request.json['msg']
    time.sleep(3)
    return get_phrase()


if __name__ == '__main__':
    app.run()
