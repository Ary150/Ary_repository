 /*
** ETNA PROJECT, 2022
** MY_RPG
** File description
** 		main.c
*/

#include <stdlib.h>
#include "../include/my.h"
#include "../include/rpg.h"

int init_game();

int menu()
{
    char *user_choice;

    my_putstr("1 - New Game\t2 - Quit\n");
    do {
        user_choice = my_readline();
    } while (my_strcmp(user_choice, "1") && my_strcmp(user_choice, "2"));
    if (my_strcmp(user_choice, "2"))
        return (1);
    return (0);
}

void game_start()
{
    my_putstr("\e[1;1H\e[2J");
    my_putstr("Game start\n");
    init_game();
}

int main()
{
    my_putstr("\e[1;1H\e[2J");
    if (menu())
        game_start();
}
