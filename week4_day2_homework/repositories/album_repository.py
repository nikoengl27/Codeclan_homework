from cProfile import run
from db.run_sql import run_sql
from models.album import Album
from models.artist import Artist
from repositories import artist_repository

def select_all():
    albums = []

    sql = "SELECT * FROM albums"
    results = run_sql(sql)

    for row in results:
        artist = artist_repository.select(row['artist_id'])
        album = Album(row['title'], artist, row['songs'], row['genre'], row['id]'])
        albums.append(album)
    return albums

def select(id):
    album = None
    sql = "SELECT * FROM albums WHERE id = %s"
    values = [id]
    result = run_sql(sql, values)[0]
    if result is not None:
        artist = artist_repository.select(result['artist_id'])
        album = Album(result['description'], artist, result['duration'], result['completed'], result['id'])
    return album 

def save(album):
    sql = "INSERT INTO albums (title, artist_id, songs, genre) VALUES (%s, %s, %s, %s) RETURNING *"
    values = [album.title, album.artist.id, album.songs, album.genre]
    results = run_sql(sql, values)
    id = results[0]['id']
    album.id = id
    return album

def delete_all():
    sql = "DELETE FROM albums"
    run_sql(sql)

def delete(id):
    sql = "DELETE FROM albums WHERE id = %s"
    values = [id]
    run_sql(sql, values)

def update(album):
    sql = "UPDATE albums SET (title, artist, songs, genre) = (%s, %s, %s, %s) WHERE id = %s"
    values = [album.title, album.artist.id, album.songs, album.genre, album.id]
    run_sql(sql, values)