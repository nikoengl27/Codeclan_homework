import pdb
from models.album import Album
from models.artist import Artist
import repositories.album_repository as album_repository
import repositories.artist_repository as artist_repository


artist1 = Artist("Bob", "Marley")
artist_repository.save(artist1)

artist2 = Artist("Giorgos", "Dalaras")
artist_repository.save(artist2)

album1 = Album("Greatest Hits", artist1, 15, "Reggae",)
album_repository.save(album1)

album2 = Album("Reggae Roots", artist1, 13, "Reggae") 
album_repository.save(album2)

artist_repository.delete_all()
album_repository.delete_all()

pdb.set_trace()
