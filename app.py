from flask import Flask, jsonify


api_key = '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'
app = Flask(__name__)

@app.route("/prompt")
def prompt():
    data = {'name': 'David'}
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
