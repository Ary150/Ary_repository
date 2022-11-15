/*
** ETNA PROJECT, 2022
** MY_RPG
** File description
** 		create_function.c
*/

#include "../include/rpg.h"

Player_t *new_player(Player_t *player_arr);
Enemy_t *new_enemy(Enemy_t *enemy_arr);

Player_t *create_player(Player_t **player_arr)
{
    return (new_player(player_arr[0]));
}

Enemy_t *create_enemy(Enemy_t **enemy_arr)
{
    return (new_enemy(enemy_arr[0]));
}

/*
Boss_t *create_boss(Boss_t **boss_arr)
{
    return (new_boss(boss_arr[0]));
    }*/
