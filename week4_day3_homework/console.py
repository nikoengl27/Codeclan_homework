import pdb
from models.author import Author
from models.book import Book
import repositories.author_repository as author_repository
import repositories.book_repository as book_repository

# book_repository.delete_all()
# author_repository.delete_all()


author1 = Author("Stephen", "King")
author_repository.save(author1)
author2 = Author("Charles", "Dickens")
author_repository.save(author2)
author3 = Author("J.K", "Rolling")
author_repository.save(author3)

author_repository.select_all()

book1 = Book(author1, "Oliver Twist", 150)
book_repository.save(book1)
book2 = Book(author2, "The Shining", 135)
book_repository.save(book2)
book3 = Book(author3, "Potter VS Super Mario", 200)
book_repository.save(book3)


pdb.set_trace()