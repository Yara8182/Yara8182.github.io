import requests

def get_book_by_title(tiltle):
    response = requests.get (f`https://openliberary.org/search.jason?q=\{tiltle}`)
    return response.text

    response = get_book_by_title()                         