from models.book import Book
from flask import Flask, redirect, render_template, request
from flask import Blueprint
from repositories import author_repository
from repositories import book_repository
import pdb

books_blueprint = Blueprint("books", __name__)

@books_blueprint.route("/books")
def books():
    books = book_repository.select_all()
    return render_template("books/index.html", all_books = books) 

@books_blueprint.route("/books/new", methods=['GET'])
def new_book():
    authors = author_repository.select_all()
    return render_template("/books/new.html", all_authors = authors)

@books_blueprint.route('/books', methods=['POST'])
def add_book():
    author_id = request.form['author_id']
    title = request.form['title']
    pages = request.form['pages']
    author = author_repository.select(author_id)
    book = Book(author, title, pages)
    book_repository.save(book)
    return redirect('/books')

@books_blueprint.route("/books/<id>", methods=['GET'])
def show_books(id):
    book = book_repository.select(id)
    return render_template('books/show.html', book = book)

@books_blueprint.route("/books/<id>/edit", methods=['GET'])
def edit_books(id):
    book = book_repository.select(id)
    authors = author_repository.select_all()
    return render_template('books/edit.html', book = book, all_authors = authors)

@books_blueprint.route("/books/<id>", methods=['POST'])
def update_book(id):
    author_id = request.form['author_id']
    title = request.form['title']
    pages = request.form['pages']
    author = author_repository.select(author_id)
    book = Book(author, title, pages, id)
    book_repository.update(book)
    return redirect('/books')

@books_blueprint.route("/books/<id>/delete", methods=['POST'])
def delete_book(id):
    book_repository.delete(id)
    return redirect('/books')