/*
** ETNA PROJECT, 2022
** MY_RPG
** File description
** 		fight.c
*/

#include "../include/my.h"
#include "../include/rpg.h"

void heal_player(Player_t **player_a);
void attack_player(Player_t **player_a, Enemy_t **enemy_a);
void heal_player(Player_t **player_a);
void attack_enemy(Enemy_t **enemy_a, Player_t **player_a);

int player_action() {
    char *player_choice;

    my_putstr("1 - Attack\t2 - Heal\n");
    do {
        player_choice = my_readline();
    } while (my_strcmp(player_choice, "1") && my_strcmp(player_choice, "2" ));
    if (my_strcmp(player_choice, "1") == 0)
        return (1);
    return (2);
}

void fight_enemy(Player_t **player, Enemy_t **enemy)
{
    while ((*enemy)->hp > 0 && (*player)->hp > 0) {
        if (player_action() == 1)
            attack_player(player, enemy);
        else
            heal_player(player);
        if ((*enemy)->hp > 0)
            attack_enemy(enemy, player);
    }
    if ((*enemy)->hp <= 0) {
        my_putstr("You have defeated ");
        my_putstr((*enemy)->name);
        my_putstr("!\n");
    }   
}
