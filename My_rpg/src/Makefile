NAME	= program

CC	= gcc

RM	= rm -f

SRCS	= ./create_function.c \
	  ./enemies_action.c \
	  ./fight.c \
	  ./game.c \
	  ./init_boss.c \
	  ./init_enemies.c \
	  ./init_player.c \
	  ./main.c \
	  ./players_action.c 

OBJS	= $(SRCS:.c=.o)

CFLAGS = -I 
CFLAGS += -Wall -Wextra

all: $(NAME)

$(NAME): $(OBJS)
	 $(CC) $(OBJS) -o $(NAME) $(LDFLAGS)

clean:
	$(RM) $(OBJS)

fclean: clean
	$(RM) $(NAME)

re: fclean all

.PHONY: all clean fclean re
