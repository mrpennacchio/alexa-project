{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"Here is your expected travel time."},
    "card": {
      "type": "Simple",
      "title": "Travel time from "+ startCity + " to " + endCity ".",
      "content": "Your approximate travel time from "+ startCity + " to " + endCity "\nis " + travelDuration + "."
    }
  }
}
