include sources.mk

OBJ=${SRC:.c=.o}
CC=gcc
CFLAGS=-Wall -Werror -Wextra -std=c11 -c -I../include
TARGET=libmy.a

.PHONY: all

all: $(TARGET)

$(TARGET):
	$(CC) $(CFLAGS) $(SRC)
	mv *.o my
	ar -rc $(TARGET) $(OBJ)
	ranlib $(TARGET)

clean:
	rm -rf $(OBJ)

fclean: clean
	rm -rf $(TARGET)

re: fclean all
