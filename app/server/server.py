from flask import Flask, render_template, request, jsonify
from chatterbot import ChatBot
# from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot.trainers import ListTrainer
import random
import time
import os
import ssl

if (not os.environ.get('PYTHONHTTPSVERIFY', '') and
        getattr(ssl, '_create_unverified_context', None)):
    ssl._create_default_https_context = ssl._create_unverified_context

bot = ChatBot('Friend')  # create the bot
trainer = ListTrainer(bot)
for knowledge in os.listdir('base'):
    BotMemory = open('base/' + knowledge, 'r').readlines()
    trainer.train(BotMemory)

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
    user_msg = request.json['msg']
    time.sleep(1)
    return str(bot.get_response(user_msg))


if __name__ == '__main__':
    app.run()
