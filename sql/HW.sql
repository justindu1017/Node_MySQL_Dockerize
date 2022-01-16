ALTER USER 'test'@'%' IDENTIFIED WITH mysql_native_password BY 'test';
FLUSH PRIVILEGES;


GRANT ALL PRIVILEGES ON books.* TO 'test'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

use books;

drop table if exists books;


 create table books(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    bookName VARCHAR(100) NOT NULL,
    review VARCHAR(200) NOT NULL
 );



insert into books (bookName, review) values ("ooo", "aaa");