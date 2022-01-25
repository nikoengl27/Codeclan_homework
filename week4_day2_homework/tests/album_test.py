import unittest
from models.album import Album

class TestAlbum(unittest.TestCase):

    def setUp(self):
        self.album = Album("Bulletproof", "50 cent", 13, "Rap")

    def test_album_has_title(self):
        self.assertEqual("Bulletproof", self.album.title)

    def test_album_has_artist(self):
        self.assertEqual("50 cent", self.album.artist)
    
    def test_album_has_songs(self):
        self.assertEqual(13, self.album.songs)
    
    def test_album_has_genre(self):
        self.assertEqual("Rap", self.album.genre)
