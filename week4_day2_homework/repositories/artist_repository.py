import imp
from db.run_sql import run_sql
from models.album import Album
from models.artist import Artist

def select_all():  
    artists = [] 

    sql = "SELECT * FROM artists"
    results = run_sql(sql)

    for row in results:
        artist = Artist(row['first_name'], row['last_name'], row['id'] )
        artists.append(artist)
    return artists 

def select(id):
    artist = None
    sql = "SELECT * FROM artists WHERE id = %s"
    values = [id]
    result = run_sql(sql, values)[0]
    if result is not None:
        artist = Artist(result['first_name'], result['last_name'])
    return artist

def save(artist):
    sql = "INSERT INTO artists (first_name, last_name) VALUES (%s, %s) RETURNING *"
    values = [artist.first_name, artist.last_name]
    results = run_sql(sql, values)
    id = results[0][0]
    artist.id = id
    return artist

def delete_all():
    sql = "DELETE FROM artists"
    run_sql(sql)

def delete(id):
    sql = "DELETE FROM artists WHERE is = %s"
    values = [id]
    run_sql(sql, values)

def update(artist):
    sql = "UPDATE artists SET (first_name, last_name) = (%s, %s) WHERE id = %s"
    values = [artist.first_name, artist.last_name, artist.id]
    run_sql(sql, values)

def albums(artist):
    albums = []
    sql = "SELECT * FROM albums WHERE artist_id = %s"
    values = [artist.id]
    results = run_sql(sql, values)
    for row in results:
        album = Album(row['title'], artist, row['songs'], row['genre'], row['id'])
        albums.append(album)
    return albums