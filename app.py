from flask import Flask, request, jsonify, render_template
from openai import OpenAI
# from dotenv import load_dotenv
import os

# load_dotenv()

app = Flask(__name__)

client = OpenAI(
    api_key=os.getenv('OPENAI_API_KEY')
)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate-haiku', methods=['POST'])
def generate_haiku():
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        store=True,
        messages=[
            {"role": "user", "content": "write a haiku about ai"}
        ]
    )
    
    haiku = completion.choices[0].message.content
    print("Generated Haiku:", haiku)
    
    return jsonify({
        "haiku": haiku
    })

if __name__ == '__main__':
    app.run(debug=True)
    # app.run(host='0.0.0.0', port=10000, debug=True)
